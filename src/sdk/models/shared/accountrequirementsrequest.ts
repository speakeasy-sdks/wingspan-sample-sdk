/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountRequirementsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;
}
