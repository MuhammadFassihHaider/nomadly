import { SimpleCardTemplate } from "@components/common/templates/simple-card-template";
import { PlusFilled } from "@components/icons";
import React from "react";

const DashboardCreateNewTemplate = () => {
    return (
        <SimpleCardTemplate
            containerClassName="flex flex-col items-center justify-center"
            size="sm"
        >
            <PlusFilled containerClassName="mb-[8px]"/>
            <p>Create New Template</p>
        </SimpleCardTemplate>
    );
};

export default DashboardCreateNewTemplate;
