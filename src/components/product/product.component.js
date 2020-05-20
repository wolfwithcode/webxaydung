import React from 'react';

import {Link, withRouter} from 'react-router-dom';

import './product.styles.scss';

function Product({id, product}) {
    return (
        <div className='container-fluid p-0 product-component'>
            <Link to={`/sp/${product.title}/${id}`} className='product-link'>
                <div className='col-12 p-0 product-img'>
                    <img className='img img-fluid' src={product.image} alt={product.image}/>
                </div>  
                <div className='col-12 p-0 product-text-title'>
                    <p className='text-title text-center'>{product.title}</p>
                </div>        
            </Link>
        </div>
    )
}

export default withRouter(Product);
