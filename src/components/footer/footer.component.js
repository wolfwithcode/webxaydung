import React from 'react';

import './footer.styles.scss';

export default function Footer() {
    return (
        <div className='footer container-fluid p-0'>
            <div className='row'>
                <div className='col-4'>
                    <div className='col-12 text-info'>
                        <p className='footer-text'>Tên công ty</p>
                        <p className='footer-text'>Địa chỉ</p>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='col-12 text-info'>
                        <p className='footer-text'>Số điện thoại</p>
                        <a href='/nav/type_content/lienhe/Liên hệ/' className='footer-contact'>Liên hệ</a>
                    </div>
                </div>
                <div className='col-4 text-info'>
                    <div className='row contact-social'>
                        <a href='/' className='icon'>
                            <i class="fab fa-facebook-square"></i>
                            <p>facebook.com</p>
                        </a>
                    </div>
                    <div className='row contact-social'>
                        <a href='/' className='icon'>
                            <i class="fab fa-facebook-messenger"></i>
                            <p>messenger</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copy-right col-12'>
                <p className='footer-text'>&copy;STB Lê Đức Anh. All Rights Reserve.</p>
            </div>
        </div>
    )
}
