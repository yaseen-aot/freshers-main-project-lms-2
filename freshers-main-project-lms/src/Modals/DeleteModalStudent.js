import React, { Fragment, useState,useContext } from 'react';
import { studentContext } from "../App";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DeleteModalStudent = ({showDelete,setShowDelete,getkeyElement}) => {
    const [studentdata,setStudentdata] = useContext(studentContext)

  

    const handleClose = () => setShowDelete(false);

    const studentDeleteFunc = (deleteid) => {
        console.log(deleteid)
        setStudentdata (studentdata.filter((item) => deleteid != item.id   ))
       
    }

    

    return ( 

        <Fragment>
        
        <Modal 
        className='p-5'
        show={showDelete}
        onHide={handleClose}
        
      >
      
          <Modal.Title className='text-center pt-4 pb-2'>Delete Student</Modal.Title>
        
       

        <Modal.Body className='text-center'>
          Are you sure, you want to delete student
        </Modal.Body>
        <div className='d-flex justify-content-center gap-4 pb-5 pt-3'>
        <button  onClick={handleClose}>
        Close
      </button>
      <button   onClick={() => studentDeleteFunc(getkeyElement)}>Delete</button>
        </div>
         
    
      </Modal>
        
        
        
        
        
        </Fragment>







     );
}
 
export default DeleteModalStudent;