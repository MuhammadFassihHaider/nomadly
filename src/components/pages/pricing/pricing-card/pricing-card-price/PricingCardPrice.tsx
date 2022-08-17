import React from "react";
import { classNames } from "src/utils/helper";
import { TPricing } from "../PricingCard";

type Props = TPricing["pricing"] & {
    isSelected: boolean;
};

const PricingCardPrice = ({ per, price, isSelected }: Props) => {
    return (
        <p
            className={classNames(
                "text-[54px] leading-[66px]  font-semibold mb-[17px]transition",
                isSelected ? "text-white" : "text-mBlack-1",
            )}
        >
            ${price}{" "}
            <span
                className={classNames(
                    "text-lg leading-[22px] font-medium transition",
                    isSelected ? "text-white" : "text-mGray-5",
                )}
            >
                /{per}
            </span>
        </p>
    );
};

export default PricingCardPrice;
