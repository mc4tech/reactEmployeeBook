import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ModalFooter } from 'reactstrap';

const RegisterForm = (props) => {
    // console.log('regForm ', props);
    return (
      <Form onSubmit={props.preventDefault}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={props.onChange} value={props.name} placeholder="please enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input type="email" name="email" id="userEmail" onChange={props.onChange} value={props.email} placeholder="please enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input type="password" name="password" id="userPassword" onChange={props.onChange} value={props.password} placeholder="enter a password" />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" onChange={props.onChange} value={props.confirmPassword} placeholder="confirm password" />
        </FormGroup>
        <ModalFooter>
            <Button color="primary" onClick={props.handleForm}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Form>
    );
}

export default RegisterForm;