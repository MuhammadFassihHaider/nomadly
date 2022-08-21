import { Radio } from "@components/common/atoms/radio";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    step: 1 | 2 | 3;
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
                Step {step} of 3
            </p>
            <div className="flex space-x-[13px]">
                {[1, 2, 3].map((s) => (
                    <Radio key={s} selected={s === step} />
                ))}
            </div>
        </div>
    );
};

export default AuthSteps;
