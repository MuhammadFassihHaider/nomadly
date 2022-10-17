import { AuthHeading } from "@components/common/atoms/auth-heading";
import { Logo } from "@components/common/atoms/logo";
import { AuthSubheading } from "@components/common/atoms/auth-subheading";
import { Switch } from "@components/common/atoms/switch";
import { PagePaddingsTemplate } from "@components/common/templates/page-paddings-template";
import { PricingCardContainer } from "@components/pages/pricing/pricing-card-container";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useCallback, useState } from "react";
import { Pricings } from "src/data/pages/pricings";

export type PricingProps = InferGetStaticPropsType<typeof getStaticProps>;
type TReturnGetStaticProps = {
    pricings: typeof Pricings;
};

const Pricing = ({ pricings }: PricingProps) => {
    const [selectedPricing, setSelectedPricing] = useState(-1);

    const onClickPricingCard = useCallback((cardId: number) => {
        setSelectedPricing(cardId);
    }, []);

    return (
        <PagePaddingsTemplate top="small">
            <Logo isCenter className="mb-[28px]" />
            <AuthHeading
                text={"Simple, transparent pricing"}
                className="mb-[18px]"
            />
            <AuthSubheading
                text={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat."
                }
            />
            <div className="mt-[35px]">
                <div className="flex justify-center mb-[126px]">
                    <Switch
                        checked
                        onChange={() => {
                            /**do nothing */
                        }}
                        leftLabel="Monthly"
                        rightLabel="Annually"
                        size="lg"
                    />
                </div>
                {pricings && (
                    <PricingCardContainer
                        pricings={pricings}
                        selectedPricing={selectedPricing}
                        onClickCard={onClickPricingCard}
                    />
                )}
            </div>
        </PagePaddingsTemplate>
    );
};

export const getStaticProps: GetStaticProps<TReturnGetStaticProps> = () => {
    return {
        props: {
            pricings: Pricings,
        },
    };
};

export default Pricing;
