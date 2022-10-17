import React, { ComponentProps } from "react";

const Cross = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="9.89941"
                y="1"
                width="1.5"
                height="14"
                rx="0.75"
                transform="rotate(45 9.89941 1)"
            />
            <rect
                y="1.70728"
                width="1.5"
                height="14"
                rx="0.75"
                transform="rotate(-45 0 1.70728)"
            />
        </svg>
    );
};

export default Cross;
