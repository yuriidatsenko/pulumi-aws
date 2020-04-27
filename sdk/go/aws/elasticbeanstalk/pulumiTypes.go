// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package elasticbeanstalk

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type ApplicationAppversionLifecycle struct {
	// Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
	DeleteSourceFromS3 *bool `pulumi:"deleteSourceFromS3"`
	// The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
	MaxAgeInDays *int `pulumi:"maxAgeInDays"`
	// The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
	MaxCount *int `pulumi:"maxCount"`
	// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
	ServiceRole string `pulumi:"serviceRole"`
}

// ApplicationAppversionLifecycleInput is an input type that accepts ApplicationAppversionLifecycleArgs and ApplicationAppversionLifecycleOutput values.
// You can construct a concrete instance of `ApplicationAppversionLifecycleInput` via:
//
// 		 ApplicationAppversionLifecycleArgs{...}
//
type ApplicationAppversionLifecycleInput interface {
	pulumi.Input

	ToApplicationAppversionLifecycleOutput() ApplicationAppversionLifecycleOutput
	ToApplicationAppversionLifecycleOutputWithContext(context.Context) ApplicationAppversionLifecycleOutput
}

type ApplicationAppversionLifecycleArgs struct {
	// Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
	DeleteSourceFromS3 pulumi.BoolPtrInput `pulumi:"deleteSourceFromS3"`
	// The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
	MaxAgeInDays pulumi.IntPtrInput `pulumi:"maxAgeInDays"`
	// The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
	MaxCount pulumi.IntPtrInput `pulumi:"maxCount"`
	// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
	ServiceRole pulumi.StringInput `pulumi:"serviceRole"`
}

func (ApplicationAppversionLifecycleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationAppversionLifecycle)(nil)).Elem()
}

func (i ApplicationAppversionLifecycleArgs) ToApplicationAppversionLifecycleOutput() ApplicationAppversionLifecycleOutput {
	return i.ToApplicationAppversionLifecycleOutputWithContext(context.Background())
}

func (i ApplicationAppversionLifecycleArgs) ToApplicationAppversionLifecycleOutputWithContext(ctx context.Context) ApplicationAppversionLifecycleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationAppversionLifecycleOutput)
}

func (i ApplicationAppversionLifecycleArgs) ToApplicationAppversionLifecyclePtrOutput() ApplicationAppversionLifecyclePtrOutput {
	return i.ToApplicationAppversionLifecyclePtrOutputWithContext(context.Background())
}

func (i ApplicationAppversionLifecycleArgs) ToApplicationAppversionLifecyclePtrOutputWithContext(ctx context.Context) ApplicationAppversionLifecyclePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationAppversionLifecycleOutput).ToApplicationAppversionLifecyclePtrOutputWithContext(ctx)
}

// ApplicationAppversionLifecyclePtrInput is an input type that accepts ApplicationAppversionLifecycleArgs, ApplicationAppversionLifecyclePtr and ApplicationAppversionLifecyclePtrOutput values.
// You can construct a concrete instance of `ApplicationAppversionLifecyclePtrInput` via:
//
// 		 ApplicationAppversionLifecycleArgs{...}
//
//  or:
//
// 		 nil
//
type ApplicationAppversionLifecyclePtrInput interface {
	pulumi.Input

	ToApplicationAppversionLifecyclePtrOutput() ApplicationAppversionLifecyclePtrOutput
	ToApplicationAppversionLifecyclePtrOutputWithContext(context.Context) ApplicationAppversionLifecyclePtrOutput
}

type applicationAppversionLifecyclePtrType ApplicationAppversionLifecycleArgs

func ApplicationAppversionLifecyclePtr(v *ApplicationAppversionLifecycleArgs) ApplicationAppversionLifecyclePtrInput {
	return (*applicationAppversionLifecyclePtrType)(v)
}

func (*applicationAppversionLifecyclePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ApplicationAppversionLifecycle)(nil)).Elem()
}

func (i *applicationAppversionLifecyclePtrType) ToApplicationAppversionLifecyclePtrOutput() ApplicationAppversionLifecyclePtrOutput {
	return i.ToApplicationAppversionLifecyclePtrOutputWithContext(context.Background())
}

