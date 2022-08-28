import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    className?: string;
};

const AuthHelp = ({ className = "" }: Props) => {
    return (
        <p
            className={classNames(
                "text-sm leading-6 tracking-[0.18px] text-mBlack-0 text-center",
                className,
            )}
        >
            Need help? <a className="simple-link px-0.5">Click here</a> or email
            us at: <br />
            <a href={`mailto:support@logo.com`} className="simple-link px-0.5">
                support@logo.com
            </a>
        </p>
    );
};

export default AuthHelp;
