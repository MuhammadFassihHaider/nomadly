import { CreateBlogCommonFields } from "../create-blog-common-fields";
import { CreateBlogFormHeading } from "../create-blog-form-heading";
import { CreateBlogTemplateRow } from "../create-blog-template-row";
import { RegenerateWithIcon } from "../regenerate-with-icon";

const CreateBlogStep2 = () => {
    return (
        <div>
            <CreateBlogCommonFields containerClassName="mb-[22px]" />
            <CreateBlogFormHeading text="Generate Outline" />
            <div className="flex flex-col space-y-[24px]">
                <CreateBlogTemplateRow label="A Blog Intro will be added here" />
                <CreateBlogTemplateRow
                    hasIcons
                    label="Write a new section..."
                />
                <CreateBlogTemplateRow label="A Blog Conclusion will be added here" />
                <RegenerateWithIcon label="Regenerate All" />
            </div>
        </div>
    );
};

export default CreateBlogStep2;
