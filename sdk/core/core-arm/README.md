# Azure Core ARM client library for JavaScript

This is an Azure-specific layer for the core HTTP pipeline of Azure SDK JavaScript libraries which work in the browser and Node.js. This library is primarily intended to be used in code generated by [AutoRest](https://github.com/Azure/Autorest) and [`autorest.typescript`](https://github.com/Azure/autorest.typescript).

## Getting started

### Requirements

- Node.js version > 6.x
- npm install -g typescript

### Installation

- After cloning the repo, execute `npm install`

## Key concepts

This library provides a `ServiceClient` subclass called `AzureServiceClient` which adds some Azure-specific behavior such as the management of long-running operations.  For more information on the design of the underlying library `@azure/core-http`, consult the [architecture overview](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-http/docs/architectureOverview.md).

## Examples

Examples can be found in the `samples` folder.

## Next steps

### Node.js

- Set the subscriptionId and token
- Run `node samples/node-sample.js`

### In the browser

- Set the subscriptionId and token and then run
- Open index.html file in the browser. It should show the response from GET request on the storage account. From Chrome type Ctrl + Shift + I and you can see the logs in console.

## Troubleshooting

If you run into issues while using this library, please feel free to [file an issue](https://github.com/Azure/azure-sdk-for-js/issues/new).

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

If you'd like to contribute to this library, please read the [contributing guide](../../../CONTRIBUTING.md) to learn more about how to build and test the code.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fcore%2Fcore-arm%2FREADME.png)
