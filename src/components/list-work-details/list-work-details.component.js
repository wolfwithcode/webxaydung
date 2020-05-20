import React from 'react';

import {Link, withRouter} from 'react-router-dom';
 
import './list-work-details.styles.scss';

function ListWorkDetails({content, id}) {
    return (
        <div className='container-fluid'>
            <div className='row content'>
                <i class="fas fa-hammer"></i>
                <Link className='link-list-work' to={`/tk/${content}/${id}`}>
                    <div className="work_details">{content}</div>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(ListWorkDetails);
