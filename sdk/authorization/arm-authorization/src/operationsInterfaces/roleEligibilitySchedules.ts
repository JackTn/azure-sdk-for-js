/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RoleEligibilitySchedule,
  RoleEligibilitySchedulesListForScopeOptionalParams,
  RoleEligibilitySchedulesGetOptionalParams,
  RoleEligibilitySchedulesGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RoleEligibilitySchedules. */
export interface RoleEligibilitySchedules {
  /**
   * Gets role eligibility schedules for a resource scope.
   * @param scope The scope of the role eligibility schedules.
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    options?: RoleEligibilitySchedulesListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleEligibilitySchedule>;
  /**
   * Get the specified role eligibility schedule for a resource scope
   * @param scope The scope of the role eligibility schedule.
   * @param roleEligibilityScheduleName The name (guid) of the role eligibility schedule to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleEligibilityScheduleName: string,
    options?: RoleEligibilitySchedulesGetOptionalParams
  ): Promise<RoleEligibilitySchedulesGetResponse>;
}
