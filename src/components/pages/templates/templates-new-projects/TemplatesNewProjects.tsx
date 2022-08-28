import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import { SimpleCardTemplate } from "@components/common/templates/simple-card-template";
import { DraftPage, Pencil } from "@components/icons";
import React from "react";
import { TemplatesNewProject } from "./templates-new-project";

const TemplatesNewProjects = () => {
    return (
        <CardsContainerTemplate className="mb-[19px]">
            <h2 className="font-medium text-mBlack-0 mb-[8px]">
                New Project – Blog Post
            </h2>
            <h3 className="text-mGray-3 mb-[37px] text-sm">
                Choose your starting point
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,max(264px))] gap-[36px]">
                <TemplatesNewProject
                    heading="Start from Scratch"
                    description="Get help writing any type of content using our AI templates"
                    icon={<DraftPage />}
                    iconBg="bg-mYellow-0"
                />
                <TemplatesNewProject
                    heading="Blog post workflow"
                    description="Get help writing blog posts from start to finish."
                    icon={<Pencil />}
                    iconBg="bg-primary"
                />
            </div>
        </CardsContainerTemplate>
    );
};

export default TemplatesNewProjects;
