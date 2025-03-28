/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExpressRouteLink,
  ExpressRouteLinksListOptionalParams,
  ExpressRouteLinksGetOptionalParams,
  ExpressRouteLinksGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteLinks. */
export interface ExpressRouteLinks {
  /**
   * Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRouteLinksListOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRouteLink>;
  /**
   * Retrieves the specified ExpressRouteLink resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param linkName The name of the ExpressRouteLink resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    expressRoutePortName: string,
    linkName: string,
    options?: ExpressRouteLinksGetOptionalParams,
  ): Promise<ExpressRouteLinksGetResponse>;
}
