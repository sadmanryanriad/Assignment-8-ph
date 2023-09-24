const Card = () => {
    return (
        <div className="mx-auto">
            <div className="card card-compact w-[300px] bg-[#FF444A26] shadow-xl">
                <figure><img className="w-full" src="https://i.ibb.co/mF80nL9/Health.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-sm font-[500] text-[#FF444A] bg-[#FF444A33] max-w-fit px-3 py-1 rounded-md">Education</p>
                    <h2 className="card-title text-xl font-[600] text-[#FF444A]">Good Education</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;