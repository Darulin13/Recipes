import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.header`
    background:url("https://media.graphassets.com/WROWKz5tRMaW4u0iTT95");
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:120vh;
    padding-bottom:40vh;
    @media(max-width:1327px){

        background-size:auto;
    }
    @media(max-width:425px){
        height:60vh;

        }
   
`
const Title = styled.h1`
    color:#373737;
    font-size:17vh;
    font-weight:500;
    @media(max-width:517px){
        font-size:8vh;
    }
    @media(max-width:425px){
        padding-top:15vh;

        }
   
  
    

`

const Navegation = styled.section`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    padding-top:20px;

    
    div{
        width:95%;   
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;

        @media(max-width:822px){
            flex-direction:column;
       
        }
       
    
        
    }
`
const Logo = styled.img`
    width:5%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media(max-width:822px){
        width:10%; 
        padding-bottom:20px;
    }

    
`
const Nav = styled.ul`
    width:30%;   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media(max-width:1327px){
        width:50%; 
    }
    @media(max-width:822px){
        width:100%; 
    }

    
    
    li{
        font-size:02.5vh;
        list-style:none;
        padding:10px;
        padding-left:40px;
        padding-right:40px;
        @media(max-width:1499px){
            font-size:02vh;
        }
        @media(max-width:837px){
            font-size:01.9vh;
        }
        
        @media(max-width:436px){
            padding:10px;
            padding-left:20px;
            padding-right:20px
            font-size:01.8vh;;
        }


    }
    li:hover{
        border:solid 3px;
    }
    
`
const linkStyle = {
    textDecoration: "none",
    color: "black"

};


export default class Header extends React.Component {
    render() {
        return (
            <Container>
                <Navegation>

                    <div>
                        <Logo src="https://media.graphassets.com/K6jZz2E8RBWFUMPsy979" alt="logo RC" />
                        <Nav>

                            <Link style={linkStyle} to="/About"> <li>About</li> </Link>
                            <Link style={linkStyle} to="/Recipe"> <li>Recipe</li> </Link>
                            <Link style={linkStyle} to="/Subscribe"> <li>Subscribe</li> </Link>

                        </Nav>
                    </div>
                </Navegation>
                <Title>Recipes</Title>
            </Container>
        )
    }
}