import React from "react";

const ThreeDots = () => {
    return (
        <div className="flex items-center space-x-[2px]">
            {[1, 2, 3].map((item) => (
                <span
                    key={item}
                    className="bg-[#D9D9D9] rounded-full w-[5px] h-[5px]"
                ></span>
            ))}
        </div>
    );
};

export default ThreeDots;
