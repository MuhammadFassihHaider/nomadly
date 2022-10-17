import React from "react";

const Grid = () => {
    return (
        <svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x={0.5}
                y={0.5}
                width={6}
                height={6}
                rx={0.5}
                stroke="#535353"
            />
            <rect
                x={0.5}
                y={9.5}
                width={6}
                height={6}
                rx={0.5}
                stroke="#535353"
            />
            <rect
                x={9.5}
                y={0.5}
                width={6}
                height={6}
                rx={0.5}
                stroke="#535353"
            />
            <rect
                x={9.5}
                y={9.5}
                width={6}
                height={6}
                rx={0.5}
                stroke="#535353"
            />
        </svg>
    );
};

export default Grid;
