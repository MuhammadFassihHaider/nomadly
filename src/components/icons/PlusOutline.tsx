import React from "react";
import { classNames } from "src/utils/helper";
import { Plus } from ".";

type Props = {
    containerClassName?: string;
};

const PlusOutline = ({ containerClassName }: Props) => {
    return (
        <div
            className={classNames(
                "bg-white rounded-full flex items-center justify-center p-[5px] pl-[6px] max-w-min max-h-min border border-mGray-10 cursor-pointer",
                containerClassName,
            )}
        >
            <Plus className="fill-mGray-10 group-hover:fill-primary" />
        </div>
    );
};

export default PlusOutline;
