import React,{useState,Fragment} from 'react'
import styles from './header.module.css'
import logo from './Logo/newlast.jpg';

import { Navbar,Container,Nav,Image,Dropdown,DropdownButton,Form,FormControl,Button, } from 'react-bootstrap';
function Libheader() {
 
  return (
    <Fragment>
      <Navbar fixed='top' collapseOnSelect expand="lg"  variant="dark"  className={styles.hcontainer}>
      <Container fluid>
        <Image  as="img" width={130} height={100} rounded src={logo}/>
        <Navbar.Brand href="#home">ONLINE LiB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <DropdownButton variant="outline-light" id="dropdown-basic-button" title="Categories">
              <Dropdown.Item href="#/action-1">Science</Dropdown.Item>
              <Dropdown.Item href="#/action-2">literature</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Stories</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3" >Resaerches</Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Form className="d-flex me-auto">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
          </Form>
          <Nav className=" justify-content-end">
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#features">Contact Us</Nav.Link>
                <Nav.Link href="#signin" >Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  </Fragment>
  )
}

export default  Libheader  ;

