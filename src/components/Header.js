import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FcTodoList } from "react-icons/fc";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="text-center">
          <FcTodoList
            className="mx-2"
            style={{ width: "40", height: "30px" }}
          />
          TODO-LISTS
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
