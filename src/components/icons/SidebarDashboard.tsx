import React from "react";

type Props = {
    isSelected?: boolean;
};

const SidebarDashboard = ({ isSelected }: Props) => {
    return (
        <svg
            width={22}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.477 18.663V11.71c0-.483-.1-.962-.293-1.407a3.556 3.556 0 0 0-.834-1.177l-6.633-6.191a1.811 1.811 0 0 0-2.472 0L3.612 9.125c-.356.333-.64.733-.833 1.177a3.517 3.517 0 0 0-.294 1.407v6.954c0 .472.19.924.527 1.257.337.333.795.52 1.272.52h14.394c.477 0 .935-.187 1.273-.52.337-.333.526-.785.526-1.257Z"
                stroke={isSelected ? "#FFFFFF" : "#87888C"}
                strokeWidth={1.799}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SidebarDashboard;
