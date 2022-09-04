import { Button } from "@components/common/atoms/button";
import { CreateBlogStepByStepContainer } from "@components/pages/create-blog/create-blog-step-by-step-container";
import { CreateBlogSteps } from "@components/pages/create-blog/create-blog-steps";
import { useRouter } from "next/router";
import { CreateBlogStepPageProps } from "pages/templates/create-blog/[step]";
import React from "react";
import { CardsContainerTemplate } from "../cards-container-template";

type Props = {
    children: React.ReactNode;
} & CreateBlogStepPageProps;

const CreateBlogStepsTemplate = ({
    children,
    createBlogSteps,
    stepByStepGuideSteps,
}: Props) => {
    const router = useRouter();
    return (
        <CardsContainerTemplate className="min-h-[calc(100vh-146px)]">
            <h2 className="font-medium text-mBlack-0 mb-[8px]">
                New Blog Post
            </h2>
            <p className="text-sm text-mGray-3 mb-[48px]">
                Follow the steps below to start your content
            </p>

            <CreateBlogSteps
                step={router.query.step ?? "1"}
                createBlogSteps={createBlogSteps}
            />

            <div className="mb-[23px] flex items-start justify-between">
                <div className="w-[677px] px-[33px] py-[28px] rounded-[10px] shadow-sm bg-white">
                    {children}
                </div>

                <CreateBlogStepByStepContainer
                    stepByStepGuideSteps={stepByStepGuideSteps}
                />
            </div>
            <div className="flex items-center space-x-[25px]">
                {router.query.step !== "1" && (
                    <Button variant="outline" size="lg">
                        Go Back
                    </Button>
                )}
                <Button size="lg">
                    {getPrimaryButtonLabel(router.query.step ?? "1")}
                </Button>
            </div>
        </CardsContainerTemplate>
    );
};

const getPrimaryButtonLabel = (step: string | string[]) => {
    switch (step) {
        case "1":
            return "Generate Outline";
        case "2":
            return "Generate Talking Points";
        case "3":
            return "Generate Content";
        case "4":
            return "Creat Blog Post";
        default:
            break;
    }
};

export default CreateBlogStepsTemplate;
