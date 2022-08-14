import { Divider } from "@components/common/atoms/divider";
import { Input } from "@components/common/atoms/input";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";
import React from "react";

const PersonalInformation = () => {
    return (
        <AuthTemplate
            hasHeader
            hasSidebar
            heading={"Start for Free Today"}
            subHeading="Access to all features. No credit card required."
        >
            <div className="mb-[68px]">
                <GoogleButton brandType="google" className="mb-[44px]" />
                <Divider text="Or" containerClassName="mb-[44px]" />
                <div className="grid grid-cols-2 gap-[30px] mb-[32px]">
                    <Input label={"First Name"} />
                    <Input label={"Last Name"} />
                </div>
                <Input label={"Email"} className="mb-[41px]" />
            </div>
        </AuthTemplate>
    );
};

export default PersonalInformation;
