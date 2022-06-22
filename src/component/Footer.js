import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    background-color:#F2F4F1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-top:70px;
    
    
`
const Nav = styled.section`
    background-color:#F2F4F1;
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    padding-bottom:80px;
    div{
  
        width:80%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
      
        @media(max-width:907px){
    
            flex-direction:column;
        }
    }
`
const SocialMedias = styled.nav`
    width:25%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    

    img{
        width:17%; 
        @media(max-width:907px){
            
            width:15%;
        }
    }
    @media(max-width:907px){
     
        width:50%;
        display:flex;
        align-self:center;
    }
   
`
const Navegation = styled.ul`
    width:40%;   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media(max-width:1699px){
        width:50%; 
    }
    @media(max-width:907px){
        display:flex;
        align-self:center;
        padding-top:30px;
    }
    @media(max-width:628px){
        width:100%; 
    }
     li{
        font-size:02.5vh;
        list-style:none;
        padding:10px;
        padding-left:40px;
        padding-right:40px;
        @media(max-width:1699px){
            font-size:02.5vh;
            padding-left:15px;
            padding-right:15px;
            
        }
        @media(max-width:907px){
            font-size:1.9vh;
          
        }
    }   
`
const Layout = styled.section`
    width:100%;
    background-color:#446061;
    display:flex;
    flex-direction:row;
    justify-content:center; 
   
    padding-top:30px;
    padding-bottom:30px;


    
    p{
       
        color:white;
        width:95%;
        display:flex;
        flex-direction:row;
        justify-content:center; 
        align-items:center
        font-size:10px;
        text-align:start;
        overflow:hidden;
    }`
export default function Footer() {
    return (
        <Container>
            <Nav>
                <div>
                    <SocialMedias>
                        <img src="https://media.graphassets.com/9p3EUJsYSkKsIl7OxqcV" alt="Instagram" />
                        <img src="https://media.graphassets.com/xYludjPbRbCUBhKMX2Aa" alt="Twitter" />
                        <img src="https://media.graphassets.com/zDHjdpPoRceNon5TDN8l" alt="Facebook" />
                        <img src="https://media.graphassets.com/s2H5AR7T2WGqrwBRmbkk" alt="Pinterest" />

                    </SocialMedias>
                    <Navegation>
                        <li>About</li>
                        <li>Recipes</li>
                        <li>Subscribe</li>
                    </Navegation>
                </div>
            </Nav>
            <Layout><p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p></Layout>
           
        </Container>
    )
}