// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3Control
{
    /// <summary>
    /// ## Import
    /// 
    /// S3 Control Bucket Lifecycle Configurations can be imported using the Amazon Resource Name (ARN), e.g.
    /// 
    /// ```sh
    ///  $ pulumi import aws:s3control/bucketLifecycleConfiguration:BucketLifecycleConfiguration example arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-12345678/bucket/example
    /// ```
    /// </summary>
    public partial class BucketLifecycleConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the bucket.
        /// </summary>
        [Output("bucket")]
        public Output<string> Bucket { get; private set; } = null!;

        /// <summary>
        /// Configuration block(s) containing lifecycle rules for the bucket.
        /// </summary>
        [Output("rules")]
        public Output<ImmutableArray<Outputs.BucketLifecycleConfigurationRule>> Rules { get; private set; } = null!;


        /// <summary>
        /// Create a BucketLifecycleConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BucketLifecycleConfiguration(string name, BucketLifecycleConfigurationArgs args, CustomResourceOptions? options = null)
            : base("aws:s3control/bucketLifecycleConfiguration:BucketLifecycleConfiguration", name, args ?? new BucketLifecycleConfigurationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BucketLifecycleConfiguration(string name, Input<string> id, BucketLifecycleConfigurationState? state = null, CustomResourceOptions? options = null)
            : base("aws:s3control/bucketLifecycleConfiguration:BucketLifecycleConfiguration", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BucketLifecycleConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BucketLifecycleConfiguration Get(string name, Input<string> id, BucketLifecycleConfigurationState? state = null, CustomResourceOptions? options = null)
        {
            return new BucketLifecycleConfiguration(name, id, state, options);
        }
    }

    public sealed class BucketLifecycleConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the bucket.
        /// </summary>
        [Input("bucket", required: true)]
        public Input<string> Bucket { get; set; } = null!;

        [Input("rules", required: true)]
        private InputList<Inputs.BucketLifecycleConfigurationRuleArgs>? _rules;

        /// <summary>
        /// Configuration block(s) containing lifecycle rules for the bucket.
        /// </summary>
        public InputList<Inputs.BucketLifecycleConfigurationRuleArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<Inputs.BucketLifecycleConfigurationRuleArgs>());
            set => _rules = value;
        }

        public BucketLifecycleConfigurationArgs()
        {
        }
    }

    public sealed class BucketLifecycleConfigurationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of the bucket.
        /// </summary>
        [Input("bucket")]
        public Input<string>? Bucket { get; set; }

        [Input("rules")]
        private InputList<Inputs.BucketLifecycleConfigurationRuleGetArgs>? _rules;

        /// <summary>
        /// Configuration block(s) containing lifecycle rules for the bucket.
        /// </summary>
        public InputList<Inputs.BucketLifecycleConfigurationRuleGetArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<Inputs.BucketLifecycleConfigurationRuleGetArgs>());
            set => _rules = value;
        }

        public BucketLifecycleConfigurationState()
        {
        }
    }
}