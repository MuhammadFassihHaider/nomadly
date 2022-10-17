import { Pill } from "@components/common/atoms/pill";
import { Check, EquiTriangleFilled } from "@components/icons";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    label: string;
    isOnStep?: boolean;
    step: number;
};

const CreateBlogStep = ({ label, isOnStep = false, step }: Props) => {
    return (
        <div className={"flex flex-col items-center"}>
            <div
                className="rounded-full flex w-[40px] h-[40px] items-center justify-center mb-[10px] bg-mGray-12"
                style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <div
                    className={classNames(
                        "rounded-full flex items-center justify-center w-[27px] h-[27px] font-bold text-[20px] text-white",
                        isOnStep && "bg-primary",
                        !isOnStep && "bg-mGray-11",
                    )}
                >
                    {isOnStep ? <Check fill="white" /> : step}
                </div>
            </div>
            <EquiTriangleFilled
                className={classNames(
                    "transform rotate-180 mb-[2px]",
                    isOnStep ? "fill-primary" : "fill-mGray-11",
                )}
            />
            <Pill internalShadow small isSelected={isOnStep} label={label} />
        </div>
    );
};

export default CreateBlogStep;
