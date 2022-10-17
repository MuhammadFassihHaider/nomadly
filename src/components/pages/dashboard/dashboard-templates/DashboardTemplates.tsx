import { TemplateCardHeader } from "@components/common/molecules/template-card-header";
import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import { DashboardCreateNewTemplate } from "./dashboard-create-new-template";
import { TemplateCards } from "../../../common/molecules/template-cards";
import { TEMPLATES } from "src/data/common/templates";

const DashboardTemplates = () => {
    return (
        <CardsContainerTemplate className="mb-[24px]">
            <TemplateCardHeader hasViewAll />
            <div className="grid grid-cols-[repeat(auto-fill,max(264px))] gap-[12px]">
                <DashboardCreateNewTemplate />
                <TemplateCards cards={TEMPLATES.slice(1, 4)} />
            </div>
        </CardsContainerTemplate>
    );
};

export default DashboardTemplates;
