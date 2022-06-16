import React,{useEffect,useState} from 'react';
import './PopupPassword.css';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
export default function ReservedPopupPassword({opens,onClosePopup,onClicksetPas,onRenderPopup,ID_reserv,ID_Button}) {
    const [open,setOpen] = useState(opens)
    const [fieldpas1,setFieldpas1] = useState('')
    const [disable,setDisable] = useState(true)
    const [checkpasword,setCheckpassword] = useState('')
    const [pass,setPass] = useState('')
    const handleClickOpen = () => {
      setOpen(opens);
    };
  
    const handleClose = () => {
      setOpen(false);
      onClosePopup(false)
      onRenderPopup(null)
      console.log("reservation"+ID_reserv)
      console.log("buttonID"+ID_Button)

    }
  
    useEffect(()=>{
      console.log("check"+checkpasword.password)
   },[checkpasword])

    useEffect(() =>{
      console.log("unreserved")
      axios.get(`https://duplomna-backend.herokuapp.com/reservation/getpas/${ID_reserv}/${ID_Button}`).then(result =>{
        setCheckpassword(result.data)
        console.log(result.data)
      })
    },[])
    
    const checkpasswords = (e) =>{
      console.log("ccchhhhc"+checkpasword.password)
        if(e === '')
            return ''
        if(e === checkpasword.password)  { 
            setDisable(false)
           setPass('паролі співпадають')
        }  else{
          setDisable(true)
          setPass('паролі не співпадають')
        } 
    }

    const saveDate = (e) =>{
      e.preventDefault();
      axios.post(`https://duplomna-backend.herokuapp.com/reservation/update/${ID_reserv}/${ID_Button}`,
      {
          countPerson:0,
          name:"",
          email:"",
          isReserved:false,
          password:""}).then(result =>{
          console.log('worksave')
          console.log(result.data)

      })
      
  }
    
  
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="popup">
            <div className="row-button   josefin-sans">
                <input  onChange={(e)=>{
                setFieldpas1(e.target.value)
                checkpasswords(e.target.value);
            }} type="password" required />
                
             </div>
             <div className="text">
                 <p>{pass} </p>
             </div>
             <div className="slider-buttons btn josefin-sans">
                <button  onClick={(e)=>{onClicksetPas();  saveDate(e);handleClose()}}  className="josefin-sans" disabled={disable} > Submit</button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }