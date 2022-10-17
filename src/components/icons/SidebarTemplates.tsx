import React from "react";

type Props = {
    isSelected?: boolean;
};

const SidebarTemplates = ({ isSelected }: Props) => {
    return (
        <svg
            width={21}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.278 1.013a.455.455 0 0 0-.19.579c.144.34-.41.314 6.54.314 6.196 0 6.253 0 6.374-.094a.486.486 0 0 0 .158-.578C17.02.9 17.488.922 10.615.923c-6.017 0-6.192.002-6.337.09ZM2.728 3.03a.486.486 0 0 0-.159.578c.142.336-.494.312 8.055.312 8.55 0 7.913.024 8.056-.312a.486.486 0 0 0-.159-.578c-.12-.094-.173-.094-7.897-.094-7.723 0-7.776 0-7.897.094Zm-.959 1.932c-.275.072-.656.463-.729.747C1 5.873.984 7.471.984 11.922c0 6.492-.01 6.246.256 6.59.067.086.233.211.37.278l.248.122h17.528l.246-.114c.301-.138.511-.405.585-.744.038-.173.049-1.974.038-6.286-.013-5.705-.019-6.053-.1-6.213a1.279 1.279 0 0 0-.544-.54c-.17-.084-.504-.087-8.915-.094-5.987-.005-8.798.008-8.927.042Zm17.44 6.957-.013 5.985H2.053L2.04 11.92l-.012-5.985H19.22l-.012 5.985Z"
                fill={isSelected ? "#FFFFFF" : "#87888C"}
            />
        </svg>
    );
};

export default SidebarTemplates;
