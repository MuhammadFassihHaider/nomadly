import { PricingProps } from "pages/signup/pricing";
import React from "react";
import { PricingCard } from "../pricing-card";

export type TPricings = Pick<PricingProps, "pricings">;

export type PricingCardProps = {
    selectedPricing: number;
    onClickCard: (id: number) => void;
} & TPricings;

const PricingCardContainer = ({
    pricings,
    selectedPricing,
    onClickCard,
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
                />
            ))}
        </div>
    );
};

export default PricingCardContainer;
