import { PropsWithChildren } from "react";
import { classNames } from "src/utils/helper";
import { DividerProps } from "./Divider";

export const DividerContainer = ({
    padding,
    containerClassName = "",
    children,
}: PropsWithChildren<Pick<DividerProps, "padding" | "containerClassName">>) => {
    return (
        <div
            className={classNames(
                "flex items-center",
                padding === "small" ? "px-[6px]" : "px-[29px]",
                containerClassName,
            )}
        >
            {children}
        </div>
    );
};
