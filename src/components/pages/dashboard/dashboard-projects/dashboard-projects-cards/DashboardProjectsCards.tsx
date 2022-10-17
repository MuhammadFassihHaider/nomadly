import { DashboardProjectsCard } from "./dashboard-projects-card";

const DashboardProjectsCards = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,max(264px))] gap-[12px]">
            {[1, 2, 3, 4].map((item) => (
                <DashboardProjectsCard key={item} />
            ))}
        </div>
    );
};

export default DashboardProjectsCards;
