import PopularBackground from "@components/icons/PopularBackground";
import React from "react";

const PopularLabel = () => {
    return (
        <div className="absolute right-0">
            <PopularBackground />
            <p className="text-white absolute right-[7px] top-1/2 transfrom -translate-y-1/2 text-xs leading-[18px]">
                Popular
            </p>
        </div>
    );
};

export default PopularLabel;
