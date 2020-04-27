// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Retrieve metadata information about a Secrets Manager secret. To retrieve a secret value, see the [`aws.secretsmanager.SecretVersion` data source](https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html).
 * 
 * ## Example Usage
 * 
 * ### ARN
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const byArn = pulumi.output(aws.secretsmanager.getSecret({
 *     arn: "arn:aws:secretsmanager:us-east-1:123456789012:secret:example-123456",
 * }, { async: true }));
 * ```
 * 
 * ### Name
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const byName = pulumi.output(aws.secretsmanager.getSecret({
 *     name: "example",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/secretsmanager_secret.html.markdown.
 */
export function getSecret(args?: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:secretsmanager/getSecret:getSecret", {
        "arn": args.arn,
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    /**
     * The Amazon Resource Name (ARN) of the secret to retrieve.
     */
    readonly arn?: string;
    /**
     * The name of the secret to retrieve.
     */
    readonly name?: string;
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    /**
     * The Amazon Resource Name (ARN) of the secret.
     */
    readonly arn: string;
    /**
     * A description of the secret.
     */
    readonly description: string;
    /**
     * The Key Management Service (KMS) Customer Master Key (CMK) associated with the secret.
     */
    readonly kmsKeyId: string;
    readonly name: string;
    /**
     * The resource-based policy document that's attached to the secret.
     */
    readonly policy: string;
    /**
     * Whether rotation is enabled or not.
     */
    readonly rotationEnabled: boolean;
    /**
     * Rotation Lambda function Amazon Resource Name (ARN) if rotation is enabled.
     */
    readonly rotationLambdaArn: string;
    /**
     * Rotation rules if rotation is enabled.
     */
    readonly rotationRules: outputs.secretsmanager.GetSecretRotationRule[];
    /**
     * Tags of the secret.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
