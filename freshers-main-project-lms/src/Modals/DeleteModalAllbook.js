import { Fragment } from "react";
import { useContext } from "react";
import { allBooksContext } from "../App";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'


const DeleteModalAllbooks = ({showbookDelete,setShowbookDelete,allbookkeyelement}) => {
    const [bookData,setBookData] = useContext(allBooksContext)

    const handleClose = () => setShowbookDelete(false);

    const  bookDeleteFunc = (bookid) => {
        console.log(bookid)
        setBookData (bookData.filter((item) => bookid != item.bookid   ))
    }

    return ( 
        

        <Fragment>
   
      <Modal 
      className='p-5'
      show={showbookDelete}
      onHide={handleClose}>
    
        <Modal.Title className='text-center pt-4 pb-2'>Delete Student</Modal.Title>

      <Modal.Body className='text-center'>
        Are you sure, you want to delete student
      </Modal.Body>
      <div className='d-flex justify-content-center gap-4 pb-5 pt-3'>
      <button  onClick={handleClose}>
      Close
    </button>
    <button  onClick={() => {bookDeleteFunc(allbookkeyelement);handleClose()}} >Delete</button>
      </div>
       
  
    </Modal>
        
        
        
        </Fragment>




     );
}
 
export default DeleteModalAllbooks;