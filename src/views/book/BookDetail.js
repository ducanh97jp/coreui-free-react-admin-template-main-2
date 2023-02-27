import React from 'react'
import '../CSS-File/detail.css'

function BookDetails() {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="row">
            <div className="col-5">
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
            <div className="col-7">
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
              <div className="header-logo col-2">
                <img src="../image/logo-new.png" alt="" />
              </div>
              <div className="header__search col-6">
                <div className="input-group border border-0">
                  <button className="input-group-text sum">Tất cả</button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bạn cần tìm gì?"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <button className="input-group-text">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
              <div className="header__phone-number col-2">
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
              <div className="header__shop col-2 ">
                <div className="row">
                  <div className="col-3">
                    <i className="bi bi-cart"></i>
                  </div>
                  <div className="col-9">
                    <p>Giỏ hàng (0)</p>
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
              <a className="menu-link" href="#">
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
              <a href="promotion.html" className="menu-link">
                <img src="../image/khuyen-mai-hot.jpeg" alt="" />
                Chương Trình khuyến Mại
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="secondary-nav">
        <div className="container">
          <div>
            <a href="#" className="nav-link">
              Trang chủ
            </a>
            <span>/</span>
            <a href="#" className="nav-link">
              Truyện tranh Manga, Manhwa, Manhua khác
            </a>
            <span>/</span>
            <a href="#" className="story-name">
              Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
            </a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-detail">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="main-detail__img">
                  <img src="../image/cuoc-xam-lang-cua-be-muc-tap-8_52094_1.jpeg" alt="" />
                </div>
              </div>
              <div className="col-8 main-detail__body">
                <div className="row">
                  <div className="col-8">
                    <h3 className="body-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</h3>
                    <p>
                      <a href="#">Anbe Masahiro</a> (Tác giả)
                    </p>
                    <p>
                      <a href="#">Hinastu</a> (Dịch giả)
                    </p>
                    <h4>48.000 đ</h4>
                    <p className="status">
                      Tình trạng: <span>Còn hàng</span>
                    </p>
                    <small>
                      Tags: <a href="#">cuoc-xam-luoc-cua-be-muc</a>{' '}
                      <a href="#">Truyện tranh Manga, Manhwa, Manhua khác</a>
                    </small>
                    <div className="number input-group">
                      <label>Số Lượng:&ensp;&ensp;</label>
                      <button onClick="reduce()">-</button>
                      <input id="amount" type="text" value="1" />
                      <button onClick="augment()">+</button>
                    </div>
                    <div className="button-buy">
                      <button className="button-buy__in-cart">THÊM VÀO GIỎ HÀNG</button>
                      <button className="button-buy__buy">MUA NGAY</button>
                    </div>
                    <p className="body-text">
                      Gọi đặt hàng: <a href="#">(028) 123 446</a> hoặc <a href="#">0234 543 433</a>
                    </p>
                    <p className="body-text">Thông tin & Khuyến mãi</p>
                    <p className="body-text">Đổi trả trong vòng 7 ngày</p>
                    <p className="body-text note">
                      Sử dụng mỗi <span>3.000 BBxu</span> để được giảm 10.000đ.{' '}
                      <a href="#">Làm sao để lấy BBxu?</a>
                    </p>
                    <p className="body-text note">
                      Freeship nội thành Sài Gòn từ 150.000đ<sup>*</sup>. Chi tiết tại{' '}
                      <a href="#">đây</a>
                    </p>
                    <p className="body-text">Freeship taonf quốc từ 250.000đ</p>
                  </div>
                  <div className="col-4">
                    <div className="secondary">
                      <ul>
                        <li>
                          <i className="bi bi-heart"></i>Thêm vào yêu thích
                        </li>
                        <li>
                          <i className="bi bi-person-check"></i>Ưu đãi Khách hàng thân thiết
                        </li>
                        <li>
                          <i className="bi bi-truck"></i>Để được miễn phí vận chuyển
                        </li>
                      </ul>
                      <p>Share để nhận BBxu – Mua hàng 0đ</p>
                      <div className="secondary-button">
                        <button className="button-like">
                          <i className="bi bi-hand-thumbs-up"></i>
                          <b>Thích</b>0
                        </button>
                        <button className="button-twitter">
                          <i className="bi bi-twitter"></i>
                          <b>Tweet</b>
                        </button>
                        <button className="button-save">
                          <i className="bi bi-bullseye"></i>
                          <b>Save</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-same-kind">
          <div className="container">
            <div className="row">
              <a href="#" className="col-4">
                Sản phẩm cùng bộ
              </a>
              <p className="col-6">
                Trọn bộ 14 sản phẩm / Còn 3 sản phẩm có hàng / 135,000 <sub>đ</sub>
              </p>
              <a href="#" className="col-2">
                MUA NGAY
              </a>
            </div>
          </div>
        </div>
        <div className="main-same-kind-list">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <img
                    src="../image/cuoc-xam-lang-cua-be-muc-tap-8_52094_1.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <a href="#" className="card-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 8(Tái Bản 2021)
                    </a>
                    <a href="#" className="bro">
                      Anbe Masashiro
                    </a>
                    <p className="card-money col-5">
                      48.000<sub>đ</sub>
                    </p>
                  </div>
                  <div className="card-show-right">
                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                    <a href="#" className="show-author">
                      Anbe Masahiro
                    </a>
                    <p className="show-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ
                      trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian
                      cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng cũng được phát
                      hành. Thật khó để sử dụng nhân vật mới &quot ra lò &quot, nhưng tôi nghĩ từ
                      giờ tôi
                    </p>
                    <a href="#" className="show-text-more">
                      Xem thêm
                    </a>
                    <b className="show-money">
                      48.000<sub>đ</sub>
                    </b>
                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                    <button className="show-buy">MUA NGAY</button>
                    <button className="show-like">
                      <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <img
                    src="../image/cuoc-xam-lang-cua-be-muc-tap-7_52093_1.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <a href="#" className="card-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 7(Tái Bản 2021)
                    </a>
                    <a href="#" className="bro">
                      Anbe Masashiro
                    </a>
                    <p className="card-money col-5">
                      48.000<sub>đ</sub>
                    </p>
                  </div>
                  <div className="card-show-right">
                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                    <a href="#" className="show-author">
                      Anbe Masahiro
                    </a>
                    <p className="show-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ
                      trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian
                      cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng cũng được phát
                      hành. Thật khó để sử dụng nhân vật mới ra lò , nhưng tôi nghĩ từ giờ tôi ...
                    </p>
                    <a href="#" className="show-text-more">
                      Xem thêm
                    </a>
                    <b className="show-money">
                      48.000<sub>đ</sub>
                    </b>
                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                    <button className="show-buy">MUA NGAY</button>
                    <button className="show-like">
                      <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <img
                    src="../image/cuoc-xam-lang-cua-be-muc-tap-7_52093_1.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <a href="#" className="card-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 2(Tái Bản 2021)
                    </a>
                    <a href="#" className="bro">
                      Anbe Masashiro
                    </a>
                    <p className="card-money col-5">
                      39.000<sub>đ</sub>
                    </p>
                  </div>
                  <div className="card-show-right">
                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                    <a href="#" className="show-author">
                      Anbe Masahiro
                    </a>
                    <p className="show-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ
                      trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian
                      cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng cũng được phát
                      hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...
                    </p>
                    <a href="#" className="show-text-more">
                      Xem thêm
                    </a>
                    <b className="show-money">
                      48.000<sub>đ</sub>
                    </b>
                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                    <button className="show-buy">MUA NGAY</button>
                    <button className="show-like">
                      <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <img
                    src="../image/cuoc-xam-lang-cua-be-muc-tap-8_52094_1.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <a href="#" className="card-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 1(Tái Bản 2021)
                    </a>
                    <a href="#" className="bro">
                      Anbe Masashiro
                    </a>
                    <p className="card-money col-5">
                      48.000<sub>đ</sub>
                    </p>
                  </div>
                  <div className="card-show-left">
                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                    <a href="#" className="show-author">
                      Anbe Masahiro
                    </a>
                    <p className="show-text">
                      Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ
                      trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian
                      cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng cũng được phát
                      hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...
                    </p>
                    <a href="#" className="show-text-more">
                      Xem thêm
                    </a>
                    <b className="show-money">
                      48.000<sub>đ</sub>
                    </b>
                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                    <button className="show-buy">MUA NGAY</button>
                    <button className="show-like">
                      <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-information">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="information-table">
                  <h3>THÔNG TIN CHI TIẾT</h3>
                  <div className="table">
                    <table>
                      <tr>
                        <td>
                          Nhà xuất bản: <a href="#"> NXB Phụ Nữ Việt Nam</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Ngày xuất bản: 05/11/2021</td>
                      </tr>
                      <tr>
                        <td>
                          Nhà phát hành: <a href="#"> SkyBooks</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Kích thước: đóng hàng (RxD) 11.3 x 17.6 cm</td>
                      </tr>
                      <tr>
                        <td>Số trang: 200 trang</td>
                      </tr>
                      <tr>
                        <td>Trọng lượng: 400 gram</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="information-introduce">
                  <h3>Giới thiệu sản phẩm</h3>
                  <h5>Cuộc Xâm Lăng Của Bé Mực - Tập 8</h5>
                  <p>Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi.</p>
                  <p>
                    Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối
                    cảnh nên đã hoãn lại mãi. Rất may là cuối cùng cũng được phát hành. Thật khó để
                    sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi sẽ mở rộng phạm vi câu
                    chuyện hơn nữa.
                  </p>
                  <br />
                  <p>
                    Câu chuyện này là về nhật kí xâm lược đầy tình yêu và hòa bình của cô bé mực,
                    muốn chinh phục loài người - những kẻ đã làm ô nhiễm biển.
                  </p>
                  <p className="introduce-link">
                    <a href="#">Mua sách online</a> tại Bookbuy.vn và nhận nhiều ưu đãi.
                  </p>
                  <div className="button">
                    <button>Mua ngay</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="main-introduce">
                  <h4>
                    <a href="#">CÙNG TÁC GIẢ</a>
                  </h4>
                  <div>
                    <div className="card">
                      <img
                        src="../image/cuoc-xam-lang-cua-be-muc-tap-7_52093_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Cuộc Xâm Lăng Của Bé Mực - Tập 7(Tái Bản 2021)
                        </a>
                        <a href="#" className="bro">
                          Anbe Masashiro
                        </a>
                        <p className="card-money col-5">
                          48.000<sub>đ</sub>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/cuoc-xam-lang-cua-be-muc-tap-7_52093_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Cuộc Xâm Lăng Của Bé Mực - Tập 2(Tái Bản 2021)
                        </a>
                        <a href="#" className="bro">
                          Anbe Masashiro
                        </a>
                        <p className="card-money col-5">
                          39.000<sub>đ</sub>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/cuoc-xam-lang-cua-be-muc-tap-8_52094_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Cuộc Xâm Lăng Của Bé Mực - Tập 1(Tái Bản 2021)
                        </a>
                        <a href="#" className="bro">
                          Anbe Masashiro
                        </a>
                        <p className="card-money col-5">
                          48.000<sub>đ</sub>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="link">
                    <a href="#">Xem tất cả </a>
                    <span>
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </span>
                  </div>
                  <h4>
                    <a href="#">SẢN PHẨM BÁN CHẠY</a>
                  </h4>
                  <div>
                    <div className="card">
                      <img
                        src="../image/hoc-sinh-chan-kinh-tap-23-bang-long-di-em-phan-1-_65613_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Học Sinh Chân Kinh - Tập 23: Bằng Lòng Đi Em (Phần 1)
                        </a>
                        <a href="#" className="bro">
                          B.R.O
                        </a>
                        <div className="row">
                          <p className="card-money col-3">
                            29.500<sub>đ</sub>
                          </p>
                          <p className="reverse-money col-3">
                            <del>
                              35.000<sub>đ</sub>
                            </del>
                          </p>
                          <p className="sale-money col-2">-15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/hoc-sinh-chan-kinh-tap-22-trung-doi-be-ta-phan-2-_59677_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Học Sinh Chân Kinh - Tập 22: Trung Đội Bê Ta (Phần 1)
                        </a>
                        <a href="#" className="bro">
                          B.R.O
                        </a>
                        <div className="row">
                          <p className="card-money col-3">
                            29.500<sub>đ</sub>
                          </p>
                          <p className="reverse-money col-3">
                            <del>
                              35.000<sub>đ</sub>
                            </del>
                          </p>
                          <p className="sale-money col-2">-15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/hoc-sinh-chan-kinh-tap-21-trung-doi-be-ta_52791_2.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Học Sinh Chân Kinh - Tập 21: Trung Đội Bê Ta (Phần 1)
                        </a>
                        <a href="#" className="bro">
                          B.R.O
                        </a>
                        <div className="row">
                          <p className="card-money col-3">
                            29.500<sub>đ</sub>
                          </p>
                          <p className="reverse-money col-3">
                            <del>
                              35.000<sub>đ</sub>
                            </del>
                          </p>
                          <p className="sale-money col-2">-15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/hoc-sinh-chan-kinh-tap-17-gieo-gi-gat-nay_31594_1.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Học Sinh Chân Kinh - Tập 27: Gieo Gì Gặt Nấy (Phần 1)
                        </a>
                        <a href="#" className="bro">
                          B.R.O
                        </a>
                        <div className="row">
                          <p className="card-money col-3">
                            29.500<sub>đ</sub>
                          </p>
                          <p className="reverse-money col-3">
                            <del>
                              35.000<sub>đ</sub>
                            </del>
                          </p>
                          <p className="sale-money col-2">-15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        src="../image/hoc-sinh-chan-kinh-tap-3-got-hong-len-ngoi-(tang-kem-phong-an-b-r-o)_21659_19597.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <a href="#" className="card-text">
                          Học Sinh Chân Kinh - Tập 3: Gót Hồng Lên Ngôi (Phần 1)
                        </a>
                        <a href="#" className="bro">
                          B.R.O
                        </a>
                        <div className="row">
                          <p className="card-money col-3">
                            29.500<sub>đ</sub>
                          </p>
                          <p className="reverse-money col-3">
                            <del>
                              35.000<sub>đ</sub>
                            </del>
                          </p>
                          <p className="sale-money col-2">-15%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-together">
          <div className="container">
            <div className="main-together-head">
              <a href="#" className="together-link">
                Sản phẩm cùng loại{' '}
              </a>
              <span>/</span>
              <a href="#" className="together-link-looked">
                Đã xem
              </a>
            </div>
            <hr />
            <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-body">
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/nhat-quy-nhi-ma-thu-ba-van-la-takagi-tap-9_120028_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Nhất Quỷ Nhì Ma, Thứ Ba (Vẫn Là) Takagi - Tập 9
                          </a>
                          <a href="#" className="bro">
                            Soichiro Yamamoto
                          </a>
                          <p className="card-money col-5">
                            30.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/tanaka-luc-nao-cung-vat-vo-tap-3_120023_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Tanaka Lúc Nào Cũng Vật Vờ - Tập 3
                          </a>
                          <a href="#" className="bro">
                            Nozomi Uda
                          </a>
                          <p className="card-money col-5">
                            38.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/kaguya-sama-cuoc-chien-to-tinh-tap-2_120022_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Kaguya-Sâm: Cuộc Chiến Tỏ Tình - Tập 2
                          </a>
                          <a href="#" className="bro">
                            Aka Akasaka
                          </a>
                          <p className="card-money col-5">
                            42.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/ninja-rantaro-tap-62_120021_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Ninja Rantaro - Tập 62
                          </a>
                          <a href="#" className="bro">
                            Soubee Amako
                          </a>
                          <p className="card-money col-5">
                            40.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/co-ban-toi-tham-thich-lai-quen-mang-kinh-roi-tap-5_120020_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Cô Bạn Tôi Thầm Thích lại Quên Mang Kính Rồi - Tập 5
                          </a>
                          <a href="#" className="bro">
                            Koume Fujichika
                          </a>
                          <p className="card-money col-5">
                            38.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-left">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-body">
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/dragon-quest-dau-an-roto-perfect-edition-tap-10_120018_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Dragon Quest - Dấu Ấn Roto - Perfect Edition Tập 10
                          </a>
                          <a href="#" className="bro">
                            Kamui Fujiwara
                          </a>
                          <p className="card-money col-5">
                            75.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/dragon-quest-dau-an-roto-perfect-edition-tap-9_120017_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Dragon Quest - Dấu Ấn Roto - Perfect Edition Tập 9
                          </a>
                          <a href="#" className="bro">
                            Kamui Fujiwara
                          </a>
                          <p className="card-money col-5">
                            75.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/blue-flag-tap-3_120016_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Blue Flag - Tập 3
                          </a>
                          <a href="#" className="bro">
                            Kaito
                          </a>
                          <p className="card-money col-5">
                            45.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/vua-sang-che-tap-18_120003_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Vua Sáng Chế
                          </a>
                          <a href="#" className="bro">
                            Tastuki Nohda
                          </a>
                          <p className="card-money col-5">
                            20.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-right">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-body-item">
                      <div className="card">
                        <img
                          src="../image/birdmen-tap-7_120002_1.jpeg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <a href="#" className="card-text">
                            Birdmen - Tập 7
                          </a>
                          <a href="#" className="bro">
                            Yellow Tanabe
                          </a>
                          <p className="card-money col-5">
                            30.000<sub>đ</sub>
                          </p>
                        </div>
                        <div className="card-show-left">
                          <b className="show-head">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)
                          </b>
                          <a href="#" className="show-author">
                            Anbe Masahiro
                          </a>
                          <p className="show-text">
                            Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ
                            từ trước rồi. Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất
                            thời gian cho phần bối cảnh nên đã hoãn lại mãi. Rất may là cuối cùng
                            cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi
                            nghĩ từ giờ tôi ...
                          </p>
                          <a href="#" className="show-text-more">
                            Xem thêm
                          </a>
                          <b className="show-money">
                            48.000<sub>đ</sub>
                          </b>
                          <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                          <button className="show-buy">MUA NGAY</button>
                          <button className="show-like">
                            <i className="bi bi-heart-fill"></i>Thêm vào yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
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
        </div>
        <div className="main-comment">
          <div className="container">
            <h4>NHẬN XÉT CỦA KHÁCH HÀNG</h4>
            <hr />
            <p>
              Bạn cần đăng nhập để bình luận.<a href="#">Đăng nhập tại đây.</a>
            </p>
            <h5>Chưa có đánh giá</h5>
            <hr />
            <div></div>
          </div>
        </div>
        <div className="main-comment-content">
          <div className="container">
            <div>
              <p className="comment-number">0 bình luận</p>
              <div className="comment-select">
                <p>Sắp xếp theo:</p>
                <select>
                  <option>Cũ nhất</option>
                  <option>Mới nhất</option>
                </select>
              </div>
              <hr />
              <input type="text" placeholder="Viết bình luận..." />
              <hr />
              <a href="#">
                <img src="../image/face.jpeg" />
                Plugin bình luận trên Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="share">
        <div className="container p-0">
          <div className="row">
            <div className="col-2">
              <img src="../image/canh-cam-letter.png" alt="" />
            </div>
            <div className="col-4">
              <h4>Đăng ký nhận bản tin từ Bookbuy</h4>
              <p>Đừng bỏ lỡ những tin nhắn ưu đãi độc quyền dành riêng cho bạn</p>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  placeholder="Nhập địa chỉ email của bạn"
                />
                <button className="input-group-text">NAM</button>
                <button className="input-group-text">NỮ</button>
                <button className="input-group-text">LGBT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
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
          <div className="hr"></div>
          <div className="row">
            <div className="col-8 transaction">
              Chấp nhận thanh toán :
              <img src="../image/tien-mat.jpeg" alt="" />
              <img src="../image/vib-bank.jpeg" alt="" />
              <img src="../image/bidv-bank.jpeg" alt="" />
              <img src="../image/vp-bank.png" alt="" />
            </div>
            <div className="col-4">
              Làm bạn với BookBuy :
              <img src="../image/face.jpeg" alt="" />
              <img src="../image/zalo.png" alt="" />
              <img src="../image/instagram.jpeg" alt="" />
              <img src="../image/twitter.png" alt="" />
              <img src="../image/youtube.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetails
