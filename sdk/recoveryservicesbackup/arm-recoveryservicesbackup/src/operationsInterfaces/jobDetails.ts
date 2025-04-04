/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { JobDetailsGetOptionalParams, JobDetailsGetResponse } from "../models/index.js";

/** Interface representing a JobDetails. */
export interface JobDetails {
  /**
   * Gets extended information associated with the job.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Name of the job whose details are to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    jobName: string,
    options?: JobDetailsGetOptionalParams,
  ): Promise<JobDetailsGetResponse>;
}
