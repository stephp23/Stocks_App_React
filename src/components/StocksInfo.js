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
  
  const stylesSymbolName = {
    color: "white",
    backgroundColor: "black",
    fontSize:"24px"

  }

  const stylesCompanyName = {
    color: "gray",
    backgroundColor: "black",
    fontSize:"18px",
  }

  const stylesClosingPrice = {
    color: "white",
    backgroundColor: "black",
    fontSize: "22px"

  }

  const stylesPercentChange = {
    color: "blue",
    backgroundColor: "black",
    fontSize: "22px",
  }


  return (
      <div className="stock-name">
        <h2 style={stylesSymbolName}> ${symbol} </h2>
        <h3 style={stylesCompanyName}> {companyName} </h3>
      <div className="stock-marketStanding">
        <h3 style={stylesClosingPrice}>{close}</h3>
        <h3 style={stylesPercentChange}>${changePercent}</h3>
      </div>
      </div>
    
	);
};

export default StocksInfo;