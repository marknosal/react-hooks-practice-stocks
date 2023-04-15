import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => {
        const newData = data.map(stock => ({ ...stock, bought: false }))
        setStocks(newData)
      })
  }, [])

  function handleSort(sortType) {
    // const newSort = sortType
    setSort(sortType)
    
    const sortedStocks = sortType === 'Price' ?
    stocks.sort((stock1, stock2) => (stock1.price < stock2.price) ? -1 : (stock1.price > stock2.price) ? 1 : 0) :
    stocks.sort((stock1, stock2) => (stock1.ticker < stock2.ticker) ? -1 : (stock1.ticker > stock2.ticker) ? 1 : 0)
    setStocks(sortedStocks)
    
    console.log('sort state: '+sort+'. Is only here so I can rerender the component.  Its never used, just my work around because I do not have a better idea!')
  }

  function handleFilter(filter) {
    setCategory(filter)
  }
  const filteredStocks = stocks.filter(stock => category === 'All' ? true : category === stock.type ? true : false)

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} setStocks={setStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} setStocks={setStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
