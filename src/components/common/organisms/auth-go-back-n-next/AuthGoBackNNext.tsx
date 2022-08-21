import { Button } from "@components/common/atoms/button";
import { GoBack } from "@components/common/atoms/go-back";
import React from "react";

type Props = {
    buttonLabel: string;
};

const AuthGoBackNNext = ({ buttonLabel }: Props) => {
    return (
        <div className="flex justify-between items-center mb-[73px]">
            <GoBack />
            <Button className="w-[200px]">{buttonLabel}</Button>
        </div>
    );
};

export default AuthGoBackNNext;
