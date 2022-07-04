import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";

import { getShoes } from "../Redux/AppReducer/action";
import SingleShoe from "./SingleShoe";

const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes } = useSelector((d) => d.appReducer);

  const [categories, setCategories] = useState(["Sneakers"]);

  useEffect(() => {
    getShoes()(dispatch);
  }, []);

  return (
    <div>
      <Filter categories={categories} setCategories={setCategories} />
      <div style={{ display: "flex", flexFlow: "wrap" }}>
        {shoes
          .filter((shoe) => categories.includes(shoe.category))
          .map((shoe) => (
            <SingleShoe {...shoe} />
          ))}
      </div>
    </div>
  );
};

export default Shoes;
