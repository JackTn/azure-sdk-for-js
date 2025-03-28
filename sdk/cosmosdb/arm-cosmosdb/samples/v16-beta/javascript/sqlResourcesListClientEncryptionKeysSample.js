/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Lists the ClientEncryptionKeys under an existing Azure Cosmos DB SQL database.
 *
 * @summary Lists the ClientEncryptionKeys under an existing Azure Cosmos DB SQL database.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlClientEncryptionKeysList.json
 */
async function cosmosDbClientEncryptionKeysList() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const accountName = "accountName";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlResources.listClientEncryptionKeys(
    resourceGroupName,
    accountName,
    databaseName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cosmosDbClientEncryptionKeysList();
}

main().catch(console.error);
