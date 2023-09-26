import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

const Home = () => {

    const [inputText, setInputText] = useState('');
    const [newCards, setNewCards] = useState([]);

    const cards = useLoaderData();
    useEffect(()=>{
        const tempCards = cards.filter(card=> card.category.toLowerCase() == inputText.toLowerCase());
        setNewCards(tempCards);
    },[cards, inputText])

    return (
        <div>
            <Banner setInputText={setInputText}></Banner>
            {newCards.length? <Cards cards={newCards}></Cards> : <Cards cards={cards}></Cards>}
            
        </div>
    );
};

export default Home;