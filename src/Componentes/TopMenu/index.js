import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from './../../assets/svg/logo.svg' 

import './TopMenu.scss';

export const TopMenu = () => {
    return(
        <Navbar bg="dark" variant="dark" className="top-menu">
            <Container>
                <BrandNav />
                <MenuNav />
                <CarritoNav />
            </Container>
        </Navbar>
    );
}

// BrandNav
const BrandNav = () => {
    return(
        <Navbar.Brand>
            <Logo />
            <h2>Casa de los Helados</h2>
        </Navbar.Brand>
    ); 
}

// MenuItems
const MenuNav = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="*">Aperitivos</Nav.Link>
            <Nav.Link href="*">Helados</Nav.Link>
            <Nav.Link href="*">Animales</Nav.Link>
        </Nav>
    );
}

const CarritoNav = () => {
    return(
        <div>
            <h3>Carrito</h3>
        </div>
    );
}
