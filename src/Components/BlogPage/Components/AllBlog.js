import React from 'react';

import './AllBlog.css';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pagination from '@mui/material/Pagination';
function AllBlog() {
    const sliderSettings = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        pauseOnHover:false
      }
    
      const template = [

        { 
         img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review1.jpg",
         title1:" December 19, 2021 CRICOVA Sashimi",
         title2:" PROIN NISL NIBH",
         title3:"Director"
        },
        { 
            img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review1.jpg",
            title1:" December 19, 2021 CRICOVA Sashimi",
            title2:" PROIN NISL NIBH",
            title3:"Director"
           },
           { 
            img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review3.jpg",
            longtext:"Mus porta laoreet aenean quis faucibus integer. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. ",
            shorttext:"ELEN MARLEN",
            posada:"Chief"
           }
        
    ] 

  return (
      
    <div className="allblog">
       
        
       
        <div className="aboutel-title">
            <img className="img-about" src="https://i.ibb.co/Lg8ZRmC/inner4.jpg" alt="" />
            <div className="aboutel-title-text">
            <p className="title2 josefin-sans ">BLOG</p>
                <p className="title3  josefin-sans">  
                Fermentum, parturient libero a tortor. Vitae vestibulum, consectetur orci pulvinar.     <br /> Ipsum ante eu morbi malesuada molestie malesuada et amet.  </p>
            </div>
        </div>
       
            <div className="allblog-info"  >
                <div className="container">
                    <div className="allblog-grid">
                        <div className="grid-elem">
                             <div className="elem-grid">
                                 <div className="elem-grid-img">
                                      <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog8-768x512.jpg" alt="" />
                                 </div>
                                  <div className="elem-grid-text">
                                  <p className="title1 font-oregano"> December 19, 2021 CRICOVA Sashimi</p>
                                 <p className="title2 josefin-sans "> PROIN NISL NIBH</p>
                                  <p className="title3  josefin-sans">
                                  Proin nisl nibh egestas pellentesque viverra elit amet. Netus
                                   tellus tortor non eu. 
                                  Turpis eu sit metus, id sed id sit a aliquet. …

                                  </p>
                                  </div>
                             </div>
                             <div className="elem-grid">
                                 <div className="elem-grid-img">
                                      <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg" alt="" />
                                 </div>
                                  <div className="elem-grid-text">
                                  <p className="title1 font-oregano"> December 19, 2021 CRICOVA Sashimi</p>
                                 <p className="title2 josefin-sans "> PROIN NISL NIBH</p>
                                  <p className="title3  josefin-sans">
                                  Proin nisl nibh egestas pellentesque viverra elit amet. Netus
                                   tellus tortor non eu. 
                                  Turpis eu sit metus, id sed id sit a aliquet. …

                                  </p>
                                  </div>
                             </div>

                             <div className="elem-grid">
                                 <div className="elem-grid-img">

                                             <Slider {...sliderSettings}>

                                                 <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog9-768x512.jpg" alt="" />
                                                 <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg" alt="" />
                                                 <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg" alt="" />
                                              </Slider> 

                                 </div>
                                  <div className="elem-grid-text">
                                  <p className="title1 font-oregano"> December 19, 2021 CRICOVA Sashimi</p>
                                 <p className="title2 josefin-sans "> PROIN NISL NIBH</p>
                                  <p className="title3  josefin-sans">
                                  Proin nisl nibh egestas pellentesque viverra elit amet. Netus
                                   tellus tortor non eu. 
                                  Turpis eu sit metus, id sed id sit a aliquet. …

                                  </p>
                                  </div>
                             </div>
                             <div className="elem-grid">
                                 <div className="elem-grid-img">
                                      <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg" alt="" />
                                 </div>
                                  <div className="elem-grid-text">
                                  <p className="title1 font-oregano"> December 19, 2021 CRICOVA Sashimi</p>
                                 <p className="title2 josefin-sans "> PROIN NISL NIBH</p>
                                  <p className="title3  josefin-sans">
                                  Proin nisl nibh egestas pellentesque viverra elit amet. Netus
                                   tellus tortor non eu. 
                                  Turpis eu sit metus, id sed id sit a aliquet. …

                                  </p>
                                     </div>
                             </div>
                        </div>
                    </div>
                   
             
                <div className="allblog-text">
                    <div className="el-allblog">
                        <p className="title2 josefin-sans">CATEGORIES</p>
                        <ul className="title3  josefin-sans">
                            <li>Asian Food</li>
                            <li>California</li>
                            <li>Nigiri</li>
                            <li>Sashimi</li>
                            <li>Sushi</li>
                            <li>Uncategorized</li>
                            <li>Uramaki</li>
                        </ul>
                    </div>
                    <div className="el-allblog">
                        <p className="title2 josefin-sans">SEARCH</p>  
                        <div className="row-button  josefin-sans">
                            <img src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/submit.svg" alt="" />
                            <input placeholder="Type Here "/>
                        </div>
                    </div>
                    <div className="el-allblog">
                        <p className="title2 josefin-sans"> ABOUT RESTAURANT</p>
                        <div className="text">
                            <p className="title3  josefin-sans" >
                            Pulvinar tempor diam uspendisse. Pulvinar tempor diam ornare diam amet. Pulvinar tempor diam uspendisse. Pulvinar tempor diam ornare diam amet.
                            </p>
                        </div>
                    </div>

                    <div className="el-allblog">
                        <p className="title2 josefin-sans">LATEST BLOG POSTS</p>
                          <div className="flex-blog">
                                <div className="elem-flex-blog">
                                     <div className="img-blog">
                                       <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog8-150x150.jpg" alt="" />
                                     </div>
                                     <div className="text-blog">
                                        <p className="title1 font-oregano" >Posted <span> December 19, 2021</span></p>
                                          <p className="title2 josefin-sans" >Proin nisl nibh</p>
                                     </div>
                                </div>
                                <div className="elem-flex-blog">
                                     <div className="img-blog">
                                       <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-150x150.jpg" alt="" />
                                     </div>
                                     <div className="text-blog">
                                        <p className="title1 font-oregano" >Posted <span> December 19, 2021</span></p>
                                          <p className="title2 josefin-sans" >Hello beautifull world</p>
                                     </div>
                                </div>
                                <div className="elem-flex-blog">
                                     <div className="img-blog">
                                       <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog6-150x150.jpg" alt="" />
                                     </div>
                                     <div className="text-blog">
                                        <p className="title1 font-oregano" >Posted <span> December 19, 2021</span></p>
                                          <p className="title2 josefin-sans" >Proin nisl nibh</p>
                                     </div>
                                </div>
                                <div className="elem-flex-blog">
                                     <div className="img-blog">
                                       <img src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-150x150.jpg" alt="" />
                                     </div>
                                     <div className="text-blog">
                                        <p className="title1 font-oregano" >Posted <span> December 19, 2021</span></p>
                                          <p className="title2 josefin-sans" >Proin nisl egestas</p>
                                     </div>
                                </div>
                          </div>
                    </div>
                </div>

            </div>

            
        </div>
    
       
    </div>
  );
}

export default AllBlog;