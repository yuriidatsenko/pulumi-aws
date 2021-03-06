// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 *
 * The following example below creates a CloudFront cache policy.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = pulumi.output(aws.cloudfront.getCachePolicy({
 *     name: "example-policy",
 * }, { async: true }));
 * ```
 */
export function getCachePolicy(args?: GetCachePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetCachePolicyResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:cloudfront/getCachePolicy:getCachePolicy", {
        "id": args.id,
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getCachePolicy.
 */
export interface GetCachePolicyArgs {
    /**
     * The identifier for the cache policy.
     */
    readonly id?: string;
    /**
     * A unique name to identify the cache policy.
     */
    readonly name?: string;
}

/**
 * A collection of values returned by getCachePolicy.
 */
export interface GetCachePolicyResult {
    /**
     * A comment to describe the cache policy.
     */
    readonly comment: string;
    /**
     * The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.
     */
    readonly defaultTtl: number;
    /**
     * The current version of the cache policy.
     */
    readonly etag: string;
    readonly id?: string;
    /**
     * The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.
     */
    readonly maxTtl: number;
    /**
     * The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.
     */
    readonly minTtl: number;
    readonly name?: string;
    /**
     * The HTTP headers, cookies, and URL query strings to include in the cache key. See Parameters In Cache Key And Forwarded To Origin for more information.
     */
    readonly parametersInCacheKeyAndForwardedToOrigins: outputs.cloudfront.GetCachePolicyParametersInCacheKeyAndForwardedToOrigin[];
}
