import React, {  useState,useContext } from 'react';
import { allBooksContext } from '../App';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { nanoid } from 'nanoid'



const AddBookModal = ({setShowAddBook,showAddBook,allbooksEditKey,AllbookseditTitle,AllbookseditAuthor,
  AllbookseditLanguage,AllbookseditTotalcopies,AllbookseditRemaining}) => {

  const handleCloseBook = () => setShowAddBook(false);

 const [bookData,setBookData] = useContext(allBooksContext)
  const [bookTitle,setBookTitle] = useState('')
  const [bookAuthor,setBookAuthor] = useState('')
  const [bookLanguage,setBookLanguage] = useState('')
  const [booktotalCopies,setbookTotalCopies] = useState('')
  const [bookremainingCopies,setbookRemainingCopies] = useState('')



 
   
  const BookTitleFunc = (event) => {
    const value = event.target.value
    setBookTitle(value)
    console.log(bookTitle)
  }

  const BookAuthorFunc = (event) => {
    const value = event.target.value
    setBookAuthor(value)
    console.log(bookAuthor)
  }
  
  const BookLanguageFunc = (event) => {
    const value = event.target.value
    setBookLanguage(value)
    console.log(bookLanguage)
  }
  const BookTotalCopiesFunc = (event) => {
    const value = event.target.value
    setbookTotalCopies(value)
    console.log(booktotalCopies)
  }

  const BookRemainingCopiesFunc = (event) => {
    const value = event.target.value
    setbookRemainingCopies(value)
    console.log(bookremainingCopies)

  }
    
  const handleAddAllBook = () => {
    if(bookTitle && bookAuthor && bookLanguage && booktotalCopies && bookremainingCopies !== ''){
      console.log("button clicked")
      
      const setdata = 
      {
        bookid : nanoid(),
        title : bookTitle,
        author : bookAuthor,
        language : bookLanguage,
        totalcopies : booktotalCopies,
        remaining : bookremainingCopies
      }
      setBookData([...bookData,setdata])
      console.log(bookData)
    }
    else{
      console.log("button not clicked")
    }
    
  }
    
  console.log(allbooksEditKey)
  console.log(AllbookseditTitle)

    return ( 

      

        <Fragment>
    
        

      <Modal className='px-4 ' show={showAddBook} onHide={handleCloseBook}>
        <Modal.Header className='mx-4' closeButton>
          <Modal.Title > { allbooksEditKey ? 'Edit Book'  : 'Add Book' }</Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={BookTitleFunc}
                value = {allbooksEditKey ? AllbookseditTitle : bookTitle}
                placeholder="Eg: Pride and Prejudice"
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                onChange={BookAuthorFunc}
                value = {allbooksEditKey ? AllbookseditAuthor : bookAuthor}
                placeholder="Eg: Jane Austen"/>
            </Form.Group>

            
            <Form.Label>Language</Form.Label>
            <Form.Select onChange={BookLanguageFunc} value ={allbooksEditKey ? AllbookseditLanguage  : bookLanguage} aria-label="Default select example">
            <option>Select Language</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
            

         <div className='d-flex justify-content-center gap-3 mt-4'> 
            <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput3">
                <Form.Label className='mb-1'>Total Copies</Form.Label>
                <Form.Control
                  type="text"
                  onChange={BookTotalCopiesFunc}
                  value = {allbooksEditKey ? AllbookseditTotalcopies : booktotalCopies}
                  placeholder="5"/>
              </Form.Group>

              <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput4">
                <Form.Label className='mb-1'>Remaining</Form.Label>
                <Form.Control
                  type="text"
                  onChange={BookRemainingCopiesFunc}
                  value = {allbooksEditKey ? AllbookseditRemaining : bookremainingCopies}
                  placeholder="2"/>
              </Form.Group>
           
          </div> 
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer className='mx-4'>
          <Button variant="secondary" onClick={handleCloseBook }>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{handleCloseBook() ; handleAddAllBook()}}>
            {allbooksEditKey ? 'Edit book' :' Add Book'}
          </Button>
        </Modal.Footer>
      </Modal>

        

    
    
      </Fragment>

     );
}
 
export default AddBookModal;