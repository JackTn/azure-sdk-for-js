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
  ModelVersion,
  ModelVersionsListOptionalParams,
  ModelVersionsDeleteOptionalParams,
  ModelVersionsGetOptionalParams,
  ModelVersionsGetResponse,
  ModelVersionsCreateOrUpdateOptionalParams,
  ModelVersionsCreateOrUpdateResponse,
  DestinationAsset,
  ModelVersionsPublishOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ModelVersions. */
export interface ModelVersions {
  /**
   * List model versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Model name. This is case-sensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ModelVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<ModelVersion>;
  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ModelVersionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ModelVersionsGetOptionalParams,
  ): Promise<ModelVersionsGetResponse>;
  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: ModelVersion,
    options?: ModelVersionsCreateOrUpdateOptionalParams,
  ): Promise<ModelVersionsCreateOrUpdateResponse>;
  /**
   * Publish version asset into registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Destination registry info
   * @param options The options parameters.
   */
  beginPublish(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: DestinationAsset,
    options?: ModelVersionsPublishOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Publish version asset into registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Destination registry info
   * @param options The options parameters.
   */
  beginPublishAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: DestinationAsset,
    options?: ModelVersionsPublishOptionalParams,
  ): Promise<void>;
}