func (i *applicationAppversionLifecyclePtrType) ToApplicationAppversionLifecyclePtrOutputWithContext(ctx context.Context) ApplicationAppversionLifecyclePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationAppversionLifecyclePtrOutput)
}

type ApplicationAppversionLifecycleOutput struct{ *pulumi.OutputState }

func (ApplicationAppversionLifecycleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationAppversionLifecycle)(nil)).Elem()
}

func (o ApplicationAppversionLifecycleOutput) ToApplicationAppversionLifecycleOutput() ApplicationAppversionLifecycleOutput {
	return o
}

func (o ApplicationAppversionLifecycleOutput) ToApplicationAppversionLifecycleOutputWithContext(ctx context.Context) ApplicationAppversionLifecycleOutput {
	return o
}

func (o ApplicationAppversionLifecycleOutput) ToApplicationAppversionLifecyclePtrOutput() ApplicationAppversionLifecyclePtrOutput {
	return o.ToApplicationAppversionLifecyclePtrOutputWithContext(context.Background())
}

func (o ApplicationAppversionLifecycleOutput) ToApplicationAppversionLifecyclePtrOutputWithContext(ctx context.Context) ApplicationAppversionLifecyclePtrOutput {
	return o.ApplyT(func(v ApplicationAppversionLifecycle) *ApplicationAppversionLifecycle {
		return &v
	}).(ApplicationAppversionLifecyclePtrOutput)
}

// Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
func (o ApplicationAppversionLifecycleOutput) DeleteSourceFromS3() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v ApplicationAppversionLifecycle) *bool { return v.DeleteSourceFromS3 }).(pulumi.BoolPtrOutput)
}

// The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
func (o ApplicationAppversionLifecycleOutput) MaxAgeInDays() pulumi.IntPtrOutput {
	return o.ApplyT(func(v ApplicationAppversionLifecycle) *int { return v.MaxAgeInDays }).(pulumi.IntPtrOutput)
}

// The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
func (o ApplicationAppversionLifecycleOutput) MaxCount() pulumi.IntPtrOutput {
	return o.ApplyT(func(v ApplicationAppversionLifecycle) *int { return v.MaxCount }).(pulumi.IntPtrOutput)
}

// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
func (o ApplicationAppversionLifecycleOutput) ServiceRole() pulumi.StringOutput {
	return o.ApplyT(func(v ApplicationAppversionLifecycle) string { return v.ServiceRole }).(pulumi.StringOutput)
}

type ApplicationAppversionLifecyclePtrOutput struct{ *pulumi.OutputState }

func (ApplicationAppversionLifecyclePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ApplicationAppversionLifecycle)(nil)).Elem()
}

func (o ApplicationAppversionLifecyclePtrOutput) ToApplicationAppversionLifecyclePtrOutput() ApplicationAppversionLifecyclePtrOutput {
	return o
}

func (o ApplicationAppversionLifecyclePtrOutput) ToApplicationAppversionLifecyclePtrOutputWithContext(ctx context.Context) ApplicationAppversionLifecyclePtrOutput {
	return o
}

func (o ApplicationAppversionLifecyclePtrOutput) Elem() ApplicationAppversionLifecycleOutput {
	return o.ApplyT(func(v *ApplicationAppversionLifecycle) ApplicationAppversionLifecycle { return *v }).(ApplicationAppversionLifecycleOutput)
}

// Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
func (o ApplicationAppversionLifecyclePtrOutput) DeleteSourceFromS3() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *ApplicationAppversionLifecycle) *bool {
		if v == nil {
			return nil
		}
		return v.DeleteSourceFromS3
	}).(pulumi.BoolPtrOutput)
}

// The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
func (o ApplicationAppversionLifecyclePtrOutput) MaxAgeInDays() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *ApplicationAppversionLifecycle) *int {
		if v == nil {
			return nil
		}
		return v.MaxAgeInDays
	}).(pulumi.IntPtrOutput)
}

