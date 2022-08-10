import { DarkModeMoon } from "@components/icons";
import React from "react";

const DarkModeButton = (): JSX.Element => {
    return (
        <div className="p-[12px] rounded-[5px] bg-white shadow-md max-w-min hover:scale-110 cursor-pointer transition-all duration-300">
            <DarkModeMoon />
        </div>
    );
};

export default DarkModeButton;
