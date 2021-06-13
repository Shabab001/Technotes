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
               <Link to="/note">  
               <LogoContainer>
                 <Logo>TechNotes</Logo>

                 </LogoContainer>
               
               </Link>
               </LeftContainer>
               <Hamburger open={open} setOpen={setOpen}/>
               <RightContainer open={open}>
                 { !props.auth.isAuthenticated?
                  <Link to="/"> <MyNotes>Login </MyNotes></Link>:
                   <MyNotes onClick={logout}>Logout </MyNotes>
                
                }
                
               </RightContainer>
        </Container>
      </Head>
    )
}




const Head= styled.div`
  width: 100%;

background-color:${colors.primary};
height:${basicUnits.size*3}px;
color:${colors.secondary};
  ${mediaQuery.med `

width: 100%;

background-color:${colors.primary};
height:${basicUnits.size*4}px;
color:${colors.secondary};
`}
a{
 color:${colors.third};
 transition:none;
 ${mediaQuery.med `
 color:${colors.secondary};
 transition:none;
 `}
}

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
color:${colors.third};
${mediaQuery.med `


font-size: ${basicUnits.fontSize*2}px;
color:${colors.third};
`}

`
const LogoContainer= styled.div`
 ${mediaQuery.med `

background-color: aliceblue;
transform: skewX(
  -15deg
);
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondary};
width: ${basicUnits.size*15}px;
margin: auto;

height:4rem;
  `} 
  background-color: aliceblue;
transform: skewX(
  -15deg
);
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondary};
width: ${basicUnits.size*11}px;
margin: auto;

height:3rem;
`;


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
background-color: ${colors.secondary};
-webkit-transform: ${({open})=>open? 'translateX(0)':'translateX(100%)'};
transform: ${({open})=>open? 'translateX(0)':'translateX(100%)'};

transition: transform .3s forwards ease-in-out;
z-index: 10;
color:${colors.third};

${mediaQuery.med `
all:unset;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
gap:1rem;
flex-flow: row;

`}

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