import React, { ComponentProps } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    // not part of labelProps because this is something that will be use very frequently.
    label?: string | JSX.Element;

    // input className seperate for same reason as label
    className?: string;

    inputProps?: ComponentProps<"input">;
    labelProps?: ComponentProps<"label">;
    containerClassName?: string;
};

const Input = (props: Props) => {
    delete props.inputProps?.className;
    delete props.labelProps?.children;

    return (
        <div className={props.containerClassName}>
            {props?.label && (
                <label
                    {...props.labelProps}
                    className="mb-[1px] text-sm leading-[21px] text-mGray-2"
                >
                    {props.label}
                </label>
            )}
            <input
                {...props.inputProps}
                className={classNames(
                    "rounded-md bg-white outline-none border border-mGray-0 w-full p-[14px]",
                    props.className ?? "",
                )}
            />
        </div>
    );
};

export default Input;
