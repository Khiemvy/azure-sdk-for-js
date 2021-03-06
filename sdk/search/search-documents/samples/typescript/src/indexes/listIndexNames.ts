// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SearchIndexClient, AzureKeyCredential } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main(): Promise<void> {
  console.log(`Running List Indexes Names Sample....`);

  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  const result = await client.listIndexesNames();
  let listOfIndexNames = await result.next();

  console.log(`List of Index Names`);
  console.log(`*******************`);
  while (!listOfIndexNames.done) {
    console.log(listOfIndexNames.value);
    listOfIndexNames = await result.next();
  }
}

main();
