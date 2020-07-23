# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from .. import _utilities, _tables

__all__ = [
    'ApplicationAppSource',
    'ApplicationEnvironment',
    'ApplicationSslConfiguration',
    'CustomLayerEbsVolume',
    'GangliaLayerEbsVolume',
    'HaproxyLayerEbsVolume',
    'InstanceEbsBlockDevice',
    'InstanceEphemeralBlockDevice',
    'InstanceRootBlockDevice',
    'JavaAppLayerEbsVolume',
    'MemcachedLayerEbsVolume',
    'MysqlLayerEbsVolume',
    'NodejsAppLayerEbsVolume',
    'PhpAppLayerEbsVolume',
    'RailsAppLayerEbsVolume',
    'StackCustomCookbooksSource',
    'StaticWebLayerEbsVolume',
]

@pulumi.output_type
class ApplicationAppSource(dict):
    @property
    @pulumi.getter
    def password(self) -> Optional[str]:
        """
        Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
        """
        ...

    @property
    @pulumi.getter
    def revision(self) -> Optional[str]:
        """
        For sources that are version-aware, the revision to use.
        """
        ...

    @property
    @pulumi.getter(name="sshKey")
    def ssh_key(self) -> Optional[str]:
        """
        SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of source to use. For example, "archive".
        """
        ...

    @property
    @pulumi.getter
    def url(self) -> Optional[str]:
        """
        The URL where the app resource can be found.
        """
        ...

    @property
    @pulumi.getter
    def username(self) -> Optional[str]:
        """
        Username to use when authenticating to the source.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ApplicationEnvironment(dict):
    @property
    @pulumi.getter
    def key(self) -> str:
        """
        Variable name.
        """
        ...

    @property
    @pulumi.getter
    def secure(self) -> Optional[bool]:
        """
        Set visibility of the variable value to `true` or `false`.
        """
        ...

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        Variable value.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ApplicationSslConfiguration(dict):
    @property
    @pulumi.getter
    def certificate(self) -> str:
        """
        The contents of the certificate's domain.crt file.
        """
        ...

    @property
    @pulumi.getter
    def chain(self) -> Optional[str]:
        """
        Can be used to specify an intermediate certificate authority key or client authentication.
        """
        ...

    @property
    @pulumi.getter(name="privateKey")
    def private_key(self) -> str:
        """
        The private key; the contents of the certificate's domain.key file.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CustomLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        """
        Encrypt the volume.
        """
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GangliaLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class HaproxyLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class InstanceEbsBlockDevice(dict):
    @property
    @pulumi.getter(name="deleteOnTermination")
    def delete_on_termination(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter(name="deviceName")
    def device_name(self) -> str:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        ...

    @property
    @pulumi.getter(name="snapshotId")
    def snapshot_id(self) -> Optional[str]:
        ...

    @property
    @pulumi.getter(name="volumeSize")
    def volume_size(self) -> Optional[float]:
        ...

    @property
    @pulumi.getter(name="volumeType")
    def volume_type(self) -> Optional[str]:
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class InstanceEphemeralBlockDevice(dict):
    @property
    @pulumi.getter(name="deviceName")
    def device_name(self) -> str:
        ...

    @property
    @pulumi.getter(name="virtualName")
    def virtual_name(self) -> str:
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class InstanceRootBlockDevice(dict):
    @property
    @pulumi.getter(name="deleteOnTermination")
    def delete_on_termination(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        ...

    @property
    @pulumi.getter(name="volumeSize")
    def volume_size(self) -> Optional[float]:
        ...

    @property
    @pulumi.getter(name="volumeType")
    def volume_type(self) -> Optional[str]:
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JavaAppLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MemcachedLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MysqlLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NodejsAppLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PhpAppLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RailsAppLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class StackCustomCookbooksSource(dict):
    @property
    @pulumi.getter
    def password(self) -> Optional[str]:
        """
        Password to use when authenticating to the source. The provider cannot perform drift detection of this configuration.
        """
        ...

    @property
    @pulumi.getter
    def revision(self) -> Optional[str]:
        """
        For sources that are version-aware, the revision to use.
        """
        ...

    @property
    @pulumi.getter(name="sshKey")
    def ssh_key(self) -> Optional[str]:
        """
        SSH key to use when authenticating to the source. The provider cannot perform drift detection of this configuration.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of source to use. For example, "archive".
        """
        ...

    @property
    @pulumi.getter
    def url(self) -> str:
        """
        The URL where the cookbooks resource can be found.
        """
        ...

    @property
    @pulumi.getter
    def username(self) -> Optional[str]:
        """
        Username to use when authenticating to the source.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class StaticWebLayerEbsVolume(dict):
    @property
    @pulumi.getter
    def encrypted(self) -> Optional[bool]:
        ...

    @property
    @pulumi.getter
    def iops(self) -> Optional[float]:
        """
        For PIOPS volumes, the IOPS per disk.
        """
        ...

    @property
    @pulumi.getter(name="mountPoint")
    def mount_point(self) -> str:
        """
        The path to mount the EBS volume on the layer's instances.
        """
        ...

    @property
    @pulumi.getter(name="numberOfDisks")
    def number_of_disks(self) -> float:
        """
        The number of disks to use for the EBS volume.
        """
        ...

    @property
    @pulumi.getter(name="raidLevel")
    def raid_level(self) -> Optional[str]:
        """
        The RAID level to use for the volume.
        """
        ...

    @property
    @pulumi.getter
    def size(self) -> float:
        """
        The size of the volume in gigabytes.
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

