import { createGlobalStyle } from "styled-components";



 

 export const GlobalStyle = createGlobalStyle`
 //this will change scrollbar width and color on mozila
*{
    scrollbar-width: thin;
    scrollbar-color: rgba(155,155,155,0.5) transparent;
 }
 
 //to customize scrollbar on other browsers
 *::-webkit-scrollbar{
 width: 5px;
 }
 
 *::-webkit-scrollbar-track{
 background: transparent;
 }
 
 *::-webkit-scrollbar-thumb{
 
    background-color: rgba(155,155,155,0.5);
    border-radius: 20px;
    border:transparent
 }
 
 `;