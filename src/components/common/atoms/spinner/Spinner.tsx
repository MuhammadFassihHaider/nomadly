import React from "react";

const Spinner = () => {
    return (
        <div className="bg-black/40 fixed inset-0 z-50">
            <div className="z-[60] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
