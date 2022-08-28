import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isCenter?: boolean;
    className?: string;
};

const Logo = ({ isCenter = false, className = "" }: Props) => {
    return (
        <div
            className={classNames(
                "text-[32px] leading-[22px] text-primary font-medium flex",
                isCenter ? "justify-center" : "justify-start",
                className,
            )}
        >
            LOGO
        </div>
    );
};

export default Logo;
