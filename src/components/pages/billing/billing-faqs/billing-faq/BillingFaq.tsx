import { Dropdown } from "@components/common/atoms/dropdown";
import React from "react";
import { BILLING_FAQS } from "src/data/pages/billing-faqs";

const BillingFaq = () => {
    return (
        <div className="flex flex-col space-y-[32px]">
            {BILLING_FAQS.map((faq) => (
                <Dropdown
                    items={[]}
                    key={faq}
                    placeholder={faq}
                    buttonClassName="bg-mGray-6"
                />
            ))}
        </div>
    );
};

export default BillingFaq;
