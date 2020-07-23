# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from .. import _utilities, _tables

__all__ = [
    'ClusterBrokerNodeGroupInfoArgs',
    'ClusterClientAuthenticationArgs',
    'ClusterClientAuthenticationTlsArgs',
    'ClusterConfigurationInfoArgs',
    'ClusterEncryptionInfoArgs',
    'ClusterEncryptionInfoEncryptionInTransitArgs',
    'ClusterLoggingInfoArgs',
    'ClusterLoggingInfoBrokerLogsArgs',
    'ClusterLoggingInfoBrokerLogsCloudwatchLogsArgs',
    'ClusterLoggingInfoBrokerLogsFirehoseArgs',
    'ClusterLoggingInfoBrokerLogsS3Args',
    'ClusterOpenMonitoringArgs',
    'ClusterOpenMonitoringPrometheusArgs',
    'ClusterOpenMonitoringPrometheusJmxExporterArgs',
    'ClusterOpenMonitoringPrometheusNodeExporterArgs',
]

@pulumi.input_type
class ClusterBrokerNodeGroupInfoArgs:
    def __init__(__self__, *,
                 client_subnets: pulumi.Input[List[pulumi.Input[str]]],
                 ebs_volume_size: pulumi.Input[float],
                 instance_type: pulumi.Input[str],
                 security_groups: pulumi.Input[List[pulumi.Input[str]]],
                 az_distribution: Optional[pulumi.Input[str]] = None):
        """
        :param pulumi.Input[List[pulumi.Input[str]]] client_subnets: A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
        :param pulumi.Input[float] ebs_volume_size: The size in GiB of the EBS volume for the data drive on each broker node.
        :param pulumi.Input[str] instance_type: Specify the instance type to use for the kafka brokers. e.g. kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
        :param pulumi.Input[List[pulumi.Input[str]]] security_groups: A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
        :param pulumi.Input[str] az_distribution: The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
        """
        pulumi.set(__self__, "clientSubnets", client_subnets)
        pulumi.set(__self__, "ebsVolumeSize", ebs_volume_size)
        pulumi.set(__self__, "instanceType", instance_type)
        pulumi.set(__self__, "securityGroups", security_groups)
        pulumi.set(__self__, "azDistribution", az_distribution)

    @property
    @pulumi.getter(name="clientSubnets")
    def client_subnets(self) -> pulumi.Input[List[pulumi.Input[str]]]:
        """
        A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)).
        """
        ...

    @client_subnets.setter
    def client_subnets(self, value: pulumi.Input[List[pulumi.Input[str]]]):
        ...

    @property
    @pulumi.getter(name="ebsVolumeSize")
    def ebs_volume_size(self) -> pulumi.Input[float]:
        """
        The size in GiB of the EBS volume for the data drive on each broker node.
        """
        ...

    @ebs_volume_size.setter
    def ebs_volume_size(self, value: pulumi.Input[float]):
        ...

    @property
    @pulumi.getter(name="instanceType")
    def instance_type(self) -> pulumi.Input[str]:
        """
        Specify the instance type to use for the kafka brokers. e.g. kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/))
        """
        ...

    @instance_type.setter
    def instance_type(self, value: pulumi.Input[str]):
        ...

    @property
    @pulumi.getter(name="securityGroups")
    def security_groups(self) -> pulumi.Input[List[pulumi.Input[str]]]:
        """
        A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster.
        """
        ...

    @security_groups.setter
    def security_groups(self, value: pulumi.Input[List[pulumi.Input[str]]]):
        ...

    @property
    @pulumi.getter(name="azDistribution")
    def az_distribution(self) -> Optional[pulumi.Input[str]]:
        """
        The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`.
        """
        ...

    @az_distribution.setter
    def az_distribution(self, value: Optional[pulumi.Input[str]]):
        ...


@pulumi.input_type
class ClusterClientAuthenticationArgs:
    def __init__(__self__, *,
                 tls: Optional[pulumi.Input['ClusterClientAuthenticationTlsArgs']] = None):
        """
        :param pulumi.Input['ClusterClientAuthenticationTlsArgs'] tls: Configuration block for specifying TLS client authentication. See below.
        """
        pulumi.set(__self__, "tls", tls)

    @property
    @pulumi.getter
    def tls(self) -> Optional[pulumi.Input['ClusterClientAuthenticationTlsArgs']]:
        """
        Configuration block for specifying TLS client authentication. See below.
        """
        ...

    @tls.setter
    def tls(self, value: Optional[pulumi.Input['ClusterClientAuthenticationTlsArgs']]):
        ...


