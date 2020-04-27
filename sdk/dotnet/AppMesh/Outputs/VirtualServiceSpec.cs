// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Outputs
{

    [OutputType]
    public sealed class VirtualServiceSpec
    {
        /// <summary>
        /// The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.
        /// </summary>
        public readonly Outputs.VirtualServiceSpecProvider? Provider;

        [OutputConstructor]
        private VirtualServiceSpec(Outputs.VirtualServiceSpecProvider? provider)
        {
            Provider = provider;
        }
    }
}
