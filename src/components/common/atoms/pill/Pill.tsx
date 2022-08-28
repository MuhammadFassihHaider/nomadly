import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isSelected?: boolean;
    label: string;
    small?: boolean;
    internalShadow?: boolean;
};

const Pill = ({
    label,
    isSelected,
    small = false,
    internalShadow = false,
}: Props) => {
    return (
        <div
            className={classNames(
                "flex items-center justify-center rounded-[42px] min-w-max text-center py-[7px]",
                isSelected
                    ? "text-white bg-primary"
                    : "text-mGray-9 bg-white border border-mGray-10",
                small
                    ? "max-h-[31px] px-[13px] text-xs"
                    : "max-h-[38px] px-[16px] cursor-pointer",
                internalShadow,
            )}
            style={{
                boxShadow: internalShadow
                    ? "inset 0px 2px 2px rgba(0, 0, 0, 0.1)"
                    : "0px 1px 1px rgba(217, 221, 226, 0.05)",
            }}
        >
            {label}
        </div>
    );
};

export default Pill;
