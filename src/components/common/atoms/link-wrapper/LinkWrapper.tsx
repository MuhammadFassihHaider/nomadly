import React, { PropsWithChildren } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

type Props = {
    containerClassName?: string;
} & LinkProps;

const LinkWrapper = ({
    containerClassName,
    children,
    ...props
}: PropsWithChildren<Props>) => {
    return (
        <div className={containerClassName}>
            <Link {...props}>{children}</Link>
        </div>
    );
};

export default LinkWrapper;