// The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
func (o ApplicationAppversionLifecyclePtrOutput) MaxCount() pulumi.IntPtrOutput {
	return o.ApplyT(func(v *ApplicationAppversionLifecycle) *int {
		if v == nil {
			return nil
		}
		return v.MaxCount
	}).(pulumi.IntPtrOutput)
}

// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
func (o ApplicationAppversionLifecyclePtrOutput) ServiceRole() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *ApplicationAppversionLifecycle) *string {
		if v == nil {
			return nil
		}
		return &v.ServiceRole
	}).(pulumi.StringPtrOutput)
}

type ConfigurationTemplateSetting struct {
	// A unique name for this Template.
	Name      string  `pulumi:"name"`
	Namespace string  `pulumi:"namespace"`
	Resource  *string `pulumi:"resource"`
	Value     string  `pulumi:"value"`
}

// ConfigurationTemplateSettingInput is an input type that accepts ConfigurationTemplateSettingArgs and ConfigurationTemplateSettingOutput values.
// You can construct a concrete instance of `ConfigurationTemplateSettingInput` via:
//
// 		 ConfigurationTemplateSettingArgs{...}
//
type ConfigurationTemplateSettingInput interface {
	pulumi.Input

	ToConfigurationTemplateSettingOutput() ConfigurationTemplateSettingOutput
	ToConfigurationTemplateSettingOutputWithContext(context.Context) ConfigurationTemplateSettingOutput
}

type ConfigurationTemplateSettingArgs struct {
	// A unique name for this Template.
	Name      pulumi.StringInput    `pulumi:"name"`
	Namespace pulumi.StringInput    `pulumi:"namespace"`
	Resource  pulumi.StringPtrInput `pulumi:"resource"`
	Value     pulumi.StringInput    `pulumi:"value"`
}

func (ConfigurationTemplateSettingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ConfigurationTemplateSetting)(nil)).Elem()
}

func (i ConfigurationTemplateSettingArgs) ToConfigurationTemplateSettingOutput() ConfigurationTemplateSettingOutput {
	return i.ToConfigurationTemplateSettingOutputWithContext(context.Background())
}

func (i ConfigurationTemplateSettingArgs) ToConfigurationTemplateSettingOutputWithContext(ctx context.Context) ConfigurationTemplateSettingOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ConfigurationTemplateSettingOutput)
}

// ConfigurationTemplateSettingArrayInput is an input type that accepts ConfigurationTemplateSettingArray and ConfigurationTemplateSettingArrayOutput values.
// You can construct a concrete instance of `ConfigurationTemplateSettingArrayInput` via:
//
// 		 ConfigurationTemplateSettingArray{ ConfigurationTemplateSettingArgs{...} }
//
type ConfigurationTemplateSettingArrayInput interface {
	pulumi.Input

	ToConfigurationTemplateSettingArrayOutput() ConfigurationTemplateSettingArrayOutput
	ToConfigurationTemplateSettingArrayOutputWithContext(context.Context) ConfigurationTemplateSettingArrayOutput
}

type ConfigurationTemplateSettingArray []ConfigurationTemplateSettingInput

func (ConfigurationTemplateSettingArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]ConfigurationTemplateSetting)(nil)).Elem()
}

func (i ConfigurationTemplateSettingArray) ToConfigurationTemplateSettingArrayOutput() ConfigurationTemplateSettingArrayOutput {
	return i.ToConfigurationTemplateSettingArrayOutputWithContext(context.Background())
}

func (i ConfigurationTemplateSettingArray) ToConfigurationTemplateSettingArrayOutputWithContext(ctx context.Context) ConfigurationTemplateSettingArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ConfigurationTemplateSettingArrayOutput)
}

type ConfigurationTemplateSettingOutput struct{ *pulumi.OutputState }

func (ConfigurationTemplateSettingOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ConfigurationTemplateSetting)(nil)).Elem()
}

func (o ConfigurationTemplateSettingOutput) ToConfigurationTemplateSettingOutput() ConfigurationTemplateSettingOutput {
	return o
}

