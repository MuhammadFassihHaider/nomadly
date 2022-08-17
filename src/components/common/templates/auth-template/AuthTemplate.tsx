import { Divider } from "@components/common/atoms/divider";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthHeader } from "@components/common/organisms/auth-header";
import { AuthSidebar } from "@components/common/organisms/auth-sidebar";
import React, { PropsWithChildren } from "react";
import { classNames } from "src/utils/helper";
import { AuthHeading } from "../../atoms/auth-heading";
import { AuthHelp } from "../../atoms/auth-help";
import { AuthSubheading } from "../../atoms/auth-subheading";
import { AuthTOC } from "../../atoms/auth-toc";
import { PagePaddingsTemplate } from "../page-paddings-template";

export type THeadingAndSubHeading = string | JSX.Element;

type AuthTemplateProps = PropsWithChildren<{
    heading: THeadingAndSubHeading;
    subHeading: THeadingAndSubHeading;
    hasSidebar?: boolean;
}>;

const AuthTemplate = ({
    heading,
    subHeading,
    hasSidebar = true,
    children,
}: AuthTemplateProps) => {
    return (
        <div className="flex">
            <PagePaddingsTemplate>
                <AuthHeader />
                <div
                    className={classNames(
                        "mx-auto flex flex-col justify-center h-[100%] relative max-w-[470px]",
                    )}
                >
                    <AuthHeading text={heading} className="mb-[13px]" />
                    <AuthSubheading text={subHeading} className="mb-[26px]" />
                    <div className="flex flex-col justify-center">
                        {children}
                    </div>
                    <div>
                        <AuthHelp className="mb-[31px]" />
                        <AuthTOC />
                    </div>
                </div>
            </PagePaddingsTemplate>
            {hasSidebar && <AuthSidebar />}
        </div>
    );
};

export default AuthTemplate;
