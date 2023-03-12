import React from "react"
import { useState, useEffect } from 'react'
import buyBookAPI from "../bookAPI/buyBookAPI"
import bookAPI from "../bookAPI/bookAPI"
import {
    CButton,
    CForm,
    CCol,
    CFormInput,
  } from '@coreui/react'

function Buy() {
  const [address, setAddress] = useState({})
  const [validated, setValidated] = useState(false)
  const [bookList, setBookList] = useState([])
  const [buyShopBook, setBuyShopBook] = useState([])
  const [editBook, setEditBook] = useState({})
  const [price, setPrice] = useState()
  let result = 0
  async function fetchBookList() {
    const response = await bookAPI.getAll()
    setBookList(response.data)
  }

  async function fetchBuyBookList() {
    const response = await buyBookAPI.getAll()
    setBuyShopBook(response.data)
    
  }
  function results() {
    // khi render biến réult đã được gán rồi nên giá ở giao diện chưa thay đổi vân là 0đ
    for (let i = 0; i < buyShopBook.length; i++) {
      result += parseInt(buyShopBook[i].price)
    }
    return result
  }
   
  function handleChange(event) {
      setAddress({...address, [event.target.name]:event.target.value})
      console.log(address)
  }
  async function handleSubmit (event)  {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
    } 
    setValidated(true)
    await bookAPI.update(editBook.id, editBook).then(async () => fetchBookList())
    alert("giao dich thanh cong")
  }  
  // async function getBookById (id) {
  //   const book = await bookAPI.getById(id)
  //   setEditBook(book.data)
  //   console.log( editBook)
  // }

  function checkValue() {
    setPrice(results())
    // debugger
    let checkValues = false
    for (let i = 0;i < bookList.length;i++) {
      for (let j = 0;j < buyShopBook.length;j++) {
        checkValues = bookList[i].code.includes(buyShopBook[j].code)
        console.log([i] + [j] +checkValues)
        if (checkValues) {
          let newQuantity = parseInt(bookList[i].quantity) - 1
          setEditBook(book => {
            return {...bookList[i],quantity : newQuantity}})

          console.log(bookList[i])
          break
          // updateQuantityBookList(editBook.id,editBook)
        }
      }
      break
    }
  }
  useEffect(() => {
    fetchBookList()
    fetchBuyBookList()
  }, [])

return (
  <>
  <button onClick={() => checkValue()}>check</button>
  <CForm
    className="row g-3 needs-validation"
    noValidate
    validated={validated}
    onSubmit={handleSubmit}
  >
    <h5>Tổng số tiền cần thanh toán là: {price} đ</h5>
    <h2>Địa chỉ giao hàng</h2>
    <CCol md={6}>
      <CFormInput
        type="text"
        name="name"
        defaultValue="a"
        feedbackInvalid="Vui lòng nhập họ tên"
        id="validationCustom01"
        label="Họ tên"
        required
        onChange={handleChange}
      />
    </CCol>
    <CCol md={6}>
      <CFormInput
        type="email"
        name="email"
        defaultValue="anh@gamil.com"
        feedbackInvalid="Vui lòng nhập email"
        id="validationCustom02"
        label="Email đăng ký"
        required
        onChange={handleChange}
      />
    </CCol>
    <CCol md={4}>
      <CFormInput
        type="text"
        name="province"
        defaultValue="a"

        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Vui lòng nhập tên tỉnh"
        id="validationCustom03"
        label="Tỉnh"
        onChange={handleChange}
        required
      />
    </CCol>
    <CCol md={4}>
      <CFormInput
        type="text"
        name="district"
        defaultValue="a"

        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Vui lòng nhập tên quận, huyện"
        id="validationCustom03"
        label="Quận / Huyện"
        onChange={handleChange}
        required
      />
    </CCol>
    <CCol md={4}>
      <CFormInput
        type="text"
        name="commune"        
        defaultValue="a"

        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Vui lòng nhập tên xã, thị trấn"
        id="validationCustom03"
        label="Xã / Thị trấn"
        onChange={handleChange}
        required
      />
    </CCol>
    <CCol md={8}>
      <CFormInput
        type="text"
        name="address"
        defaultValue="a"

        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Vui lòng nhập tên đường, số nhà"
        id="validationCustom03"
        label="Đường & Số nhà"
        onChange={handleChange}
        required
      />
    </CCol>
    <CCol md={4}>
      <CFormInput
        type="phone"
        name="phoneNumber"
        defaultValue="123456789"

        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Vui lòng nhập số điện thoại"
        id="validationCustom03"
        label="Di động"
        onChange={handleChange}
        required
      />
    </CCol>
    
    <CCol xs={12}>
      <CButton color="primary" type="submit">
        Gửi đến địa chỉ này
      </CButton>
    </CCol>
  </CForm>
  </>
)
}

export default Buy