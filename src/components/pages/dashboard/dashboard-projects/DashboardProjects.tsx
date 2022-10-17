import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import React from "react";
import { DashboardProjectsCards } from "./dashboard-projects-cards";
import { DashboardProjectsFilters } from "./dashboard-projects-filters";

const DashboardProjects = () => {
    return (
        <CardsContainerTemplate>
            <div className="flex items-center justify-between pb-[20px]">
                <h3 className="text-leading-[24px] text-mBlack-0 font-medium border-b-2 border-primary pb-[37px]">
                    All Projects
                </h3>
                <DashboardProjectsFilters />
            </div>
            <DashboardProjectsCards />
        </CardsContainerTemplate>
    );
};

export default DashboardProjects;
