/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { CompanyWrite } from "./companywrite";
import { MemberProfileVisibilityMap } from "./memberprofilevisibilitymap";
import { MemberTaxInfo } from "./membertaxinfo";
import { MemberWithholdings } from "./memberwithholdings";
import { Expose, Type } from "class-transformer";

export enum MemberProfileWriteBookkeepingProductsUsed {
    AccountingSoftware = "AccountingSoftware",
    Cpa = "CPA",
    PenAndPaper = "PenAndPaper",
    Spreadsheet = "Spreadsheet",
    Other = "Other",
}

export enum MemberProfileWriteFreelanceDuration {
    LessThanOne = "LessThanOne",
    OneToThree = "OneToThree",
    ThreeToFive = "ThreeToFive",
    OverFive = "OverFive",
}

export enum MemberProfileWriteFreelanceType {
    Team = "Team",
    FullTime = "FullTime",
    PartTime = "PartTime",
    NotFreelancing = "NotFreelancing",
}

export enum MemberProfileWriteIndustry {
    AdultEntertainmentDatingOrEscortServices = "AdultEntertainmentDatingOrEscortServices",
    AgricultureForestryFishingOrHunting = "AgricultureForestryFishingOrHunting",
    ArtsEntertainmentAndRecreation = "ArtsEntertainmentAndRecreation",
    BusinessSupportOrBuildingServices = "BusinessSupportOrBuildingServices",
    Cannabis = "Cannabis",
    Construction = "Construction",
    DirectMarketingOrTelemarketing = "DirectMarketingOrTelemarketing",
    EducationalServices = "EducationalServices",
    FinancialServices = "FinancialServices",
    GamingOrGambling = "GamingOrGambling",
    HealthCareAndSocialAssistance = "HealthCareAndSocialAssistance",
    HospitalityAccommodationOrFoodServices = "HospitalityAccommodationOrFoodServices",
    LegalAccountingConsultingOrComputerProgramming = "LegalAccountingConsultingOrComputerProgramming",
    Manufacturing = "Manufacturing",
    Mining = "Mining",
    Nutraceuticals = "Nutraceuticals",
    PersonalCareServices = "PersonalCareServices",
    PublicAdministration = "PublicAdministration",
    RealEstate = "RealEstate",
    ReligiousCivicAndSocialOrganizations = "ReligiousCivicAndSocialOrganizations",
    RepairAndMaintenance = "RepairAndMaintenance",
    RetailTrade = "RetailTrade",
    TechnologyMediaOrTelecom = "TechnologyMediaOrTelecom",
    TransportationOrWarehousing = "TransportationOrWarehousing",
    Utilities = "Utilities",
    WholesaleTrade = "WholesaleTrade",
}

export enum MemberProfileWriteInterests {
    Incorporating = "Incorporating",
    Marketing = "Marketing",
    FindingWork = "FindingWork",
    Documents = "Documents",
    Invoicing = "Invoicing",
    Bookkeeping = "Bookkeeping",
    TaxSaving = "TaxSaving",
    Benefits = "Benefits",
    Community = "Community",
}

export enum MemberProfileWriteProductAspectImportance {
    Invoicing = "Invoicing",
    PaymentSpeed = "PaymentSpeed",
    ClientManagement = "ClientManagement",
    TrackIncomeStreams = "TrackIncomeStreams",
    ExpenseTracking = "ExpenseTracking",
    TaxDeductions = "TaxDeductions",
    TaxFiling = "TaxFiling",
    HealthInsurance = "HealthInsurance",
    SavingMoneyOnMedicine = "SavingMoneyOnMedicine",
    LegalAndFinancialSupport = "LegalAndFinancialSupport",
    MindAndBodySupport = "MindAndBodySupport",
}

export enum MemberProfileWriteProductImportance {
    Payments = "Payments",
    Bookkeeping = "Bookkeeping",
    Benefits = "Benefits",
}

export class MemberProfileWrite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "bookkeepingProductsUsed" })
    bookkeepingProductsUsed?: MemberProfileWriteBookkeepingProductsUsed[];

    @SpeakeasyMetadata()
    @Expose({ name: "bookkeepingProductsUsedOther" })
    bookkeepingProductsUsedOther?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    @Type(() => CompanyWrite)
    company?: CompanyWrite;

    @SpeakeasyMetadata()
    @Expose({ name: "foreignTaxCountry" })
    foreignTaxCountry?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "foreignTaxId" })
    foreignTaxId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "freelanceDuration" })
    freelanceDuration?: MemberProfileWriteFreelanceDuration;

    @SpeakeasyMetadata()
    @Expose({ name: "freelanceType" })
    freelanceType?: MemberProfileWriteFreelanceType;

    @SpeakeasyMetadata()
    @Expose({ name: "homeAddress" })
    @Type(() => Address)
    homeAddress?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "industry" })
    industry?: MemberProfileWriteIndustry;

    @SpeakeasyMetadata()
    @Expose({ name: "interests" })
    interests?: MemberProfileWriteInterests[];

    @SpeakeasyMetadata()
    @Expose({ name: "logoFileId" })
    logoFileId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mcc" })
    mcc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nationality" })
    nationality?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passportNumber" })
    passportNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "passportNumberProvided" })
    passportNumberProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "productAspectImportance" })
    productAspectImportance?: MemberProfileWriteProductAspectImportance[];

    @SpeakeasyMetadata()
    @Expose({ name: "productImportance" })
    productImportance?: MemberProfileWriteProductImportance[];

    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssnLastFour" })
    ssnLastFour?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssnLastFourProvided" })
    ssnLastFourProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "ssnProvided" })
    ssnProvided?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "taxInfo" })
    @Type(() => MemberTaxInfo)
    taxInfo?: MemberTaxInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationDocumentBack" })
    verificationDocumentBack?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationDocumentFront" })
    verificationDocumentFront?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "visibilityMap" })
    @Type(() => MemberProfileVisibilityMap)
    visibilityMap?: MemberProfileVisibilityMap;

    @SpeakeasyMetadata()
    @Expose({ name: "withholdings" })
    @Type(() => MemberWithholdings)
    withholdings?: MemberWithholdings;
}
