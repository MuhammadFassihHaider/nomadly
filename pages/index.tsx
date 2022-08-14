import { Button } from "@components/common/atoms/button";
import { Divider } from "@components/common/atoms/divider";
import { Input } from "@components/common/atoms/input";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";
import React from "react";

const Home = () => {
    return (
        <AuthTemplate
            heading="Welcome Back!"
            subHeading="If you have an account, please log in with your email address."
        >
            <div className="mb-[68px]">
                <GoogleButton brandType="google" className="mb-[44px]" />
                <Divider text="Or" containerClassName="mb-[44px]" />
                <Input label={"Username / Email"} className="mb-[34px]" />
                <Input label={"Password"} className="mb-1" />
                <p className="text-sm leading-[22px] text-primary hover:underline cursor-pointer mb-[36px]">
                    Did you forget your password?
                </p>
                <Button variant="primary" size="xl" fullWidth>
                    Login
                </Button>
            </div>
        </AuthTemplate>
    );
};

export default Home;
