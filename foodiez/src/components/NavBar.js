import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import { observer } from "mobx-react";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import LogOut from "./LogOut";

function NavBar() {
  return (
    <div>
      <Navbar className="glassEffect" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Foodiez</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {authStore.user ? (
              <>
                <p className="user">Hello {authStore.user.username}</p>
                <LogOut />
              </>
            ) : (
              <>
                <SignUpModal />
                <SignInModal />
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default observer(NavBar);
