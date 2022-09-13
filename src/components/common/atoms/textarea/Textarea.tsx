import React, { ComponentProps } from "react";
import { classNames } from "src/utils/helper";
import {
    TInputAndTextareaWrapperProps,
    InputAndTextareaWrapper,
} from "../input-and-textarea-wrapper";

export type TTextareaProps = {
    textareaProps?: ComponentProps<"textarea">;
} & TInputAndTextareaWrapperProps;

const Textarea = (props: TTextareaProps) => {
    delete props.textareaProps?.className;
    delete props.labelProps?.children;

    const { textareaProps, className, ...rest } = props;

    return (
        <InputAndTextareaWrapper {...rest}>
            <textarea
                className={classNames(
                    "rounded-md bg-white outline-none border border-mGray-0 w-full p-[16px] resize-none",
                    className,
                    rest.icon && "pl-[50px]",
                )}
                {...textareaProps}
            />
        </InputAndTextareaWrapper>
    );
};

export default Textarea;
