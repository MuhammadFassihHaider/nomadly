import { Divider } from "@components/common/atoms/divider";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthHeader } from "@components/common/templates/auth-template/auth-header";
import { AuthSidebar } from "@components/common/templates/auth-template/auth-sidebar";
import React, { PropsWithChildren } from "react";
import { AuthHeading } from "./auth-heading";
import { AuthHelp } from "./auth-help";
import { AuthSubheading } from "./auth-subheading";
import { AuthTOC } from "./auth-toc";

export type THeadingAndSubHeading = string | JSX.Element;

type AuthTemplateProps = PropsWithChildren<{
    heading: THeadingAndSubHeading;
    subHeading: THeadingAndSubHeading;
}>;

const AuthTemplate = ({ heading, subHeading, children }: AuthTemplateProps) => {
    return (
        <div className="flex">
            <div className="pt-[24px] pl-[75px] pr-[30px] pb-[46px] flex-1">
                <AuthHeader />
                <div className="mx-auto max-w-[470px] flex flex-col justify-center h-[calc(100%-66px)] relative">
                    <AuthHeading text={heading} className="mb-[13px]" />
                    <AuthSubheading text={subHeading} className="mb-[26px]" />
                    <div className="flex flex-col justify-center">
                        {children}
                    </div>
                    <div className="absolute bottom-0">
                        <AuthHelp className="mb-[31px]" />
                        <AuthTOC />
                    </div>
                </div>
            </div>
            <AuthSidebar />
        </div>
    );
};

export default AuthTemplate;
