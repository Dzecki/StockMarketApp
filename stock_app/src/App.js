import { useState, useEffect } from "react";
import StockChart from './Components/StockChart.js';
import Chart from "chart.js/auto";
import {CategoryScale} from 'chart.js/auto'; 

function App() {
  const [apiData, setApiData] = useState({});
  const [company, setCompany] = useState('AA');
  const [dataRange, setDataRange] = useState({first: '2022-05-26', second: '2023-05-26'});
  const [favCompanies, setFavCompanies] = useState([]);
  const [fav, setFav] = useState('transparent');

  const apiKey = "pQ705m_KgSNXmgtmyQXKBfufdnIrMPOa";
  const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${company}/range/1/day/${dataRange.first}/${dataRange.second}?apiKey=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (e) => {
    setCompany(e.target.value);
    if(!favCompanies.filter((comp) => comp === e.target.value).length > 0) {
      setFav("transparent");
    }
    else {
      setFav("dodgerblue");
    }
  }

  const apiDt = (i) => {
    return apiData.results[i];
  }

  const addFavCompany = () => {
    if(!(favCompanies.filter((comp) => comp === company ).length > 0)) {
      setFavCompanies([...favCompanies, company]);
      setFav("dodgerblue");
    }
    else {
      console.log("Already added");
    }
  }

  const showFavCompany = (e) => {
    setCompany(e.target.value);
    setFav("dodgerblue");
  }

  return (
   <div className="flex flex-col items-center bg-[#0e0d31] h-[100vh] w-[100vw]">
      <input value={company} placeholder="Enter..." className="h-[40px] w-[50%] p-2 outline-none rounded-lg mt-6" onChange={inputHandler}></input>

      {apiData.results ? (
        <div className="flex m-14">
          <div>
            <div className="relative flex flex-col items-center h-[130px] text-white w-[200px] border-2 rounded-lg mr-12">
              <div className="flex  mt-4">
                <button onClick={() => setDataRange({...dataRange, first: '2022-05-26'})} className="bg-transparent w-[50px] font-semibold border-2 border-blue-400 rounded-md">1</button>
                <button onClick={() => setDataRange({...dataRange, first: '2021-05-26'})} className="bg-transparent w-[50px] font-semibold border-2 mx-2 border-blue-400 rounded-md">2</button>
                <button onClick={() => setDataRange({...dataRange, first: '2019-05-26'})} className="bg-transparent w-[50px] font-semibold border-2 border-blue-400 rounded-md">4</button>
              </div>
              <hr className="border mt-5 w-[80%]"></hr>
              <h1 className="font-bold text-white mt-3 text-2xl">{company}</h1>
              <button className="absolute right-5 bottom-6 rotate-45 w-[15px] h-[15px] border-2 border-blue-500" style={{backgroundColor: fav}} onClick={addFavCompany}></button>
            </div>

            <div className="flex flex-col items-center justify-center h-[350px] text-white w-[200px] mt-10 border-2 rounded-lg mr-12">
            {favCompanies.map((p) => <button onClick={showFavCompany} value={p} className="border-2 border-blue-400 w-[70%] p-2 m-3 rounded-md ">{p}</button> )}
            </div>
          </div>

          <StockChart firstRange={dataRange.first} secondRange={dataRange.second} chartData={{
                  labels : ["1/24","2/24","3/24","4/24","5/24","6/24","7/24","8/24","9/24","10/24","11/24","12/24",
                  "13/24","14/24","15/24","16/24","17/24","18/24","19/24","20/24","21/24","22/24","23/24","24/24"],
                          
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
          <div className="text-white tracking-[6px] text-4xl">...</div>
      )}
    </div>
  );
}

export default App;
