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
                    "rounded-md bg-white outline-none border border-mGray-0 w-full p-[16px]",
                    props?.className,
                    inputProps?.className,
                    rest.icon && "pl-[50px]",
                    !!props.errorMessage && "border-red-500",
                )}
            />
        </InputAndTextareaWrapper>
    );
};

export default Input;
