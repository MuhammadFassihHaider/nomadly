import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    icon: JSX.Element;
    isSelected: boolean;
};

const PricingCardIconContainer = ({ icon, isSelected }: Props) => {
    return (
        <div
            className={classNames(
                "flex items-center justify-center rounded-2xl p-[17px] max-w-min max-h-min",
                isSelected ? "bg-white" : "bg-mLightPurple",
            )}
        >
            {icon}
        </div>
    );
};

export default PricingCardIconContainer;
