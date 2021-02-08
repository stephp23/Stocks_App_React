import axios from "axios";

const Stock_API_Base_Url = `${process.env.STOCK_API_BASE_URL}`;
const Stock_API_Key = `${process.env.STOCK_API_KEY}`;

async function FetchStocksInfo(stockName) {
  
  // in API, 'symbol' is each stock's name in shorthand
  const stockAPIFullUrl = `${Stock_API_Base_Url}/${stockName}/quote?token=${Stock_API_Key}`;
  
  // retrieving full stocks data from API
  const data = await axios.get(stockAPIFullUrl).then(({ data }) => {
    return data;
  });
  // .catch((error) => console.log(error));
  return data;

}

export default FetchStocksInfo;
