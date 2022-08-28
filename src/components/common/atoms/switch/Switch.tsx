import { Switch as Switch_ } from "@headlessui/react";
import { classNames } from "src/utils/helper";

type TSize = "base" | "lg";

type TSwitchProps = Parameters<typeof Switch_>[0];

type Props = {
    leftLabel?: string;
    rightLabel?: string;
    size?: TSize;
} & TSwitchProps;

type TLabelProps = {
    label: string;
    size: TSize;
    position: "left" | "right";
};

type TConfigKeys = {
    switchClassName: string;
    switchBallClassName: string;
    labelClassName: string;
    switchBallTransitionClassName: string;
};

type TSwitchConfig = {
    [T in TSize]: TConfigKeys;
};

const SwitchConfig: TSwitchConfig = {
    base: {
        switchClassName: "h-6 w-11",
        switchBallClassName: "h-5 w-5",
        labelClassName: "text-[14px] leading-[24px]",
        switchBallTransitionClassName: "translate-x-5",
    },
    lg: {
        switchClassName: "h-8 w-[74px]",
        switchBallClassName: "h-7 w-7",
        labelClassName: "text-[18px] leading-[30px]",
        switchBallTransitionClassName: "translate-x-[40px]",
    },
};

const Switch = ({ size = "base", ...props }: Props) => {
    delete props?.className;
    return (
        <div className="flex items-center">
            {props.leftLabel && (
                <Label label={props.leftLabel} size={size} position="left" />
            )}
            <Switch_
                checked={props.checked}
                onChange={props.onChange}
                className={classNames(
                    props.checked ? "bg-primary" : "bg-gray-200",
                    SwitchConfig[size].switchClassName,
                    "relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        props.checked
                            ? SwitchConfig[size].switchBallTransitionClassName
                            : "translate-x-0",
                        SwitchConfig[size].switchBallClassName,
                        "pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    )}
                />
            </Switch_>
            {props.rightLabel && (
                <Label label={props.rightLabel} size={size} position="right" />
            )}
        </div>
    );
};

const Label = ({ label, size, position }: TLabelProps) => {
    return (
        <label
            className={classNames(
                SwitchConfig[size].labelClassName,
                "text-mBlack-0",
                position === "left" ? "mr-4" : "ml-4",
            )}
        >
            {label}
        </label>
    );
};

export default Switch;
