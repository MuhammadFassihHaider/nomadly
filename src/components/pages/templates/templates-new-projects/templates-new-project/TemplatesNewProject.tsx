import { SimpleCardTemplate } from "@components/common/templates/simple-card-template";
import { ArrowRight } from "@components/icons";
import React from "react";
import { classNames } from "src/utils/helper";

type Props = {
    icon: JSX.Element;
    iconBg: string;
    heading: string;
    description: string;
};

const TemplatesNewProject = ({ description, heading, icon, iconBg }: Props) => {
    return (
        <SimpleCardTemplate containerClassName="flex flex-col items-center justify-center px-[20px] py-[26px]">
            <div
                className={classNames(
                    "flex items-center justify-center rounded-full w-[35px] h-[35px] mb-[19px]",
                    iconBg,
                )}
            >
                {icon}
            </div>
            <p className="text-sm text-mBlack-0 mb-[12px] text-center">
                {heading}
            </p>
            <p className="text-xs text-mGray-8 text-center mb-[24px]">
                {description}
            </p>
            <ArrowRight />
        </SimpleCardTemplate>
    );
};

export default TemplatesNewProject;
