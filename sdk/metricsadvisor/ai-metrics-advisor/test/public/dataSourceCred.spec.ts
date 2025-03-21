// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {
  DataSourceDataLakeGen2SharedKey,
  DataSourceDataLakeGen2SharedKeyPatch,
  DataSourceServicePrincipal,
  DataSourceServicePrincipalInKeyVault,
  DataSourceServicePrincipalInKeyVaultPatch,
  DataSourceServicePrincipalPatch,
  DataSourceSqlConnectionString,
  DataSourceSqlServerConnectionStringPatch,
  MetricsAdvisorAdministrationClient,
} from "../../src/index.js";
import {
  createRecordedAdminClient,
  getRecorderUniqueVariable,
  makeCredential,
} from "./util/recordedClients.js";
import type { Recorder } from "@azure-tools/test-recorder";
import { getYieldedValue } from "@azure-tools/test-utils-vitest";
import type { TaskContext } from "vitest";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

describe("DataSourceCredential", () => {
  let client: MetricsAdvisorAdministrationClient;
  let recorder: Recorder;

  let sqlServerCredName: string;
  let datalakeCredName: string;
  let servicePrincipalCredName: string;
  let servicePrincipalInKVCredName: string;

  beforeEach(async (ctx) => {
    ({ recorder, client } = await createRecordedAdminClient(ctx, makeCredential(false)));
    if (recorder && !sqlServerCredName) {
      sqlServerCredName = getRecorderUniqueVariable(recorder, "js-test-sqlServerCred-");
    }
    if (recorder && !datalakeCredName) {
      datalakeCredName = getRecorderUniqueVariable(recorder, "js-test-datalakeCred-");
    }
    if (recorder && !servicePrincipalCredName) {
      servicePrincipalCredName = getRecorderUniqueVariable(
        recorder,
        "js-test-servicePrincipalCred-",
      );
    }
    if (recorder && !servicePrincipalInKVCredName) {
      servicePrincipalInKVCredName = getRecorderUniqueVariable(
        recorder,
        "js-test-servicePrincipalInKVCred-",
      );
    }
  });

  afterEach(async () => {
    if (recorder) {
      await recorder.stop();
    }
  });
  describe("dataSource credential CRUD operations", async () => {
    const dataSourceCredential = {
      description: "used for testing purposes only",
    };

    let createdSqlServerCredId: string;
    let createdDatalakeCredId: string;
    let createdServicePrincipalCredId: string;
    let createdServicePrincipalInKVCredId: string;

    it("creates sql server connection string credential", async () => {
      const sqlServerCredential: DataSourceSqlConnectionString = {
        ...dataSourceCredential,
        name: sqlServerCredName,
        type: "AzureSQLConnectionString",
        connectionString: "sql-server-connection-string",
      };
      const createdSqlServerCred = await client.createDataSourceCredential(sqlServerCredential);
      assert.ok(createdSqlServerCred.id, "Expecting valid dataSource credential");
      createdSqlServerCredId = createdSqlServerCred.id!;
      assert.equal(createdSqlServerCred.name, sqlServerCredential.name);
      assert.equal(createdSqlServerCred.description, sqlServerCredential.description);
      assert.equal(createdSqlServerCred.type, sqlServerCredential.type);
    });

    it("updates sql server connection string credential", async (ctx) => {
      if (!createdSqlServerCredId) {
        ctx.skip();
      }
      const sqlServerCredentialPatch: DataSourceSqlServerConnectionStringPatch = {
        name: sqlServerCredName,
        description: "updated description",
        connectionString: "updated-string",
        type: "AzureSQLConnectionString",
      };
      const updated = await client.updateDataSourceCredential(
        createdSqlServerCredId,
        sqlServerCredentialPatch,
      );
      assert.ok(updated.id, "Expecting valid dataSource credential");
      assert.equal(updated.description, sqlServerCredentialPatch.description);
      assert.equal(updated.type, sqlServerCredentialPatch.type);
      assert.equal(updated.name, sqlServerCredentialPatch.name);
    });

    it("creates datalake gen2 shared key credential", async () => {
      const datalakeCred: DataSourceDataLakeGen2SharedKey = {
        ...dataSourceCredential,
        name: datalakeCredName,
        type: "DataLakeGen2SharedKey",
        accountKey: "account-key",
      };

      const createdDatalakeCred = await client.createDataSourceCredential(datalakeCred);
      assert.ok(createdDatalakeCred.id, "Expecting valid dataSource credential");
      createdDatalakeCredId = createdDatalakeCred.id!;
      assert.equal(createdDatalakeCred.name, datalakeCred.name);
      assert.equal(createdDatalakeCred.description, datalakeCred.description);
      assert.equal(createdDatalakeCred.type, datalakeCred.type);
    });

    it("updates datalake gen2 shared key credential", async (ctx) => {
      if (!createdDatalakeCredId) {
        ctx.skip();
      }
      const dataLakeCredentialPatch: DataSourceDataLakeGen2SharedKeyPatch = {
        name: datalakeCredName,
        description: "updated description",
        accountKey: "updated account key",
        type: "DataLakeGen2SharedKey",
      };
      const updated = await client.updateDataSourceCredential(
        createdDatalakeCredId,
        dataLakeCredentialPatch,
      );
      assert.ok(updated.id, "Expecting valid dataSource credential");
      assert.equal(updated.description, dataLakeCredentialPatch.description);
      assert.equal(updated.type, dataLakeCredentialPatch.type);
      assert.equal(updated.name, dataLakeCredentialPatch.name);
    });

    it("creates service principal credential", async () => {
      const servicePrincipalCred: DataSourceServicePrincipal = {
        ...dataSourceCredential,
        name: servicePrincipalCredName,
        type: "ServicePrincipal",
        clientId: "client-id",
        clientSecret: "client-secret",
        tenantId: "tenant-id",
      };

      const createdServicePrincipalCred =
        await client.createDataSourceCredential(servicePrincipalCred);
      assert.ok(createdServicePrincipalCred.id, "Expecting valid sql server dataSource credential");
      createdServicePrincipalCredId = createdServicePrincipalCred.id!;
      assert.equal(createdServicePrincipalCred.name, servicePrincipalCred.name);
      assert.equal(createdServicePrincipalCred.description, servicePrincipalCred.description);
      assert.equal(createdServicePrincipalCred.type, servicePrincipalCred.type);
    });

    it("updates service principal credential", async (ctx) => {
      if (!createdServicePrincipalCredId) {
        ctx.skip();
      }
      const servicePrincipalCredentialPatch: DataSourceServicePrincipalPatch = {
        name: servicePrincipalCredName,
        description: "updated description",
        clientId: "updated-client",
        clientSecret: "updated-secret",
        tenantId: "updated-tenant",
        type: "ServicePrincipal",
      };
      const updated = await client.updateDataSourceCredential(
        createdServicePrincipalCredId,
        servicePrincipalCredentialPatch,
      );
      assert.ok(updated.id, "Expecting valid dataSource credential");
      assert.equal(updated.description, servicePrincipalCredentialPatch.description);
      assert.equal(updated.type, servicePrincipalCredentialPatch.type);
      assert.equal(updated.name, servicePrincipalCredentialPatch.name);
      assert.equal(
        (updated as DataSourceServicePrincipalPatch).clientId,
        servicePrincipalCredentialPatch.clientId,
      );
    });

    it("creates service principal in keyvault credential", async () => {
      const servicePrincipalInKVCred: DataSourceServicePrincipalInKeyVault = {
        ...dataSourceCredential,
        name: servicePrincipalInKVCredName,
        type: "ServicePrincipalInKV",
        tenantId: "tenant-id",
        keyVaultEndpoint: "keyvault-endpoint",
        keyVaultClientId: "keyvault-client-id",
        keyVaultClientSecret: "keyvault-client-secret",
        servicePrincipalIdNameInKV: "service-principal-in-kv",
        servicePrincipalSecretNameInKV: "service-principal-secret-name-in-kv",
      };

      const createdServicePrincipalInKVCred =
        await client.createDataSourceCredential(servicePrincipalInKVCred);
      assert.ok(createdServicePrincipalInKVCred.id, "Expecting valid dataSource credential");
      createdServicePrincipalInKVCredId = createdServicePrincipalInKVCred.id!;
      assert.equal(createdServicePrincipalInKVCred.name, servicePrincipalInKVCred.name);
      assert.equal(
        createdServicePrincipalInKVCred.description,
        servicePrincipalInKVCred.description,
      );
      assert.equal(createdServicePrincipalInKVCred.type, servicePrincipalInKVCred.type);
    });

    it("updates service principal in keyvault credential", async (ctx) => {
      if (!createdServicePrincipalInKVCredId) {
        ctx.skip();
      }
      const servicePrincipalInKVCredentialPatch: DataSourceServicePrincipalInKeyVaultPatch = {
        name: servicePrincipalInKVCredName,
        description: "updated description",
        keyVaultEndpoint: "updated-keyvault-endpoint",
        keyVaultClientId: "updated-keyvault-client-id",
        keyVaultClientSecret: "updated-keyvault-client-secret",
        servicePrincipalIdNameInKV: "updated-service-principal-in-kv",
        servicePrincipalSecretNameInKV: "updated-service-principal-secret-name-in-kv",
        tenantId: "updated-tenant",
        type: "ServicePrincipalInKV",
      };

      const updated = await client.updateDataSourceCredential(
        createdServicePrincipalInKVCredId,
        servicePrincipalInKVCredentialPatch,
      );
      assert.ok(updated.id, "Expecting valid dataSource credential");
      assert.equal(updated.description, servicePrincipalInKVCredentialPatch.description);
      assert.equal(updated.type, servicePrincipalInKVCredentialPatch.type);
      assert.equal(updated.name, servicePrincipalInKVCredentialPatch.name);
      assert.equal(
        (updated as DataSourceServicePrincipalPatch).tenantId,
        servicePrincipalInKVCredentialPatch.tenantId,
      );
      assert.equal(
        (updated as DataSourceServicePrincipalInKeyVaultPatch).keyVaultClientId,
        servicePrincipalInKVCredentialPatch.keyVaultClientId,
      );
      assert.equal(
        (updated as DataSourceServicePrincipalInKeyVaultPatch).servicePrincipalIdNameInKV,
        servicePrincipalInKVCredentialPatch.servicePrincipalIdNameInKV,
      );
    });

    it("lists dataSource credentials one by one and by pages", async () => {
      const iterator = client.listDataSourceCredential();
      let result = getYieldedValue(await iterator.next());

      assert.ok(result.id, "Expecting first dataSource credential");
      result = getYieldedValue(await iterator.next());
      assert.ok(result.id, "Expecting second dataSource credential");

      const pageIterator = client.listDataSourceCredential().byPage({ maxPageSize: 2 });
      let pageResult = await pageIterator.next();
      assert.equal(pageResult.value.length, 2, "Expecting two entries in first page");
      pageResult = await pageIterator.next();
      assert.equal(pageResult.value.length, 2, "Expecting two entries in second page");
    });

    it("deletes sqlserver dataSource credential", async (ctx) => {
      if (!createdSqlServerCredId) {
        ctx.skip();
      }
      await verifyDataSourceCredentialDeletion(ctx, client, createdSqlServerCredId);
    });

    it("deletes datalake gen2 shared key dataSource credential", async (ctx) => {
      if (!createdDatalakeCredId) {
        ctx.skip();
      }
      await verifyDataSourceCredentialDeletion(ctx, client, createdDatalakeCredId);
    });

    it("deletes service principal dataSource credential", async (ctx) => {
      if (!createdServicePrincipalCredId) {
        ctx.skip();
      }
      await verifyDataSourceCredentialDeletion(ctx, client, createdServicePrincipalCredId);
    });

    it("deletes service principal in KeyVault dataSource credential", async (ctx) => {
      if (!createdServicePrincipalInKVCredId) {
        ctx.skip();
      }
      await verifyDataSourceCredentialDeletion(ctx, client, createdServicePrincipalInKVCredId);
    });
  });
});

export async function verifyDataSourceCredentialDeletion(
  context: TaskContext,
  client: MetricsAdvisorAdministrationClient,
  createdDataSourceCredentialId: string,
): Promise<void> {
  if (!createdDataSourceCredentialId) {
    context.skip();
  }

  await client.deleteDataSourceCredential(createdDataSourceCredentialId);
  try {
    await client.getDataSourceCredential(createdDataSourceCredentialId);
    assert.fail("Expecting error getting dataSource credential");
  } catch (error: any) {
    assert.equal((error as any).code, "404 NOT_FOUND");
    assert.equal((error as any).message, "credentialId is invalid.");
  }
}
