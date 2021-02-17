// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package fms

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides a resource to create an AWS Firewall Manager policy. You need to be using AWS organizations and have enabled the Firewall Manager administrator account.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"fmt"
//
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/fms"
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/wafregional"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		test, err := wafregional.NewRuleGroup(ctx, "test", &wafregional.RuleGroupArgs{
// 			MetricName: pulumi.String("WAFRuleGroupExample"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = fms.NewPolicy(ctx, "example", &fms.PolicyArgs{
// 			ExcludeResourceTags: pulumi.Bool(false),
// 			RemediationEnabled:  pulumi.Bool(false),
// 			ResourceTypeLists: pulumi.StringArray{
// 				pulumi.String("AWS::ElasticLoadBalancingV2::LoadBalancer"),
// 			},
// 			SecurityServicePolicyData: &fms.PolicySecurityServicePolicyDataArgs{
// 				ManagedServiceData: test.ID().ApplyT(func(id string) (string, error) {
// 					return fmt.Sprintf("%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v", "      {\n", "        \"type\": \"WAF\",\n", "        \"ruleGroups\":\n", "          [{\n", "            \"id\":\"", id, "\",\n", "            \"overrideAction\" : {\n", "              \"type\": \"COUNT\"\n", "            }\n", "          }],\n", "        \"defaultAction\":\n", "        {\n", "          \"type\": \"BLOCK\"\n", "        },\n", "        \"overrideCustomerWebACLAssociation\": false\n", "      }\n", "\n"), nil
// 				}).(pulumi.StringOutput),
// 				Type: pulumi.String("WAF"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Firewall Manager policies can be imported using the policy ID, e.g.
//
// ```sh
//  $ pulumi import aws:fms/policy:Policy example 5be49585-a7e3-4c49-dde1-a179fe4a619a
// ```
type Policy struct {
	pulumi.CustomResourceState

	Arn pulumi.StringOutput `pulumi:"arn"`
	// If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
	DeleteAllPolicyResources pulumi.BoolPtrOutput `pulumi:"deleteAllPolicyResources"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to exclude from this policy.
	ExcludeMap PolicyExcludeMapPtrOutput `pulumi:"excludeMap"`
	// A boolean value, if true the tags that are specified in the `resourceTags` are not protected by this policy. If set to false and resourceTags are populated, resources that contain tags will be protected by this policy.
	ExcludeResourceTags pulumi.BoolOutput `pulumi:"excludeResourceTags"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to include for this policy.
	IncludeMap PolicyIncludeMapPtrOutput `pulumi:"includeMap"`
	// The friendly name of the AWS Firewall Manager Policy.
	Name pulumi.StringOutput `pulumi:"name"`
	// A unique identifier for each update to the policy.
	PolicyUpdateToken pulumi.StringOutput `pulumi:"policyUpdateToken"`
	// A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
	RemediationEnabled pulumi.BoolPtrOutput `pulumi:"remediationEnabled"`
	// A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
	ResourceTags pulumi.StringMapOutput `pulumi:"resourceTags"`
	// A resource type to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceTypeList`.
	ResourceType pulumi.StringOutput `pulumi:"resourceType"`
	// A list of resource types to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceType`.
	ResourceTypeLists pulumi.StringArrayOutput `pulumi:"resourceTypeLists"`
	// The objects to include in Security Service Policy Data. Documented below.
	SecurityServicePolicyData PolicySecurityServicePolicyDataOutput `pulumi:"securityServicePolicyData"`
}

