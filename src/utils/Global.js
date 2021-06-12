import {createGlobalStyle} from "styled-components"
import { basicUnits } from "./variables";
const GlobalStyle =createGlobalStyle `
*,
*::before,
*::after {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box;
}
body {
 
  font-family: "CocogoosePro Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-size:${basicUnits.fontSize};


}
* p, * h1,  * ul,  * li{
  margin-bottom: 0;
}
button:disabled {
  opacity: 0.5;
}

`;
export default GlobalStyle