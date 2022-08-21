import { DownArrow } from "@components/icons";
import { Menu } from "@headlessui/react";
import React from "react";
import { TLabelProps } from "@components/common/atoms/label/Label";
import { Label } from "../label";
import { classNames } from "src/utils/helper";

type Props = {
    items: TMenuItem[];
    placeholder?: string;
    buttonClassName?: string;
    itemsClassName?: string;
    itemClassName?: string;
    containerClassName?: string;
} & TLabelProps;

const Dropdown = ({
    items = [],
    labelProps,
    label,
    placeholder,
    buttonClassName,
    containerClassName,
    itemClassName,
    itemsClassName,
}: Props) => {
    return (
        <div className={classNames("w-full", containerClassName)}>
            {label && <Label label={label} {...labelProps} />}
            <div className="relative">
                <Menu>
                    <Menu.Button
                        className={classNames(
                            "rounded-md bg-white outline-none border border-mGray-0 w-full p-[16px] text-left relative",
                            buttonClassName,
                        )}
                    >
                        {placeholder ?? "Select..."}
                        <DownArrow className="absolute right-[12px] top-1/2 transform translate-y-[-1/2]" />
                    </Menu.Button>
                    <Menu.Items
                        className={classNames(
                            "flex flex-col border border-mGray-0 rounded-md  absolute top-[calc(58px+7px)] right-0 w-full z-10 max-h-max bg-white",
                            itemsClassName,
                        )}
                    >
                        {items.length > 0 &&
                            items.map((item) => (
                                <Menu.Item key={item.value}>
                                    {({ active }) => (
                                        <a
                                            className={classNames(
                                                `p-[16px]`,
                                                active && "bg-primary/40",
                                                itemClassName,
                                            )}
                                            href="/account-settings"
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        {items.length === 0 && (
                            <Menu.Item>
                                {() => (
                                    <p
                                        className={`p-[16px] cursor-not-allowed`}
                                    >
                                        No Data!
                                    </p>
                                )}
                            </Menu.Item>
                        )}
                    </Menu.Items>
                </Menu>
            </div>
        </div>
    );
};

export default Dropdown;
