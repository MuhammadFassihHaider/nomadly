import React, { ComponentProps } from "react";

const Plus = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={8}
            height={8}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7.358 4.422H4.376v3.024h-1.19V4.422H.218V3.344h2.968V.306h1.19v3.038h2.982v1.078Z"
                fill="#fff"
            />
        </svg>
    );
};

export default Plus;
