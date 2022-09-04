import { useState } from "react";
import { CreateBlogTemplateItemFooter } from "./CreateBlogTemplateItemFooter";
import { CreateBlogTemplateItemHeader } from "./CreateBlogTemplateItemHeader";

export type CreateBlogTemplateItemProps = {
    label: string;
    content: JSX.Element;
    onlyRegenrate?: boolean;
};

const CreateBlogTemplateItem = ({
    content,
    label,
    onlyRegenrate = false,
}: CreateBlogTemplateItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-[13px] border border-transparent rounded-md hover:border-primary group transition-all transition-300">
            <CreateBlogTemplateItemHeader
                isOpen={isOpen}
                label={label}
                setIsOpen={setIsOpen}
            />
            <div className="mb-[5px] mt-[8px]">{content}</div>
            {isOpen && (
                <CreateBlogTemplateItemFooter onlyRegenrate={onlyRegenrate} />
            )}
        </div>
    );
};

export default CreateBlogTemplateItem;
