
import React, { useEffect, useState } from 'react'
import bookAPI from '../bookAPI/bookAPI'
import '../CSS-File/main.css'

function BookShopping() {

    const [bookList, setBookList] = useState([])
    const [buyShopBook, setBuyShopBook] = useState({})
    let quantityBuyBook = 0
    let showLeft = 0

    async function fetchBookList() {
        const response = await bookAPI.getAll()
        setBookList(response.data)
    }

    const importShop = (event) => {
      debugger
      setBuyShopBook({...buyShopBook, event})
      if (event) {
        quantityBuyBook += 1
      }
      console.log(buyShopBook)
    }

    const buyBook = () => {
      
    }

    useEffect(() => {
        fetchBookList()
      }, [])

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="row">
            <div className="col-4">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-info-circle"></i>Trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-newspaper"></i>Tin tức
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-tags-fill"></i>Khuyến mại
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-person-check"></i>Đăng ký
                  </a>
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="bi bi-box-arrow-in-right"></i>Đăng nhập
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-boxes"></i>Kiểm tra đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-gift"></i>Ưu đãi & tiện ích
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="header__search col-6 col-lg-5">
                <div className="input-group border border-0">
                  <button className="input-group-text sum">Tất cả</button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên truyện cần tìm?"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <button className="input-group-text">
                    Search
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
              <div className="header__phone-number col-3">
                <div className="row">
                  <div className="col-3">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="col-9">
                    <h6>0123 456 789</h6>
                    <p>Hot line</p>
                  </div>
                </div>
              </div>
              <div className="header__shop col-3">
                <div className="row">
                  <div className="col-3">
                    <i className="bi bi-cart"></i>
                  </div>
                  <div className="col-9">
                    <p>Giỏ hàng ({quantityBuyBook})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="container p-0">
          <ul className="row p-0">
            <li className="col-3">
              <a className="menu-link">
                <div className="row">
                  <div className="col-2">
                    <i className="bi bi-list"></i>
                  </div>
                  <div className="col-8"> Danh mục sản phẩm</div>
                  <div className="col-2 arrow">
                    <i className="bi bi-caret-down-fill"></i>
                  </div>
                </div>
              </a>
              <ul className="nav-menu">
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    {' '}
                    Truyện tranh hot
                  </a>
                </li>
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    Truyện tranh đồng giá
                  </a>
                </li>
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    Truyện tranh theo chủ đề
                  </a>
                  <ul className="menu-secondary">
                    <li>
                      <a href="#">Chinh thám</a>
                    </li>
                    <li>
                      <a href="#">Thám hiểm</a>
                    </li>
                    <li>
                      <a href="#">Ma thuật</a>
                    </li>
                    <li>
                      <a href="#">Đô thị</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    Truyện tranh theo năm XB
                  </a>
                  <ul className="menu-secondary">
                    <li>
                      <a href="#">Năm 2018</a>
                    </li>
                    <li>
                      <a href="#">Năm 2019</a>
                    </li>
                    <li>
                      <a href="#">Năm 2020</a>
                    </li>
                    <li>
                      <a href="#">Năm 2021</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    Thuyện tranh theo quốc gia
                  </a>
                  <ul className="menu-secondary">
                    <li>
                      <a href="#">Việt Nam</a>
                    </li>
                    <li>
                      <a href="#">Trung Quốc</a>
                    </li>
                    <li>
                      <a href="#">Nhật bản</a>
                    </li>
                    <li>
                      <a href="#">Mỹ</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-bottom">
                  <a href="#" className="menu-bottom-link">
                    Tác giả nổi tiếng
                  </a>
                  <ul className="menu-secondary">
                    <li>
                      <a href="#">Eiichiro Oda</a>
                    </li>
                    <li>
                      <a href="#">Eiichiro Oda</a>
                    </li>
                    <li>
                      <a href="#">Fujiko Fujio</a>
                    </li>
                    <li>
                      <a href="#">Masashi Kishimoto</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="col-4">
              <a href="#" className="menu-link">
                <img src="../image/khuyen-mai-2.png" alt="" />
                Giảm thêm 2%
              </a>
            </li>
            <li className="col-5">
              <a href="./promotion.html" className="menu-link">
                <img src="../image/khuyen-mai-hot.jpeg" alt="" />
                Chương Trình khuyến Mại
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="main-left col-3 px-0">
              <div className="danh-muc">
                <h4>Danh mục</h4>
                <a href="#">Truyện tranh Việt Nam</a>
                <a href="#">Truyện tranh nước ngoài</a>
              </div>
              <div className="nha-sx">
                <h4>Theo nhà sản xuất</h4>
                <a href="#">
                  NXB Kim Đồng<small>(3)</small>
                </a>
                <a href="#">
                  Trường ĐH Sư Phạm TP.HCM<small>(1)</small>
                </a>
                <a href="#">
                  Phan Thị<small>(2)</small>
                </a>
              </div>
              <div className="gia">
                <h4>Theo giá</h4>
                <a href="#">Giá nhỏ hơn 50.000đ</a>
                <a href="#">Giá từ 100.000 - 200.000đ</a>
                <a href="#">Giá từ 200.000 - 300.000đ</a>
                <a href="#">Giá từ 300.000 - 400.000đ</a>
                <a href="#">Giá từ 400.000 - 500.000đ</a>
                <a href="#">Giá từ 500.000 - 1.000.000đ</a>
                <a href="#">Giá lớn hơn 1.000.000đ</a>
              </div>
            </div>
            <div className="main-right col-9 px-0">
              <div className="banner">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <img src="https://bookbuy.vn/Res/Images/Album/6bfae9a9-1025-43a0-bdf6-32918fa9dbfe.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img src="https://bookbuy.vn/Res/Images/Album/478e0bfd-fa75-4954-a7ac-e858b5ebe8d7.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="main-right__new-product">
                <div className="row">
                  <h6 className="col-8">Truyện tranh mới</h6>
                  <div className="col-4">
                    <a href="#">Xem tất cả</a>
                    <span>
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-right__new-product__list">
                <div className="row">
                  {bookList.map((book) => {
                    showLeft += 1
                    let classShow = (showLeft % 4 === 0) ? "card-show-left" : "card-show-right"
                    return (
                      <div className="col-3" key={book.id}>
                        <div className="card">
                          <a href={`/book/bookdetails/${book.id}`} className="card-img">
                            <img src={book.image} className="card-img-top" alt="..." />
                          </a>
                          <div className="card-body">
                            <p className="card-text">
                              <a href={`#/book/bookdetails/${book.id}`}>{book.name}</a>
                            </p>
                            <p className="card-money">
                              {book.price}
                              <sub>đ</sub>
                            </p>
                          </div>
                          <div className={classShow}>
                            <b className="show-head">{book.name}</b>
                            <a href="#" className="show-author">
                              {book.author}
                            </a>
                            <p className="show-text">{book.introduce}</p>
                            {/* <button className='border border-0' onClick={() => changeOverflow()}><a href="#" className="show-text-more">Xem thêm</a></button> */}
                            <b className="show-money">
                              {book.price}
                              <sub>đ</sub>
                            </b>
                            <button className="show-in-shop" onClick={() => importShop(book)}>THÊM VÀO GIỎ HÀNG</button>
                            <button className="show-buy" onClick={() => buyBook(book)}>MUA NGAY</button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="main-right__hot-product">
                <div className="row">
                  <h6 className="col-8">Truyện tranh bán chạy</h6>
                  <div className="col-4">
                    <a href="#">Xem tất cả </a>
                    <span>
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-right__hot-product__list">
                <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active" >
                      <div className="row">
                          {bookList.map((book) => {
                            showLeft += 1
                            let classShow = (showLeft % 4 === 0) ? "card-show-left" : "card-show-right"
                            if (book.id <= 4) {
                              return (
                            <div className="col-3" key={book.id}>
                              <div className="card">
                                <a href={`/book/bookdetails/${book.id}`} className="card-img">
                                  <img
                                    src={book.image}
                                    className="card-img-top"
                                    alt="..."
                                  />
                                </a>
                                <div className="card-body">
                                  <p className="card-text">
                                    <a href={`/book/bookdetails/${book.id}`}>
                                      {book.name}
                                    </a>
                                  </p>
                                  <a href="#" className="bro">
                                    B.R.O
                                  </a>
                                  <div className="row">
                                    <p className="card-money col-5">
                                      {book.price}<sub>đ</sub>
                                    </p>
                                    <p className="reverse-money col-4">
                                      <del>
                                        {book.price}<sub>đ</sub>
                                      </del>
                                    </p>
                                    <p className="sale-money col-2">-15%</p>
                                  </div>
                                </div>
                                <div className={classShow}>
                                  <b className="show-head">
                                  {book.name}
                                  </b>
                                  <a href="#" className="show-author">
                                    {book.author}
                                  </a>
                                  <p className="show-text">
                                    {book.introduce}
                                  </p>
                                  <b className="show-money">
                                    {book.price}<sub>đ</sub>
                                  </b>
                                  <button className="show-in-shop" onClick={() => importShop()}>THÊM VÀO GIỎ HÀNG</button>
                                  <button className="show-buy" onClick={() => buyBook()}>MUA NGAY</button>
                                </div>
                              </div>
                            </div>
                              )     
                            }
                          })}
                      </div>
                    </div>  
                    <div className="carousel-item" >
                      <div className="row">
                        {bookList.map((book) => {
                          showLeft += 1
                          let classShow = (showLeft % 4 === 0) ? "card-show-left" : "card-show-right"
                                  if (book.id > 4) {
                                    return (
                                      <div className="col-3" key={book.id}>
                                        <div className="card">
                                          <a href="detail.html" className="card-img">
                                            <img
                                              src={book.image}
                                              className="card-img-top"
                                              alt="..."
                                            />
                                          </a>
                                          <div className="card-body">
                                            <p className="card-text">
                                              <a href="#">
                                                {book.name}
                                              </a>
                                            </p>
                                            <a href="#" className="bro">
                                              B.R.O
                                            </a>
                                            <div className="row">
                                              <p className="card-money col-5">
                                                {book.price}<sub>đ</sub>
                                              </p>
                                              <p className="reverse-money col-4">
                                                <del>
                                                  35.000<sub>đ</sub>
                                                </del>
                                              </p>
                                              <p className="sale-money col-2">-15%</p>
                                            </div>
                                          </div>
                                          <div className={classShow}>
                                            <b className="show-head">
                                            {book.name}
                                            </b>
                                            <a href="#" className="show-author">
                                              {book.author}
                                            </a>
                                            <p className="show-text">
                                              {book.introduce}
                                            </p>
                                            <b className="show-money">
                                              {book.price}<sub>đ</sub>
                                            </b>
                                            <button className="show-in-shop" onClick={() => importShop()}>THÊM VÀO GIỎ HÀNG</button>
                                            <button className="show-buy" onClick={() => buyBook()}>MUA NGAY</button>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  }
                        })}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="main-right__member">
                <div className="row">
                  <h6 className="col-8">Thành viên</h6>
                  <div className="col-4">
                    <a href="#">Xem tất cả </a>
                    <span>
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-right__member-list"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="share">
        <div className="container p-0">
            <div className="row">
                <div className="col-2">
                    <img src="../image/canh-cam-letter.png" alt=""/>
                </div>
                <div className="col-4">
                    <h4>Đăng ký nhận bản tin từ Bookbuy</h4>
                    <p>Đừng bỏ lỡ những tin nhắn ưu đãi độc quyền dành riêng cho bạn</p>
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <input type="text" className="form-control"
                            aria-label="Dollar amount (with dot and two decimal places)" placeholder="Nhập địa chỉ email của bạn"/>
                        <button className="input-group-text">NAM</button>
                        <button className="input-group-text">NỮ</button>
                        <button className="input-group-text">LGBT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        <div className="container p-0">
            <div className="row">
                <div className="col-3">
                    <p>HỖ TRỢ KHÁCH HÀNG</p>
                    <a href="#">Sản phẩm & Đơn hàng: 0123 456 789</a>
                    <a href="#">Kỹ thuật & Bảo hành: 0123 456 789</a>
                    <a href="#">Điện thoại: (023) 3649 7153 (giờ hành chính)</a>
                    <a href="#">Email: abc@gmail.com</a>
                    <a href="#">Địa chỉ: Số 2, Phố B, Thi trấn A, Q1, TP.HCM</a>
                </div>
                <div className="col-3">
                    <p>TRỢ GIÚP</p>
                    <a href="#">Đăng ký nhận bản tin</a>
                    <a href="#">Hướng dẫn mua hàng</a>
                    <a href="#">Phương thức thanh toán</a>
                    <a href="#">Phương thức vận chuyển</a>
                    <a href="#">Chính sách đổi - trả</a>
                </div>
                <div className="col-3">
                    <p>TÀI KHOẢN CỦA BẠN</p>
                    <a href="#">Cập nhập tài khoản</a>
                    <a href="#">Giỏ hàng</a>
                    <a href="#">Lịch sử giao dịch</a>
                    <a href="#">Sản phẩm yêu thích</a>
                    <a href="#"></a>
                </div>
                <div className="col-3">
                    <p>BOOKBUY</p>
                    <a href="#">Giới thiệu bookbuy.vn</a>
                    <a href="#">Bookbuy trên Facebook</a>
                    <a href="#">Liên hệ bookbuy</a>
                    <a href="#">Đặt hàng theo yêu cầu</a>
                    <a href="#">Tích lũy BBxu</a>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-8 transaction">
                    Chấp nhận thanh toán :
                    <img src="../image/tien-mat.jpeg" alt=""/>
                    <img src="../image/vib-bank.jpeg" alt=""/>
                    <img src="../image/bidv-bank.jpeg" alt=""/>
                    <img src="../image/vp-bank.png" alt=""/>
                </div>
                <div className="col-4">Làm bạn với BookBuy :
                    <img src="../image/face.jpeg" alt=""/>
                    <img src="../image/zalo.png" alt=""/>
                    <img src="../image/instagram.jpeg" alt=""/>
                    <img src="../image/twitter.png" alt=""/>
                    <img src="../image/youtube.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default BookShopping
