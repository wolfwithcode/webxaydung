import React from 'react';

import SidebarPreview from '../sidebar_preview/sidebar_preview.component';

import './sidebar.styles.scss';

class Sidebar extends React.Component {
    constructor(){
        super();
        this.state = {
            sidebar_data:[
                {
                    sidebar_title: "ĐƠN GIÁ THIẾT KẾ",
                    price: "FREE",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/v1589793608/web0001_construction/sidebar1_lbdui5.gif'
                },
                {
                    sidebar_title: "ĐƠN GIÁ XÂY DỰNG",
                    price: "2.65tr/m2",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/v1589793609/web0001_construction/sidebar2_uiwopm.gif'
                },
                {
                    sidebar_title: "GÓI HOÀN THIỆN 4tr4",
                    price: "4.4tr/m2",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/v1589793609/web0001_construction/sidebar3_gmxijv.gif'
                },
                {
                    sidebar_title: "XÂY NHÀ TRỌN GÓI 4tr4",
                    price: "4.6tr/m2",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/v1589793609/web0001_construction/sidebar4_frixdz.gif'
                },
                {
                    sidebar_title: "XÂY NHÀ TRỌN GÓI 5tr",
                    price: "5tr/m2",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/v1589793609/web0001_construction/sidebar5_fglp9l.gif'
                },
                {
                    sidebar_title: "CÁCH TÍNH DIỆN TÍCH",
                    price: "",
                    background_img: 'https://res.cloudinary.com/stbhcm/image/upload/c_scale,w_238/v1589793609/web0001_construction/sidebar6_lofxmo.gif'
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid sidebar p-0">
                {this.state.sidebar_data.map((data, index) => (
                    <SidebarPreview key={index} {...data}/>
                ))}
            </div>
        )
    }
}

export default Sidebar;
