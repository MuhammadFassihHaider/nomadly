import { Dropdown } from "@components/common/atoms/dropdown";
import { Input } from "@components/common/atoms/input";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    containerClassName?: string;
};

const CreateBlogCommonFields = ({ containerClassName }: Props) => {
    return (
        <div
            className={classNames(
                "flex flex-col space-y-[23px]",
                containerClassName,
            )}
        >
            <Input
                label={"Blog Title"}
                inputProps={{
                    placeholder: "Title here",
                }}
            />
            <Input
                label={"Keyword"}
                inputProps={{
                    placeholder: "Keyword here",
                }}
            />
            <Dropdown items={[]} label={"Tone"} placeholder="Keyword here" />
            <Dropdown items={[]} label={"Goal"} placeholder="Keyword here" />
        </div>
    );
};

export default CreateBlogCommonFields;
