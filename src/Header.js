import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav.Link>
          <Link to="/">Home </Link>
        </Nav.Link>

        {this.props.auth0.isAuthenticated ? <Nav.Link> <Link to="/profile">Profile</Link> </Nav.Link> : <></>}

        {/* TODO: if the user is logged in, render the `LogoutButton` 
        - if the user is logged out, render the `LoginButton` */}
        <Navbar.Collapse className="justify-content-end">
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
