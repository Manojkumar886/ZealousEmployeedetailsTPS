import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export let Homepage=()=>
{
    return(
        <>
         <Navbar bg='primary' expand='lg'>
                <NavbarBrand href="#Home">Navigation</NavbarBrand>
                <NavbarToggle aria-controls="mynavbar"></NavbarToggle>
                <NavbarCollapse id="mynavbar"> 
                    <Nav className='ms-2'>
                        <Nav.Link href="/listall">ListEmployeedetails</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}