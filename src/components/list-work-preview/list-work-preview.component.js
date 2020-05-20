import React from 'react';

import ListWorkDetails from '../list-work-details/list-work-details.component';

import './list-work-preview.styles.scss';

function ListWorkPreview({id, title, details, image}) {
    return (
        <div className='container-fluid p-0 list-work-preview'>
            <div className='col-12 p-0 list-work-preview-content'>
                <div className='d-flex list-work-title'>                    
                    <div className='id'>{id}</div>
                    <div className='work-title'>{title}</div>
                </div>
                <div className='col-12 p-0 list-work-details'>                
                    {details.map((detail, index) => (
                        <ListWorkDetails content={detail} id={index} key={index} />
                    ))}  
                </div>
                <div className='col-12 p-0 list-work-img text-center'>
                    <img alt="img" className="img-inner img-fluid" src= {image}/> 
                </div>
            </div>
                 
        </div>
    )
}

export default ListWorkPreview;
