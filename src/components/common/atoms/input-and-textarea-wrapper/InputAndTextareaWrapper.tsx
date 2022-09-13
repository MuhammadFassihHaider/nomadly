import { PropsWithChildren } from "react";
import { Label } from "../label";
import { TLabelProps } from "../label/Label";

export type TInputAndTextareaWrapperProps = {
    className?: string;
    containerClassName?: string;
    icon?: JSX.Element;
} & TLabelProps;

const InputAndTextareaWrapper = ({
    children,
    ...props
}: PropsWithChildren<TInputAndTextareaWrapperProps>) => {
    return (
        <div className={props.containerClassName}>
            {props?.label && (
                <Label label={props.label} {...props.labelProps} />
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
