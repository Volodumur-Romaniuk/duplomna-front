
import './Header.css';
import {Link, NavLink} from 'react-router-dom';
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
              <li> <NavLink activeClassName="active"  to ="/"> HOME </NavLink> </li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><NavLink activeClassName="active" to="/about" > ABOUT</NavLink></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><NavLink activeClassName="active" to="/blog"> BLOG</NavLink></li>
              <img  className="logo" src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/logo.png" alt="" />
              <li><NavLink  activeClassName="active" to="/menu"> MENU</NavLink></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
              <li><NavLink activeClassName="active" to="/promo"> PROMO</NavLink></li>
              <img className="icon-main" src="https://alethemes.com/alesushi/wp-content/themes/alesushi/assets/svg/li.svg" alt="" />
               <li><NavLink activeClassName="active" to="/contact"> CONTACT</NavLink></li>
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
                <div  onClick ={()=>setClassState(false)}  className="dropdown-menu">
                  <ul  className=" list_menu josefin-sans">
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to ="/"> HOME </NavLink> </li>
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/about"> ABOUT</NavLink></li>
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/blog"> BLOG</NavLink></li>
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/menu"> MENU</NavLink></li>
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/promo"> PROMO</NavLink></li>
                    <li onClick ={()=>setClassState(false)}> <NavLink activeClassName="active" to="/contact"> CONTACT</NavLink></li>
             </ul>
                    </div>  
                :<></>  
            }
          
    </div>
  );
}

export default Header;