import { useLoaderData } from "react-router-dom";
import DonationCard from "../Cards/DonationCard";
import { useEffect, useState } from "react";
import { getLocalStorageDonationId } from "../../Utilities/localStorage";

const Donation = () => {
    const cards = useLoaderData();
    const [flag, setFlag] = useState(true);
    const [display, setDisplay] = useState([]);


    useEffect(() => {
        const LocalStoredData = getLocalStorageDonationId();
        const showCard = cards.filter(card => LocalStoredData.includes(card.id));
        setDisplay(showCard);
    }, [cards])

    function handleSeeButton() {
        setFlag(!flag);
    }

    return (
        <div>
            {display ?
                <div>
                    <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            flag ? display.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>) :
                                display.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                    <div className="flex mt-8">
                        <button onClick={handleSeeButton} className={`btn w-28 btn-success mx-auto mb-10 text-white ${flag ? '' : 'hidden'}`}>
                            See All
                        </button>
                    </div>
                </div>
                :
                <p className="text-5xl flex justify-center h-[80vh] items-center">No data found. <span className="text-red-500">Donate first!</span></p>
            }
        </div>
    );
};

export default Donation;
