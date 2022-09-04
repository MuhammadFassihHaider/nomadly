import React from "react";
import { classNames } from "src/utils/helper";
import { Plus } from ".";

type Props = {
    containerClassName?: string;
};

const PlusFilled = ({ containerClassName }: Props) => {
    return (
        <div
            className={classNames(
                "bg-primary rounded-full flex items-center justify-center p-[5px] pl-[6px] max-w-min max-h-min",
                containerClassName,
            )}
        >
            <Plus className="fill-white" />
        </div>
    );
};

export default PlusFilled;
