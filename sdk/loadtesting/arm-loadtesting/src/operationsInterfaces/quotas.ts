/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  QuotaResource,
  QuotasListOptionalParams,
  QuotasGetOptionalParams,
  QuotasGetResponse,
  QuotaBucketRequest,
  QuotasCheckAvailabilityOptionalParams,
  QuotasCheckAvailabilityResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Quotas. */
export interface Quotas {
  /**
   * Lists all the available quota per region per subscription.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: QuotasListOptionalParams
  ): PagedAsyncIterableIterator<QuotaResource>;
  /**
   * Get the available quota for a quota bucket per region per subscription.
   * @param location The name of Azure region.
   * @param quotaBucketName Quota Bucket name.
   * @param options The options parameters.
   */
  get(
    location: string,
    quotaBucketName: string,
    options?: QuotasGetOptionalParams
  ): Promise<QuotasGetResponse>;
  /**
   * Check Quota Availability on quota bucket per region per subscription.
   * @param location The name of Azure region.
   * @param quotaBucketName Quota Bucket name.
   * @param quotaBucketRequest Quota Bucket Request data
   * @param options The options parameters.
   */
  checkAvailability(
    location: string,
    quotaBucketName: string,
    quotaBucketRequest: QuotaBucketRequest,
    options?: QuotasCheckAvailabilityOptionalParams
  ): Promise<QuotasCheckAvailabilityResponse>;
}
