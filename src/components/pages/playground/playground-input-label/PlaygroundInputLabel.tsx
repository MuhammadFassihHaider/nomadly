import { Switch } from "@components/common/atoms/switch";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TPlaygroundTemplateInputLabelProps = {
    label: string;
    hasError?: boolean;
};

// TODO: add hint

const PlaygroundInputLabel = ({
    label,
    hasError = false,
}: TPlaygroundTemplateInputLabelProps) => {
    return (
        <div className="flex items-center justify-between mb-[4px]">
            <div className="flex items-center space-x-[12px]">
                <p
                    className={twMerge(
                        "text-sm text-mBlack-0",
                        hasError && "text-red-500",
                    )}
                >
                    {label}
                </p>
                <span className="flex items-center justify-center rounded-full border border-[#9F9F9F] w-[12px] h-[12px] text-[10px] cursor-pointer text-mGray-2">
                    i
                </span>
            </div>
            <Switch
                checked
                onChange={() => {
                    // do something
                }}
                size="sm"
                containerClassName={"mr-1"}
            />
        </div>
    );
};

export default PlaygroundInputLabel;
