import { PropsWithChildren } from "react";
import { isContext } from "vm";
import { Label } from "../label";
import { TLabelProps } from "../label/Label";

export type TInputAndTextareaWrapperProps = {
    containerClassName?: string;
    icon?: JSX.Element;
    errorMessage?: string;
} & TLabelProps;

const InputAndTextareaWrapper = ({
    children,
    ...props
}: PropsWithChildren<TInputAndTextareaWrapperProps>) => {
    return (
        <div className={props.containerClassName}>
            {props?.label && (
                <Label
                    label={props.label}
                    {...props.labelProps}
                    hasError={!!props.errorMessage}
                />
            )}
            <div className="relative">
                <div className="absolute left-[13px] top-[18px] flex items-center">
                    {!!props.icon && props.icon}
                </div>
                {children}
            </div>
        </div>
    );
};
export default InputAndTextareaWrapper;
