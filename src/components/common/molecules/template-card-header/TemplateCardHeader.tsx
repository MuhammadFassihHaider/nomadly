import Link from "next/link";
import React from "react";

export type TemplateCardHeaderProps = {
    hasViewAll?: boolean;
};

const TemplateCardHeader = ({
    hasViewAll = false,
}: TemplateCardHeaderProps) => {
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

export default TemplateCardHeader;
