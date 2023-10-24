/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailVerificationState } from "./emailverificationstate";
import { NewUserSettings } from "./newusersettings";
import { OrganizationAccount } from "./organizationaccount";
import { Phone } from "./phone";
import { UserNotificationSettings } from "./usernotificationsettings";
import { UserProfile } from "./userprofile";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum NewUserStatus {
    Pending = "Pending",
    Active = "Active",
    Disabled = "Disabled",
}

export class NewUser extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailVerificationState" })
    @Type(() => EmailVerificationState)
    emailVerificationState?: EmailVerificationState;

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "intercomUserHash" })
    intercomUserHash: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isPasswordSet" })
    isPasswordSet?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationSettings" })
    @Type(() => UserNotificationSettings)
    notificationSettings: UserNotificationSettings;

    @SpeakeasyMetadata()
    @Expose({ name: "organizationAssociation" })
    @Type(() => OrganizationAccount)
    organizationAssociation?: OrganizationAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    @Type(() => Phone)
    phone: Phone;

    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => UserProfile)
    profile: UserProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "settings" })
    @Type(() => NewUserSettings)
    settings?: NewUserSettings;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: NewUserStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
