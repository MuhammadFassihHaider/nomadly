import React from "react";

const BillingTrial = () => {
    return (
        <div className="p-[7px] w-full flex bg-mYellow-0/25 rounded-md mb-[30px] items-center   ">
            <div className="bg-mYellow-0 text-mGray-1 p-[10px] font-semibold text-sm leading-[14px] rounded-md mr-[20px] h-full flex items-center">
                14 day trial
            </div>
            <div className="text-sm leading-[21px] text-mGray-1">
                <p>You will be billed:</p>
                <p className="font-semibold">Sunday, July 17th, 2022</p>
            </div>
        </div>
    );
};

export default BillingTrial;
