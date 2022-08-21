import React, { ComponentProps } from "react";

export type TLabelProps = {
    label?: string | JSX.Element;
    labelProps?: ComponentProps<"label">;
};
const Label = ({ label, ...props }: TLabelProps) => {
    return (
        <label
            {...props}
            className="mb-[1px] text-sm leading-[21px] text-mGray-2"
        >
            {label}
        </label>
    );
};

export default Label;
