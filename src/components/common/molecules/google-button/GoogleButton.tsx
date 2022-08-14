import { Button } from "@components/common/atoms/button";
import { ButtonProps } from "@components/common/atoms/button/Button";
import { Gmail, Google, OpenNewTab } from "@components/icons";
import React from "react";

type Props = {
    brandType?: "gmail" | "google";
} & ButtonProps;

const GmailProps = {
    className: "button__gmail",
    iconLeft: <Gmail />,
    iconRight: <OpenNewTab className="-ml-[7px]" />,
    children: "Open Gmail Inbox",
};

const GoogleProps = {
    iconLeft: <Google />,
    children: "Continue with Google",
};

const GoogleButton = ({ brandType = "google", ...props }: Props) => {
    return (
        <Button
            fullWidth
            variant="grey"
            size="xl"
            {...props}
            {...(brandType === "gmail" ? GmailProps : GoogleProps)} // if brand === gmail, pass in gmail props, otherwise google props
        />
    );
};

export default GoogleButton;
