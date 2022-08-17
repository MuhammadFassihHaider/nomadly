import React from "react";
import { classNames } from "src/utils/helper";
import { TPricing } from "../PricingCard";

type Props = { description: TPricing["description"]; isSelected: boolean };

const PricingCardDescription = ({ description, isSelected }: Props) => {
    return (
        <p
            className={classNames(
                "text-base leading-8 mb-[13px] transition",
                isSelected ? "text-white" : "text-mGray-5",
            )}
        >
            {description}
        </p>
    );
};

export default PricingCardDescription;
