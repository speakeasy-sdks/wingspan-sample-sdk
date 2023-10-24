/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SessionResponse } from "./sessionresponse";
import { Expose, Type } from "class-transformer";

export enum PhoneVerificationResponseStatus {
    Pending = "Pending",
    Verified = "Verified",
}

export class PhoneVerificationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "session" })
    @Type(() => SessionResponse)
    session: SessionResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PhoneVerificationResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}