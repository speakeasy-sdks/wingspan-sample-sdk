/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationInheritanceStrategy } from "./organizationinheritancestrategy";
import { Expose, Type } from "class-transformer";

export class OrganizationUserAssociation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "inheritanceStrategy" })
    @Type(() => OrganizationInheritanceStrategy)
    inheritanceStrategy?: OrganizationInheritanceStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "parentUserId" })
    parentUserId?: string;
}