func (o ConfigurationTemplateSettingOutput) ToConfigurationTemplateSettingOutputWithContext(ctx context.Context) ConfigurationTemplateSettingOutput {
	return o
}

// A unique name for this Template.
func (o ConfigurationTemplateSettingOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v ConfigurationTemplateSetting) string { return v.Name }).(pulumi.StringOutput)
}

func (o ConfigurationTemplateSettingOutput) Namespace() pulumi.StringOutput {
	return o.ApplyT(func(v ConfigurationTemplateSetting) string { return v.Namespace }).(pulumi.StringOutput)
}

func (o ConfigurationTemplateSettingOutput) Resource() pulumi.StringPtrOutput {
	return o.ApplyT(func(v ConfigurationTemplateSetting) *string { return v.Resource }).(pulumi.StringPtrOutput)
}

func (o ConfigurationTemplateSettingOutput) Value() pulumi.StringOutput {
	return o.ApplyT(func(v ConfigurationTemplateSetting) string { return v.Value }).(pulumi.StringOutput)
}

type ConfigurationTemplateSettingArrayOutput struct{ *pulumi.OutputState }

func (ConfigurationTemplateSettingArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]ConfigurationTemplateSetting)(nil)).Elem()
}

func (o ConfigurationTemplateSettingArrayOutput) ToConfigurationTemplateSettingArrayOutput() ConfigurationTemplateSettingArrayOutput {
	return o
}

func (o ConfigurationTemplateSettingArrayOutput) ToConfigurationTemplateSettingArrayOutputWithContext(ctx context.Context) ConfigurationTemplateSettingArrayOutput {
	return o
}

func (o ConfigurationTemplateSettingArrayOutput) Index(i pulumi.IntInput) ConfigurationTemplateSettingOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) ConfigurationTemplateSetting {
		return vs[0].([]ConfigurationTemplateSetting)[vs[1].(int)]
	}).(ConfigurationTemplateSettingOutput)
}

type EnvironmentAllSetting struct {
	// A unique name for this Environment. This name is used
	// in the application URL
	Name      string  `pulumi:"name"`
	Namespace string  `pulumi:"namespace"`
	Resource  *string `pulumi:"resource"`
	Value     string  `pulumi:"value"`
}

// EnvironmentAllSettingInput is an input type that accepts EnvironmentAllSettingArgs and EnvironmentAllSettingOutput values.
// You can construct a concrete instance of `EnvironmentAllSettingInput` via:
//
// 		 EnvironmentAllSettingArgs{...}
//
type EnvironmentAllSettingInput interface {
	pulumi.Input

	ToEnvironmentAllSettingOutput() EnvironmentAllSettingOutput
	ToEnvironmentAllSettingOutputWithContext(context.Context) EnvironmentAllSettingOutput
}

type EnvironmentAllSettingArgs struct {
	// A unique name for this Environment. This name is used
	// in the application URL
	Name      pulumi.StringInput    `pulumi:"name"`
	Namespace pulumi.StringInput    `pulumi:"namespace"`
	Resource  pulumi.StringPtrInput `pulumi:"resource"`
	Value     pulumi.StringInput    `pulumi:"value"`
}

func (EnvironmentAllSettingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*EnvironmentAllSetting)(nil)).Elem()
}

func (i EnvironmentAllSettingArgs) ToEnvironmentAllSettingOutput() EnvironmentAllSettingOutput {
	return i.ToEnvironmentAllSettingOutputWithContext(context.Background())
}

func (i EnvironmentAllSettingArgs) ToEnvironmentAllSettingOutputWithContext(ctx context.Context) EnvironmentAllSettingOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EnvironmentAllSettingOutput)
}

// EnvironmentAllSettingArrayInput is an input type that accepts EnvironmentAllSettingArray and EnvironmentAllSettingArrayOutput values.
// You can construct a concrete instance of `EnvironmentAllSettingArrayInput` via:
//
// 		 EnvironmentAllSettingArray{ EnvironmentAllSettingArgs{...} }
//
type EnvironmentAllSettingArrayInput interface {
	pulumi.Input

	ToEnvironmentAllSettingArrayOutput() EnvironmentAllSettingArrayOutput
	ToEnvironmentAllSettingArrayOutputWithContext(context.Context) EnvironmentAllSettingArrayOutput
}

