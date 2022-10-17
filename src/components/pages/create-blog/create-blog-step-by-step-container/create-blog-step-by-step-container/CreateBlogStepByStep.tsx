import { classNames } from "src/utils/helper";

type Props = {
    step: number;
    description: string;
    isOnStep?: boolean;
};

const CreateBlogStepByStep = ({ description, step, isOnStep }: Props) => {
    return (
        <div className="flex space-x-[12px] mb-[13px]">
            <span className="rounded-full w-[27px] h-[27px] bg-primary flex items-center justify-center text-white">
                {step}
            </span>
            <p
                className={classNames(
                    "font-medium text-sm",
                    isOnStep ? "text-mBlack-0" : "text-mGray-11",
                )}
            >
                {description}
            </p>
        </div>
    );
};

export default CreateBlogStepByStep;
