import React from 'react';
import './AboutMain.css';

function AboutMain() {
  return (
    <div className="aboutmain">
        <div className="two-line">
             
             </div>
       <div className="about-info">
            <p className="title2 josefin-sans ">ABOUT</p>

            <p className="title3  josefin-sans">  
            Mi sapien facilisis tellus elementum dictumst sed dictumst facilisis tincidunt <br />
            vestibulum elementum congue turpis tortor viverra <br />
            sit sapien tortor velit, massa  </p>
           
       </div>
       <div className="about-grid">
         <div className="about-img">
           <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/ha1.jpg" alt="" />
         </div>
         
         <div className="about-bettween">
             <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/decor2.svg" alt="" />
             <p className="title3  josefin-sans">
             Accumsan, tristique tellus amet mi  <br /> 
             sollicitudin ornare diam amet  <br /> 
             suspendisse. Pulvinar tempor diam  <br /> 
             sollicitudin gravida porttitor enim  <br /> 
             convallis. Faucibus amet integer  <br /> 
             tempus consectetur a faucibus nisl
             </p>
             <div className="slider-buttons btn josefin-sans">
                            
                             <button className="  josefin-sans"> Read More</button>
                         </div>
         </div>
         <div className="about-img">
             <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/ha2.jpg" alt="" />
         </div>
       </div>
       </div>
    
  );
}

export default AboutMain;
