import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";

import { getShoes } from "../Redux/AppReducer/action";
import SingleShoe from "./SingleShoe";

const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes } = useSelector((d) => d.appReducer);

  useEffect(() => {
    getShoes()(dispatch);
  }, []);

  return (
    <div>
      <Filter />
      <div style={{ display: "flex", flexFlow: "wrap" }}>
        {shoes.map((data) => (
          <SingleShoe {...data} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
