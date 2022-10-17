import { Button } from "@components/common/atoms/button";
import { GoBack } from "@components/common/atoms/go-back";
import React from "react";

type Props = {
    buttonLabel: string;
    onClick: () => void;
};

const AuthGoBackNNext = ({ buttonLabel, onClick }: Props) => {
    return (
        <div className="flex justify-between items-center mb-[73px]">
            <GoBack />
            <Button className="w-[200px]" onClick={onClick}>
                {buttonLabel}
            </Button>
        </div>
    );
};

export default AuthGoBackNNext;
