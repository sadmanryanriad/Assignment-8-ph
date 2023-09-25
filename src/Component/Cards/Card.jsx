import PropTypes from 'prop-types';
//https://youtu.be/guh9qzxkb1o?si=ljMXJib1rQYg18pz&t=93
const Card = ({card}) => {

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

    return (
        <div className="mx-auto">
            <div className={`card card-compact w-[300px] ${colorVariants[card.card_bg]} shadow-xl`}>
                <figure><img className="w-full" src="https://i.ibb.co/mF80nL9/Health.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className={`text-sm font-[500] ${colorVariants[card.text]} ${colorVariants[card.category_bg]} max-w-fit px-3 py-1 rounded-md`}>{card.category}</p>
                    <h2 className={`card-title text-xl font-[600] ${colorVariants[card.text]}`}>{card.title}</h2>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;



// Don’t use props to build class names dynamically

// function Button({ color, children }) {
//   return (
//     <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>
//       {children}
//     </button>
//   )
// }
// Instead, map props to complete class names that are statically detectable at build-time:

// Always map props to static class names

// function Button({ color, children }) {
//   const colorVariants = {
//     blue: 'bg-blue-600 hover:bg-blue-500',
//     red: 'bg-red-600 hover:bg-red-500',
//   }

//   return (
//     <button className={`${colorVariants[color]} ...`}>
//       {children}
//     </button>
//   )
// }