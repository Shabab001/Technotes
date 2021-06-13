import Axios from "axios";
import * as Types from "../types/Types";
import { message } from "antd";



const {REACT_APP_API}= process.env

export const shareNote=(data)=>async(dispatch)=>{


    console.log(localStorage.auth_token)
  try{
      const Note = await Axios.post(`${REACT_APP_API}/note/share`,data,{
       headers:{
        'Content-Type': 'application/json',
        "X-Jwt-Token": "Bearer " + localStorage.auth_token,
       }
  
      })
      if(Note){
          console.log(Note);
          dispatch({
            type: Types.SHARE_NOTE,
            payload: {
              shareNote: Note.data,
            },
          })
          message.success(`Note has been Share to ${data.shared_to}`)
          return true;
      }
  
  }
  catch(error){
      console.log(error.data)
      message.error("Already Shared with the user")
      return false;
  }

};
  export const getSharedNotes=()=>async(dispatch)=>{


    console.log(localStorage.auth_token)
  try{
      const Note = await Axios.get(`${REACT_APP_API}/note/share`,{
       headers:{
        'Content-Type': 'application/json',
        "X-Jwt-Token": "Bearer " + localStorage.auth_token,
       }
  
      })
      if(Note){
          console.log(Note);
          dispatch({
            type: Types.GET_SHARED_NOTES,
            payload: {
              sharedNotes: Note.data,
            },
          })
       
          return true;
      }
  
  }
  catch(error){
      console.log(error.data)
  
      return false;
  }
  
  
};
export const getSharedUsers=()=>async(dispatch)=>{


    console.log(localStorage.auth_token)
  try{
      const Users = await Axios.get(`${REACT_APP_API}/note/user/shared-by-me`,{
       headers:{
        'Content-Type': 'application/json',
        "X-Jwt-Token": "Bearer " + localStorage.auth_token,
       }
  
      })
      if(Users){
          console.log(Users);
          dispatch({
            type: Types.GET_SHARED_USERS,
            payload: {
              sharedUser: Users.data,
            },
          })
      
          return true;
      }
  
  }
  catch(error){
      console.log(error.data)
    
      return false;
  }
  
  
}