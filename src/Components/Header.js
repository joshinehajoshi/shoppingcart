import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar className="Navbar">
                <Container>
                    <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
