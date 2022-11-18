import { Fragment } from "react";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";

const IssueBookModal = ({show,setShow}) => {

  const [studentdata,setStudentdata] = useContext(studentContext)
  const [bookData,setBookData] = useContext(allBooksContext)

  const [issuestate,setIssuestate] = useState([])
  const [issueidbook,setissueidbook] = useState('')
  const [issueidstudent,setissueidstudent] = useState('')
  const [issuedate,setIssuedate] = useState('')


  const IssuebookStateFunc = (event) => {
    const val = event.target.value
    setissueidbook(val)
    console.log(issueidbook)
  }

  const IssuestudentStateFunc = (event) => {
    const val = event.target.value
    setissueidstudent(val)
    console.log(issueidstudent)
  }

  const issueDateFunc = (event) => {
    const val = event.target.value
    console.log(val)
    setIssuedate(val)

  }
 


    const handleClose = () => setShow(false);

    const addIssueBookFunc = () => {

      const Issueid = Math.floor(Math.random() * Date.now())
      

    }
   



    return ( 
        <Fragment>

        <Modal className='px-3 ' show={show} onHide={handleClose}>
        <Modal.Header className='IssueBookModalHeader mx-4 ps-0' closeButton>
          <Modal.Title className='IssueBookModalTitle' > Issue Book  </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            
          
            <Form.Label  className='IssueBookModalLabel'>Book</Form.Label>

            <Form.Select onChange={IssuebookStateFunc}  aria-label="Default select example">
            
            <option>Select Book</option>

            {bookData.map(obj => 
              <>
            return <option  key={obj.bookid} value={obj.bookid}>{obj.title}</option>
            </>
            )}

          </Form.Select>
         

            

            <Form.Label className='IssueBookModalLabel'>Student</Form.Label>

            <Form.Select onChange={IssuestudentStateFunc} aria-label="Default select example">
            <option>Select Student </option>
            {studentdata.map(obj => 
              <>
            <option key={obj.id} value={obj.id}>{obj.name}</option>
            </>
            )}

          </Form.Select>

          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className='IssueBookModalLabel'>Issue Date</Form.Label>

              <Form.Control
                type="Date"
                placeholder="09-11-2022"
                onChange={issueDateFunc}
                />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
            <Form.Label className='IssueBookModalLabel'>Due Date</Form.Label>
            <Form.Control
              type="text"
              readOnly
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