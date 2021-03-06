import React from "react";

const SingleShoe = ({ id, name, image, category }) => {
  return (
    <div
      id={id}
      onClick={() => (window.location.href = `/shoes/${id}`)}
      style={{ marginRight: "10px", cursor: "pointer" }}
    >
      <h2>Shoe name</h2>
      <div>
        <img
          src={image}
          alt="Cover Pic"
          style={{ width: "300px", height: "150px" }}
        />
      </div>
      <div>
        <div>{name}</div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
