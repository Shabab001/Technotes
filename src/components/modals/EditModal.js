import React,{useState} from 'react'
import { Modal, Button, message } from 'antd';



const EditModal = ({isModalVisible,handleCancel,handleOk}) => {
   
    const[details,setDetails]=useState({
        value:"",
        isValid:false,
        message:""

    })
const[title,setTitle]=useState({
    value:"",
    isValid:false,
    message:""
})
  

   
    const handleChange=(e)=>{
       
           if(e.target.name ==="title"){
            if(e.target.value!==""){
               setTitle({...title,value:e.target.value,isValid:true,message:""})
           }
           else{
            setTitle({...title,value:e.target.value,isValid:false,message:"Title is empty"})
           }
        }
        if(e.target.name ==="details"){
            if(e.target.value!==""){
               setDetails({...details,value:e.target.value,isValid:true,message:""})
           }
           else{
            setDetails({...details,value:e.target.value,isValid:false,message:"Details is empty"})
           }
        }
    }


    return (
        <Modal title="Edit Notes" visible={isModalVisible} onOk={()=>{
            if(title.isValid && details.isValid){

                handleOk(title.value,details.value)
                setTitle({...title,value:""});
                setDetails({...details,value:""})

             }
             else{
                setTitle({...title,isValid:false,message:"Title is empty"})
                setDetails({...details,isValid:false,message:"Details is empty"})
             }
            
             }
            } onCancel={handleCancel}>
            
       <form>
           <label>
               <p>Title:</p>
               <input name="title" onChange={handleChange} style={{width:"100%"}}/>
               {title.message? <p style={{color:"red"}}>{title.message}</p>:null}
           </label>
           <label>
           <p>Details</p>
               <textarea name="details" onChange={handleChange} style={{width:"100%",minHeight:"8rem"}}/>
               {details.message? <p style={{color:"red"}}>{details.message}</p>:null}
           </label>
          
       </form>
      </Modal>
    )
}

export default EditModal
