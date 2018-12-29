// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage AWS EMR Security Configurations
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const aws_emr_security_configuration_foo = new aws.emr.SecurityConfiguration("foo", {
 *     configuration: "{\n  \"EncryptionConfiguration\": {\n    \"AtRestEncryptionConfiguration\": {\n      \"S3EncryptionConfiguration\": {\n        \"EncryptionMode\": \"SSE-S3\"\n      },\n      \"LocalDiskEncryptionConfiguration\": {\n        \"EncryptionKeyProviderType\": \"AwsKms\",\n        \"AwsKmsKey\": \"arn:aws:kms:us-west-2:187416307283:alias/tf_emr_test_key\"\n      }\n    },\n    \"EnableInTransitEncryption\": false,\n    \"EnableAtRestEncryption\": true\n  }\n}\n",
 *     name: "emrsc_other",
 * });
 * ```
 */
export class SecurityConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SecurityConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityConfigurationState, opts?: pulumi.CustomResourceOptions): SecurityConfiguration {
        return new SecurityConfiguration(name, <any>state, { ...opts, id: id });
    }

    /**
     * A JSON formatted Security Configuration
     */
    public readonly configuration: pulumi.Output<string>;
    /**
     * Date the Security Configuration was created
     */
    public /*out*/ readonly creationDate: pulumi.Output<string>;
    /**
     * The name of the EMR Security Configuration. By default generated by Terraform.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityConfigurationArgs | SecurityConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SecurityConfigurationState = argsOrState as SecurityConfigurationState | undefined;
            inputs["configuration"] = state ? state.configuration : undefined;
            inputs["creationDate"] = state ? state.creationDate : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
        } else {
            const args = argsOrState as SecurityConfigurationArgs | undefined;
            if (!args || args.configuration === undefined) {
                throw new Error("Missing required property 'configuration'");
            }
            inputs["configuration"] = args ? args.configuration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["creationDate"] = undefined /*out*/;
        }
        super("aws:emr/securityConfiguration:SecurityConfiguration", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecurityConfiguration resources.
 */
export interface SecurityConfigurationState {
    /**
     * A JSON formatted Security Configuration
     */
    readonly configuration?: pulumi.Input<string>;
    /**
     * Date the Security Configuration was created
     */
    readonly creationDate?: pulumi.Input<string>;
    /**
     * The name of the EMR Security Configuration. By default generated by Terraform.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityConfiguration resource.
 */
export interface SecurityConfigurationArgs {
    /**
     * A JSON formatted Security Configuration
     */
    readonly configuration: pulumi.Input<string>;
    /**
     * The name of the EMR Security Configuration. By default generated by Terraform.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
}
