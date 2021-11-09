import React from "react";
import categoryStore from "../stores/categoryStore";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <Link to={`/categoryList/${category.slug}`}>
        <img src={category.image} className="card-img-top" alt="NO IMAGE!" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
      </div>
    </div>
  );
}

export default CategoryItem;
