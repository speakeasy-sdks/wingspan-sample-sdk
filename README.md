# Wingspan-Users-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/wingspan-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/wingspan-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/wingspan-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/wingspan-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { WingspanUsersAPI } from "Wingspan-Users-API";

(async () => {
    const sdk = new WingspanUsersAPI();

    const res = await sdk.wingspanUsersAPI.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [WingspanUsersAPI SDK](docs/sdks/wingspanusersapi/README.md)

* [deleteUsersAccountId](docs/sdks/wingspanusersapi/README.md#deleteusersaccountid) - Unlink Bank Account
* [deleteUsersActivityId](docs/sdks/wingspanusersapi/README.md#deleteusersactivityid) - Remove Specific Activity Record for a Member
* [deleteUsersAuthorizationAuthorizationId](docs/sdks/wingspanusersapi/README.md#deleteusersauthorizationauthorizationid) - Revoke and Remove Authorization Record
* [deleteUsersSessionApiId](docs/sdks/wingspanusersapi/README.md#deleteuserssessionapiid) - Terminate a Specific API Session
* [deleteUsersSessionTokenId](docs/sdks/wingspanusersapi/README.md#deleteuserssessiontokenid) - Terminate a user session using token ID
* [deleteUsersSubscriptionGrantId](docs/sdks/wingspanusersapi/README.md#deleteuserssubscriptiongrantid) - Terminate a specific subscription grant by ID
* [deleteUsersUserMemberSubscriptionId](docs/sdks/wingspanusersapi/README.md#deleteusersusermembersubscriptionid) - DEPRECATEDdeleteSubscription
* [deleteUsersUserMemberIdSubscription](docs/sdks/wingspanusersapi/README.md#deleteusersusermemberidsubscription) - Remove Subscription for Member
* [deleteUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/wingspanusersapi/README.md#deleteusersusermembermemberidnextgensubscriptionid) - Revoke a Nextgen Subscription for Member
* [getUsers](docs/sdks/wingspanusersapi/README.md#getusers) - Health Check for User Service
* [getUsersAccount](docs/sdks/wingspanusersapi/README.md#getusersaccount) - Retrieve All Linked Bank Accounts
* [getUsersAccountId](docs/sdks/wingspanusersapi/README.md#getusersaccountid) - Fetch Specific Bank Account Details
* [getUsersActivity](docs/sdks/wingspanusersapi/README.md#getusersactivity) - Retrieve All Activities of a Member
* [getUsersActivityId](docs/sdks/wingspanusersapi/README.md#getusersactivityid) - Retrieve Specific Activity Details for a Member
* [getUsersAuthorization](docs/sdks/wingspanusersapi/README.md#getusersauthorization) - Retrieve All User Authorizations
* [getUsersAuthorizationAccountsUserId](docs/sdks/wingspanusersapi/README.md#getusersauthorizationaccountsuserid) - Retrieve Accounts Authorized by User
* [getUsersAuthorizationAuthorizationId](docs/sdks/wingspanusersapi/README.md#getusersauthorizationauthorizationid) - Retrieve Authorization Details by ID
* [getUsersAuthorizedScopeGroups](docs/sdks/wingspanusersapi/README.md#getusersauthorizedscopegroups) - Obtain all authorized scope-groups
* [getUsersAuthorizedScopeGroupsRequestingUserId](docs/sdks/wingspanusersapi/README.md#getusersauthorizedscopegroupsrequestinguserid) - Retrieve authorized scope-groups specific to a user
* [getUsersAuthorizedScopes](docs/sdks/wingspanusersapi/README.md#getusersauthorizedscopes) - Retrieve all authorized scopes
* [getUsersAuthorizedScopesRequestingUserId](docs/sdks/wingspanusersapi/README.md#getusersauthorizedscopesrequestinguserid) - Obtain authorized scopes specific to a user
* [getUsersGrantedSubscriberSubscriptionGrant](docs/sdks/wingspanusersapi/README.md#getusersgrantedsubscribersubscriptiongrant) - Retrieve Subscription Grants for a Granted Subscriber
* [getUsersOrganizationUser](docs/sdks/wingspanusersapi/README.md#getusersorganizationuser) - Retrieve All Organization User Accounts
* [getUsersOrganizationUserUserId](docs/sdks/wingspanusersapi/README.md#getusersorganizationuseruserid) - Retrieve Organization User Profile
* [getUsersOrganizationUserUserIdSession](docs/sdks/wingspanusersapi/README.md#getusersorganizationuseruseridsession) - Initiate Session for Organization User
* [getUsersSessionApi](docs/sdks/wingspanusersapi/README.md#getuserssessionapi) - Retrieve All API Sessions Created by the Current User
* [getUsersSessionApiId](docs/sdks/wingspanusersapi/README.md#getuserssessionapiid) - Fetch Details of a Specific API Session
* [getUsersSessionTokenId](docs/sdks/wingspanusersapi/README.md#getuserssessiontokenid) - Retrieve session details using token ID
* [getUsersSubscriptionGrant](docs/sdks/wingspanusersapi/README.md#getuserssubscriptiongrant) - Fetch All Subscription Grants
* [getUsersSubscriptionGrantId](docs/sdks/wingspanusersapi/README.md#getuserssubscriptiongrantid) - Retrieve subscription grant details by ID
* [getUsersUserClientId](docs/sdks/wingspanusersapi/README.md#getusersuserclientid) - Retrieve Client Details by ID
* [getUsersUserEmailEmail](docs/sdks/wingspanusersapi/README.md#getusersuseremailemail) - Retrieve User by Email Address
* [getUsersUserLocation](docs/sdks/wingspanusersapi/README.md#getusersuserlocation) - Retrieve User's Location
* [getUsersUserMemberSubscriptionPaymentHistory](docs/sdks/wingspanusersapi/README.md#getusersusermembersubscriptionpaymenthistory) - Retrieve payment history for membership
* [getUsersUserMemberSubscriptionPaymentMethod](docs/sdks/wingspanusersapi/README.md#getusersusermembersubscriptionpaymentmethod) - DEPRECATED Get Payment Method
* [getUsersUserMemberSubscriptionPlan](docs/sdks/wingspanusersapi/README.md#getusersusermembersubscriptionplan) - DEPRECATEDlist membership plans
* [getUsersUserMemberSubscriptionPlanId](docs/sdks/wingspanusersapi/README.md#getusersusermembersubscriptionplanid) - DEPRECATEDget membership plan
* [getUsersUserMemberSubscriptionId](docs/sdks/wingspanusersapi/README.md#getusersusermembersubscriptionid) - DEPRECATEDgetSubscription
* [getUsersUserMemberId](docs/sdks/wingspanusersapi/README.md#getusersusermemberid) - Retrieve Subscription Details by ID
* [getUsersUserMemberIdAdvocate](docs/sdks/wingspanusersapi/README.md#getusersusermemberidadvocate) - Retrieve Advocate Information for the Specified Member
* [getUsersUserMemberIdSubscription](docs/sdks/wingspanusersapi/README.md#getusersusermemberidsubscription) - Retrieve Subscription Details by ID
* [getUsersUserMemberMemberIdNextgenSubscription](docs/sdks/wingspanusersapi/README.md#getusersusermembermemberidnextgensubscription) - Fetch All Nextgen Subscriptions for Member
* [getUsersUserMemberMemberIdNextgenSubscriptionPlan](docs/sdks/wingspanusersapi/README.md#getusersusermembermemberidnextgensubscriptionplan) - Browse Available Nextgen Subscription Plans
* [getUsersUserMemberMemberIdNextgenSubscriptionPlanId](docs/sdks/wingspanusersapi/README.md#getusersusermembermemberidnextgensubscriptionplanid) - Retrieve Specific Nextgen Subscription Plan
* [getUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/wingspanusersapi/README.md#getusersusermembermemberidnextgensubscriptionid) - Retrieve Details of a Specific Nextgen Subscription
* [getUsersUserOccupation](docs/sdks/wingspanusersapi/README.md#getusersuseroccupation) - Retrieve User's Occupation Details
* [getUsersUserPublicId](docs/sdks/wingspanusersapi/README.md#getusersuserpublicid) - Retrieve Public User Profile by ID
* [getUsersUserTagId](docs/sdks/wingspanusersapi/README.md#getusersusertagid) - Retrieve User by Tag ID
* [getUsersUserId](docs/sdks/wingspanusersapi/README.md#getusersuserid) - Fetch user profile details using user ID
* [patchUsersAccountId](docs/sdks/wingspanusersapi/README.md#patchusersaccountid) - Modify Bank Account Details
* [patchUsersActivityId](docs/sdks/wingspanusersapi/README.md#patchusersactivityid) - Modify Specific Activity Details for a Member
* [patchUsersAuthorizationAuthorizationId](docs/sdks/wingspanusersapi/README.md#patchusersauthorizationauthorizationid) - Modify Existing Authorization Details
* [patchUsersOrganizationUserUserId](docs/sdks/wingspanusersapi/README.md#patchusersorganizationuseruserid) - Modify Organization User Profile
* [patchUsersOrganizationUserUserIdAssociate](docs/sdks/wingspanusersapi/README.md#patchusersorganizationuseruseridassociate) - Modify the Association of Child User to Parent Organization
* [patchUsersSessionApiId](docs/sdks/wingspanusersapi/README.md#patchuserssessionapiid) - Modify a Specific API Session
* [patchUsersSessionOtp](docs/sdks/wingspanusersapi/README.md#patchuserssessionotp) - Confirm OTP/2FA Verification
* [patchUsersSubscriptionGrantId](docs/sdks/wingspanusersapi/README.md#patchuserssubscriptiongrantid) - Modify subscription grant details
* [patchUsersUserClientId](docs/sdks/wingspanusersapi/README.md#patchusersuserclientid) - Modify Existing Client Details by ID
* [patchUsersUserMemberSubscriptionPaymentMethod](docs/sdks/wingspanusersapi/README.md#patchusersusermembersubscriptionpaymentmethod) - DEPRECATED Update Payment Method
* [patchUsersUserMemberSubscriptionId](docs/sdks/wingspanusersapi/README.md#patchusersusermembersubscriptionid) - DEPRECATEDupdateSubscription
* [patchUsersUserMemberId](docs/sdks/wingspanusersapi/README.md#patchusersusermemberid) - Modify Subscription Details for Member
* [patchUsersUserMemberIdSubscription](docs/sdks/wingspanusersapi/README.md#patchusersusermemberidsubscription) - Modify Subscription Details for Member
* [patchUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/wingspanusersapi/README.md#patchusersusermembermemberidnextgensubscriptionid) - Modify an Existing Nextgen Subscription for Member
* [patchUsersUserId](docs/sdks/wingspanusersapi/README.md#patchusersuserid) - Modify user account details using user ID
* [patchUsersUserIdVerificationEmail](docs/sdks/wingspanusersapi/README.md#patchusersuseridverificationemail) - Confirm Email Verification Status
* [patchUsersUserIdVerificationPhone](docs/sdks/wingspanusersapi/README.md#patchusersuseridverificationphone) - Validate Phone Verification Status
* [postUsersAccount](docs/sdks/wingspanusersapi/README.md#postusersaccount) - Add New Bank Account
* [postUsersAccountLink](docs/sdks/wingspanusersapi/README.md#postusersaccountlink) - Generate Plaid Link Token for Account Integration
* [postUsersAccountRequirements](docs/sdks/wingspanusersapi/README.md#postusersaccountrequirements) - Fetch Necessary Account Details
* [postUsersActivity](docs/sdks/wingspanusersapi/README.md#postusersactivity) - Log New Activity for Member
* [postUsersAuthentication](docs/sdks/wingspanusersapi/README.md#postusersauthentication) - Authenticate User Request
* [postUsersAuthorization](docs/sdks/wingspanusersapi/README.md#postusersauthorization) - Request User Authorization
* [postUsersFlatfileAuthToken](docs/sdks/wingspanusersapi/README.md#postusersflatfileauthtoken) - Retrieve Authentication Token for Flatfile
* [postUsersGuestAccountNumbers](docs/sdks/wingspanusersapi/README.md#postusersguestaccountnumbers) - Retrieve Account Numbers for Guests
* [postUsersOrganizationUser](docs/sdks/wingspanusersapi/README.md#postusersorganizationuser) - Register New User within Organization
* [postUsersOrganizationUserUserIdAssociate](docs/sdks/wingspanusersapi/README.md#postusersorganizationuseruseridassociate) - Link a Child User to a Parent Organization Account
* [postUsersPendingSession](docs/sdks/wingspanusersapi/README.md#postuserspendingsession) - Initiate a new session with pending status
* [postUsersPendingUser](docs/sdks/wingspanusersapi/README.md#postuserspendinguser) - Register a new user with pending status
* [postUsersSession](docs/sdks/wingspanusersapi/README.md#postuserssession) - Initiate a New User Session
* [postUsersSessionApi](docs/sdks/wingspanusersapi/README.md#postuserssessionapi) - Create a New API Session
* [postUsersSessionOtp](docs/sdks/wingspanusersapi/README.md#postuserssessionotp) - Initiate OTP/2FA Verification Process
* [postUsersSessionRequestingUser](docs/sdks/wingspanusersapi/README.md#postuserssessionrequestinguser) - Request to Sign-In on Behalf of Another User
* [postUsersSessionSingleSignOn](docs/sdks/wingspanusersapi/README.md#postuserssessionsinglesignon) - Create a Single Sign-On (SSO) Session
* [postUsersSessionSocialAuthGoogle](docs/sdks/wingspanusersapi/README.md#postuserssessionsocialauthgoogle) - Authenticate using Google
* [postUsersSubscriptionGrant](docs/sdks/wingspanusersapi/README.md#postuserssubscriptiongrant) - New Subscription Grant
* [postUsersUser](docs/sdks/wingspanusersapi/README.md#postusersuser) - Register a new user
* [postUsersUserClientId](docs/sdks/wingspanusersapi/README.md#postusersuserclientid) - Register a New Client with Specific ID
* [postUsersUserMemberSubscriptionPaymentMethod](docs/sdks/wingspanusersapi/README.md#postusersusermembersubscriptionpaymentmethod) - DEPRECATED create Payment Method
* [postUsersUserMemberId](docs/sdks/wingspanusersapi/README.md#postusersusermemberid) - Register a New Subscription for Member
* [postUsersUserMemberIdSubscription](docs/sdks/wingspanusersapi/README.md#postusersusermemberidsubscription) - Register a New Subscription for Member
* [postUsersUserMemberMemberIdNextgenSubscription](docs/sdks/wingspanusersapi/README.md#postusersusermembermemberidnextgensubscription) - Initiate a New Nextgen Subscription for a Member
* [postUsersUserPasswordReset](docs/sdks/wingspanusersapi/README.md#postusersuserpasswordreset) - Initiate User Password Reset Process
* [postUsersUserIdVerificationEmail](docs/sdks/wingspanusersapi/README.md#postusersuseridverificationemail) - Initiate Email Verification Process for User
* [postUsersUserIdVerificationExistingEmail](docs/sdks/wingspanusersapi/README.md#postusersuseridverificationexistingemail) - Initiate verification for an existing email address
* [postUsersUserIdVerificationPhone](docs/sdks/wingspanusersapi/README.md#postusersuseridverificationphone) - Start Phone Verification Process for User
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
