import { TemplatesCardHeader } from "@components/common/molecules/templates-card-header";
import { CardsContainerTemplate } from "@components/common/templates/cards-container-template";
import { DASHBOARD_CARDS } from "src/data/pages/dashboard";
import { DashboardCreateNewTemplate } from "./dashboard-create-new-template";
import { DashboardTemplatesCards } from "./dashboard-templates-cards";

const DashboardTemplates = () => {
    return (
        <CardsContainerTemplate>
            <TemplatesCardHeader hasViewAll />
            <div className="grid grid-cols-[repeat(auto-fill,max(264px))] gap-[12px]">
                <DashboardCreateNewTemplate />
                <DashboardTemplatesCards cards={DASHBOARD_CARDS} />
            </div>
        </CardsContainerTemplate>
    );
};

export default DashboardTemplates;
