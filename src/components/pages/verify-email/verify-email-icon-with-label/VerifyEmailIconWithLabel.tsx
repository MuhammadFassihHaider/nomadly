import { Refresh } from "@components/icons";
import React from "react";

type Props = {
    label: string;
    icon: JSX.Element;
};

const VerifyEmailIconWithLabel = ({ icon, label }: Props) => {
    return (
        <div className="flex items-center">
            {icon}
            <p className="ml-[6px] text-xs leading-4 text-mBlack-0 tracking-[0.18px]">
                {label}
            </p>
        </div>
    );
};

export default VerifyEmailIconWithLabel;
