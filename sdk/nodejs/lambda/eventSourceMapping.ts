// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Lambda event source mapping. This allows Lambda functions to get events from Kinesis, DynamoDB and SQS
 * 
 * For information about Lambda and how to use it, see [What is AWS Lambda?][1]
 * For information about event source mappings, see [CreateEventSourceMapping][2] in the API docs.
 * 
 * ## Example Usage
 * 
 * ### DynamoDB
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.lambda.EventSourceMapping("example", {
 *     eventSourceArn: aws_dynamodb_table_example.streamArn,
 *     functionName: aws_lambda_function_example.arn,
 *     startingPosition: "LATEST",
 * });
 * ```
 * 
 * ### Kinesis
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.lambda.EventSourceMapping("example", {
 *     eventSourceArn: aws_kinesis_stream_example.arn,
 *     functionName: aws_lambda_function_example.arn,
 *     startingPosition: "LATEST",
 * });
 * ```
 * 
 * ### SQS
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.lambda.EventSourceMapping("example", {
 *     eventSourceArn: aws_sqs_queue_sqs_queue_test.arn,
 *     functionName: aws_lambda_function_example.arn,
 * });
 * ```
 */
export class EventSourceMapping extends pulumi.CustomResource {
    /**
     * Get an existing EventSourceMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventSourceMappingState, opts?: pulumi.CustomResourceOptions): EventSourceMapping {
        return new EventSourceMapping(name, <any>state, { ...opts, id: id });
    }

    /**
     * The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB and Kinesis, `10` for SQS.
     */
    public readonly batchSize: pulumi.Output<number | undefined>;
    /**
     * Determines if the mapping will be enabled on creation. Defaults to `true`.
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The event source ARN - can either be a Kinesis or DynamoDB stream.
     */
    public readonly eventSourceArn: pulumi.Output<string>;
    /**
     * The the ARN of the Lambda function the event source mapping is sending events to. (Note: this is a computed value that differs from `function_name` above.)
     */
    public /*out*/ readonly functionArn: pulumi.Output<string>;
    /**
     * The name or the ARN of the Lambda function that will be subscribing to events.
     */
    public readonly functionName: pulumi.Output<string>;
    /**
     * The date this resource was last modified.
     */
    public /*out*/ readonly lastModified: pulumi.Output<string>;
    /**
     * The result of the last AWS Lambda invocation of your Lambda function.
     */
    public /*out*/ readonly lastProcessingResult: pulumi.Output<string>;
    /**
     * The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis or DynamoDB. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
     */
    public readonly startingPosition: pulumi.Output<string | undefined>;
    /**
     * A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
     */
    public readonly startingPositionTimestamp: pulumi.Output<string | undefined>;
    /**
     * The state of the event source mapping.
     */
    public /*out*/ readonly state: pulumi.Output<string>;
    /**
     * The reason the event source mapping is in its current state.
     */
    public /*out*/ readonly stateTransitionReason: pulumi.Output<string>;
    /**
     * The UUID of the created event source mapping.
     */
    public /*out*/ readonly uuid: pulumi.Output<string>;

    /**
     * Create a EventSourceMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<EventSourceMappingArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<EventSourceMappingArgs> | pulumi.InputObject<EventSourceMappingState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EventSourceMappingState = argsOrState as EventSourceMappingState | undefined;
            inputs["batchSize"] = state ? state.batchSize : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["eventSourceArn"] = state ? state.eventSourceArn : undefined;
            inputs["functionArn"] = state ? state.functionArn : undefined;
            inputs["functionName"] = state ? state.functionName : undefined;
            inputs["lastModified"] = state ? state.lastModified : undefined;
            inputs["lastProcessingResult"] = state ? state.lastProcessingResult : undefined;
            inputs["startingPosition"] = state ? state.startingPosition : undefined;
            inputs["startingPositionTimestamp"] = state ? state.startingPositionTimestamp : undefined;
            inputs["state"] = state ? state.state : undefined;
            inputs["stateTransitionReason"] = state ? state.stateTransitionReason : undefined;
            inputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as EventSourceMappingArgs | undefined;
            if (!args || args.eventSourceArn === undefined) {
                throw new Error("Missing required property 'eventSourceArn'");
            }
            if (!args || args.functionName === undefined) {
                throw new Error("Missing required property 'functionName'");
            }
            inputs["batchSize"] = args ? args.batchSize : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["eventSourceArn"] = args ? args.eventSourceArn : undefined;
            inputs["functionName"] = args ? args.functionName : undefined;
            inputs["startingPosition"] = args ? args.startingPosition : undefined;
            inputs["startingPositionTimestamp"] = args ? args.startingPositionTimestamp : undefined;
            inputs["functionArn"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["lastProcessingResult"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["stateTransitionReason"] = undefined /*out*/;
            inputs["uuid"] = undefined /*out*/;
        }
        super("aws:lambda/eventSourceMapping:EventSourceMapping", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventSourceMapping resources.
 */
export interface EventSourceMappingState {
    /**
     * The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB and Kinesis, `10` for SQS.
     */
    readonly batchSize?: number;
    /**
     * Determines if the mapping will be enabled on creation. Defaults to `true`.
     */
    readonly enabled?: boolean;
    /**
     * The event source ARN - can either be a Kinesis or DynamoDB stream.
     */
    readonly eventSourceArn?: string;
    /**
     * The the ARN of the Lambda function the event source mapping is sending events to. (Note: this is a computed value that differs from `function_name` above.)
     */
    readonly functionArn?: string;
    /**
     * The name or the ARN of the Lambda function that will be subscribing to events.
     */
    readonly functionName?: string;
    /**
     * The date this resource was last modified.
     */
    readonly lastModified?: string;
    /**
     * The result of the last AWS Lambda invocation of your Lambda function.
     */
    readonly lastProcessingResult?: string;
    /**
     * The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis or DynamoDB. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
     */
    readonly startingPosition?: string;
    /**
     * A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
     */
    readonly startingPositionTimestamp?: string;
    /**
     * The state of the event source mapping.
     */
    readonly state?: string;
    /**
     * The reason the event source mapping is in its current state.
     */
    readonly stateTransitionReason?: string;
    /**
     * The UUID of the created event source mapping.
     */
    readonly uuid?: string;
}

/**
 * The set of arguments for constructing a EventSourceMapping resource.
 */
export interface EventSourceMappingArgs {
    /**
     * The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB and Kinesis, `10` for SQS.
     */
    readonly batchSize?: number;
    /**
     * Determines if the mapping will be enabled on creation. Defaults to `true`.
     */
    readonly enabled?: boolean;
    /**
     * The event source ARN - can either be a Kinesis or DynamoDB stream.
     */
    readonly eventSourceArn: string;
    /**
     * The name or the ARN of the Lambda function that will be subscribing to events.
     */
    readonly functionName: string;
    /**
     * The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis or DynamoDB. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
     */
    readonly startingPosition?: string;
    /**
     * A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
     */
    readonly startingPositionTimestamp?: string;
}
