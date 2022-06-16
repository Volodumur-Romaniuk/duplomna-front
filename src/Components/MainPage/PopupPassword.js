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
   
    
      if (fieldpas1.length >=3){
        return fieldpas1 === fieldpas2  ? 'паролі співпадають' : 'паролі не співпадають'
      } else {
        return 'введіть значення більше 3'
      }
      
      
      
      
      /*if(fieldpas1 === fieldpas2 && fieldpas1 >=3){
        return 'паролі співпадають'
      }  
      
      if(fieldpas1 === fieldpas2 && fieldpas1 < 3){
        return 'введіть значення >3'
      }  
      if(fieldpas1 === fieldpas2 && fieldpas1 < 3){
        return 'введіть значення >3'
      }  
      
      if(fieldpas1 === '' && fieldpas2 === '')
          return ''
      */ 
       /* if(fieldpas1 === '' && fieldpas2 === '')
            return ''
        else if(fieldpas1 > 3){
            
        }
        else return 'введіть паротль більше 3 символів'
        */
    }
    const checksave1 = (e) =>{
      if (e.length >=3){
        if(fieldpas1 == e ) {
          setDisable(false);
          console.log('gfgfdgdf')
          setPassword(fieldpas1)

       } else setDisable(true)
      } else setDisable(true)
         
        
    }

    const checksave2 = (e) =>{
      if (e.length >=3){
        if(fieldpas2 == e ) {
          setDisable(false);
          console.log('gfgfdgdf')
          setPassword(fieldpas1)

       } else setDisable(true)
      } else setDisable(true)
         
        
    }
  
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className="popup">
            <div className="row-button   josefin-sans">
                <input  onChange={(e)=>{
                setFieldpas1(e.target.value)
                checksave2(e.target.value);
            }}  minLength="3" type="password" required />
                <input  onChange={(e)=>{setFieldpas2(e.target.value); console.log('work '); checksave1(e.target.value)}} type="password" minLength="3" required />
             </div>
             <div className="text">
                 <p>{checkpassword()} </p>
             </div>
             <div className="slider-buttons btn josefin-sans">
                <button  onClick={()=>{onClicksetPas(password); handleClose();}}  className="josefin-sans"  disabled={disable} > Submit</button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }