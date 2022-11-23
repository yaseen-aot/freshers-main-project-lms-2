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



const IssueBookModal = ({show,setShow}) => {

  const  [issuestate,setIssuestate] = useContext(issuebooksContext)
  const [studentdata,setStudentdata] = useContext(studentContext)
  const [bookData,setBookData] = useContext(allBooksContext)

  const DuedateInput = useRef();
 
  const [issueidbook,setissueidbook] = useState('')
  const [issueidstudent,setissueidstudent] = useState('')
  const [issuedateissue,setIssuedateissue] = useState('')
  const [issueduedate,setIssueduedate] = useState('')
  const [issuefine,setIssuefine] = useState('')
  const [issueremainingget,setIssueremainingget] = useState()
  

  
  
  const [duedatetwo,setDuedatetwo] = useState('')
  const [issuedatetwo,setIssuedatetwo] = useState('')




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
    setIssuedatetwo(val)

    const splitval = val.split('-')
    const setyear =  splitval[0] 
    const setmonth = splitval[1]
    const setday = splitval[2]
    const setval = setmonth + '-' + setday+ '-' + + setyear


    setIssuedateissue(setval)


  }

  const dueDateFunc = (event) => {

    const val = event.target.value
    console.log(val,"valuedue")
    setDuedatetwo(val)
    
    
    const splitval = val.split('-')
    const setyear =  splitval[0] 
    const setmonth = splitval[1]
    const setday = splitval[2]
    const setval = setmonth + '-' + setday + '-' +  setyear
    
    

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

      // if(issuedateissue < duedatetwo){

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
      //  console.log(issueduedate,issuedateissue,"se")
        console.log(setarray,"setarray")
         setIssuestate([...issuestate,setarray])
      
      // }
      // else{
      //   alert("please enter valid date")
      // }

     
    }
  
   

    const RemainingDecreaseFunc = () => {
      setBookData(bookData?.map((bookobj) => {
         if(bookobj?.bookid === issueidbook ){
           return {...bookobj,remaining : bookobj.remaining - 1}
        }
        return bookobj;
      
      })
      )
      // }
      
      

    }



    return ( 
        <Fragment>
       
        
        <Modal className='px-3 ' show={show} onHide={handleClose}>
        <IssueReturn issueidbook = {issueidbook} />
        <Modal.Header className='IssueBookModalHeader mx-4 ps-0' closeButton>
          <Modal.Title className='IssueBookModalTitle' > Issue Book  </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            <Form.Label  className='IssueBookModalLabel'>Book</Form.Label>

            <Form.Select onChange={IssuebookStateFunc}  aria-label="Default select example">
            
            <option>Select Book</option>

            {bookData.map(obj => {
              if(obj.remaining > 0){
              return(  
                <Fragment key={obj.bookid}>
          <option  value={obj.bookid}>{obj.title}</option>
            </Fragment>
           )
              }
          }
           
           )}

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