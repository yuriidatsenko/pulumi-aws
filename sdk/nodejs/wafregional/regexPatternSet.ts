// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a WAF Regional Regex Pattern Set Resource
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.wafregional.RegexPatternSet("example", {
 *     regexPatternStrings: [
 *         "one",
 *         "two",
 *     ],
 * });
 * ```
 */
export class RegexPatternSet extends pulumi.CustomResource {
    /**
     * Get an existing RegexPatternSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegexPatternSetState, opts?: pulumi.CustomResourceOptions): RegexPatternSet {
        return new RegexPatternSet(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name or description of the Regex Pattern Set.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
     */
    public readonly regexPatternStrings: pulumi.Output<string[] | undefined>;

    /**
     * Create a RegexPatternSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<RegexPatternSetArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<RegexPatternSetArgs> | pulumi.InputObject<RegexPatternSetState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: RegexPatternSetState = argsOrState as RegexPatternSetState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["regexPatternStrings"] = state ? state.regexPatternStrings : undefined;
        } else {
            const args = argsOrState as RegexPatternSetArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["regexPatternStrings"] = args ? args.regexPatternStrings : undefined;
        }
        super("aws:wafregional/regexPatternSet:RegexPatternSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RegexPatternSet resources.
 */
export interface RegexPatternSetState {
    /**
     * The name or description of the Regex Pattern Set.
     */
    readonly name?: string;
    /**
     * A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
     */
    readonly regexPatternStrings?: string[];
}

/**
 * The set of arguments for constructing a RegexPatternSet resource.
 */
export interface RegexPatternSetArgs {
    /**
     * The name or description of the Regex Pattern Set.
     */
    readonly name?: string;
    /**
     * A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
     */
    readonly regexPatternStrings?: string[];
}
