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
  
  position: relative;
 padding-top:14rem;



`


const Welcome= styled.p`
font-size: ${basicUnits.fontSize*2}px;
color:${colors.secondary};
padding-bottom: 1rem;
${mediaQuery.med `
font-size: ${basicUnits.fontSize*3}px;
color:${colors.secondary};
padding-bottom: 2rem;
`}

`;
const LogoContainer= styled.div`
  
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
padding:1rem;
${mediaQuery.med `
background-color: aliceblue;
transform: skewX(
-15deg
);
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondary};
width: ${basicUnits.size*20}px;
margin: auto;
padding:1rem;
`}
`;
const Logo= styled.p`

font-size: ${basicUnits.fontSize*2}px;
color:${colors.third};
font-weight:bold;
${mediaQuery.med `
font-size: ${basicUnits.fontSize*3}px;
`}
`;
const Msg= styled.p`
padding-top: 1rem;
font-size: ${basicUnits.fontSize*1.5}px;
color:${colors.secondary};
${mediaQuery.med `
padding-top: 2rem;
font-size: ${basicUnits.fontSize*2}px;
color:${colors.secondary};
`}

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