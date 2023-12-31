import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array
}

export default Cards;