import React from 'react';

import {Link, withRouter} from 'react-router-dom';

import './sidebar_preview.styles.scss';

function SidebarPreview({sidebar_title, background_img, price}) {
    return (
        <div className='container-fluid p-0 sidebar-preview-component'>
            <Link to={`/tk/${sidebar_title}/`} className='sidebar-preview'>
                <div className='row sidebar-content justify-content-center'>            
                    <div className="col-12 p-0 sidebar-title text-center"> {sidebar_title} </div>
                    <div className="col-12 p-0 sidebar-image">
                        <img src={background_img} alt={background_img} className='img-fluid sidebar-background' />       
                    </div>  
                </div>
            </Link>
        </div>
    )
}

export default withRouter(SidebarPreview);