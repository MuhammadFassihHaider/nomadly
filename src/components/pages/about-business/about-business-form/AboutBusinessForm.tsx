import { Button } from "@components/common/atoms/button";
import { Input } from "@components/common/atoms/input";
import React from "react";

const AboutBusinessForm = () => {
    return (
        <form className="flex flex-col">
            <div className="flex space-x-[30px] mb-[30px]">
                <Input
                    label={"Company name"}
                    inputProps={{ placeholder: "XYZ" }}
                />
                <Input
                    label={"Domain (recommended)"}
                    inputProps={{ placeholder: "spacex.com" }}
                />
            </div>

            <Button fullWidth>Continue</Button>
        </form>
    );
};

export default AboutBusinessForm;
