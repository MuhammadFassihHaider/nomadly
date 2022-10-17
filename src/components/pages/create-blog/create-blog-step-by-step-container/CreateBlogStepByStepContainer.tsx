import { useRouter } from "next/router";
import { CreateBlogStepPageProps } from "pages/templates/create-blog/[step]";
import { CreateBlogStepByStep } from "./create-blog-step-by-step-container";

const CreateBlogStepByStepContainer = ({
    stepByStepGuideSteps,
}: Pick<CreateBlogStepPageProps, "stepByStepGuideSteps">) => {
    const router = useRouter();
    return (
        <div className="rounded-[10px] bg-white shadow-lg px-[18px] py-[16px]">
            <h4 className="font-medium text-primary mb-[20px]">
                Step-by-step guide
            </h4>
            {stepByStepGuideSteps?.map(({ description, value }) => (
                <CreateBlogStepByStep
                    key={value}
                    step={value}
                    description={description}
                    isOnStep={value === Number(router.query.step ?? "1")}
                />
            ))}
        </div>
    );
};

export default CreateBlogStepByStepContainer;
