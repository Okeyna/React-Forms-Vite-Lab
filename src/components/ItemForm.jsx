import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: ""
  });

  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault();
      onItemFormSubmit(newItem);
      setNewItem({
        id: uuid(),
        name: "",
        category: ""
      });
    }}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={(event) => setNewItem({...newItem, name: event.target.value})} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => setNewItem({...newItem, category: event.target.value})} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;