@pulumi.input_type
class ClusterClientAuthenticationTlsArgs:
    def __init__(__self__, *,
                 certificate_authority_arns: Optional[pulumi.Input[List[pulumi.Input[str]]]] = None):
        """
        :param pulumi.Input[List[pulumi.Input[str]]] certificate_authority_arns: List of ACM Certificate Authority Amazon Resource Names (ARNs).
        """
        pulumi.set(__self__, "certificateAuthorityArns", certificate_authority_arns)

    @property
    @pulumi.getter(name="certificateAuthorityArns")
    def certificate_authority_arns(self) -> Optional[pulumi.Input[List[pulumi.Input[str]]]]:
        """
        List of ACM Certificate Authority Amazon Resource Names (ARNs).
        """
        ...

    @certificate_authority_arns.setter
    def certificate_authority_arns(self, value: Optional[pulumi.Input[List[pulumi.Input[str]]]]):
        ...


@pulumi.input_type
class ClusterConfigurationInfoArgs:
    def __init__(__self__, *,
                 arn: pulumi.Input[str],
                 revision: pulumi.Input[float]):
        """
        :param pulumi.Input[str] arn: Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        :param pulumi.Input[float] revision: Revision of the MSK Configuration to use in the cluster.
        """
        pulumi.set(__self__, "arn", arn)
        pulumi.set(__self__, "revision", revision)

    @property
    @pulumi.getter
    def arn(self) -> pulumi.Input[str]:
        """
        Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
        """
        ...

    @arn.setter
    def arn(self, value: pulumi.Input[str]):
        ...

    @property
    @pulumi.getter
    def revision(self) -> pulumi.Input[float]:
        """
        Revision of the MSK Configuration to use in the cluster.
        """
        ...

    @revision.setter
    def revision(self, value: pulumi.Input[float]):
        ...


@pulumi.input_type
class ClusterEncryptionInfoArgs:
    def __init__(__self__, *,
                 encryption_at_rest_kms_key_arn: Optional[pulumi.Input[str]] = None,
                 encryption_in_transit: Optional[pulumi.Input['ClusterEncryptionInfoEncryptionInTransitArgs']] = None):
        """
        :param pulumi.Input[str] encryption_at_rest_kms_key_arn: You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
        :param pulumi.Input['ClusterEncryptionInfoEncryptionInTransitArgs'] encryption_in_transit: Configuration block to specify encryption in transit. See below.
        """
        pulumi.set(__self__, "encryptionAtRestKmsKeyArn", encryption_at_rest_kms_key_arn)
        pulumi.set(__self__, "encryptionInTransit", encryption_in_transit)

    @property
    @pulumi.getter(name="encryptionAtRestKmsKeyArn")
    def encryption_at_rest_kms_key_arn(self) -> Optional[pulumi.Input[str]]:
        """
        You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
        """
        ...

    @encryption_at_rest_kms_key_arn.setter
    def encryption_at_rest_kms_key_arn(self, value: Optional[pulumi.Input[str]]):
        ...

    @property
    @pulumi.getter(name="encryptionInTransit")
    def encryption_in_transit(self) -> Optional[pulumi.Input['ClusterEncryptionInfoEncryptionInTransitArgs']]:
        """
        Configuration block to specify encryption in transit. See below.
        """
        ...

    @encryption_in_transit.setter
    def encryption_in_transit(self, value: Optional[pulumi.Input['ClusterEncryptionInfoEncryptionInTransitArgs']]):
        ...


@pulumi.input_type
class ClusterEncryptionInfoEncryptionInTransitArgs:
    def __init__(__self__, *,
                 client_broker: Optional[pulumi.Input[str]] = None,
                 in_cluster: Optional[pulumi.Input[bool]] = None):
        """
        :param pulumi.Input[str] client_broker: Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value is `TLS_PLAINTEXT` when `encryption_in_transit` block defined, but `TLS` when `encryption_in_transit` block omitted.
        :param pulumi.Input[bool] in_cluster: Whether data communication among broker nodes is encrypted. Default value: `true`.
        """
        pulumi.set(__self__, "clientBroker", client_broker)
        pulumi.set(__self__, "inCluster", in_cluster)

    @property
    @pulumi.getter(name="clientBroker")
    def client_broker(self) -> Optional[pulumi.Input[str]]:
        """
        Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value is `TLS_PLAINTEXT` when `encryption_in_transit` block defined, but `TLS` when `encryption_in_transit` block omitted.
        """
        ...

    @client_broker.setter
    def client_broker(self, value: Optional[pulumi.Input[str]]):
        ...

    @property
    @pulumi.getter(name="inCluster")
    def in_cluster(self) -> Optional[pulumi.Input[bool]]:
        """
        Whether data communication among broker nodes is encrypted. Default value: `true`.
        """
        ...

    @in_cluster.setter
    def in_cluster(self, value: Optional[pulumi.Input[bool]]):
        ...


