// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an RDS Global Cluster, which is an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
//
// More information about Aurora global databases can be found in the [Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database-creating).
//
// ## Example Usage
// ### New Global Cluster
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/providers"
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/rds"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := providers.Newaws(ctx, "primary", &providers.awsArgs{
// 			Region: pulumi.String("us-east-2"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = providers.Newaws(ctx, "secondary", &providers.awsArgs{
// 			Region: pulumi.String("us-west-2"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		example, err := rds.NewGlobalCluster(ctx, "example", &rds.GlobalClusterArgs{
// 			GlobalClusterIdentifier: pulumi.String("example"),
// 		}, pulumi.Provider(aws.Primary))
// 		if err != nil {
// 			return err
// 		}
// 		primaryCluster, err := rds.NewCluster(ctx, "primaryCluster", &rds.ClusterArgs{
// 			EngineMode:              pulumi.String("global"),
// 			GlobalClusterIdentifier: example.ID(),
// 		}, pulumi.Provider(aws.Primary))
// 		if err != nil {
// 			return err
// 		}
// 		primaryClusterInstance, err := rds.NewClusterInstance(ctx, "primaryClusterInstance", &rds.ClusterInstanceArgs{
// 			ClusterIdentifier: primaryCluster.ID(),
// 		}, pulumi.Provider(aws.Primary))
// 		if err != nil {
// 			return err
// 		}
// 		secondaryCluster, err := rds.NewCluster(ctx, "secondaryCluster", &rds.ClusterArgs{
// 			EngineMode:              pulumi.String("global"),
// 			GlobalClusterIdentifier: example.ID(),
// 		}, pulumi.Provider(aws.Secondary), pulumi.DependsOn([]pulumi.Resource{
// 			primaryClusterInstance,
// 		}))
// 		if err != nil {
// 			return err
// 		}
// 		_, err = rds.NewClusterInstance(ctx, "secondaryClusterInstance", &rds.ClusterInstanceArgs{
// 			ClusterIdentifier: secondaryCluster.ID(),
// 		}, pulumi.Provider(aws.Secondary))
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
// ### New Global Cluster From Existing DB Cluster
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v3/go/aws/rds"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleCluster, err := rds.NewCluster(ctx, "exampleCluster", nil)
// 		if err != nil {
// 			return err
// 		}
// 		_, err = rds.NewGlobalCluster(ctx, "exampleGlobalCluster", &rds.GlobalClusterArgs{
// 			ForceDestroy:              pulumi.Bool(true),
// 			GlobalClusterIdentifier:   pulumi.String("example"),
// 			SourceDbClusterIdentifier: exampleCluster.Arn,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type GlobalCluster struct {
	pulumi.CustomResourceState

	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrOutput `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrOutput `pulumi:"deletionProtection"`
	Engine             pulumi.StringOutput  `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringOutput `pulumi:"engineVersion"`
	// Enable to remove DB Cluster members from Global Cluster on destroy. Required with `sourceDbClusterIdentifier`.
	ForceDestroy pulumi.BoolPtrOutput `pulumi:"forceDestroy"`
	// The global cluster identifier.
	GlobalClusterIdentifier pulumi.StringOutput `pulumi:"globalClusterIdentifier"`
	// Set of objects containing Global Cluster members.
	GlobalClusterMembers GlobalClusterGlobalClusterMemberArrayOutput `pulumi:"globalClusterMembers"`
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId   pulumi.StringOutput `pulumi:"globalClusterResourceId"`
	SourceDbClusterIdentifier pulumi.StringOutput `pulumi:"sourceDbClusterIdentifier"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrOutput `pulumi:"storageEncrypted"`
}

// NewGlobalCluster registers a new resource with the given unique name, arguments, and options.
func NewGlobalCluster(ctx *pulumi.Context,
	name string, args *GlobalClusterArgs, opts ...pulumi.ResourceOption) (*GlobalCluster, error) {
	if args == nil || args.GlobalClusterIdentifier == nil {
		return nil, errors.New("missing required argument 'GlobalClusterIdentifier'")
	}
	if args == nil {
		args = &GlobalClusterArgs{}
	}
	var resource GlobalCluster
	err := ctx.RegisterResource("aws:rds/globalCluster:GlobalCluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGlobalCluster gets an existing GlobalCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGlobalCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GlobalClusterState, opts ...pulumi.ResourceOption) (*GlobalCluster, error) {
	var resource GlobalCluster
	err := ctx.ReadResource("aws:rds/globalCluster:GlobalCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GlobalCluster resources.
type globalClusterState struct {
	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn *string `pulumi:"arn"`
	// Name for an automatically created database on cluster creation.
	DatabaseName *string `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection *bool   `pulumi:"deletionProtection"`
	Engine             *string `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion *string `pulumi:"engineVersion"`
	// Enable to remove DB Cluster members from Global Cluster on destroy. Required with `sourceDbClusterIdentifier`.
	ForceDestroy *bool `pulumi:"forceDestroy"`
	// The global cluster identifier.
	GlobalClusterIdentifier *string `pulumi:"globalClusterIdentifier"`
	// Set of objects containing Global Cluster members.
	GlobalClusterMembers []GlobalClusterGlobalClusterMember `pulumi:"globalClusterMembers"`
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId   *string `pulumi:"globalClusterResourceId"`
	SourceDbClusterIdentifier *string `pulumi:"sourceDbClusterIdentifier"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted *bool `pulumi:"storageEncrypted"`
}

