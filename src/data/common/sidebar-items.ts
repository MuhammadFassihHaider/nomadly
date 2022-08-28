import {
    SidebarAiOutputs,
    SidebarDashboard,
    SidebarJobs,
    SidebarProjects,
    SidebarSettings,
    SidebarTemplates,
} from "@components/icons";

export const SIDEBAR_ITEMS: TSidebarItem[] = [
    {
        id: 0,
        label: "Dashboard",
        icon: SidebarDashboard,
        route: "/dashboard",
    },
    {
        id: 1,
        label: "Templates",
        icon: SidebarTemplates,
        route: "/templates",
    },
    {
        id: 2,
        label: "Projects",
        icon: SidebarProjects,
        route: "/projects",
    },
    {
        id: 3,
        label: "jobs",
        icon: SidebarJobs,
        route: "/jobs",
    },
    {
        id: 4,
        label: "AI Outputs",
        icon: SidebarAiOutputs,
        route: "/ai-outputs",
    },
    {
        id: 5,
        label: "Settings",
        icon: SidebarSettings,
        route: "/settings",
    },
];
