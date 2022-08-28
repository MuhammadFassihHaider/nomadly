import { Robot, Instagram, Twitter } from "@components/icons";
import { TIcon } from "src/types/exportedTypes";

export type TTemplateCard = {
    heading: string;
    description: string;
    isPopular?: boolean;
    id: number;
    icon: TIcon;
};

export const DASHBOARD_CARDS: TTemplateCard[] = [
    {
        id: 0,
        heading: "AI Article & Blog Writer",
        description:
            "Write articles, blog posts and other long-form content like sales emails, ebooks and more within seconds.",
        icon: Robot,
        isPopular: true,
    },
    {
        id: 1,
        heading: "Instagram Captions",
        description:
            "Captions that turn your images into attention-grabbing Instagram posts.",
        icon: Instagram,
    },
    {
        id: 2,
        heading: "Tweet Generator",
        description:
            "Generate tweets using AI, that are relevant and on-trend.",
        icon: Twitter,
    },
];
