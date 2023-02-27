import React from 'react'
import '../CSS-File/main.css'

function BookShopping () {

    return ( 
    <>
    <div className="header">
        <div className="header-top">
            <div className="row">
            <div className="col-5">
                <ul>
                    <li>
                        <a href="#"><i className="bi bi-info-circle"></i>Trợ giúp</a>
                    </li>
                    <li>
                        <a href="#"><i className="bi bi-newspaper"></i>Tin tức</a>
                    </li>
                    <li>
                        <a href="#"><i className="bi bi-tags-fill"></i>Khuyến mại</a>
                    </li>
                </ul>
            </div>
            <div className="col-7">
                <ul>
                    <li>
                        <a href="#"><i className="bi bi-person-check"></i>Đăng ký</a>
                    </li>
                    <li>
                        <a href="#"> <i className="bi bi-box-arrow-in-right"></i>Đăng nhập</a>
                    </li>
                    <li>
                        <a href="#"><i className="bi bi-boxes"></i>Kiểm tra đơn hàng</a>
                    </li>
                    <li>
                        <a href="#"><i className="bi bi-gift"></i>Ưu đãi & tiện ích</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="header-logo col-2">
                        <img src="../image/logo-new.png" alt=""/>
                    </div>
                    <div className="header__search col-6 col-lg-5">
                        <div className="input-group border border-0">
                            <button className="input-group-text sum">Tất cả</button>
                            <input type="text" className="form-control" placeholder="Bạn cần tìm gì?"
                                aria-label="Dollar amount (with dot and two decimal places)"/>
                            <button className="input-group-text"><i className="bi bi-search"></i></button>
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
                    <div className="header__shop col-2">
                        <div className="row">
                            <div className="col-3"><i className="bi bi-cart"></i></div>
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
                        <li className="menu-bottom"><a href="#" className="menu-bottom-link"> Truyện tranh hot</a></li>
                        <li className="menu-bottom"><a href="#" className="menu-bottom-link">Truyện tranh đồng giá</a></li>
                        <li className="menu-bottom">
                            <a href="#" className="menu-bottom-link">Truyện tranh theo chủ đề</a>
                            <ul className="menu-secondary">
                                <li><a href="#">Chinh thám</a></li>
                                <li><a href="#">Thám hiểm</a></li>
                                <li><a href="#">Ma thuật</a></li>
                                <li><a href="#">Đô thị</a></li>
                            </ul>
                        </li>
                        <li className="menu-bottom">
                            <a href="#" className="menu-bottom-link">Truyện tranh theo năm XB</a>
                            <ul className="menu-secondary">
                                <li><a href="#">Năm 2018</a></li>
                                <li><a href="#">Năm 2019</a></li>
                                <li><a href="#">Năm 2020</a></li>
                                <li><a href="#">Năm 2021</a></li>
                            </ul>
                        </li>
                        <li className="menu-bottom">
                            <a href="#" className="menu-bottom-link">Thuyện tranh theo quốc gia</a>
                            <ul className="menu-secondary">
                                <li><a href="#">Việt Nam</a></li>
                                <li><a href="#">Trung Quốc</a></li>
                                <li><a href="#">Nhật bản</a></li>
                                <li><a href="#">Mỹ</a></li>
                            </ul>
                        </li>
                        <li className="menu-bottom">
                            <a href="#" className="menu-bottom-link">Tác giả nổi tiếng</a>
                            <ul className="menu-secondary">
                                <li><a href="#">Eiichiro Oda</a></li>
                                <li><a href="#">Eiichiro Oda</a></li>
                                <li><a href="#">Fujiko Fujio</a></li>
                                <li><a href="#">Masashi Kishimoto</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="col-4">
                    <a href="#" className="menu-link">
                        <img src="../image/khuyen-mai-2.png" alt=""/>
                        Giảm thêm 2%
                    </a>
                </li>
                <li className="col-5">
                    <a href="./promotion.html" className="menu-link">
                        <img src="../image/khuyen-mai-hot.jpeg" alt=""/>
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
                        <a href="#">NXB Kim Đồng<small>(3)</small></a>
                        <a href="#">Trường ĐH Sư Phạm TP.HCM<small>(1)</small></a>
                        <a href="#">Phan Thị<small>(2)</small></a>
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
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="../image/banner-1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="../image/banner-2.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
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
                                <span><i className="bi bi-arrow-right-circle-fill"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-right__new-product__list">
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/cuoc-xam-lang-cua-be-muc-tap-8_52094_1.jpeg" className="card-img-top"
                                        alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="./detail.html" >Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</a></p>
                                        <p className="card-money">48.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/cuoc-xam-lang-cua-be-muc-tap-7_52093_1.jpeg" className="card-img-top"
                                        alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">Cuộc Xâm Lăng Của Bé Mực - Tập 7 (Tái Bản 2021)</a></p>
                                        <p className="card-money">48.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/naruto-tap-55-tai-ban-2021-_51279_1.jpeg" className="card-img-top"
                                        alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">Naruto - Tập 55 (Tái Bản 2022)</a></p>
                                        <p className="card-money">22.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/naruto-tap-50-tai-ban-_51164_1.jpeg" className="card-img-top"
                                        alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">Naruto - Tập 50 (Tái Bản 2022)</a></p>
                                        <p className="card-money">22.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-left">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/naruto-tap-49-tai-ban-2016-_48841_1.jpeg" className="card-img-top"
                                        alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">Naruto - Tập 49 (Tái Bản 2022)</a></p>
                                        <p className="card-money">22.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/tay-du-hi-tap-1_47946_1.jpeg" className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">Tây Du Hí - Tập 1 (Tái Bản 2021)</a></p>
                                        <p className="card-money">69.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/one-piece-tap-38_45663_1.jpeg" className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#">One Piece - Tập 38 (Tái Bản 2022)</a></p>
                                        <p className="card-money">25.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-right">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html" className="card-img"><img src="../image/boys-over-flowers-con-nha-giau-tap-28_108662_1.jpeg"
                                        className="card-img-top" alt="..."/></a>
                                    <div className="card-body">
                                        <p className="card-text"><a href="#" className="card-text">Boys Over Flowers - Con Nhà Giàu Tập 28</a></p>
                                        <p className="card-money">20.000<sub>đ</sub></p>
                                    </div>
                                    <div className="card-show-left">
                                        <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                        <a href="#" className="show-author">Anbe Masahiro</a>
                                        <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi. 
                                            Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                            Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...</p>
                                        <a href="#" className="show-text-more">Xem thêm</a>
                                        <b className="show-money">48.000<sub>đ</sub></b>
                                        <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                        <button className="show-buy">MUA NGAY</button>
                                        <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="main-right__hot-product">
                        <div className="row">
                            <h6 className="col-8">Truyện tranh bán chạy</h6>
                            <div className="col-4">
                                <a href="#">Xem tất cả </a>
                                <span><i className="bi bi-arrow-right-circle-fill"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-right__hot-product__list">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-23-bang-long-di-em-phan-1-_65613_1.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 23: Bằng Lòng Đi Em
                                                        (Phần 1)</a></p>
                                                        <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi.
                                                        Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                                        Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...
                                                        </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-22-trung-doi-be-ta-phan-2-_59677_1.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 22: Trung Đội Bê Ta
                                                        (Phần 2)</a></p>
                                                        <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi.
                                                        Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                                        Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ... 
                                                       </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-21-trung-doi-be-ta_52791_2.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 21: Trung Đội Bê Ta
                                                        (Phần 1)</a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi.
                                                Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                                Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...
                                                        </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-17-gieo-gi-gat-nay_31594_1.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 17: Gieo Gì Gặt Nấy
                                                    </a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-left">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi.
                                                        Nhưng tôi chưa tập hợp những phác thảo ý tưởng thô và mất thời gian cho phần bối cảnh nên đã hoãn lại mãi. 
                                                        Rất may là cuối cùng cũng được phát hành. Thật khó để sử dụng nhân vật mới ra lò, nhưng tôi nghĩ từ giờ tôi ...
                                                    </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/-hoc-sinh-chan-kinh-tap-8-anh-hung-ban-phim-(tang-kem-phong-an-b-r-o)_24212_1.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 8: Anh Hùng Bàn Phím
                                                    </a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi...
                                                        </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-5-do-la-than-chuong-(phat-hanh-27-08-2013)_22421_1.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 5: Đô La Thần Chưởng
                                                    </a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi...
                                                        </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-4-manh-ai-nay-xa-(tang-kem-phong-an-b-r-o)_22172_20506.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 4: Mạnh Ai Nấy Xả</a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-right">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi...
                                                       </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card">
                                                <a href="detail.html" className="card-img"><img src="../image/hoc-sinh-chan-kinh-tap-3-got-hong-len-ngoi-(tang-kem-phong-an-b-r-o)_21659_19597.jpeg"
                                                    className="card-img-top" alt="..."/></a>
                                                <div className="card-body">
                                                    <p className="card-text"><a href="#">Học Sinh Chân Kinh - Tập 3: Gót Hồng Lên Ngôi
                                                    </a></p>
                                                    <a href="#" className="bro">B.R.O</a>
                                                    <div className="row">
                                                        <p className="card-money col-5">29.500<sub>đ</sub></p>
                                                        <p className="reverse-money col-4"><del>35.000<sub>đ</sub></del></p>
                                                        <p className="sale-money col-2">-15%</p>
                                                    </div>
                                                </div>
                                                <div className="card-show-left">
                                                    <b className="show-head">Cuộc Xâm Lăng Của Bé Mực - Tập 8 (Tái Bản 2021)</b>
                                                    <a href="#" className="show-author">Anbe Masahiro</a>
                                                    <p className="show-text">Cuộc Xâm Lăng Của Bé Mực - Tập 8 Thật ra câu chuyện này tôi đã suy nghĩ từ trước rồi...
                                                       </p>
                                                    <a href="#" className="show-text-more">Xem thêm</a>
                                                    <b className="show-money">48.000<sub>đ</sub></b>
                                                    <button className="show-in-shop">THÊM VÀO GIỎ HÀNG</button>
                                                    <button className="show-buy">MUA NGAY</button>
                                                    <button className="show-like"><i className="bi bi-heart-fill"></i>Thêm vào yêu thích</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
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
                                <span><i className="bi bi-arrow-right-circle-fill"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="main-right__member-list"></div>
                </div>
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
            <hr style="margin-bottom:3px;"/>
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
            <hr style="margin-top: 3px;"/>
        </div>
    </div>
    </>
  )
} export default BookShopping