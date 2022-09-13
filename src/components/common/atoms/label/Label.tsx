import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
export type TLabelProps = {
    label?: string | JSX.Element;
    labelProps?: ComponentProps<"label">;
};
const Label = ({ label, labelProps }: TLabelProps) => {
    return (
        <label
            {...labelProps}
            className={twMerge(
                "mb-[1px] text-sm leading-[21px] text-mGray-2",
                labelProps?.className,
            )}
        >
            {label}
        </label>
    );
};

export default Label;
