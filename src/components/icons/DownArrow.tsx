import React from "react";

type Props = {
    className?: string;
};

const DownArrow = ({ className }: Props) => {
    return (
        <svg
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M5.96967 7.03033C6.26256 7.32322 6.73744 7.32322 7.03033 7.03033L11.8033 2.25736C12.0962 1.96447 12.0962 1.48959 11.8033 1.1967C11.5104 0.903806 11.0355 0.903806 10.7426 1.1967L6.5 5.43934L2.25736 1.1967C1.96447 0.903806 1.48959 0.903806 1.1967 1.1967C0.903806 1.48959 0.903806 1.96447 1.1967 2.25736L5.96967 7.03033ZM5.75 5.5V6.5H7.25V5.5H5.75Z" />
        </svg>
    );
};

export default DownArrow;
