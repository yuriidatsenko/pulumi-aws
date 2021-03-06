// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export * from "./alias";
export * from "./codeSigningConfig";
export * from "./eventSourceMapping";
export * from "./function";
export * from "./functionEventInvokeConfig";
export * from "./getAlias";
export * from "./getCodeSigningConfig";
export * from "./getFunction";
export * from "./getInvocation";
export * from "./getLayerVersion";
export * from "./lambdaMixins";
export * from "./layerVersion";
export * from "./permission";
export * from "./provisionedConcurrencyConfig";
export * from "./runtimes";

// Export enums:
export * from "../types/enums/lambda";

// Import resources to register:
import { Alias } from "./alias";
import { CodeSigningConfig } from "./codeSigningConfig";
import { EventSourceMapping } from "./eventSourceMapping";
import { Function } from "./function";
import { FunctionEventInvokeConfig } from "./functionEventInvokeConfig";
import { LayerVersion } from "./layerVersion";
import { Permission } from "./permission";
import { ProvisionedConcurrencyConfig } from "./provisionedConcurrencyConfig";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "aws:lambda/alias:Alias":
                return new Alias(name, <any>undefined, { urn })
            case "aws:lambda/codeSigningConfig:CodeSigningConfig":
                return new CodeSigningConfig(name, <any>undefined, { urn })
            case "aws:lambda/eventSourceMapping:EventSourceMapping":
                return new EventSourceMapping(name, <any>undefined, { urn })
            case "aws:lambda/function:Function":
                return new Function(name, <any>undefined, { urn })
            case "aws:lambda/functionEventInvokeConfig:FunctionEventInvokeConfig":
                return new FunctionEventInvokeConfig(name, <any>undefined, { urn })
            case "aws:lambda/layerVersion:LayerVersion":
                return new LayerVersion(name, <any>undefined, { urn })
            case "aws:lambda/permission:Permission":
                return new Permission(name, <any>undefined, { urn })
            case "aws:lambda/provisionedConcurrencyConfig:ProvisionedConcurrencyConfig":
                return new ProvisionedConcurrencyConfig(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("aws", "lambda/alias", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/codeSigningConfig", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/eventSourceMapping", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/function", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/functionEventInvokeConfig", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/layerVersion", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/permission", _module)
pulumi.runtime.registerResourceModule("aws", "lambda/provisionedConcurrencyConfig", _module)
