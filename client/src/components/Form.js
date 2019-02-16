import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ModalFooter } from 'reactstrap';

const RegisterForm = (props) => {
    console.log('regForm ', props);
    return (
      <Form onSubmit={props.preventDefault}>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input type="email" name="email" id="userEmail" placeholder="please enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input type="password" name="password" id="userPassword" placeholder="enter a password" />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
        </FormGroup>
        <ModalFooter>
            <Button color="primary" onClick={props.toggleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Form>
    );
}

export default RegisterForm;