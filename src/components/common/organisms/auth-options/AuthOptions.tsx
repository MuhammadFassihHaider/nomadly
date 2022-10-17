import { Radio } from "@components/common/atoms/radio";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    options: TMenuItem[];
    label?: string;
    containerClassName?: string;
    onChange: (value: string) => void;
    selected: string;
};

const AuthOptions = ({
    options = [],
    label,
    containerClassName = "",
    onChange,
    selected,
}: Props) => {
    return (
        <RadioGroup
            value={selected}
            onChange={onChange}
            className={containerClassName}
        >
            {label && (
                <RadioGroup.Label
                    className={
                        "flex justify-center mb-[21px] text-sm leading-[21px] text-mGray-1"
                    }
                >
                    {label}
                </RadioGroup.Label>
            )}
            <div className="bg-white rounded-md grid grid-cols-2 gap-[22px]">
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option.value}
                        value={option.value}
                        className={({ checked }) =>
                            classNames(
                                checked
                                    ? "bg-indigo-50 border-indigo-200 z-10"
                                    : "border-gray-200",
                                "relative border p-4 flex cursor-pointer focus:outline-none rounded-md bg-mGray-6",
                            )
                        }
                    >
                        {({ checked }) => (
                            <>
                                <Radio
                                    selected={checked}
                                    containerClassName="mr-[11px]"
                                />
                                <div className="flex flex-col">
                                    <RadioGroup.Label
                                        as="span"
                                        className={classNames(
                                            checked
                                                ? "text-indigo-900"
                                                : "text-gray-900",
                                            "block text-sm font-medium",
                                        )}
                                    >
                                        {option.label}
                                    </RadioGroup.Label>
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

export default AuthOptions;
