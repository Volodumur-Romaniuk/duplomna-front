import React,{useEffect,useState} from 'react';

import './AllBlog.css';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pagination from '@mui/material/Pagination';
function AllBlog() {

  const [pagincount,setPagincount]= useState();
    const handleChange = ( event,value) => {
        setPagincount( value);
        console.log("gfdgdf");
      };
      useEffect(() => {
        
          
          setPagincount(1);
        },[])
      ;

    const sliderSettings = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        pauseOnHover:false
      }
    
      const obg_paginate = [
        [
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog8-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          { 
            img:[
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"
            ],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"
          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          }

        ],
        [ 
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog4-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog3-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          { 
            img:[
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"
            ],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"
          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog1-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          }
        ],
        [
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog8-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          },
          { 
            img:[
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog5-768x512.jpg",
              "https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"
            ],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"
          },
          {
            img:["https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/blog7-768x512.jpg"],
            datetext:"December 19, 2021 CRICOVA Sashimi",
            titletext:"PROIN NISL NIBH",
            description:"Proin nisl nibh egestas pellentesque viverra elit amet. Netus tellus tortor non eu.  Turpis eu sit metus, id sed id sit a aliquet. …"

          }
        ]
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

                    
                   <div className="pagination">
                      {
                        obg_paginate.map((i,index)=>(
                          index>=(pagincount-1)*1 && index<(pagincount)*1 &&
                          <div className="grid-elem">
                            { i.map((e,ind)=>(
                              e.img.length === 1 ?
                                
                              
                                  <div className="elem-grid">
                                    <div className="elem-grid-img">
                                      <img src={e.img} alt="" />
                                  </div>
                                  <div className="elem-grid-text">
                                    <p className="title1 font-oregano">{e.datetext}</p>
                                    <p className="title2 josefin-sans "> {e.titletext}</p>
                                    <p className="title3  josefin-sans">
                                      Proin nisl nibh egestas pellentesque viverra elit amet. Netus
                                      tellus tortor non eu. 
                                      Turpis eu sit metus, id sed id sit a aliquet. …
                                    </p>
                                  </div>
                                </div>:
                                <div className="elem-grid">
                                <div className="elem-grid-img">

                                            <Slider {...sliderSettings}>

                                                <img src={e.img[0]} alt="" />
                                                <img src={e.img[1]} alt="" />
                                                <img src={e.img[2]} alt="" />
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
                               ))
                              }
                               
                               </div>
                        ))   
                        
                    }
                   </div>
                   <Pagination count={Math.ceil(obg_paginate.length/1)} value={pagincount}  onChange={handleChange}/>
  
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
