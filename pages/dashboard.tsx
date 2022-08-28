import { ProtectedRoutesTemplate } from "@components/common/templates/protected-routes-template";
import { DashboardTemplates } from "@components/pages/dashboard/dashboard-templates";

const Dashboard = () => {
    return (
        <ProtectedRoutesTemplate>
            <DashboardTemplates />
        </ProtectedRoutesTemplate>
    );
};

export default Dashboard;
