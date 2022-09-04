import { NoteDown, PlusFilled, RefreshDouble } from "@components/icons";
import { CreateBlogTemplateItemProps } from "./CreateBlogTemplateItem";

const IconWithLabel = ({
    icon,
    label,
}: {
    icon: JSX.Element;
    label: string;
}) => {
    return (
        <div className="flex items-center space-x-[5px] cursor-pointer">
            {icon}
            <p className="text-mGray-2 group-hover:text-primary text-sm leading-[21px]">
                {label}
            </p>
        </div>
    );
};

export const CreateBlogTemplateItemFooter = ({
    onlyRegenrate,
}: Pick<CreateBlogTemplateItemProps, "onlyRegenrate">) => {
    return (
        <div className="flex items-center space-x-[24px]">
            {!onlyRegenrate && (
                <IconWithLabel
                    icon={
                        <PlusFilled containerClassName="pl-[4px] p-[4px] bg-mGray-2 group-hover:bg-primary" />
                    }
                    label="Add Talking Point"
                />
            )}
            {!onlyRegenrate && (
                <IconWithLabel
                    icon={
                        <NoteDown className="fill-mGray-2 group-hover:fill-primary" />
                    }
                    label="Generate More"
                />
            )}
            <IconWithLabel
                icon={
                    <RefreshDouble className="fill-mGray-2 group-hover:fill-primary w-[16px] h-[14px]" />
                }
                label="Regenerate"
            />
        </div>
    );
};
