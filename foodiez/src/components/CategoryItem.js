import React from "react";
import categoryStore from "../stores/categoryStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import authStore from "../stores/authStore";

function CategoryItem({ category }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;

  return (
    // <div
    //   className="card col-md-3 card border-primary m-5 "
    //   style={{ width: "16rem;" }}
    // >
    //   <InputGroup.Checkbox checked={check} onChange={handleChange} />
    //   <img src={category.image} className="card-img-top" alt="NO IMAGE!" />

    //   <div className="card-body">
    //     <h5 className="card-title">{category.name}</h5>
    //   </div>
    // </div>
    <>
      <Card className="glassEffect" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={category.image} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>

          {authStore.user ? <Button variant="light">Add Recipe</Button> : <></>}
        </Card.Body>
      </Card>
    </>
  );
}

export default CategoryItem;
