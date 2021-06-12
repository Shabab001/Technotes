import Axios from "axios";
import * as Types from "../types/Types";
import { message } from "antd";



const {REACT_APP_API}= process.env
export const authenticate= (mail,history) => async(dispatch) => {
console.log(mail)
try{
const user= await Axios.post(`${REACT_APP_API}/auth`,mail,{
    headers: {
        'Content-Type': 'application/json',
    }


})
if(user){
    console.log(user);
    localStorage.setItem("auth_token", user.data.jwt);
    localStorage.setItem("user_mail", mail.mail);
    let save ={
        jwt:user.data.jwt,
        mail:mail.mail
    }
    dispatch({
        type: Types.SET_USER,
        payload: {
          user: save,
        },
      });
      message.success("Authentication Complete")
      history.push("/")
    return user.data
}
}
catch(err){
console.log(err.data)
message.error("Authentication Failed")
}
   



};


export const logout = (history) =>(dispatch)=> {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_mail");
    
    console.log("hi", history);
    message.success("Successfully logged out!");
    dispatch({
        type: Types.LOGOUT,
        payload: {
            user: {},
        },
    });
    history.push("/authentication")
  };