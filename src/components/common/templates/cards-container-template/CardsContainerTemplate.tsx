import React from "react";

type Props = {
    children: React.ReactNode;
};

const CardsContainerTemplate = ({ children }: Props) => {
    return (
        <div className="px-[22px] pt-[24px] pb-[32px] bg-[#F6F6F6] rounded-[10px]">
            {children}
        </div>
    );
};

export default CardsContainerTemplate;