// NewPolicy registers a new resource with the given unique name, arguments, and options.
func NewPolicy(ctx *pulumi.Context,
	name string, args *PolicyArgs, opts ...pulumi.ResourceOption) (*Policy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ExcludeResourceTags == nil {
		return nil, errors.New("invalid value for required argument 'ExcludeResourceTags'")
	}
	if args.SecurityServicePolicyData == nil {
		return nil, errors.New("invalid value for required argument 'SecurityServicePolicyData'")
	}
	var resource Policy
	err := ctx.RegisterResource("aws:fms/policy:Policy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPolicy gets an existing Policy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PolicyState, opts ...pulumi.ResourceOption) (*Policy, error) {
	var resource Policy
	err := ctx.ReadResource("aws:fms/policy:Policy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Policy resources.
type policyState struct {
	Arn *string `pulumi:"arn"`
	// If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
	DeleteAllPolicyResources *bool `pulumi:"deleteAllPolicyResources"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to exclude from this policy.
	ExcludeMap *PolicyExcludeMap `pulumi:"excludeMap"`
	// A boolean value, if true the tags that are specified in the `resourceTags` are not protected by this policy. If set to false and resourceTags are populated, resources that contain tags will be protected by this policy.
	ExcludeResourceTags *bool `pulumi:"excludeResourceTags"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to include for this policy.
	IncludeMap *PolicyIncludeMap `pulumi:"includeMap"`
	// The friendly name of the AWS Firewall Manager Policy.
	Name *string `pulumi:"name"`
	// A unique identifier for each update to the policy.
	PolicyUpdateToken *string `pulumi:"policyUpdateToken"`
	// A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
	RemediationEnabled *bool `pulumi:"remediationEnabled"`
	// A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
	ResourceTags map[string]string `pulumi:"resourceTags"`
	// A resource type to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceTypeList`.
	ResourceType *string `pulumi:"resourceType"`
	// A list of resource types to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceType`.
	ResourceTypeLists []string `pulumi:"resourceTypeLists"`
	// The objects to include in Security Service Policy Data. Documented below.
	SecurityServicePolicyData *PolicySecurityServicePolicyData `pulumi:"securityServicePolicyData"`
}

type PolicyState struct {
	Arn pulumi.StringPtrInput
	// If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
	DeleteAllPolicyResources pulumi.BoolPtrInput
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to exclude from this policy.
	ExcludeMap PolicyExcludeMapPtrInput
	// A boolean value, if true the tags that are specified in the `resourceTags` are not protected by this policy. If set to false and resourceTags are populated, resources that contain tags will be protected by this policy.
	ExcludeResourceTags pulumi.BoolPtrInput
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to include for this policy.
	IncludeMap PolicyIncludeMapPtrInput
	// The friendly name of the AWS Firewall Manager Policy.
	Name pulumi.StringPtrInput
	// A unique identifier for each update to the policy.
	PolicyUpdateToken pulumi.StringPtrInput
	// A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
	RemediationEnabled pulumi.BoolPtrInput
	// A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
	ResourceTags pulumi.StringMapInput
	// A resource type to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceTypeList`.
	ResourceType pulumi.StringPtrInput
	// A list of resource types to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceType`.
	ResourceTypeLists pulumi.StringArrayInput
	// The objects to include in Security Service Policy Data. Documented below.
	SecurityServicePolicyData PolicySecurityServicePolicyDataPtrInput
}

func (PolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*policyState)(nil)).Elem()
}

type policyArgs struct {
	// If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
	DeleteAllPolicyResources *bool `pulumi:"deleteAllPolicyResources"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to exclude from this policy.
	ExcludeMap *PolicyExcludeMap `pulumi:"excludeMap"`
	// A boolean value, if true the tags that are specified in the `resourceTags` are not protected by this policy. If set to false and resourceTags are populated, resources that contain tags will be protected by this policy.
	ExcludeResourceTags bool `pulumi:"excludeResourceTags"`
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to include for this policy.
	IncludeMap *PolicyIncludeMap `pulumi:"includeMap"`
	// The friendly name of the AWS Firewall Manager Policy.
	Name *string `pulumi:"name"`
	// A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
	RemediationEnabled *bool `pulumi:"remediationEnabled"`
	// A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
	ResourceTags map[string]string `pulumi:"resourceTags"`
	// A resource type to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceTypeList`.
	ResourceType *string `pulumi:"resourceType"`
	// A list of resource types to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceType`.
	ResourceTypeLists []string `pulumi:"resourceTypeLists"`
	// The objects to include in Security Service Policy Data. Documented below.
	SecurityServicePolicyData PolicySecurityServicePolicyData `pulumi:"securityServicePolicyData"`
}

// The set of arguments for constructing a Policy resource.
type PolicyArgs struct {
	// If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html)
	DeleteAllPolicyResources pulumi.BoolPtrInput
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to exclude from this policy.
	ExcludeMap PolicyExcludeMapPtrInput
	// A boolean value, if true the tags that are specified in the `resourceTags` are not protected by this policy. If set to false and resourceTags are populated, resources that contain tags will be protected by this policy.
	ExcludeResourceTags pulumi.BoolInput
	// A map of lists, with a single key named 'account' with a list of AWS Account IDs to include for this policy.
	IncludeMap PolicyIncludeMapPtrInput
	// The friendly name of the AWS Firewall Manager Policy.
	Name pulumi.StringPtrInput
	// A boolean value, indicates if the policy should automatically applied to resources that already exist in the account.
	RemediationEnabled pulumi.BoolPtrInput
	// A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags.
	ResourceTags pulumi.StringMapInput
	// A resource type to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceTypeList`.
	ResourceType pulumi.StringPtrInput
	// A list of resource types to protect, valid values are: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`. Conflicts with `resourceType`.
	ResourceTypeLists pulumi.StringArrayInput
	// The objects to include in Security Service Policy Data. Documented below.
	SecurityServicePolicyData PolicySecurityServicePolicyDataInput
}

func (PolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*policyArgs)(nil)).Elem()
}

type PolicyInput interface {
	pulumi.Input

	ToPolicyOutput() PolicyOutput
	ToPolicyOutputWithContext(ctx context.Context) PolicyOutput
}

func (*Policy) ElementType() reflect.Type {
	return reflect.TypeOf((*Policy)(nil))
}

func (i *Policy) ToPolicyOutput() PolicyOutput {
	return i.ToPolicyOutputWithContext(context.Background())
}

func (i *Policy) ToPolicyOutputWithContext(ctx context.Context) PolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyOutput)
}

