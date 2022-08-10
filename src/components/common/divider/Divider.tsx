import { PropsWithChildren } from "react";
import { classNames } from "src/utils/helper";
import { DividerLine } from "./DividerLine";
import { DividerText } from "./DividerText";

export type Props = {
    text?: string;
    color?: string;
    textColor?: "gray" | "blue";
    padding?: "small" | "large";
};

const Divider = ({
    text,
    color,
    textColor = "gray",
    padding = "large",
}: Props) => {
    return (
        <DividerContainer padding={padding}>
            <>
                <DividerLine color={color} />
                <DividerText text={text} textColor={textColor} />
                <DividerLine color={color} />
            </>
        </DividerContainer>
    );
};

const DividerContainer = ({
    padding,
    children,
}: PropsWithChildren<Pick<Props, "padding">>) => {
    return (
        <div
            className={classNames(
                "flex items-center",
                padding === "small" ? "px-[6px]" : "px-[29px]",
            )}
        >
            {children}
        </div>
    );
};

export default Divider;
