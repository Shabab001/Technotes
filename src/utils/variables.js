import {css} from "styled-components"

export const colors = {
    primary: 'rgb(107, 196, 164)',
    secondary: 'rgb(66, 61, 88)',
    third:"rgb(242, 181, 50)",
    
  }
  export const basicUnits ={
      size:16,
      fontSize:16,
      maxWidth:1920
  }
  const mediaQuerySize ={
      small:400,
      med:960,
      large:1140
  }

 export const mediaQuery=Object.keys(mediaQuerySize).reduce((acc,label)=>{
     console.log("above",mediaQuery);
     acc[label]=(...args)=>css`
     @media(min-width:${mediaQuerySize[label]}px){
         ${css(...args)}
     }
     `
     return acc
 },{})

