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
  FleetUpdateStrategy,
  FleetUpdateStrategiesListByFleetOptionalParams,
  FleetUpdateStrategiesGetOptionalParams,
  FleetUpdateStrategiesGetResponse,
  FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  FleetUpdateStrategiesCreateOrUpdateResponse,
  FleetUpdateStrategiesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FleetUpdateStrategies. */
export interface FleetUpdateStrategies {
  /**
   * List FleetUpdateStrategy resources by Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  listByFleet(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetUpdateStrategiesListByFleetOptionalParams,
  ): PagedAsyncIterableIterator<FleetUpdateStrategy>;
  /**
   * Get a FleetUpdateStrategy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateStrategyName The name of the UpdateStrategy resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesGetOptionalParams,
  ): Promise<FleetUpdateStrategiesGetResponse>;
  /**
   * Create a FleetUpdateStrategy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateStrategyName The name of the UpdateStrategy resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    resource: FleetUpdateStrategy,
    options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FleetUpdateStrategiesCreateOrUpdateResponse>,
      FleetUpdateStrategiesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a FleetUpdateStrategy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateStrategyName The name of the UpdateStrategy resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    resource: FleetUpdateStrategy,
    options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  ): Promise<FleetUpdateStrategiesCreateOrUpdateResponse>;
  /**
   * Delete a FleetUpdateStrategy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateStrategyName The name of the UpdateStrategy resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a FleetUpdateStrategy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateStrategyName The name of the UpdateStrategy resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesDeleteOptionalParams,
  ): Promise<void>;
}
