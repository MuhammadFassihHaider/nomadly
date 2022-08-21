import { Radio } from "@components/common/atoms/radio";
import React from "react";
import { classNames } from "src/utils/helper";

export type TAuthStep = 1 | 2 | 3 | 4;

const Steps = [1, 2, 3, 4];

type Props = {
    step: TAuthStep;
    containerClassName?: string;
};

const AuthSteps = ({ step, containerClassName }: Props) => {
    return (
        <div
            className={classNames(
                "flex space-x-[22px] justify-center w-full",
                containerClassName,
            )}
        >
            <p className="text-sm leading-[22px] text-mGray-3">
                Step {step} of {Steps.length}
            </p>
            <div className="flex space-x-[13px]">
                {Steps.map((s) => (
                    <Radio key={s} selected={s === step} />
                ))}
            </div>
        </div>
    );
};

export default AuthSteps;
