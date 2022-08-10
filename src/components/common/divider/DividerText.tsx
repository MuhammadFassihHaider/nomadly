import { classNames } from "src/utils/helper";
import { Props } from "./Divider";

export const DividerText = ({
    text,
    textColor,
}: Pick<Props, "text" | "textColor">) => {
    return (
        <>
            {text && (
                <p
                    className={classNames(
                        "px-[16px] text-[14px] leading-[21px]",
                        textColor === "gray" ? "text-mGray-1" : "text-primary",
                    )}
                >
                    {text}
                </p>
            )}
        </>
    );
};
