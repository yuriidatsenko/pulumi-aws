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
    'PolicyStepScalingPolicyConfiguration',
    'PolicyStepScalingPolicyConfigurationStepAdjustment',
    'PolicyTargetTrackingScalingPolicyConfiguration',
    'PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification',
    'PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension',
    'PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification',
    'ScheduledActionScalableTargetAction',
]

@pulumi.output_type
class PolicyStepScalingPolicyConfiguration(dict):
    @property
    @pulumi.getter(name="adjustmentType")
    def adjustment_type(self) -> Optional[str]:
        """
        Specifies whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
        """
        ...

    @property
    @pulumi.getter
    def cooldown(self) -> Optional[float]:
        """
        The amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start.
        """
        ...

    @property
    @pulumi.getter(name="metricAggregationType")
    def metric_aggregation_type(self) -> Optional[str]:
        """
        The aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average".
        """
        ...

    @property
    @pulumi.getter(name="minAdjustmentMagnitude")
    def min_adjustment_magnitude(self) -> Optional[float]:
        """
        The minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount.
        """
        ...

    @property
    @pulumi.getter(name="stepAdjustments")
    def step_adjustments(self) -> Optional[List['outputs.PolicyStepScalingPolicyConfigurationStepAdjustment']]:
        """
        A set of adjustments that manage scaling. These have the following structure:
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PolicyStepScalingPolicyConfigurationStepAdjustment(dict):
    @property
    @pulumi.getter(name="metricIntervalLowerBound")
    def metric_interval_lower_bound(self) -> Optional[str]:
        """
        The lower bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as negative infinity.
        """
        ...

    @property
    @pulumi.getter(name="metricIntervalUpperBound")
    def metric_interval_upper_bound(self) -> Optional[str]:
        """
        The upper bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as infinity. The upper bound must be greater than the lower bound.
        """
        ...

    @property
    @pulumi.getter(name="scalingAdjustment")
    def scaling_adjustment(self) -> float:
        """
        The number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PolicyTargetTrackingScalingPolicyConfiguration(dict):
    @property
    @pulumi.getter(name="customizedMetricSpecification")
    def customized_metric_specification(self) -> Optional['outputs.PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification']:
        """
        A custom CloudWatch metric. Documentation can be found  at: [AWS Customized Metric Specification](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CustomizedMetricSpecification.html). See supported fields below.
        """
        ...

    @property
    @pulumi.getter(name="disableScaleIn")
    def disable_scale_in(self) -> Optional[bool]:
        """
        Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is `false`.
        """
        ...

    @property
    @pulumi.getter(name="predefinedMetricSpecification")
    def predefined_metric_specification(self) -> Optional['outputs.PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification']:
        """
        A predefined metric. See supported fields below.
        """
        ...

    @property
    @pulumi.getter(name="scaleInCooldown")
    def scale_in_cooldown(self) -> Optional[float]:
        """
        The amount of time, in seconds, after a scale in activity completes before another scale in activity can start.
        """
        ...

    @property
    @pulumi.getter(name="scaleOutCooldown")
    def scale_out_cooldown(self) -> Optional[float]:
        """
        The amount of time, in seconds, after a scale out activity completes before another scale out activity can start.
        """
        ...

    @property
    @pulumi.getter(name="targetValue")
    def target_value(self) -> float:
        """
        The target value for the metric.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification(dict):
    @property
    @pulumi.getter
    def dimensions(self) -> Optional[List['outputs.PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension']]:
        """
        Configuration block(s) with the dimensions of the metric if the metric was published with dimensions. Detailed below.
        """
        ...

    @property
    @pulumi.getter(name="metricName")
    def metric_name(self) -> str:
        """
        The name of the metric.
        """
        ...

    @property
    @pulumi.getter
    def namespace(self) -> str:
        """
        The namespace of the metric.
        """
        ...

    @property
    @pulumi.getter
    def statistic(self) -> str:
        """
        The statistic of the metric. Valid values: `Average`, `Minimum`, `Maximum`, `SampleCount`, and `Sum`.
        """
        ...

    @property
    @pulumi.getter
    def unit(self) -> Optional[str]:
        """
        The unit of the metric.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension(dict):
    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the policy.
        """
        ...

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        Value of the dimension.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification(dict):
    @property
    @pulumi.getter(name="predefinedMetricType")
    def predefined_metric_type(self) -> str:
        """
        The metric type.
        """
        ...

    @property
    @pulumi.getter(name="resourceLabel")
    def resource_label(self) -> Optional[str]:
        """
        Reserved for future use.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScheduledActionScalableTargetAction(dict):
    @property
    @pulumi.getter(name="maxCapacity")
    def max_capacity(self) -> Optional[float]:
        """
        The maximum capacity.
        """
        ...

    @property
    @pulumi.getter(name="minCapacity")
    def min_capacity(self) -> Optional[float]:
        """
        The minimum capacity.
        """
        ...

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

