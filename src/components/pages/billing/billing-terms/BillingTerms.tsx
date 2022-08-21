import React from "react";

const BillingTerms = () => {
    return (
        <p className="text-center text-sm leading-6 text-mBlack-0 max-w-[424px] mb-[25px] mx-auto">
            By creating an account, you are agreeing to our{" "}
            <a className="mx-1 text-primary font-semibold hover:underline cursor-pointer">
                Terms of Service
            </a>{" "}
            and{" "}
            <a className="mx-1 text-primary font-semibold hover:underline cursor-pointer">
                Privacy Policy
            </a>
            .
        </p>
    );
};

export default BillingTerms;
