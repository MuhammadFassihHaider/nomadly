import { Pricing1 } from "@components/icons";
import React from "react";
import { classNames } from "src/utils/helper";
import { PricingCardIconContainer } from "../pricing-card-icon-container";
import { TPricing } from "../PricingCard";

type Props = TPricing["header"] & {
    isSelected: boolean;
};

const PricingCardHeader = ({
    pricingModule,
    for: forCompany,
    isSelected,
}: Props) => {
    return (
        <div className="flex mb-[18px] ">
            <PricingCardIconContainer
                icon={<Pricing1 />}
                isSelected={isSelected}
            />
            <div className="ml-[18px] max-w-[130px]">
                <p
                    className={classNames(
                        "font-medium text-base leading-5 transition",
                        isSelected ? "text-white" : "text-mGray-5",
                    )}
                >
                    {forCompany}
                </p>
                <p
                    className={classNames(
                        "text-xl leading-9 font-semibold transition",
                        isSelected ? "text-white" : "text-mBlack-1",
                    )}
                >
                    {pricingModule}
                </p>
            </div>
        </div>
    );
};

export default PricingCardHeader;
