import React, { ComponentProps } from "react";

const DraftPage = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={15}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m14.094 5.922-.062-.109L9.789.653C9.785.65 9.778.648 9.774.643A.427.427 0 0 0 9.682.57.397.397 0 0 0 9.64.542a.41.41 0 0 0-.164-.037H.409A.41.41 0 0 0 0 .915v17.17a.41.41 0 0 0 .41.41h13.305a.41.41 0 0 0 .41-.41V6.072a.4.4 0 0 0-.031-.15ZM9.88 2.054l2.967 3.608H9.88V2.054ZM.82 17.676V1.321h8.243v4.75a.41.41 0 0 0 .41.41h3.834v11.195H.819Z"
                fill="#fff"
            />
        </svg>
    );
};

export default DraftPage;
