import { SimpleCard } from "@components/common/molecules/simple-card";
import { TTemplateCard } from "src/data/pages/dashboard";

type Props = {
    cards: TTemplateCard[];
};

const DashboardTemplatesCards = ({ cards }: Props) => {
    return (
        <>
            {cards.map((card) => (
                <SimpleCard
                    key={card.id}
                    heading={card.heading}
                    description={card.description}
                    icon={card.icon}
                    isPopular={card.isPopular}
                />
            ))}
        </>
    );
};

export default DashboardTemplatesCards;
