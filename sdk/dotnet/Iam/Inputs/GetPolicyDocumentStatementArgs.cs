// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iam.Inputs
{

    public sealed class GetPolicyDocumentStatementArgs : Pulumi.InvokeArgs
    {
        [Input("actions")]
        private List<string>? _actions;

        /// <summary>
        /// A list of actions that this statement either allows
        /// or denies. For example, ``["ec2:RunInstances", "s3:*"]``.
        /// </summary>
        public List<string> Actions
        {
            get => _actions ?? (_actions = new List<string>());
            set => _actions = value;
        }

        [Input("conditions")]
        private List<Inputs.GetPolicyDocumentStatementConditionArgs>? _conditions;

        /// <summary>
        /// A nested configuration block (described below)
        /// that defines a further, possibly-service-specific condition that constrains
        /// whether this statement applies.
        /// </summary>
        public List<Inputs.GetPolicyDocumentStatementConditionArgs> Conditions
        {
            get => _conditions ?? (_conditions = new List<Inputs.GetPolicyDocumentStatementConditionArgs>());
            set => _conditions = value;
        }

        /// <summary>
        /// Either "Allow" or "Deny", to specify whether this
        /// statement allows or denies the given actions. The default is "Allow".
        /// </summary>
        [Input("effect")]
        public string? Effect { get; set; }

        [Input("notActions")]
        private List<string>? _notActions;

        /// <summary>
        /// A list of actions that this statement does *not*
        /// apply to. Used to apply a policy statement to all actions *except* those
        /// listed.
        /// </summary>
        public List<string> NotActions
        {
            get => _notActions ?? (_notActions = new List<string>());
            set => _notActions = value;
        }

        [Input("notPrincipals")]
        private List<Inputs.GetPolicyDocumentStatementNotPrincipalArgs>? _notPrincipals;

        /// <summary>
        /// Like `principals` except gives principals that
        /// the statement does *not* apply to.
        /// </summary>
        public List<Inputs.GetPolicyDocumentStatementNotPrincipalArgs> NotPrincipals
        {
            get => _notPrincipals ?? (_notPrincipals = new List<Inputs.GetPolicyDocumentStatementNotPrincipalArgs>());
            set => _notPrincipals = value;
        }

        [Input("notResources")]
        private List<string>? _notResources;

        /// <summary>
        /// A list of resource ARNs that this statement
        /// does *not* apply to. Used to apply a policy statement to all resources
        /// *except* those listed.
        /// </summary>
        public List<string> NotResources
        {
            get => _notResources ?? (_notResources = new List<string>());
            set => _notResources = value;
        }

        [Input("principals")]
        private List<Inputs.GetPolicyDocumentStatementPrincipalArgs>? _principals;

        /// <summary>
        /// A nested configuration block (described below)
        /// specifying a principal (or principal pattern) to which this statement applies.
        /// </summary>
        public List<Inputs.GetPolicyDocumentStatementPrincipalArgs> Principals
        {
            get => _principals ?? (_principals = new List<Inputs.GetPolicyDocumentStatementPrincipalArgs>());
            set => _principals = value;
        }

        [Input("resources")]
        private List<string>? _resources;

        /// <summary>
        /// A list of resource ARNs that this statement applies
        /// to. This is required by AWS if used for an IAM policy.
        /// </summary>
        public List<string> Resources
        {
            get => _resources ?? (_resources = new List<string>());
            set => _resources = value;
        }

        /// <summary>
        /// An ID for the policy statement.
        /// </summary>
        [Input("sid")]
        public string? Sid { get; set; }

        public GetPolicyDocumentStatementArgs()
        {
        }
    }
}
