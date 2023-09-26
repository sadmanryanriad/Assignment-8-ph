import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({card}) => {

    const {square_pic, title,category,category_bg,card_bg,text,price} = card;

    const colorVariants = {
        '#0052FF' : 'text-[#0052FF]',
        '#FF444A' : 'text-[#FF444A]',
        '#79C23F' : 'text-[#79C23F]',
        '#F87147' : 'text-[#F87147]',

        '#0052FF26' : 'bg-[#0052FF26]',
        '#FF444A26' : 'bg-[#FF444A26]',
        '#79C23F26' : 'bg-[#79C23F26]',
        '#F8714726' : 'bg-[#F8714726]',

        '#0052FF33' : 'bg-[#0052FF33]',
        '#FF444A33' : 'bg-[#FF444A33]',
        '#79C23F33' : 'bg-[#79C23F33]',
        '#F8714733' : 'bg-[#F8714733]',
      }
      const colorVariants2 = {
        '#0052FF' : 'bg-[#0052FF]',
        '#FF444A' : 'bg-[#FF444A]',
        '#79C23F' : 'bg-[#79C23F]',
        '#F87147' : 'bg-[#F87147]',
      }

    return (

        <div className='flex '>
            <div className=''>
                <img className='max-w-full' src={square_pic} alt="" />
            </div>
            <div className={`${colorVariants[card_bg]} px-6 flex flex-col flex-grow justify-center rounded-r-lg`}>
                <p className={`md:mb-2  text-sm font-[500] ${colorVariants[text]} ${colorVariants[category_bg]} max-w-fit px-3 py-1 rounded-md`}>{category}</p>
                <h3 className='md:mb-2 font-semibold'>{title}</h3>
                <h5 className={`md:mb-4 ${colorVariants[text]} font-semibold`}>{price}</h5>
                <Link><button className={`px-2 md:px-4 py-2 rounded-lg w-36 font-semibold text-lg text-white ${colorVariants2[text]}`}>View Details</button></Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    card: PropTypes.object
}

export default DonationCard;