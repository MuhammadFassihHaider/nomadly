import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isSelected?: boolean;
    label: string;
};

const TemplateFilter = ({ label, isSelected }: Props) => {
    return (
        <div
            className={classNames(
                "flex items-center justify-center rounded-[42px] shadow-sm py-[7px] px-[16px] min-w-max text-center max-h-[38px] cursor-pointer",
                isSelected
                    ? "text-white bg-primary"
                    : " text-mGray-9 bg-white border border-mGray-10",
            )}
        >
            {label}
        </div>
    );
};

export default TemplateFilter;
