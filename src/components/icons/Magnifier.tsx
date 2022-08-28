import React, { ComponentProps } from "react";

const Magnifier = (
    props: ComponentProps<"svg"> & { circleAndPathStroke?: string | undefined },
) => {
    return (
        <svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx={12.059}
                cy={12.059}
                r={7.062}
                stroke={props.circleAndPathStroke ?? "#C8CDD6"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m21.003 21.003-3.951-3.951"
                stroke={props.circleAndPathStroke ?? "#C8CDD6"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Magnifier;
