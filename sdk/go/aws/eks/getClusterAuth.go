// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eks

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func GetClusterAuth(ctx *pulumi.Context, args *GetClusterAuthArgs, opts ...pulumi.InvokeOption) (*GetClusterAuthResult, error) {
	var rv GetClusterAuthResult
	err := ctx.Invoke("aws:eks/getClusterAuth:getClusterAuth", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getClusterAuth.
type GetClusterAuthArgs struct {
	// The name of the cluster
	Name string `pulumi:"name"`
}

// A collection of values returned by getClusterAuth.
type GetClusterAuthResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Name string `pulumi:"name"`
	// The token to use to authenticate with the cluster.
	Token string `pulumi:"token"`
}