@pulumi.input_type
class ClusterLoggingInfoArgs:
    def __init__(__self__, *,
                 broker_logs: pulumi.Input['ClusterLoggingInfoBrokerLogsArgs']):
        """
        :param pulumi.Input['ClusterLoggingInfoBrokerLogsArgs'] broker_logs: Configuration block for Broker Logs settings for logging info. See below.
        """
        pulumi.set(__self__, "brokerLogs", broker_logs)

    @property
    @pulumi.getter(name="brokerLogs")
    def broker_logs(self) -> pulumi.Input['ClusterLoggingInfoBrokerLogsArgs']:
        """
        Configuration block for Broker Logs settings for logging info. See below.
        """
        ...

    @broker_logs.setter
    def broker_logs(self, value: pulumi.Input['ClusterLoggingInfoBrokerLogsArgs']):
        ...


@pulumi.input_type
class ClusterLoggingInfoBrokerLogsArgs:
    def __init__(__self__, *,
                 cloudwatch_logs: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsCloudwatchLogsArgs']] = None,
                 firehose: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsFirehoseArgs']] = None,
                 s3: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsS3Args']] = None):
        pulumi.set(__self__, "cloudwatchLogs", cloudwatch_logs)
        pulumi.set(__self__, "firehose", firehose)
        pulumi.set(__self__, "s3", s3)

    @property
    @pulumi.getter(name="cloudwatchLogs")
    def cloudwatch_logs(self) -> Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsCloudwatchLogsArgs']]:
        ...

    @cloudwatch_logs.setter
    def cloudwatch_logs(self, value: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsCloudwatchLogsArgs']]):
        ...

    @property
    @pulumi.getter
    def firehose(self) -> Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsFirehoseArgs']]:
        ...

    @firehose.setter
    def firehose(self, value: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsFirehoseArgs']]):
        ...

    @property
    @pulumi.getter
    def s3(self) -> Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsS3Args']]:
        ...

    @s3.setter
    def s3(self, value: Optional[pulumi.Input['ClusterLoggingInfoBrokerLogsS3Args']]):
        ...


@pulumi.input_type
class ClusterLoggingInfoBrokerLogsCloudwatchLogsArgs:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 log_group: Optional[pulumi.Input[str]] = None):
        """
        :param pulumi.Input[bool] enabled: Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        :param pulumi.Input[str] log_group: Name of the Cloudwatch Log Group to deliver logs to.
        """
        pulumi.set(__self__, "enabled", enabled)
        pulumi.set(__self__, "logGroup", log_group)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        """
        ...

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        ...

    @property
    @pulumi.getter(name="logGroup")
    def log_group(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the Cloudwatch Log Group to deliver logs to.
        """
        ...

    @log_group.setter
    def log_group(self, value: Optional[pulumi.Input[str]]):
        ...


@pulumi.input_type
class ClusterLoggingInfoBrokerLogsFirehoseArgs:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 delivery_stream: Optional[pulumi.Input[str]] = None):
        """
        :param pulumi.Input[bool] enabled: Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        :param pulumi.Input[str] delivery_stream: Name of the Kinesis Data Firehose delivery stream to deliver logs to.
        """
        pulumi.set(__self__, "enabled", enabled)
        pulumi.set(__self__, "deliveryStream", delivery_stream)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        """
        ...

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        ...

    @property
    @pulumi.getter(name="deliveryStream")
    def delivery_stream(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the Kinesis Data Firehose delivery stream to deliver logs to.
        """
        ...

    @delivery_stream.setter
    def delivery_stream(self, value: Optional[pulumi.Input[str]]):
        ...


@pulumi.input_type
class ClusterLoggingInfoBrokerLogsS3Args:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 bucket: Optional[pulumi.Input[str]] = None,
                 prefix: Optional[pulumi.Input[str]] = None):
        """
        :param pulumi.Input[bool] enabled: Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        :param pulumi.Input[str] bucket: Name of the S3 bucket to deliver logs to.
        :param pulumi.Input[str] prefix: Prefix to append to the folder name.
        """
        pulumi.set(__self__, "enabled", enabled)
        pulumi.set(__self__, "bucket", bucket)
        pulumi.set(__self__, "prefix", prefix)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        Indicates whether you want to enable or disable streaming broker logs to Cloudwatch Logs.
        """
        ...

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        ...

    @property
    @pulumi.getter
    def bucket(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the S3 bucket to deliver logs to.
        """
        ...

    @bucket.setter
    def bucket(self, value: Optional[pulumi.Input[str]]):
        ...

    @property
    @pulumi.getter
    def prefix(self) -> Optional[pulumi.Input[str]]:
        """
        Prefix to append to the folder name.
        """
        ...

    @prefix.setter
    def prefix(self, value: Optional[pulumi.Input[str]]):
        ...


