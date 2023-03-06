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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CCol,
  CFormInput,
  CFormTextarea,
  CCollapse,
  CCard,
  CCardBody,
} from '@coreui/react'
import bookAPI from '../bookAPI/bookAPI'

function BookList() {
  const [bookList, setBookList] = useState([])
  const [editBook, setEditBook] = useState({})
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)

  async function fetchBookList() {
    const response = await bookAPI.getAll()
    setBookList(response.data)
  }

  async function deleteBookList(id) {
    await bookAPI.delete(id).then(async () => fetchBookList())
  }

  async function editBookList(id) {
    visible ? visible : setVisible(!visible)
    const editIteam = await bookAPI.getById(id)
    setEditBook(editIteam.data)
  }

  async function handleSubmit(event) {
    debugger
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    event.preventDefault()
    if (event.id) {
      await bookAPI.update(form).then(async () => fetchBookList())
    } else {
      await bookAPI.create(form).then(async () => fetchBookList())
    }
    console.log(event)
  }

  useEffect(() => {
    fetchBookList()
  }, [])

  // const handleChange = (event) => {
  //   debugger
  //   // setNewBook({[event.currentTarget.name] : event.currentTarget.value})
  //   console.log(event)
  // }

  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Create</CButton>
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
                  feedbackValid="Looks good!"
                  id="validationCustom01"
                  label="Mã sản phẩm"
                  // onChange={() =>handleChange()}
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
                  required
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="number"
                  defaultValue={editBook.Quantity}
                  name="quantity"
                  aria-describedby="validationCustom03Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom03"
                  label="Số lượng"
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
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  defaultValue={editBook.date}
                  name="date"
                  aria-describedby="validationCustom05Feedback"
                  feedbackInvalid="Not a value."
                  id="validationCustom05"
                  label="Ngày nhập"
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
                  required
                />
              </CCol>
              <CCol xs={6}>
                <CButton color="primary" type="submit" onClick={() => handleSubmit(editBook)}>
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
            return (
              <CTableRow key={book.id} className="text-center">
                <CTableHeaderCell scope=" row ">{book.id}</CTableHeaderCell>
                <CTableDataCell> {book.code} </CTableDataCell>
                <CTableDataCell> {book.name} </CTableDataCell>
                <CTableDataCell> {book.price} </CTableDataCell>
                <CTableDataCell> {book.Quantity} </CTableDataCell>
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
