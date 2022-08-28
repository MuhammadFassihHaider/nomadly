import {
    AddFolder,
    FilterFunnel,
    Grid,
    UpdownEquiTriangles,
} from "@components/icons";
import { DashboardProjectsFilterDropdown } from "./dashboard-projects-filter-dropdown";

const DashboardProjectsFilters = () => {
    return (
        <div className="flex items-center space-x-[10px] flex-1 border-b-2 border-mLightBlue justify-end pb-[20px]">
            <div className="dashboard-filter-button">
                <Grid />
            </div>
            <div className="dashboard-filter-button">
                <AddFolder />
            </div>
            <DashboardProjectsFilterDropdown
                icon={<UpdownEquiTriangles />}
                label="Last Modified"
            />
            <DashboardProjectsFilterDropdown
                icon={<FilterFunnel />}
                label="Show All"
            />
        </div>
    );
};

export default DashboardProjectsFilters;
