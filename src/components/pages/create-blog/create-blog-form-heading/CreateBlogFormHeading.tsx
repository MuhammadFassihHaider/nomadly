import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    text: string;
    className?: string;
};

const CreateBlogFormHeading = ({ text, className = "" }: Props) => {
    return (
        <h3
            className={classNames(
                "text-primary font-medium mb-[14px] leading-[24px]",
                className,
            )}
        >
            {text}
        </h3>
    );
};

export default CreateBlogFormHeading;
