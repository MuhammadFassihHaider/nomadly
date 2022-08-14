import React, { useState } from "react";
import { classNames } from "src/utils/helper";
import { Switch as Switch_ } from "@headlessui/react";

type TSwitchProps = Parameters<typeof Switch_>[0];
type Props = {
    leftLabel?: string;
    rightLabel?: string;
} & TSwitchProps;

const Switch = (props: Props) => {
    delete props?.className;
    return (
        <div className="flex items-center">
            {props.leftLabel && <label>{props.leftLabel}</label>}
            <Switch_
                checked={props.checked}
                onChange={props.onChange}
                className={classNames(
                    props.checked ? "bg-primary" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        props.checked ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                    )}
                />
            </Switch_>
            {props.rightLabel && <label>{props.rightLabel}</label>}
        </div>
    );
};

export default Switch;
