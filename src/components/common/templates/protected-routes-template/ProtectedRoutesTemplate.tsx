import { Header } from "@components/common/organisms/header";
import { Sidebar } from "@components/common/organisms/sidebar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const ProtectedRoutesTemplate = ({ children }: Props) => {
    return (
        <div className="page-template-layout">
            <Sidebar />
            <Header />
            <div className="page-template-layout__content pl-[32px] pr-[40px] pt-[24px]">
                {children}
            </div>
        </div>
    );
};

export default ProtectedRoutesTemplate;
