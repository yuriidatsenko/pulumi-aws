// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package emr

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
	case "aws:emr/cluster:Cluster":
		r, err = NewCluster(ctx, name, nil, pulumi.URN_(urn))
	case "aws:emr/instanceFleet:InstanceFleet":
		r, err = NewInstanceFleet(ctx, name, nil, pulumi.URN_(urn))
	case "aws:emr/instanceGroup:InstanceGroup":
		r, err = NewInstanceGroup(ctx, name, nil, pulumi.URN_(urn))
	case "aws:emr/managedScalingPolicy:ManagedScalingPolicy":
		r, err = NewManagedScalingPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "aws:emr/securityConfiguration:SecurityConfiguration":
		r, err = NewSecurityConfiguration(ctx, name, nil, pulumi.URN_(urn))
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
		"emr/cluster",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"emr/instanceFleet",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"emr/instanceGroup",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"emr/managedScalingPolicy",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"aws",
		"emr/securityConfiguration",
		&module{version},
	)
}
