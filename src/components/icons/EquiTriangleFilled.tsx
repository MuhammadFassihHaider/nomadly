import { ComponentProps } from "react";

const EquiTriangleFilled = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={9}
            height={5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M4.5 5 8.397.5H.603L4.5 5Z" fill="#827A9C" />
        </svg>
    );
};

export default EquiTriangleFilled;
