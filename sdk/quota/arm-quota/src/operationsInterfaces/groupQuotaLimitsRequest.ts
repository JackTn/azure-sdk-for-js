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
  SubmittedResourceRequestStatus,
  GroupQuotaLimitsRequestListOptionalParams,
  GroupQuotaLimitsRequestUpdateOptionalParams,
  GroupQuotaLimitsRequestUpdateResponse,
  GroupQuotaLimitsRequestGetOptionalParams,
  GroupQuotaLimitsRequestGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GroupQuotaLimitsRequest. */
export interface GroupQuotaLimitsRequest {
  /**
   * Get API to check the status of a GroupQuota request by requestId.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param filter | Field | Supported operators
   *               |---------------------|------------------------
   *
   *                location eq {location} and resource eq {resourceName}
   *                Example: $filter=location eq eastus and resourceName eq cores
   * @param options The options parameters.
   */
  list(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    filter: string,
    options?: GroupQuotaLimitsRequestListOptionalParams,
  ): PagedAsyncIterableIterator<SubmittedResourceRequestStatus>;
  /**
   * Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName
   * properties are specified in the request body. Only 1 resource quota can be requested. Please note
   * that patch request creates a new groupQuota request.
   * Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with
   * retry-after duration in seconds to check the intermediate status. This API provides the finals
   * status with the request details and status.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginUpdate(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLimitsRequestUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GroupQuotaLimitsRequestUpdateResponse>,
      GroupQuotaLimitsRequestUpdateResponse
    >
  >;
  /**
   * Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName
   * properties are specified in the request body. Only 1 resource quota can be requested. Please note
   * that patch request creates a new groupQuota request.
   * Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with
   * retry-after duration in seconds to check the intermediate status. This API provides the finals
   * status with the request details and status.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLimitsRequestUpdateOptionalParams,
  ): Promise<GroupQuotaLimitsRequestUpdateResponse>;
  /**
   * Get API to check the status of a GroupQuota request by requestId.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param requestId Request Id.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    groupQuotaName: string,
    requestId: string,
    options?: GroupQuotaLimitsRequestGetOptionalParams,
  ): Promise<GroupQuotaLimitsRequestGetResponse>;
}
