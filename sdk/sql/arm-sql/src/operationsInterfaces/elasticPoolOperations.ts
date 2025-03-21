/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ElasticPoolOperation,
  ElasticPoolOperationsListByElasticPoolOptionalParams,
  ElasticPoolOperationsCancelOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ElasticPoolOperations. */
export interface ElasticPoolOperations {
  /**
   * Gets a list of operations performed on the elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param options The options parameters.
   */
  listByElasticPool(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolOperationsListByElasticPoolOptionalParams,
  ): PagedAsyncIterableIterator<ElasticPoolOperation>;
  /**
   * Cancels the asynchronous operation on the elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param operationId The operation identifier.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    operationId: string,
    options?: ElasticPoolOperationsCancelOptionalParams,
  ): Promise<void>;
}
