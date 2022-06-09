import React,{useEffect,useState} from 'react';
import './PopupPassword.css';
import Dialog from '@mui/material/Dialog';
export default function ReservedPopupPassword({opens,onClosePopup,onClicksetPas}) {
    const [open,setOpen] = useState(opens)
    const [fieldpas1,setFieldpas1] = useState('')
    const [disable,setDisable] = useState(true)
    const handleClickOpen = () => {
      setOpen(opens);
    };
  
    const handleClose = () => {
      setOpen(false);
      onClosePopup(false)
    }
    useEffect(()=>{
       console.log(disable)
    },[disable])
   /* const checkpassword = () =>{
        if(fieldpas1 === '' && fieldpas2 === '')
            return ''
        else return fieldpas1 === fieldpas2  ? 'паролі співпадають' : 'паролі не співпадають'
    }*/
    
  
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="popup">
            <div className="row-button   josefin-sans">
                <input  onChange={(e)=>{
                setFieldpas1(e.target.value);
            }} type="password" required />
                
             </div>
             <div className="text">
                 <p>{} </p>
             </div>
             <div className="slider-buttons btn josefin-sans">
                <button  onClick={()=>{onClicksetPas(); handleClose()}}  className="josefin-sans" disabled={disable} > Submit</button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }