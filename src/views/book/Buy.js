import React from "react"
import { useState, useEffect } from 'react'
import {
    CButton,
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
  } from '@coreui/react'

function Buy() {
    const [address, setAddress] = useState({})
  const [validated, setValidated] = useState(false)

    function handleChange(event) {
        setAddress({...address, [event.target.name]:event.target.value})
    }
    const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
    }
    setValidated(true)
    console.log(event)
    }
return (
  <CForm
    className="row g-3 needs-validation"
    noValidate
    validated={validated}
    onSubmit={handleSubmit}
  >
    <CCol md={6}>
      <CFormInput
        type="text"
        name="name"
        defaultValue="Mark"
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
        defaultValue="Otto"
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
)
}

export default Buy