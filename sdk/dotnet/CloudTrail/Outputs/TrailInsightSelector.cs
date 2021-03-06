// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudTrail.Outputs
{

    [OutputType]
    public sealed class TrailInsightSelector
    {
        /// <summary>
        /// The type of insights to log on a trail. In this release, only `ApiCallRateInsight` is supported as an insight type.
        /// </summary>
        public readonly string InsightType;

        [OutputConstructor]
        private TrailInsightSelector(string insightType)
        {
            InsightType = insightType;
        }
    }
}
