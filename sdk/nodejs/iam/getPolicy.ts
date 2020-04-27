// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * This data source can be used to fetch information about a specific
 * IAM policy.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.iam.getPolicy({
 *     arn: "arn:aws:iam::123456789012:policy/UsersManageOwnCredentials",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/iam_policy.html.markdown.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:iam/getPolicy:getPolicy", {
        "arn": args.arn,
    }, opts);
}

/**
 * A collection of arguments for invoking getPolicy.
 */
export interface GetPolicyArgs {
    /**
     * ARN of the IAM policy.
     */
    readonly arn: string;
}

/**
 * A collection of values returned by getPolicy.
 */
export interface GetPolicyResult {
    /**
     * The Amazon Resource Name (ARN) specifying the policy.
     */
    readonly arn: string;
    /**
     * The description of the policy.
     */
    readonly description: string;
    /**
     * The name of the IAM policy.
     */
    readonly name: string;
    /**
     * The path to the policy.
     */
    readonly path: string;
    /**
     * The policy document of the policy.
     */
    readonly policy: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
