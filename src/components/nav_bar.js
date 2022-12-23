import React from "react";

import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Nav_bar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Sudoku Puzzle</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Game">Return to game</Nav.Link>
          <Nav.Link href="/HighScore">Personal Record</Nav.Link>
          <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}