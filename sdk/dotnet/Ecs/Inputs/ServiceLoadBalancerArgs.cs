// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecs.Inputs
{

    public sealed class ServiceLoadBalancerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the container to associate with the load balancer (as it appears in a container definition).
        /// </summary>
        [Input("containerName", required: true)]
        public Input<string> ContainerName { get; set; } = null!;

        /// <summary>
        /// The port on the container to associate with the load balancer.
        /// </summary>
        [Input("containerPort", required: true)]
        public Input<int> ContainerPort { get; set; } = null!;

        /// <summary>
        /// The name of the ELB (Classic) to associate with the service.
        /// </summary>
        [Input("elbName")]
        public Input<string>? ElbName { get; set; }

        /// <summary>
        /// The ARN of the Load Balancer target group to associate with the service.
        /// </summary>
        [Input("targetGroupArn")]
        public Input<string>? TargetGroupArn { get; set; }

        public ServiceLoadBalancerArgs()
        {
        }
    }
}
