import React from 'react';

import Product from '../product/product.component';

import './product_details.styles.scss';

export default function ProductDetails({product_data, product_list}) {
    var new_product_data = product_data.filter(item => item.title!==product_list);
    return (
        <div className='container-fluid p-0'>
            <div className='row main-content'>
                {new_product_data.map((product, index) => (
                    <div className='product_item col-4' key={index}>
                        <Product id={index} product={product}/>
                    </div>                    
                ))}
            </div>
        </div>
    )
}
