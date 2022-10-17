import { Logo } from "@components/common/atoms/logo";
import { SidebarItem } from "@components/common/molecules/sidebar-item";
import { DownArrow, SidebarLogout } from "@components/icons";
import { useLogoutMutation } from "@redux/api/authApi/authApi";
import React, { useCallback } from "react";
import { SIDEBAR_ITEMS } from "src/data/common/sidebar-items";

const Sidebar = () => {
    const [logout] = useLogoutMutation();

    const onClickLogout = useCallback(async () => {
        await logout();
    }, []);

    return (
        <div className="pt-[28px] pl-[36px] pr-[24px] bg-white flex flex-col justify-between border-r border-[#DFDFDF] page-template-layout__sidebar fixed left-0 top-0 bottom-0 h-screen w-[233px]">
            <div>
                <Logo className="mb-[44px]" />
                <div className="flex flex-col space-y-[20px]">
                    {SIDEBAR_ITEMS.map((item) => (
                        <SidebarItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="absolute left-[36px] top-[calc(100vh-20vh)]">
                <SidebarItem
                    isLogout
                    id={0}
                    label={"Logout"}
                    icon={SidebarLogout}
                    route={"/"}
                    onClickLogout={onClickLogout}
                />
            </div>
            <div className="absolute top-[23px] bg-white shadow-lg right-[-12px] w-[24px] h-[24px] cursor-pointer flex items-center justify-center rounded-full">
                <DownArrow className="transform -rotate-90 w-[10px] h-[15px] fill-black" />
            </div>
        </div>
    );
};

export default Sidebar;
