import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";

function StockChart({ chartData, firstRange, secondRange}) {
  const [changeChart, setChangeChart] = useState(true);

  return (
    <div className="relative border-2 rounded-lg p-8 w-[67vw] h-[520px]" >

    <p className="absolute top-2 right-2 text-white">{firstRange.substring(0, 4)} / {secondRange.substring(0, 4)}</p>
    <button className="w-[25px] h-[25px] border-2 rounded-full" onClick={() => setChangeChart(changeChart ? false : true)}></button>

    {changeChart ? (
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    ) : (
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
      />)};
    </div>
  );
};

export default StockChart;