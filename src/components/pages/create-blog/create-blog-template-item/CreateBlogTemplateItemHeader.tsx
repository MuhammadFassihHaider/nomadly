import { Cross, EquiTriangleFilled } from "@components/icons";
import { classNames } from "src/utils/helper";
import { CreateBlogTemplateItemProps } from "./CreateBlogTemplateItem";

export const CreateBlogTemplateItemHeader = ({
    label,
    isOpen,
    setIsOpen,
}: Pick<CreateBlogTemplateItemProps, "label"> & {
    isOpen: boolean;
    setIsOpen: TSetState<boolean>;
}) => {
    return (
        <div className="flex items-center justify-between">
            <EquiTriangleFilled
                onClick={() => setIsOpen(!isOpen)}
                className={classNames(
                    "fill-primary mr-[9px] cursor-pointer",
                    isOpen ? "" : "transform -rotate-90",
                )}
            />
            <p className="flex-1 text-primary leading-[24px]">{label}</p>
            <Cross className="fill-primary cursor-pointer invisible group-hover:visible" />
        </div>
    );
};
