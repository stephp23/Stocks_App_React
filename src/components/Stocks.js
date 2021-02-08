import { useEffect, useState } from "react";
import FetchStocksInfo from "../services/FetchStocks";
import StocksInfo from "../components/StocksInfo";
import FindDifferentStocks from "../components/SearchForStocks";


function Stocks() {
  const [stockNames, setStockNames] = useState([]);
  
  console.log(stockNames);

  useEffect(() => { ( async () => {
      const NASDAQ = await FetchStocksInfo("ndaq");
      const SPY = await FetchStocksInfo("spy");
      const FB = await FetchStocksInfo("fb");
      const SNAP = await FetchStocksInfo("snap");
      setStockNames([NASDAQ, SPY, FB, SNAP]);
    })();
  }, []);
  
  
  // const stock = {
  //   color: "white",
  //   backgroundColor: "black"
  //   fontSize: 24,
  // }
  
  return (
    <div className="stocks-app">
      <h1 style={stockNamesStyles}>Stocks</h1>
      {stockNames.map((indStock, index) => {
        return <StocksInfo {...indStock} key={index} />;
      })}

      <FindDifferentStocks stockNames={stockNames} setStockNames={setStockNames} />
    </div>
  );
}

export default Stocks;