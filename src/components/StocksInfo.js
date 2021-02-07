
//need to import css
import FindDifferentStocks from "../components/SearchForStocks";
  
function StocksInfo({ symbol, companyName, close, changePercent }) {

  // changePercent value is decimal and not a percentage out of 100
  // need to use green for positive percentage change, red for negative loss percentage change


  // const lossOrGainStockPercentage = changePercent === 1 ? "green" : "red";
  //                              = changePercent < 0 ? "red" : "green";
  // console.log(Math.sign(changePercent));

  // const trueStockValuePercentChange = `(${(Math.sign(changePercent))})`
  // console.log(trueStockValuePercentChange)
  // const percentageColor 
  // console.log(percentageColor);
  // console.log(changePercent) 
  
  return (
      <div className="stock-name">
        <h2 color="white"> ${symbol} </h2>
        <h3 className="stockNameCompany">{companyName} </h3>
      <div className="stock-marketStanding">
        <h3 className="stock-marketValue">{close}</h3>
        <h3 style={{  backgroundColor: "red" } }>${changePercent}</h3>
      </div>
      </div>
    
	);
};

export default StocksInfo;