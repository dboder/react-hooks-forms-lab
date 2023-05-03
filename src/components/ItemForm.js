import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemFormData, setItemFormData] = useState(
    {id: uuid(), // the `uuid` library can be used to generate a unique id
    name: "",
    category: "Product"});

  function changeItemFormInfo(event) {
    console.log("changeItemFormInfo","event.target.name",event.target.name);
    setItemFormData({
      ...itemFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(itemFormData);
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={changeItemFormInfo}/>
      </label>

      <label>
        Category:
        <select name="category"  onChange={changeItemFormInfo}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit"  >Add to List</button>
    </form>
  );
}

export default ItemForm;
