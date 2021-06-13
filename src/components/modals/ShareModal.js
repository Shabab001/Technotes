import React,{useState} from 'react'
import { Modal, Button, message } from 'antd';
import validator from 'validator';

const ShareModal = ({isModalVisible,handleCancel,handleOk}) => {
 
    const[mail,setMail]=useState({
        value:"",
        isValid:false,
        message:""

    })
    const handleChange=(e)=>{
       
        if(e.target.name ==="mail"){
         if(e.target.value!==""){
                 setMail({...mail,value:e.target.value,isValid:true,message:""})
             }
        
        else{
         setMail({...mail,value:e.target.value,isValid:false,message:"Shared to is empty"})
        }
     }
   
 }


 

    return (
        <Modal title="Edit Notes" visible={isModalVisible} onOk={()=>{
            if(mail.isValid ){
                if(!validator.isEmail(mail.value)){
                    setMail({...mail,value:"",isValid:false,message:"email is not valid"})
                }
                else{

                    handleOk(mail.value)
                    setMail({...mail,value:""});
                }
              

             }
            
            
             }
            } onCancel={handleCancel}>
              <label>
               <p>Shared to:</p>
               <input name="mail" placeholder="Give an email to share" onChange={handleChange} style={{width:"100%"}}/>
               {mail.message? <p style={{color:"red"}}>{mail.message}</p>:null}
           </label>
        </Modal>
    )
}

export default ShareModal
