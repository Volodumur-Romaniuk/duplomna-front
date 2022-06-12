
import React, { useEffect, useState } from 'react';
import './MenuReview.css';
import Pagination from '@mui/material/Pagination';
function MenuReview() {
    const [pagincount,setPagincount]= useState();
    const handleChange = ( event,value) => {
        setPagincount( value);
        console.log("gfdgdf");
      };
      useEffect(() => {
        
          
          setPagincount(1);
        },[])
      ;
    const template = [

        { 
         img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review1.jpg",
         longtext:"Mus porta laoreet aenean quis faucibus integer. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. ",
         shorttext:"ALEX SOCHA",
         posada:"Director"
        },
        { 
            img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review2.jpg",
            longtext:"Mus porta laoreet aenean quis faucibus integer. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. ",
            shorttext:"JOE COLE",
            posada:"Chief"
           },
           { 
            img:"https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/review3.jpg",
            longtext:"Mus porta laoreet aenean quis faucibus integer. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. Magna est ultrices vitae cum dui purus libero. Pellentesque orci, ultrices pharetra ac purus. ",
            shorttext:"ELEN MARLEN",
            posada:"Chief"
           }
        
    ]

    
  return (
      
    

    <div className="mainreview">
       <div className="line-block">
           <div className="elline "></div>
           <div className="elline"></div>
           <div className="elline"></div>
           <div className="elline  elline-right "></div>
       </div>
       <div className="text-block">
       <p className="title2 josefin-sans ">REVIEW</p>
       <p className="title3  josefin-sans">
       Mi sapien facilisis tellus elementum dictumst sed dictumst facilisis tincidunt <br />
            vestibulum elementum congue turpis tortor viverra <br />
                    sit sapien tortor velit, massa
                        </p>
       </div>
       <div className="pagination-block">
           <div className="paginate">
             { 
                 template.map((i,index)=>(
                    index>=(pagincount-1)*1 && index<(pagincount)*1 &&
                     <div className="align-paginate ">
                         
                         <div className="imgpaginate">
                         <img src={i.img} alt={i.posada}/>
                         </div>
                         <div className="text-paginate">
                         <div className="long-text">
                         <p className="title1 font-oregano"> {i.longtext}</p>
                         </div>
                         <div className="short-text">
                         <p className="title2 josefin-sans ">{i.shorttext}</p>
                         <p className="title3 josefin-sans ">{i.posada}</p>
                         </div>
                    
                      </div>
                     </div>
                     
                 )
                 )
                
             }
 
  
             <img  className="icon" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/longdecor.svg" alt="" />
<Pagination count={Math.ceil(template.length/1)} value={pagincount}  onChange={handleChange} hideNextButton  hidePrevButton/>

             </div>
       </div>
    </div>
  );
}

export default MenuReview;
