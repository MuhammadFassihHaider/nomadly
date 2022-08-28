import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const CardsContainerTemplate = ({ children, className }: Props) => {
    return (
        <div
            className={classNames(
                "px-[22px] pt-[24px] pb-[32px] bg-[#F6F6F6] rounded-[10px]",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default CardsContainerTemplate;
