import { RefreshDouble } from "@components/icons";
import React from "react";

type Props = {
    label: string;
};

const RegenerateWithIcon = ({ label }: Props) => {
    return (
        <div className="flex items-center space-x-[11px]">
            <RefreshDouble className="fill-primary w-[24px] h-[21px]" />
            <p className="text-primary leading-[24px]">{label}</p>
        </div>
    );
};

export default RegenerateWithIcon;