func (i *Policy) ToPolicyPtrOutput() PolicyPtrOutput {
	return i.ToPolicyPtrOutputWithContext(context.Background())
}

func (i *Policy) ToPolicyPtrOutputWithContext(ctx context.Context) PolicyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyPtrOutput)
}

type PolicyPtrInput interface {
	pulumi.Input

	ToPolicyPtrOutput() PolicyPtrOutput
	ToPolicyPtrOutputWithContext(ctx context.Context) PolicyPtrOutput
}

type policyPtrType PolicyArgs

func (*policyPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**Policy)(nil))
}

func (i *policyPtrType) ToPolicyPtrOutput() PolicyPtrOutput {
	return i.ToPolicyPtrOutputWithContext(context.Background())
}

func (i *policyPtrType) ToPolicyPtrOutputWithContext(ctx context.Context) PolicyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyPtrOutput)
}

// PolicyArrayInput is an input type that accepts PolicyArray and PolicyArrayOutput values.
// You can construct a concrete instance of `PolicyArrayInput` via:
//
//          PolicyArray{ PolicyArgs{...} }
type PolicyArrayInput interface {
	pulumi.Input

	ToPolicyArrayOutput() PolicyArrayOutput
	ToPolicyArrayOutputWithContext(context.Context) PolicyArrayOutput
}

type PolicyArray []PolicyInput

func (PolicyArray) ElementType() reflect.Type {
	return reflect.TypeOf(([]*Policy)(nil))
}

func (i PolicyArray) ToPolicyArrayOutput() PolicyArrayOutput {
	return i.ToPolicyArrayOutputWithContext(context.Background())
}

func (i PolicyArray) ToPolicyArrayOutputWithContext(ctx context.Context) PolicyArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyArrayOutput)
}

// PolicyMapInput is an input type that accepts PolicyMap and PolicyMapOutput values.
// You can construct a concrete instance of `PolicyMapInput` via:
//
//          PolicyMap{ "key": PolicyArgs{...} }
type PolicyMapInput interface {
	pulumi.Input

	ToPolicyMapOutput() PolicyMapOutput
	ToPolicyMapOutputWithContext(context.Context) PolicyMapOutput
}

type PolicyMap map[string]PolicyInput

func (PolicyMap) ElementType() reflect.Type {
	return reflect.TypeOf((map[string]*Policy)(nil))
}

func (i PolicyMap) ToPolicyMapOutput() PolicyMapOutput {
	return i.ToPolicyMapOutputWithContext(context.Background())
}

func (i PolicyMap) ToPolicyMapOutputWithContext(ctx context.Context) PolicyMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyMapOutput)
}

type PolicyOutput struct {
	*pulumi.OutputState
}

func (PolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Policy)(nil))
}

func (o PolicyOutput) ToPolicyOutput() PolicyOutput {
	return o
}

func (o PolicyOutput) ToPolicyOutputWithContext(ctx context.Context) PolicyOutput {
	return o
}

func (o PolicyOutput) ToPolicyPtrOutput() PolicyPtrOutput {
	return o.ToPolicyPtrOutputWithContext(context.Background())
}

func (o PolicyOutput) ToPolicyPtrOutputWithContext(ctx context.Context) PolicyPtrOutput {
	return o.ApplyT(func(v Policy) *Policy {
		return &v
	}).(PolicyPtrOutput)
}

type PolicyPtrOutput struct {
	*pulumi.OutputState
}

func (PolicyPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Policy)(nil))
}

func (o PolicyPtrOutput) ToPolicyPtrOutput() PolicyPtrOutput {
	return o
}

func (o PolicyPtrOutput) ToPolicyPtrOutputWithContext(ctx context.Context) PolicyPtrOutput {
	return o
}

type PolicyArrayOutput struct{ *pulumi.OutputState }

func (PolicyArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Policy)(nil))
}

func (o PolicyArrayOutput) ToPolicyArrayOutput() PolicyArrayOutput {
	return o
}

func (o PolicyArrayOutput) ToPolicyArrayOutputWithContext(ctx context.Context) PolicyArrayOutput {
	return o
}

func (o PolicyArrayOutput) Index(i pulumi.IntInput) PolicyOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) Policy {
		return vs[0].([]Policy)[vs[1].(int)]
	}).(PolicyOutput)
}

type PolicyMapOutput struct{ *pulumi.OutputState }

func (PolicyMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]Policy)(nil))
}

func (o PolicyMapOutput) ToPolicyMapOutput() PolicyMapOutput {
	return o
}

func (o PolicyMapOutput) ToPolicyMapOutputWithContext(ctx context.Context) PolicyMapOutput {
	return o
}

func (o PolicyMapOutput) MapIndex(k pulumi.StringInput) PolicyOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) Policy {
		return vs[0].(map[string]Policy)[vs[1].(string)]
	}).(PolicyOutput)
}

func init() {
	pulumi.RegisterOutputType(PolicyOutput{})
	pulumi.RegisterOutputType(PolicyPtrOutput{})
	pulumi.RegisterOutputType(PolicyArrayOutput{})
	pulumi.RegisterOutputType(PolicyMapOutput{})
}