/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Sims } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MobileNetworkManagementClient } from "../mobileNetworkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Sim,
  SimsListByGroupNextOptionalParams,
  SimsListByGroupOptionalParams,
  SimsListByGroupResponse,
  SimsDeleteOptionalParams,
  SimsGetOptionalParams,
  SimsGetResponse,
  SimsCreateOrUpdateOptionalParams,
  SimsCreateOrUpdateResponse,
  SimUploadList,
  SimsBulkUploadOptionalParams,
  SimsBulkUploadResponse,
  SimDeleteList,
  SimsBulkDeleteOptionalParams,
  SimsBulkDeleteResponse,
  EncryptedSimUploadList,
  SimsBulkUploadEncryptedOptionalParams,
  SimsBulkUploadEncryptedResponse,
  SimMove,
  SimsMoveOptionalParams,
  SimsMoveResponse,
  SimClone,
  SimsCloneOptionalParams,
  SimsCloneResponse,
  SimsListByGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Sims operations. */
export class SimsImpl implements Sims {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class Sims class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the SIMs in a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  public listByGroup(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListByGroupOptionalParams,
  ): PagedAsyncIterableIterator<Sim> {
    const iter = this.listByGroupPagingAll(
      resourceGroupName,
      simGroupName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByGroupPagingPage(
          resourceGroupName,
          simGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByGroupPagingPage(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListByGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Sim[]> {
    let result: SimsListByGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByGroup(
        resourceGroupName,
        simGroupName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByGroupNext(
        resourceGroupName,
        simGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByGroupPagingAll(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListByGroupOptionalParams,
  ): AsyncIterableIterator<Sim> {
    for await (const page of this.listByGroupPagingPage(
      resourceGroupName,
      simGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
      args: { resourceGroupName, simGroupName, simName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      simGroupName,
      simName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsGetOptionalParams,
  ): Promise<SimsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, simName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsCreateOrUpdateResponse>,
      SimsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, simGroupName, simName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsCreateOrUpdateResponse,
      OperationState<SimsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams,
  ): Promise<SimsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      simGroupName,
      simName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the SIMs in a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  private _listByGroup(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListByGroupOptionalParams,
  ): Promise<SimsListByGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, options },
      listByGroupOperationSpec,
    );
  }

  /**
   * Bulk upload SIMs to a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM upload operation.
   * @param options The options parameters.
   */
  async beginBulkUpload(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimUploadList,
    options?: SimsBulkUploadOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkUploadResponse>,
      SimsBulkUploadResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsBulkUploadResponse> => {
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
      args: { resourceGroupName, simGroupName, parameters, options },
      spec: bulkUploadOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsBulkUploadResponse,
      OperationState<SimsBulkUploadResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Bulk upload SIMs to a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM upload operation.
   * @param options The options parameters.
   */
  async beginBulkUploadAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimUploadList,
    options?: SimsBulkUploadOptionalParams,
  ): Promise<SimsBulkUploadResponse> {
    const poller = await this.beginBulkUpload(
      resourceGroupName,
      simGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Bulk delete SIMs from a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM delete operation.
   * @param options The options parameters.
   */
  async beginBulkDelete(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimDeleteList,
    options?: SimsBulkDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkDeleteResponse>,
      SimsBulkDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsBulkDeleteResponse> => {
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
      args: { resourceGroupName, simGroupName, parameters, options },
      spec: bulkDeleteOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsBulkDeleteResponse,
      OperationState<SimsBulkDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Bulk delete SIMs from a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the bulk SIM delete operation.
   * @param options The options parameters.
   */
  async beginBulkDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimDeleteList,
    options?: SimsBulkDeleteOptionalParams,
  ): Promise<SimsBulkDeleteResponse> {
    const poller = await this.beginBulkDelete(
      resourceGroupName,
      simGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Bulk upload SIMs in encrypted form to a SIM group. The SIM credentials must be encrypted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the encrypted SIMs upload operation.
   * @param options The options parameters.
   */
  async beginBulkUploadEncrypted(
    resourceGroupName: string,
    simGroupName: string,
    parameters: EncryptedSimUploadList,
    options?: SimsBulkUploadEncryptedOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimsBulkUploadEncryptedResponse>,
      SimsBulkUploadEncryptedResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsBulkUploadEncryptedResponse> => {
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
      args: { resourceGroupName, simGroupName, parameters, options },
      spec: bulkUploadEncryptedOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsBulkUploadEncryptedResponse,
      OperationState<SimsBulkUploadEncryptedResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Bulk upload SIMs in encrypted form to a SIM group. The SIM credentials must be encrypted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to the encrypted SIMs upload operation.
   * @param options The options parameters.
   */
  async beginBulkUploadEncryptedAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: EncryptedSimUploadList,
    options?: SimsBulkUploadEncryptedOptionalParams,
  ): Promise<SimsBulkUploadEncryptedResponse> {
    const poller = await this.beginBulkUploadEncrypted(
      resourceGroupName,
      simGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Move SIMs to another SIM Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to move the SIMs.
   * @param options The options parameters.
   */
  async beginMove(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimMove,
    options?: SimsMoveOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<SimsMoveResponse>, SimsMoveResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsMoveResponse> => {
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
      args: { resourceGroupName, simGroupName, parameters, options },
      spec: moveOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsMoveResponse,
      OperationState<SimsMoveResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Move SIMs to another SIM Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to move the SIMs.
   * @param options The options parameters.
   */
  async beginMoveAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimMove,
    options?: SimsMoveOptionalParams,
  ): Promise<SimsMoveResponse> {
    const poller = await this.beginMove(
      resourceGroupName,
      simGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Clone SIMs to another SIM Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to clone the SIMs.
   * @param options The options parameters.
   */
  async beginClone(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimClone,
    options?: SimsCloneOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<SimsCloneResponse>, SimsCloneResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimsCloneResponse> => {
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
      args: { resourceGroupName, simGroupName, parameters, options },
      spec: cloneOperationSpec,
    });
    const poller = await createHttpPoller<
      SimsCloneResponse,
      OperationState<SimsCloneResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Clone SIMs to another SIM Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param parameters Parameters supplied to clone the SIMs.
   * @param options The options parameters.
   */
  async beginCloneAndWait(
    resourceGroupName: string,
    simGroupName: string,
    parameters: SimClone,
    options?: SimsCloneOptionalParams,
  ): Promise<SimsCloneResponse> {
    const poller = await this.beginClone(
      resourceGroupName,
      simGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param nextLink The nextLink from the previous successful call to the ListByGroup method.
   * @param options The options parameters.
   */
  private _listByGroupNext(
    resourceGroupName: string,
    simGroupName: string,
    nextLink: string,
    options?: SimsListByGroupNextOptionalParams,
  ): Promise<SimsListByGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, nextLink, options },
      listByGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
    Parameters.simName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Sim,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
    Parameters.simName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Sim,
    },
    201: {
      bodyMapper: Mappers.Sim,
    },
    202: {
      bodyMapper: Mappers.Sim,
    },
    204: {
      bodyMapper: Mappers.Sim,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
    Parameters.simName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const bulkUploadOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/uploadSims",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    201: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    202: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    204: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const bulkDeleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/deleteSims",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    201: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    202: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    204: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const bulkUploadEncryptedOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/uploadEncryptedSims",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    201: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    202: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    204: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const moveOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/moveSims",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    201: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    202: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    204: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const cloneOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/cloneSims",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    201: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    202: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    204: {
      bodyMapper: Mappers.AsyncOperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.simGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
