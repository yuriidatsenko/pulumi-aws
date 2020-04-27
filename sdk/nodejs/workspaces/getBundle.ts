// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to get information about a WorkSpaces Bundle.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.workspaces.getBundle({
 *     bundleId: "wsb-b0s22j3d7",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/workspaces_bundle.html.markdown.
 */
export function getBundle(args: GetBundleArgs, opts?: pulumi.InvokeOptions): Promise<GetBundleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:workspaces/getBundle:getBundle", {
        "bundleId": args.bundleId,
    }, opts);
}

/**
 * A collection of arguments for invoking getBundle.
 */
export interface GetBundleArgs {
    /**
     * The ID of the bundle.
     */
    readonly bundleId: string;
}

/**
 * A collection of values returned by getBundle.
 */
export interface GetBundleResult {
    readonly bundleId: string;
    /**
     * The compute type. See supported fields below.
     */
    readonly computeTypes: outputs.workspaces.GetBundleComputeType[];
    /**
     * The description of the bundle.
     */
    readonly description: string;
    /**
     * The name of the compute type.
     */
    readonly name: string;
    /**
     * The owner of the bundle.
     */
    readonly owner: string;
    /**
     * The root volume. See supported fields below.
     */
    readonly rootStorages: outputs.workspaces.GetBundleRootStorage[];
    /**
     * The user storage. See supported fields below.
     */
    readonly userStorages: outputs.workspaces.GetBundleUserStorage[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
