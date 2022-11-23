import React, { useState, useContext, useEffect } from "react";
import { studentContext } from "../App";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../css/StudentAddModal.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Fragment } from "react";

const AddStudentModal = ({ show, setShow, selectedstudent }) => {
  const [studentdata, setStudentdata] = useContext(studentContext);

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentPasswordTwo, setStudentPasswordTwo] = useState("");

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

  useEffect(() => {
    setStudentName(selectedstudent?.name);
    setStudentEmail(selectedstudent?.email);
    setStudentPassword(selectedstudent?.password);
    setStudentPasswordTwo(selectedstudent?.password);
  }, [selectedstudent]);

  const handleCloseStudent = () => setShow(false);

  const StudentNameFunction = (event) => {
    const value = event.target.value;
    setStudentName(value);
    console.log(studentName);
  };

  const notify = () => {
    toast.error("Sorry,please fill out form", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const studentpasswordToast = () => {
    toast.error("password  not matching", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // const StudentEmailFunction = (event) =>{
  //     const value =  event.target.value
  //     // setStudentEmail(value)
  //     console.log(studentEmail)
  //  }

  //  const StudentPasswordFunction = (event) =>{
  //     const value =  event.target.value
  //     // setStudentPassword(value)
  //     console.log(studentPassword)
  //  }

  //  const StudentPasswordTwoFunction = (event) =>{
  //     const value =  event.target.value
  //     // setStudentPasswordTwo(value)
  //     console.log(studentPasswordTwo)
  //  }

  const handleAddStudent = () => {
    if (
      studentName &&
      studentEmail &&
      studentPassword &&
      studentPasswordTwo !== ""
    ) {
      if (studentPassword === studentPasswordTwo) {
        console.log("button clicked");
        const newid = new Date().getTime();
        console.log(newid);
        console.log(studentName);
        console.log(studentEmail);
        console.log();
        const setdata = {
          id: newid,
          name: studentName,
          email: studentEmail,
          password: studentPassword,
          position: "student",
        };

        setStudentdata([...studentdata, setdata]);
        console.log(studentdata);

        setShow(false);
        setStudentName("");
        setStudentEmail("");
        setStudentPassword("");
        setStudentPasswordTwo("");
      } else {
        studentpasswordToast();
      }
    } else {
      // alert('please fill out form')
      notify();
    }
  };

  const handleEditStudent = () => {
    if (
      studentName &&
      studentEmail &&
      studentPassword &&
      studentPasswordTwo !== ""
    ) {
      if (studentPassword === studentPasswordTwo) {
        console.log("edit button clicked");
        console.log(studentdata);
        console.log("hai");

        setStudentdata((studentdata) =>
          studentdata.map((obj) => {
            if (obj.id === selectedstudent.id) {
              return {
                ...obj,
                name: studentName,
                email: studentEmail,
                password: studentPassword,
              };
            }

            return obj;
          })
        );
        console.log(studentdata);
      } else {
        studentpasswordToast();
      }
    } else {
      notify();
    }
  };

  return (
    <Fragment>
      <Modal show={show} onHide={handleCloseStudent}>
        <Modal.Header closeButton>
          <Modal.Title className="studentModalTitle">
            {selectedstudent ? "Edit Student" : "Add Student"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="studentModalLabel">Name</Form.Label>
              <Form.Control
                className="addModalName"
                onChange={StudentNameFunction} //(event) => setStudentName(event.target.value)
                value={studentName || ""}
                type="text"
                maxLength={25}
                placeholder="Eg: John Doe"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="studentModalLabel">Email</Form.Label>
              <Form.Control
                className="addModalemail"
                onChange={(event) => setStudentEmail(event.target.value)}
                value={studentEmail || ""}
                type="email"
                maxLength={25}
                placeholder="Eg: johndoe@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="studentModalLabel">Password</Form.Label>
              <Form.Control
                value={studentPassword || ""}
                onChange={(event) => setStudentPassword(event.target.value)}
                type="password"
                placeholder="••••••••"
                maxLength={10}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label className="studentModalLabel">
                Confirm Password
              </Form.Label>
              <Form.Control
                value={studentPasswordTwo || ""}
                onChange={(event) => setStudentPasswordTwo(event.target.value)}
                type="password"
                placeholder="••••••••"
                maxLength={10}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="StudentModal-ButtonClose"
            onClick={handleCloseStudent}
          >
            Close
          </button>
          <button
            className="StudentModal-ButtonAdd"
            onClick={() => {
              handleCloseStudent();
              {
                selectedstudent ? handleEditStudent() : handleAddStudent();
              }
            }}
          >
            {selectedstudent ? "Edit Student" : "Add Student"}
          </button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="coloured"
      />
      {/* Same as */}
      <ToastContainer />
    </Fragment>
  );
};

export default AddStudentModal;
