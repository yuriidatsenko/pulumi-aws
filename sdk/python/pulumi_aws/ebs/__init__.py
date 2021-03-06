# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .default_kms_key import *
from .encryption_by_default import *
from .get_default_kms_key import *
from .get_ebs_volumes import *
from .get_encryption_by_default import *
from .get_snapshot import *
from .get_snapshot_ids import *
from .get_volume import *
from .snapshot import *
from .snapshot_copy import *
from .volume import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from .. import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "aws:ebs/defaultKmsKey:DefaultKmsKey":
                return DefaultKmsKey(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ebs/encryptionByDefault:EncryptionByDefault":
                return EncryptionByDefault(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ebs/snapshot:Snapshot":
                return Snapshot(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ebs/snapshotCopy:SnapshotCopy":
                return SnapshotCopy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ebs/volume:Volume":
                return Volume(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("aws", "ebs/defaultKmsKey", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ebs/encryptionByDefault", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ebs/snapshot", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ebs/snapshotCopy", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ebs/volume", _module_instance)

_register_module()
