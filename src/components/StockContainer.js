import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.id} stock={stock} setStocks={setStocks} />)}
    </div>
  );
}

export default StockContainer;
