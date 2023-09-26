import { PieChart, Pie, Cell } from "recharts";
import PropTypes from 'prop-types';

const PieChartPic = ({storedIdLength}) => {
const data = [
  { name: 'Total Donation', value: 12 },
  { name: 'Your Donation', value: storedIdLength },
];
const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
                <PieChart width={360} height={400}>
      <Pie
        data={data}
        cx={175}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    );
};

PieChartPic.propTypes = {
  storedIdLength: PropTypes.number
}

export default PieChartPic;