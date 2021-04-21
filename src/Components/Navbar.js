import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import fire from "../config/fire";




const logout = () => {
    fire.auth().signOut();
}

function NavBar({user}) {   
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="Home">PeopleZ</Navbar.Brand>
                <Nav className="mr-auto">
                {user ? (<Nav.Link href="Home" >Home</Nav.Link>) : (null)}
                {user ? (<Nav.Link href="About">About</Nav.Link>) : (null)}
                </Nav>
                <Nav className="mr-left">
                {user ? (<div className='profile'>User:&nbsp;{user.email}</div>) : (null)}
                {user ? (<Nav.Link href="Home" onClick={logout} >&nbsp;Sign Out</Nav.Link>) : (null)} 
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar