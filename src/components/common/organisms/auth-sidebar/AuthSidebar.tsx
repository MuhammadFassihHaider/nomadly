import { Divider } from "@components/common/atoms/divider";
import { Check } from "@components/icons";
import React from "react";
import { SidebarData } from "../../../../data/auth-sidebar-content";
import { AuthSidebarRow } from "./AuthSidebarRow";

const AuthSidebar = () => {
    return (
        <div className="rounded-l-[60px] bg-primary pt-[91px] h-full min-h-screen w-[486px] text-base leading-6">
            <div className="pl-[61px] pr-[77px]">
                {SidebarData.map((data) => (
                    <AuthSidebarRow
                        key={data.id}
                        heading={data.heading}
                        content={data.content}
                    />
                ))}
            </div>
            <Divider
                text="Trusted By"
                textColor="blue"
                containerClassName="pl-[33px] pr-[76px] pt-[56px]"
            />
        </div>
    );
};

export default AuthSidebar;
