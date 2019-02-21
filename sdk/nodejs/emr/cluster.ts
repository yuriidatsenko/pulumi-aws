// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an Elastic MapReduce Cluster, a web service that makes it easy to
 * process large amounts of data efficiently. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/elastic-mapreduce/)
 * for more information.
 * 
 * ## Example Usage
 * 
 * ### Enable Debug Logging
 * 
 * [Debug logging in EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-debugging.html)
 * is implemented as a step. It is highly recommended to utilize the
 * [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other
 * steps are being managed outside of Terraform.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.emr.Cluster("example", {
 *     steps: [{
 *         action: "TERMINATE_CLUSTER",
 *         hadoopJarStep: {
 *             args: ["state-pusher-script"],
 *             jar: "command-runner.jar",
 *         },
 *         name: "Setup Hadoop Debugging",
 *     }],
 * });
 * ```
 * 
 * ## ec2_attributes
 * 
 * Attributes for the Amazon EC2 instances running the job flow
 * 
 * * `key_name` - (Optional) Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`
 * * `subnet_id` - (Optional) VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in a Amazon VPC
 * * `additional_master_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the master node
 * * `additional_slave_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string
 * * `emr_managed_master_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the master node
 * * `emr_managed_slave_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes
 * * `service_access_security_group` - (Optional) Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet
 * * `instance_profile` - (Required) Instance Profile for EC2 instances of the cluster assume this role
 * 
 * > **NOTE on EMR-Managed security groups:** These security groups will have any
 * missing inbound or outbound access rules added and maintained by AWS, to ensure
 * proper communication between instances in a cluster. The EMR service will
 * maintain these rules for groups provided in `emr_managed_master_security_group`
 * and `emr_managed_slave_security_group`; attempts to remove the required rules
 * may succeed, only for the EMR service to re-add them in a matter of minutes.
 * This may cause Terraform to fail to destroy an environment that contains an EMR
 * cluster, because the EMR service does not revoke rules added on deletion,
 * leaving a cyclic dependency between the security groups that prevents their
 * deletion. To avoid this, use the `revoke_rules_on_delete` optional attribute for
 * any Security Group used in `emr_managed_master_security_group` and
 * `emr_managed_slave_security_group`. See [Amazon EMR-Managed Security
 * Groups](http://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-man-sec-groups.html)
 * for more information about the EMR-managed security group rules.
 * 
 * ## kerberos_attributes
 * 
 * Attributes for Kerberos configuration
 * 
 * * `ad_domain_join_password` - (Optional) The Active Directory password for `ad_domain_join_user`
 * * `ad_domain_join_user` - (Optional) Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.
 * * `cross_realm_trust_principal_password` - (Optional) Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.
 * * `kdc_admin_password` - (Required) The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
 * * `realm` - (Required) The name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`
 * 
 * ## instance_group
 * 
 * Attributes for each task instance group in the cluster
 * 
 * * `instance_role` - (Required) The role of the instance group in the cluster. Valid values are: `MASTER`, `CORE`, and `TASK`.
 * * `instance_type` - (Required) The EC2 instance type for all instances in the instance group
 * * `instance_count` - (Optional) Target number of instances for the instance group
 * * `name` - (Optional) Friendly name given to the instance group
 * * `bid_price` - (Optional) If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances. `bid_price` can not be set for the `MASTER` instance group, since that group must always be On-Demand
 * * `ebs_config` - (Optional) A list of attributes for the EBS volumes attached to each instance in the instance group. Each `ebs_config` defined will result in additional EBS volumes being attached to _each_ instance in the instance group. Defined below
 * * `autoscaling_policy` - (Optional) The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
 * 
 * ## ebs_config
 * 
 * Attributes for the EBS volumes attached to each EC2 instance in the `instance_group`
 * 
 * * `size` - (Required) The volume size, in gibibytes (GiB).
 * * `type` - (Required) The volume type. Valid options are `gp2`, `io1`, `standard` and `st1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
 * * `iops` - (Optional) The number of I/O operations per second (IOPS) that the volume supports
 * * `volumes_per_instance` - (Optional) The number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1)
 * 
 * ## bootstrap_action
 * 
 * * `name` - (Required) Name of the bootstrap action
 * * `path` - (Required) Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system
 * * `args` - (Optional) List of command line arguments to pass to the bootstrap action script
 * 
 * ## step
 * 
 * Attributes for step configuration
 * 
 * * `action_on_failure` - (Required) The action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`
 * * `hadoop_jar_step` - (Required) The JAR file used for the step. Defined below.
 * * `name` - (Required) The name of the step.
 * 
 * ### hadoop_jar_step
 * 
 * Attributes for Hadoop job step configuration
 * 
 * * `args` - (Optional) List of command line arguments passed to the JAR file's main function when executed.
 * * `jar` - (Required) Path to a JAR file run during the step.
 * * `main_class` - (Optional) Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
 * * `properties` - (Optional) Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.
 * 
 * ## Example bootable config
 * 
 * **NOTE:** This configuration demonstrates a minimal configuration needed to
 * boot an example EMR Cluster. It is not meant to display best practices. Please
 * use at your own risk.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * // IAM Role for EC2 Instance Profile
 * const iamEmrProfileRole = new aws.iam.Role("iam_emr_profile_role", {
 *     assumeRolePolicy: `{
 *   "Version": "2008-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "",
 *       "Effect": "Allow",
 *       "Principal": {
 *         "Service": "ec2.amazonaws.com"
 *       },
 *       "Action": "sts:AssumeRole"
 *     }
 *   ]
 * }
 * `,
 * });
 * // IAM role for EMR Service
 * const iamEmrServiceRole = new aws.iam.Role("iam_emr_service_role", {
 *     assumeRolePolicy: `{
 *   "Version": "2008-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "",
 *       "Effect": "Allow",
 *       "Principal": {
 *         "Service": "elasticmapreduce.amazonaws.com"
 *       },
 *       "Action": "sts:AssumeRole"
 *     }
 *   ]
 * }
 * `,
 * });
 * const mainVpc = new aws.ec2.Vpc("main", {
 *     cidrBlock: "168.31.0.0/16",
 *     enableDnsHostnames: true,
 *     tags: {
 *         name: "emr_test",
 *     },
 * });
 * const emrProfile = new aws.iam.InstanceProfile("emr_profile", {
 *     roles: [iamEmrProfileRole.name],
 * });
 * const mainSubnet = new aws.ec2.Subnet("main", {
 *     cidrBlock: "168.31.0.0/20",
 *     tags: {
 *         name: "emr_test",
 *     },
 *     vpcId: mainVpc.id,
 * });
 * const allowAll = new aws.ec2.SecurityGroup("allow_all", {
 *     description: "Allow all inbound traffic",
 *     egress: [{
 *         cidrBlocks: ["0.0.0.0/0"],
 *         fromPort: 0,
 *         protocol: "-1",
 *         toPort: 0,
 *     }],
 *     ingress: [{
 *         cidrBlocks: ["0.0.0.0/0"],
 *         fromPort: 0,
 *         protocol: "-1",
 *         toPort: 0,
 *     }],
 *     tags: {
 *         name: "emr_test",
 *     },
 *     vpcId: mainVpc.id,
 * }, {dependsOn: [mainSubnet]});
 * const cluster = new aws.emr.Cluster("cluster", {
 *     applications: ["Spark"],
 *     bootstrapActions: [{
 *         args: [
 *             "instance.isMaster=true",
 *             "echo running on master node",
 *         ],
 *         name: "runif",
 *         path: "s3://elasticmapreduce/bootstrap-actions/run-if",
 *     }],
 *     configurationsJson: `  [
 *     {
 *       "Classification": "hadoop-env",
 *       "Configurations": [
 *         {
 *           "Classification": "export",
 *           "Properties": {
 *             "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
 *           }
 *         }
 *       ],
 *       "Properties": {}
 *     },
 *     {
 *       "Classification": "spark-env",
 *       "Configurations": [
 *         {
 *           "Classification": "export",
 *           "Properties": {
 *             "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
 *           }
 *         }
 *       ],
 *       "Properties": {}
 *     }
 *   ]
 * `,
 *     coreInstanceCount: 1,
 *     coreInstanceType: "m5.xlarge",
 *     ec2Attributes: {
 *         emrManagedMasterSecurityGroup: allowAll.id,
 *         emrManagedSlaveSecurityGroup: allowAll.id,
 *         instanceProfile: emrProfile.arn,
 *         subnetId: mainSubnet.id,
 *     },
 *     masterInstanceType: "m5.xlarge",
 *     releaseLabel: "emr-4.6.0",
 *     serviceRole: iamEmrServiceRole.arn,
 *     tags: {
 *         dns_zone: "env_zone",
 *         env: "env",
 *         name: "name-env",
 *         role: "rolename",
 *     },
 * });
 * const iamEmrProfilePolicy = new aws.iam.RolePolicy("iam_emr_profile_policy", {
 *     policy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [{
 *         "Effect": "Allow",
 *         "Resource": "*",
 *         "Action": [
 *             "cloudwatch:*",
 *             "dynamodb:*",
 *             "ec2:Describe*",
 *             "elasticmapreduce:Describe*",
 *             "elasticmapreduce:ListBootstrapActions",
 *             "elasticmapreduce:ListClusters",
 *             "elasticmapreduce:ListInstanceGroups",
 *             "elasticmapreduce:ListInstances",
 *             "elasticmapreduce:ListSteps",
 *             "kinesis:CreateStream",
 *             "kinesis:DeleteStream",
 *             "kinesis:DescribeStream",
 *             "kinesis:GetRecords",
 *             "kinesis:GetShardIterator",
 *             "kinesis:MergeShards",
 *             "kinesis:PutRecord",
 *             "kinesis:SplitShard",
 *             "rds:Describe*",
 *             "s3:*",
 *             "sdb:*",
 *             "sns:*",
 *             "sqs:*"
 *         ]
 *     }]
 * }
 * `,
 *     role: iamEmrProfileRole.id,
 * });
 * const iamEmrServicePolicy = new aws.iam.RolePolicy("iam_emr_service_policy", {
 *     policy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [{
 *         "Effect": "Allow",
 *         "Resource": "*",
 *         "Action": [
 *             "ec2:AuthorizeSecurityGroupEgress",
 *             "ec2:AuthorizeSecurityGroupIngress",
 *             "ec2:CancelSpotInstanceRequests",
 *             "ec2:CreateNetworkInterface",
 *             "ec2:CreateSecurityGroup",
 *             "ec2:CreateTags",
 *             "ec2:DeleteNetworkInterface",
 *             "ec2:DeleteSecurityGroup",
 *             "ec2:DeleteTags",
 *             "ec2:DescribeAvailabilityZones",
 *             "ec2:DescribeAccountAttributes",
 *             "ec2:DescribeDhcpOptions",
 *             "ec2:DescribeInstanceStatus",
 *             "ec2:DescribeInstances",
 *             "ec2:DescribeKeyPairs",
 *             "ec2:DescribeNetworkAcls",
 *             "ec2:DescribeNetworkInterfaces",
 *             "ec2:DescribePrefixLists",
 *             "ec2:DescribeRouteTables",
 *             "ec2:DescribeSecurityGroups",
 *             "ec2:DescribeSpotInstanceRequests",
 *             "ec2:DescribeSpotPriceHistory",
 *             "ec2:DescribeSubnets",
 *             "ec2:DescribeVpcAttribute",
 *             "ec2:DescribeVpcEndpoints",
 *             "ec2:DescribeVpcEndpointServices",
 *             "ec2:DescribeVpcs",
 *             "ec2:DetachNetworkInterface",
 *             "ec2:ModifyImageAttribute",
 *             "ec2:ModifyInstanceAttribute",
 *             "ec2:RequestSpotInstances",
 *             "ec2:RevokeSecurityGroupEgress",
 *             "ec2:RunInstances",
 *             "ec2:TerminateInstances",
 *             "ec2:DeleteVolume",
 *             "ec2:DescribeVolumeStatus",
 *             "ec2:DescribeVolumes",
 *             "ec2:DetachVolume",
 *             "iam:GetRole",
 *             "iam:GetRolePolicy",
 *             "iam:ListInstanceProfiles",
 *             "iam:ListRolePolicies",
 *             "iam:PassRole",
 *             "s3:CreateBucket",
 *             "s3:Get*",
 *             "s3:List*",
 *             "sdb:BatchPutAttributes",
 *             "sdb:Select",
 *             "sqs:CreateQueue",
 *             "sqs:Delete*",
 *             "sqs:GetQueue*",
 *             "sqs:PurgeQueue",
 *             "sqs:ReceiveMessage"
 *         ]
 *     }]
 * }
 * `,
 *     role: iamEmrServiceRole.id,
 * });
 * const gw = new aws.ec2.InternetGateway("gw", {
 *     vpcId: mainVpc.id,
 * });
 * const routeTable = new aws.ec2.RouteTable("r", {
 *     routes: [{
 *         cidrBlock: "0.0.0.0/0",
 *         gatewayId: gw.id,
 *     }],
 *     vpcId: mainVpc.id,
 * });
 * const mainRouteTableAssociation = new aws.ec2.MainRouteTableAssociation("a", {
 *     routeTableId: routeTable.id,
 *     vpcId: mainVpc.id,
 * });
 * ```
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /**
     * A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
     */
    public readonly additionalInfo: pulumi.Output<string | undefined>;
    /**
     * A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
     */
    public readonly applications: pulumi.Output<string[] | undefined>;
    /**
     * An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    public readonly autoscalingRole: pulumi.Output<string | undefined>;
    /**
     * List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
     */
    public readonly bootstrapActions: pulumi.Output<{ args?: string[], name: string, path: string }[] | undefined>;
    public /*out*/ readonly clusterState: pulumi.Output<string>;
    /**
     * List of configurations supplied for the EMR cluster you are creating
     */
    public readonly configurations: pulumi.Output<string | undefined>;
    /**
     * A JSON string for supplying list of configurations for the EMR cluster.
     */
    public readonly configurationsJson: pulumi.Output<string | undefined>;
    /**
     * Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `instance_groups` is set. Default `1`
     */
    public readonly coreInstanceCount: pulumi.Output<number>;
    /**
     * The EC2 instance type of the slave nodes. Cannot be specified if `instance_groups` is set
     */
    public readonly coreInstanceType: pulumi.Output<string>;
    /**
     * A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
     */
    public readonly customAmiId: pulumi.Output<string | undefined>;
    /**
     * Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
     */
    public readonly ebsRootVolumeSize: pulumi.Output<number | undefined>;
    /**
     * Attributes for the EC2 instances running the job flow. Defined below
     */
    public readonly ec2Attributes: pulumi.Output<{ additionalMasterSecurityGroups?: string, additionalSlaveSecurityGroups?: string, emrManagedMasterSecurityGroup?: string, emrManagedSlaveSecurityGroup?: string, instanceProfile: string, keyName?: string, serviceAccessSecurityGroup?: string, subnetId?: string } | undefined>;
    /**
     * A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Defined below
     */
    public readonly instanceGroups: pulumi.Output<{ autoscalingPolicy?: string, bidPrice?: string, ebsConfigs: { iops?: number, size: number, type: string, volumesPerInstance?: number }[], id: string, instanceCount?: number, instanceRole: string, instanceType: string, name?: string }[]>;
    /**
     * Switch on/off run cluster with no steps or when all steps are complete (default is on)
     */
    public readonly keepJobFlowAliveWhenNoSteps: pulumi.Output<boolean>;
    /**
     * Kerberos configuration for the cluster. Defined below
     */
    public readonly kerberosAttributes: pulumi.Output<{ adDomainJoinPassword?: string, adDomainJoinUser?: string, crossRealmTrustPrincipalPassword?: string, kdcAdminPassword: string, realm: string } | undefined>;
    /**
     * S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
     */
    public readonly logUri: pulumi.Output<string | undefined>;
    /**
     * The EC2 instance type of the master node. Exactly one of `master_instance_type` and `instance_group` must be specified.
     */
    public readonly masterInstanceType: pulumi.Output<string>;
    /**
     * The public DNS name of the master EC2 instance.
     */
    public /*out*/ readonly masterPublicDns: pulumi.Output<string>;
    /**
     * The name of the job flow
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The release label for the Amazon EMR release
     */
    public readonly releaseLabel: pulumi.Output<string>;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
     */
    public readonly scaleDownBehavior: pulumi.Output<string>;
    /**
     * The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
     */
    public readonly securityConfiguration: pulumi.Output<string | undefined>;
    /**
     * IAM role that will be assumed by the Amazon EMR service to access AWS resources
     */
    public readonly serviceRole: pulumi.Output<string>;
    /**
     * List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform.
     */
    public readonly steps: pulumi.Output<{ actionOnFailure: string, hadoopJarStep: { args?: string[], jar: string, mainClass?: string, properties?: {[key: string]: any} }, name: string }[]>;
    /**
     * list of tags to apply to the EMR Cluster
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Switch on/off termination protection (default is off)
     */
    public readonly terminationProtection: pulumi.Output<boolean>;
    /**
     * Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
     */
    public readonly visibleToAllUsers: pulumi.Output<boolean | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: pulumi.InputObject<ClusterArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<ClusterArgs> | pulumi.InputObject<ClusterState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ClusterState = argsOrState as ClusterState | undefined;
            inputs["additionalInfo"] = state ? state.additionalInfo : undefined;
            inputs["applications"] = state ? state.applications : undefined;
            inputs["autoscalingRole"] = state ? state.autoscalingRole : undefined;
            inputs["bootstrapActions"] = state ? state.bootstrapActions : undefined;
            inputs["clusterState"] = state ? state.clusterState : undefined;
            inputs["configurations"] = state ? state.configurations : undefined;
            inputs["configurationsJson"] = state ? state.configurationsJson : undefined;
            inputs["coreInstanceCount"] = state ? state.coreInstanceCount : undefined;
            inputs["coreInstanceType"] = state ? state.coreInstanceType : undefined;
            inputs["customAmiId"] = state ? state.customAmiId : undefined;
            inputs["ebsRootVolumeSize"] = state ? state.ebsRootVolumeSize : undefined;
            inputs["ec2Attributes"] = state ? state.ec2Attributes : undefined;
            inputs["instanceGroups"] = state ? state.instanceGroups : undefined;
            inputs["keepJobFlowAliveWhenNoSteps"] = state ? state.keepJobFlowAliveWhenNoSteps : undefined;
            inputs["kerberosAttributes"] = state ? state.kerberosAttributes : undefined;
            inputs["logUri"] = state ? state.logUri : undefined;
            inputs["masterInstanceType"] = state ? state.masterInstanceType : undefined;
            inputs["masterPublicDns"] = state ? state.masterPublicDns : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["releaseLabel"] = state ? state.releaseLabel : undefined;
            inputs["scaleDownBehavior"] = state ? state.scaleDownBehavior : undefined;
            inputs["securityConfiguration"] = state ? state.securityConfiguration : undefined;
            inputs["serviceRole"] = state ? state.serviceRole : undefined;
            inputs["steps"] = state ? state.steps : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["terminationProtection"] = state ? state.terminationProtection : undefined;
            inputs["visibleToAllUsers"] = state ? state.visibleToAllUsers : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if (!args || args.releaseLabel === undefined) {
                throw new Error("Missing required property 'releaseLabel'");
            }
            if (!args || args.serviceRole === undefined) {
                throw new Error("Missing required property 'serviceRole'");
            }
            inputs["additionalInfo"] = args ? args.additionalInfo : undefined;
            inputs["applications"] = args ? args.applications : undefined;
            inputs["autoscalingRole"] = args ? args.autoscalingRole : undefined;
            inputs["bootstrapActions"] = args ? args.bootstrapActions : undefined;
            inputs["configurations"] = args ? args.configurations : undefined;
            inputs["configurationsJson"] = args ? args.configurationsJson : undefined;
            inputs["coreInstanceCount"] = args ? args.coreInstanceCount : undefined;
            inputs["coreInstanceType"] = args ? args.coreInstanceType : undefined;
            inputs["customAmiId"] = args ? args.customAmiId : undefined;
            inputs["ebsRootVolumeSize"] = args ? args.ebsRootVolumeSize : undefined;
            inputs["ec2Attributes"] = args ? args.ec2Attributes : undefined;
            inputs["instanceGroups"] = args ? args.instanceGroups : undefined;
            inputs["keepJobFlowAliveWhenNoSteps"] = args ? args.keepJobFlowAliveWhenNoSteps : undefined;
            inputs["kerberosAttributes"] = args ? args.kerberosAttributes : undefined;
            inputs["logUri"] = args ? args.logUri : undefined;
            inputs["masterInstanceType"] = args ? args.masterInstanceType : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["releaseLabel"] = args ? args.releaseLabel : undefined;
            inputs["scaleDownBehavior"] = args ? args.scaleDownBehavior : undefined;
            inputs["securityConfiguration"] = args ? args.securityConfiguration : undefined;
            inputs["serviceRole"] = args ? args.serviceRole : undefined;
            inputs["steps"] = args ? args.steps : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["terminationProtection"] = args ? args.terminationProtection : undefined;
            inputs["visibleToAllUsers"] = args ? args.visibleToAllUsers : undefined;
            inputs["clusterState"] = undefined /*out*/;
            inputs["masterPublicDns"] = undefined /*out*/;
        }
        super("aws:emr/cluster:Cluster", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
     */
    readonly additionalInfo?: string;
    /**
     * A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
     */
    readonly applications?: string[];
    /**
     * An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    readonly autoscalingRole?: string;
    /**
     * List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
     */
    readonly bootstrapActions?: { args?: string[], name: string, path: string }[];
    readonly clusterState?: string;
    /**
     * List of configurations supplied for the EMR cluster you are creating
     */
    readonly configurations?: string;
    /**
     * A JSON string for supplying list of configurations for the EMR cluster.
     */
    readonly configurationsJson?: string;
    /**
     * Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `instance_groups` is set. Default `1`
     */
    readonly coreInstanceCount?: number;
    /**
     * The EC2 instance type of the slave nodes. Cannot be specified if `instance_groups` is set
     */
    readonly coreInstanceType?: string;
    /**
     * A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
     */
    readonly customAmiId?: string;
    /**
     * Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
     */
    readonly ebsRootVolumeSize?: number;
    /**
     * Attributes for the EC2 instances running the job flow. Defined below
     */
    readonly ec2Attributes?: { additionalMasterSecurityGroups?: string, additionalSlaveSecurityGroups?: string, emrManagedMasterSecurityGroup?: string, emrManagedSlaveSecurityGroup?: string, instanceProfile: string, keyName?: string, serviceAccessSecurityGroup?: string, subnetId?: string };
    /**
     * A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Defined below
     */
    readonly instanceGroups?: { autoscalingPolicy?: string, bidPrice?: string, ebsConfigs?: { iops?: number, size: number, type: string, volumesPerInstance?: number }[], id?: string, instanceCount?: number, instanceRole: string, instanceType: string, name?: string }[];
    /**
     * Switch on/off run cluster with no steps or when all steps are complete (default is on)
     */
    readonly keepJobFlowAliveWhenNoSteps?: boolean;
    /**
     * Kerberos configuration for the cluster. Defined below
     */
    readonly kerberosAttributes?: { adDomainJoinPassword?: string, adDomainJoinUser?: string, crossRealmTrustPrincipalPassword?: string, kdcAdminPassword: string, realm: string };
    /**
     * S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
     */
    readonly logUri?: string;
    /**
     * The EC2 instance type of the master node. Exactly one of `master_instance_type` and `instance_group` must be specified.
     */
    readonly masterInstanceType?: string;
    /**
     * The public DNS name of the master EC2 instance.
     */
    readonly masterPublicDns?: string;
    /**
     * The name of the job flow
     */
    readonly name?: string;
    /**
     * The release label for the Amazon EMR release
     */
    readonly releaseLabel?: string;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
     */
    readonly scaleDownBehavior?: string;
    /**
     * The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
     */
    readonly securityConfiguration?: string;
    /**
     * IAM role that will be assumed by the Amazon EMR service to access AWS resources
     */
    readonly serviceRole?: string;
    /**
     * List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform.
     */
    readonly steps?: { actionOnFailure: string, hadoopJarStep: { args?: string[], jar: string, mainClass?: string, properties?: {[key: string]: any} }, name: string }[];
    /**
     * list of tags to apply to the EMR Cluster
     */
    readonly tags?: {[key: string]: any};
    /**
     * Switch on/off termination protection (default is off)
     */
    readonly terminationProtection?: boolean;
    /**
     * Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
     */
    readonly visibleToAllUsers?: boolean;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform.
     */
    readonly additionalInfo?: string;
    /**
     * A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
     */
    readonly applications?: string[];
    /**
     * An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    readonly autoscalingRole?: string;
    /**
     * List of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below
     */
    readonly bootstrapActions?: { args?: string[], name: string, path: string }[];
    /**
     * List of configurations supplied for the EMR cluster you are creating
     */
    readonly configurations?: string;
    /**
     * A JSON string for supplying list of configurations for the EMR cluster.
     */
    readonly configurationsJson?: string;
    /**
     * Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `instance_groups` is set. Default `1`
     */
    readonly coreInstanceCount?: number;
    /**
     * The EC2 instance type of the slave nodes. Cannot be specified if `instance_groups` is set
     */
    readonly coreInstanceType?: string;
    /**
     * A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
     */
    readonly customAmiId?: string;
    /**
     * Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
     */
    readonly ebsRootVolumeSize?: number;
    /**
     * Attributes for the EC2 instances running the job flow. Defined below
     */
    readonly ec2Attributes?: { additionalMasterSecurityGroups?: string, additionalSlaveSecurityGroups?: string, emrManagedMasterSecurityGroup?: string, emrManagedSlaveSecurityGroup?: string, instanceProfile: string, keyName?: string, serviceAccessSecurityGroup?: string, subnetId?: string };
    /**
     * A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Defined below
     */
    readonly instanceGroups?: { autoscalingPolicy?: string, bidPrice?: string, ebsConfigs?: { iops?: number, size: number, type: string, volumesPerInstance?: number }[], id?: string, instanceCount?: number, instanceRole: string, instanceType: string, name?: string }[];
    /**
     * Switch on/off run cluster with no steps or when all steps are complete (default is on)
     */
    readonly keepJobFlowAliveWhenNoSteps?: boolean;
    /**
     * Kerberos configuration for the cluster. Defined below
     */
    readonly kerberosAttributes?: { adDomainJoinPassword?: string, adDomainJoinUser?: string, crossRealmTrustPrincipalPassword?: string, kdcAdminPassword: string, realm: string };
    /**
     * S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
     */
    readonly logUri?: string;
    /**
     * The EC2 instance type of the master node. Exactly one of `master_instance_type` and `instance_group` must be specified.
     */
    readonly masterInstanceType?: string;
    /**
     * The name of the job flow
     */
    readonly name?: string;
    /**
     * The release label for the Amazon EMR release
     */
    readonly releaseLabel: string;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
     */
    readonly scaleDownBehavior?: string;
    /**
     * The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
     */
    readonly securityConfiguration?: string;
    /**
     * IAM role that will be assumed by the Amazon EMR service to access AWS resources
     */
    readonly serviceRole: string;
    /**
     * List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize the [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html) with `ignore_changes` if other steps are being managed outside of Terraform.
     */
    readonly steps?: { actionOnFailure: string, hadoopJarStep: { args?: string[], jar: string, mainClass?: string, properties?: {[key: string]: any} }, name: string }[];
    /**
     * list of tags to apply to the EMR Cluster
     */
    readonly tags?: {[key: string]: any};
    /**
     * Switch on/off termination protection (default is off)
     */
    readonly terminationProtection?: boolean;
    /**
     * Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
     */
    readonly visibleToAllUsers?: boolean;
}
