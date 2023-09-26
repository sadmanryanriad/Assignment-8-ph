import PieChartPic from "../PieChart/PieChartPic";

const Statistics = () => {
    return (
        <div>
            <h3>This is statistics</h3>
            <div className="flex justify-center w-[100px] md:w-[500px] mx-auto">
            <PieChartPic></PieChartPic>
            </div>
        </div>
    );
};

export default Statistics;