import { ProtectedRoutesTemplate } from "@components/common/templates/protected-routes-template";
import { DashboardProjects } from "@components/pages/dashboard/dashboard-projects";
import { DashboardTemplates } from "@components/pages/dashboard/dashboard-templates";

const Dashboard = () => {
    return (
        <ProtectedRoutesTemplate>
            <DashboardTemplates />
            <DashboardProjects />
        </ProtectedRoutesTemplate>
    );
};

export default Dashboard;
