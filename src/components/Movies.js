import React from "react"
import styled from "styled-components"
import { Link} from "react-router-dom"
import { selectMovies} from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

function Movies(){
    const movies= useSelector(selectMovies);
    
    return(
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                {
                    movies && movies.map((movie)=>(
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`} >
                                <img src={movie.cardImg} />
                            </Link>  
                        </Wrap>
                    ))
                }         
            </Content>
        </Container>
        
    )
}

export default Movies

const Container = styled.div`
    h4{
        margin-left: 10px;
    }
`

const Content = styled.div`
    padding: 10px 10px;
    display: grid;
    grid-gap:25px;
    grid-template-columns: repeat(4 , minmax(0,1fr));
`

const Wrap = styled.div`
    cursor:pointer;
    border-radius: 10px;
    overflow:hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26% 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-benzier(0.2 0.4 0.4 0.9) 0s;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`