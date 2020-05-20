import React from 'react';

import './navbar.styles.scss';


function Navbar() {
    return (
        <div className='navbar p-0'>
            <a href="/">Trang chủ</a>
            <div className="dropdown" >
                <button className="dropbtn">Giới thiệu </button>
                <div className="dropdown-content">
                    <a href="/nav/type_content/gioithieu/Giới thiệu/">Giới thiệu</a>
                    <hr />
                    <a href="/nav/type_content/tamnhin/Tầm nhìn/">Tầm nhìn</a>
                </div>
            </div> 
            <div className="dropdown">
                <button className="dropbtn">Dịch vụ</button>
                <div className="dropdown-content">
                    <a href="/nav/type_content/dichvu/Thi công đinh chống cắt/">Thi công đinh chống cắt</a>
                    <hr />
                    <a href="/nav/type_content/thietke/Thiết kế/">Thiết kế</a>
                    <hr />
                    <a href="/nav/type_content/thicongphantho/Thi công phần thô/">Thi công phần thô</a>
                    <hr />
                    <a href="/nav/type_content/thiconghoanthien/Thi công hoàn thiện/">Thi công hoàn thiện</a>
                </div>
            </div> 
            <div className="dropdown">
                <button className="dropbtn">Hình ảnh</button>
                <div className="dropdown-content">
                    <a href="/nav/type_image/thietkebietthu/Thiết Kế Biệt Thự/">Thiết Kế Biệt Thự</a>
                    <hr />
                    <a href="/nav/type_image/thietkenhapho/Thiết Kế Nhà Phố/">Thiết Kế Nhà Phố</a>
                </div>
            </div> 
            <a href="/nav/type_content/tintuc/Tin tức/">Tin tức</a>
            <div className="dropdown">
                <button className="dropbtn">Tài liệu</button>
                <div className="dropdown-content">
                    <a href="/nav/type_content/tlnganhxddd/TL ngành XDDD/">TL ngành XDDD</a>
                    <hr />
                    <a href="/nav/type_content/tlnganhcauduong/TL ngành cầu đường 2/">TL ngành cầu đường 2</a>
                </div>
            </div> 
            <a href="/nav/type_content/khuyenmai/Khuyến mãi/">Khuyến mãi</a>
            <a href="/nav/type_content/tuyendung/Tuyển dụng/">Tuyển dụng</a>
            <a href="/nav/type_content/lienhe/Liên hệ/">Liên hệ</a>
        </div>
    )
}

export default Navbar;
