import React from "react";
import { ComponentProps } from "react";
import { classNames } from "src/utils/helper";

const CommonStyles = `inline-flex items-center justify-center border border-transparent font-medium shadow-sm text-white capitalize tracking-wider text-center transition-all duration-300`;

type TSize = "xs" | "sm" | "base" | "lg" | "xl";
type TVariant = "primary" | "outline";

type Props = {
    size?: TSize;
    variant?: TVariant;
    className?: string;
    loading?: boolean;
    containerClassName?: string;
    fullWidth?: boolean;
} & ComponentProps<"button">;

const Button = ({
    size = "base",
    variant = "primary",
    children,
    className = "",
    // loading = false,
    containerClassName = "",
    fullWidth = false,
    ...rest
}: Props): JSX.Element => {
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
                {children}
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
    console.log({ size });
    switch (size) {
        case "xs":
            return `px-[16px] py-[5px] text-[12px] leading-[20px] rounded`;
        case "sm":
            return `px-[18px] py-[6px] text-[14px] leading-[24px]`;
        case "base":
            return `px-[22px] py-[8px] text-[16px] leading-[24px]`;
        case "lg":
            return `px-4 py-2 text-base rounded-md shadow-sm`;
        case "xl":
            return `px-6 py-3 text-base rounded-md shadow-sm`;
        default:
            return `px-6 py-3 text-base rounded-md shadow-sm`;
    }
};

const getVariantStyles = (variant: TVariant) => {
    console.log({ variant });
    switch (variant) {
        case "primary":
            return `bg-primary hover:bg-primaryLighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:focus:ring-primaryLighter rounded-[6px]`;
        // case "delete":
        //     return `bg-primary-red hover:bg-primary-red-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`;
        case "outline":
            return "bg-white hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-primary border border-primary shadow-sm rounded-[6px]";
        // case "auth":
        //     return `bg-primary hover:bg-primaryLighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:focus:ring-primaryLighter rounded-[24px]`;
        default:
            return `bg-primary hover:bg-primaryLighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
    }
};

export default Button;
