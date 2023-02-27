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
  CFormLabel,
  CInputGroup,
  CFormSelect,
} from '@coreui/react'
import bookAPI from '../bookAPI/bookAPI'

function BookList() {
  const [bookList, setBookList] = useState([])
  const [editBook, setEditBook] = useState()
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)

  async function fetchBookList() {
    const response = await bookAPI.getAll()
    console.log(response)
    setBookList(response.data)
  }

  async function deleteBookList(id) {
    debugger;
    await bookAPI.delete(id).then(async () => fetchBookList())
  }

  async function editBookList(id) {
    const editIteam = await bookAPI.getById(id)
    setEditBook(editIteam.data)
  }

  useEffect(() => {
    fetchBookList()
  }, [])

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Create new book</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Thông tin sản phẩm mới</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={4}>
              <CFormInput
                type="text"
                defaultValue=""
                feedbackValid="Looks good!"
                id="validationCustom01"
                label="Mã sản phẩm"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                defaultValue=""
                feedbackValid="Looks good!"
                id="validationCustom02"
                label="Tên sản phẩm"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustomUsername">Tác Giả</CFormLabel>
              <CInputGroup className="has-validation">
                <CFormInput
                  type="text"
                  aria-describedby="inputGroupPrependFeedback"
                  feedbackValid="Please choose a username."
                  id="validationCustomUsername"
                  required
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom03Feedback"
                feedbackInvalid="Please provide a valid city."
                id="validationCustom03"
                label="Giá"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect
                aria-describedby="validationCustom04Feedback"
                feedbackInvalid="Please select a valid state."
                id="validationCustom04"
                label="Số lượng"
                required
              >
                <option disabled>Choose...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Năm sb"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Quốc gia"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Ảnh"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Ngày nhập"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Tóm tắt"
                required
              />
            </CCol>
            <CCol xs={12}>
              <CButton color="primary" type="submit">
                Create
              </CButton>
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
      <CTable>
        <CTableHead>
          <CTableRow classNameName="text-center">
            <CTableHeaderCell scope=" col "> STT </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Mã sản phẩm </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Tên sảnn phẩm </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Giá </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Số lượng </CTableHeaderCell>
            <CTableHeaderCell scope=" col "> Tg nhập </CTableHeaderCell>
            <CTableHeaderCell colSpan={2} scope=" col ">
              {' '}
              Chức năng{' '}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {bookList.map((book) => {
            return (
              <CTableRow key={book.id} classNameName="text-center">
                <CTableHeaderCell scope=" row ">{book.id}</CTableHeaderCell>
                <CTableDataCell> {book.code} </CTableDataCell>
                <CTableDataCell> {book.name} </CTableDataCell>
                <CTableDataCell> {book.price} </CTableDataCell>
                <CTableDataCell> {book.quantity} </CTableDataCell>
                <CTableDataCell> {book.time} </CTableDataCell>
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
