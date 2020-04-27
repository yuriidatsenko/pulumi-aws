// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * `aws.route53.getResolverRules` provides details about a set of Route53 Resolver rules.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.route53.getResolverRules({
 *     tags: [{
 *         Environment: "dev",
 *     }],
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/route53_resolver_rules.html.markdown.
 */
export function getResolverRules(args?: GetResolverRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetResolverRulesResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:route53/getResolverRules:getResolverRules", {
        "ownerId": args.ownerId,
        "resolverEndpointId": args.resolverEndpointId,
        "ruleType": args.ruleType,
        "shareStatus": args.shareStatus,
    }, opts);
}

/**
 * A collection of arguments for invoking getResolverRules.
 */
export interface GetResolverRulesArgs {
    /**
     * When the desired resolver rules are shared with another AWS account, the account ID of the account that the rules are shared with.
     */
    readonly ownerId?: string;
    /**
     * The ID of the outbound resolver endpoint for the desired resolver rules.
     */
    readonly resolverEndpointId?: string;
    /**
     * The rule type of the desired resolver rules. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
     */
    readonly ruleType?: string;
    /**
     * Whether the desired resolver rules are shared and, if so, whether the current account is sharing the rules with another account, or another account is sharing the rules with the current account.
     * Values are `NOT_SHARED`, `SHARED_BY_ME` or `SHARED_WITH_ME`
     */
    readonly shareStatus?: string;
}

/**
 * A collection of values returned by getResolverRules.
 */
export interface GetResolverRulesResult {
    readonly ownerId?: string;
    readonly resolverEndpointId?: string;
    /**
     * The IDs of the matched resolver rules.
     */
    readonly resolverRuleIds: string[];
    readonly ruleType?: string;
    readonly shareStatus?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
