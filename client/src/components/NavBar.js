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
        console.log('constr props', props);
        super(props);
        console.log('superrrr',super(props));
        this.state = {
          modal: false,
          isOpen: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
      }
    
      toggleModal() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

    toggleNav = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    handleForm = (props) => {
        console.log('reguserr');
        const {name, email, password, confirmPassword} = this.props.user;
        if(name !== '' && email !== '' && password !== '' && confirmPassword !== '' ) {
            this.props.newUser();
            this.toggleModal();
            console.log('no empty fields');
        } else {
            this.toggleModal();
            console.log('empty fields');
        }
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
                <ModalExample toggleModal={this.toggleModal} handleForm={this.handleForm} preventDefault={this.formPreventDefault} modal={this.state.modal} user={this.props.user} onChange={this.props.onChange}/>
            </Navbar>
        )
    }
}

export default NavBar;