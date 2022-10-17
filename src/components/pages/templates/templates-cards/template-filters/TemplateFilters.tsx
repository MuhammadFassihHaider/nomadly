import React from "react";
import { TEMPLATES_FILTERS } from "src/data/pages/templates";
import { Pill } from "../../../../common/atoms/pill";

const TemplateFilters = () => {
    return (
        <div className="mb-[26px] flex items-center space-x-[16px]">
            {TEMPLATES_FILTERS.map((filter) => (
                <Pill key={filter} label={filter} />
            ))}
            {/* <TemplateFilter label={TEMPLATES_FILTERS[0]} />
            <TemplateFilter label={TEMPLATES_FILTERS[0]} />
            <TemplateFilter label={TEMPLATES_FILTERS[0]} />
            <TemplateFilter label={TEMPLATES_FILTERS[0]} /> */}
        </div>
    );
};

export default TemplateFilters;