type EnvironmentAllSettingArray []EnvironmentAllSettingInput

func (EnvironmentAllSettingArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]EnvironmentAllSetting)(nil)).Elem()
}

func (i EnvironmentAllSettingArray) ToEnvironmentAllSettingArrayOutput() EnvironmentAllSettingArrayOutput {
	return i.ToEnvironmentAllSettingArrayOutputWithContext(context.Background())
}

func (i EnvironmentAllSettingArray) ToEnvironmentAllSettingArrayOutputWithContext(ctx context.Context) EnvironmentAllSettingArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EnvironmentAllSettingArrayOutput)
}

type EnvironmentAllSettingOutput struct{ *pulumi.OutputState }

func (EnvironmentAllSettingOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EnvironmentAllSetting)(nil)).Elem()
}

func (o EnvironmentAllSettingOutput) ToEnvironmentAllSettingOutput() EnvironmentAllSettingOutput {
	return o
}

func (o EnvironmentAllSettingOutput) ToEnvironmentAllSettingOutputWithContext(ctx context.Context) EnvironmentAllSettingOutput {
	return o
}

// A unique name for this Environment. This name is used
// in the application URL
func (o EnvironmentAllSettingOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentAllSetting) string { return v.Name }).(pulumi.StringOutput)
}

func (o EnvironmentAllSettingOutput) Namespace() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentAllSetting) string { return v.Namespace }).(pulumi.StringOutput)
}

func (o EnvironmentAllSettingOutput) Resource() pulumi.StringPtrOutput {
	return o.ApplyT(func(v EnvironmentAllSetting) *string { return v.Resource }).(pulumi.StringPtrOutput)
}

func (o EnvironmentAllSettingOutput) Value() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentAllSetting) string { return v.Value }).(pulumi.StringOutput)
}

type EnvironmentAllSettingArrayOutput struct{ *pulumi.OutputState }

func (EnvironmentAllSettingArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]EnvironmentAllSetting)(nil)).Elem()
}

func (o EnvironmentAllSettingArrayOutput) ToEnvironmentAllSettingArrayOutput() EnvironmentAllSettingArrayOutput {
	return o
}

func (o EnvironmentAllSettingArrayOutput) ToEnvironmentAllSettingArrayOutputWithContext(ctx context.Context) EnvironmentAllSettingArrayOutput {
	return o
}

func (o EnvironmentAllSettingArrayOutput) Index(i pulumi.IntInput) EnvironmentAllSettingOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) EnvironmentAllSetting {
		return vs[0].([]EnvironmentAllSetting)[vs[1].(int)]
	}).(EnvironmentAllSettingOutput)
}

type EnvironmentSetting struct {
	// A unique name for this Environment. This name is used
	// in the application URL
	Name      string  `pulumi:"name"`
	Namespace string  `pulumi:"namespace"`
	Resource  *string `pulumi:"resource"`
	Value     string  `pulumi:"value"`
}

// EnvironmentSettingInput is an input type that accepts EnvironmentSettingArgs and EnvironmentSettingOutput values.
// You can construct a concrete instance of `EnvironmentSettingInput` via:
//
// 		 EnvironmentSettingArgs{...}
//
type EnvironmentSettingInput interface {
	pulumi.Input

	ToEnvironmentSettingOutput() EnvironmentSettingOutput
	ToEnvironmentSettingOutputWithContext(context.Context) EnvironmentSettingOutput
}

type EnvironmentSettingArgs struct {
	// A unique name for this Environment. This name is used
	// in the application URL
	Name      pulumi.StringInput    `pulumi:"name"`
	Namespace pulumi.StringInput    `pulumi:"namespace"`
	Resource  pulumi.StringPtrInput `pulumi:"resource"`
	Value     pulumi.StringInput    `pulumi:"value"`
}

func (EnvironmentSettingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*EnvironmentSetting)(nil)).Elem()
}

