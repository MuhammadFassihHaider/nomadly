import { TemplateCards } from "@components/common/molecules/template-cards";
import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import React from "react";
import { TEMPLATES } from "src/data/common/templates";
import { TemplateFilters } from "./template-filters";

const TemplatesCards = () => {
    return (
        <CardsContainerTemplate>
            <h2 className="font-medium text-mBlack-0 mb-[26px]">Templates</h2>
            <TemplateFilters />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] gap-[12px]">
                <TemplateCards cards={TEMPLATES} />
            </div>
        </CardsContainerTemplate>
    );
};

export default TemplatesCards;
