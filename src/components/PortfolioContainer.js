import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, setStocks }) {

  const filteredStocks = stocks.filter((stock) => {
    if (stock.bought) {
      return true
    } else {
      return false
    }
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        filteredStocks.map(stock => {
          return (
            <Stock key={stock.id} setStocks={setStocks} stock={stock} />
          )
        })
      }
    </div>
  );
}

export default PortfolioContainer;
