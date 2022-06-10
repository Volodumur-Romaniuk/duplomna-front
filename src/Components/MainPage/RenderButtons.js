import React,{useState,useEffect} from 'react';
import "./BookMain.css"
import PopupPassword from './PopupPassword';
import ReservedPopupPassword from './ReservedPopupPassword';
function RenderButtons({buttons,onButtonClick,onClicksetPas}) {
  const [popup,setPopup] = useState(false)
  const [close,setClose] = useState(true)
  const [butons,setButons] = useState({})
  const [password,setPassword] = useState('');
  useEffect(()=>{
    console.log('close'+close);
  },[])
  useEffect(()=>{
    console.log("buttons"+popup)
     
 },[popup])

/* const saveDate = (e) =>{
  e.preventDefault();
  axios.post(`http://localhost:5000/reservation/update/${reservation._id}/${buttonId}`,
  {
      countPerson:countPerson,
      name:name,
      email:mail,
      isReserved:true,
      password:password}).then(result =>{
      console.log('worksave')
      console.log(result.data)

  })
  
}*/
    const array = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
                    '14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30',
                    '18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00']
  return (
    <div className="buttons-time">
    {
     <>
        
       {buttons?.map((element,index)=>
        <>
            <button  onClick ={()=>{
              setPopup(true)
              onButtonClick(element.id);
              onClicksetPas(password);
              console.log('popup'+popup);
              setButons(buttons);
            }}  
            id={element.id}  className={element.isReserved ? 'reserved-button': ""} >
            {array[index]}
          </button>
          </>
          )}
     </>
    } 
    {     popup ? <PopupPassword opens = {popup} onClosePopup ={setPopup} onClicksetPas ={onClicksetPas}/> : <></>
    }
</div>
  );
}

export default RenderButtons;
/* <ReservedPopupPassword opens = {popup} onClosePopup ={setPopup} onClicksetPas ={onClicksetPas}/>   */