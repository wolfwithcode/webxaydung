import React from 'react';

import ProductList from '../../components/product_list/product_list.component';

class OtherPages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page_content_list_data: ['/Báo Giá Thiết Kế/0', '/Báo Giá Xây Thô/0', '/Báo Giá Hoàn Thiện/1', 
                '/Pháp Lý Xây Dựng/2', '/Quy Trình Thi công/3', '/Gạch/0', '/Cát/1', '/Đá/2', '/Xi măng/3', 
                '/Sắt thép/4', '/Nội Thất khác/3', 'ĐƠN GIÁ THIẾT KẾ', 'ĐƠN GIÁ XÂY DỰNG', 'GÓI HOÀN THIỆN 4tr4',
                'GÓI HOÀN THIỆN 4tr4','XÂY NHÀ TRỌN GÓI 4tr6', 'XÂY NHÀ TRỌN GÓI 5tr', 'CÁCH TÍNH DIỆN TÍCH'],
            page_image_list_data: ['/Thiết Kế Nhà Phố/1','/Thiết Kế Biệt Thự/2', '/Thiết Kế Nội Thất/3',
                '/Nội Thất Phòng Khách/0', '/Nội Thất Phòng Bếp/1', '/Nội Thất Phòng Ngủ/2']
        }
    }

    render() {
        var content_title = undefined;
        if(this.props.match.params.text){
            content_title = this.props.match.params.text;
        } else {
            var pathname = this.props.location.pathname;
            content_title = pathname.substring(4, pathname.indexOf('/',4)); 
        }
        return (
            <div className='other-pages'>
                {this.state.page_content_list_data.includes(content_title) || 
                this.props.match.params.type==='type_content'?
                    <ProductList product_list={content_title} type='type_content'/> 
                :
                    <ProductList product_list={content_title} type='type_image'/>
                }
            </div>
        )
    }
}

export default OtherPages;
