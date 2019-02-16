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
import ModalExample from './registerModal';
class NavBar extends Component {
    // state = {
    //     isOpen: false
    // }
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          isOpen: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
      }
    
      toggleModal(event) {
          event.preventDefault();
          console.log('clicked modal')
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    

    toggleNav = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    formPreventDefault(e) { 
        e.preventDefault();
      }

    render() {
        return(
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/" target="_blank">Employee Book</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.auth ? (
                                <NavItem>
                                    <NavLink href="#">Log Out</NavLink>
                                </NavItem>
                             ) : (
                                 [
                                <NavItem key="register">
                                    <NavLink href="#" onClick={this.toggleModal}>Register</NavLink>
                                </NavItem>,
                                <NavItem key="login">
                                    <NavLink href="#">Log in</NavLink>
                                </NavItem>
                                ]
                        )}
                        </Nav>
                    </Collapse>
                </Container>
                <ModalExample toggleModal={this.toggleModal} preventDefault={this.formPreventDefault} modal={this.state.modal}/>
            </Navbar>
        )
    }
}

export default NavBar;