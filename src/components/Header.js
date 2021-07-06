import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {  Link } from "react-router-dom";
export class Header extends Component {
    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Cocktail </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><Link to='/'>Home</Link> </Nav.Link>
      
      <Nav.Link ><Link to='/fav'>Favorite</Link> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>  
            </div>
        )
    }
}

export default Header
