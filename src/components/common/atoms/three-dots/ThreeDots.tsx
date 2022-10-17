import React from "react";

const ThreeDots = () => {
    return (
        <div className="flex items-center space-x-[2px]">
            { [1, 2, 3].map((item) => (
                <span
                    key={ item }
                    className="bg-mGray-10 rounded-full w-[5px] h-[5px]"
                />
            )) }
        </div>
    );
};

export default ThreeDots;
