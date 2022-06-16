import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './BookMain.css';
import {ClipLoader} from "react-spinners"
import RenderButtons from './RenderButtons';

function BookMain() {

    const [date,setDate] = useState('')
    const [reservation,setReservation] = useState({});
    const [countPerson,setCountPerson] = useState('');
    const [name,setName] = useState('');
    const [logic,setLogic] = useState(false);
    const [buttonId,setButtonId] = useState('');
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('');
    const [logicpas,setlogicPas] = useState(true);

   
    

  const setButtonID = (value) =>{
      setButtonId(value)
      console.log(value)
  }

  const sender = () =>{
    axios.post("http://localhost:5002/reservation/sendmailRes",{
        to:mail,
        subject:"your reservation",
        text:"",
        html:"<p>lorem lorem lorem lorem lorem loremlorem</p>"
}).then(result =>{
        console.log('work')
    })
    
  }
    const getObDate = (res) =>{
        
        let date =  Date.parse(res)
        console.log(moment(date).format('M/D/YYYY'))
         axios.post("https://duplomna-backend.herokuapp.com/reservation/insert",{date:moment(date).format('M/D/YYYY')}).then(result =>{
            console.log('work')
            setReservation(result.data)
        })
        
    }
        useEffect(()=>{
            setLogic(false)
            setLogic(true)
            console.log(reservation)
        },[reservation])


       
    const saveDate = (e) =>{
        e.preventDefault();
        axios.post(`https://duplomna-backend.herokuapp.com/reservation/update/${reservation._id}/${buttonId}`,
        {
            countPerson:countPerson,
            name:name,
            email:mail,
            isReserved:true,
            password:password}).then(result =>{
            console.log('worksave')
            console.log(result.data)

        })
        
    }

    const renderButtons = () =>{   
            setLogic(true)  
    }
    

  return (
    <div className="bookmain">
        <img className="background-book" src="https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/booking.jpg" alt="" />
          <form  onSubmit={(e)=>{saveDate(e); sender()}}action=""> 
        <div className="form-book">
            <div className="form-book-text">
                    <p className="title2 josefin-sans "> BOOK</p>
                    <p className="title3  josefin-sans">
                         Pulvinar tempor diam sollicitudin gravida porttitor enim <br />
                         convallis. Faucibus amet integer consectetur
                             
                    </p>
                    <div className="buttons">
                        <div  className="row-button  josefin-sans">
                            <select onChange ={(e) => setCountPerson(+e.target.value) } > 
                            <option value="1">Person 1</option>
                            <option value="2">Person 2</option>
                            <option value="3">Person 3</option>
                            <option value="4">Person 4</option>
                            <option value="5">Person 5</option>
                            <option value="6">Person 6</option>
                            <option value="7">Person 7</option>
                            <option value="8">Person 8</option>
                            <option value="9">Person 9</option>
                            <option value="10">Person 10</option>
                            </select>
                            <input type = "text" onChange={(e)=>setName(e.target.value)}  placeholder="Your Name"  required/> 
                        </div>
                        <div className="row-button  row-button-dg josefin-sans">
                        <LocalizationProvider   dateAdapter ={AdapterDateFns} >
                            <DatePicker      
                                 required
                                onAccept ={(date)=>{
                                    setDate(date)
                                    setLogic(false);
                                    getObDate(date)
                                    renderButtons()

                                    setLogic(false);} }
                                views={['year', 'month', 'day']}
                                value={date || null}
                                mask = "ru"
                                showToolbar ={true}
                                format="yyyy-MM-dd HH:mm:ss"
                            onChange={(date)=>{setDate(date);  console.log(date)}}
                            
                            renderInput={(params) => <TextField {...params}     />}
                                />
                            </LocalizationProvider>
                          
                            <input type = "email" onChange={(e)=>setMail(e.target.value)} placeholder="Your Email " required/>
                        </div>
                        
                    </div>
               
                          
                          
                    
            </div>
            <div className="form-book-el">
                <p className="title2 josefin-sans "> TIME</p>
                    {logic ?<RenderButtons buttons = {reservation.objectbutton} Id_reserv={reservation._id} onButtonClick={setButtonID} onClicksetPas={setPassword}/>
                        :<div className="spinner">  <ClipLoader size={150} style={{margin: "auto"}} color={"#C9AB82"}/></div>}
             </div>
            <div className="slider-buttons btn josefin-sans">
                <button type="submit" className="josefin-sans"> Submit</button>
            </div>
        </div>
        
        </form>    
            
    
    </div>
  );
}

export default BookMain;
