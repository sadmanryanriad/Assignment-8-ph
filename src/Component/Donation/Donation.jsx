import { useLoaderData } from "react-router-dom";
import DonationCard from "../Cards/DonationCard";

const Donation = () => {
    const cards = useLoaderData();
    return (
        <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <DonationCard cards={cards}></DonationCard>
            <DonationCard cards={cards}></DonationCard>
            <DonationCard cards={cards}></DonationCard>
        </div>
    );
};

export default Donation;