type GlobalClusterState struct {
	// RDS Global Cluster Amazon Resource Name (ARN)
	Arn pulumi.StringPtrInput
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrInput
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrInput
	Engine             pulumi.StringPtrInput
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringPtrInput
	// Enable to remove DB Cluster members from Global Cluster on destroy. Required with `sourceDbClusterIdentifier`.
	ForceDestroy pulumi.BoolPtrInput
	// The global cluster identifier.
	GlobalClusterIdentifier pulumi.StringPtrInput
	// Set of objects containing Global Cluster members.
	GlobalClusterMembers GlobalClusterGlobalClusterMemberArrayInput
	// AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed
	GlobalClusterResourceId   pulumi.StringPtrInput
	SourceDbClusterIdentifier pulumi.StringPtrInput
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrInput
}

func (GlobalClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*globalClusterState)(nil)).Elem()
}

type globalClusterArgs struct {
	// Name for an automatically created database on cluster creation.
	DatabaseName *string `pulumi:"databaseName"`
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection *bool   `pulumi:"deletionProtection"`
	Engine             *string `pulumi:"engine"`
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion *string `pulumi:"engineVersion"`
	// Enable to remove DB Cluster members from Global Cluster on destroy. Required with `sourceDbClusterIdentifier`.
	ForceDestroy *bool `pulumi:"forceDestroy"`
	// The global cluster identifier.
	GlobalClusterIdentifier   string  `pulumi:"globalClusterIdentifier"`
	SourceDbClusterIdentifier *string `pulumi:"sourceDbClusterIdentifier"`
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted *bool `pulumi:"storageEncrypted"`
}

// The set of arguments for constructing a GlobalCluster resource.
type GlobalClusterArgs struct {
	// Name for an automatically created database on cluster creation.
	DatabaseName pulumi.StringPtrInput
	// If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
	DeletionProtection pulumi.BoolPtrInput
	Engine             pulumi.StringPtrInput
	// Engine version of the Aurora global database.
	// * **NOTE:** When the engine is set to `aurora-mysql`, an engine version compatible with global database is required. The earliest available version is `5.7.mysql_aurora.2.06.0`.
	EngineVersion pulumi.StringPtrInput
	// Enable to remove DB Cluster members from Global Cluster on destroy. Required with `sourceDbClusterIdentifier`.
	ForceDestroy pulumi.BoolPtrInput
	// The global cluster identifier.
	GlobalClusterIdentifier   pulumi.StringInput
	SourceDbClusterIdentifier pulumi.StringPtrInput
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted pulumi.BoolPtrInput
}

func (GlobalClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*globalClusterArgs)(nil)).Elem()
}
