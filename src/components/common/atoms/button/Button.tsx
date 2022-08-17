import React from "react";
import { ComponentProps } from "react";
import { classNames } from "src/utils/helper";

const CommonStyles = `inline-flex items-center justify-center border border-transparent font-medium shadow-sm capitalize tracking-wider text-center transition-all duration-300`;

type TSize = "xs" | "sm" | "base" | "lg" | "xl";
type TVariant = "primary" | "outline" | "grey" | "gray";

export type ButtonProps = {
    size?: TSize;
    variant?: TVariant;
    className?: string;
    loading?: boolean;
    containerClassName?: string;
    fullWidth?: boolean;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
} & ComponentProps<"button">;

const Button = ({
    size = "xl",
    variant = "primary",
    children,
    className = "",
    // loading = false,
    containerClassName = "",
    fullWidth = false,
    iconLeft,
    iconRight,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <div
            className={classNames(
                "flex items-center justify-center gap-2",
                containerClassName,
            )}
        >
            <button
                type="button"
                className={classNames(
                    rest.disabled ? `opacity-50 cursor-not-allowed` : "",
                    fullWidth ? "w-full" : "",
                    getSizeStyles(size),
                    getVariantStyles(variant),
                    CommonStyles,
                    className,
                )}
                onClick={
                    rest.disabled
                        ? () => {
                              return;
                          }
                        : rest.onClick
                }
                {...rest}
            >
                <span className="mr-[15px]">{iconLeft}</span>
                {children}
                <span className="ml-[15px]">{iconRight}</span>
                {/* {loading && (
                    <span className="ml-3">
                        <Loader
                            style={{ fill: "#007FFF", height: 12, width: 12 }}
                        />
                    </span>
                )} */}
            </button>
        </div>
    );
};

const getSizeStyles = (size: TSize) => {
    switch (size) {
        case "xs":
            return `px-[16px] py-[5px] text-[12px] leading-[20px] rounded`;
        case "sm":
            return `px-[18px] py-[6px] text-[14px] leading-[24px]`;
        case "base":
            return `px-[22px] py-[8px] text-[16px] leading-[24px]`;
        case "lg":
            return `px-[24px] py-[10px] text-[16px] leading-[24px] rounded-md shadow-sm`;
        case "xl":
            return `px-[24px] py-[12px] text-[18px] leading-[24px] rounded-md shadow-sm`;
        default:
            return `px-6 py-3 text-base rounded-md shadow-sm`;
    }
};

const getVariantStyles = (variant: TVariant) => {
    switch (variant) {
        case "primary":
            return `bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:focus:ring-primary rounded-[6px] text-white`;
        // case "delete":
        //     return `bg-primary-red hover:bg-primary-red-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`;
        case "outline":
            return "bg-white hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-primary border border-primary shadow-sm rounded-[6px]";
        case "grey":
        case "gray":
            return "bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mGray-0 hover:focus:ring-mGray-0 rounded-[px] text-mGray-1 border border-mGray-0";

        default:
            return `bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
    }
};

export default Button;
