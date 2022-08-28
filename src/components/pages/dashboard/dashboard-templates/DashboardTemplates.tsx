import { TemplateCardHeader } from "@components/common/molecules/template-card-header";
import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import { DASHBOARD_CARDS } from "src/data/pages/dashboard";
import { DashboardCreateNewTemplate } from "./dashboard-create-new-template";
import { TemplateCards } from "../../../common/molecules/template-cards";

const DashboardTemplates = () => {
    return (
        <CardsContainerTemplate className="mb-[24px]">
            <TemplateCardHeader hasViewAll />
            <div className="grid grid-cols-[repeat(auto-fill,max(264px))] gap-[12px]">
                <DashboardCreateNewTemplate />
                <TemplateCards cards={DASHBOARD_CARDS} />
            </div>
        </CardsContainerTemplate>
    );
};

export default DashboardTemplates;
