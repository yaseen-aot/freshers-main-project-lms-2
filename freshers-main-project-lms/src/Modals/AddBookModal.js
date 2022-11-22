import React, {  useState,useContext,useEffect } from 'react';
import { allBooksContext } from '../App';
import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/AllBooksAddModal.css'
import IssueBookModal from './IssueBookModal';

import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddBookModal = ({setShowAddBook,showAddBook,selectedAllbooks}) => {

  const handleCloseBook = () => setShowAddBook(false);

 const [bookData,setBookData] = useContext(allBooksContext)

  const [bookTitle,setBookTitle] = useState('')
  const [bookAuthor,setBookAuthor] = useState('')
  const [bookLanguage,setBookLanguage] = useState('')
  const [booktotalCopies,setbookTotalCopies] = useState()
  const [bookremainingCopies,setbookRemainingCopies] = useState()

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
    console.log(typeof(bookremainingCopies),"ggg")

  }

  const allbooksmodaltoast = () => {
    toast.error('Sorry,please fill out form', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
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
      allbooksmodaltoast()
    }
    
  }
///////
  const handleEditAllBook = () => {
   

    if(bookTitle && bookAuthor && bookLanguage && booktotalCopies && bookremainingCopies !== ''){
     

    console.log('editbook button clicked')
    console.log(bookData)
   
 
  console.log(selectedAllbooks.bookid,"gggg")
    setBookData(bookData =>
      bookData.map(obj => {
        console.log(obj.bookid,selectedAllbooks.bookid )
        if (obj.bookid === selectedAllbooks.bookid) {
          
          return {...obj, title: bookTitle, author : bookAuthor ,  language : bookLanguage  , totalcopies : booktotalCopies, remaining : bookremainingCopies};
        }

        return obj;
       
      }),
     
    );
    console.log(bookData)
   
   
   
    
    
  }
    else{
      allbooksmodaltoast()
    }


  }
    
  

    return ( 

      

        <Fragment>
    
        

      <Modal className='px-3 ' show={showAddBook} onHide={handleCloseBook}>
      
        <Modal.Header className='AddBookModalHeader mx-4 ps-0' closeButton>
          <Modal.Title className='AddBookModalTitle' > { selectedAllbooks ? 'Edit Book'  : 'Add Book' }</Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form>

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className='AddBookModalLabel'>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={BookTitleFunc}
                value = {bookTitle || '' }
                placeholder="Eg: Pride and Prejudice"
                maxLength={25}
                autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className='AddBookModalLabel'>Author</Form.Label>
              <Form.Control
                type="text"
                maxLength={25}
                onChange={BookAuthorFunc}
                value = {bookAuthor || '' }
                placeholder="Eg: Jane Austen"/>
            </Form.Group>

            
            <Form.Label className='AddBookModalLabel'>Language</Form.Label>
            <Form.Select onChange={BookLanguageFunc} value ={ bookLanguage || '' } aria-label="Default select example">
            <option>Select Language</option>
            <option value="Malayalam">Malayalam</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
          </Form.Select>
            

         <div className='d-flex justify-content-center gap-3 mt-4'> 
            <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput3">
                <Form.Label className='AddBookModalLabel mb-1'>Total Copies</Form.Label>
                <Form.Control
                  type="number"
                  onChange={BookTotalCopiesFunc}
                  value = { booktotalCopies || '' }
                  placeholder="5"/>
              </Form.Group>

              <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput4">
                <Form.Label className='AddBookModalLabel mb-1'>Remaining</Form.Label>
                <Form.Control
                  type="number"
                  onChange={BookRemainingCopiesFunc}
                  value = {bookremainingCopies || ''}
                  placeholder="2"/>
              </Form.Group>
           
          </div> 
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer className='mx-4'>
          <button className='AllBookCloseBtn'  onClick={handleCloseBook }>
            Cancel
          </button>
          <button className='AllBookAddBtn' onClick={() => {handleCloseBook();{selectedAllbooks ? handleEditAllBook() : handleAddAllBook()}}}>
            {selectedAllbooks ? 'Edit book' :' Add Book'}
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
}
 
export default AddBookModal;