// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an OpsWorks instance resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const my_instance = new aws.opsworks.Instance("my-instance", {
 *     instanceType: "t2.micro",
 *     layerIds: [aws_opsworks_custom_layer_my_layer.id],
 *     os: "Amazon Linux 2015.09",
 *     stackId: aws_opsworks_stack_main.id,
 *     state: "stopped",
 * });
 * ```
 * 
 * ## Block devices
 * 
 * Each of the `*_block_device` attributes controls a portion of the AWS
 * Instance's "Block Device Mapping". It's a good idea to familiarize yourself with [AWS's Block Device
 * Mapping docs](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html)
 * to understand the implications of using these attributes.
 * 
 * The `root_block_device` mapping supports the following:
 * 
 * * `volume_type` - (Optional) The type of volume. Can be `"standard"`, `"gp2"`,
 *   or `"io1"`. (Default: `"standard"`).
 * * `volume_size` - (Optional) The size of the volume in gigabytes.
 * * `iops` - (Optional) The amount of provisioned
 *   [IOPS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).
 *   This must be set with a `volume_type` of `"io1"`.
 * * `delete_on_termination` - (Optional) Whether the volume should be destroyed
 *   on instance termination (Default: `true`).
 * 
 * Modifying any of the `root_block_device` settings requires resource
 * replacement.
 * 
 * Each `ebs_block_device` supports the following:
 * 
 * * `device_name` - The name of the device to mount.
 * * `snapshot_id` - (Optional) The Snapshot ID to mount.
 * * `volume_type` - (Optional) The type of volume. Can be `"standard"`, `"gp2"`,
 *   or `"io1"`. (Default: `"standard"`).
 * * `volume_size` - (Optional) The size of the volume in gigabytes.
 * * `iops` - (Optional) The amount of provisioned
 *   [IOPS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html).
 *   This must be set with a `volume_type` of `"io1"`.
 * * `delete_on_termination` - (Optional) Whether the volume should be destroyed
 *   on instance termination (Default: `true`).
 * 
 * Modifying any `ebs_block_device` currently requires resource replacement.
 * 
 * Each `ephemeral_block_device` supports the following:
 * 
 * * `device_name` - The name of the block device to mount on the instance.
 * * `virtual_name` - The [Instance Store Device
 *   Name](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames)
 *   (e.g. `"ephemeral0"`)
 * 
 * Each AWS Instance type has a different set of Instance Store block devices
 * available for attachment. AWS [publishes a
 * list](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#StorageOnInstanceTypes)
 * of which ephemeral devices are available on each type. The devices are always
 * identified by the `virtual_name` in the format `"ephemeral{0..N}"`.
 * 
 * > **NOTE:** Currently, changes to `*_block_device` configuration of _existing_
 * resources cannot be automatically detected by Terraform. After making updates
 * to block device configuration, resource recreation can be manually triggered by
 * using the [`taint` command](https://www.terraform.io/docs/commands/taint.html).
 */
export class Instance extends pulumi.CustomResource {
    /**
     * Get an existing Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceState, opts?: pulumi.CustomResourceOptions): Instance {
        return new Instance(name, <any>state, { ...opts, id: id });
    }

    /**
     * The AWS OpsWorks agent to install.  Defaults to `"INHERIT"`.
     */
    public readonly agentVersion: pulumi.Output<string | undefined>;
    /**
     * The AMI to use for the instance.  If an AMI is specified, `os` must be `"Custom"`.
     */
    public readonly amiId: pulumi.Output<string>;
    /**
     * Machine architecture for created instances.  Can be either `"x86_64"` (the default) or `"i386"`
     */
    public readonly architecture: pulumi.Output<string | undefined>;
    /**
     * Creates load-based or time-based instances.  If set, can be either: `"load"` or `"timer"`.
     */
    public readonly autoScalingType: pulumi.Output<string | undefined>;
    /**
     * Name of the availability zone where instances will be created
     * by default.
     */
    public readonly availabilityZone: pulumi.Output<string>;
    public readonly createdAt: pulumi.Output<string>;
    public readonly deleteEbs: pulumi.Output<boolean | undefined>;
    public readonly deleteEip: pulumi.Output<boolean | undefined>;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    public readonly ebsBlockDevices: pulumi.Output<{ deleteOnTermination?: boolean, deviceName: string, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[]>;
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    public readonly ebsOptimized: pulumi.Output<boolean | undefined>;
    /**
     * EC2 instance ID
     */
    public /*out*/ readonly ec2InstanceId: pulumi.Output<string>;
    public readonly ecsClusterArn: pulumi.Output<string>;
    public readonly elasticIp: pulumi.Output<string>;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    public readonly ephemeralBlockDevices: pulumi.Output<{ deviceName: string, virtualName: string }[]>;
    /**
     * The instance's host name.
     */
    public readonly hostname: pulumi.Output<string>;
    public readonly infrastructureClass: pulumi.Output<string>;
    /**
     * Controls where to install OS and package updates when the instance boots.  Defaults to `true`.
     */
    public readonly installUpdatesOnBoot: pulumi.Output<boolean | undefined>;
    public readonly instanceProfileArn: pulumi.Output<string>;
    /**
     * The type of instance to start
     */
    public readonly instanceType: pulumi.Output<string | undefined>;
    public readonly lastServiceErrorId: pulumi.Output<string>;
    /**
     * The ids of the layers the instance will belong to.
     */
    public readonly layerIds: pulumi.Output<string[]>;
    /**
     * Name of operating system that will be installed.
     */
    public readonly os: pulumi.Output<string>;
    public readonly platform: pulumi.Output<string>;
    /**
     * The private DNS name assigned to the instance. Can only be
     * used inside the Amazon EC2, and only available if you've enabled DNS hostnames
     * for your VPC
     */
    public readonly privateDns: pulumi.Output<string>;
    /**
     * The private IP address assigned to the instance
     */
    public readonly privateIp: pulumi.Output<string>;
    /**
     * The public DNS name assigned to the instance. For EC2-VPC, this
     * is only available if you've enabled DNS hostnames for your VPC
     */
    public readonly publicDns: pulumi.Output<string>;
    /**
     * The public IP address assigned to the instance, if applicable.
     */
    public readonly publicIp: pulumi.Output<string>;
    public readonly registeredBy: pulumi.Output<string>;
    public readonly reportedAgentVersion: pulumi.Output<string>;
    public readonly reportedOsFamily: pulumi.Output<string>;
    public readonly reportedOsName: pulumi.Output<string>;
    public readonly reportedOsVersion: pulumi.Output<string>;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    public readonly rootBlockDevices: pulumi.Output<{ deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }[]>;
    /**
     * Name of the type of root device instances will have by default.  Can be either `"ebs"` or `"instance-store"`
     */
    public readonly rootDeviceType: pulumi.Output<string>;
    public readonly rootDeviceVolumeId: pulumi.Output<string>;
    /**
     * The associated security groups.
     */
    public readonly securityGroupIds: pulumi.Output<string[]>;
    public readonly sshHostDsaKeyFingerprint: pulumi.Output<string>;
    public readonly sshHostRsaKeyFingerprint: pulumi.Output<string>;
    /**
     * Name of the SSH keypair that instances will have by default.
     */
    public readonly sshKeyName: pulumi.Output<string>;
    /**
     * The id of the stack the instance will belong to.
     */
    public readonly stackId: pulumi.Output<string>;
    /**
     * The desired state of the instance.  Can be either `"running"` or `"stopped"`.
     */
    public readonly state: pulumi.Output<string | undefined>;
    public readonly status: pulumi.Output<string>;
    /**
     * Subnet ID to attach to
     */
    public readonly subnetId: pulumi.Output<string>;
    /**
     * Instance tenancy to use. Can be one of `"default"`, `"dedicated"` or `"host"`
     */
    public readonly tenancy: pulumi.Output<string>;
    /**
     * Keyword to choose what virtualization mode created instances
     * will use. Can be either `"paravirtual"` or `"hvm"`.
     */
    public readonly virtualizationType: pulumi.Output<string>;

    /**
     * Create a Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<InstanceArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<InstanceArgs> | pulumi.InputObject<InstanceState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: InstanceState = argsOrState as InstanceState | undefined;
            inputs["agentVersion"] = state ? state.agentVersion : undefined;
            inputs["amiId"] = state ? state.amiId : undefined;
            inputs["architecture"] = state ? state.architecture : undefined;
            inputs["autoScalingType"] = state ? state.autoScalingType : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["deleteEbs"] = state ? state.deleteEbs : undefined;
            inputs["deleteEip"] = state ? state.deleteEip : undefined;
            inputs["ebsBlockDevices"] = state ? state.ebsBlockDevices : undefined;
            inputs["ebsOptimized"] = state ? state.ebsOptimized : undefined;
            inputs["ec2InstanceId"] = state ? state.ec2InstanceId : undefined;
            inputs["ecsClusterArn"] = state ? state.ecsClusterArn : undefined;
            inputs["elasticIp"] = state ? state.elasticIp : undefined;
            inputs["ephemeralBlockDevices"] = state ? state.ephemeralBlockDevices : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["infrastructureClass"] = state ? state.infrastructureClass : undefined;
            inputs["installUpdatesOnBoot"] = state ? state.installUpdatesOnBoot : undefined;
            inputs["instanceProfileArn"] = state ? state.instanceProfileArn : undefined;
            inputs["instanceType"] = state ? state.instanceType : undefined;
            inputs["lastServiceErrorId"] = state ? state.lastServiceErrorId : undefined;
            inputs["layerIds"] = state ? state.layerIds : undefined;
            inputs["os"] = state ? state.os : undefined;
            inputs["platform"] = state ? state.platform : undefined;
            inputs["privateDns"] = state ? state.privateDns : undefined;
            inputs["privateIp"] = state ? state.privateIp : undefined;
            inputs["publicDns"] = state ? state.publicDns : undefined;
            inputs["publicIp"] = state ? state.publicIp : undefined;
            inputs["registeredBy"] = state ? state.registeredBy : undefined;
            inputs["reportedAgentVersion"] = state ? state.reportedAgentVersion : undefined;
            inputs["reportedOsFamily"] = state ? state.reportedOsFamily : undefined;
            inputs["reportedOsName"] = state ? state.reportedOsName : undefined;
            inputs["reportedOsVersion"] = state ? state.reportedOsVersion : undefined;
            inputs["rootBlockDevices"] = state ? state.rootBlockDevices : undefined;
            inputs["rootDeviceType"] = state ? state.rootDeviceType : undefined;
            inputs["rootDeviceVolumeId"] = state ? state.rootDeviceVolumeId : undefined;
            inputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            inputs["sshHostDsaKeyFingerprint"] = state ? state.sshHostDsaKeyFingerprint : undefined;
            inputs["sshHostRsaKeyFingerprint"] = state ? state.sshHostRsaKeyFingerprint : undefined;
            inputs["sshKeyName"] = state ? state.sshKeyName : undefined;
            inputs["stackId"] = state ? state.stackId : undefined;
            inputs["state"] = state ? state.state : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
            inputs["tenancy"] = state ? state.tenancy : undefined;
            inputs["virtualizationType"] = state ? state.virtualizationType : undefined;
        } else {
            const args = argsOrState as InstanceArgs | undefined;
            if (!args || args.layerIds === undefined) {
                throw new Error("Missing required property 'layerIds'");
            }
            if (!args || args.stackId === undefined) {
                throw new Error("Missing required property 'stackId'");
            }
            inputs["agentVersion"] = args ? args.agentVersion : undefined;
            inputs["amiId"] = args ? args.amiId : undefined;
            inputs["architecture"] = args ? args.architecture : undefined;
            inputs["autoScalingType"] = args ? args.autoScalingType : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["createdAt"] = args ? args.createdAt : undefined;
            inputs["deleteEbs"] = args ? args.deleteEbs : undefined;
            inputs["deleteEip"] = args ? args.deleteEip : undefined;
            inputs["ebsBlockDevices"] = args ? args.ebsBlockDevices : undefined;
            inputs["ebsOptimized"] = args ? args.ebsOptimized : undefined;
            inputs["ecsClusterArn"] = args ? args.ecsClusterArn : undefined;
            inputs["elasticIp"] = args ? args.elasticIp : undefined;
            inputs["ephemeralBlockDevices"] = args ? args.ephemeralBlockDevices : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["infrastructureClass"] = args ? args.infrastructureClass : undefined;
            inputs["installUpdatesOnBoot"] = args ? args.installUpdatesOnBoot : undefined;
            inputs["instanceProfileArn"] = args ? args.instanceProfileArn : undefined;
            inputs["instanceType"] = args ? args.instanceType : undefined;
            inputs["lastServiceErrorId"] = args ? args.lastServiceErrorId : undefined;
            inputs["layerIds"] = args ? args.layerIds : undefined;
            inputs["os"] = args ? args.os : undefined;
            inputs["platform"] = args ? args.platform : undefined;
            inputs["privateDns"] = args ? args.privateDns : undefined;
            inputs["privateIp"] = args ? args.privateIp : undefined;
            inputs["publicDns"] = args ? args.publicDns : undefined;
            inputs["publicIp"] = args ? args.publicIp : undefined;
            inputs["registeredBy"] = args ? args.registeredBy : undefined;
            inputs["reportedAgentVersion"] = args ? args.reportedAgentVersion : undefined;
            inputs["reportedOsFamily"] = args ? args.reportedOsFamily : undefined;
            inputs["reportedOsName"] = args ? args.reportedOsName : undefined;
            inputs["reportedOsVersion"] = args ? args.reportedOsVersion : undefined;
            inputs["rootBlockDevices"] = args ? args.rootBlockDevices : undefined;
            inputs["rootDeviceType"] = args ? args.rootDeviceType : undefined;
            inputs["rootDeviceVolumeId"] = args ? args.rootDeviceVolumeId : undefined;
            inputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            inputs["sshHostDsaKeyFingerprint"] = args ? args.sshHostDsaKeyFingerprint : undefined;
            inputs["sshHostRsaKeyFingerprint"] = args ? args.sshHostRsaKeyFingerprint : undefined;
            inputs["sshKeyName"] = args ? args.sshKeyName : undefined;
            inputs["stackId"] = args ? args.stackId : undefined;
            inputs["state"] = args ? args.state : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
            inputs["tenancy"] = args ? args.tenancy : undefined;
            inputs["virtualizationType"] = args ? args.virtualizationType : undefined;
            inputs["ec2InstanceId"] = undefined /*out*/;
        }
        super("aws:opsworks/instance:Instance", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Instance resources.
 */
export interface InstanceState {
    /**
     * The AWS OpsWorks agent to install.  Defaults to `"INHERIT"`.
     */
    readonly agentVersion?: string;
    /**
     * The AMI to use for the instance.  If an AMI is specified, `os` must be `"Custom"`.
     */
    readonly amiId?: string;
    /**
     * Machine architecture for created instances.  Can be either `"x86_64"` (the default) or `"i386"`
     */
    readonly architecture?: string;
    /**
     * Creates load-based or time-based instances.  If set, can be either: `"load"` or `"timer"`.
     */
    readonly autoScalingType?: string;
    /**
     * Name of the availability zone where instances will be created
     * by default.
     */
    readonly availabilityZone?: string;
    readonly createdAt?: string;
    readonly deleteEbs?: boolean;
    readonly deleteEip?: boolean;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    readonly ebsBlockDevices?: { deleteOnTermination?: boolean, deviceName: string, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[];
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: boolean;
    /**
     * EC2 instance ID
     */
    readonly ec2InstanceId?: string;
    readonly ecsClusterArn?: string;
    readonly elasticIp?: string;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    readonly ephemeralBlockDevices?: { deviceName: string, virtualName: string }[];
    /**
     * The instance's host name.
     */
    readonly hostname?: string;
    readonly infrastructureClass?: string;
    /**
     * Controls where to install OS and package updates when the instance boots.  Defaults to `true`.
     */
    readonly installUpdatesOnBoot?: boolean;
    readonly instanceProfileArn?: string;
    /**
     * The type of instance to start
     */
    readonly instanceType?: string;
    readonly lastServiceErrorId?: string;
    /**
     * The ids of the layers the instance will belong to.
     */
    readonly layerIds?: string[];
    /**
     * Name of operating system that will be installed.
     */
    readonly os?: string;
    readonly platform?: string;
    /**
     * The private DNS name assigned to the instance. Can only be
     * used inside the Amazon EC2, and only available if you've enabled DNS hostnames
     * for your VPC
     */
    readonly privateDns?: string;
    /**
     * The private IP address assigned to the instance
     */
    readonly privateIp?: string;
    /**
     * The public DNS name assigned to the instance. For EC2-VPC, this
     * is only available if you've enabled DNS hostnames for your VPC
     */
    readonly publicDns?: string;
    /**
     * The public IP address assigned to the instance, if applicable.
     */
    readonly publicIp?: string;
    readonly registeredBy?: string;
    readonly reportedAgentVersion?: string;
    readonly reportedOsFamily?: string;
    readonly reportedOsName?: string;
    readonly reportedOsVersion?: string;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    readonly rootBlockDevices?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[];
    /**
     * Name of the type of root device instances will have by default.  Can be either `"ebs"` or `"instance-store"`
     */
    readonly rootDeviceType?: string;
    readonly rootDeviceVolumeId?: string;
    /**
     * The associated security groups.
     */
    readonly securityGroupIds?: string[];
    readonly sshHostDsaKeyFingerprint?: string;
    readonly sshHostRsaKeyFingerprint?: string;
    /**
     * Name of the SSH keypair that instances will have by default.
     */
    readonly sshKeyName?: string;
    /**
     * The id of the stack the instance will belong to.
     */
    readonly stackId?: string;
    /**
     * The desired state of the instance.  Can be either `"running"` or `"stopped"`.
     */
    readonly state?: string;
    readonly status?: string;
    /**
     * Subnet ID to attach to
     */
    readonly subnetId?: string;
    /**
     * Instance tenancy to use. Can be one of `"default"`, `"dedicated"` or `"host"`
     */
    readonly tenancy?: string;
    /**
     * Keyword to choose what virtualization mode created instances
     * will use. Can be either `"paravirtual"` or `"hvm"`.
     */
    readonly virtualizationType?: string;
}

/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    /**
     * The AWS OpsWorks agent to install.  Defaults to `"INHERIT"`.
     */
    readonly agentVersion?: string;
    /**
     * The AMI to use for the instance.  If an AMI is specified, `os` must be `"Custom"`.
     */
    readonly amiId?: string;
    /**
     * Machine architecture for created instances.  Can be either `"x86_64"` (the default) or `"i386"`
     */
    readonly architecture?: string;
    /**
     * Creates load-based or time-based instances.  If set, can be either: `"load"` or `"timer"`.
     */
    readonly autoScalingType?: string;
    /**
     * Name of the availability zone where instances will be created
     * by default.
     */
    readonly availabilityZone?: string;
    readonly createdAt?: string;
    readonly deleteEbs?: boolean;
    readonly deleteEip?: boolean;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    readonly ebsBlockDevices?: { deleteOnTermination?: boolean, deviceName: string, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[];
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: boolean;
    readonly ecsClusterArn?: string;
    readonly elasticIp?: string;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    readonly ephemeralBlockDevices?: { deviceName: string, virtualName: string }[];
    /**
     * The instance's host name.
     */
    readonly hostname?: string;
    readonly infrastructureClass?: string;
    /**
     * Controls where to install OS and package updates when the instance boots.  Defaults to `true`.
     */
    readonly installUpdatesOnBoot?: boolean;
    readonly instanceProfileArn?: string;
    /**
     * The type of instance to start
     */
    readonly instanceType?: string;
    readonly lastServiceErrorId?: string;
    /**
     * The ids of the layers the instance will belong to.
     */
    readonly layerIds: string[];
    /**
     * Name of operating system that will be installed.
     */
    readonly os?: string;
    readonly platform?: string;
    /**
     * The private DNS name assigned to the instance. Can only be
     * used inside the Amazon EC2, and only available if you've enabled DNS hostnames
     * for your VPC
     */
    readonly privateDns?: string;
    /**
     * The private IP address assigned to the instance
     */
    readonly privateIp?: string;
    /**
     * The public DNS name assigned to the instance. For EC2-VPC, this
     * is only available if you've enabled DNS hostnames for your VPC
     */
    readonly publicDns?: string;
    /**
     * The public IP address assigned to the instance, if applicable.
     */
    readonly publicIp?: string;
    readonly registeredBy?: string;
    readonly reportedAgentVersion?: string;
    readonly reportedOsFamily?: string;
    readonly reportedOsName?: string;
    readonly reportedOsVersion?: string;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    readonly rootBlockDevices?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[];
    /**
     * Name of the type of root device instances will have by default.  Can be either `"ebs"` or `"instance-store"`
     */
    readonly rootDeviceType?: string;
    readonly rootDeviceVolumeId?: string;
    /**
     * The associated security groups.
     */
    readonly securityGroupIds?: string[];
    readonly sshHostDsaKeyFingerprint?: string;
    readonly sshHostRsaKeyFingerprint?: string;
    /**
     * Name of the SSH keypair that instances will have by default.
     */
    readonly sshKeyName?: string;
    /**
     * The id of the stack the instance will belong to.
     */
    readonly stackId: string;
    /**
     * The desired state of the instance.  Can be either `"running"` or `"stopped"`.
     */
    readonly state?: string;
    readonly status?: string;
    /**
     * Subnet ID to attach to
     */
    readonly subnetId?: string;
    /**
     * Instance tenancy to use. Can be one of `"default"`, `"dedicated"` or `"host"`
     */
    readonly tenancy?: string;
    /**
     * Keyword to choose what virtualization mode created instances
     * will use. Can be either `"paravirtual"` or `"hvm"`.
     */
    readonly virtualizationType?: string;
}
