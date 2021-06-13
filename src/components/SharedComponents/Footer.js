import React from 'react'
import styled from 'styled-components'
import {colors,basicUnits,mediaQuery} from "../../utils/variables"

const Footer = () => {
    return (
        <FooterContainer>
            <p>All rights Reserved @Technotes </p>
        </FooterContainer>
    )
}

 const FooterContainer =styled.div`
    position: fixed;
           
            bottom: 0;
           
 width: 100%;

 margin: auto;
 text-align: center;
 background-color: ${colors.primary};
 padding:1rem;
 color:${colors.secondary};
 font-weight: bold;
 
 
 `

export default Footer
