import React from 'react'
import { useState, useEffect } from 'react'
// import axiosClient from '../bookAPI/AxiosClient'
import {
  CTable,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CTableBody,
  CTableDataCell,
  CButton,
  CModalFooter,
  CForm,
  CCol,
  CFormInput,
  CFormTextarea,
  CCollapse,
  CCard,
} from '@coreui/react'
import bookAPI from '../bookAPI/bookAPI'

function BookList() {
  const [bookList, setBookList] = useState([])
  const [editBook, setEditBook] = useState({})
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)
  let stt = 0

  async function fetchBookList() {
    const response = await bookAPI.getAll()
    setBookList(response.data)
  }

  async function deleteBookList(id) {
    await bookAPI.delete(id).then(async () => fetchBookList())
  }

  async function editBookList(id) {
    if(visible) {
    } else {
      setVisible(true)
    }
    const editIteam = await bookAPI.getById(id)
    setEditBook(editIteam.data)
  }
    const handleChange = (event) =>{
      setEditBook({...editBook,[event.target.name]: event.target.value})
      console.log(editBook)
}
  async function handleSubmit(event) {
    debugger
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    // event.preventDefault()
    if (editBook.id) {
      await bookAPI.update(editBook.id, editBook).then(async () => fetchBookList())
    } else {
      setEditBook({...editBook})  
      await bookAPI.create(editBook).then(async () => fetchBookList())
    }
    
  }

  useEffect(() => {
    fetchBookList()
  }, [])


  return (
    <>
      <CButton onClick={() => {setVisible(!visible)
                              setEditBook({})}}>Create</CButton>
      <CCollapse visible={visible}>
        <CCard className="p-3 ">
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={4}>
                <CFormInput
                  type="text"
                  name="code"
                  defaultValue={editBook.code}
                  value={editBook.code}
                  feedbackValid="Looks good!"
                  id="validationCustom01"
                  label="Mã sản phẩm"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={8}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.name}
                  name="name"
                  feedbackValid="Looks good!"
                  id="validationCustom02"
                  label="Tên sản phẩm"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.author}
                  name="author"
                  feedbackValid="Looks good!"
                  id="validationCustom02"
                  label="Tác giả"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.price}
                  name="price"
                  aria-describedby="validationCustom03Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom03"
                  label="Giá"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="number"
                  defaultValue={editBook.quantity}
                  name="quantity"
                  aria-describedby="validationCustom03Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom03"
                  label="Số lượng"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="number"
                  defaultValue={editBook.years}
                  name="years"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Năm sb"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={5}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.country}
                  name="country"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Quốc gia"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.image}
                  name="image"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Ảnh"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  defaultValue={editBook.date}
                  name="date"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Ngày nhập"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={12}>
                <CFormTextarea
                  type="text"
                  defaultValue={editBook.introduce}
                  name="introduce"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Tóm tắt"
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol xs={6}>
                <CButton color="primary" type="submit">
                  Submit
                </CButton>
              </CCol>
              <CCol xs={6}>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                </CModalFooter>
              </CCol>
            </CForm>
        </CCard>
      </CCollapse>
      <CTable>
        <CTableHead>
          <CTableRow className="text-center">
            <CTableHeaderCell scope=" col "> STT </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Mã sản phẩm </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Tên sảnn phẩm </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Giá </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Số lượng </CTableHeaderCell>
            <CTableHeaderCell colSpan={2} scope=" col ">
              {' '}
              Chức năng{' '}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {bookList.map((book) => {
            stt += 1
            return (
              <CTableRow key={book.id} className="text-center">
                <CTableHeaderCell scope=" row ">{stt}</CTableHeaderCell>
                <CTableDataCell> {book.code} </CTableDataCell>
                <CTableDataCell> {book.name} </CTableDataCell>
                <CTableDataCell> {book.price} </CTableDataCell>
                <CTableDataCell> {book.quantity} </CTableDataCell>
                <CTableDataCell>
                  <CButton color="success" onClick={() => editBookList(book.id)}>
                    Edit
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" onClick={() => deleteBookList(book.id)}>
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default BookList
