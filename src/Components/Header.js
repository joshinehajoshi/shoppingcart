import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import "../css/header.css";

function Header() {
    return (
        <div>
            <Navbar className="Navbar">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
