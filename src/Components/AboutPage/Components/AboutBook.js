import React from 'react';

import './AboutBook.css';

function AboutBook() {
  return (
    <div className="about-book">
        <div className="container-about-book">
             <div className="about-book-text">
                 <p className="title1 font-oregano"> Book a table in 2 clicks</p>
                 <p className="title2 josefin-sans "> BOOK ONLINE</p>
                 <p className="title3  josefin-sans">
                 Accumsan, tristique tellus amet mi sollicitudin ornare diam amet suspendisse. Pulvinar tempor diam sollicitudin gravida porttitor enim convallis. Faucibus amet integer consectetur              
                 </p>
                 <div className="slider-buttons btn josefin-sans">  
                             <button className="josefin-sans"> Book a Table</button>
                </div>
             </div>
            <div className="about-book-image">
                 <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/images2.jpg" alt="" className="img1" />
                 <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/images1.jpg" alt="" className="img2" />
                 <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/longdecor.svg" alt="" className="icon-left" />
            </div>
        </div>
    </div>
  );
}

export default AboutBook;
