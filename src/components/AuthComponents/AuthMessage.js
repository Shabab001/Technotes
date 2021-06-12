import React from 'react'
import styled from 'styled-components'
import{colors,mediaQuery,basicUnits} from "../../utils/variables"

const AuthMessage = () => {
    return (
        <Main>
             <Heading>
                 <Welcome>Welcome To</Welcome>
                 <LogoContainer>
                 <Logo>TechNotes</Logo>

                 </LogoContainer>
             </Heading>
             <Message>
                 <Msg>Please give your email id to continue</Msg>
             </Message>
        </Main>
    )
}

export default AuthMessage

const Main= styled.div`
  width: 100%;
  max-width:${basicUnits.maxWidth}px;
  margin: auto;
  height: 50vh;
 padding-top:8rem;



`

const LogoContainer= styled.div`
  
background-color: aliceblue;
transform: skewX(
-10deg
);
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondary};
width: ${basicUnits.size*17}px;
margin: auto;
padding:.3rem;
`
const Welcome= styled.p`
font-size: ${basicUnits.fontSize*3}px;
color:${colors.secondary};
padding-bottom: 2rem;


`
const Logo= styled.p`

font-size: ${basicUnits.fontSize*3}px;
color:${colors.third};
font-weight:bold;

`
const Msg= styled.p`
padding-top: 2rem;
font-size: ${basicUnits.fontSize*2}px;
color:${colors.secondary};


`
const Heading= styled.div`
  width: 100%;
  max-width:${basicUnits.maxWidth-700}px;
  margin: auto;
text-align: center;

height: auto;

`


const Message= styled.div`
   width: 100%;
  max-width:${basicUnits.maxWidth-700}px;
  margin: auto;
text-align: center;

height: auto;

`