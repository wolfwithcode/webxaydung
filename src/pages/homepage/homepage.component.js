import React from 'react';

import ProductList from '../../components/product_list/product_list.component';

import LIST_WORK_DATA from '../../components/list-work/list-work.data';

import './homepage.styles.scss';

const PRODUCT_LIST_DATA = LIST_WORK_DATA[0].details.slice(1);

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            product_list_data: PRODUCT_LIST_DATA
        }
    }

    render() {
        return (
            <div className='main'>
                {this.state.product_list_data.map((product_list, index) => (
                    <div className='product-list-item'  key={index}>
                        <ProductList product_list={product_list} />
                    </div>
                ))}
            </div>
        )
    }
}

export default HomePage;
