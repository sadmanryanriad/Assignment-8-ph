import { useLoaderData } from "react-router-dom";
import DonationCard from "../Cards/DonationCard";
import { useState } from "react";

const Donation = () => {
    const cards = useLoaderData();
    const [flag, setFlag] = useState(true);

    function handleSeeButton() {
        setFlag(!flag);
    }

    return (
        <div>
            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    flag ? cards.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>) :
                        cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }

            </div>
            <div className="flex mt-8">
                <button onClick={handleSeeButton} className="btn w-28 btn-success mx-auto mb-10 text-white">{flag ? 'See All' : 'See less'}</button>
            </div>
        </div>
    );
};

export default Donation;