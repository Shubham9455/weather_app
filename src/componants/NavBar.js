import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (prop) => {
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{ position: "fixed", width: "100%", zIndex: "1" }}
      >
        <Container fluid>
          <Navbar.Brand
            style={{
              marginLeft: "50px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Weatherly
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form
              className="d-flex"
              style={{ marginRight: "20px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              
                <input
                  type="city_search"
                  placeholder="Saerch for City"
                  style={{
                    width: "300px",
                    margin: "10px auto",
                    borderRadius: "25px",
                    paddingInline: "20px",
                    backgroundColor: "grey",
                    padding: "5px",
                  }}
                  onChange={(e) => {
                    prop.setquerry(e.target.value);
                  }}
                />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
