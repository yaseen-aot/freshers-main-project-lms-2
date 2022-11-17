import React, {  useState,useContext,useEffect } from 'react';
import { allBooksContext } from '../App';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { nanoid } from 'nanoid'



const AddBookModal = ({setShowAddBook,showAddBook,selectedAllbooks}) => {

  const handleCloseBook = () => setShowAddBook(false);

 const [bookData,setBookData] = useContext(allBooksContext)

  const [bookTitle,setBookTitle] = useState('')
  const [bookAuthor,setBookAuthor] = useState('')
  const [bookLanguage,setBookLanguage] = useState('')
  const [booktotalCopies,setbookTotalCopies] = useState('')
  const [bookremainingCopies,setbookRemainingCopies] = useState('')

  useEffect (()=>{
    setBookTitle(selectedAllbooks?.title)
    setBookAuthor(selectedAllbooks?.author)
    setBookLanguage(selectedAllbooks?.language)
    setbookTotalCopies(selectedAllbooks?.totalcopies)
    setbookRemainingCopies(selectedAllbooks?.remaining)
  },[selectedAllbooks])



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
///////
  const handleEditAllBook = () => {
   

    if(bookTitle && bookAuthor && bookLanguage && booktotalCopies && bookremainingCopies !== ''){
     

    console.log('editbook button clicked')
    console.log(bookData)
    console.log("hai")
 
  console.log(selectedAllbooks.bookid,"gggg")
    setBookData(bookData =>
      bookData.map(obj => {
        console.log(obj.bookid,selectedAllbooks.bookid )
        if (obj.bookid === selectedAllbooks.bookid) {
          console.log('hai wins')
          return {...obj, title: bookTitle, author : bookAuthor ,  language : bookLanguage  , totalcopies : booktotalCopies, remaining : bookremainingCopies};
        }

        return obj;
       
      }),
     
    );
    console.log(bookData)
   
   
   
    
    
  }
    else{
      console.log('please fill out form')
    }


  }
    
  

    return ( 

      

        <Fragment>
    
        

      <Modal className='px-4 ' show={showAddBook} onHide={handleCloseBook}>
        <Modal.Header className='mx-4' closeButton>
          <Modal.Title > { selectedAllbooks ? 'Edit Book'  : 'Add Book' }</Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={BookTitleFunc}
                value = {bookTitle || '' }
                placeholder="Eg: Pride and Prejudice"
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                onChange={BookAuthorFunc}
                value = {bookAuthor || '' }
                placeholder="Eg: Jane Austen"/>
            </Form.Group>

            
            <Form.Label>Language</Form.Label>
            <Form.Select onChange={BookLanguageFunc} value ={ bookLanguage || '' } aria-label="Default select example">
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
                  value = { booktotalCopies || '' }
                  placeholder="5"/>
              </Form.Group>

              <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput4">
                <Form.Label className='mb-1'>Remaining</Form.Label>
                <Form.Control
                  type="text"
                  onChange={BookRemainingCopiesFunc}
                  value = {bookremainingCopies || ''}
                  placeholder="2"/>
              </Form.Group>
           
          </div> 
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer className='mx-4'>
          <Button variant="secondary" onClick={handleCloseBook }>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleCloseBook();{selectedAllbooks ? handleEditAllBook() : handleAddAllBook()}}}>
            {selectedAllbooks ? 'Edit book' :' Add Book'}
          </Button>
        </Modal.Footer>
      </Modal>

        

    
    
      </Fragment>

     );
}
 
export default AddBookModal;