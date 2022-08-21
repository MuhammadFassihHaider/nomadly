import React from "react";
import { AuthSidebarDot } from "./auth-sidebar-dot";
import Image from "next/image";

const AuthSidebarPositionedItems = () => {
    return (
        <>
            <AuthSidebarDot
                background="pink"
                position="right-[50px] top-[40%]"
            />
            <AuthSidebarDot
                background="yellow"
                position="right-[45%] bottom-[30%]"
            />
            <div className="absolute left-[16px] bottom-[35%]">
                <Image src={"/designer-2.png"} width={45} height={45} />
            </div>
            <div className="absolute right-[100px] bottom-[25%]">
                <Image src={"/designer-1.png"} width={56} height={56} />
            </div>
        </>
    );
};

export default AuthSidebarPositionedItems;
