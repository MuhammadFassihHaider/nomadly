import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    background: "pink" | "yellow";
    position: string;
};

const AuthSidebarDot = ({ background, position }: Props) => {
    return (
        <div
            className={classNames(
                "w-[12px] h-[12px] rounded-full absolute",
                position,
                background === "pink" ? "bg-[#FFB4C4]" : "bg-[#FFD167]",
            )}
        ></div>
    );
};

export default AuthSidebarDot;
