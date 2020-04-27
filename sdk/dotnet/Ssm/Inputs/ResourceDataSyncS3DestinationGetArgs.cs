// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ssm.Inputs
{

    public sealed class ResourceDataSyncS3DestinationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of S3 bucket where the aggregated data is stored.
        /// </summary>
        [Input("bucketName", required: true)]
        public Input<string> BucketName { get; set; } = null!;

        /// <summary>
        /// ARN of an encryption key for a destination in Amazon S3.
        /// </summary>
        [Input("kmsKeyArn")]
        public Input<string>? KmsKeyArn { get; set; }

        /// <summary>
        /// Prefix for the bucket.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        /// <summary>
        /// Region with the bucket targeted by the Resource Data Sync.
        /// </summary>
        [Input("region", required: true)]
        public Input<string> Region { get; set; } = null!;

        /// <summary>
        /// A supported sync format. Only JsonSerDe is currently supported. Defaults to JsonSerDe.
        /// </summary>
        [Input("syncFormat")]
        public Input<string>? SyncFormat { get; set; }

        public ResourceDataSyncS3DestinationGetArgs()
        {
        }
    }
}
