import React,{useState, useEffect} from "react";
import {
    CCol,
    CButton,
    CForm,
    CFormInput,
    CCollapse,
} from'@coreui/react'
import buyBookAPI from "../bookAPI/buyBookAPI";
import bookAPI from '../bookAPI/bookAPI';
function AddBookList() {
    const [buyShopBook, setBuyShopBook] = useState([])
    // bs
    const [address, setAddress] = useState({})
    const [bookList, setBookList] = useState([])
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [price, setPrice] = useState()
    // const [book,setBook] = useState({})
    let result = 0

    async function fetchBuyBookList() {
        const response = await buyBookAPI.getAll()
        setBuyShopBook(response.data)
    }
    //(
    async function fetchBookList() {
        const response = await bookAPI.getAll()
        setBookList(response.data)
      }
    function results() {
      // khi render biến réult đã được gán rồi nên giá ở giao diện chưa thay đổi vân là 0đ
      for (let i = 0; i < buyShopBook.length; i++) {
        result = result + (parseInt(buyShopBook[i].price) * buyShopBook[i].quantity)
      }
      return result
    }
    //)
    async function deleteBook(id) {
      await buyBookAPI.delete(id).then(async () => fetchBuyBookList())
    }
    useEffect(() => {
        fetchBuyBookList()
        fetchBookList()
      }, [])

      //bo xung
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
      checkValue()
      alert("giao dich thanh cong")
      setVisible(!visible)
    }  
    async function checkValue() {
      debugger
      let checkValues = false
      let data = {}
      for (let i = 0;i < bookList.length;i++) {
        for (let j = 0;j < buyShopBook.length;j++) {
          checkValues = bookList[i].code.includes(buyShopBook[j].code)
          if (checkValues) {
            let newQuantity = {quantity: parseInt(bookList[i].quantity) - parseInt(buyShopBook[j].quantity)}
            data = bookList[i]
            let datas = {...data, ...newQuantity}
            await bookAPI.update(datas.id, datas).then(async () => fetchBookList())
          }
        }
      }
    }
    function changePrice() {
      setVisible(!visible)
      setPrice(results())
    }

    return (
      <>
      <CCollapse visible={visible}>
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
        // defaultValue="a"
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
        // defaultValue="anh@gamil.com"
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
        // defaultValue="a"
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
        // defaultValue="a"
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
        // defaultValue="a"
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
        // defaultValue="a"
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
        type="tel"
        name="phoneNumber"
        // defaultValue="123456789"
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
      </CCollapse>
      <br/>
       {/* bo sung */}
       <CCollapse visible={!visible}>
      <div className="row" >
      {buyShopBook .map(book =>{
            return (
                <div className="col-3"  key={book.id}>
                <div className="card" style={{height:'350px'}}>
                  <a href={`#/book/bookdetails/${book.id}`} className="card-img">
                    <img src={book.image} style={{height:"200px"}} className="card-img-top" alt="..." />
                  </a>
                  <div className="card-body">
                    <p className="card-text">
                      <a href={`#/book/bookdetails/${book.id}`}>{book.name}</a>
                    </p>
                    <p>Số lượng: {book.quantity}</p>
                    <div className="row">
                      <p className="card-money col-6">
                      {book.price}
                      <sub>đ</sub>
                    </p>
                    <button className="btn btn-danger col-6" onClick={() => deleteBook(book.id)}>Delete</button>
                    </div>
                  </div>
                </div>
                </div>
                
            )
        }
      )}
       </div>
       <CButton onClick={() => changePrice()}>Xac nhan</CButton>
       </CCollapse>
      </>
    )
}

export default AddBookList