import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
               <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/" target="_blank">Employee Book</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://google.com">Google</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Log in</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Log Out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
            </div>
        )
    }
}

export default NavBar;