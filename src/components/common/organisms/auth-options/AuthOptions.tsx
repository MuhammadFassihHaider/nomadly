import { Radio } from "@components/common/atoms/radio";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    options: string[];
    label?: string;
    containerClassName?: string;
};

const AuthOptions = ({
    options = [],
    label,
    containerClassName = "",
}: Props) => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <RadioGroup
            value={selected}
            onChange={setSelected}
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
                        key={option}
                        value={option}
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
                                        {option}
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
