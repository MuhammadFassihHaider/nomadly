import { AuthHeading } from "@components/common/atoms/auth-heading";
import { AuthLogo } from "@components/common/atoms/auth-logo";
import { AuthSubheading } from "@components/common/atoms/auth-subheading";
import { AuthSteps } from "@components/common/molecules/auth-steps";
import { PagePaddingsTemplate } from "@components/common/templates/page-paddings-template";
import { AboutBusinessForm } from "@components/pages/about-business/about-business-form";

const Aboutbusiness = () => {
    return (
        <PagePaddingsTemplate>
            <main className="max-w-[470px] mx-auto">
                <AuthLogo isCenter className="mb-[47px]" />
                <AuthSteps step={2} containerClassName="mb-[41px]" />
                <AuthHeading
                    text={"Tell us about your business"}
                    className="mb-[13px]"
                />
                <AuthSubheading
                    text={"You will be up and running in no time"}
                    className="mb-[75px]"
                />
                <AboutBusinessForm />
            </main>
        </PagePaddingsTemplate>
    );
};

export default Aboutbusiness;
