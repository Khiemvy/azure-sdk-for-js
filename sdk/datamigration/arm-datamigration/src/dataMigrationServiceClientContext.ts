/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as coreHttp from "@azure/core-http";
import * as coreArm from "@azure/core-arm";

const packageName = "@azure/arm-datamigration";
const packageVersion = "1.0.0";

export class DataMigrationServiceClientContext extends coreArm.AzureServiceClient {
  credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials;
  apiVersion?: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DataMigrationServiceClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Identifier of the subscription
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, subscriptionId: string, options?: Models.DataMigrationServiceClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId == undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = coreArm.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.apiVersion = '2018-07-15-preview';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = options.baseUri || this.baseUri || "https://management.azure.com";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
