# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class App(pulumi.CustomResource):
    application_id: pulumi.Output[str]
    """
    The Application ID of the Pinpoint App.
    """
    arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of the PinPoint Application
    """
    campaign_hook: pulumi.Output[dict]
    """
    The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own

      * `lambdaFunctionName` (`str`) - Lambda function name or ARN to be called for delivery. Conflicts with `web_url`
      * `mode` (`str`) - What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.  
      * `webUrl` (`str`) - Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`
    """
    limits: pulumi.Output[dict]
    """
    The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own

      * `daily` (`float`) - The maximum number of messages that the campaign can send daily. 
      * `maximumDuration` (`float`) - The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
      * `messages_per_second` (`float`) - The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
      * `total` (`float`) - The maximum total number of messages that the campaign can send.
    """
    name: pulumi.Output[str]
    """
    The application name. By default generated by this provider
    """
    name_prefix: pulumi.Output[str]
    """
    The name of the Pinpoint application. Conflicts with `name`
    """
    quiet_time: pulumi.Output[dict]
    """
    The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own

      * `end` (`str`) - The default end time for quiet time in ISO 8601 format. Required if `start` is set
      * `start` (`str`) - The default start time for quiet time in ISO 8601 format. Required if `end` is set
    """
    tags: pulumi.Output[dict]
    """
    Key-value map of resource tags
    """
    def __init__(__self__, resource_name, opts=None, campaign_hook=None, limits=None, name=None, name_prefix=None, quiet_time=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Pinpoint App resource.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        example = aws.pinpoint.App("example",
            limits={
                "maximumDuration": 600,
            },
            quiet_time={
                "end": "06:00",
                "start": "00:00",
            })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] campaign_hook: The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
        :param pulumi.Input[dict] limits: The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
        :param pulumi.Input[str] name: The application name. By default generated by this provider
        :param pulumi.Input[str] name_prefix: The name of the Pinpoint application. Conflicts with `name`
        :param pulumi.Input[dict] quiet_time: The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own
        :param pulumi.Input[dict] tags: Key-value map of resource tags

        The **campaign_hook** object supports the following:

          * `lambdaFunctionName` (`pulumi.Input[str]`) - Lambda function name or ARN to be called for delivery. Conflicts with `web_url`
          * `mode` (`pulumi.Input[str]`) - What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.  
          * `webUrl` (`pulumi.Input[str]`) - Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`

        The **limits** object supports the following:

          * `daily` (`pulumi.Input[float]`) - The maximum number of messages that the campaign can send daily. 
          * `maximumDuration` (`pulumi.Input[float]`) - The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
          * `messages_per_second` (`pulumi.Input[float]`) - The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
          * `total` (`pulumi.Input[float]`) - The maximum total number of messages that the campaign can send.

        The **quiet_time** object supports the following:

          * `end` (`pulumi.Input[str]`) - The default end time for quiet time in ISO 8601 format. Required if `start` is set
          * `start` (`pulumi.Input[str]`) - The default start time for quiet time in ISO 8601 format. Required if `end` is set
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

            __props__['campaign_hook'] = campaign_hook
            __props__['limits'] = limits
            __props__['name'] = name
            __props__['name_prefix'] = name_prefix
            __props__['quiet_time'] = quiet_time
            __props__['tags'] = tags
            __props__['application_id'] = None
            __props__['arn'] = None
        super(App, __self__).__init__(
            'aws:pinpoint/app:App',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, application_id=None, arn=None, campaign_hook=None, limits=None, name=None, name_prefix=None, quiet_time=None, tags=None):
        """
        Get an existing App resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The Application ID of the Pinpoint App.
        :param pulumi.Input[str] arn: Amazon Resource Name (ARN) of the PinPoint Application
        :param pulumi.Input[dict] campaign_hook: The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
        :param pulumi.Input[dict] limits: The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
        :param pulumi.Input[str] name: The application name. By default generated by this provider
        :param pulumi.Input[str] name_prefix: The name of the Pinpoint application. Conflicts with `name`
        :param pulumi.Input[dict] quiet_time: The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own
        :param pulumi.Input[dict] tags: Key-value map of resource tags

        The **campaign_hook** object supports the following:

          * `lambdaFunctionName` (`pulumi.Input[str]`) - Lambda function name or ARN to be called for delivery. Conflicts with `web_url`
          * `mode` (`pulumi.Input[str]`) - What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.  
          * `webUrl` (`pulumi.Input[str]`) - Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name`

        The **limits** object supports the following:

          * `daily` (`pulumi.Input[float]`) - The maximum number of messages that the campaign can send daily. 
          * `maximumDuration` (`pulumi.Input[float]`) - The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
          * `messages_per_second` (`pulumi.Input[float]`) - The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
          * `total` (`pulumi.Input[float]`) - The maximum total number of messages that the campaign can send.

        The **quiet_time** object supports the following:

          * `end` (`pulumi.Input[str]`) - The default end time for quiet time in ISO 8601 format. Required if `start` is set
          * `start` (`pulumi.Input[str]`) - The default start time for quiet time in ISO 8601 format. Required if `end` is set
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["application_id"] = application_id
        __props__["arn"] = arn
        __props__["campaign_hook"] = campaign_hook
        __props__["limits"] = limits
        __props__["name"] = name
        __props__["name_prefix"] = name_prefix
        __props__["quiet_time"] = quiet_time
        __props__["tags"] = tags
        return App(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

