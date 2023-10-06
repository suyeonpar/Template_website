import React from 'react'
import styled from 'styled-components'
import AnimateNumber from 'animated-number-react';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
    width: 100%;
    padding-bottom: 48px;
    text-align: center;
    color: #fff;
    background: url("https://via.placeholder.com/1920x450/005") fixed center center;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;
`
const ContentTitle = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 1.5rem;
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase; //모두 대문자로 바꿔줌
`
const Desc = styled.p`
    font-size: 0.875rem;
    color: #a0a0a0;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    padding: 48px 0;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        flex-basis: 100%;
        text-align: center;
        @media screen and (min-width: 640px) {
          flex-basis: 50%;
        }
        @media screen and (min-width: 1024px) {
          flex-basis: 25%;
        }
        p:first-child{font-size: 1.25rem;}
        p:last-child{font-size: 1rem; padding-bottom: 2rem;}
        span{font-size: 60px; padding-top: 20px; display: block;}
      }
    }
`
//styeld conponent는 id에 직접적으로 스타일을 주지 못한다

function Diffrence() {

  const [isView, setIsView] = useState(false); //내가 보는 화면 체크

  useEffect(()=>{
    const scrollEvent = ()=>{
      const rect = document.querySelector("#content").getBoundingClientRect();
      console.log(rect);
      console.log(window.innerHeight); //화면의 height 값
      if(rect.top-200 <= window.innerHeight && rect.bottom >= 0){
        setIsView(true);
      }
    }
    window.addEventListener("scroll" ,scrollEvent)
    scrollEvent(); //화면의 위치가 나온다.

    return()=>{
      window.removeEventListener("scroll", scrollEvent)
    }

  },[])

  const data = [
    {
      "title" : "설립일",
      "number" : "2017",
      "desc" : "Date of Foundation"
    },
    {
      "title" : "직원수",
      "number" : "456",
      "desc" : "Number of Employees"
    },
    {
      "title" : "계약체결",
      "number" : "4521",
      "desc" : "Contract Conclusion"
    },
    {
      "title" : "견적문의",
      "number" : "5416",
      "desc" : "Request for a Quote"
    }
  ]

  return (
    <>
    <Container>
      <ContainerWrap>
        <ContentTitle>
          <Title>Different</Title>
          <Desc>제목에 대한 부가 설명...</Desc>
        </ContentTitle>
        <ContentGrid>
          <ul id="content">
            {            
            data.map((e,i)=>{
              return(
            <li key={i}>
              <p>{e.title}</p> 
              <p>
              {
                isView &&
                <AnimateNumber
                  value={e.number}
                  duration={5000}
                  formatValue={(value) => `${value.toFixed(0)}`}
                />
              }
              </p>
            </li>
            )
            })
            }
          </ul>
        </ContentGrid>
      </ContainerWrap>
    </Container>

    </>
  )
}

export default Diffrence