import React, { useState } from "react";
import "./ItemListManager.css"; // Import CSS file

function ItemListManager() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h1><b>Item List</b></h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;