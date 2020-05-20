import React, { Component } from 'react';

import ProductDetails from '../product_details/product_details.component';
import ProductGallery from '../product_gallery/product_gallery.component';
import ProductContent from '../product_content/product_content.component';

import PRODUCT_DATA from './product_data.data';
import IMAGES from './product_gallery.data';

import './product_list.styles.scss';

export default class ProductList extends Component {
    constructor(){
        super();
        this.state = {
            product_data: PRODUCT_DATA,
            images: IMAGES
        }
    }

    switchPages = (type) => {
        switch (type){
            case 'type_content':
                return (<div className='main_content' >
                            <ProductContent product_list={this.props.product_list}/>
                        </div>
                )              
            case 'type_gallery':
                var product_data = this.state.product_data;
                return (<div className='product-gallery-preview'>
                            <ProductGallery images={this.state.images} />
                            <br />
                            <div className='col-12 main-title text-center'>SẢN PHẨM LIÊN QUAN</div>
                            <hr />
                            <ProductDetails product_data={product_data} product_list={this.props.product_list}/>
                        </div>
                )
            default:
                return (<ProductDetails product_data={this.state.product_data}/>)
        }
    }

    render() {
        return (
            <div className='container-fluid p-0 product-list'>                
                <div className='col-12 main-title text-center'>
                    {this.props.product_list}
                </div>
                <hr />
                <div className='col-12 product-main-content'>
                    {
                        this.switchPages(this.props.type)
                    }
                </div>
            </div>
        )
    }
}
