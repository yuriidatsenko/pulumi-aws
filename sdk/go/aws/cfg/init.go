// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cfg

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "aws:cfg/aggregateAuthorization:AggregateAuthorization":
		r, err = NewAggregateAuthorization(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/configurationAggregator:ConfigurationAggregator":
		r, err = NewConfigurationAggregator(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/conformancePack:ConformancePack":
		r, err = NewConformancePack(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/deliveryChannel:DeliveryChannel":
		r, err = NewDeliveryChannel(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/organizationCustomRule:OrganizationCustomRule":
		r, err = NewOrganizationCustomRule(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/organizationManagedRule:OrganizationManagedRule":
		r, err = NewOrganizationManagedRule(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/recorder:Recorder":
		r, err = NewRecorder(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/recorderStatus:RecorderStatus":
		r, err = NewRecorderStatus(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/remediationConfiguration:RemediationConfiguration":
		r, err = NewRemediationConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "aws:cfg/rule:Rule":
		r, err = NewRule(ctx, name, nil, pulumi.URN_(urn))
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	return
}

func init() {
	version, err := aws.PkgVersion()
	if err != nil {
		fmt.Println("failed to determine package version. defaulting to v1: %v", err)
	}
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/aggregateAuthorization",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/configurationAggregator",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/conformancePack",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/deliveryChannel",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/organizationCustomRule",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/organizationManagedRule",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/recorder",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/recorderStatus",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/remediationConfiguration",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"cfg/rule",
		&module{version},
	)
}
