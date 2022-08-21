import { AuthHeading } from "@components/common/atoms/auth-heading";
import { AuthLogo } from "@components/common/atoms/auth-logo";
import { AuthSubheading } from "@components/common/atoms/auth-subheading";
import AuthSteps, {
    TAuthStep,
} from "@components/common/molecules/auth-steps/AuthSteps";
import React, { PropsWithChildren } from "react";
import { PagePaddingsTemplate } from "../page-paddings-template";

type Props = {
    heading?: string;
    subheading?: string;
    step?: TAuthStep;
};

const AuthContentCenterTemplate = ({
    heading,
    step,
    subheading,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <PagePaddingsTemplate>
            <main className="max-w-[522px] mx-auto">
                <AuthLogo isCenter className="mb-[47px]" />
                {step !== undefined && (
                    <AuthSteps step={step} containerClassName="mb-[41px]" />
                )}
                {heading && (
                    <AuthHeading text={heading} className="mb-[13px]" />
                )}
                {subheading && (
                    <AuthSubheading
                        text={
                            "Help us customize your experience by telling us a bit about yourself and your goals."
                        }
                        className="mb-[75px]"
                    />
                )}
                {children}
            </main>
        </PagePaddingsTemplate>
    );
};

export default AuthContentCenterTemplate;
