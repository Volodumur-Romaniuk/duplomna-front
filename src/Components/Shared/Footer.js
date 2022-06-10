import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
           <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decorverylong.svg"  alt="" />
        <div className="container-footer">
            <div className="info-footer">
            <p className="title3  josefin-sans">
            France, Marseille, Main street 53, FR-MR 00584 <br />
            onlineorder@cosushi.com | info@cosushi.com           
            </p>
            <p className="title2 josefin-sans "> Opening hours:</p>
                         <p className="title3  josefin-sans">
                         Monday - Friday: 11.00 AM - 11.00PM <br />
                     Saturday - Sanday: 12.00 AM - 12.00PM
                             
                         </p>
            </div>
            <div class="center">
        
                <div className="social-test">
 
                <ul class="social">
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i>
                </li>
                 <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
  
                 <li><i class="fa fa-github" aria-hidden="true"></i>
                </li>
  
                </ul>
                </div>
            </div>
            </div>
    
    </div>
  );
}

export default Footer;
