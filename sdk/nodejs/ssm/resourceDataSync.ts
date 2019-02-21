// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a SSM resource data sync.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const hogeBucket = new aws.s3.Bucket("hoge", {
 *     bucket: "tf-test-bucket-1234",
 *     region: "us-east-1",
 * });
 * const hogeBucketPolicy = new aws.s3.BucketPolicy("hoge", {
 *     bucket: hogeBucket.bucket,
 *     policy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [
 *         {
 *             "Sid": "SSMBucketPermissionsCheck",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "Service": "ssm.amazonaws.com"
 *             },
 *             "Action": "s3:GetBucketAcl",
 *             "Resource": "arn:aws:s3:::tf-test-bucket-1234"
 *         },
 *         {
 *             "Sid": " SSMBucketDelivery",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "Service": "ssm.amazonaws.com"
 *             },
 *             "Action": "s3:PutObject",
 *             "Resource": ["arn:aws:s3:::tf-test-bucket-1234/*"],
 *             "Condition": {
 *                 "StringEquals": {
 *                     "s3:x-amz-acl": "bucket-owner-full-control"
 *                 }
 *             }
 *         }
 *     ]
 * }
 * `,
 * });
 * const foo = new aws.ssm.ResourceDataSync("foo", {
 *     s3Destination: {
 *         bucketName: hogeBucket.bucket,
 *         region: hogeBucket.region,
 *     },
 * });
 * ```
 * 
 * ## s3_destination
 * 
 * `s3_destination` supports the following:
 * 
 * * `bucket_name` - (Required) Name of S3 bucket where the aggregated data is stored.
 * * `region` - (Required) Region with the bucket targeted by the Resource Data Sync.
 * * `kms_key_arn` - (Optional) ARN of an encryption key for a destination in Amazon S3.
 * * `prefix` - (Optional) Prefix for the bucket.
 * * `sync_format` - (Optional) A supported sync format. Only JsonSerDe is currently supported. Defaults to JsonSerDe.
 */
export class ResourceDataSync extends pulumi.CustomResource {
    /**
     * Get an existing ResourceDataSync resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceDataSyncState, opts?: pulumi.CustomResourceOptions): ResourceDataSync {
        return new ResourceDataSync(name, <any>state, { ...opts, id: id });
    }

    /**
     * Name for the configuration.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Amazon S3 configuration details for the sync.
     */
    public readonly s3Destination: pulumi.Output<{ bucketName: string, kmsKeyArn?: string, prefix?: string, region: string, syncFormat?: string }>;

    /**
     * Create a ResourceDataSync resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<ResourceDataSyncArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<ResourceDataSyncArgs> | pulumi.InputObject<ResourceDataSyncState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ResourceDataSyncState = argsOrState as ResourceDataSyncState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["s3Destination"] = state ? state.s3Destination : undefined;
        } else {
            const args = argsOrState as ResourceDataSyncArgs | undefined;
            if (!args || args.s3Destination === undefined) {
                throw new Error("Missing required property 's3Destination'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["s3Destination"] = args ? args.s3Destination : undefined;
        }
        super("aws:ssm/resourceDataSync:ResourceDataSync", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ResourceDataSync resources.
 */
export interface ResourceDataSyncState {
    /**
     * Name for the configuration.
     */
    readonly name?: string;
    /**
     * Amazon S3 configuration details for the sync.
     */
    readonly s3Destination?: { bucketName: string, kmsKeyArn?: string, prefix?: string, region: string, syncFormat?: string };
}

/**
 * The set of arguments for constructing a ResourceDataSync resource.
 */
export interface ResourceDataSyncArgs {
    /**
     * Name for the configuration.
     */
    readonly name?: string;
    /**
     * Amazon S3 configuration details for the sync.
     */
    readonly s3Destination: { bucketName: string, kmsKeyArn?: string, prefix?: string, region: string, syncFormat?: string };
}
