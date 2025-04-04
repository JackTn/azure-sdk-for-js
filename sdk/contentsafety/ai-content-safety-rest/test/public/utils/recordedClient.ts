// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RecorderStartOptions, TestInfo } from "@azure-tools/test-recorder";
import { Recorder, assertEnvironmentVariable } from "@azure-tools/test-recorder";
import "./env.js";
import type { ContentSafetyClient } from "../../../src/index.js";
import ContentSafety from "../../../src/index.js";
import { AzureKeyCredential } from "@azure/core-auth";
// import { ClientOptions } from "@azure-rest/core-client";

const envSetupForPlayback: Record<string, string> = {
  CONTENT_SAFETY_ENDPOINT: "https://endpoint/",
  CONTENT_SAFETY_API_KEY: "fake_key",
};

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback,
};

/**
 * creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export async function createRecorder(context: TestInfo): Promise<Recorder> {
  const recorder = new Recorder(context);
  await recorder.start(recorderEnvSetup);
  return recorder;
}

export function createClient(recorder: Recorder): ContentSafetyClient {
  const endpoint = assertEnvironmentVariable("CONTENT_SAFETY_ENDPOINT");
  const key = assertEnvironmentVariable("CONTENT_SAFETY_API_KEY");
  const credential = new AzureKeyCredential(key);
  const client = ContentSafety(endpoint, credential, recorder.configureClientOptions({}));
  return client;
}
