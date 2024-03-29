/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AgreeToClientTermsToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
}

export enum FindFirstDeductibleExpenseToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
}

export enum KnowingCompanyStructureToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
}

export enum WatchTourVideoToDoStatus {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Completed = "Completed",
}

export class ActivityEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "agreeToClientTermsToDoStatus" })
    agreeToClientTermsToDoStatus?: AgreeToClientTermsToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "benefitsOnlySignup" })
    benefitsOnlySignup?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "calendlyWidgedOpened" })
    calendlyWidgedOpened?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "debitCardTCAcceptedAt" })
    debitCardTCAcceptedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eftpsEnrolledAt" })
    eftpsEnrolledAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "electronic1099Consent" })
    electronic1099Consent?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "expensesReviewedAt" })
    expensesReviewedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "findFirstDeductibleExpenseToDoStatus" })
    findFirstDeductibleExpenseToDoStatus?: FindFirstDeductibleExpenseToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "incomeReviewedAt" })
    incomeReviewedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalWaitListed" })
    internationalWaitListed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "knowingCompanyStructureToDoStatus" })
    knowingCompanyStructureToDoStatus?: KnowingCompanyStructureToDoStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentsInfoBannerClosed" })
    paymentsInfoBannerClosed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentsTestInvoiceBannerClosed" })
    paymentsTestInvoiceBannerClosed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "w8BenFormAcknowledged" })
    w8BenFormAcknowledged?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "w9FormAcknowledged" })
    w9FormAcknowledged?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "walletIncomePercent" })
    walletIncomePercent?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "watchTourVideoToDoStatus" })
    watchTourVideoToDoStatus?: WatchTourVideoToDoStatus;
}
