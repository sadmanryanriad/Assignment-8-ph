import PropTypes from 'prop-types';
const DonationCard = ({cards}) => {
    const {square_pic} = cards[0];
    return (
        <div className='flex '>
            <div className=''>
                <img className='max-w-full' src={square_pic} alt="" />
            </div>
            <div className='bg-[#0052FF26] px-6 flex flex-col flex-grow justify-center '>
                <p className='md:mb-2  text-sm font-[500] text-[#0052FF] bg-[#0052FF33] max-w-fit px-3 py-1 rounded-md'>Health</p>
                <h3 className='md:mb-2 font-semibold'>Clean Water for Children</h3>
                <h5 className='md:mb-4 text-[#0052FF] font-semibold'>$200</h5>
                <button className='px-2 md:px-4 py-2 rounded-lg w-36 font-semibold text-lg text-white bg-[#0052FF]'>View Details</button>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    cards: PropTypes.array
}

export default DonationCard;