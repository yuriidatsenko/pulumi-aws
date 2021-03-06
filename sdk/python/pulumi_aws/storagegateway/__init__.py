# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .cache import *
from .caches_iscsi_volume import *
from .gateway import *
from .get_local_disk import *
from .nfs_file_share import *
from .smb_file_share import *
from .stored_iscsi_volume import *
from .tape_pool import *
from .upload_buffer import *
from .working_storage import *
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
            if typ == "aws:storagegateway/cache:Cache":
                return Cache(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/cachesIscsiVolume:CachesIscsiVolume":
                return CachesIscsiVolume(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/gateway:Gateway":
                return Gateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/nfsFileShare:NfsFileShare":
                return NfsFileShare(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/smbFileShare:SmbFileShare":
                return SmbFileShare(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/storedIscsiVolume:StoredIscsiVolume":
                return StoredIscsiVolume(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/tapePool:TapePool":
                return TapePool(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/uploadBuffer:UploadBuffer":
                return UploadBuffer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:storagegateway/workingStorage:WorkingStorage":
                return WorkingStorage(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("aws", "storagegateway/cache", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/cachesIscsiVolume", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/gateway", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/nfsFileShare", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/smbFileShare", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/storedIscsiVolume", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/tapePool", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/uploadBuffer", _module_instance)
    pulumi.runtime.register_resource_module("aws", "storagegateway/workingStorage", _module_instance)

_register_module()
