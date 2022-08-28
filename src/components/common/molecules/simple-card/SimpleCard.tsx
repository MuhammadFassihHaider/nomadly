import { PopularLabel } from "@components/common/atoms/popular-label";
import { SimpleCardTemplate } from "@components/common/templates/simple-card-template";
import { ComponentProps } from "react";

type Props = {
    icon: (props: ComponentProps<"svg">) => JSX.Element;
    heading: string;
    description: string;
    isPopular?: boolean;
};

const SimpleCard = ({
    description,
    heading,
    isPopular = false,
    icon: Icon,
}: Props) => {
    return (
        <SimpleCardTemplate
            containerClassName="flex flex-col text-sm leading-[21px]"
            size="sm"
        >
            {isPopular && <PopularLabel />}
            <Icon className="mb-[10px]" />
            <h3 className="text-mBlack-0 mb-[12px]">{heading}</h3>
            <p className="text-[#6D7787]">{description}</p>
        </SimpleCardTemplate>
    );
};

export default SimpleCard;
