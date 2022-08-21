import { Dropdown } from "@components/common/atoms/dropdown";
import React from "react";
import { BillingFAQs } from "src/data/billing-faqs";

const BillingFaq = () => {
    return (
        <div className="flex flex-col space-y-[32px]">
            {BillingFAQs.map((faq) => (
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
