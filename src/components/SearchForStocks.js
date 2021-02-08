import { useState } from "react";
// services
import FetchStocksInfo from "../services/FetchStocks";

function FindDifferentStocks({ setStockNames, stockNames }) {

  const [searchDifferentStock, setSearchDifferentStock] = useState("");
    
  const StockDataChange = (event) => {
    setSearchDifferentStock(event.target.value);
  };
 
  const StockDataChangeInput = async () => {
    const stockName = await FetchStocksInfo(searchDifferentStock);
    console.log(stockName);
    setSearchDifferentStock("");

    setStockNames([...stockNames, stockName]);

  };
  

    return (
      <div className="stock-search">
        <input
              type="text"
              onChange={StockDataChange}
              value={searchDifferentStock}
              placeholder="Search">
        </input>
        <button type="submit"
          onClick={StockDataChangeInput}>Search</button>
      </div>
	);
}

export default FindDifferentStocks;
