/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SpringbootsitesPatch,
  SpringAppDiscoveryManagementClient,
} from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a springbootsites resource.
 *
 * @summary Update a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Update_MaximumSet_Gen.json
 */
async function springbootsitesUpdateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] ||
    "chshxczdscjpcyvyethat";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const springbootsites: SpringbootsitesPatch = {
    location: "icnumzvzzeqhuxtcefuqdcro",
    tags: { key9581: "cgdqvbknjrwcwuesquddsxu" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.beginUpdateAndWait(
    resourceGroupName,
    springbootsitesName,
    springbootsites,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a springbootsites resource.
 *
 * @summary Update a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Update_MinimumSet_Gen.json
 */
async function springbootsitesUpdateMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] ||
    "chshxczdscjpcyvyethat";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const springbootsites: SpringbootsitesPatch = {
    location: "icnumzvzzeqhuxtcefuqdcro",
  };
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.beginUpdateAndWait(
    resourceGroupName,
    springbootsitesName,
    springbootsites,
  );
  console.log(result);
}

async function main(): Promise<void> {
  springbootsitesUpdateMaximumSetGen();
  springbootsitesUpdateMinimumSetGen();
}

main().catch(console.error);
