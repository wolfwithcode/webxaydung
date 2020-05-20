import React from 'react';

import './product_gallery.styles.scss';

function ProductGallery({images}){
    var newImages = images.slice(1);
    return(
        <div className='container-fluid p-0 product-gallery'>
            <div id='carousel-custom' className='carousel slide' data-ride='carousel'>
                <div className='carousel-outer'>
                    {/* <!-- Wrapper for slides --> */}
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img className="d-block w-100" src={images[0]} alt='' />
                        </div>
                        {newImages.map((image) => (
                            <div className='carousel-item'>
                                <img className="d-block w-100" src={image} alt='' />
                            </div>
                        ))}
                    </div>
                </div>

                    {/* <!-- Indicators --> */}
                <ol className='carousel-indicators'>
                    <li data-target='#carousel-custom' data-slide-to='0' className='active'><img src={images[0]} alt='' /></li>
                    {newImages.map((image, index) => (
                        <li data-target='#carousel-custom' data-slide-to={`${index+1}`}><img src={image} alt='' /></li>
                    ))}
                </ol>

                {/* <!-- Controls --> */}
                <div className="carousel-control">
                    <a className="carousel-control-prev" href="#carousel-custom" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-custom" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductGallery;
