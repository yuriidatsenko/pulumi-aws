// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Rds.Inputs
{

    public sealed class GlobalClusterGlobalClusterMemberArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Amazon Resource Name (ARN) of member DB Cluster
        /// </summary>
        [Input("dbClusterArn")]
        public Input<string>? DbClusterArn { get; set; }

        /// <summary>
        /// Whether the member is the primary DB Cluster
        /// </summary>
        [Input("isWriter")]
        public Input<bool>? IsWriter { get; set; }

        public GlobalClusterGlobalClusterMemberArgs()
        {
        }
    }
}
