import Link from "next/link";
import React from "react";

export type TemplatesCardHeaderProps = {
    hasViewAll?: boolean;
};

const TemplatesCardHeader = ({
    hasViewAll = false,
}: TemplatesCardHeaderProps) => {
    return (
        <div className="flex items-center justify-between mb-[18px]">
            <h2>Templates</h2>
            {hasViewAll && (
                <Link href="/templates">
                    <a className="simple-link">View All</a>
                </Link>
            )}
        </div>
    );
};

export default TemplatesCardHeader;
