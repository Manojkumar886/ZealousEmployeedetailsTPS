import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import 'bootstrap/dist/css/bootstrap.min.css'

export let Home=()=>
{
    return(
        <>
            <Navbar bg='warning' expand='lg'>
                <NavbarBrand href="#Home">Navigation</NavbarBrand>
                <NavbarToggle aria-controls="mynavbar"></NavbarToggle>
                <NavbarCollapse id="mynavbar"> 
                    <Nav className='ms-2'>
                        <Nav.Link href="/mainpage">Home</Nav.Link>
                        <Nav.Link href="/table">Tables</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}