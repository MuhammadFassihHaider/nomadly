import { Switch as HeadlessSwitch } from "@headlessui/react";
import { classNames } from "src/utils/helper";

type TSize = "sm" | "base" | "lg";

type TSwitchProps = Parameters<typeof HeadlessSwitch>[0];

type Props = {
    leftLabel?: string;
    rightLabel?: string;
    size?: TSize;
    containerClassName?: string;
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
    sm: {
        switchClassName: "h-[13px] w-[29px]",
        switchBallClassName: "h-[9px] w-[9.8px]",
        labelClassName: "text-[10px]",
        switchBallTransitionClassName: "translate-x-[15px]",
    },
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
        <div
            className={classNames(
                "flex items-center",
                props.containerClassName,
            )}
        >
            {props.leftLabel && (
                <Label label={props.leftLabel} size={size} position="left" />
            )}
            <HeadlessSwitch
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
            </HeadlessSwitch>
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
