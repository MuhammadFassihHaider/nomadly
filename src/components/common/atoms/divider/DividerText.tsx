import { classNames } from "src/utils/helper";
import { DividerProps } from "./Divider";

export const DividerText = ({
    text,
    textColor,
}: Pick<DividerProps, "text" | "textColor">) => {
    return (
        <>
            {text && (
                <p
                    className={classNames(
                        "px-[16px] text-[14px] leading-[21px] min-w-max",
                        textColor === "gray"
                            ? "text-mGray-1"
                            : "text-lightBlue",
                    )}
                >
                    {text}
                </p>
            )}
        </>
    );
};
