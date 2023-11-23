import { faBuilding, faHistory, faMedal, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 48px 0;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;
`
const Content = styled.div`
    flex-basis: 50%;
    display: none;
    @media screen and (min-width: 1024px){
        display: block;
    }
    img{width: 100%;}
`
const ContentDesc = styled.div`
    flex-basis: 100%;
    @media screen and (min-width: 1024px){
        flex-basis: 50%;
    }
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 50%;
    padding: 3rem;
    box-sizing: border-box;
    position: relative;
    @media screen and (max-width: 640px) {
        padding: 1rem;
    }
    &:nth-child(3n-2){
        background-color: rgb(0, 28, 74);
        color: white;  
    }
    &:hover svg{
        transform: rotateY(360deg);
    }
    h3{
        font-size: 2rem;
        font-weight: bold;
        @media screen and (max-width: 640px) {
            font-size: 1.5rem;
    }
    }
    p{
        margin: 1rem 0;
    }
    svg{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        font-size: 2.5rem;
        color: rgba(0,0,0,0.3);
        transition: 0.7s;
        @media screen and (max-width: 640px) {
            font-size: 2rem;
    }
    }
`

const company = [
    {
        "title" : "인사말",
        "desc" : "인사말...",
        "icon": faBuilding
    },
    {
        "title" : "스킬",
        "desc" : "내가 잘하는 것...",
        "icon": faHistory
    },
    {
        "title" : "목표",
        "desc" : "이루어 나갈 목표...",
        "icon": faPaperPlane
    },
    {
        "title" : "계획중",
        "desc" : "ing...",
        "icon": faMedal
    }
]

function Company() {
  return (
    <>
    <Container>
        <ContainerWrap>
            <Content>
                <img src="https://via.placeholder.com/650x620" alt='전경' />
            </Content>
            <ContentDesc>
                {
                    company.map((e,i)=>{
                        return(
                            <Card key={i}>
                                <h3>{e.title}</h3>
                                <p>{e.desc}</p>
                                <FontAwesomeIcon icon={e.icon} />
                            </Card>
                        )
                    })
                }
            </ContentDesc>
        </ContainerWrap>
    </Container>
    </>
  )
}

export default Company