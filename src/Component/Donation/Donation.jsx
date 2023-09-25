import { useLoaderData } from "react-router-dom";
import DonationCard from "../Cards/DonationCard";

const Donation = () => {
    const cards = useLoaderData();
    return (
        <div>
            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)}

            </div>
            <div className="flex mt-8">
            <button className="btn w-28 btn-success mx-auto mb-10">See All</button>
            </div>
        </div>
    );
};

export default Donation;