import React,{memo} from 'react'
import AuthForm from '../components/AuthComponents/authForm'
import AuthMessage from '../components/AuthComponents/AuthMessage'
const Auth = (props) => {
    console.log(props.history)
    return (
        <div style={{backgroundColor:"white",height:"100vh"}}>
        <AuthMessage/>
       <AuthForm history={props.history}/>
       </div>
    )
}

export default memo(Auth)
