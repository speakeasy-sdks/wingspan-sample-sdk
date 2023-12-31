/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AuthorizationScopes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "Read" })
    read?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "Write" })
    write?: string[];
}
