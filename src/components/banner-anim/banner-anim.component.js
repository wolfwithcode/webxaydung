import React from 'react';
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
// import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
// import 'rc-banner-anim/assets/index.css';
import './banner-anim.styles.scss';
  

// const BgElement = Element.BgElement;
class BannerAnimComp extends React.Component {
  constructor(){
    super();
    this.state = {
      banner_img: [
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793596/web0001_construction/img1_geghjy.jpg',
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793609/web0001_construction/img2_uiykti.jpg',
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793607/web0001_construction/img3_xcg2zu.jpg',
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793608/web0001_construction/img4_ubqgtn.jpg',
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793607/web0001_construction/img5_vgeduo.jpg',
        'https://res.cloudinary.com/stbhcm/image/upload/v1589793607/web0001_construction/img6_pv4pdx.jpg'
      ]
    }
  }

  render() {
    var new_images = this.state.banner_img.slice(1);
    return (
      <div className='banner-anim p-0'>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={this.state.banner_img[0]} alt="First slide"/>
              </div>
              {new_images.map((image,index) => (
                <div className="carousel-item">
                  <img className="d-block w-100" src={image} alt="Second slide"/>
              </div>
              ))}            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
    </div>
  )};
}

export default BannerAnimComp; 