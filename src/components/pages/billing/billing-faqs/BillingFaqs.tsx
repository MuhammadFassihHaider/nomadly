import { BillingFaq } from "./billing-faq";

const BillingFaqs = () => {
    return (
        <aside className="rounded-[60px] bg-white shadow-xl h-full w-[520px] px-[28px] py-[66px] border border-mGray-0">
            <h3 className="font-semibold text-[25px] leading-[32px] text-mBlack-0 mb-[33px]">
                Frequently asked questions
            </h3>
            <BillingFaq />
        </aside>
    );
};

export default BillingFaqs;
