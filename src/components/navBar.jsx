import React from 'react';
import { Container, Navbar } from 'react-bootstrap';


function NavBar() {
    return (
        <Navbar className='NavBar'>
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Brand href="/play">Play</Navbar.Brand>
                <Navbar.Brand href="/puzzles">Puzzles</Navbar.Brand>
                <Navbar.Brand href="/watch">Watch</Navbar.Brand>
                <Navbar.Brand href="/profile">Profile</Navbar.Brand>
                <Navbar.Brand href="/donate">Donate</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;
