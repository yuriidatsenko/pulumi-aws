// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecr.Inputs
{

    public sealed class RepositoryEncryptionConfigurationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The encryption type to use for the repository. Valid values are `AES256` or `KMS`. Defaults to `AES256`.
        /// </summary>
        [Input("encryptionType")]
        public Input<string>? EncryptionType { get; set; }

        /// <summary>
        /// The ARN of the KMS key to use when `encryption_type` is `KMS`. If not specified, uses the default AWS managed key for ECR.
        /// </summary>
        [Input("kmsKey")]
        public Input<string>? KmsKey { get; set; }

        public RepositoryEncryptionConfigurationGetArgs()
        {
        }
    }
}
