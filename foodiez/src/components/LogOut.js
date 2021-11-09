import React from "react";
import authStore from "../stores/authStore";
import Button from "react-bootstrap/Button";

function LogOut() {
  // REVIEW: Since it's not a form, you call your function `handleClick` AND you dont need preventDefault

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.logout();
  };
  return (
    // REVIEW: Remove the div tag if you don't need it
    <div>
      <Button variant="light" className="logout" onClick={handleSubmit}>
        Log Out
      </Button>
    </div>
  );
}

export default LogOut;
