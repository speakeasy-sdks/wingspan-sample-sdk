/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum SubscriptionUpdateRequestPackage {
    None = "None",
    Benefits = "Benefits",
    Essentials = "Essentials",
    Professional = "Professional",
    Corporate = "Corporate",
    LessThanNilGreaterThan = "<nil>",
}

export enum SubscriptionUpdateRequestPackageTier {
    Basic = "Basic",
    Premium = "Premium",
    LessThanNilGreaterThan = "<nil>",
}

export enum SubscriptionUpdateRequestTerm {
    Yearly = "Yearly",
    Monthly = "Monthly",
    LessThanNilGreaterThan = "<nil>",
}

export class SubscriptionUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "discountCode" })
    discountCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "package" })
    package?: SubscriptionUpdateRequestPackage;

    @SpeakeasyMetadata()
    @Expose({ name: "packageTier" })
    packageTier?: SubscriptionUpdateRequestPackageTier;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodId" })
    paymentMethodId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "planId" })
    planId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subscriptionGrantId" })
    subscriptionGrantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "term" })
    term?: SubscriptionUpdateRequestTerm;
}
