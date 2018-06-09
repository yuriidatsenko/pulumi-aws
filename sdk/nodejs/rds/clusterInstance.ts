// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an RDS Cluster Resource Instance. A Cluster Instance Resource defines
 * attributes that are specific to a single instance in a [RDS Cluster][3],
 * specifically running Amazon Aurora.
 * 
 * Unlike other RDS resources that support replication, with Amazon Aurora you do
 * not designate a primary and subsequent replicas. Instead, you simply add RDS
 * Instances and Aurora manages the replication. You can use the [count][5]
 * meta-parameter to make multiple instances and join them all to the same RDS
 * Cluster, or you may specify different Cluster Instance resources with various
 * `instance_class` sizes.
 * 
 * For more information on Amazon Aurora, see [Aurora on Amazon RDS][2] in the Amazon RDS User Guide.
 */
export class ClusterInstance extends pulumi.CustomResource {
    /**
     * Get an existing ClusterInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterInstanceState): ClusterInstance {
        return new ClusterInstance(name, <any>state, { id });
    }

    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    public readonly applyImmediately: pulumi.Output<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    public readonly autoMinorVersionUpgrade: pulumi.Output<boolean | undefined>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    public readonly availabilityZone: pulumi.Output<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    public readonly clusterIdentifier: pulumi.Output<string>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    public readonly dbParameterGroupName: pulumi.Output<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html).
     */
    public readonly dbSubnetGroupName: pulumi.Output<string>;
    /**
     * The region-unique, immutable identifier for the DB instance.
     */
    public /*out*/ readonly dbiResourceId: pulumi.Output<string>;
    /**
     * The DNS address for this instance. May not be writable
     */
    public /*out*/ readonly endpoint: pulumi.Output<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: aurora, aurora-mysql, aurora-postgresql.
     */
    public readonly engine: pulumi.Output<string | undefined>;
    /**
     * The database engine version.
     */
    public readonly engineVersion: pulumi.Output<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    public readonly identifier: pulumi.Output<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifer`.
     */
    public readonly identifierPrefix: pulumi.Output<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora currently
     * supports the below instance classes.
     * - db.t2.small
     * - db.t2.medium
     * - db.r3.large
     * - db.r3.xlarge
     * - db.r3.2xlarge
     * - db.r3.4xlarge
     * - db.r3.8xlarge
     * - db.r4.large
     * - db.r4.xlarge
     * - db.r4.2xlarge
     * - db.r4.4xlarge
     * - db.r4.8xlarge
     * - db.r4.16xlarge
     */
    public readonly instanceClass: pulumi.Output<string>;
    /**
     * The ARN for the KMS encryption key if one is set to the cluster.
     */
    public /*out*/ readonly kmsKeyId: pulumi.Output<string>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    public readonly monitoringInterval: pulumi.Output<number | undefined>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    public readonly monitoringRoleArn: pulumi.Output<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    public readonly performanceInsightsEnabled: pulumi.Output<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    public readonly performanceInsightsKmsKeyId: pulumi.Output<string>;
    /**
     * The database port
     */
    public /*out*/ readonly port: pulumi.Output<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    public readonly preferredBackupWindow: pulumi.Output<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    public readonly preferredMaintenanceWindow: pulumi.Output<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    public readonly promotionTier: pulumi.Output<number | undefined>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    public readonly publiclyAccessible: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    public /*out*/ readonly storageEncrypted: pulumi.Output<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
     */
    public /*out*/ readonly writer: pulumi.Output<boolean>;

    /**
     * Create a ClusterInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterInstanceArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ClusterInstanceArgs | ClusterInstanceState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ClusterInstanceState = argsOrState as ClusterInstanceState | undefined;
            inputs["applyImmediately"] = state ? state.applyImmediately : undefined;
            inputs["autoMinorVersionUpgrade"] = state ? state.autoMinorVersionUpgrade : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["clusterIdentifier"] = state ? state.clusterIdentifier : undefined;
            inputs["dbParameterGroupName"] = state ? state.dbParameterGroupName : undefined;
            inputs["dbSubnetGroupName"] = state ? state.dbSubnetGroupName : undefined;
            inputs["dbiResourceId"] = state ? state.dbiResourceId : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["engineVersion"] = state ? state.engineVersion : undefined;
            inputs["identifier"] = state ? state.identifier : undefined;
            inputs["identifierPrefix"] = state ? state.identifierPrefix : undefined;
            inputs["instanceClass"] = state ? state.instanceClass : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["monitoringInterval"] = state ? state.monitoringInterval : undefined;
            inputs["monitoringRoleArn"] = state ? state.monitoringRoleArn : undefined;
            inputs["performanceInsightsEnabled"] = state ? state.performanceInsightsEnabled : undefined;
            inputs["performanceInsightsKmsKeyId"] = state ? state.performanceInsightsKmsKeyId : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["preferredBackupWindow"] = state ? state.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = state ? state.preferredMaintenanceWindow : undefined;
            inputs["promotionTier"] = state ? state.promotionTier : undefined;
            inputs["publiclyAccessible"] = state ? state.publiclyAccessible : undefined;
            inputs["storageEncrypted"] = state ? state.storageEncrypted : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["writer"] = state ? state.writer : undefined;
        } else {
            const args = argsOrState as ClusterInstanceArgs | undefined;
            if (!args || args.clusterIdentifier === undefined) {
                throw new Error("Missing required property 'clusterIdentifier'");
            }
            if (!args || args.instanceClass === undefined) {
                throw new Error("Missing required property 'instanceClass'");
            }
            inputs["applyImmediately"] = args ? args.applyImmediately : undefined;
            inputs["autoMinorVersionUpgrade"] = args ? args.autoMinorVersionUpgrade : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["clusterIdentifier"] = args ? args.clusterIdentifier : undefined;
            inputs["dbParameterGroupName"] = args ? args.dbParameterGroupName : undefined;
            inputs["dbSubnetGroupName"] = args ? args.dbSubnetGroupName : undefined;
            inputs["engine"] = args ? args.engine : undefined;
            inputs["engineVersion"] = args ? args.engineVersion : undefined;
            inputs["identifier"] = args ? args.identifier : undefined;
            inputs["identifierPrefix"] = args ? args.identifierPrefix : undefined;
            inputs["instanceClass"] = args ? args.instanceClass : undefined;
            inputs["monitoringInterval"] = args ? args.monitoringInterval : undefined;
            inputs["monitoringRoleArn"] = args ? args.monitoringRoleArn : undefined;
            inputs["performanceInsightsEnabled"] = args ? args.performanceInsightsEnabled : undefined;
            inputs["performanceInsightsKmsKeyId"] = args ? args.performanceInsightsKmsKeyId : undefined;
            inputs["preferredBackupWindow"] = args ? args.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = args ? args.preferredMaintenanceWindow : undefined;
            inputs["promotionTier"] = args ? args.promotionTier : undefined;
            inputs["publiclyAccessible"] = args ? args.publiclyAccessible : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["dbiResourceId"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["kmsKeyId"] = undefined /*out*/;
            inputs["port"] = undefined /*out*/;
            inputs["storageEncrypted"] = undefined /*out*/;
            inputs["writer"] = undefined /*out*/;
        }
        super("aws:rds/clusterInstance:ClusterInstance", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClusterInstance resources.
 */
export interface ClusterInstanceState {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    readonly autoMinorVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    readonly clusterIdentifier?: pulumi.Input<string>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    readonly dbParameterGroupName?: pulumi.Input<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html).
     */
    readonly dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The region-unique, immutable identifier for the DB instance.
     */
    readonly dbiResourceId?: pulumi.Input<string>;
    /**
     * The DNS address for this instance. May not be writable
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: aurora, aurora-mysql, aurora-postgresql.
     */
    readonly engine?: pulumi.Input<string>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    readonly identifier?: pulumi.Input<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifer`.
     */
    readonly identifierPrefix?: pulumi.Input<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora currently
     * supports the below instance classes.
     * - db.t2.small
     * - db.t2.medium
     * - db.r3.large
     * - db.r3.xlarge
     * - db.r3.2xlarge
     * - db.r3.4xlarge
     * - db.r3.8xlarge
     * - db.r4.large
     * - db.r4.xlarge
     * - db.r4.2xlarge
     * - db.r4.4xlarge
     * - db.r4.8xlarge
     * - db.r4.16xlarge
     */
    readonly instanceClass?: pulumi.Input<string>;
    /**
     * The ARN for the KMS encryption key if one is set to the cluster.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    readonly monitoringInterval?: pulumi.Input<number>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    readonly monitoringRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    readonly performanceInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    readonly performanceInsightsKmsKeyId?: pulumi.Input<string>;
    /**
     * The database port
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    readonly promotionTier?: pulumi.Input<number>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    readonly storageEncrypted?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
     */
    readonly writer?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ClusterInstance resource.
 */
export interface ClusterInstanceArgs {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    readonly autoMinorVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    readonly clusterIdentifier: pulumi.Input<string>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    readonly dbParameterGroupName?: pulumi.Input<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html).
     */
    readonly dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: aurora, aurora-mysql, aurora-postgresql.
     */
    readonly engine?: pulumi.Input<string>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    readonly identifier?: pulumi.Input<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifer`.
     */
    readonly identifierPrefix?: pulumi.Input<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora currently
     * supports the below instance classes.
     * - db.t2.small
     * - db.t2.medium
     * - db.r3.large
     * - db.r3.xlarge
     * - db.r3.2xlarge
     * - db.r3.4xlarge
     * - db.r3.8xlarge
     * - db.r4.large
     * - db.r4.xlarge
     * - db.r4.2xlarge
     * - db.r4.4xlarge
     * - db.r4.8xlarge
     * - db.r4.16xlarge
     */
    readonly instanceClass: pulumi.Input<string>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    readonly monitoringInterval?: pulumi.Input<number>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    readonly monitoringRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    readonly performanceInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    readonly performanceInsightsKmsKeyId?: pulumi.Input<string>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    readonly promotionTier?: pulumi.Input<number>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}