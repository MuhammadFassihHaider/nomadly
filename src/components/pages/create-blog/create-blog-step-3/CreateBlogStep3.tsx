import React from "react";
import { CreateBlogCommonFields } from "../create-blog-common-fields";
import { CreateBlogFormHeading } from "../create-blog-form-heading";
import { CreateBlogNameInstructions } from "../create-blog-name-instructions";
import { CreateBlogTemplateItem } from "../create-blog-template-item";
import { CreateBlogTemplateRow } from "../create-blog-template-row";

const CreateBlogStep3 = () => {
    return (
        <div>
            <CreateBlogCommonFields containerClassName="mb-[22px]" />
            <CreateBlogFormHeading text="Generate Talking Points" />
            <div className="flex flex-col space-y-[24px]">
                <CreateBlogTemplateRow label="A Blog Intro will be added here" />
                <div>
                    <CreateBlogTemplateItem
                        label="Pick a Name"
                        content={<CreateBlogNameInstructions />}
                    />
                    <CreateBlogTemplateItem
                        label="Purchase a domain name ( and hosting )"
                        content={<CreateBlogNameInstructions />}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateBlogStep3;
