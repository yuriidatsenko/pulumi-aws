// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides information about a Launch Configuration.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ubuntu = pulumi.output(aws.ec2.getLaunchConfiguration({
 *     name: "test-launch-config",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/launch_configuration.html.markdown.
 */
export function getLaunchConfiguration(args: GetLaunchConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetLaunchConfigurationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:ec2/getLaunchConfiguration:getLaunchConfiguration", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getLaunchConfiguration.
 */
export interface GetLaunchConfigurationArgs {
    /**
     * The name of the launch configuration.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getLaunchConfiguration.
 */
export interface GetLaunchConfigurationResult {
    /**
     * The Amazon Resource Name of the launch configuration.
     */
    readonly arn: string;
    /**
     * Whether a Public IP address is associated with the instance.
     */
    readonly associatePublicIpAddress: boolean;
    /**
     * The EBS Block Devices attached to the instance.
     */
    readonly ebsBlockDevices: outputs.ec2.GetLaunchConfigurationEbsBlockDevice[];
    /**
     * Whether the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized: boolean;
    /**
     * Whether Detailed Monitoring is Enabled.
     */
    readonly enableMonitoring: boolean;
    /**
     * The Ephemeral volumes on the instance.
     */
    readonly ephemeralBlockDevices: outputs.ec2.GetLaunchConfigurationEphemeralBlockDevice[];
    /**
     * The IAM Instance Profile to associate with launched instances.
     */
    readonly iamInstanceProfile: string;
    /**
     * The EC2 Image ID of the instance.
     */
    readonly imageId: string;
    /**
     * The Instance Type of the instance to launch.
     */
    readonly instanceType: string;
    /**
     * The Key Name that should be used for the instance.
     */
    readonly keyName: string;
    /**
     * The Name of the launch configuration.
     */
    readonly name: string;
    /**
     * The Tenancy of the instance.
     */
    readonly placementTenancy: string;
    /**
     * The Root Block Device of the instance.
     */
    readonly rootBlockDevices: outputs.ec2.GetLaunchConfigurationRootBlockDevice[];
    /**
     * A list of associated Security Group IDS.
     */
    readonly securityGroups: string[];
    /**
     * The Price to use for reserving Spot instances.
     */
    readonly spotPrice: string;
    /**
     * The User Data of the instance.
     */
    readonly userData: string;
    /**
     * The ID of a ClassicLink-enabled VPC.
     */
    readonly vpcClassicLinkId: string;
    /**
     * The IDs of one or more Security Groups for the specified ClassicLink-enabled VPC.
     */
    readonly vpcClassicLinkSecurityGroups: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
