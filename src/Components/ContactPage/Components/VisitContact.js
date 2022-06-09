import React from 'react';

import './VisitContact.css';

function  VisitContact() {
  return (
    <div className="visitcontact">
         <div className="aboutel-title">
            <img className="img-about" src="https://i.ibb.co/Lg8ZRmC/inner4.jpg" alt="" />
            <div className="aboutel-title-text">
            <p className="title2 josefin-sans ">CONTACT</p>
                <p className="title3  josefin-sans">  
                Fermentum, parturient libero a tortor. Vitae vestibulum, consectetur orci pulvinar.     <br /> Ipsum ante eu morbi malesuada molestie malesuada et amet.  </p>
            </div>
        </div>
        <div className="container">
            <div className="visit">
                 <div className="mainvisit">
                    <div className="visit-text">
                        <div className="text-visit">
                            <p className="title1 font-oregano">How to find our restaurant </p>
                            <p className="title2 josefin-sans ">VISIT US</p>
                            <p className="title3  josefin-sans">France, Marseille, Main street 53, FR-MR 00584
                                onlineorder@cosushi.com | info@cosushi.com 
                            </p>
                        </div>
                        <div className="date-visit">
                            <p className="title2 josefin-sans ">OPENING HOURS:</p>
                            <div className="block-date-visit">
                                <p  className="title3  josefin-sans">Monday – Friday</p>
                                <p  className="title3  josefin-sans">11.00 AM – 11.00 PM</p>
                            </div>
                            <div className="block-date-visit">
                                <p  className="title3  josefin-sans">Saturday – Sanday</p>
                                <p  className="title3  josefin-sans">12.00 AM – 12.00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-visit-contact">
                    <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/images2.jpg" alt="" className="img1" />
                    <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/images1.jpg" alt="" className="img2" />
                    <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/longdecor.svg" alt="" className="icon-left" /> 
                </div>
            </div>

        </div>
                
        
    </div>
  );
}

export default VisitContact;

