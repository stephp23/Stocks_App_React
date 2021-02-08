
import FindDifferentStocks from "../components/SearchForStocks";
  
function StocksInfo({ symbol, companyName, close, changePercent }) {

  // changePercent value is decimal and not a percentage out of 100
  // need to use green for positive percentage change, red for negative loss percentage change
  // for positive change, the value will be greater than zero
  // for negative change, the value will be less than zero
  // Math.sign gives output of 1 if number is positive
  // Math.sign gives output of -1 if number is negative
    
  const percentageChangeColor = Math.sign(changePercent) === 1 ? "green" : "red";
  console.log(Math.sign(changePercent));
  
  const stylesSymbolName = {
    color: "white",
    backgroundColor: "black",
    fontSize:"24px"

  }

  const stylesCompanyName = {
    color: "gray",
    backgroundColor: "black",
    fontSize: "18px",
    display: "flex",
    
  }

  const stylesClosingPrice = {
    color: "white",
    backgroundColor: "black",
    fontSize: "22px"

  }

  return (
      <div className="stock-name">
        <h2 style={stylesSymbolName}> { symbol } </h2>
        <h3 style={stylesCompanyName}> { companyName}  </h3>
      <div className="stock-marketStanding">
          <h3 style={stylesClosingPrice}> { close }</h3>
          <h3 style= {{ backgroundColor: percentageChangeColor }}> { changePercent }%</h3>
      </div>
      </div>
	);
};

export default StocksInfo;