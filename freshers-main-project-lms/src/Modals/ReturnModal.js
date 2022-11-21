import { Fragment } from "react";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/ReturnModal.css'
import { useContext } from "react";
import { issuebooksContext } from "../App";

const IssueReturn = ({returnshow,setReturnShow,returnkey,setIsreturnstate}) => {
    const  [issuestate,setIssuestate] = useContext(issuebooksContext)

    const handleReturnClose = () => setReturnShow(false);

    const setReturnFunc = (returnkey) => {
        console.log("hi",returnkey)
        let updatestate = issuestate?.map((issueobj) => {
            if(issueobj?.Issueid === returnkey ){
               return {...issueobj,isreturn : true}
            }
            return issueobj;
        })
        setIssuestate(updatestate)
        
        
    }
   


    return ( 

       <Fragment>
        
       <Modal show={returnshow} onHide={handleReturnClose}>
       <Modal.Title className='returnModalHeader text-center pt-4 pb-2'>Mark as returned?</Modal.Title>
        
       

        <Modal.Body className='deleteModalBody text-center'>
         <p className='returnModalContent'>Are you sure to mark this book as returned?</p> 
        </Modal.Body>
        <div className=' d-flex justify-content-center gap-4 pb-5 pt-3'>
        <button className='returnModalClose'  onClick={handleReturnClose}>
        No
      </button>
      <button className='returnModalreturn' onClick={() => {handleReturnClose();setReturnFunc(returnkey)}}>Yes</button>
        </div>
     </Modal>
       
       
       </Fragment>



     );
}
 
export default IssueReturn;