import { AuthFooter } from "@components/common/organisms/auth-footer";
import { AuthHeader } from "@components/common/organisms/auth-header";
import { AuthSidebar } from "@components/common/organisms/auth-sidebar";
import { PropsWithChildren } from "react";
import { classNames } from "src/utils/helper";
import { AuthHeading } from "../../atoms/auth-heading";
import { AuthSubheading } from "../../atoms/auth-subheading";
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
        <div className="flex h-full">
            <PagePaddingsTemplate top="small">
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
                    <AuthFooter />
                </div>
            </PagePaddingsTemplate>
            {hasSidebar && <AuthSidebar />}
        </div>
    );
};

export default AuthTemplate;
