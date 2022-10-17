import React from "react";
import { Button } from "@components/common/atoms/button";
import { ThreeDots } from "@components/common/atoms/three-dots";

const DashboardProjectsCard = () => {
    return (
        <div className="rounded-[10px] bg-white shadow-sm max-w-[264px] max-h-[291px]">
            <div className="flex justify-between items-center px-[16px] py-[14px] border-b border-mLightBlue">
                <p>Test</p>
                <ThreeDots />
            </div>
            <div className="py-[24px] px-[16px] text-xs leading-[18px]">
                <div className="mb-[18px]">
                    <h3 className="text-mGray-8 mb-[8px]">
                        PRODUCT / BRAND NAME
                    </h3>
                    <p className="text-mBlack-0 font-medium line-clamp-2">
                        Name here
                    </p>
                </div>
                <div className="mb-[34px]">
                    <h3 className="text-mGray-8 mb-[8px]">DESCRIPTON</h3>
                    <p className="text-mBlack-0 font-medium line-clamp-2">
                        dsfjskldfhlkjsfhkjshfkjshfkljshflkjdshfkjsdhf
                    </p>
                </div>
                <Button size="sm">Product Description</Button>
            </div>
        </div>
    );
};

export default DashboardProjectsCard;
