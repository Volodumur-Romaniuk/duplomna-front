import React from 'react';

import './SingleProduct.css';

function SingleProduct() {
  return (
      <div className="single-product">
           <div className="aboutel-title">
                <img className="img-about" src="https://i.ibb.co/Lg8ZRmC/inner4.jpg" alt="" />
                <div className="aboutel-title-text">
                    <p className="title2 josefin-sans ">NAME</p>
                    <p className="title3  josefin-sans">  
                         Fermentum, parturient libero a tortor. Vitae vestibulum, consectetur orci pulvinar.     <br /> Ipsum ante eu morbi malesuada molestie malesuada et amet.  
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="product-info">
                    <div className="img-product">
                        <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog1-600x400.jpg" alt="" />
                    </div>
                    <div className="text-product">
                        <p className="title2 josefin-sans ">NAME</p>
                        <p className="title3  josefin-sans">  
                            Sed sit fermentum vestibulum non venenatis 
                            vitae vitae. Ipsum praesent pharetra euismod 
                            semper elit vestibulum nibh. Ipsum cursus 
                            tortor odio maecenas. Sit nec risus, elementum 
                            diam at proin urna. Tristique sagittis massa 
                            accumsan, sit elementum dignissim iaculis
                        </p>
                        <div className="action-product">
                            <div className="row-button   josefin-sans">
                                <input type = "number" value = '1'/>
                            </div>
                            <div className="slider-buttons btn josefin-sans">
                                <button className="josefin-sans">Add to card</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

      </div>
  );

}

export default SingleProduct;