// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a AWS Transfer User SSH Key resource.
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const fooRole = new aws.iam.Role("foo", {
 *     assumeRolePolicy: `{
 * 	"Version": "2012-10-17",
 * 	"Statement": [
 * 		{
 * 		"Effect": "Allow",
 * 		"Principal": {
 * 			"Service": "transfer.amazonaws.com"
 * 		},
 * 		"Action": "sts:AssumeRole"
 * 		}
 * 	]
 * }
 * `,
 * });
 * const fooServer = new aws.transfer.Server("foo", {
 *     identityProviderType: "SERVICE_MANAGED",
 *     tags: {
 *         NAME: "tf-acc-test-transfer-server",
 *     },
 * });
 * const fooRolePolicy = new aws.iam.RolePolicy("foo", {
 *     policy: `{
 * 	"Version": "2012-10-17",
 * 	"Statement": [
 * 		{
 * 			"Sid": "AllowFullAccesstoS3",
 * 			"Effect": "Allow",
 * 			"Action": [
 * 				"s3:*"
 * 			],
 * 			"Resource": "*"
 * 		}
 * 	]
 * }
 * `,
 *     role: fooRole.id,
 * });
 * const fooUser = new aws.transfer.User("foo", {
 *     role: fooRole.arn,
 *     serverId: fooServer.id,
 *     tags: {
 *         NAME: "tftestuser",
 *     },
 *     userName: "tftestuser",
 * });
 * const fooSshKey = new aws.transfer.SshKey("foo", {
 *     body: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD3F6tyPEFEzV0LX3X8BsXdMsQz1x2cEikKDEY0aIj41qgxMCP/iteneqXSIFZBp5vizPvaoIR3Um9xK7PGoW8giupGn+EPuxIA4cDM4vzOqOkiMPhz5XK0whEjkVzTo4+S0puvDZuwIsdiW9mxhJc7tgBNL0cYlWSYVkz4G/fslNfRPW5mYAM49f4fhtxPb5ok4Q2Lg9dPKVHO/Bgeu5woMc7RY0p1ej6D4CKFE6lymSDJpW0YHX/wqE9+cfEauh7xZcG0q9t2ta6F6fmX0agvpFyZo8aFbXeUBr7osSCJNgvavWbM/06niWrOvYX2xwWdhXmXSrbX8ZbabVohBK41 example@example.com",
 *     serverId: fooServer.id,
 *     userName: fooUser.userName,
 * });
 * ```
 */
export class SshKey extends pulumi.CustomResource {
    /**
     * Get an existing SshKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshKeyState, opts?: pulumi.CustomResourceOptions): SshKey {
        return new SshKey(name, <any>state, { ...opts, id: id });
    }

    /**
     * The public key portion of an SSH key pair.
     */
    public readonly body: pulumi.Output<string>;
    /**
     * The Server ID of the Transfer Server (e.g. `s-12345678`)
     */
    public readonly serverId: pulumi.Output<string>;
    /**
     * The name of the user account that is assigned to one or more servers.
     */
    public readonly userName: pulumi.Output<string>;

    /**
     * Create a SshKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<SshKeyArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<SshKeyArgs> | pulumi.InputObject<SshKeyState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SshKeyState = argsOrState as SshKeyState | undefined;
            inputs["body"] = state ? state.body : undefined;
            inputs["serverId"] = state ? state.serverId : undefined;
            inputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as SshKeyArgs | undefined;
            if (!args || args.body === undefined) {
                throw new Error("Missing required property 'body'");
            }
            if (!args || args.serverId === undefined) {
                throw new Error("Missing required property 'serverId'");
            }
            if (!args || args.userName === undefined) {
                throw new Error("Missing required property 'userName'");
            }
            inputs["body"] = args ? args.body : undefined;
            inputs["serverId"] = args ? args.serverId : undefined;
            inputs["userName"] = args ? args.userName : undefined;
        }
        super("aws:transfer/sshKey:SshKey", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SshKey resources.
 */
export interface SshKeyState {
    /**
     * The public key portion of an SSH key pair.
     */
    readonly body?: string;
    /**
     * The Server ID of the Transfer Server (e.g. `s-12345678`)
     */
    readonly serverId?: string;
    /**
     * The name of the user account that is assigned to one or more servers.
     */
    readonly userName?: string;
}

/**
 * The set of arguments for constructing a SshKey resource.
 */
export interface SshKeyArgs {
    /**
     * The public key portion of an SSH key pair.
     */
    readonly body: string;
    /**
     * The Server ID of the Transfer Server (e.g. `s-12345678`)
     */
    readonly serverId: string;
    /**
     * The name of the user account that is assigned to one or more servers.
     */
    readonly userName: string;
}
