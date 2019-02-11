// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {ARN} from "../index";

/**
 * Manages an AWS DataSync Task, which represents a configuration for synchronization. Starting an execution of these DataSync Tasks (actually synchronizing files) is performed outside of this Terraform resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.datasync.Task("example", {
 *     destinationLocationArn: aws_datasync_location_s3_destination.arn,
 *     options: {
 *         bytesPerSecond: -1,
 *     },
 *     sourceLocationArn: aws_datasync_location_nfs_source.arn,
 * });
 * ```
 */
export class Task extends pulumi.CustomResource {
    /**
     * Get an existing Task resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TaskState, opts?: pulumi.CustomResourceOptions): Task {
        return new Task(name, <any>state, { ...opts, id: id });
    }

    /**
     * Amazon Resource Name (ARN) of the DataSync Task.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
     */
    public readonly cloudwatchLogGroupArn: pulumi.Output<ARN | undefined>;
    /**
     * Amazon Resource Name (ARN) of destination DataSync Location.
     */
    public readonly destinationLocationArn: pulumi.Output<ARN>;
    /**
     * Name of the DataSync Task.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
     */
    public readonly options: pulumi.Output<{ atime?: string, bytesPerSecond?: number, gid?: string, mtime?: string, posixPermissions?: string, preserveDeletedFiles?: string, preserveDevices?: string, uid?: string, verifyMode?: string } | undefined>;
    /**
     * Amazon Resource Name (ARN) of source DataSync Location.
     */
    public readonly sourceLocationArn: pulumi.Output<ARN>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Task.
     */
    public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Task resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TaskArgs | TaskState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TaskState = argsOrState as TaskState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["cloudwatchLogGroupArn"] = state ? state.cloudwatchLogGroupArn : undefined;
            inputs["destinationLocationArn"] = state ? state.destinationLocationArn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["options"] = state ? state.options : undefined;
            inputs["sourceLocationArn"] = state ? state.sourceLocationArn : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as TaskArgs | undefined;
            if (!args || args.destinationLocationArn === undefined) {
                throw new Error("Missing required property 'destinationLocationArn'");
            }
            if (!args || args.sourceLocationArn === undefined) {
                throw new Error("Missing required property 'sourceLocationArn'");
            }
            inputs["cloudwatchLogGroupArn"] = args ? args.cloudwatchLogGroupArn : undefined;
            inputs["destinationLocationArn"] = args ? args.destinationLocationArn : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["sourceLocationArn"] = args ? args.sourceLocationArn : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:datasync/task:Task", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Task resources.
 */
export interface TaskState {
    /**
     * Amazon Resource Name (ARN) of the DataSync Task.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
     */
    readonly cloudwatchLogGroupArn?: pulumi.Input<ARN>;
    /**
     * Amazon Resource Name (ARN) of destination DataSync Location.
     */
    readonly destinationLocationArn?: pulumi.Input<ARN>;
    /**
     * Name of the DataSync Task.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
     */
    readonly options?: pulumi.Input<{ atime?: pulumi.Input<string>, bytesPerSecond?: pulumi.Input<number>, gid?: pulumi.Input<string>, mtime?: pulumi.Input<string>, posixPermissions?: pulumi.Input<string>, preserveDeletedFiles?: pulumi.Input<string>, preserveDevices?: pulumi.Input<string>, uid?: pulumi.Input<string>, verifyMode?: pulumi.Input<string> }>;
    /**
     * Amazon Resource Name (ARN) of source DataSync Location.
     */
    readonly sourceLocationArn?: pulumi.Input<ARN>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Task.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Task resource.
 */
export interface TaskArgs {
    /**
     * Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
     */
    readonly cloudwatchLogGroupArn?: pulumi.Input<ARN>;
    /**
     * Amazon Resource Name (ARN) of destination DataSync Location.
     */
    readonly destinationLocationArn: pulumi.Input<ARN>;
    /**
     * Name of the DataSync Task.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
     */
    readonly options?: pulumi.Input<{ atime?: pulumi.Input<string>, bytesPerSecond?: pulumi.Input<number>, gid?: pulumi.Input<string>, mtime?: pulumi.Input<string>, posixPermissions?: pulumi.Input<string>, preserveDeletedFiles?: pulumi.Input<string>, preserveDevices?: pulumi.Input<string>, uid?: pulumi.Input<string>, verifyMode?: pulumi.Input<string> }>;
    /**
     * Amazon Resource Name (ARN) of source DataSync Location.
     */
    readonly sourceLocationArn: pulumi.Input<ARN>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Task.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}