func (i EnvironmentSettingArgs) ToEnvironmentSettingOutput() EnvironmentSettingOutput {
	return i.ToEnvironmentSettingOutputWithContext(context.Background())
}

func (i EnvironmentSettingArgs) ToEnvironmentSettingOutputWithContext(ctx context.Context) EnvironmentSettingOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EnvironmentSettingOutput)
}

// EnvironmentSettingArrayInput is an input type that accepts EnvironmentSettingArray and EnvironmentSettingArrayOutput values.
// You can construct a concrete instance of `EnvironmentSettingArrayInput` via:
//
// 		 EnvironmentSettingArray{ EnvironmentSettingArgs{...} }
//
type EnvironmentSettingArrayInput interface {
	pulumi.Input

	ToEnvironmentSettingArrayOutput() EnvironmentSettingArrayOutput
	ToEnvironmentSettingArrayOutputWithContext(context.Context) EnvironmentSettingArrayOutput
}

type EnvironmentSettingArray []EnvironmentSettingInput

func (EnvironmentSettingArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]EnvironmentSetting)(nil)).Elem()
}

func (i EnvironmentSettingArray) ToEnvironmentSettingArrayOutput() EnvironmentSettingArrayOutput {
	return i.ToEnvironmentSettingArrayOutputWithContext(context.Background())
}

func (i EnvironmentSettingArray) ToEnvironmentSettingArrayOutputWithContext(ctx context.Context) EnvironmentSettingArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EnvironmentSettingArrayOutput)
}

type EnvironmentSettingOutput struct{ *pulumi.OutputState }

func (EnvironmentSettingOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EnvironmentSetting)(nil)).Elem()
}

func (o EnvironmentSettingOutput) ToEnvironmentSettingOutput() EnvironmentSettingOutput {
	return o
}

func (o EnvironmentSettingOutput) ToEnvironmentSettingOutputWithContext(ctx context.Context) EnvironmentSettingOutput {
	return o
}

// A unique name for this Environment. This name is used
// in the application URL
func (o EnvironmentSettingOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentSetting) string { return v.Name }).(pulumi.StringOutput)
}

func (o EnvironmentSettingOutput) Namespace() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentSetting) string { return v.Namespace }).(pulumi.StringOutput)
}

func (o EnvironmentSettingOutput) Resource() pulumi.StringPtrOutput {
	return o.ApplyT(func(v EnvironmentSetting) *string { return v.Resource }).(pulumi.StringPtrOutput)
}

func (o EnvironmentSettingOutput) Value() pulumi.StringOutput {
	return o.ApplyT(func(v EnvironmentSetting) string { return v.Value }).(pulumi.StringOutput)
}

type EnvironmentSettingArrayOutput struct{ *pulumi.OutputState }

func (EnvironmentSettingArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]EnvironmentSetting)(nil)).Elem()
}

func (o EnvironmentSettingArrayOutput) ToEnvironmentSettingArrayOutput() EnvironmentSettingArrayOutput {
	return o
}

func (o EnvironmentSettingArrayOutput) ToEnvironmentSettingArrayOutputWithContext(ctx context.Context) EnvironmentSettingArrayOutput {
	return o
}

func (o EnvironmentSettingArrayOutput) Index(i pulumi.IntInput) EnvironmentSettingOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) EnvironmentSetting {
		return vs[0].([]EnvironmentSetting)[vs[1].(int)]
	}).(EnvironmentSettingOutput)
}

type GetApplicationAppversionLifecycle struct {
	// Specifies whether delete a version's source bundle from S3 when the application version is deleted.
	DeleteSourceFromS3 bool `pulumi:"deleteSourceFromS3"`
	// The number of days to retain an application version.
	MaxAgeInDays int `pulumi:"maxAgeInDays"`
	// The maximum number of application versions to retain.
	MaxCount int `pulumi:"maxCount"`
	// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
	ServiceRole string `pulumi:"serviceRole"`
}

