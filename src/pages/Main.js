import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store'
import styled from 'styled-components'



function Main() {

 const a = useSelector(state => state.user)
 const user2 = useSelector(state => state.user2)
 const dispatch = useDispatch()

  return (
    <>
      {/* <p>{a}</p>
      <button onClick={()=>{dispatch(changeName())}}>변경</button>
      <p>{user2}</p>
     */}

      
    </>
  )
}

export default Main