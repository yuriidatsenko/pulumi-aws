// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Cognito.Outputs
{

    [OutputType]
    public sealed class UserPoolDeviceConfiguration
    {
        /// <summary>
        /// Indicates whether a challenge is required on a new device. Only applicable to a new device.
        /// </summary>
        public readonly bool? ChallengeRequiredOnNewDevice;
        /// <summary>
        /// If true, a device is only remembered on user prompt.
        /// </summary>
        public readonly bool? DeviceOnlyRememberedOnUserPrompt;

        [OutputConstructor]
        private UserPoolDeviceConfiguration(
            bool? challengeRequiredOnNewDevice,

            bool? deviceOnlyRememberedOnUserPrompt)
        {
            ChallengeRequiredOnNewDevice = challengeRequiredOnNewDevice;
            DeviceOnlyRememberedOnUserPrompt = deviceOnlyRememberedOnUserPrompt;
        }
    }
}
