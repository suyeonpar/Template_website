import React, { useState } from 'react'
import { logOut } from '../store'
import { signOut } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase'
import { useDispatch } from 'react-redux'
import Modal from '../components/Modal'

// 로그아웃 시 메인페이지로 감
function Logout() {
    const [isModal,setIsModal] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    signOut(firebaseAuth)
    .then(()=>{
            dispatch(logOut())
            // navigate("/")
            sessionStorage.removeItem("users")
            
    })
    .catch((error)=>{
        console.log(error);
    })
  return (
    <>
     {
     
        isModal &&
             <Modal error="로그아웃을 하시겠습니까?" onClose={()=>{
                setIsModal(false);
                navigate("/")
             }}/>
        
        }
        {/* 다른 컴포넌트는 onClick 안 됨 */}
    </>
  )
}

export default Logout