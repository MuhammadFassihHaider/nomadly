import { AuthHelp } from "@components/common/atoms/auth-help";
import { AuthTOC } from "@components/common/atoms/auth-toc";
import React from "react";

const AuthFooter = () => {
    return (
        <div>
            <AuthHelp className="mb-[31px]" />
            <AuthTOC />
        </div>
    );
};

export default AuthFooter;
