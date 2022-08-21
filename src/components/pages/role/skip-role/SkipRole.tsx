import Link from "next/link";
import React from "react";

const Role = () => {
    return (
        <div className="flex justify-center">
            <Link href={"/"}>
                <a className="text-primary hover:underline"> Skip Question </a>
            </Link>
        </div>
    );
};

export default Role;
