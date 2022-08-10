import React, { ComponentProps } from "react";

const OpenNewTab = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="0.5"
                y="1.5"
                width="7"
                height="7"
                rx="0.5"
                stroke="#EA4335"
            />
            <rect x="4" width="5" height="5" fill="white" />
            <path
                d="M8.17843 0.999942C8.17843 0.806642 8.02173 0.649942 7.82843 0.649942L4.67843 0.649942C4.48513 0.649942 4.32843 0.806642 4.32843 0.999942C4.32843 1.19324 4.48513 1.34994 4.67843 1.34994L7.47843 1.34994L7.47843 4.14994C7.47843 4.34324 7.63513 4.49994 7.82843 4.49994C8.02173 4.49994 8.17843 4.34324 8.17843 4.14994L8.17843 0.999942ZM5.24749 4.07586L8.07591 1.24743L7.58094 0.752455L4.75251 3.58088L5.24749 4.07586Z"
                fill="#EA4335"
            />
        </svg>
    );
};

export default OpenNewTab;
