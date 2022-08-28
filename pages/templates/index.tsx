import { ProtectedRoutesTemplate } from "@components/common/templates/protected-routes-template";
import { TemplatesCards } from "@components/pages/templates/templates-cards";
import { TemplatesNewProjects } from "@components/pages/templates/templates-new-projects";

const templates = () => {
    return (
        <ProtectedRoutesTemplate>
            <TemplatesNewProjects />
            <TemplatesCards />
        </ProtectedRoutesTemplate>
    );
};

export default templates;
