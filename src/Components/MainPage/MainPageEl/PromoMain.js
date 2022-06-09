import React from 'react';
import './PromoMain.css';

function PromoMain() {
  return (
    <div className="promomain">
       
       
       <div className="about-grid">
         
         
         <div className="about-bettween">
         <p className="title1 font-oregano"> Sushi set for sale</p>
                <p className="title2 josefin-sans ">PROMO</p>
             <p className="title3  josefin-sans">
             Accumsan, tristique tellus amet mi <br />
              sollicitudin ornare diam amet  <br />
              suspendisse. Pulvinar tempor diam <br />
              sollicitudin gravida porttitor enim <br />
              convallis. Faucibus amet integer <br />
              consectetur
             </p>
             <div className="slider-buttons btn josefin-sans">
                            
                            <button className="  josefin-sans"> Read More</button>
                        </div>
         </div>
         <div className="about-img">
         <img  className="icon" src="	https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decorlong.svg" alt="" />
             <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/hab.jpg" alt="" />
         </div>

         <div className="about-bettween">
         <p className="title1 font-oregano"> Best collection</p>
                <p className="title2 josefin-sans ">SUSHI</p>
             <p className="title3  josefin-sans">
             Accumsan, tristique tellus amet mi <br />
              sollicitudin ornare diam amet  <br />
              suspendisse. Pulvinar tempor diam <br />
              sollicitudin gravida porttitor enim <br />
              convallis. Faucibus amet integer <br />
              consectetur
             </p>
             <div className="slider-buttons btn josefin-sans">
                            
                            <button className="  josefin-sans"> Read More</button>
               </div>
         </div>
       </div>
       </div>
    
  );
}

export default PromoMain;
