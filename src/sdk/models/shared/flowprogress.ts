/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FlowProgress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "complete" })
    complete: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "currentStep" })
    currentStep: number;

    @SpeakeasyMetadata()
    @Expose({ name: "totalSteps" })
    totalSteps: number;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version: number;
}
