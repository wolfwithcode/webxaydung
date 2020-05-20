import React from 'react';

import LIST_WORK_DATA from './list-work.data';

import ListWorkPreview from '../list-work-preview/list-work-preview.component';

import './list-work.styles.scss';

class ListWork extends React.Component {
    constructor(){
        super();
        this.state = {
            list_work_data: LIST_WORK_DATA
        }
    }

    render() {
        return (
            <div className='container-fluid p-0'>
                <div className='row list-works no-gutter'>
                    {this.state.list_work_data.map((list_data) => (
                        <div className='col-3 list-work' key={list_data.id}>
                            <ListWorkPreview {...list_data} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListWork;