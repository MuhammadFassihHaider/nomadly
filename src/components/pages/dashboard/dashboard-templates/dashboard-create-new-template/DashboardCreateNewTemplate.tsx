import { SimpleCardTemplate } from "@components/common/templates/simple-card-template";
import { Plus } from "@components/icons";
import React from "react";

const DashboardCreateNewTemplate = () => {
    return (
        <SimpleCardTemplate
            containerClassName="flex flex-col items-center justify-center"
            size="sm"
        >
            <div className="bg-primary rounded-full flex items-center justify-center p-[5px] pl-[6px] max-w-min max-h-min mb-[8px]">
                <Plus />
            </div>
            <p>Create New Template</p>
        </SimpleCardTemplate>
    );
};

export default DashboardCreateNewTemplate;
