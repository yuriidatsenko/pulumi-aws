# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .account_assignment import *
from .get_instances import *
from .get_permission_set import *
from .managed_policy_attachment import *
from .permission_set import *
from .permission_set_inline_policy import *

def _register_module():
    import pulumi
    from .. import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "aws:ssoadmin/accountAssignment:AccountAssignment":
                return AccountAssignment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ssoadmin/managedPolicyAttachment:ManagedPolicyAttachment":
                return ManagedPolicyAttachment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ssoadmin/permissionSet:PermissionSet":
                return PermissionSet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "aws:ssoadmin/permissionSetInlinePolicy:PermissionSetInlinePolicy":
                return PermissionSetInlinePolicy(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("aws", "ssoadmin/accountAssignment", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ssoadmin/managedPolicyAttachment", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ssoadmin/permissionSet", _module_instance)
    pulumi.runtime.register_resource_module("aws", "ssoadmin/permissionSetInlinePolicy", _module_instance)

_register_module()
