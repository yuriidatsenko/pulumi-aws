// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Synthetics.Outputs
{

    [OutputType]
    public sealed class CanarySchedule
    {
        /// <summary>
        /// Duration in seconds, for the canary to continue making regular runs according to the schedule in the Expression value.
        /// </summary>
        public readonly int? DurationInSeconds;
        /// <summary>
        /// Rate expression that defines how often the canary is to run. The syntax is rate(number unit). unit can be minute, minutes, or hour.
        /// </summary>
        public readonly string Expression;

        [OutputConstructor]
        private CanarySchedule(
            int? durationInSeconds,

            string expression)
        {
            DurationInSeconds = durationInSeconds;
            Expression = expression;
        }
    }
}
