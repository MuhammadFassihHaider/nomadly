import { Logo } from "@components/common/atoms/logo";
import { Button } from "@components/common/atoms/button";
import { DarkModeButton } from "@components/common/atoms/dark-mode-button";
import { useRouter } from "next/router";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    containerClassName?: string;
};

const AuthHeader = ({ containerClassName = "" }: Props) => {
    const router = useRouter();
    return (
        <div className={classNames("flex justify-between", containerClassName)}>
            <Logo />
            <div className="flex">
                <div className="flex items-center mr-[72px]">
                    <p className="text-sm leading-5 text-mGray-3 mr-[22px] cursor-pointer hover:underline min-w-max">
                        Don't have an account?
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => router.push("/create-user")}
                    >
                        Sign Up
                    </Button>
                </div>
                <DarkModeButton />
            </div>
        </div>
    );
};

export default AuthHeader;
