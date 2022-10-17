import { CreateBlogCommonFields } from "../create-blog-common-fields";
import { CreateBlogFormHeading } from "../create-blog-form-heading";
import { CreateBlogTemplateItem } from "../create-blog-template-item";

const CreateBlogStep4 = () => {
    const content = (
        <p className="text-sm text-mGray-3 leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
        </p>
    );
    return (
        <div>
            <CreateBlogCommonFields containerClassName="mb-[22px]" />
            <CreateBlogFormHeading text="Generate Content" />
            <CreateBlogTemplateItem
                onlyRegenrate
                label="Introduction"
                content={content}
            />
            <CreateBlogTemplateItem
                onlyRegenrate
                label="Pick a Name"
                content={content}
            />
        </div>
    );
};

export default CreateBlogStep4;
