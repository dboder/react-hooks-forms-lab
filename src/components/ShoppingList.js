import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, callbackCreateItem }) {
  const [filterData, setfilterData] = useState(
    {filter: "All",
    search:""});
  

  function handleFilterData(event) {
    console.log("handleFilterData","event.target.name",event.target.name);
    setfilterData({
      ...filterData,
      [event.target.name]: event.target.value,
    });
  }

  

  const itemsToDisplay = items.filter((item) => {
    let searchName = filterData.search.toLowerCase();
    let lowerItemName = item.name.toLowerCase();

    if (filterData.filter === "All" && searchName.length === 0) return true;
    else if (filterData.filter !== "All" && searchName.length === 0) return item.category === filterData.filter;
    else if (filterData.filter === "All" && searchName.length >= 1) return lowerItemName.match(searchName) != null;
    return (item.category === filterData.filter && lowerItemName.match(searchName) != null);
  });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={callbackCreateItem} />
      <Filter onSearchChange={handleFilterData} search={filterData.search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
