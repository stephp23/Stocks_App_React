import './App.css';
import { useState } from "react";
import Receipt from "./components/Receipt";
import receiptsData from "./data/recordsReceipts";
import Header from "./components/Header";

function App() {
  const [receipts, setReceipts] = useState(receiptsData);
  return (
    <div className="App-header">
      <Header />

      <main>
        <div className="receipt-information">
            {receipts.map((indOrder, index) => {
              return <Receipt key={`${index} Receipt`} {...indOrder}  />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;