// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ssm.Outputs
{

    [OutputType]
    public sealed class PatchBaselineApprovalRule
    {
        /// <summary>
        /// The number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline. Valid Range: 0 to 100.
        /// </summary>
        public readonly int ApproveAfterDays;
        /// <summary>
        /// Defines the compliance level for patches approved by this rule. Valid compliance levels include the following: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`, `UNSPECIFIED`. The default value is `UNSPECIFIED`.
        /// </summary>
        public readonly string? ComplianceLevel;
        /// <summary>
        /// Boolean enabling the application of non-security updates. The default value is 'false'. Valid for Linux instances only.
        /// </summary>
        public readonly bool? EnableNonSecurity;
        /// <summary>
        /// The patch filter group that defines the criteria for the rule. Up to 5 patch filters can be specified per approval rule using Key/Value pairs. Valid Keys are `PATCH_SET | PRODUCT | CLASSIFICATION | MSRC_SEVERITY | PATCH_ID`.
        /// </summary>
        public readonly ImmutableArray<Outputs.PatchBaselineApprovalRulePatchFilter> PatchFilters;

        [OutputConstructor]
        private PatchBaselineApprovalRule(
            int approveAfterDays,

            string? complianceLevel,

            bool? enableNonSecurity,

            ImmutableArray<Outputs.PatchBaselineApprovalRulePatchFilter> patchFilters)
        {
            ApproveAfterDays = approveAfterDays;
            ComplianceLevel = complianceLevel;
            EnableNonSecurity = enableNonSecurity;
            PatchFilters = patchFilters;
        }
    }
}
