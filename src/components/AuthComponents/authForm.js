import React,{useState,memo} from 'react'
import styled from 'styled-components'
import{colors,mediaQuery,basicUnits} from "../../utils/variables"
import {HiOutlineMail}from "react-icons/hi"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";




const AuthForm = (props) => {
    const[mail,setMail]=useState('')
    const handleChange=(e)=>{
        setMail(e.target.value)
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const user=await props.actions.authenticate({mail},props.history)  
      if(user){
        console.log(user)
      }  
    }
    console.log(mail)
    return (
        <FormConatainer>
              <Form onSubmit={handleSubmit}>
                <FormDesign>
                    <Icon>

                    <HiOutlineMail />
                    </Icon>
                  <Input name="email" value={mail}onChange={handleChange} placeholder="Enter Yout Email"/>
                  <FormBtn>Enter</FormBtn>
                  </FormDesign>
              </Form>
        </FormConatainer>
    )
}


  
const FormConatainer= styled.div `
width: 100%;
max-width: ${basicUnits.maxWidth}px;
margin:auto;
height: auto;
max-height: 50vh;
padding-top:8rem;

`;
const Form= styled.form`
width: 100%;
max-width: ${basicUnits.maxWidth-700}px;
margin:auto;
height: auto;
display: flex;

height: ${basicUnits*5}px;
align-items: center;
justify-content: center;


`;
const Input = styled.input`
  padding: .5rem;
  font-size: ${basicUnits.size*1.1}px;
outline: none;
border:none;
height: 100%;
width: 100%;
color:${colors.secondary};
`
const FormDesign= styled.div `
border:2px solid grey;
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 8px;
`;
const FormBtn= styled.button`
outline: none;
border:none;
padding:1.1rem;
background-color:${colors.primary};
color:${colors.secondary};
font-weight: bold;
border-top-right-radius:5px;
border-bottom-right-radius:5px;
text-transform:uppercase;
`;
const Icon= styled.div `
padding-left:8px;
height: 100%;
font-size: ${basicUnits.size*2}px;
display: flex;
align-items: center;
justify-content: center;

color:${colors.secondary};

`;






function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(AuthForm));