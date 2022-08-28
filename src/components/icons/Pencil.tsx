import React, { ComponentProps } from "react";

const Pencil = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={16}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.683.514a.246.246 0 0 0-.24.063L.597 12.426a.246.246 0 0 0-.07.14L.004 16.22a.246.246 0 0 0 .283.284l3.656-.527c.051-.007.1-.03.137-.067L15.925 4.06a.246.246 0 0 0-.004-.343L12.792.583a.245.245 0 0 0-.109-.069Zm-.07.587 2.792 2.788-1.045 1.043-2.791-2.788 1.044-1.043ZM11.22 2.497l2.79 2.788-9.929 9.931-2.79-2.795 9.928-9.924ZM.989 12.809l2.693 2.706-3.14.45.447-3.156Z"
                fill="#fff"
            />
        </svg>
    );
};

export default Pencil;
