import PieChartPic from "../PieChart/PieChartPic";
import { getLocalStorageDonationId } from "../../Utilities/localStorage";

const Statistics = () => {


        const storedIdLength = getLocalStorageDonationId().length;

    return (
        <div>
            <div className="flex justify-center w-[100px] mx-auto">
                <PieChartPic storedIdLength={storedIdLength}></PieChartPic>
            </div>
            <div className="flex gap-10 items-center w-fit mx-auto text-xs md:text-lg">
                <div className="flex gap-3 items-center">
                <div>Your Donation</div>
                <div className="bg-[#00C49F] w-8 md:w-16 h-3"></div>
                </div>
                <div className="flex gap-3 items-center">
                <div>Total Donation</div>
                <div className="bg-[#FF444A] w-8 md:w-16 h-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;