import React from "react";
import categoryStore from "../stores/categoryStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";

function CategoryItem({ category }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;

  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <img src={category.image} className="card-img-top" alt="NO IMAGE!" />

      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
      </div>
    </div>
  );
}

export default CategoryItem;
