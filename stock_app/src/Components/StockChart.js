import { Line } from "react-chartjs-2";

function StockChart({ chartData, firstRange, secondRange}) {
  return (
    <div className="relative border-2 rounded-lg p-4 w-[75vw] h-[520px]" >

    <p className="absolute top-2 right-2 text-white">{firstRange.substring(0, 4)} / {secondRange.substring(0, 4)}</p>

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
    </div>
  );
};

export default StockChart;