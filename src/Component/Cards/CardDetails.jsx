import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorageDonationId, saveToLocalStorage } from "../../Utilities/localStorage";

const CardDetails = () => {
    const cards = useLoaderData();


    const { id } = useParams();

    const cardToShow = cards.find(card => card.id == id);
    const { picture, price, title, description, text } = cardToShow;

    const colorVariants = {
        '#0052FF': 'bg-[#0052FF]',
        '#FF444A': 'bg-[#FF444A]',
        '#79C23F': 'bg-[#79C23F]',
        '#F87147': 'bg-[#F87147]',
    }

    function handleDonateButton() {
        const intId = parseInt(id);

        const storedId = getLocalStorageDonationId();

        const alreadyExist = storedId.find(donationId => donationId === intId);

        if (!alreadyExist) {
            saveToLocalStorage(intId);
            toast("Donated Successfully");
        }
        else{
            toast.error('Already Donated');
        }
    }

    return (
        <div>
            <div className="max-w-6xl mx-auto my-10">
                {/* overlay */}
                <div className=" relative">
                    <img className="w-full" src={picture} alt="" />
                    <div className=" absolute bottom-0 h-28 bg-gray-900 w-full bg-opacity-60">
                        <div className="flex ml-5 mt-8">
                            {/* <Link className={`px-5 py-3 ${colorVariants[text]} text-white rounded-sm`} >Donate {price}</Link> */}
                            <button onClick={handleDonateButton} className={`px-5 py-3 ${colorVariants[text]} text-white rounded-sm`} >Donate {price}</button>
                        </div>
                    </div>
                </div>
                {/* description */}
                <h1 className="text-4xl font-semibold mt-12 mb-6">{title}</h1>
                <p className="text-base mb-28">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;