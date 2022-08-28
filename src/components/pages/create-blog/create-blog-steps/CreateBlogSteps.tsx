import { CreateBlogStepPageProps } from "pages/templates/create-blog/[step]";
import { CreateBlogStep } from "./create-blog-step";
import { CreateBlogStepsBar } from "./create-blog-steps-bar";

type Props = {
    step: string | string[];
} & Pick<CreateBlogStepPageProps, "createBlogSteps">;

const CreateBlogSteps = ({ step, createBlogSteps }: Props) => {
    return (
        <div className="relative max-w-min mb-[100px]">
            <CreateBlogStepsBar />
            <div className="absolute top-[-12px] flex items-center justify-between w-[calc(100%+45px)]">
                {createBlogSteps?.map(({ label, value }) => {
                    return (
                        <CreateBlogStep
                            key={value}
                            label={label}
                            step={value}
                            isOnStep={Number(step) === value}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CreateBlogSteps;
