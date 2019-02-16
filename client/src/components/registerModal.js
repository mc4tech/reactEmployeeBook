/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './Form';

const ModalExample = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false,
  //   };

  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }

    console.log(props);
    return (
      <div>
        {/* <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        </Form> */}
        {/* <NavBar toggleModal={this.toggle} auth={this.props.auth}/> */}
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
          <ModalHeader toggle={props.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            <Form toggleModal={props.toggleModal} preventDefault={props.preventDefault}/>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={props.toggleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
}

export default ModalExample;