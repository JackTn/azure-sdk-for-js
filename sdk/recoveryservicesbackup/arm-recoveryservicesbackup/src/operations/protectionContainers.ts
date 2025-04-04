/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ProtectionContainers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ProtectionContainersGetOptionalParams,
  ProtectionContainersGetResponse,
  ProtectionContainerResource,
  ProtectionContainersRegisterOptionalParams,
  ProtectionContainersRegisterResponse,
  ProtectionContainersUnregisterOptionalParams,
  ProtectionContainersInquireOptionalParams,
  ProtectionContainersRefreshOptionalParams,
} from "../models/index.js";

/** Class containing ProtectionContainers operations. */
export class ProtectionContainersImpl implements ProtectionContainers {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ProtectionContainers class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Gets details of the specific container registered to your Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container whose details need to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersGetOptionalParams,
  ): Promise<ProtectionContainersGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, containerName, options },
      getOperationSpec,
    );
  }

  /**
   * Registers the container with Recovery Services vault.
   * This is an asynchronous operation. To track the operation status, use location header to call get
   * latest status of
   * the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginRegister(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    parameters: ProtectionContainerResource,
    options?: ProtectionContainersRegisterOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectionContainersRegisterResponse>,
      ProtectionContainersRegisterResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProtectionContainersRegisterResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        parameters,
        options,
      },
      spec: registerOperationSpec,
    });
    const poller = await createHttpPoller<
      ProtectionContainersRegisterResponse,
      OperationState<ProtectionContainersRegisterResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Registers the container with Recovery Services vault.
   * This is an asynchronous operation. To track the operation status, use location header to call get
   * latest status of
   * the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  async beginRegisterAndWait(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    parameters: ProtectionContainerResource,
    options?: ProtectionContainersRegisterOptionalParams,
  ): Promise<ProtectionContainersRegisterResponse> {
    const poller = await this.beginRegister(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Unregisters the given container from your Recovery Services Vault. This is an asynchronous
   * operation. To determine
   * whether the backend service has finished processing the request, call Get Container Operation Result
   * API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery Services
   *                      Vault.
   * @param options The options parameters.
   */
  unregister(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersUnregisterOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, containerName, options },
      unregisterOperationSpec,
    );
  }

  /**
   * This is an async operation and the results should be tracked using location header or
   * Azure-async-url.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric Name associated with the container.
   * @param containerName Name of the container in which inquiry needs to be triggered.
   * @param options The options parameters.
   */
  inquire(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersInquireOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, containerName, options },
      inquireOperationSpec,
    );
  }

  /**
   * Discovers all the containers in the subscription that can be backed up to Recovery Services Vault.
   * This is an
   * asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated the container.
   * @param options The options parameters.
   */
  refresh(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectionContainersRefreshOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, options },
      refreshOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const registerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResource,
    },
    201: {
      bodyMapper: Mappers.ProtectionContainerResource,
    },
    202: {
      bodyMapper: Mappers.ProtectionContainerResource,
    },
    204: {
      bodyMapper: Mappers.ProtectionContainerResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const unregisterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const inquireOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/inquire",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const refreshOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/refreshContainers",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
