import { DownArrow } from "@components/icons";
import { Menu } from "@headlessui/react";
import React from "react";

type Props = {
    label: string;
    icon: JSX.Element;
};

const DashboardProjectsFilterDropdown = ({ icon, label }: Props) => {
    return (
        <Menu>
            <Menu.Button className={"dashboard-filter-button"}>
                {icon}
                <p className="font-semibold text-xs leading-[14px] pl-[10px] pr-[7px]">
                    {label}
                </p>
                <DownArrow className="fill-black w-[8px] h-[5px]" />
            </Menu.Button>
        </Menu>
    );
};

export default DashboardProjectsFilterDropdown;
