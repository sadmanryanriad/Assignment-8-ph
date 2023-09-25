
const Banner = () => {
    return (
        <div className="hero min-h-[600px] mb-10 md:mb-20" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                {/* max-w-md */}
                <div className=" text-black">
                    <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs" />
                        <button className="btn bg-[#FF444A] text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;