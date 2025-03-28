/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PatchSchedules } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RedisManagementClient } from "../redisManagementClient.js";
import {
  RedisPatchSchedule,
  PatchSchedulesListByRedisResourceNextOptionalParams,
  PatchSchedulesListByRedisResourceOptionalParams,
  PatchSchedulesListByRedisResourceResponse,
  DefaultName,
  PatchSchedulesCreateOrUpdateOptionalParams,
  PatchSchedulesCreateOrUpdateResponse,
  PatchSchedulesDeleteOptionalParams,
  PatchSchedulesGetOptionalParams,
  PatchSchedulesGetResponse,
  PatchSchedulesListByRedisResourceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PatchSchedules operations. */
export class PatchSchedulesImpl implements PatchSchedules {
  private readonly client: RedisManagementClient;

  /**
   * Initialize a new instance of the class PatchSchedules class.
   * @param client Reference to the service client
   */
  constructor(client: RedisManagementClient) {
    this.client = client;
  }

  /**
   * Gets all patch schedules in the specified redis cache (there is only one).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName The name of the Redis cache.
   * @param options The options parameters.
   */
  public listByRedisResource(
    resourceGroupName: string,
    cacheName: string,
    options?: PatchSchedulesListByRedisResourceOptionalParams,
  ): PagedAsyncIterableIterator<RedisPatchSchedule> {
    const iter = this.listByRedisResourcePagingAll(
      resourceGroupName,
      cacheName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByRedisResourcePagingPage(
          resourceGroupName,
          cacheName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByRedisResourcePagingPage(
    resourceGroupName: string,
    cacheName: string,
    options?: PatchSchedulesListByRedisResourceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RedisPatchSchedule[]> {
    let result: PatchSchedulesListByRedisResourceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRedisResource(
        resourceGroupName,
        cacheName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRedisResourceNext(
        resourceGroupName,
        cacheName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRedisResourcePagingAll(
    resourceGroupName: string,
    cacheName: string,
    options?: PatchSchedulesListByRedisResourceOptionalParams,
  ): AsyncIterableIterator<RedisPatchSchedule> {
    for await (const page of this.listByRedisResourcePagingPage(
      resourceGroupName,
      cacheName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all patch schedules in the specified redis cache (there is only one).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName The name of the Redis cache.
   * @param options The options parameters.
   */
  private _listByRedisResource(
    resourceGroupName: string,
    cacheName: string,
    options?: PatchSchedulesListByRedisResourceOptionalParams,
  ): Promise<PatchSchedulesListByRedisResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, options },
      listByRedisResourceOperationSpec,
    );
  }

  /**
   * Create or replace the patching schedule for Redis cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name The name of the Redis cache.
   * @param defaultParam Default string modeled as parameter for auto generation to work correctly.
   * @param parameters Parameters to set the patching schedule for Redis cache.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    name: string,
    defaultParam: DefaultName,
    parameters: RedisPatchSchedule,
    options?: PatchSchedulesCreateOrUpdateOptionalParams,
  ): Promise<PatchSchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, defaultParam, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the patching schedule of a redis cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name The name of the redis cache.
   * @param defaultParam Default string modeled as parameter for auto generation to work correctly.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    defaultParam: DefaultName,
    options?: PatchSchedulesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, defaultParam, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets the patching schedule of a redis cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name The name of the redis cache.
   * @param defaultParam Default string modeled as parameter for auto generation to work correctly.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    defaultParam: DefaultName,
    options?: PatchSchedulesGetOptionalParams,
  ): Promise<PatchSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, defaultParam, options },
      getOperationSpec,
    );
  }

  /**
   * ListByRedisResourceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName The name of the Redis cache.
   * @param nextLink The nextLink from the previous successful call to the ListByRedisResource method.
   * @param options The options parameters.
   */
  private _listByRedisResourceNext(
    resourceGroupName: string,
    cacheName: string,
    nextLink: string,
    options?: PatchSchedulesListByRedisResourceNextOptionalParams,
  ): Promise<PatchSchedulesListByRedisResourceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, nextLink, options },
      listByRedisResourceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByRedisResourceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/patchSchedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchScheduleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchSchedule,
    },
    201: {
      bodyMapper: Mappers.RedisPatchSchedule,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParam,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParam,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchSchedule,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParam,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByRedisResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchScheduleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
