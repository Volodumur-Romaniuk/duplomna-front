import React from 'react';

import './MainVisit.css';

function MainVisit() {
  return (
    <div className="mainvisit">
        <div className="visit-text">
           <div className="text-visit">
                <p className="title1 font-oregano">How to find our restaurant </p>
                <p className="title2 josefin-sans ">VISIT US</p>
                <p className="title3  josefin-sans">France, Marseille, Main street 53, FR-MR 00584
                    onlineorder@cosushi.com | info@cosushi.com </p>
           </div>
           <div className="date-visit">
                 <p className="title2 josefin-sans ">OPENING HOURS:</p>
                       <div className="block-date-visit">
                         <p  className="title3  josefin-sans">
                             Monday – Friday
                         </p>
                         <p  className="title3  josefin-sans">
                         11.00 AM – 11.00 PM
                   </p>
                       </div>
                       <div className="block-date-visit">
                     <p  className="title3  josefin-sans">
                     Saturday – Sanday
                           </p>
                           <p  className="title3  josefin-sans">
                           12.00 AM – 12.00 PM
                           </p>
                        </div>
           </div>
           <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decorverylong.svg" alt="" />
        </div>
        <div className="visit-img">
             <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/homevideo.jpg" alt="" />
        </div>
    
    </div>
  );
}

export default MainVisit;
