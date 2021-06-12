import Axios from "axios";
import * as Types from "../types/Types";
import { message } from "antd";




const {REACT_APP_API}= process.env
export const getAllNotes=()=>async(dispatch)=>{


    console.log(localStorage.auth_token)
  try{
      const Notes = await Axios.get(`${REACT_APP_API}/note`,{
       headers:{
        'Content-Type': 'application/json',
        "X-Jwt-Token": "Bearer " + localStorage.auth_token,
       }

      })
      if(Notes){
          console.log(Notes);
          dispatch({
            type: Types.GET_NOTES,
            payload: {
              notes: Notes.data,
            },
          })
          message.success("All Notes Retrieved")
      }

  }
  catch(error){
      console.log(error.data)
      message.success("Notes Fetching failed")
  }


}
export const getNoteDetails=(id)=>async(dispatch)=>{


  console.log(localStorage.auth_token)
try{
    const Note = await Axios.get(`${REACT_APP_API}/note/${id}`,{
     headers:{
      'Content-Type': 'application/json',
      "X-Jwt-Token": "Bearer " + localStorage.auth_token,
     }

    })
    if(Note){
        console.log(Note);
        dispatch({
          type: Types.GET_NOTE_DETAILS,
          payload: {
            notes: Note.data.note,
          },
        })
        message.success("All Notes Retrieved")
    }

}
catch(error){
    console.log(error.data)
    message.success("Notes Fetching failed")
}


}
export const editNote=(id,data)=>async(dispatch)=>{


  console.log(localStorage.auth_token)
try{
    const Note = await Axios.put(`${REACT_APP_API}/note/${id}`,data,{
     headers:{
      'Content-Type': 'application/json',
      "X-Jwt-Token": "Bearer " + localStorage.auth_token,
     }

    })
    if(Note){
        console.log(Note);
        dispatch({
          type: Types.EDIT_NOTES,
          payload: {
            notes: Note.data.note,
          },
        })
        message.success("Note has been Edited")
        return true;
    }

}
catch(error){
    console.log(error.data)
    message.success("Note Editing Failed")
    return false;
}


}
export const addNote=(data)=>async(dispatch)=>{


  console.log(localStorage.auth_token)
try{
    const Note = await Axios.post(`${REACT_APP_API}/note`,data,{
     headers:{
      'Content-Type': 'application/json',
      "X-Jwt-Token": "Bearer " + localStorage.auth_token,
     }

    })
    if(Note){
        console.log(Note);
      
        message.success("Note has been Edited")
        return true;
    }

}
catch(error){
    console.log(error.data)
    message.success("Note Editing Failed")
    return false;
}


}
export const deleteNote=(id,history)=>async(dispatch)=>{


  console.log(localStorage.auth_token)
try{
    const Note = await Axios.delete(`${REACT_APP_API}/note/${id}`,{
     headers:{
      'Content-Type': 'application/json',
      "X-Jwt-Token": "Bearer " + localStorage.auth_token,
     }

    })
    if(Note){
        console.log(Note);
    
        message.success("Note has been deleted")
        history.push("/")
        return true;
    }

}
catch(error){
    console.log(error.data)
    message.success("Note Deleting Failed")
    return false;
}


}