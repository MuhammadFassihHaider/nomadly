import React, { ComponentProps } from "react";
import { classNames } from "src/utils/helper";
import type { TLabelProps } from "../label/Label";
import { Label } from "../label";

type Props = {
    className?: string;

    inputProps?: ComponentProps<"input">;

    containerClassName?: string;

    icon?: JSX.Element;
} & TLabelProps;

const Input = (props: Props) => {
    delete props.inputProps?.className;
    delete props.labelProps?.children;

    return (
        <div className={props.containerClassName}>
            {props?.label && (
                <Label label={props.label} {...props.labelProps} />
            )}
            <div className="relative">
                <div className="absolute left-[13px] top-[18px] flex items-center">
                    {!!props.icon && props.icon}
                </div>
                <input
                    {...props.inputProps}
                    className={classNames(
                        "rounded-md bg-white outline-none border border-mGray-0 w-full p-[16px]",
                        props.className,
                        props.icon && "pl-[50px]",
                    )}
                />
            </div>
        </div>
    );
};

export default Input;
