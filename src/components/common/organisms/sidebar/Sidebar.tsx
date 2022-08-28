import { Logo } from "@components/common/atoms/logo";
import { SidebarItem } from "@components/common/molecules/sidebar-item";
import { SidebarLogout } from "@components/icons";
import React from "react";
import { SIDEBAR_ITEMS } from "src/data/common/sidebar-items";

const Sidebar = () => {
    return (
        <div className="min-h-screen pt-[28px] pl-[36px] pr-[24px] pb-[30%] bg-white flex flex-col justify-between border-r border-[#DFDFDF] page-template-layout__sidebar">
            <div>
                <Logo className="mb-[44px]" />
                <div className="flex flex-col space-y-[20px]">
                    {SIDEBAR_ITEMS.map((item) => (
                        <SidebarItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <SidebarItem
                isLogout
                id={0}
                label={"Logout"}
                icon={SidebarLogout}
                route={""}
            />
        </div>
    );
};

export default Sidebar;
