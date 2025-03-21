// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { assert } from "chai";
import * as sinon from "sinon";
import { createXhrHttpClient } from "../../src/xhrHttpClient.js";
import { createPipelineRequest } from "@azure/core-rest-pipeline";

describe("XhrHttpClient", () => {
  let xhrMock: sinon.SinonFakeXMLHttpRequestStatic;
  let requests: Array<sinon.SinonFakeXMLHttpRequest>;
  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    requests = [];
    xhrMock = sinon.useFakeXMLHttpRequest();
    xhrMock.onCreate = (xhr) => {
      requests.push(xhr);
    };
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    xhrMock.restore();
    clock.restore();
    sinon.restore();
  });

  it("shouldn't throw on 404", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({ url: "https://example.com" });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(404, {}, "");
    const response = await promise;
    assert.strictEqual(response.status, 404);
  });

  it("should allow canceling of requests", async () => {
    const client = createXhrHttpClient();
    const controller = new AbortController();
    const request = createPipelineRequest({
      url: "https://example.com",
      abortSignal: controller.signal,
    });
    const promise = client.sendRequest(request);
    controller.abort();
    try {
      await promise;
      assert.fail("Expected await to throw");
    } catch (e: unknown) {
      assert.strictEqual(e instanceof Error, true);
      assert.strictEqual((e as Error).name, "AbortError");
    }
  });

  it("should allow canceling of requests before the request is made", async () => {
    const client = createXhrHttpClient();
    const controller = new AbortController();
    controller.abort();
    const request = createPipelineRequest({
      url: "https://example.com",
      abortSignal: controller.signal,
    });
    const promise = client.sendRequest(request);
    try {
      await promise;
      assert.fail("Expected await to throw");
    } catch (e: unknown) {
      assert.strictEqual(e instanceof Error, true);
      assert.strictEqual((e as Error).name, "AbortError");
    }
  });

  it("should report upload and download progress", async () => {
    const client = createXhrHttpClient();
    let downloadCalled = false;
    let uploadCalled = false;
    const request = createPipelineRequest({
      url: "https://example.com",
      body: "Some kinda witty message",
      onDownloadProgress: (ev) => {
        assert.isNumber(ev.loadedBytes);
        downloadCalled = true;
      },
      onUploadProgress: (ev) => {
        assert.isNumber(ev.loadedBytes);
        uploadCalled = true;
      },
    });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    const responseText = "An appropriate response.";
    requests[0].respond(200, {}, responseText);
    const response = await promise;
    assert.strictEqual(response.bodyAsText, responseText);
    assert.isTrue(downloadCalled, "no download progress");
    assert.isTrue(uploadCalled, "no upload progress");
  });

  it("should honor timeout", async () => {
    const client = createXhrHttpClient();

    const timeoutLength = 2000;
    const request = createPipelineRequest({
      url: "https://example.com",
      timeout: timeoutLength,
    });
    const promise = client.sendRequest(request);
    clock.tick(timeoutLength);
    try {
      await promise;
      assert.fail("Expected await to throw");
    } catch (e: unknown) {
      assert.strictEqual(e instanceof Error, true);
      assert.strictEqual((e as Error).name, "AbortError");
    }
  });

  it("parses headers", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({ url: "https://example.com" });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(200, { "Content-Length": 42, value: "hello" }, "");
    const response = await promise;
    const headers = response.headers;
    assert.strictEqual(headers.get("content-length"), "42");
    assert.strictEqual(headers.get("value"), "hello");
  });

  it("parses empty string headers", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({ url: "https://example.com" });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(200, { "Content-Type": "", value: "" }, "");
    const response = await promise;
    const headers = response.headers;
    assert.strictEqual(headers.get("content-type"), "");
    assert.strictEqual(headers.get("value"), "");
  });

  it("should stream response body on matching status code", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({
      url: "https://example.com",
      streamResponseStatusCodes: new Set([200]),
    });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(200, {}, "body");
    const response = await promise;
    assert.strictEqual(response.status, 200);
    assert.equal(response.bodyAsText, undefined);
    assert.ok(response.blobBody, "Expect streaming body");
  });

  it("should stream response body on any status code", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({
      url: "https://example.com",
      streamResponseStatusCodes: new Set([Number.POSITIVE_INFINITY]),
    });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(201, {}, "body");
    const response = await promise;
    assert.strictEqual(response.status, 201);
    assert.equal(response.bodyAsText, undefined);
    assert.ok(response.blobBody, "Expect streaming body");
  });

  it("should not stream response body on non-matching status code", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({
      url: "https://example.com",
      streamResponseStatusCodes: new Set([200]),
    });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(404, {}, "body");
    const response = await promise;
    assert.strictEqual(response.status, 404);
    assert.strictEqual(response.blobBody, undefined);
    assert.equal(response.bodyAsText, "body");
  });

  it("should throw when accessing HTTP and allowInsecureConnection is false", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({
      url: "http://example.com",
    });
    const promise = client.sendRequest(request);
    try {
      await promise;
      assert.fail("Expected await to throw");
    } catch (e: unknown) {
      assert.strictEqual(e instanceof Error, true);
      assert.match((e as Error).message, /^Cannot connect/, "Error should refuse connection");
    }
  });

  it("shouldn't throw when accessing HTTP and allowInsecureConnection is true", async () => {
    const client = createXhrHttpClient();
    const request = createPipelineRequest({
      allowInsecureConnection: true,
      url: "http://example.com",
    });
    const promise = client.sendRequest(request);
    assert.equal(requests.length, 1);
    requests[0].respond(200, {}, "");
    const response = await promise;
    assert.strictEqual(response.status, 200);
  });
});
