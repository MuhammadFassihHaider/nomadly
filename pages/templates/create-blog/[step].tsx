import CreateBlogStepsTemplate from "@components/common/templates/create-blog-steps-template/CreateBlogStepsTemplate";
import { ProtectedRoutesTemplate } from "@components/common/templates/protected-routes-template";
import { GetStaticProps } from "next";
import React from "react";
import {
    CREATE_BLOG_STEPS,
    CREATE_BLOG_STEP_BY_STEP,
    TCreateBlogStepByStep,
    TCreateBlogSteps,
} from "src/data/pages/create-blog";

export type CreateBlogStepPageProps = {
    stepByStepGuideSteps: TCreateBlogStepByStep[];
    createBlogSteps: TCreateBlogSteps[];
};

const CreateBlogStepPage = ({
    stepByStepGuideSteps,
    createBlogSteps,
}: CreateBlogStepPageProps) => {
    return (
        <ProtectedRoutesTemplate>
            <CreateBlogStepsTemplate
                createBlogSteps={createBlogSteps}
                stepByStepGuideSteps={stepByStepGuideSteps}
            >
                <p>tres</p>
            </CreateBlogStepsTemplate>
        </ProtectedRoutesTemplate>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { step: "1" } },
            { params: { step: "2" } },
            { params: { step: "3" } },
            { params: { step: "4" } },
        ],
        fallback: false, // can also be true or 'blocking'
    };
}

export const getStaticProps: GetStaticProps<CreateBlogStepPageProps> = () => {
    return {
        props: {
            stepByStepGuideSteps: CREATE_BLOG_STEP_BY_STEP,
            createBlogSteps: CREATE_BLOG_STEPS,
        },
    };
};

export default CreateBlogStepPage;
