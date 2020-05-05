# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Directory(pulumi.CustomResource):
    access_url: pulumi.Output[str]
    """
    The access URL for the directory, such as `http://alias.awsapps.com`.
    """
    alias: pulumi.Output[str]
    """
    The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.
    """
    connect_settings: pulumi.Output[dict]
    """
    Connector related information about the directory. Fields documented below.

      * `customerDnsIps` (`list`) - The DNS IP addresses of the domain to connect to.
      * `customerUsername` (`str`) - The username corresponding to the password provided.
      * `subnet_ids` (`list`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
      * `vpc_id` (`str`) - The identifier of the VPC that the directory is in.
    """
    description: pulumi.Output[str]
    """
    A textual description for the directory.
    """
    dns_ip_addresses: pulumi.Output[list]
    """
    A list of IP addresses of the DNS servers for the directory or connector.
    """
    edition: pulumi.Output[str]
    """
    The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
    """
    enable_sso: pulumi.Output[bool]
    """
    Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
    """
    name: pulumi.Output[str]
    """
    The fully qualified name for the directory, such as `corp.example.com`
    """
    password: pulumi.Output[str]
    """
    The password for the directory administrator or connector user.
    """
    security_group_id: pulumi.Output[str]
    """
    The ID of the security group created by the directory.
    """
    short_name: pulumi.Output[str]
    """
    The short name of the directory, such as `CORP`.
    """
    size: pulumi.Output[str]
    """
    The size of the directory (`Small` or `Large` are accepted values).
    """
    tags: pulumi.Output[dict]
    """
    A map of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    """
    The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
    """
    vpc_settings: pulumi.Output[dict]
    """
    VPC related information about the directory. Fields documented below.

      * `subnet_ids` (`list`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
      * `vpc_id` (`str`) - The identifier of the VPC that the directory is in.
    """
    def __init__(__self__, resource_name, opts=None, alias=None, connect_settings=None, description=None, edition=None, enable_sso=None, name=None, password=None, short_name=None, size=None, tags=None, type=None, vpc_settings=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Simple or Managed Microsoft directory in AWS Directory Service.

        > **Note:** All arguments including the password and customer username will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).

        ## Example Usage

        ### SimpleAD

        ```python
        import pulumi
        import pulumi_aws as aws

        main = aws.ec2.Vpc("main", cidr_block="10.0.0.0/16")
        foo = aws.ec2.Subnet("foo",
            availability_zone="us-west-2a",
            cidr_block="10.0.1.0/24",
            vpc_id=main.id)
        bar_subnet = aws.ec2.Subnet("barSubnet",
            availability_zone="us-west-2b",
            cidr_block="10.0.2.0/24",
            vpc_id=main.id)
        bar_directory = aws.directoryservice.Directory("barDirectory",
            password="SuperSecretPassw0rd",
            size="Small",
            tags={
                "Project": "foo",
            },
            vpc_settings={
                "subnetIds": [
                    foo.id,
                    bar_subnet.id,
                ],
                "vpcId": main.id,
            })
        ```

        ### Microsoft Active Directory (MicrosoftAD)

        ```python
        import pulumi
        import pulumi_aws as aws

        main = aws.ec2.Vpc("main", cidr_block="10.0.0.0/16")
        foo = aws.ec2.Subnet("foo",
            availability_zone="us-west-2a",
            cidr_block="10.0.1.0/24",
            vpc_id=main.id)
        bar_subnet = aws.ec2.Subnet("barSubnet",
            availability_zone="us-west-2b",
            cidr_block="10.0.2.0/24",
            vpc_id=main.id)
        bar_directory = aws.directoryservice.Directory("barDirectory",
            edition="Standard",
            password="SuperSecretPassw0rd",
            tags={
                "Project": "foo",
            },
            type="MicrosoftAD",
            vpc_settings={
                "subnetIds": [
                    foo.id,
                    bar_subnet.id,
                ],
                "vpcId": main.id,
            })
        ```

        ### Microsoft Active Directory Connector (ADConnector)

        ```python
        import pulumi
        import pulumi_aws as aws

        main = aws.ec2.Vpc("main", cidr_block="10.0.0.0/16")
        foo = aws.ec2.Subnet("foo",
            availability_zone="us-west-2a",
            cidr_block="10.0.1.0/24",
            vpc_id=main.id)
        bar = aws.ec2.Subnet("bar",
            availability_zone="us-west-2b",
            cidr_block="10.0.2.0/24",
            vpc_id=main.id)
        connector = aws.directoryservice.Directory("connector",
            connect_settings={
                "customerDnsIps": ["A.B.C.D"],
                "customerUsername": "Admin",
                "subnetIds": [
                    foo.id,
                    bar.id,
                ],
                "vpcId": main.id,
            },
            password="SuperSecretPassw0rd",
            size="Small",
            type="ADConnector")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] alias: The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.
        :param pulumi.Input[dict] connect_settings: Connector related information about the directory. Fields documented below.
        :param pulumi.Input[str] description: A textual description for the directory.
        :param pulumi.Input[str] edition: The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
        :param pulumi.Input[bool] enable_sso: Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
        :param pulumi.Input[str] name: The fully qualified name for the directory, such as `corp.example.com`
        :param pulumi.Input[str] password: The password for the directory administrator or connector user.
        :param pulumi.Input[str] short_name: The short name of the directory, such as `CORP`.
        :param pulumi.Input[str] size: The size of the directory (`Small` or `Large` are accepted values).
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.
        :param pulumi.Input[str] type: The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
        :param pulumi.Input[dict] vpc_settings: VPC related information about the directory. Fields documented below.

        The **connect_settings** object supports the following:

          * `customerDnsIps` (`pulumi.Input[list]`) - The DNS IP addresses of the domain to connect to.
          * `customerUsername` (`pulumi.Input[str]`) - The username corresponding to the password provided.
          * `subnet_ids` (`pulumi.Input[list]`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
          * `vpc_id` (`pulumi.Input[str]`) - The identifier of the VPC that the directory is in.

        The **vpc_settings** object supports the following:

          * `subnet_ids` (`pulumi.Input[list]`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
          * `vpc_id` (`pulumi.Input[str]`) - The identifier of the VPC that the directory is in.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['alias'] = alias
            __props__['connect_settings'] = connect_settings
            __props__['description'] = description
            __props__['edition'] = edition
            __props__['enable_sso'] = enable_sso
            __props__['name'] = name
            if password is None:
                raise TypeError("Missing required property 'password'")
            __props__['password'] = password
            __props__['short_name'] = short_name
            __props__['size'] = size
            __props__['tags'] = tags
            __props__['type'] = type
            __props__['vpc_settings'] = vpc_settings
            __props__['access_url'] = None
            __props__['dns_ip_addresses'] = None
            __props__['security_group_id'] = None
        super(Directory, __self__).__init__(
            'aws:directoryservice/directory:Directory',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, access_url=None, alias=None, connect_settings=None, description=None, dns_ip_addresses=None, edition=None, enable_sso=None, name=None, password=None, security_group_id=None, short_name=None, size=None, tags=None, type=None, vpc_settings=None):
        """
        Get an existing Directory resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] access_url: The access URL for the directory, such as `http://alias.awsapps.com`.
        :param pulumi.Input[str] alias: The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`.
        :param pulumi.Input[dict] connect_settings: Connector related information about the directory. Fields documented below.
        :param pulumi.Input[str] description: A textual description for the directory.
        :param pulumi.Input[list] dns_ip_addresses: A list of IP addresses of the DNS servers for the directory or connector.
        :param pulumi.Input[str] edition: The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
        :param pulumi.Input[bool] enable_sso: Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
        :param pulumi.Input[str] name: The fully qualified name for the directory, such as `corp.example.com`
        :param pulumi.Input[str] password: The password for the directory administrator or connector user.
        :param pulumi.Input[str] security_group_id: The ID of the security group created by the directory.
        :param pulumi.Input[str] short_name: The short name of the directory, such as `CORP`.
        :param pulumi.Input[str] size: The size of the directory (`Small` or `Large` are accepted values).
        :param pulumi.Input[dict] tags: A map of tags to assign to the resource.
        :param pulumi.Input[str] type: The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
        :param pulumi.Input[dict] vpc_settings: VPC related information about the directory. Fields documented below.

        The **connect_settings** object supports the following:

          * `customerDnsIps` (`pulumi.Input[list]`) - The DNS IP addresses of the domain to connect to.
          * `customerUsername` (`pulumi.Input[str]`) - The username corresponding to the password provided.
          * `subnet_ids` (`pulumi.Input[list]`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
          * `vpc_id` (`pulumi.Input[str]`) - The identifier of the VPC that the directory is in.

        The **vpc_settings** object supports the following:

          * `subnet_ids` (`pulumi.Input[list]`) - The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
          * `vpc_id` (`pulumi.Input[str]`) - The identifier of the VPC that the directory is in.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["access_url"] = access_url
        __props__["alias"] = alias
        __props__["connect_settings"] = connect_settings
        __props__["description"] = description
        __props__["dns_ip_addresses"] = dns_ip_addresses
        __props__["edition"] = edition
        __props__["enable_sso"] = enable_sso
        __props__["name"] = name
        __props__["password"] = password
        __props__["security_group_id"] = security_group_id
        __props__["short_name"] = short_name
        __props__["size"] = size
        __props__["tags"] = tags
        __props__["type"] = type
        __props__["vpc_settings"] = vpc_settings
        return Directory(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

