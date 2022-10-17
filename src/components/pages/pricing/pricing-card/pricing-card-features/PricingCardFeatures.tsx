import { Check } from "@components/icons";
import { classNames } from "src/utils/helper";
import { TPricing } from "../PricingCard";

type Props = { features: TPricing["features"]; isSelected: boolean };

const PricingCardFeatures = ({ features, isSelected }: Props) => {
    return (
        <div>
            <p
                className={classNames(
                    "font-semibold text-base leading-[20px] mb-[24px] transition",
                    isSelected ? "text-white" : "text-mBlack-1",
                )}
            >
                What’s included
            </p>
            <div className="mb-[42px]">
                {features.map(({ feature, id }) => (
                    <PricingCardFeatureRow
                        key={id}
                        feature={feature}
                        isSelected={isSelected}
                    />
                ))}
            </div>
        </div>
    );
};

type PricingCardFeatureRowProps = {
    feature: string;
    isSelected: boolean;
};

const PricingCardFeatureRow = ({
    feature,
    isSelected,
}: PricingCardFeatureRowProps) => {
    return (
        <div className="flex items-center mb-[16px]">
            <PricingCardFeatureCheck isSelected={isSelected} />
            <p
                className={classNames(
                    "text-base leading-5",
                    isSelected ? "text-white" : "text-mBlack-1",
                )}
            >
                {feature}
            </p>
        </div>
    );
};

const PricingCardFeatureCheck = ({ isSelected }: { isSelected: boolean }) => {
    return (
        <span
            className={classNames(
                "flex items-center justify-center rounded-full px-[7px] py-[8px] max-w-min max-h-min mr-[14px]",
                isSelected ? "bg-white" : "bg-primary",
            )}
        >
            <Check fill={isSelected ? "purple" : "white"} />
        </span>
    );
};

export default PricingCardFeatures;
