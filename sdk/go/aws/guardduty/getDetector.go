// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package guardduty

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Retrieve information about a GuardDuty detector.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/guardduty_detector.html.markdown.
func LookupDetector(ctx *pulumi.Context, args *GetDetectorArgs) (*GetDetectorResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["id"] = args.Id
	}
	outputs, err := ctx.Invoke("aws:guardduty/getDetector:getDetector", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDetectorResult{
		FindingPublishingFrequency: outputs["findingPublishingFrequency"],
		Id: outputs["id"],
		ServiceRoleArn: outputs["serviceRoleArn"],
		Status: outputs["status"],
	}, nil
}

// A collection of arguments for invoking getDetector.
type GetDetectorArgs struct {
	// The ID of the detector.
	Id interface{}
}

// A collection of values returned by getDetector.
type GetDetectorResult struct {
	// The frequency of notifications sent about subsequent finding occurrences.
	FindingPublishingFrequency interface{}
	Id interface{}
	// The service-linked role that grants GuardDuty access to the resources in the AWS account.
	ServiceRoleArn interface{}
	// The current status of the detector.
	Status interface{}
}
