import React, { PropsWithChildren } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    size?: "sm" | "lg";
    containerClassName?: string;
};

const SimpleCardTemplate = ({
    size = "sm",
    containerClassName,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <div
            className={classNames(
                "bg-white rounded-[10px]  border border-[#EBEBEB] relative shadow-sm cursor-pointer",
                size === "sm"
                    ? "p-[16px] max-w-[264px] min-h-[192px]"
                    : "px-[24px] py-[17px] w-full min-h-[290px]",
                containerClassName,
            )}
        >
            {children}
        </div>
    );
};

export default SimpleCardTemplate;
