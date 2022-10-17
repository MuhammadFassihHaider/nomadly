import { Button } from "@components/common/atoms/button";
import { TEBusinessPlan } from "@redux/api/authApi/authApi.types";
import { classNames } from "src/utils/helper";
import { TPricings } from "../pricing-card-container/PricingCardContainer";
import { PricingCardDescription } from "./pricing-card-description";
import { PricingCardFeatures } from "./pricing-card-features";
import { PricingCardHeader } from "./pricing-card-header";
import { PricingCardPrice } from "./pricing-card-price";
import { PricingCardTag } from "./pricing-card-tag";

export type TPricing = TPricings["pricings"][0];
type Props = TPricing & {
    isSelected: boolean;
    onClickCard: (id: TEBusinessPlan) => void;
    onClickNextButton: () => void;
};
const PricingCard = ({
    id,
    header,
    pricing,
    features,
    description,
    isSelected,
    onClickCard,
    onClickNextButton,
}: Props) => {
    return (
        <div
            onClick={() => onClickCard(id)}
            className={classNames(
                "w-[394px] h-[660px] rounded-3xl shadow-lg px-[43px] py-[32px] cursor-pointer relative",
                id === "1" ? "-mt-[50px]" : "",
                isSelected ? "bg-primary" : "bg-white",
            )}
        >
            <PricingCardHeader
                for={header.for}
                pricingModule={header.pricingModule}
                isSelected={isSelected}
            />
            <PricingCardDescription
                description={description}
                isSelected={isSelected}
            />
            <PricingCardPrice
                per={pricing.per}
                price={pricing.price}
                isSelected={isSelected}
            />
            <PricingCardFeatures features={features} isSelected={isSelected} />
            <Button
                fullWidth
                variant={isSelected ? "outline" : "primary"}
                onClick={onClickNextButton}
            >
                Get Started
            </Button>
            <PricingCardTag isSelected={isSelected} />
        </div>
    );
};

export default PricingCard;
