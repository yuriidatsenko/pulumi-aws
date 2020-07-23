# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from .. import _utilities, _tables
from . import outputs

__all__ = [
    'OrganizationAccount',
    'OrganizationNonMasterAccount',
    'OrganizationRoot',
    'OrganizationRootPolicyType',
    'OrganizationalUnitAccount',
    'GetOrganizationAccount',
    'GetOrganizationNonMasterAccount',
    'GetOrganizationRoot',
    'GetOrganizationRootPolicyType',
    'GetOrganizationalUnitsChildren',
]

@pulumi.output_type
class OrganizationAccount(dict):
    @property
    @pulumi.getter
    def arn(self) -> Optional[str]:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def email(self) -> Optional[str]:
        """
        Email of the account
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OrganizationNonMasterAccount(dict):
    @property
    @pulumi.getter
    def arn(self) -> Optional[str]:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def email(self) -> Optional[str]:
        """
        Email of the account
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OrganizationRoot(dict):
    @property
    @pulumi.getter
    def arn(self) -> Optional[str]:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter(name="policyTypes")
    def policy_types(self) -> Optional[List['outputs.OrganizationRootPolicyType']]:
        """
        List of policy types enabled for this root. All elements have these attributes:
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OrganizationRootPolicyType(dict):
    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OrganizationalUnitAccount(dict):
    @property
    @pulumi.getter
    def arn(self) -> Optional[str]:
        """
        ARN of the organizational unit
        """
        ...

    @property
    @pulumi.getter
    def email(self) -> Optional[str]:
        """
        Email of the account
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Identifier of the organization unit
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name for the organizational unit
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GetOrganizationAccount(dict):
    @property
    @pulumi.getter
    def arn(self) -> str:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def email(self) -> str:
        """
        Email of the account
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GetOrganizationNonMasterAccount(dict):
    @property
    @pulumi.getter
    def arn(self) -> str:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def email(self) -> str:
        """
        Email of the account
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GetOrganizationRoot(dict):
    @property
    @pulumi.getter
    def arn(self) -> str:
        """
        ARN of the root
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Identifier of the root
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the policy type
        """
        ...

    @property
    @pulumi.getter(name="policyTypes")
    def policy_types(self) -> List['outputs.GetOrganizationRootPolicyType']:
        """
        List of policy types enabled for this root. All elements have these attributes:
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GetOrganizationRootPolicyType(dict):
    @property
    @pulumi.getter
    def status(self) -> str:
        """
        The status of the policy type as it relates to the associated root
        """
        ...

    @property
    @pulumi.getter
    def type(self) -> str:
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GetOrganizationalUnitsChildren(dict):
    @property
    @pulumi.getter
    def arn(self) -> str:
        """
        ARN of the organizational unit
        """
        ...

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        ID of the organizational unit
        """
        ...

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the organizational unit
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

