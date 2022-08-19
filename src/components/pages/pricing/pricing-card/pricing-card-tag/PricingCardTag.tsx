import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isSelected: boolean;
};

const PricingCardTag = ({ isSelected }: Props) => {
    return (
        <p
            className={classNames(
                "rounded-[10px] px-[24px] py-[13px]  text-sm leading-[14px] absolute right-[32px] top-[32px]",
                isSelected
                    ? "text-primary bg-white"
                    : "text-white bg-primary/20",
            )}
        >
            Popular
        </p>
    );
};

export default PricingCardTag;
