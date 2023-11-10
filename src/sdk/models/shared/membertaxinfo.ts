/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MemberOccupation } from "./memberoccupation";
import { Expose, Type } from "class-transformer";

export enum FilingCode {
    S = "S",
    M = "M",
    H = "H",
    Ms = "MS",
    Qw = "QW",
    LessThanNilGreaterThan = "<nil>",
}

export enum FilingType {
    Personal = "Personal",
    Business = "Business",
    LessThanNilGreaterThan = "<nil>",
}

export class MemberTaxInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "expensesEstimateForYear" })
    expensesEstimateForYear?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "filingCode" })
    filingCode?: FilingCode;

    @SpeakeasyMetadata()
    @Expose({ name: "filingType" })
    filingType?: FilingType;

    @SpeakeasyMetadata()
    @Expose({ name: "incomeEstimateForYear" })
    incomeEstimateForYear?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "numExemptions" })
    numExemptions?: number;

    @SpeakeasyMetadata({ elemType: MemberOccupation })
    @Expose({ name: "occupations" })
    @Type(() => MemberOccupation)
    occupations?: MemberOccupation[];

    @SpeakeasyMetadata()
    @Expose({ name: "stateOfResidence" })
    stateOfResidence?: string;
}
