import { Cross, Refresh } from "@components/icons";
import React from "react";
import { VerifyEmailIconWithLabel } from "../verify-email-icon-with-label";

const VerifyEmailIconContainer = () => {
    return (
        <div className="grid grid-cols-2 gap-[27px] justify-items-center">
            <VerifyEmailIconWithLabel
                icon={<Refresh className="fill-mBlack-0" />}
                label="Send a new code"
            />
            <VerifyEmailIconWithLabel
                icon={<Cross />}
                label="Try a different email"
            />
        </div>
    );
};

export default VerifyEmailIconContainer;
