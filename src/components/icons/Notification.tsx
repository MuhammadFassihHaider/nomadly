import React, { ComponentProps } from "react";

const Notification = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={21}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx={16.506}
                cy={4.501}
                r={3.501}
                stroke="#E84545"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.007 11.738v3.824a4.446 4.446 0 0 1-4.447 4.446H5.446A4.446 4.446 0 0 1 1 15.562V8.448A4.446 4.446 0 0 1 5.446 4H9.27"
                stroke="#6D7787"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Notification;
