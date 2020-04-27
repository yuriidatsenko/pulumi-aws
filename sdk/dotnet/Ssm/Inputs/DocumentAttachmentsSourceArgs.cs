// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ssm.Inputs
{

    public sealed class DocumentAttachmentsSourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The key describing the location of an attachment to a document. Valid key types include: `SourceUrl` and `S3FileUrl`
        /// </summary>
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        /// <summary>
        /// The name of the document attachment file
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("values", required: true)]
        private InputList<string>? _values;

        /// <summary>
        /// The value describing the location of an attachment to a document
        /// </summary>
        public InputList<string> Values
        {
            get => _values ?? (_values = new InputList<string>());
            set => _values = value;
        }

        public DocumentAttachmentsSourceArgs()
        {
        }
    }
}
