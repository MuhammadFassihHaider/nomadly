import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import type { TInputAndTextareaWrapperProps } from "../input-and-textarea-wrapper";
import { InputAndTextareaWrapper } from "../input-and-textarea-wrapper";

export type TInputProps = {
    inputProps?: ComponentProps<"input">;
    className?: string;
} & TInputAndTextareaWrapperProps;

const Input = (props: TInputProps) => {
    delete props.labelProps?.children;

    const { inputProps, ...rest } = props;

    return (
        <InputAndTextareaWrapper {...rest}>
            <input
                {...inputProps}
                className={twMerge(
                    "rounded-md bg-white outline-none border border-mGray-0 w-full p-[12px]",
                    inputProps?.className ?? props?.className,
                    rest.icon && "pl-[50px]",
                    !!props.errorMessage && "border-red-500",
                )}
            />
            <p className="text-xs ml-1 text-red-500 capitalize min-h-[20px]">
                {rest.errorMessage}
            </p>
        </InputAndTextareaWrapper>
    );
};

export default Input;
