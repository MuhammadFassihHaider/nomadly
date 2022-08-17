import { AuthLogo } from "@components/common/atoms/auth-logo";
import { Button } from "@components/common/atoms/button";
import { DarkModeButton } from "@components/common/atoms/dark-mode-button";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    containerClassName?: string;
};

const AuthHeader = ({ containerClassName = "" }: Props) => {
    return (
        <div className={classNames("flex justify-between", containerClassName)}>
            <AuthLogo />
            <div className="flex">
                <div className="flex items-center mr-[72px]">
                    <p className="text-sm leading-5 mGray-3 mr-[22px] cursor-pointer hover:underline">
                        Don't have an account?
                    </p>
                    <Button variant="outline">Sign Up</Button>
                </div>
                <DarkModeButton />
            </div>
        </div>
    );
};

export default AuthHeader;
