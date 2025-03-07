// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ICachePlugin, INativeBrokerPlugin } from "@azure/msal-node";
import {
  PluginConfiguration,
  generatePluginConfiguration,
  msalNodeFlowCacheControl,
  msalNodeFlowNativeBrokerControl,
} from "../../../src/msal/nodeFlows/msalPlugins";

import { MsalClientOptions } from "../../../src/msal/nodeFlows/msalClient";
import { assert } from "@azure/test-utils";

describe("#generatePluginConfiguration", function () {
  let options: MsalClientOptions;

  beforeEach(() => {
    options = {};
  });

  it("returns a PluginConfiguration with default values", function () {
    const result = generatePluginConfiguration(options);
    const expected: PluginConfiguration = {
      cache: {},
      broker: {
        enableMsaPassthrough: false,
        parentWindowHandle: undefined,
      },
    };
    assert.deepEqual(result, expected);
  });

  describe("with token cache persistence enabled", function () {
    afterEach(() => {
      msalNodeFlowCacheControl.setPersistence(undefined as any);
    });

    it("should throw an error if persistence provider is not configured", () => {
      options.tokenCachePersistenceOptions = { enabled: true };
      assert.throws(
        () => generatePluginConfiguration(options),
        /Persistent token caching was requested/,
      );
    });

    it("configures the cache plugin correctly", async function () {
      options.tokenCachePersistenceOptions = { enabled: true };
      // TODO: use stub
      const cachePlugin: ICachePlugin = {
        afterCacheAccess: async () => {
          // no-op
        },
        beforeCacheAccess: async () => {
          // no-op
        },
      };
      const pluginProvider: () => Promise<ICachePlugin> = () => Promise.resolve(cachePlugin);
      msalNodeFlowCacheControl.setPersistence(pluginProvider);
      const result = generatePluginConfiguration(options);
      assert.exists(result.cache.cachePlugin);
      const plugin = await result.cache.cachePlugin;
      assert.strictEqual(plugin, cachePlugin);
    });
  });

  describe("with native broker enabled", function () {
    const parentWindowHandle: Uint8Array = new TextEncoder().encode("handle");

    afterEach(() => {
      msalNodeFlowNativeBrokerControl.setNativeBroker(undefined as any);
    });

    it("throws an error if native broker is not configured", () => {
      options.brokerOptions = { enabled: true, parentWindowHandle };
      assert.throws(
        () => generatePluginConfiguration(options),
        /Broker for WAM was requested to be enabled/,
      );
    });

    it("configures the native broker plugin correctly", function () {
      options.brokerOptions = {
        enabled: true,
        parentWindowHandle,
        legacyEnableMsaPassthrough: true,
      };
      const nativeBrokerPlugin: INativeBrokerPlugin = {} as INativeBrokerPlugin;
      msalNodeFlowNativeBrokerControl.setNativeBroker(nativeBrokerPlugin);

      const result = generatePluginConfiguration(options);
      assert.strictEqual(result.broker.nativeBrokerPlugin, nativeBrokerPlugin);
      assert.strictEqual(result.broker.enableMsaPassthrough, true);
      assert.strictEqual(result.broker.parentWindowHandle, parentWindowHandle);
    });
  });
});
