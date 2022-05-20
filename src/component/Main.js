import React from "react"
import styled from "styled-components"

const Container = styled.main`
    width:100%;
    background-color:#F2F4F1;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    div{
        width:90%;

    }
`
const Title = styled.h1`
    text-align:center;
    padding-top:150px;
    padding-bottom:150px;
`
const Box = styled.nav`
     width:30%;
    display:flex;
    flex-direction:column-reverse;
    align-items:center;
    @media(max-width:768px){
        width:90%;
        padding-bottom:40px;
    }
   
    article{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;  
        padding:30px;
        padding-top:80px;
        padding-bottom:80px;
        background-color:#FFFFFF;
    }

    h2{
       color: #373737;
       font-size:20px;
       font-weight:400;
    }
    img{
        width:100%;
    }
`
const Recipes = styled.section`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media(max-width:768px){
        flex-direction:column;
    }
`
const About = styled.section`
    display:flex;
    flex-direction:row;
    width:100%;
    padding-top:120px;
    img{
        width:50%;
        @media(max-width:1024px){
            width:100%;
        }
    }
    article{
        background-color:#FFFFFF;
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly ; 
        @media(max-width:1024px){
            width:100%;
           
        }
    }
    p{
        width:70%;
        color:#373737;
        align-self:center;
        text-align:start;
        font-size:32px;
        font-weight:300;
        @media(max-width:1024px){
            font-size:22px;
            width:100%;
        }
        @media(max-width:1748px){
            font-size:20px;
            
        }
        
    }
    @media(max-width:1024px){
        flex-direction:column;
    }
`
export default class Main extends React.Component {
    state = {
        recipes: [
            {
                img: "https://media.graphassets.com/Th7fUvbxRJa81BTJbbuq",
                name: "Red Velvet Cake",
            },
            {
                img: "https://media.graphassets.com/KLPSgirSnyg6usQCKhdg",
                name: "Margherita Pizza",
            },
            {
                img: "https://media.graphassets.com/4QMDopl3Sfe58liYpkR8",
                name: "Peanut Smoothie",
            }
        ]
    }
    render() {
        return (
            <Container>
                <div>
                    <Title>Latest Recipes</Title>
                    <Recipes>
                        {this.state.recipes.map((item) => (
                            <Box>
                                <article>
                                    <h2>{
                                        item.name}
                                    </h2>
                                </article>

                                <img src={item.img} alt={item.name} />
                            </Box>
                        ))}
                    </Recipes>

                </div>
                <About>
                    <img src="https://media.graphassets.com/GUzCXIblTuTwGnKKtK7l" alt="Spoon" />
                    <article>
                        <h2>
                            ABOUT
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
                    </article>

                </About>
            </Container>
        )
    }
}