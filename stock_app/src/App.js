import { useState, useEffect } from "react";
import StockChart from './Components/StockChart.js';
import Chart from "chart.js/auto";
import {CategoryScale} from 'chart.js/auto'; 

function App() {
  const [apiData, setApiData] = useState({});
  const [company, setCompany] = useState('AA');

  const apiKey = "pQ705m_KgSNXmgtmyQXKBfufdnIrMPOa";
  const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${company}/range/1/day/2022-01-01/2023-01-01?apiKey=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (e) => {
    setCompany(e.target.value);
  }

  const apiDt = (i) => {
    return apiData.results[i];
  }

  return (
   <div className="flex flex-col items-center bg-[#0e0d31] h-[100vh] w-[100vw]">
      <input value={company} placeholder="Enter..." className="h-[40px] w-[50%] p-2 outline-none rounded-lg mt-6" onChange={inputHandler}></input>
      
      {apiData.results ? (
        <div>
          <StockChart chartData={{
                  labels : ["January", "January", "February", "February", "March", "March", "April", "April", "May", "May", "June", "June", "July", "July", 
                  "August", "August", "September", "September", "Ocober", "Ocober", "November", "November", "December", "December"], 
                          
                  datasets: [
                      {
                        label: "MAX VALUE",
                        data: [apiDt(10).h, apiDt(20).h, apiDt(30).h, apiDt(40).h, apiDt(50).h, apiDt(60).h, apiDt(70).h, apiDt(80).h, apiDt(90).h, 
                              apiDt(100).h, apiDt(110).h, apiDt(120).h, apiDt(130).h, apiDt(140).h, apiDt(150).h, apiDt(160).h, apiDt(170).h, apiDt(180).h, apiDt(190).h, apiDt(200).h, apiDt(210).h, apiDt(220).h, apiDt(230).h, apiDt(240).h],
                        backgroundColor: [
                          'rgba(125, 255, 255, 0.9)'
                        ],
                        borderColor: 'rgb(53, 162, 235)',
                        borderWidth: 2,
                      },

                      {
                        label: 'MIN VALUE',
                        data: [apiDt(10).l, apiDt(20).l, apiDt(30).l, apiDt(40).l, apiDt(50).l, apiDt(60).l, apiDt(70).l, apiDt(80).l, apiDt(90).l, 
                          apiDt(100).l, apiDt(110).l, apiDt(120).l, apiDt(130).l, apiDt(140).l, apiDt(150).l, apiDt(160).l, apiDt(170).l, apiDt(180).l, apiDt(190).l, apiDt(200).l, apiDt(210).l, apiDt(220).l, apiDt(230).l, apiDt(240).l],
                        backgroundColor: [
                          'rgba(125, 155, 155, 0.9)'
                        ],
                        borderColor: 'rgba(125, 155, 155, 0.9)',
                        borderWidth: 2,
                      }
                    ]
            }}/>
        </div>
      ) : (
          <div>S</div>
      )};
    </div>
  );
}

export default App;
