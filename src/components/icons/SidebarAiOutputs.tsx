import React from "react";

type Props = {
    isSelected?: boolean;
};

const SidebarAiOutputs = ({ isSelected }: Props) => {
    return (
        <svg
            width={20}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.809 8.557c.04-.451.272-.872.649-1.178.376-.307.87-.477 1.382-.477H16.12c.513 0 1.006.17 1.382.477.377.306.608.727.65 1.178l.817 8.996c.023.248-.013.497-.105.732-.092.234-.237.45-.428.632-.19.183-.422.328-.68.428-.257.1-.536.151-.817.151H3.02c-.28 0-.559-.051-.816-.15a2.054 2.054 0 0 1-.68-.429 1.771 1.771 0 0 1-.428-.632 1.605 1.605 0 0 1-.105-.732l.818-8.996v0Z"
                stroke={isSelected ? "#FFFFFF" : "#87888C"}
                strokeWidth={1.499}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.054 9.6V5.102c0-.954-.43-1.87-1.194-2.544-.764-.675-1.8-1.054-2.88-1.054-1.081 0-2.117.379-2.881 1.054-.764.675-1.194 1.59-1.194 2.544V9.6"
                stroke={isSelected ? "#FFFFFF" : "#87888C"}
                strokeWidth={1.499}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SidebarAiOutputs;
