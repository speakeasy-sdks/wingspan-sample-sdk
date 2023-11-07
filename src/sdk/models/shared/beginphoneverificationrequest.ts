/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum Channel {
    PhoneCall = "PhoneCall",
    Sms = "SMS",
    LessThanNilGreaterThan = "<nil>",
}

export class BeginPhoneVerificationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "channel" })
    channel?: Channel;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone: string;
}
