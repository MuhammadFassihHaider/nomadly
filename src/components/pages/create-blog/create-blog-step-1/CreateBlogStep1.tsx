import { Input } from "@components/common/atoms/input";
import React from "react";

const CreateBlogStep1 = () => {
    return (
        <div className="flex flex-col space-y-[23px]">
            <Input
                label={"Blog Title"}
                inputProps={{
                    placeholder: "Enter your blog title or topic here",
                }}
            />
            <Input
                label={"Keyword"}
                inputProps={{
                    placeholder:
                        "Write some keyword or phrase relevant to your blog",
                }}
            />
        </div>
    );
};

export default CreateBlogStep1;
