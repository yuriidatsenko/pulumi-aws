// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allocates a static IP address.
 * 
 * > **Note:** Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const test = new aws.lightsail.StaticIp("test", {});
 * ```
 */
export class StaticIp extends pulumi.CustomResource {
    /**
     * Get an existing StaticIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticIpState, opts?: pulumi.CustomResourceOptions): StaticIp {
        return new StaticIp(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the Lightsail static IP
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The allocated static IP address
     */
    public /*out*/ readonly ipAddress: pulumi.Output<string>;
    /**
     * The name for the allocated static IP
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The support code.
     */
    public /*out*/ readonly supportCode: pulumi.Output<string>;

    /**
     * Create a StaticIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<StaticIpArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<StaticIpArgs> | pulumi.InputObject<StaticIpState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: StaticIpState = argsOrState as StaticIpState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["supportCode"] = state ? state.supportCode : undefined;
        } else {
            const args = argsOrState as StaticIpArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["ipAddress"] = undefined /*out*/;
            inputs["supportCode"] = undefined /*out*/;
        }
        super("aws:lightsail/staticIp:StaticIp", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering StaticIp resources.
 */
export interface StaticIpState {
    /**
     * The ARN of the Lightsail static IP
     */
    readonly arn?: string;
    /**
     * The allocated static IP address
     */
    readonly ipAddress?: string;
    /**
     * The name for the allocated static IP
     */
    readonly name?: string;
    /**
     * The support code.
     */
    readonly supportCode?: string;
}

/**
 * The set of arguments for constructing a StaticIp resource.
 */
export interface StaticIpArgs {
    /**
     * The name for the allocated static IP
     */
    readonly name?: string;
}
