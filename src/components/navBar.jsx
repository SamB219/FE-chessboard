import React from 'react';

// Icon Imports
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaChessKing, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImEye } from "react-icons/im";
import { SlPuzzle } from "react-icons/sl";
import { BiSolidDonateHeart } from "react-icons/bi";


function NavBar() {
    return (
        <Navbar className="NavBar">
            <Container className="nav-container">
                <Navbar.Brand href="/home" className="nav-item">
                    <FaHome /> Home
                </Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link href="/play" className="nav-item">
                        <FaChessKing /> Play
                    </Nav.Link>
                    <Nav.Link href="/puzzles" className="nav-item">
                        <SlPuzzle /> Puzzles
                    </Nav.Link>
                    <Nav.Link href="/watch" className="nav-item">
                        <ImEye /> Watch
                    </Nav.Link>
                    <Nav.Link href="/profile" className="nav-item">
                        <CgProfile /> Profile
                    </Nav.Link>
                    <Nav.Link href="/donate" className="nav-item">
                        <BiSolidDonateHeart /> Donate
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
