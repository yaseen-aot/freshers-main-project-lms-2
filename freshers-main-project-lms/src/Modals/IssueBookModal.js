import { Fragment } from "react";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const IssueBookModal = ({show,setShow}) => {
    const handleClose = () => setShow(false);



    return ( 
        <Fragment>

        <Modal className='px-3 ' show={show} onHide={handleClose}>
        <Modal.Header className='IssueBookModalHeader mx-4 ps-0' closeButton>
          <Modal.Title className='IssueBookModalTitle' > Edit Book  </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            

            <Form.Label className='IssueBookModalLabel'>Book</Form.Label>
            <Form.Select  aria-label="Default select example">
            <option>Select Book</option>
            <option value="Malayalam">Malayalam</option>
          </Form.Select>

            
            <Form.Label className='IssueBookModalLabel'>Student</Form.Label>
            <Form.Select  aria-label="Default select example">
            <option>Select Student </option>
            <option value="Malayalam">Malayalam</option>
          </Form.Select>

          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className='IssueBookModalLabel'>Issue Date</Form.Label>
              <Form.Control
                type="Date"
                placeholder="09-11-2022"
                />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
            <Form.Label className='IssueBookModalLabel'>Due Date</Form.Label>
            <Form.Control
              type="Date"
              
              />
          </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer className='mx-4'>
          <button className='IssueBookCloseBtn' onClick={handleClose} >
            Cancel
          </button>
          <button className='IssueBookAddBtn' >
            Issue Book
          </button>
        </Modal.Footer>
      </Modal>
        
        
        
        
        
        </Fragment>



     );
}
 
export default IssueBookModal;