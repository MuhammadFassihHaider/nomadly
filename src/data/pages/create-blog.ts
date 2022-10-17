export type TCreateBlogStepByStep = {
    value: number;
    description: string;
};

export type TCreateBlogSteps = {
    label: string;
    value: number;
};

export const CREATE_BLOG_STEPS = [
    {
        label: "Add Details",
        value: 1,
    },
    {
        label: "Generate Outline",
        value: 2,
    },
    {
        label: "Generate Talking Point",
        value: 3,
    },
    {
        label: "Review Content",
        value: 4,
    },
];

export const CREATE_BLOG_STEP_BY_STEP = [
    {
        value: 1,
        description: "Tell us about your blog",
    },
    {
        value: 2,
        description: "Generate the outline",
    },
    {
        value: 3,
        description: "Generate the talking points for each section",
    },
    {
        value: 4,
        description: "Review content and start editing the First Draft",
    },
];
