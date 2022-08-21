import React, { PropsWithChildren, ReactNode } from "react";

const PagePaddingsTemplate = ({ children }: { children: ReactNode }) => {
    return (
        <div className="pt-[80px] px-[75px] pb-[46px] flex-1 min-h-screen">
            {children}
        </div>
    );
};

export default PagePaddingsTemplate;
