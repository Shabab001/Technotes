import React,{useState,memo,useEffect}from 'react'
import styled from 'styled-components'
import{Link} from "react-router-dom"
import Hamburger from './headerUtlis/hamburger'
import {colors,basicUnits,mediaQuery} from "../../utils/variables"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";

const Header = (props) => {


  const logout = (e) => {
   
    
    props.actions.logout(props.history);
    
 
  
  };
  useEffect(()=>{
    
  },[props.auth.isAuthenticated])


  const[open,setOpen]=useState(false)
    return (
      <Head>
        <Container>
               <LeftContainer>
               <Link to="/">  <Logo>TechNotes</Logo></Link>
               </LeftContainer>
               <Hamburger open={open} setOpen={setOpen}/>
               <RightContainer open={open}>
                 { !props.auth.isAuthenticated?
                  <Link to="/authentication"> <MyNotes>Login </MyNotes></Link>:
                   <MyNotes onClick={logout}>Logout </MyNotes>
                
                }
                
                <Link to="/note"> <MyNotes>My Notes</MyNotes></Link>
                   <MyNotes>My Notes</MyNotes>
                   <MyNotes>My Notes</MyNotes>
                   <MyNotes>My Notes</MyNotes>
               </RightContainer>
        </Container>
      </Head>
    )
}




const Head= styled.div`
  width: 100%;

  background-color:${colors.primary};
  height:${basicUnits.size*4}px;
  color:${colors.secondary};

`;
const Container=styled.div`

    width: 90%;
    max-width: 1234px;
 margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-align:center;
    height: 100%;


`;
const LeftContainer=styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100%;
-webkit-box-align:center;
a{
 color:${colors.secondary}
}
`;
const Logo=styled.p`
font-weight: bold;
font-size: ${basicUnits.fontSize*1.5}px;
${mediaQuery.med `

font-size: ${basicUnits.fontSize*2}px;
`}

`

const MyNotes=styled.p`
${mediaQuery.med `
border-bottom:none;
padding:0;
`}
padding:2rem 2rem;
font-weight: bold;
border-bottom: 1px solid lightgrey;
cursor: pointer;
`
const RightContainer=styled.div`

display: flex;

padding:4rem 0rem;

height: 100%;
gap:1rem;
flex-flow: column;
-webkit-box-align:center;
position: fixed;
top:0;
right:0;
height: 100vh;
width:50%;
background-color: white;
transform: ${({open})=>open? 'translateX(0)':'translateX(100%)'};
transition: transform .3s  ease-in-out;

${mediaQuery.med `
all:unset;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
gap:1rem;
flex-flow: row;
`}
a{
 color:${colors.secondary}
}
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));