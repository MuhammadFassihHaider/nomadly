import { DividerContainer } from "./DividerContainer";
import { DividerLine } from "./DividerLine";
import { DividerText } from "./DividerText";

export type DividerProps = {
    text?: string;
    color?: string;
    textColor?: "gray" | "blue";
    padding?: "small" | "large";
    containerClassName?: string;
};

const Divider = ({
    text,
    color,
    textColor = "gray",
    padding = "large",
    containerClassName,
}: DividerProps) => {
    return (
        <DividerContainer
            padding={padding}
            containerClassName={containerClassName}
        >
            <DividerLine color={color} />
            <DividerText text={text} textColor={textColor} />
            <DividerLine color={color} />
        </DividerContainer>
    );
};

export default Divider;
