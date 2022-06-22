import React from "react";
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import Submit from "./component/Submit";
import About from "./component/pages/About"
import Recipes from "./component/pages/Recipes"
import Subscribe from "./component/pages/Subscribe"
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

   
  }
`;


export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Main />
      <Submit />
      <Footer />
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}