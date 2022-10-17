import {
    Robot,
    Instagram,
    Twitter,
    QuestionMark,
    Facebook,
} from "@components/icons";
import { TIcon } from "src/types/exportedTypes";

export type TTemplateCard = {
    heading: string;
    description: string;
    isPopular?: boolean;
    id: number;
    icon: TIcon;
};

export const TEMPLATES: TTemplateCard[] = [
    {
        id: 0,
        heading: "Questions",
        description:
            "A tool to create engaging questions and polls that increase audience participation and engagement.",
        icon: QuestionMark,
    },
    {
        id: 1,
        heading: "AI Article & Blog Writer",
        description:
            "Write articles, blog posts and other long-form content like sales emails, ebooks and more within seconds.",
        icon: Robot,
        isPopular: true,
    },
    {
        id: 2,
        heading: "Instagram Captions",
        description:
            "Captions that turn your images into attention-grabbing Instagram posts.",
        icon: Instagram,
    },
    {
        id: 3,
        heading: "Tweet Generator",
        description:
            "Generate tweets using AI, that are relevant and on-trend.",
        icon: Twitter,
    },
    {
        id: 4,
        heading: "Content Rephrase",
        description:
            "A tool to create engaging questions and polls that increase audience participation and engagement.",
        icon: Twitter,
    },
    {
        id: 5,
        heading: "Facebook Ads",
        description:
            "Write articles, blog posts and other long-form content like sales emails, ebooks and more within seconds.",
        icon: Facebook,
        isPopular: true,
    },
];
