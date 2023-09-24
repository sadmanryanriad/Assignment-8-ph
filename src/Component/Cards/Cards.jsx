import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array
}

export default Cards;