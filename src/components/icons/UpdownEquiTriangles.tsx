import React from "react";
import EquiTriangleFilled from "./EquiTriangleFilled";

const UpdownEquiTriangles = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-[2px]">
            <EquiTriangleFilled className="transform rotate-180" />
            <EquiTriangleFilled />
        </div>
    );
};

export default UpdownEquiTriangles;
