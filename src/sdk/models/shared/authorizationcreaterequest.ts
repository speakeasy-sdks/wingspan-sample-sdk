/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ScopeModificationsMap } from "./scopemodificationsmap";
import { Expose, Type } from "class-transformer";

export enum AllowedAction {
    Read = "Read",
    Write = "Write",
}

export class AuthorizationCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allowedAction" })
    allowedAction?: AllowedAction;

    @SpeakeasyMetadata()
    @Expose({ name: "allowedScope" })
    allowedScope?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "allowedScopeGroupId" })
    allowedScopeGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "authorizationId" })
    authorizationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requestingUserId" })
    requestingUserId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scopeModifications" })
    @Type(() => ScopeModificationsMap)
    scopeModifications?: ScopeModificationsMap;
}
