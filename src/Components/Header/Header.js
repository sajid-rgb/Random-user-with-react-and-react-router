import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand='lg' bg='success' className='d-flex justify-content-between'>
                <Navbar.Brand href='/home' className='nav-brand'>MyFriends</Navbar.Brand>
                <div>
                <Navbar.Toggle area-controls="responsive-nav"/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mr-auto nav">
                    <Nav.Link href='/home' className="nav-link">Home</Nav.Link>
                    <Nav.Link href='/friends' className="nav-link" >Friends</Nav.Link>
                    <Nav.Link href='/contacts' className="nav-link">Contacts</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </div>

            </Navbar>
        </div>
    );
};

export default Header;