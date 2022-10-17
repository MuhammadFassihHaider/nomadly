import { useRouter } from "next/router";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    isSelected?: boolean;
    isLogout?: boolean;
    onClickLogout?: () => Promise<void>;
} & TSidebarItem;

const SidebarItem = ({
    icon: Icon,
    label,
    isSelected,
    isLogout,
    onClickLogout,
    route,
}: Props) => {
    const router = useRouter();
    const _onClickLogout = async () => {
        onClickLogout && (await onClickLogout());
        router.push(route);
        // implement logout
    };

    const _onClick = () => {
        router.push(route);
        // implement onclikc
    };

    return (
        <div
            onClick={isLogout ? _onClickLogout : _onClick}
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
                    !isSelected && !isLogout && "text-mGray-9 px-[12px]",
                    isLogout && "font-semibold text-primary",
                )}
            >
                {label}
            </p>
        </div>
    );
};

export default SidebarItem;
