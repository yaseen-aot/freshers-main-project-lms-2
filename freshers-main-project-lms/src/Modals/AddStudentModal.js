import React, { useState , useContext, useEffect } from 'react';
import { studentContext } from '../App';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { Fragment } from "react";
import Studentmain from "../components/StudentContainer";

const AddStudentModal = ({show,setShow,selectedstudent,studenteditName,studenteditEmail,studenteditPassword}) => {
//console.log(selectedstudent)


 

   
  const [studentdata,setStudentdata] = useContext(studentContext)
  
    const [studentName,setStudentName] = useState('')
    const [studentEmail,setStudentEmail] = useState('')
    const [studentPassword,setStudentPassword] = useState('')
    const [studentPasswordTwo,setStudentPasswordTwo] = useState('')

    // const [studentNameEditModal,setStudentNameEditModal] = useState('')
    // const [studentEmailEditModal,setStudentEmailEditModal] = useState('')
    // const [studentPasswordEditModal,setStudentPasswordEditModal] = useState('')
    // const [studentPasswordTwoEditModal,setStudentPasswordTwoEditModal] = useState('')

   

   // const studentNameEditFunc = (event) => {
      // const value = event.target.value
      // setStudentNameEditModal(value)
      // console.log(studentNameEditModal,"jj")
      
    // }
    
    // const  studentEmailEditFunc = () => {

    // }

    // const studentPasswordEditFunc = () => {

    // }

    // const studentPasswordTwoEditFunc = () => {

    // }
    
    useEffect (()=>{
      setStudentName(selectedstudent?.name)
      setStudentEmail(selectedstudent?.email)
      setStudentPassword(selectedstudent?.password)
      setStudentPasswordTwo(selectedstudent?.password)
    },[selectedstudent])
  

        const handleCloseStudent = () => setShow(false);

        const StudentNameFunction = (event) =>{
           const value =  event.target.value
           setStudentName(value)
           console.log(studentName)
           
        }

        const StudentEmailFunction = (event) =>{
            const value =  event.target.value
            // setStudentEmail(value)
            console.log(studentEmail)   
         }

         const StudentPasswordFunction = (event) =>{
            const value =  event.target.value
            // setStudentPassword(value)
            console.log(studentPassword) 
         }

         const StudentPasswordTwoFunction = (event) =>{
            const value =  event.target.value
            // setStudentPasswordTwo(value)
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
                    setStudentName('')
                    setStudentEmail('')
                    setStudentPassword('')
                    setStudentPasswordTwo('')
                    



                }
                else{
                    console.log("password not match") 
                    alert("password not match")
                }
                

            }
            else{
              console.log('please fill out form')
            }
            

         }

         const handleEditStudent = () => {
          if(studentName && studentEmail && studentPassword && studentPasswordTwo !== ''){
            if(studentPassword == studentPasswordTwo){

          console.log('edit button clicked')
          console.log(studentdata)
          console.log("hai")
        
          setStudentdata(studentdata =>
            studentdata.map(obj => {
              if (obj.id === selectedstudent.id) {
                return {...obj, name: studentName, email : studentEmail , password : studentPassword };
              }
      
              return obj;
             
            }),
           
          );
          console.log(studentdata)
         
         
         
          }
          else {
            console.log('password not match')
          }
        }
          else{
            console.log('please fill out form')
          }
         }
         

       



    return ( 

        <Fragment>
        
        
  
        <Modal show={show} onHide={handleCloseStudent}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedstudent ? 'Edit Student' : 'Add Student'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control  className='addModalName'
                onChange={StudentNameFunction} //(event) => setStudentName(event.target.value)
                 value = {studentName || '' }
                  type="text"
                  placeholder="Eg: John Doe"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control  className='addModalemail'
              onChange={(event) => setStudentEmail(event.target.value) }
              value = {studentEmail || ''}
                type="email"
                placeholder="Eg: johndoe@gmail.com"
               
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control
              value = {studentPassword || '' } 
              onChange={(event) => setStudentPassword(event.target.value) }
                type="password"
                placeholder= "••••••••"
               
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            value = {studentPasswordTwo || '' }
            onChange={ (event) => setStudentPasswordTwo(event.target.value) }
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
            <button  className='StudentModal-ButtonClose' onClick={() => {handleCloseStudent();{selectedstudent ?handleEditStudent() : handleAddStudent()}}}>
             {selectedstudent ? 'Edit Student' : 'Add Student'}
            </button>
          </Modal.Footer>
        </Modal>
     
        
        
        
        </Fragment>


     );
}
 
export default AddStudentModal;