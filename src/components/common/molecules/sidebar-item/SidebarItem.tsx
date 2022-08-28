import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isSelected?: boolean;
    isLogout?: boolean;
} & TSidebarItem;

const SidebarItem = ({ icon: Icon, label, isSelected, isLogout }: Props) => {
    const onClickLogout = () => {
        // implement logout
    };

    const onClick = () => {
        // implement onclikc
    };

    return (
        <div
            onClick={isLogout ? onClickLogout : onClick}
            className={classNames(
                "flex items-center space-x-[15px] py-[18px]  rounded-[9px] cursor-pointer",
                isSelected && "bg-primary",
            )}
        >
            <Icon isSelected={isSelected} />
            <p
                className={classNames(
                    "font-medium leading-[24px]",
                    isSelected && !isLogout && "text-white px-[24px]",
                    !isSelected && !isLogout && "text-[#87888C] px-[12px]",
                    isLogout && "font-semibold text-primary",
                )}
            >
                {label}
            </p>
        </div>
    );
};

export default SidebarItem;
