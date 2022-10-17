import React, { ComponentProps } from "react";

const ArrowRight = (props: ComponentProps<"svg">) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" {...props}>
            <path d="M11.354 4.859a.5.5 0 0 0 0-.708L8.172.97a.5.5 0 1 0-.708.708l2.829 2.828-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 5.005h11v-1H0v1Z" />
        </svg>
    );
};

export default ArrowRight;
