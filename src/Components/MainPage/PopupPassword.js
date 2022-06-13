import React,{useEffect,useState} from 'react';
import './PopupPassword.css';
import Dialog from '@mui/material/Dialog';
export default function PopupPassword({opens,onClosePopup,onClicksetPas,onRenderPopup}) {
    const [open,setOpen] = useState(opens)
    const [fieldpas1,setFieldpas1] = useState('')
    const [fieldpas2,setFieldpas2] = useState('')
    const  [password,setPassword] = useState('')
    const [disable,setDisable] = useState(true)
    const handleClickOpen = () => {
      setOpen(opens);
    };
  
    const handleClose = () => {
      setOpen(false);
      onClosePopup(false)
      onRenderPopup(null)
    }
    useEffect(()=>{
       console.log(disable)
    },[disable])
    const checkpassword = () =>{
        if(fieldpas1 === '' && fieldpas2 === '')
            return ''
        else return fieldpas1 === fieldpas2  ? 'паролі співпадають' : 'паролі не співпадають'
    }
    const checksave = (e) =>{
         if(fieldpas1 == e ) {
            setDisable(false);
            console.log('gfgfdgdf')
            setPassword(fieldpas1)

         } else setDisable(true)
        
    }
  
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="popup">
            <div className="row-button   josefin-sans">
                <input  onChange={(e)=>{
                setFieldpas1(e.target.value);
            }} type="password" required />
                <input  onChange={(e)=>{setFieldpas2(e.target.value); console.log('work '); checksave(e.target.value)}} type="password" required />
             </div>
             <div className="text">
                 <p>{checkpassword()} </p>
             </div>
             <div className="slider-buttons btn josefin-sans">
                <button  onClick={()=>{onClicksetPas(password); handleClose();}}  className="josefin-sans" disabled={disable} > Submit</button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }