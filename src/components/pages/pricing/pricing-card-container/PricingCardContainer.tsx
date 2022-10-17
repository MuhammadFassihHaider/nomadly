import { TEBusinessPlan } from "@redux/api/authApi/authApi.types";
import { PricingProps } from "pages/business/pricing";
import React from "react";
import { PricingCard } from "../pricing-card";

export type TPricings = Pick<PricingProps, "pricings">;

export type PricingCardProps = {
    selectedPricing: TEBusinessPlan;
    onClickCard: (id: TEBusinessPlan) => void;
    onClickNextButton: () => void;
} & TPricings;

const PricingCardContainer = ({
    pricings,
    selectedPricing,
    onClickCard,
    onClickNextButton,
}: PricingCardProps) => {
    return (
        <div className="flex gap-[30px] justify-center">
            {pricings.map(({ description, id, header, features, pricing }) => (
                <PricingCard
                    key={id}
                    id={id}
                    header={header}
                    pricing={pricing}
                    features={features}
                    description={description}
                    isSelected={selectedPricing === id}
                    onClickCard={onClickCard}
                    onClickNextButton={onClickNextButton}
                />
            ))}
        </div>
    );
};

export default PricingCardContainer;
