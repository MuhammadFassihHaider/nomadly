import React, { ComponentProps } from "react";
import { classNames } from "src/utils/helper";

const Grabbable = ({ className, ...props }: ComponentProps<"svg">) => {
    return (
        <svg
            width={8}
            height={12}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(className, "cursor-grab")}
            {...props}
        >
            <circle cx={1.75} cy={1.25} r={1.25} />
            <circle cx={6.25} cy={1.25} r={1.25} />
            <circle cx={1.75} cy={6} r={1.25} />
            <circle cx={6.25} cy={6} r={1.25} />
            <circle cx={1.75} cy={10.75} r={1.25} />
            <circle cx={6.25} cy={10.75} r={1.25} />
        </svg>
    );
};

export default Grabbable;
