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
      <img src={category.image} className="card-img-top" alt="NO IMAGE!" />
      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>

       {/*  <Link to={`/categoryList/${category.slug}`}>
          <button className="btn btn-primary">Go to Details</button>
        </Link> */}
      </div>
    </div>
  );
}

export default CategoryItem;
