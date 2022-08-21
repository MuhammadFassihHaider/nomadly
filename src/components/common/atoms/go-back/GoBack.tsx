import { useRouter } from "next/router";
import React from "react";

const GoBack = () => {
    const router = useRouter();
    return (
        <div
            className="hover:underline text-primary leading-6 cursor-pointer"
            onClick={() => router.back()}
        >
            Back
        </div>
    );
};

export default GoBack;
