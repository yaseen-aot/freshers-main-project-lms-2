import { Fragment } from "react";
import React, { useState,useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext } from "react";
import { studentContext } from "../App";
import { allBooksContext } from "../App";
import { issuebooksContext } from "../App";
import IssueReturn from "./ReturnModal";
import IssuedPage from "../components/IssuedPageContainer";


const IssueBookModal = ({show,setShow,isreturnstate}) => {

  const  [issuestate,setIssuestate] = useContext(issuebooksContext)
  const [studentdata,setStudentdata] = useContext(studentContext)
  const [bookData,setBookData] = useContext(allBooksContext)

  const DuedateInput = useRef();
 
  const [issueidbook,setissueidbook] = useState('')
  const [issueidstudent,setissueidstudent] = useState('')
  const [issuedateissue,setIssuedateissue] = useState('')
  const [issueduedate,setIssueduedate] = useState('')
  const [issuefine,setIssuefine] = useState('')
  

  
  const [duedatetwo,setDuedatetwo] = useState('')




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

    setIssuedateissue(val)


  }

  const dueDateFunc = (event) => {

    const val = event.target.value
    setDuedatetwo(val)
    
    
    const sval = val.split('-')
    const setyear =  sval[0] 
    const setmonth = sval[1]
    const setday = sval[2]
    const setval = setday + '-' + setmonth+ '-' + + setyear
    console.log(issuedateissue,"ooii")
    

      setIssueduedate(setval)
      console.log(issueduedate,'hooi')
    
  


  //  console.log('sa')
  //  const val = new Date(issuedateissue) 
  //  console.log(val,'hh')

  // setIssueduedate(val.getDate() + 7);
  // console.log(issueduedate);
  // //  const setval = val.getDate + 7
  // //  console.log(setval,'yy')


  //  DuedateInput.current.value = "rrr"

  }
 


    const handleClose = () => setShow(false);

    const addIssueBookFunc = () => {

      if(issuedateissue < duedatetwo){

        const Issueid = Math.floor(Math.random() * Date.now())
        const setarray = {
          Issueid : Issueid,
          issuebookid : issueidbook,
          issuestudentid : issueidstudent,
          issuedate : issuedateissue,
          duedate : issueduedate,
          isreturn : false,
          isissue : true,
          fine:0
        }
       
    
        setIssuestate([...issuestate,setarray])
        console.log(issuestate)
      }
      else{
        alert("please enter valid date")
      }

     
    }
  
    const issueFineFunc = () => {
      let count = 0 

      const duedatefind = new Date(issuedateissue).getDate()+7
      const today = new Date()
      console.log(duedatefind,'hh')
      if(duedatefind < today){
        count = count + 10
      }
      console.log(count,'oo')

    }
    issueFineFunc()

    const RemainingDecreaseFunc = () => {
      console.log("ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhg")
      if(issuestate.issuebookid === bookData.bookid){
        bookData.remaining = bookData.remaining(current => current - 1)
        console.log(bookData,'jhi')
      }

    }



    // <IssueReturn setIsreturnstate = {setIsreturnstate}/>

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

            {bookData.map(obj => {
              return(  
                <Fragment key={obj.bookid}>
          <option  value={obj.bookid}>{obj.title}</option>
            </Fragment>
           ) })}

          </Form.Select>
         

            

            <Form.Label className='IssueBookModalLabel'>Student</Form.Label>

            <Form.Select onChange={IssuestudentStateFunc} aria-label="Default select example">
            <option>Select Student </option>
            {studentdata.map(obj => {
              return(
              <Fragment key={obj.id}>
            <option  value={obj.id}>{obj.name}</option>
            </Fragment>
             )} )}

          </Form.Select>

          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className='IssueBookModalLabel'>Issue Date</Form.Label>

              <Form.Control
                type="Date"
                placeholder="09-11-2022"
                // onChange={(event) => {issueDateFunc(event) ; issueFineFunc();}}
                 onChange= {issueDateFunc }
                />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
            <Form.Label className='IssueBookModalLabel'>Due Date</Form.Label>
            <Form.Control
              type="date"
              onChange={dueDateFunc}
              // ref={DuedateInput}
              // readOnly
              />
          </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer className='mx-4'>
          <button className='IssueBookCloseBtn' onClick={handleClose} >
            Cancel
          </button>
          <button className='IssueBookAddBtn' onClick={() => {addIssueBookFunc();RemainingDecreaseFunc()}} >
            Issue Book
          </button>
        </Modal.Footer>
      </Modal>
        
        
        
        
        
        </Fragment>



     );
}
 
export default IssueBookModal;