import { Input } from "@components/common/atoms/input";
import { CreditCard } from "@components/icons";
import React from "react";

const BillingCreditCardInput = () => {
    return (
        <div className="relative mb-[34px]">
            <Input
                icon={<CreditCard />}
                label={"Card"}
                className="pr-[115px]"
            />
            <p className="absolute right-[15px] bottom-[17px] text-sm leading-[21px] text-mGray-2">
                MM / YY / CVC
            </p>
        </div>
    );
};

export default BillingCreditCardInput;