@pulumi.input_type
class ClusterOpenMonitoringArgs:
    def __init__(__self__, *,
                 prometheus: pulumi.Input['ClusterOpenMonitoringPrometheusArgs']):
        """
        :param pulumi.Input['ClusterOpenMonitoringPrometheusArgs'] prometheus: Configuration block for Prometheus settings for open monitoring. See below.
        """
        pulumi.set(__self__, "prometheus", prometheus)

    @property
    @pulumi.getter
    def prometheus(self) -> pulumi.Input['ClusterOpenMonitoringPrometheusArgs']:
        """
        Configuration block for Prometheus settings for open monitoring. See below.
        """
        ...

    @prometheus.setter
    def prometheus(self, value: pulumi.Input['ClusterOpenMonitoringPrometheusArgs']):
        ...


@pulumi.input_type
class ClusterOpenMonitoringPrometheusArgs:
    def __init__(__self__, *,
                 jmx_exporter: Optional[pulumi.Input['ClusterOpenMonitoringPrometheusJmxExporterArgs']] = None,
                 node_exporter: Optional[pulumi.Input['ClusterOpenMonitoringPrometheusNodeExporterArgs']] = None):
        """
        :param pulumi.Input['ClusterOpenMonitoringPrometheusJmxExporterArgs'] jmx_exporter: Configuration block for JMX Exporter. See below.
        :param pulumi.Input['ClusterOpenMonitoringPrometheusNodeExporterArgs'] node_exporter: Configuration block for Node Exporter. See below.
        """
        pulumi.set(__self__, "jmxExporter", jmx_exporter)
        pulumi.set(__self__, "nodeExporter", node_exporter)

    @property
    @pulumi.getter(name="jmxExporter")
    def jmx_exporter(self) -> Optional[pulumi.Input['ClusterOpenMonitoringPrometheusJmxExporterArgs']]:
        """
        Configuration block for JMX Exporter. See below.
        """
        ...

    @jmx_exporter.setter
    def jmx_exporter(self, value: Optional[pulumi.Input['ClusterOpenMonitoringPrometheusJmxExporterArgs']]):
        ...

    @property
    @pulumi.getter(name="nodeExporter")
    def node_exporter(self) -> Optional[pulumi.Input['ClusterOpenMonitoringPrometheusNodeExporterArgs']]:
        """
        Configuration block for Node Exporter. See below.
        """
        ...

    @node_exporter.setter
    def node_exporter(self, value: Optional[pulumi.Input['ClusterOpenMonitoringPrometheusNodeExporterArgs']]):
        ...


@pulumi.input_type
class ClusterOpenMonitoringPrometheusJmxExporterArgs:
    def __init__(__self__, *,
                 enabled_in_broker: pulumi.Input[bool]):
        """
        :param pulumi.Input[bool] enabled_in_broker: Indicates whether you want to enable or disable the JMX Exporter.
        """
        pulumi.set(__self__, "enabledInBroker", enabled_in_broker)

    @property
    @pulumi.getter(name="enabledInBroker")
    def enabled_in_broker(self) -> pulumi.Input[bool]:
        """
        Indicates whether you want to enable or disable the JMX Exporter.
        """
        ...

    @enabled_in_broker.setter
    def enabled_in_broker(self, value: pulumi.Input[bool]):
        ...


@pulumi.input_type
class ClusterOpenMonitoringPrometheusNodeExporterArgs:
    def __init__(__self__, *,
                 enabled_in_broker: pulumi.Input[bool]):
        """
        :param pulumi.Input[bool] enabled_in_broker: Indicates whether you want to enable or disable the JMX Exporter.
        """
        pulumi.set(__self__, "enabledInBroker", enabled_in_broker)

    @property
    @pulumi.getter(name="enabledInBroker")
    def enabled_in_broker(self) -> pulumi.Input[bool]:
        """
        Indicates whether you want to enable or disable the JMX Exporter.
        """
        ...

    @enabled_in_broker.setter
    def enabled_in_broker(self, value: pulumi.Input[bool]):
        ...

