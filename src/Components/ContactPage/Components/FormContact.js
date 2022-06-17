import './FormContact.css'
import React ,{ useState, useEffect } from 'react';
import axios from 'axios';

function FormContant(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [comment,setComment] = useState('');


    const sender = (e) =>{
        e.preventDefault();
        axios.post("https://duplomna-backend.herokuapp.com/reservation/sendmailRes",{
            to:"romaniuk.volodymyr.clg@chnu.edu.ua",
            subject:"your feedback",
            text:`${name} ${email} ${comment}`,
            html:"<p>Дякую за ваш фідбек</p>"
            }).then(result =>{
            console.log('work')
        })
        
      }
    return (
        <div className="formcontact">
            <div className="form">
                <img src="	https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/formbg.jpg" alt="" className="backgroung-form" />
                <div className="info-form">
                    
                    <div className="elements-form">
                    <div className="text-title">
                        <p className="title2 josefin-sans ">VISIT US</p>
                        <p className="title3  josefin-sans">France, Marseille, Main street 53, FR-MR 00584
                                onlineorder@cosushi.com | info@cosushi.com 
                        </p>
                    </div>
                    <form onSubmit={(e)=>sender(e)}  action="" >
                    <div className="row-button   josefin-sans">
                            <input  placeholder="Your Name *"  onChange={(e)=>setName(e.target.value)} type="text" required/>
                            <input placeholder="Your Email *"  onChange={(e)=>setEmail(e.target.value)} type="email"required/>
                            <input placeholder="Your Commnent *"  onChange={(e)=>setComment(e.target.value)} type="text"required/>

                            <div className="slider-buttons btn josefin-sans">
                             
                                <button type="submit" className="josefin-sans"> Send Message</button>
                            </div>
                        </div>
                    </form>
                    </div>
                    
                </div>


            </div>

        </div>
    );
}
export default FormContant;