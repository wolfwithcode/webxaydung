import React from 'react';

import BannerAnimComp from '../banner-anim/banner-anim.component';
import Navbar from '../navbar/navbar.component';

import './header.styles.scss';

export default function Header() {
    return (
        <div className='container-fluid p-0 header'>
            <div className='col-12 p-0 logo'>
                <img 
                src={'https://res.cloudinary.com/stbhcm/image/upload/v1589974961/web0001_construction/construction_logo_zbeqah.png'} 
                alt='logo-img' className='img-fluid logo-img' />
            </div>
            <div className='col-12 menu-bar'>
                <Navbar />
            </div>
            <div className='col-12 banner p-0 m-0'>
                <BannerAnimComp />
            </div>
        </div>        
    )
}
