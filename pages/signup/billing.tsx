import { AuthHeading } from "@components/common/atoms/auth-heading";
import { AuthLogo } from "@components/common/atoms/auth-logo";
import { AuthSubheading } from "@components/common/atoms/auth-subheading";
import { Dropdown } from "@components/common/atoms/dropdown";
import { Radio } from "@components/common/atoms/radio";
import { AuthSteps } from "@components/common/molecules/auth-steps";
import { PagePaddingsTemplate } from "@components/common/templates/page-paddings-template";
import { BillingAlreadyUser } from "@components/pages/billing/billing-already-user";
import { BillingFaqs } from "@components/pages/billing/billing-faqs";
import { BillingForm } from "@components/pages/billing/billing-form";
import { BillingTerms } from "@components/pages/billing/billing-terms";

const Billing = () => {
    return (
        <PagePaddingsTemplate>
            <main className="flex space-x-[94px] justify-center">
                <section className="flex flex-col">
                    <AuthLogo isCenter className="mb-[47px]" />
                    <AuthSteps step={1} containerClassName="mb-[41px]" />
                    <AuthHeading
                        text={"Start Your 14 Day Free Trial"}
                        className="mb-[13px]"
                    />
                    <AuthSubheading
                        text={"Have your landing pages online in minutes."}
                        className="mb-[75px]"
                    />
                    <BillingForm />
                    <BillingTerms />
                    <BillingAlreadyUser />
                </section>
                <BillingFaqs />
            </main>
        </PagePaddingsTemplate>
    );
};

export default Billing;
