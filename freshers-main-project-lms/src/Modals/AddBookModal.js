import React, {  useState } from 'react';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AllBooks from '../components/AllbooksComponent';


const AddBookModal = ({setShowAddBook,showAddBook}) => {

    
  

  const handleCloseBook = () => setShowAddBook(false);
 
   

    
    


    return ( 

      

        <Fragment>
    
        

      <Modal show={showAddBook} onHide={handleCloseBook}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBook}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        

    
    
      </Fragment>

     );
}
 
export default AddBookModal;