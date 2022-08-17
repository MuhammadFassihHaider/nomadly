import React from "react";
import { classNames } from "src/utils/helper";
import { THeadingAndSubHeading } from "../../templates/auth-template/AuthTemplate";

type Props = {
    text: THeadingAndSubHeading;
    className?: string;
};

const AuthSubheading = ({ text, className = "" }: Props) => {
    return (
        <p
            className={classNames(
                "text-sm leading-[22px] text-mGray-3 text-center",
                className,
            )}
        >
            {text}
        </p>
    );
};

export default AuthSubheading;
