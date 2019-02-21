// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Cognito User Pool resource.
 * 
 * ## Example Usage
 * 
 * ### Basic configuration
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const pool = new aws.cognito.UserPool("pool", {});
 * ```
 */
export class UserPool extends pulumi.CustomResource {
    /**
     * Get an existing UserPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserPoolState, opts?: pulumi.CustomResourceOptions): UserPool {
        return new UserPool(name, <any>state, { ...opts, id: id });
    }

    /**
     * The configuration for AdminCreateUser requests.
     */
    public readonly adminCreateUserConfig: pulumi.Output<{ allowAdminCreateUserOnly?: boolean, inviteMessageTemplate?: { emailMessage?: string, emailSubject?: string, smsMessage?: string }, unusedAccountValidityDays?: number }>;
    /**
     * Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username. Conflicts with `username_attributes`.
     */
    public readonly aliasAttributes: pulumi.Output<string[] | undefined>;
    /**
     * The ARN of the user pool.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The attributes to be auto-verified. Possible values: email, phone_number.
     */
    public readonly autoVerifiedAttributes: pulumi.Output<string[] | undefined>;
    /**
     * The date the user pool was created.
     */
    public /*out*/ readonly creationDate: pulumi.Output<string>;
    /**
     * The configuration for the user pool's device tracking.
     */
    public readonly deviceConfiguration: pulumi.Output<{ challengeRequiredOnNewDevice?: boolean, deviceOnlyRememberedOnUserPrompt?: boolean } | undefined>;
    /**
     * The Email Configuration.
     */
    public readonly emailConfiguration: pulumi.Output<{ replyToEmailAddress?: string, sourceArn?: string } | undefined>;
    /**
     * A string representing the email verification message. Must contain the `{####}` placeholder. **NOTE:** - If `email_verification_message` and `verification_message_template.email_message` are specified and the values are different, either one is prioritized and updated.
     */
    public readonly emailVerificationMessage: pulumi.Output<string>;
    /**
     * A string representing the email verification subject. **NOTE:** - If `email_verification_subject` and `verification_message_template.email_subject` are specified and the values are different, either one is prioritized and updated.
     */
    public readonly emailVerificationSubject: pulumi.Output<string>;
    /**
     * The endpoint name of the user pool. Example format: cognito-idp.REGION.amazonaws.com/xxxx_yyyyy
     */
    public /*out*/ readonly endpoint: pulumi.Output<string>;
    /**
     * A container for the AWS Lambda triggers associated with the user pool.
     */
    public readonly lambdaConfig: pulumi.Output<{ createAuthChallenge?: string, customMessage?: string, defineAuthChallenge?: string, postAuthentication?: string, postConfirmation?: string, preAuthentication?: string, preSignUp?: string, preTokenGeneration?: string, userMigration?: string, verifyAuthChallengeResponse?: string }>;
    /**
     * The date the user pool was last modified.
     */
    public /*out*/ readonly lastModifiedDate: pulumi.Output<string>;
    /**
     * Set to enable multi-factor authentication. Must be one of the following values (ON, OFF, OPTIONAL)
     */
    public readonly mfaConfiguration: pulumi.Output<string | undefined>;
    /**
     * The name of the attribute.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A container for information about the user pool password policy.
     */
    public readonly passwordPolicy: pulumi.Output<{ minimumLength?: number, requireLowercase?: boolean, requireNumbers?: boolean, requireSymbols?: boolean, requireUppercase?: boolean }>;
    /**
     * A container with the schema attributes of a user pool. Maximum of 50 attributes.
     */
    public readonly schemas: pulumi.Output<{ attributeDataType: string, developerOnlyAttribute?: boolean, mutable?: boolean, name: string, numberAttributeConstraints?: { maxValue?: string, minValue?: string }, required?: boolean, stringAttributeConstraints?: { maxLength?: string, minLength?: string } }[] | undefined>;
    /**
     * A string representing the SMS authentication message.
     */
    public readonly smsAuthenticationMessage: pulumi.Output<string | undefined>;
    /**
     * The SMS Configuration.
     */
    public readonly smsConfiguration: pulumi.Output<{ externalId: string, snsCallerArn: string } | undefined>;
    /**
     * A string representing the SMS verification message.
     */
    public readonly smsVerificationMessage: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the User Pool.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Configuration block for user pool add-ons to enable user pool advanced security mode features.
     */
    public readonly userPoolAddOns: pulumi.Output<{ advancedSecurityMode: string } | undefined>;
    /**
     * Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
     */
    public readonly usernameAttributes: pulumi.Output<string[] | undefined>;
    /**
     * The verification message templates configuration.
     */
    public readonly verificationMessageTemplate: pulumi.Output<{ defaultEmailOption?: string, emailMessage: string, emailMessageByLink: string, emailSubject: string, emailSubjectByLink: string, smsMessage: string }>;

    /**
     * Create a UserPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: pulumi.InputObject<UserPoolArgs>, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: pulumi.InputObject<UserPoolArgs> | pulumi.InputObject<UserPoolState>, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: UserPoolState = argsOrState as UserPoolState | undefined;
            inputs["adminCreateUserConfig"] = state ? state.adminCreateUserConfig : undefined;
            inputs["aliasAttributes"] = state ? state.aliasAttributes : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["autoVerifiedAttributes"] = state ? state.autoVerifiedAttributes : undefined;
            inputs["creationDate"] = state ? state.creationDate : undefined;
            inputs["deviceConfiguration"] = state ? state.deviceConfiguration : undefined;
            inputs["emailConfiguration"] = state ? state.emailConfiguration : undefined;
            inputs["emailVerificationMessage"] = state ? state.emailVerificationMessage : undefined;
            inputs["emailVerificationSubject"] = state ? state.emailVerificationSubject : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["lambdaConfig"] = state ? state.lambdaConfig : undefined;
            inputs["lastModifiedDate"] = state ? state.lastModifiedDate : undefined;
            inputs["mfaConfiguration"] = state ? state.mfaConfiguration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["passwordPolicy"] = state ? state.passwordPolicy : undefined;
            inputs["schemas"] = state ? state.schemas : undefined;
            inputs["smsAuthenticationMessage"] = state ? state.smsAuthenticationMessage : undefined;
            inputs["smsConfiguration"] = state ? state.smsConfiguration : undefined;
            inputs["smsVerificationMessage"] = state ? state.smsVerificationMessage : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["userPoolAddOns"] = state ? state.userPoolAddOns : undefined;
            inputs["usernameAttributes"] = state ? state.usernameAttributes : undefined;
            inputs["verificationMessageTemplate"] = state ? state.verificationMessageTemplate : undefined;
        } else {
            const args = argsOrState as UserPoolArgs | undefined;
            inputs["adminCreateUserConfig"] = args ? args.adminCreateUserConfig : undefined;
            inputs["aliasAttributes"] = args ? args.aliasAttributes : undefined;
            inputs["autoVerifiedAttributes"] = args ? args.autoVerifiedAttributes : undefined;
            inputs["deviceConfiguration"] = args ? args.deviceConfiguration : undefined;
            inputs["emailConfiguration"] = args ? args.emailConfiguration : undefined;
            inputs["emailVerificationMessage"] = args ? args.emailVerificationMessage : undefined;
            inputs["emailVerificationSubject"] = args ? args.emailVerificationSubject : undefined;
            inputs["lambdaConfig"] = args ? args.lambdaConfig : undefined;
            inputs["mfaConfiguration"] = args ? args.mfaConfiguration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["passwordPolicy"] = args ? args.passwordPolicy : undefined;
            inputs["schemas"] = args ? args.schemas : undefined;
            inputs["smsAuthenticationMessage"] = args ? args.smsAuthenticationMessage : undefined;
            inputs["smsConfiguration"] = args ? args.smsConfiguration : undefined;
            inputs["smsVerificationMessage"] = args ? args.smsVerificationMessage : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["userPoolAddOns"] = args ? args.userPoolAddOns : undefined;
            inputs["usernameAttributes"] = args ? args.usernameAttributes : undefined;
            inputs["verificationMessageTemplate"] = args ? args.verificationMessageTemplate : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["creationDate"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["lastModifiedDate"] = undefined /*out*/;
        }
        super("aws:cognito/userPool:UserPool", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UserPool resources.
 */
export interface UserPoolState {
    /**
     * The configuration for AdminCreateUser requests.
     */
    readonly adminCreateUserConfig?: { allowAdminCreateUserOnly?: boolean, inviteMessageTemplate?: { emailMessage?: string, emailSubject?: string, smsMessage?: string }, unusedAccountValidityDays?: number };
    /**
     * Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username. Conflicts with `username_attributes`.
     */
    readonly aliasAttributes?: string[];
    /**
     * The ARN of the user pool.
     */
    readonly arn?: string;
    /**
     * The attributes to be auto-verified. Possible values: email, phone_number.
     */
    readonly autoVerifiedAttributes?: string[];
    /**
     * The date the user pool was created.
     */
    readonly creationDate?: string;
    /**
     * The configuration for the user pool's device tracking.
     */
    readonly deviceConfiguration?: { challengeRequiredOnNewDevice?: boolean, deviceOnlyRememberedOnUserPrompt?: boolean };
    /**
     * The Email Configuration.
     */
    readonly emailConfiguration?: { replyToEmailAddress?: string, sourceArn?: string };
    /**
     * A string representing the email verification message. Must contain the `{####}` placeholder. **NOTE:** - If `email_verification_message` and `verification_message_template.email_message` are specified and the values are different, either one is prioritized and updated.
     */
    readonly emailVerificationMessage?: string;
    /**
     * A string representing the email verification subject. **NOTE:** - If `email_verification_subject` and `verification_message_template.email_subject` are specified and the values are different, either one is prioritized and updated.
     */
    readonly emailVerificationSubject?: string;
    /**
     * The endpoint name of the user pool. Example format: cognito-idp.REGION.amazonaws.com/xxxx_yyyyy
     */
    readonly endpoint?: string;
    /**
     * A container for the AWS Lambda triggers associated with the user pool.
     */
    readonly lambdaConfig?: { createAuthChallenge?: string, customMessage?: string, defineAuthChallenge?: string, postAuthentication?: string, postConfirmation?: string, preAuthentication?: string, preSignUp?: string, preTokenGeneration?: string, userMigration?: string, verifyAuthChallengeResponse?: string };
    /**
     * The date the user pool was last modified.
     */
    readonly lastModifiedDate?: string;
    /**
     * Set to enable multi-factor authentication. Must be one of the following values (ON, OFF, OPTIONAL)
     */
    readonly mfaConfiguration?: string;
    /**
     * The name of the attribute.
     */
    readonly name?: string;
    /**
     * A container for information about the user pool password policy.
     */
    readonly passwordPolicy?: { minimumLength?: number, requireLowercase?: boolean, requireNumbers?: boolean, requireSymbols?: boolean, requireUppercase?: boolean };
    /**
     * A container with the schema attributes of a user pool. Maximum of 50 attributes.
     */
    readonly schemas?: { attributeDataType: string, developerOnlyAttribute?: boolean, mutable?: boolean, name: string, numberAttributeConstraints?: { maxValue?: string, minValue?: string }, required?: boolean, stringAttributeConstraints?: { maxLength?: string, minLength?: string } }[];
    /**
     * A string representing the SMS authentication message.
     */
    readonly smsAuthenticationMessage?: string;
    /**
     * The SMS Configuration.
     */
    readonly smsConfiguration?: { externalId: string, snsCallerArn: string };
    /**
     * A string representing the SMS verification message.
     */
    readonly smsVerificationMessage?: string;
    /**
     * A mapping of tags to assign to the User Pool.
     */
    readonly tags?: {[key: string]: any};
    /**
     * Configuration block for user pool add-ons to enable user pool advanced security mode features.
     */
    readonly userPoolAddOns?: { advancedSecurityMode: string };
    /**
     * Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
     */
    readonly usernameAttributes?: string[];
    /**
     * The verification message templates configuration.
     */
    readonly verificationMessageTemplate?: { defaultEmailOption?: string, emailMessage?: string, emailMessageByLink?: string, emailSubject?: string, emailSubjectByLink?: string, smsMessage?: string };
}

/**
 * The set of arguments for constructing a UserPool resource.
 */
export interface UserPoolArgs {
    /**
     * The configuration for AdminCreateUser requests.
     */
    readonly adminCreateUserConfig?: { allowAdminCreateUserOnly?: boolean, inviteMessageTemplate?: { emailMessage?: string, emailSubject?: string, smsMessage?: string }, unusedAccountValidityDays?: number };
    /**
     * Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username. Conflicts with `username_attributes`.
     */
    readonly aliasAttributes?: string[];
    /**
     * The attributes to be auto-verified. Possible values: email, phone_number.
     */
    readonly autoVerifiedAttributes?: string[];
    /**
     * The configuration for the user pool's device tracking.
     */
    readonly deviceConfiguration?: { challengeRequiredOnNewDevice?: boolean, deviceOnlyRememberedOnUserPrompt?: boolean };
    /**
     * The Email Configuration.
     */
    readonly emailConfiguration?: { replyToEmailAddress?: string, sourceArn?: string };
    /**
     * A string representing the email verification message. Must contain the `{####}` placeholder. **NOTE:** - If `email_verification_message` and `verification_message_template.email_message` are specified and the values are different, either one is prioritized and updated.
     */
    readonly emailVerificationMessage?: string;
    /**
     * A string representing the email verification subject. **NOTE:** - If `email_verification_subject` and `verification_message_template.email_subject` are specified and the values are different, either one is prioritized and updated.
     */
    readonly emailVerificationSubject?: string;
    /**
     * A container for the AWS Lambda triggers associated with the user pool.
     */
    readonly lambdaConfig?: { createAuthChallenge?: string, customMessage?: string, defineAuthChallenge?: string, postAuthentication?: string, postConfirmation?: string, preAuthentication?: string, preSignUp?: string, preTokenGeneration?: string, userMigration?: string, verifyAuthChallengeResponse?: string };
    /**
     * Set to enable multi-factor authentication. Must be one of the following values (ON, OFF, OPTIONAL)
     */
    readonly mfaConfiguration?: string;
    /**
     * The name of the attribute.
     */
    readonly name?: string;
    /**
     * A container for information about the user pool password policy.
     */
    readonly passwordPolicy?: { minimumLength?: number, requireLowercase?: boolean, requireNumbers?: boolean, requireSymbols?: boolean, requireUppercase?: boolean };
    /**
     * A container with the schema attributes of a user pool. Maximum of 50 attributes.
     */
    readonly schemas?: { attributeDataType: string, developerOnlyAttribute?: boolean, mutable?: boolean, name: string, numberAttributeConstraints?: { maxValue?: string, minValue?: string }, required?: boolean, stringAttributeConstraints?: { maxLength?: string, minLength?: string } }[];
    /**
     * A string representing the SMS authentication message.
     */
    readonly smsAuthenticationMessage?: string;
    /**
     * The SMS Configuration.
     */
    readonly smsConfiguration?: { externalId: string, snsCallerArn: string };
    /**
     * A string representing the SMS verification message.
     */
    readonly smsVerificationMessage?: string;
    /**
     * A mapping of tags to assign to the User Pool.
     */
    readonly tags?: {[key: string]: any};
    /**
     * Configuration block for user pool add-ons to enable user pool advanced security mode features.
     */
    readonly userPoolAddOns?: { advancedSecurityMode: string };
    /**
     * Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
     */
    readonly usernameAttributes?: string[];
    /**
     * The verification message templates configuration.
     */
    readonly verificationMessageTemplate?: { defaultEmailOption?: string, emailMessage?: string, emailMessageByLink?: string, emailSubject?: string, emailSubjectByLink?: string, smsMessage?: string };
}
