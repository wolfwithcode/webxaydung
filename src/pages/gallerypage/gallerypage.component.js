import React from 'react'

import ProductList from '../../components/product_list/product_list.component';

import './gallerypage.styles.scss';

class GalleryPage extends React.Component {
    render() {
        var pathname = this.props.location.pathname;
        var title = pathname.substring(4, pathname.indexOf('/',4));

        return (
            <div className='product-details-page'>
                <ProductList product_list={title}  type='type_gallery'/> 
            </div>
        )
    }
}

export default GalleryPage;
