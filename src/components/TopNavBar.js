import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function TopNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Sudoku Puzzle</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Game">Return to game</Nav.Link>
          <Nav.Link href="/HighScore">High Scores</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}