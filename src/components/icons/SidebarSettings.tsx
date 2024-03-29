import React from "react";

type Props = {
    isSelected?: boolean;
};

const SidebarSettings = ({ isSelected }: Props) => {
    return (
        <svg
            width={20}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.41 19.496a8.942 8.942 0 0 1-3.912-2.482c.346-.427.562-.952.62-1.507a2.905 2.905 0 0 0-.296-1.611c-.25-.495-.636-.9-1.11-1.165a2.61 2.61 0 0 0-1.545-.32 9.768 9.768 0 0 1 .23-4.694h.037c.459 0 .91-.121 1.31-.353.402-.232.74-.566.982-.97a2.904 2.904 0 0 0 .13-2.724 8.894 8.894 0 0 1 3.719-2.166c.226.461.57.849.995 1.12.424.27.913.413 1.41.413.498 0 .987-.143 1.411-.413.425-.271.77-.659.995-1.12a8.894 8.894 0 0 1 3.719 2.165 2.903 2.903 0 0 0 .14 2.74c.247.407.59.74.996.97.406.228.862.345 1.324.338a9.77 9.77 0 0 1 .23 4.693 2.61 2.61 0 0 0-1.547.321c-.473.265-.859.67-1.11 1.165a2.904 2.904 0 0 0 .325 3.118 8.941 8.941 0 0 1-3.911 2.482 2.807 2.807 0 0 0-.98-1.411 2.63 2.63 0 0 0-1.592-.54 2.63 2.63 0 0 0-1.59.54c-.463.35-.806.845-.98 1.411Z"
                stroke={isSelected ? "#FFFFFF" : "#87888C"}
                strokeWidth={1.799}
                strokeLinejoin="round"
            />
            <path
                d="M9.981 13.8c.414 0 .823-.085 1.205-.25.382-.164.73-.405 1.021-.71a3.29 3.29 0 0 0 .683-1.062 3.39 3.39 0 0 0 0-2.507 3.288 3.288 0 0 0-.683-1.063 3.143 3.143 0 0 0-1.021-.71 3.043 3.043 0 0 0-1.205-.25c-.835 0-1.636.345-2.226.96a3.344 3.344 0 0 0-.923 2.316c0 .869.332 1.702.923 2.317.59.614 1.39.959 2.226.959Z"
                stroke={isSelected ? "#FFFFFF" : "#87888C"}
                strokeWidth={1.799}
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SidebarSettings;
