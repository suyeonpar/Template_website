import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store';

function Main() {

  const a = useSelector(state => state.user)
  console.log(a);

  const dispatch = useDispatch()  //dispatch(함수명)

  return (
    <>
    <p>{a}</p>
    {/* <p>{age}</p> */}
    <button onClick={() =>{dispatch(changeName())}}>변경</button>
    </>
  )
}

export default Main