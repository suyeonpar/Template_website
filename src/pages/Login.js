import React, { useState } from 'react'
import styled from 'styled-components'
import { firebaseAuth, signInWithEmailAndPassword } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  height: calc(100vh - 86px);
  align-items: center;
`
const SignUp = styled.div`
  width: 35vw;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 45px;
  transition: border-color 0.4s;
  &:focus{
    border-color: #007bff;
    outline: none;
  }
  &::placeholder{
    opacity: 0;
  }
`
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  input:focus + label,
  input:not(:placeholder-shown) + label{
    top: 4px;
    left: 4px;
    font-size: 8px;
    color: #007bff;
  }
`
const Lable = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #999;
  transition: all 0.3s;
  pointer-events: none;
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  border: none;
  color: #fff;
  cursor: pointer;
`

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  //console.log(navigate);
  const errorMsg = (errorCode) =>{
    const firebaseError = {
      'auth/user-not-found' : "이메일 혹은 비밀번호가 잘못 되었습니다.",
      'auth/wrong-password' : "이메일 혹은 비밀번호가 잘못 되었습니다.",
      'auth/invaild-email' : "이메일 혹은 비밀번호가 잘못 되었습니다.",
      'auth/invalid-login-credentials' : "이메일 혹은 비밀번호가 잘못 되었습니다."
    }
    return firebaseError[errorCode] || '알 수 없는 에러가 발생했습니다.'
  }


  const LoginForm = async (e) =>{
    e.preventDefault(); //함수내에서만 쓸 수 있고 
    try{//오류가 있을 순 있지만 실행해주세요 오류가 없다면 try 를 실행
      const userLogin = await signInWithEmailAndPassword(firebaseAuth, email, password);
      //console.log(userLogin)
      const user = userLogin.user
      //console.log(user) // user정보만 콘솔에 뜬다
    }catch(error){//오류가 있다면 catch를 실행해주세요
      setError(errorMsg(error.code));
      //console.log(error.code)
    }
  }

  return (
    <>
    <Container>
      <SignUp>
        <Title>로그인</Title>
        {email} {password}
        <form onSubmit={LoginForm}>
          <InputWrapper>
            <Input type='email' className='email' placeholder='이메일' onChange={(e)=>{setEmail(e.target.value)}} />
            <Lable>이메일</Lable>
          </InputWrapper>
          <InputWrapper>
            <Input type='password' className='password' placeholder='비밀번호' onChange={(e)=>{setPassword(e.target.value)}} />
            <Lable>비밀번호</Lable>
          </InputWrapper>
          <Button>로그인</Button>
        </form>
        <p>{error}</p>
      </SignUp>
    </Container>
    </>
  )
}

export default Login