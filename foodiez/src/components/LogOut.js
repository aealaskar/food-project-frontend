import React from "react";
import authStore from "../stores/authStore";
import Button from "react-bootstrap/Button";

function LogOut() {
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.logout();
  };
  return (
    <div>
      <Button variant="light" className="logout" onClick={handleSubmit}>
        Log Out
      </Button>
    </div>
  );
}

export default LogOut;