// GetApplicationAppversionLifecycleInput is an input type that accepts GetApplicationAppversionLifecycleArgs and GetApplicationAppversionLifecycleOutput values.
// You can construct a concrete instance of `GetApplicationAppversionLifecycleInput` via:
//
// 		 GetApplicationAppversionLifecycleArgs{...}
//
type GetApplicationAppversionLifecycleInput interface {
	pulumi.Input

	ToGetApplicationAppversionLifecycleOutput() GetApplicationAppversionLifecycleOutput
	ToGetApplicationAppversionLifecycleOutputWithContext(context.Context) GetApplicationAppversionLifecycleOutput
}

type GetApplicationAppversionLifecycleArgs struct {
	// Specifies whether delete a version's source bundle from S3 when the application version is deleted.
	DeleteSourceFromS3 pulumi.BoolInput `pulumi:"deleteSourceFromS3"`
	// The number of days to retain an application version.
	MaxAgeInDays pulumi.IntInput `pulumi:"maxAgeInDays"`
	// The maximum number of application versions to retain.
	MaxCount pulumi.IntInput `pulumi:"maxCount"`
	// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
	ServiceRole pulumi.StringInput `pulumi:"serviceRole"`
}

func (GetApplicationAppversionLifecycleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetApplicationAppversionLifecycle)(nil)).Elem()
}

func (i GetApplicationAppversionLifecycleArgs) ToGetApplicationAppversionLifecycleOutput() GetApplicationAppversionLifecycleOutput {
	return i.ToGetApplicationAppversionLifecycleOutputWithContext(context.Background())
}

func (i GetApplicationAppversionLifecycleArgs) ToGetApplicationAppversionLifecycleOutputWithContext(ctx context.Context) GetApplicationAppversionLifecycleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetApplicationAppversionLifecycleOutput)
}

type GetApplicationAppversionLifecycleOutput struct{ *pulumi.OutputState }

func (GetApplicationAppversionLifecycleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetApplicationAppversionLifecycle)(nil)).Elem()
}

func (o GetApplicationAppversionLifecycleOutput) ToGetApplicationAppversionLifecycleOutput() GetApplicationAppversionLifecycleOutput {
	return o
}

func (o GetApplicationAppversionLifecycleOutput) ToGetApplicationAppversionLifecycleOutputWithContext(ctx context.Context) GetApplicationAppversionLifecycleOutput {
	return o
}

// Specifies whether delete a version's source bundle from S3 when the application version is deleted.
func (o GetApplicationAppversionLifecycleOutput) DeleteSourceFromS3() pulumi.BoolOutput {
	return o.ApplyT(func(v GetApplicationAppversionLifecycle) bool { return v.DeleteSourceFromS3 }).(pulumi.BoolOutput)
}

// The number of days to retain an application version.
func (o GetApplicationAppversionLifecycleOutput) MaxAgeInDays() pulumi.IntOutput {
	return o.ApplyT(func(v GetApplicationAppversionLifecycle) int { return v.MaxAgeInDays }).(pulumi.IntOutput)
}

// The maximum number of application versions to retain.
func (o GetApplicationAppversionLifecycleOutput) MaxCount() pulumi.IntOutput {
	return o.ApplyT(func(v GetApplicationAppversionLifecycle) int { return v.MaxCount }).(pulumi.IntOutput)
}

// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
func (o GetApplicationAppversionLifecycleOutput) ServiceRole() pulumi.StringOutput {
	return o.ApplyT(func(v GetApplicationAppversionLifecycle) string { return v.ServiceRole }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(ApplicationAppversionLifecycleOutput{})
	pulumi.RegisterOutputType(ApplicationAppversionLifecyclePtrOutput{})
	pulumi.RegisterOutputType(ConfigurationTemplateSettingOutput{})
	pulumi.RegisterOutputType(ConfigurationTemplateSettingArrayOutput{})
	pulumi.RegisterOutputType(EnvironmentAllSettingOutput{})
	pulumi.RegisterOutputType(EnvironmentAllSettingArrayOutput{})
	pulumi.RegisterOutputType(EnvironmentSettingOutput{})
	pulumi.RegisterOutputType(EnvironmentSettingArrayOutput{})
	pulumi.RegisterOutputType(GetApplicationAppversionLifecycleOutput{})
}
