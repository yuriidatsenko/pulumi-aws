// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Outputs
{

    [OutputType]
    public sealed class TopicRuleErrorAction
    {
        public readonly Outputs.TopicRuleErrorActionCloudwatchAlarm? CloudwatchAlarm;
        public readonly Outputs.TopicRuleErrorActionCloudwatchMetric? CloudwatchMetric;
        public readonly Outputs.TopicRuleErrorActionDynamodb? Dynamodb;
        public readonly Outputs.TopicRuleErrorActionDynamodbv2? Dynamodbv2;
        public readonly Outputs.TopicRuleErrorActionElasticsearch? Elasticsearch;
        public readonly Outputs.TopicRuleErrorActionFirehose? Firehose;
        public readonly Outputs.TopicRuleErrorActionIotAnalytics? IotAnalytics;
        public readonly Outputs.TopicRuleErrorActionIotEvents? IotEvents;
        public readonly Outputs.TopicRuleErrorActionKinesis? Kinesis;
        public readonly Outputs.TopicRuleErrorActionLambda? Lambda;
        public readonly Outputs.TopicRuleErrorActionRepublish? Republish;
        public readonly Outputs.TopicRuleErrorActionS3? S3;
        public readonly Outputs.TopicRuleErrorActionSns? Sns;
        public readonly Outputs.TopicRuleErrorActionSqs? Sqs;
        public readonly Outputs.TopicRuleErrorActionStepFunctions? StepFunctions;

        [OutputConstructor]
        private TopicRuleErrorAction(
            Outputs.TopicRuleErrorActionCloudwatchAlarm? cloudwatchAlarm,

            Outputs.TopicRuleErrorActionCloudwatchMetric? cloudwatchMetric,

            Outputs.TopicRuleErrorActionDynamodb? dynamodb,

            Outputs.TopicRuleErrorActionDynamodbv2? dynamodbv2,

            Outputs.TopicRuleErrorActionElasticsearch? elasticsearch,

            Outputs.TopicRuleErrorActionFirehose? firehose,

            Outputs.TopicRuleErrorActionIotAnalytics? iotAnalytics,

            Outputs.TopicRuleErrorActionIotEvents? iotEvents,

            Outputs.TopicRuleErrorActionKinesis? kinesis,

            Outputs.TopicRuleErrorActionLambda? lambda,

            Outputs.TopicRuleErrorActionRepublish? republish,

            Outputs.TopicRuleErrorActionS3? s3,

            Outputs.TopicRuleErrorActionSns? sns,

            Outputs.TopicRuleErrorActionSqs? sqs,

            Outputs.TopicRuleErrorActionStepFunctions? stepFunctions)
        {
            CloudwatchAlarm = cloudwatchAlarm;
            CloudwatchMetric = cloudwatchMetric;
            Dynamodb = dynamodb;
            Dynamodbv2 = dynamodbv2;
            Elasticsearch = elasticsearch;
            Firehose = firehose;
            IotAnalytics = iotAnalytics;
            IotEvents = iotEvents;
            Kinesis = kinesis;
            Lambda = lambda;
            Republish = republish;
            S3 = s3;
            Sns = sns;
            Sqs = sqs;
            StepFunctions = stepFunctions;
        }
    }
}
