/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BeginExistingEmailVerificationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "redirectPath" })
    redirectPath?: string;
}
