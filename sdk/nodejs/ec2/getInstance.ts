// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to get the ID of an Amazon EC2 Instance for use in other
 * resources.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foo = pulumi.output(aws.ec2.getInstance({
 *     filters: [
 *         {
 *             name: "image-id",
 *             values: ["ami-xxxxxxxx"],
 *         },
 *         {
 *             name: "tag:Name",
 *             values: ["instance-name-tag"],
 *         },
 *     ],
 *     instanceId: "i-instanceid",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/instance.html.markdown.
 */
export function getInstance(args?: GetInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:ec2/getInstance:getInstance", {
        "filters": args.filters,
        "getPasswordData": args.getPasswordData,
        "getUserData": args.getUserData,
        "instanceId": args.instanceId,
        "instanceTags": args.instanceTags,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getInstance.
 */
export interface GetInstanceArgs {
    /**
     * One or more name/value pairs to use as filters. There are
     * several valid keys, for a full reference, check out
     * [describe-instances in the AWS CLI reference][1].
     */
    readonly filters?: inputs.ec2.GetInstanceFilter[];
    /**
     * If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `passwordData` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
     */
    readonly getPasswordData?: boolean;
    /**
     * Retrieve Base64 encoded User Data contents into the `userDataBase64` attribute. A SHA-1 hash of the User Data contents will always be present in the `userData` attribute. Defaults to `false`.
     */
    readonly getUserData?: boolean;
    /**
     * Specify the exact Instance ID with which to populate the data source.
     */
    readonly instanceId?: string;
    /**
     * A mapping of tags, each pair of which must
     * exactly match a pair on the desired Instance.
     */
    readonly instanceTags?: {[key: string]: any};
    /**
     * A mapping of tags assigned to the Instance.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getInstance.
 */
export interface GetInstanceResult {
    /**
     * The ID of the AMI used to launch the instance.
     */
    readonly ami: string;
    /**
     * The ARN of the instance.
     */
    readonly arn: string;
    /**
     * Whether or not the Instance is associated with a public IP address or not (Boolean).
     */
    readonly associatePublicIpAddress: boolean;
    /**
     * The availability zone of the Instance.
     */
    readonly availabilityZone: string;
    /**
     * The credit specification of the Instance.
     */
    readonly creditSpecifications: outputs.ec2.GetInstanceCreditSpecification[];
    readonly disableApiTermination: boolean;
    /**
     * The EBS block device mappings of the Instance.
     */
    readonly ebsBlockDevices: outputs.ec2.GetInstanceEbsBlockDevice[];
    /**
     * Whether the Instance is EBS optimized or not (Boolean).
     */
    readonly ebsOptimized: boolean;
    /**
     * The ephemeral block device mappings of the Instance.
     */
    readonly ephemeralBlockDevices: outputs.ec2.GetInstanceEphemeralBlockDevice[];
    readonly filters?: outputs.ec2.GetInstanceFilter[];
    readonly getPasswordData?: boolean;
    readonly getUserData?: boolean;
    /**
     * The Id of the dedicated host the instance will be assigned to.
     */
    readonly hostId: string;
    /**
     * The name of the instance profile associated with the Instance.
     */
    readonly iamInstanceProfile: string;
    readonly instanceId?: string;
    /**
     * The state of the instance. One of: `pending`, `running`, `shutting-down`, `terminated`, `stopping`, `stopped`. See [Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html) for more information.
     */
    readonly instanceState: string;
    readonly instanceTags: {[key: string]: any};
    /**
     * The type of the Instance.
     */
    readonly instanceType: string;
    /**
     * The key name of the Instance.
     */
    readonly keyName: string;
    /**
     * The metadata options of the Instance.
     */
    readonly metadataOptions: outputs.ec2.GetInstanceMetadataOption[];
    /**
     * Whether detailed monitoring is enabled or disabled for the Instance (Boolean).
     */
    readonly monitoring: boolean;
    /**
     * The ID of the network interface that was created with the Instance.
     */
    readonly networkInterfaceId: string;
    /**
     * Base-64 encoded encrypted password data for the instance.
     * Useful for getting the administrator password for instances running Microsoft Windows.
     * This attribute is only exported if `getPasswordData` is true.
     * See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
     */
    readonly passwordData: string;
    /**
     * The placement group of the Instance.
     */
    readonly placementGroup: string;
    /**
     * The private DNS name assigned to the Instance. Can only be
     * used inside the Amazon EC2, and only available if you've enabled DNS hostnames
     * for your VPC.
     */
    readonly privateDns: string;
    /**
     * The private IP address assigned to the Instance.
     */
    readonly privateIp: string;
    /**
     * The public DNS name assigned to the Instance. For EC2-VPC, this
     * is only available if you've enabled DNS hostnames for your VPC.
     */
    readonly publicDns: string;
    /**
     * The public IP address assigned to the Instance, if applicable. **NOTE**: If you are using an [`aws.ec2.Eip`](https://www.terraform.io/docs/providers/aws/r/eip.html) with your instance, you should refer to the EIP's address directly and not use `publicIp`, as this field will change after the EIP is attached.
     */
    readonly publicIp: string;
    /**
     * The root block device mappings of the Instance
     */
    readonly rootBlockDevices: outputs.ec2.GetInstanceRootBlockDevice[];
    /**
     * The associated security groups.
     */
    readonly securityGroups: string[];
    /**
     * Whether the network interface performs source/destination checking (Boolean).
     */
    readonly sourceDestCheck: boolean;
    /**
     * The VPC subnet ID.
     */
    readonly subnetId: string;
    /**
     * A mapping of tags assigned to the Instance.
     */
    readonly tags: {[key: string]: any};
    /**
     * The tenancy of the instance: `dedicated`, `default`, `host`.
     */
    readonly tenancy: string;
    /**
     * SHA-1 hash of User Data supplied to the Instance.
     */
    readonly userData: string;
    /**
     * Base64 encoded contents of User Data supplied to the Instance. This attribute is only exported if `getUserData` is true.
     */
    readonly userDataBase64: string;
    /**
     * The associated security groups in a non-default VPC.
     */
    readonly vpcSecurityGroupIds: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
