import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'
import store from './redux/store/store'
import App from './App'
import * as Types from "./redux/types/Types"
import { message } from 'antd';



message.config({
  maxCount: 1
})



const target = document.querySelector('#root')

const token = localStorage.getItem('auth_token')
const mail = localStorage.getItem('user_mail')
if(token){
    let decode = jwtDecode(token)
  console.log(decode)
    store.dispatch({
        type: Types.SET_USER,
        payload: {
            user:{jwt:token,mail}
        }
    })
}






render(
  <Provider store={store}>
   
     

        <App />

 

  </Provider>,
  target
)
