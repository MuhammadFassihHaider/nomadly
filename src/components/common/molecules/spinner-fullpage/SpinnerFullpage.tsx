import { Spinner } from "@components/common/atoms/spinner";
import { useAppSelector } from "@redux/store";
import React from "react";

const SpinnerFullpage = () => {
    const showingSpinner = useAppSelector((state) => state.ui.showingSpinner);
    return showingSpinner ? <Spinner /> : null;
};

export default SpinnerFullpage;
