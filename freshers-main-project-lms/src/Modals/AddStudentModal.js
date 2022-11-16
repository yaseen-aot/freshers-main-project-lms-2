import React, { useState , useContext } from 'react';
import { studentContext } from '../App';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { Fragment } from "react";
import Studentmain from "../components/StudentContainer";

const AddStudentModal = ({show,setShow}) => {


   
  const [studentdata,setStudentdata] = useContext(studentContext)
    const [studentName,setStudentName] = useState('')
    const [studentEmail,setStudentEmail] = useState('')
    const [studentPassword,setStudentPassword] = useState('')
    const [studentPasswordTwo,setStudentPasswordTwo] = useState('')

    
  

        const handleCloseStudent = () => setShow(false);

        const StudentNameFunction = (event) =>{
           const value =  event.target.value
           setStudentName(value)
           console.log(studentName)
           
        }

        const StudentEmailFunction = (event) =>{
            const value =  event.target.value
            setStudentEmail(value)
            console.log(studentEmail)   
         }

         const StudentPasswordFunction = (event) =>{
            const value =  event.target.value
            setStudentPassword(value)
            console.log(studentPassword) 
         }

         const StudentPasswordTwoFunction = (event) =>{
            const value =  event.target.value
            setStudentPasswordTwo(value)
            console.log(studentPasswordTwo) 
         }
         
         const handleAddStudent = () => {
            if(studentName && studentEmail && studentPassword && studentPasswordTwo !== ''){
                if(studentPassword == studentPasswordTwo)
                {
                    console.log("button clicked") 
                    const newid = new Date().getTime()
                    console.log(newid)
                    console.log(studentName)
                    console.log(studentEmail)
                    console.log()
                    const setdata = 
                    {
                        id : newid,
                        name: studentName,
                        email: studentEmail ,
                        password : studentPassword ,
                        position : 'student'
                    }
                    
                    setStudentdata([...studentdata,setdata])
                    console.log(studentdata)
                    setShow(false)
                    



                }
                else{
                    console.log("password not match") 
                    alert("password not match")
                }
                

            }
            

         }

       



    return ( 

        <Fragment>
        
        
  
        <Modal show={show} onHide={handleCloseStudent}>
          <Modal.Header closeButton>
            <Modal.Title>Add  Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                onChange={ StudentNameFunction}
                value = {studentName}
                  type="text"
                  placeholder="Eg: John Doe"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control
              onChange={ StudentEmailFunction}
              value = {studentEmail}
                type="email"
                placeholder="Eg: johndoe@gmail.com"
               
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control
              value = {studentPassword}
              onChange={ StudentPasswordFunction}
                type="password"
                placeholder= "••••••••"
               
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            value = {studentPasswordTwo}
            onChange={ StudentPasswordTwoFunction}
              type="password"
              placeholder="••••••••"
              
            />
          </Form.Group>


              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className='StudentModal-ButtonAdd'  onClick={handleCloseStudent}>
              Close
            </button>
            <button  className='StudentModal-ButtonClose' onClick={handleAddStudent}>
             Add Student
            </button>
          </Modal.Footer>
        </Modal>
     
        
        
        
        </Fragment>


     );
}
 
export default AddStudentModal;