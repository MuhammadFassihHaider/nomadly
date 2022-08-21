import { ReactNode } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    children: ReactNode;
    top?: "small" | "large";
};

const PagePaddingsTemplate = ({ children, top = "large" }: Props) => {
    return (
        <div
            className={classNames(
                "px-[75px] pb-[46px] flex-1 min-h-screen",
                top === "small" ? "pt-[30px]" : "pt-[80px]",
            )}
        >
            {children}
        </div>
    );
};

export default PagePaddingsTemplate;
