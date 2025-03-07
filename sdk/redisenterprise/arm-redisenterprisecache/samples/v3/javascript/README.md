# client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                                           | **Description**                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [databasesCreateSample.js][databasescreatesample]                                       | Creates a database x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesCreate.json                                                                                                       |
| [databasesDeleteSample.js][databasesdeletesample]                                       | Deletes a single database x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesDelete.json                                                                                                |
| [databasesExportSample.js][databasesexportsample]                                       | Exports a database file from target database. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesExport.json                                                                            |
| [databasesFlushSample.js][databasesflushsample]                                         | Flushes all the keys in this database and also from its linked databases. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesFlush.json                                                 |
| [databasesForceUnlinkSample.js][databasesforceunlinksample]                             | Forcibly removes the link to the specified database resource. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesForceUnlink.json                                                       |
| [databasesGetSample.js][databasesgetsample]                                             | Gets information about a database in a RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesGet.json                                                             |
| [databasesImportSample.js][databasesimportsample]                                       | Imports database files to target database. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesImport.json                                                                               |
| [databasesListByClusterSample.js][databaseslistbyclustersample]                         | Gets all databases in the specified RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesListByCluster.json                                                      |
| [databasesListKeysSample.js][databaseslistkeyssample]                                   | Retrieves the access keys for the RedisEnterprise database. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesListKeys.json                                                            |
| [databasesRegenerateKeySample.js][databasesregeneratekeysample]                         | Regenerates the RedisEnterprise database's access keys. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesRegenerateKey.json                                                           |
| [databasesUpdateSample.js][databasesupdatesample]                                       | Updates a database x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDatabasesUpdate.json                                                                                                       |
| [operationsListSample.js][operationslistsample]                                         | Lists all of the available REST API operations of the Microsoft.Cache provider. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/OperationsList.json                                                          |
| [operationsStatusGetSample.js][operationsstatusgetsample]                               | Gets the status of operation. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/OperationsStatusGet.json                                                                                                       |
| [privateEndpointConnectionsDeleteSample.js][privateendpointconnectionsdeletesample]     | Deletes the specified private endpoint connection associated with the RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDeletePrivateEndpointConnection.json           |
| [privateEndpointConnectionsGetSample.js][privateendpointconnectionsgetsample]           | Gets the specified private endpoint connection associated with the RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseGetPrivateEndpointConnection.json                 |
| [privateEndpointConnectionsListSample.js][privateendpointconnectionslistsample]         | Lists all the private endpoint connections associated with the RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseListPrivateEndpointConnections.json                   |
| [privateEndpointConnectionsPutSample.js][privateendpointconnectionsputsample]           | Updates the state of the specified private endpoint connection associated with the RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterprisePutPrivateEndpointConnection.json |
| [privateLinkResourcesListByClusterSample.js][privatelinkresourceslistbyclustersample]   | Gets the private link resources that need to be created for a RedisEnterprise cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseListPrivateLinkResources.json                          |
| [redisEnterpriseCreateSample.js][redisenterprisecreatesample]                           | Creates or updates an existing (overwrite/recreate, with potential downtime) cache cluster x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseCreate.json                                        |
| [redisEnterpriseDeleteSample.js][redisenterprisedeletesample]                           | Deletes a RedisEnterprise cache cluster. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseDelete.json                                                                                          |
| [redisEnterpriseGetSample.js][redisenterprisegetsample]                                 | Gets information about a RedisEnterprise cluster x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseGet.json                                                                                     |
| [redisEnterpriseListByResourceGroupSample.js][redisenterpriselistbyresourcegroupsample] | Lists all RedisEnterprise clusters in a resource group. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseListByResourceGroup.json                                                              |
| [redisEnterpriseListSample.js][redisenterpriselistsample]                               | Gets all RedisEnterprise clusters in the specified subscription. x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseList.json                                                                    |
| [redisEnterpriseUpdateSample.js][redisenterpriseupdatesample]                           | Updates an existing RedisEnterprise cluster x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2023-11-01/examples/RedisEnterpriseUpdate.json                                                                                       |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node databasesCreateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env REDISENTERPRISE_SUBSCRIPTION_ID="<redisenterprise subscription id>" REDISENTERPRISE_RESOURCE_GROUP="<redisenterprise resource group>" REDISENTERPRISE_SUBSCRIPTION_ID="<redisenterprise subscription id>" REDISENTERPRISE_RESOURCE_GROUP="<redisenterprise resource group>" node databasesCreateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[databasescreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesCreateSample.js
[databasesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesDeleteSample.js
[databasesexportsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesExportSample.js
[databasesflushsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesFlushSample.js
[databasesforceunlinksample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesForceUnlinkSample.js
[databasesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesGetSample.js
[databasesimportsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesImportSample.js
[databaseslistbyclustersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesListByClusterSample.js
[databaseslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesListKeysSample.js
[databasesregeneratekeysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesRegenerateKeySample.js
[databasesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/databasesUpdateSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/operationsListSample.js
[operationsstatusgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/operationsStatusGetSample.js
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/privateEndpointConnectionsDeleteSample.js
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/privateEndpointConnectionsGetSample.js
[privateendpointconnectionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/privateEndpointConnectionsListSample.js
[privateendpointconnectionsputsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/privateEndpointConnectionsPutSample.js
[privatelinkresourceslistbyclustersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/privateLinkResourcesListByClusterSample.js
[redisenterprisecreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseCreateSample.js
[redisenterprisedeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseDeleteSample.js
[redisenterprisegetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseGetSample.js
[redisenterpriselistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseListByResourceGroupSample.js
[redisenterpriselistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseListSample.js
[redisenterpriseupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/redisenterprise/arm-redisenterprisecache/samples/v3/javascript/redisEnterpriseUpdateSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-redisenterprisecache?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/redisenterprise/arm-redisenterprisecache/README.md
