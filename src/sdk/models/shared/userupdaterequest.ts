/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserNotificationSettings } from "./usernotificationsettings";
import { UserProfile } from "./userprofile";
import { Expose, Type } from "class-transformer";

export class UserUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationSettings" })
    @Type(() => UserNotificationSettings)
    notificationSettings?: UserNotificationSettings;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => UserProfile)
    profile?: UserProfile;

    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;
}