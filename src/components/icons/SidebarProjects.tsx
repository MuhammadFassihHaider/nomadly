import React from "react";

type Props = {
    isSelected?: boolean;
};

const SidebarProjects = ({ isSelected }: Props) => {
    return (
        <svg
            width={21}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.56 2.332H1.395a.41.41 0 0 0-.41.41v12.432c0 .069.017.136.05.196l1.584 2.911a.41.41 0 0 0 .72 0l1.583-2.91v-.001a.408.408 0 0 0 .05-.196V2.742a.41.41 0 0 0-.41-.41Zm-.409.82v1.583H1.803V3.151h2.348ZM2.977 17.227l-1.174-2.157V5.554h2.348v9.517l-1.174 2.157ZM20.855 5.922a19.48 19.48 0 0 0-.062-.109L16.55.653c-.004-.004-.011-.006-.015-.011a.427.427 0 0 0-.092-.072.406.406 0 0 0-.041-.028.41.41 0 0 0-.164-.037H7.17a.41.41 0 0 0-.41.41v17.17a.41.41 0 0 0 .41.41h13.305a.41.41 0 0 0 .41-.41V6.072a.405.405 0 0 0-.031-.15Zm-4.213-3.868 2.967 3.608h-2.967V2.054ZM7.58 17.676V1.321h8.243v4.75a.41.41 0 0 0 .41.41h3.834v11.195H7.58Z"
                fill={isSelected ? "#FFFFFF" : "#87888C"}
            />
        </svg>
    );
};

export default SidebarProjects;
