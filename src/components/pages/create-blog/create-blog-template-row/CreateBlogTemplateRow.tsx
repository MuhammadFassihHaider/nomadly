import { Grabbable, PlusOutline } from "@components/icons";
import React from "react";

type Props = {
    label: string;
    hasIcons?: boolean;
};

const CreateBlogTemplateRow = ({ label, hasIcons = false }: Props) => {
    return (
        <div className="border border-dashed border-mGray-10 rounded-md px-[14px] py-[16px] flex justify-between items-center hover:border-primary group">
            {hasIcons && (
                <Grabbable className="mr-[34px] fill-mGray-10 group-hover:fill-primary" />
            )}
            <p className="text-mGray-7 text-sm leading-[21px] flex-1">
                {label}
            </p>
            {hasIcons && (
                <PlusOutline containerClassName="group-hover:border-primary" />
            )}
        </div>
    );
};

export default CreateBlogTemplateRow;
