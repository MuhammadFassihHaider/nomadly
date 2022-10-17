import React, { ComponentProps } from "react";

const PopularBackground = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={65}
            height={23}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M65 0v23H0c0-4.524 6.398-7.97 6.398-11.5C6.398 8.021 0 4.458 0 0h65Z"
                fill="#54499E"
            />
        </svg>
    );
};

export default PopularBackground;
