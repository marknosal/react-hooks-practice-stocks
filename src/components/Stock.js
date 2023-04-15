import React from "react";

function Stock({ stock, setStocks }) {
  const { ticker, name, price } = stock

  // const [purchased, setPurchased] = useState(false)


  function handleBuyClick() {
    // setPurchased(purchased => !purchased)

    setStocks(stocks => {
      return stocks.map(stock => {
        if (stock.name === name) {
          stock.bought = !stock.bought
          return stock
        }
        return stock
      })
    })
  }




  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleBuyClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
