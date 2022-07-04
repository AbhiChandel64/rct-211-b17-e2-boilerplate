import React, { useState } from "react";

const Filter = ({ categories, setCategories }) => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  const [localCategories, setLocalCategories] = useState(categories);

  const updateCategory = (category) => {
    const index = localCategories.indexOf(category);
    let updateCategories = [];
    if (index > -1) {
      updateCategories = [...localCategories];
      updateCategories.splice(index, 1);
    } else {
      updateCategories = [...localCategories, category];
    }
    const distinct = new Set(updateCategories);
    updateCategories = [...distinct];

    setLocalCategories(updateCategories);
    setCategories(updateCategories);
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            checked={localCategories.includes("Sneakers")}
            onChange={() => updateCategory("Sneakers")}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            checked={localCategories.includes("Loafers")}
            onChange={() => updateCategory("Loafers")}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            checked={localCategories.includes("Canvas")}
            onChange={() => updateCategory("Canvas")}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            checked={localCategories.includes("Boots")}
            onChange={() => updateCategory("Boots")}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
