/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ThreatIntelligenceIndicatorMetrics } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SecurityInsights } from "../securityInsights.js";
import {
  ThreatIntelligenceIndicatorMetricsListOptionalParams,
  ThreatIntelligenceIndicatorMetricsListResponse
} from "../models/index.js";

/** Class containing ThreatIntelligenceIndicatorMetrics operations. */
export class ThreatIntelligenceIndicatorMetricsImpl
  implements ThreatIntelligenceIndicatorMetrics {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class ThreatIntelligenceIndicatorMetrics class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ThreatIntelligenceIndicatorMetricsListOptionalParams
  ): Promise<ThreatIntelligenceIndicatorMetricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceMetricsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
