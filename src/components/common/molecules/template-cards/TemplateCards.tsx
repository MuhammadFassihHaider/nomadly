import { SimpleCard } from "@components/common/molecules/simple-card";
import { TTemplateCard } from "src/data/common/templates";

type Props = {
    cards: TTemplateCard[];
};

const TemplateCards = ({ cards }: Props) => {
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

export default TemplateCards;
