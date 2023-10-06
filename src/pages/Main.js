import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import Banner from '../components/home/Banner'
import Company from '../components/home/Company'
import Content from '../components/home/Content'
import Diffrence from '../components/home/Diffrence'
import Management from '../components/home/Management'

// const Test = () =>{
//   return console.log("계속 실행됨")
// }

function Main() {

  // const result = useMemo(()=>{
  //   return Test()
  // },[]) //필요할때만 바꿀 수 있다. mount되기 직전에 작용한다.

  // useEffect(()=>{
  //   console.log("완료!")

  //   return () =>{
  //     console.log("완료가 되기전 실행됨") //제일 마지막에 실행
  //   }

  // },[]) //소괄호 2번 문법! , []업데이트가 제거되고 딱 한번만 실행 return은 타이머를 제거 후 실행


  //let [count, setCount] = useState(0)

  return (
    <>
    <Banner />
    <Company />
    <Content />
    <Diffrence />
    <Management />
    </>
  )
}

export default Main