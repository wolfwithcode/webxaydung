import React, { Component } from 'react';

import ContactForm from '../contact-form/contact-form.component';

import './product_content.styles.scss';

class ProductContent extends Component {
    render() {
        return (
            <div className='product-content'>
                {this.props.product_list==='Liên hệ' ?
                (
                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                )
                :
                <p>Chờ cập nhật nội dung</p>
                }
            </div>
        )
    }
}

export default ProductContent;
