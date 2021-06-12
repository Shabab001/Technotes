import React,{memo} from 'react'
import AuthForm from '../components/AuthComponents/authForm'
import AuthMessage from '../components/AuthComponents/AuthMessage'
const Auth = (props) => {
    console.log(props.history)
    return (
        <>
        <AuthMessage/>
       <AuthForm history={props.history}/>
       </>
    )
}

export default memo(Auth)
