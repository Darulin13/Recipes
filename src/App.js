import React from "react";
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import Submit from "./component/Submit";


import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

   
  }
`;


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Submit />
      <Footer />
    </>

  )
}