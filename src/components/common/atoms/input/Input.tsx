import { ComponentProps } from "react";
import { classNames } from "src/utils/helper";
import { InputAndTextareaWrapper } from "../input-and-textarea-wrapper";
import type { TInputAndTextareaWrapperProps } from "../input-and-textarea-wrapper";

export type TInputProps = {
    inputProps?: ComponentProps<"input">;
} & TInputAndTextareaWrapperProps;

const Input = (props: TInputProps) => {
    delete props.inputProps?.className;
    delete props.labelProps?.children;

    const { inputProps, className, ...rest } = props;

    return (
        <InputAndTextareaWrapper {...rest}>
            <input
                {...inputProps}
                className={classNames(
                    "rounded-md bg-white outline-none border border-mGray-0 w-full p-[16px]",
                    className,
                    rest.icon && "pl-[50px]",
                )}
            />
        </InputAndTextareaWrapper>
    );
};

export default Input;
