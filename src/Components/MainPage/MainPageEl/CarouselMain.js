import React from 'react';
import  { useEffect,useState  } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CarouselMain.css';


function CarouselMain() {
    const sliderSettings = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        dots:true,
        autoplaySpeed: 10000,
        infinite: true,
        pauseOnHover:false,
      }
    
      
  return (
    <div className="carouselmain">
        <div className="slidermain">
            <Slider {...sliderSettings}>
                 <div  className="slider-info">
                     <img className='background-img'    src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/slider1.jpg" alt="" />
                     <div className="text-slider">
                         <div  className="decor-slider icon-none">
                            <img   src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decor.svg" alt="" />
                        </div>
                        <p className="title1 font-oregano"> explosion of tasty, fresh heathy</p>
                        <p className="title2 josefin-sans "> DELICIOUS SUSHI</p>
                         <p className="title3  josefin-sans">
                             Fermentum, parturient libero a tortor. Vitae vestibulum, consectefur orci pulnivar. <br />
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt molestiae <br />
                             voluptatibus repudiandae. Modi deserunt 
                             
                         </p>
                         <div className="slider-buttons btn josefin-sans">
                             <button className="josefin-sans">Online order</button>
                             <button className="josefin-sans"> Call + 45 64 23 12</button>
                         </div>
                     </div>
                 </div>
                 <div  className="slider-info">
                    
                     <img  className='background-img' src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/slider2.jpg" alt="" />
                     <div className="text-slider">
                        <div   className="decor-slider  icon-none">
                            <img  className="icon-none" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decor.svg" alt="" />
                        </div>

                        <p className="title1 font-oregano"> amazing sea food fresh</p>
                        <p className="title2 josefin-sans "> APPETIZING SUSHI</p>
                         <p className="title3  josefin-sans">
                             Fermentum, parturient libero a tortor. Vitae vestibulum, consectefur orci pulnivar. <br />
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt molestiae <br />
                             voluptatibus repudiandae. Modi deserunt 
                             
                         </p>
                         <div className="slider-buttons btn josefin-sans">
                             <button className="josefin-sans">Online order</button>
                             <button className="josefin-sans"> Call + 45 64 23 12</button>
                         </div>
                        
                    </div>
                 </div>
                 <div  className="slider-info">
                  <img   className='background-img' src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/slider3.jpg" alt="" />
                  <div className="text-slider">
                    <div  className="decor-slider icon-none">
                            <img  className="icon-none" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decor.svg" alt="" />
                    </div> 
                    <p className="title1 font-oregano"> fresh sea products heathy</p>
                        <p className="title2 josefin-sans "> LUSCIOUS SUSHI</p>
                         <p className="title3  josefin-sans">
                             Fermentum, parturient libero a tortor. Vitae vestibulum, consectefur orci pulnivar. <br />
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt molestiae <br />
                             voluptatibus repudiandae. Modi deserunt 
                             
                         </p>
                         <div className="slider-buttons  btn josefin-sans">
                             <button className="josefin-sans">Online order</button>
                             <button className="josefin-sans"> Call + 45 64 23 12</button>
                         </div>
                    
                </div>
                    
                 </div>
            </Slider>
        </div>
    </div>
  );
}

export default CarouselMain;