import { TEBusinessPlan } from "@redux/api/authApi/authApi.types";

type TPricings = {
    id: TEBusinessPlan;
    header: {
        for: string;
        pricingModule: string;
    };
    description: string;
    pricing: {
        price: number;
        per: string;
    };
    features: {
        id: number;
        feature: string;
    }[];
};

export const Pricings: TPricings[] = [
    {
        id: "0",
        header: {
            for: "For individuals",
            pricingModule: "Basic",
        },
        description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
        pricing: {
            price: 99,
            per: "monthly",
        },
        features: [
            {
                id: 0,
                feature: "All analytics features",
            },
            {
                id: 1,
                feature: "Up to 250,000 tracked visits",
            },
            {
                id: 2,
                feature: "Normal support",
            },
            {
                id: 3,
                feature: "Up to 3 team members",
            },
        ],
    },
    {
        id: "1",
        header: {
            for: "For startups",
            pricingModule: "Pro",
        },
        description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
        pricing: {
            price: 199,
            per: "monthly",
        },
        features: [
            {
                id: 0,
                feature: "All analytics features",
            },
            {
                id: 1,
                feature: "Up to 1,000,000 tracked visits",
            },
            {
                id: 2,
                feature: "Premium support",
            },
            {
                id: 3,
                feature: "Up to 10 team members",
            },
        ],
    },
    {
        id: "2",
        header: {
            for: "For big companies",
            pricingModule: "Enterprise",
        },
        description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ",
        pricing: {
            price: 399,
            per: "monthly",
        },
        features: [
            {
                id: 0,
                feature: "All analytics features",
            },
            {
                id: 1,
                feature: "Up to 5,000,000 tracked visits",
            },
            {
                id: 2,
                feature: "Dedicated support",
            },
            {
                id: 3,
                feature: "Up to 50 team members",
            },
        ],
    },
];
