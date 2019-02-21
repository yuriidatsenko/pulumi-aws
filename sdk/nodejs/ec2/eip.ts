// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an Elastic IP resource.
 * 
 * > **Note:** EIP may require IGW to exist prior to association. Use `depends_on` to set an explicit dependency on the IGW.
 * 
 * > **Note:** Do not use `network_interface` to associate the EIP to `aws_lb` or `aws_nat_gateway` resources. Instead use the `allocation_id` available in those resources to allow AWS to manage the association, otherwise you will see `AuthFailure` errors.
 * 
 * ## Example Usage
 * 
 * Single EIP associated with an instance:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const lb = new aws.ec2.Eip("lb", {
 *     instance: aws_instance_web.id,
 *     vpc: true,
 * });
 * ```
 * 
 * Multiple EIPs associated with a single network interface:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const multi_ip = new aws.ec2.NetworkInterface("multi-ip", {
 *     privateIps: [
 *         "10.0.0.10",
 *         "10.0.0.11",
 *     ],
 *     subnetId: aws_subnet_main.id,
 * });
 * const one = new aws.ec2.Eip("one", {
 *     associateWithPrivateIp: "10.0.0.10",
 *     networkInterface: multi_ip.id,
 *     vpc: true,
 * });
 * const two = new aws.ec2.Eip("two", {
 *     associateWithPrivateIp: "10.0.0.11",
 *     networkInterface: multi_ip.id,
 *     vpc: true,
 * });
 * ```
 * 
 * Attaching an EIP to an Instance with a pre-assigned private ip (VPC Only):
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const defaultVpc = new aws.ec2.Vpc("default", {
 *     cidrBlock: "10.0.0.0/16",
 *     enableDnsHostnames: true,
 * });
 * const gw = new aws.ec2.InternetGateway("gw", {
 *     vpcId: defaultVpc.id,
 * });
 * const tfTestSubnet = new aws.ec2.Subnet("tf_test_subnet", {
 *     cidrBlock: "10.0.0.0/24",
 *     mapPublicIpOnLaunch: true,
 *     vpcId: defaultVpc.id,
 * }, {dependsOn: [gw]});
 * const foo = new aws.ec2.Instance("foo", {
 *     // us-west-2
 *     ami: "ami-5189a661",
 *     instanceType: "t2.micro",
 *     privateIp: "10.0.0.12",
 *     subnetId: tfTestSubnet.id,
 * });
 * const bar = new aws.ec2.Eip("bar", {
 *     associateWithPrivateIp: "10.0.0.12",
 *     instance: foo.id,
 *     vpc: true,
 * }, {dependsOn: [gw]});
 * ```
 * 
 * Allocating EIP from the BYOIP pool:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const byoip_ip = new aws.ec2.Eip("byoip-ip", {
 *     publicIpv4Pool: "ipv4pool-ec2-012345",
 *     vpc: true,
 * });
 * ```
 */
export class Eip extends pulumi.CustomResource {
    /**
     * Get an existing Eip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EipState, opts?: pulumi.CustomResourceOptions): Eip {
        return new Eip(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly allocationId: pulumi.Output<string>;
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    public readonly associateWithPrivateIp: pulumi.Output<string | undefined>;
    public /*out*/ readonly associationId: pulumi.Output<string>;
    public /*out*/ readonly domain: pulumi.Output<string>;
    /**
     * EC2 instance ID.
     */
    public readonly instance: pulumi.Output<string>;
    /**
     * Network interface ID to associate with.
     */
    public readonly networkInterface: pulumi.Output<string>;
    /**
     * Contains the private IP address (if in VPC).
     */
    public /*out*/ readonly privateIp: pulumi.Output<string>;
    /**
     * Contains the public IP address.
     */
    public /*out*/ readonly publicIp: pulumi.Output<string>;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    public readonly publicIpv4Pool: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    public readonly vpc: pulumi.Output<boolean>;

    /**
     * Create a Eip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<EipArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<EipArgs> | pulumi.InputObject<EipState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EipState = argsOrState as EipState | undefined;
            inputs["allocationId"] = state ? state.allocationId : undefined;
            inputs["associateWithPrivateIp"] = state ? state.associateWithPrivateIp : undefined;
            inputs["associationId"] = state ? state.associationId : undefined;
            inputs["domain"] = state ? state.domain : undefined;
            inputs["instance"] = state ? state.instance : undefined;
            inputs["networkInterface"] = state ? state.networkInterface : undefined;
            inputs["privateIp"] = state ? state.privateIp : undefined;
            inputs["publicIp"] = state ? state.publicIp : undefined;
            inputs["publicIpv4Pool"] = state ? state.publicIpv4Pool : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpc"] = state ? state.vpc : undefined;
        } else {
            const args = argsOrState as EipArgs | undefined;
            inputs["associateWithPrivateIp"] = args ? args.associateWithPrivateIp : undefined;
            inputs["instance"] = args ? args.instance : undefined;
            inputs["networkInterface"] = args ? args.networkInterface : undefined;
            inputs["publicIpv4Pool"] = args ? args.publicIpv4Pool : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpc"] = args ? args.vpc : undefined;
            inputs["allocationId"] = undefined /*out*/;
            inputs["associationId"] = undefined /*out*/;
            inputs["domain"] = undefined /*out*/;
            inputs["privateIp"] = undefined /*out*/;
            inputs["publicIp"] = undefined /*out*/;
        }
        super("aws:ec2/eip:Eip", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Eip resources.
 */
export interface EipState {
    readonly allocationId?: string;
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    readonly associateWithPrivateIp?: string;
    readonly associationId?: string;
    readonly domain?: string;
    /**
     * EC2 instance ID.
     */
    readonly instance?: string;
    /**
     * Network interface ID to associate with.
     */
    readonly networkInterface?: string;
    /**
     * Contains the private IP address (if in VPC).
     */
    readonly privateIp?: string;
    /**
     * Contains the public IP address.
     */
    readonly publicIp?: string;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    readonly publicIpv4Pool?: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    readonly vpc?: boolean;
}

/**
 * The set of arguments for constructing a Eip resource.
 */
export interface EipArgs {
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    readonly associateWithPrivateIp?: string;
    /**
     * EC2 instance ID.
     */
    readonly instance?: string;
    /**
     * Network interface ID to associate with.
     */
    readonly networkInterface?: string;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    readonly publicIpv4Pool?: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    readonly vpc?: boolean;
}
