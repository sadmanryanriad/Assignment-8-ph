
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px] mb-10 md:mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/x2MVZN7/Rectangle-4288.png)' }}>
                <div className="hero-overlay bg-opacity-95 bg-white"></div>
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
        </div>
    );
};

export default Banner;