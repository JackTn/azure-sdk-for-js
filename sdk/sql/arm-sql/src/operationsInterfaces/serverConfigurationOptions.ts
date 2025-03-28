/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ServerConfigurationOption,
  ServerConfigurationOptionsListByManagedInstanceOptionalParams,
  ServerConfigurationOptionName,
  ServerConfigurationOptionsGetOptionalParams,
  ServerConfigurationOptionsGetResponse,
  ServerConfigurationOptionsCreateOrUpdateOptionalParams,
  ServerConfigurationOptionsCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerConfigurationOptions. */
export interface ServerConfigurationOptions {
  /**
   * Gets a list of managed instance server configuration options.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ServerConfigurationOptionsListByManagedInstanceOptionalParams,
  ): PagedAsyncIterableIterator<ServerConfigurationOption>;
  /**
   * Gets managed instance server configuration option.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param serverConfigurationOptionName The name of the server configuration option.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    serverConfigurationOptionName: ServerConfigurationOptionName,
    options?: ServerConfigurationOptionsGetOptionalParams,
  ): Promise<ServerConfigurationOptionsGetResponse>;
  /**
   * Updates managed instance server configuration option.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param serverConfigurationOptionName The name of the server configuration option.
   * @param parameters Server configuration option parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    serverConfigurationOptionName: ServerConfigurationOptionName,
    parameters: ServerConfigurationOption,
    options?: ServerConfigurationOptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerConfigurationOptionsCreateOrUpdateResponse>,
      ServerConfigurationOptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates managed instance server configuration option.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param serverConfigurationOptionName The name of the server configuration option.
   * @param parameters Server configuration option parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    serverConfigurationOptionName: ServerConfigurationOptionName,
    parameters: ServerConfigurationOption,
    options?: ServerConfigurationOptionsCreateOrUpdateOptionalParams,
  ): Promise<ServerConfigurationOptionsCreateOrUpdateResponse>;
}
