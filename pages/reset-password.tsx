import { Button } from "@components/common/atoms/button";
import { Input } from "@components/common/atoms/input";
import { AuthTemplate } from "@components/common/templates/auth-template";
import Link from "next/link";
import React from "react";

const ResetPassword = () => {
    return (
        <AuthTemplate
            heading="Reset Your Password"
            subHeading={
                <p>
                    <span>Happens to the best of us.</span> <br />
                    <span>
                        Enter your email and we’ll send you a reset link.
                    </span>
                </p>
            }
        >
            <div className="mb-[114px]">
                <Input label={"Username / Email"} className="mb-[34px]" />
                <Button
                    fullWidth
                    size="xl"
                    variant="primary"
                    className="mb-[41px]"
                >
                    Send
                </Button>
                <Link href={"/"}>
                    <p className="text-primary text-sm leading-[22px] cursor-pointer hover:underline text-center">
                        Return to Login
                    </p>
                </Link>
            </div>
        </AuthTemplate>
    );
};

export default ResetPassword;
