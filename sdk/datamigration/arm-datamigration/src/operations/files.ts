/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/filesMappers";
import * as Parameters from "../models/parameters";
import { DataMigrationServiceClientContext } from "../dataMigrationServiceClientContext";

/** Class representing a Files. */
export class Files {
  private readonly client: DataMigrationServiceClientContext;

  /**
   * Create a Files.
   * @param {DataMigrationServiceClientContext} client Reference to the service client.
   */
  constructor(client: DataMigrationServiceClientContext) {
    this.client = client;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of files owned by a project resource.
   * @summary Get files in a project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesListResponse>
   */
  list(groupName: string, serviceName: string, projectName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesListResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, projectName: string, callback: coreHttp.ServiceCallback<Models.FileList>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, projectName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FileList>): void;
  list(groupName: string, serviceName: string, projectName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FileList>, callback?: coreHttp.ServiceCallback<Models.FileList>): Promise<Models.FilesListResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FilesListResponse>;
  }

  /**
   * The files resource is a nested, proxy-only resource representing a file stored under the project
   * resource. This method retrieves information about a file.
   * @summary Get file information
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesGetResponse>
   */
  get(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesGetResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  get(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ProjectFile>, callback?: coreHttp.ServiceCallback<Models.ProjectFile>): Promise<Models.FilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FilesGetResponse>;
  }

  /**
   * The PUT method creates a new file or updates an existing one.
   * @summary Create a file resource
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesCreateOrUpdateResponse>
   */
  createOrUpdate(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesCreateOrUpdateResponse>;
  /**
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  /**
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  createOrUpdate(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ProjectFile>, callback?: coreHttp.ServiceCallback<Models.ProjectFile>): Promise<Models.FilesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.FilesCreateOrUpdateResponse>;
  }

  /**
   * This method deletes a file.
   * @summary Delete file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * This method updates an existing file.
   * @summary Update a file
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesUpdateResponse>
   */
  update(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesUpdateResponse>;
  /**
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  update(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  /**
   * @param parameters Information about the file
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  update(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ProjectFile>): void;
  update(parameters: Models.ProjectFile, groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ProjectFile>, callback?: coreHttp.ServiceCallback<Models.ProjectFile>): Promise<Models.FilesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FilesUpdateResponse>;
  }

  /**
   * This method is used for requesting storage information using which contents of the file can be
   * downloaded.
   * @summary Request storage information for downloading the file content
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesReadResponse>
   */
  read(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesReadResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  read(groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<Models.FileStorageInfo>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  read(groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FileStorageInfo>): void;
  read(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FileStorageInfo>, callback?: coreHttp.ServiceCallback<Models.FileStorageInfo>): Promise<Models.FilesReadResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      readOperationSpec,
      callback) as Promise<Models.FilesReadResponse>;
  }

  /**
   * This method is used for requesting information for reading and writing the file content.
   * @summary Request information for reading and writing file content.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesReadWriteResponse>
   */
  readWrite(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesReadWriteResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param callback The callback
   */
  readWrite(groupName: string, serviceName: string, projectName: string, fileName: string, callback: coreHttp.ServiceCallback<Models.FileStorageInfo>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The optional parameters
   * @param callback The callback
   */
  readWrite(groupName: string, serviceName: string, projectName: string, fileName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FileStorageInfo>): void;
  readWrite(groupName: string, serviceName: string, projectName: string, fileName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FileStorageInfo>, callback?: coreHttp.ServiceCallback<Models.FileStorageInfo>): Promise<Models.FilesReadWriteResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        fileName,
        options
      },
      readWriteOperationSpec,
      callback) as Promise<Models.FilesReadWriteResponse>;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of files owned by a project resource.
   * @summary Get files in a project
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FilesListNextResponse>
   */
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.FilesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.FileList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FileList>): void;
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FileList>, callback?: coreHttp.ServiceCallback<Models.FileList>): Promise<Models.FilesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FilesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProjectFile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    201: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProjectFile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const readOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/read",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileStorageInfo
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const readWriteOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/readwrite",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileStorageInfo
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};
