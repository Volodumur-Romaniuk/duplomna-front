
import './Header.css';
import {Link} from 'react-router-dom';
import React,{useState,useEffect} from "react"
import {useMedia} from 'react-use-media'
function Header() {
  const resolution = useMedia('(max-width : 769px)');
  const [classState, setClassState] =useState(false);
  const handleMenuClick =()=>{  
    if(classState){
        setClassState(false);
    }
    else setClassState(true);
}
  return (
    <div className="header">
      
     
         {!resolution ?
          <div className="menu">
             <ul  className=" list_menu josefin-sans">
              <li> <Link to ="/"> HOME </Link> </li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><Link  to="/about"> ABOUT</Link></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><Link to="/blog"> BLOG</Link></li>
              <img  className="logo" src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/logo.png" alt="" />
              <li><Link to="/menu"> MENU</Link></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><Link to="/promo"> PROMO</Link></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
               <li><Link  to="/contact"> CONTACT</Link></li>
             </ul>
          </div>:<>  <img  className="logo" src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/logo.png" alt="" />

                    <div className="responsive_menu">
                            <div className={`btn ${classState ? 'active' : 'not-active'}`} onClick ={handleMenuClick} id = 'btn'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                    </div>  
            </>     
         } 

          {classState ? 
                <div className="dropdown-menu">
                  <ul  className=" list_menu josefin-sans">
                    <li onClick ={()=>setClassState(false)} > <Link to ="/"> HOME </Link> </li>
                    <li onClick ={()=>setClassState(false)}><Link  to="/about"> ABOUT</Link></li>
                    <li onClick ={()=>setClassState(false)}><Link to="/blog"> BLOG</Link></li>
                    <li onClick ={()=>setClassState(false)}><Link to="/menu"> MENU</Link></li>
                    <li onClick ={()=>setClassState(false)}><Link to="/promo"> PROMO</Link></li>
                    <li onClick ={()=>setClassState(false)}><Link  to="/contact"> CONTACT</Link></li>
             </ul>
                    </div>  
                :<></>  
            }
          
    </div>
  );
}

export default Header;