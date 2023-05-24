import { Line } from "react-chartjs-2";

function StockChart({ chartData }) {
  return (
    <div className="border mt-4 w-[75vw] h-[600px]" >
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