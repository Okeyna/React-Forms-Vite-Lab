import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setItemsList(items);
    } else {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setItemsList(filteredItems);
    }
  };

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const onItemFormSubmit = (newItem) => {
    if (newItem.name === "" || newItem.category === "") return;
    setItemsList([...itemsList, newItem]);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;