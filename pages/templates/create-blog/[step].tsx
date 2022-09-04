import CreateBlogStepsTemplate from "@components/common/templates/create-blog-steps-template/CreateBlogStepsTemplate";
import { ProtectedRoutesTemplate } from "@components/common/templates/protected-routes-template";
import { CreateBlogStep1 } from "@components/pages/create-blog/create-blog-step-1";
import { CreateBlogStep2 } from "@components/pages/create-blog/create-blog-step-2";
import { CreateBlogStep3 } from "@components/pages/create-blog/create-blog-step-3";
import { CreateBlogStep4 } from "@components/pages/create-blog/create-blog-step-4";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
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
    const router = useRouter();
    return (
        <ProtectedRoutesTemplate>
            <CreateBlogStepsTemplate
                createBlogSteps={createBlogSteps}
                stepByStepGuideSteps={stepByStepGuideSteps}
            >
                {(() => {
                    switch (router.query.step) {
                        case "1":
                            return <CreateBlogStep1 />;
                        case "2":
                            return <CreateBlogStep2 />;
                        case "3":
                            return <CreateBlogStep3 />;
                        case "4":
                            return <CreateBlogStep4 />;
                    }
                })()}
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

export const getStaticProps: GetStaticProps<CreateBlogStepPageProps> = (
    context,
) => {
    console.log({ context: context.params });
    return {
        props: {
            stepByStepGuideSteps: CREATE_BLOG_STEP_BY_STEP,
            createBlogSteps: CREATE_BLOG_STEPS,
        },
    };
};

export default CreateBlogStepPage;
