import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
// import { useState } from "react";
import Nav from "./components/Nav";
import store, { logIn, loggedIn } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Example from "./example/Example";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Logout from "./pages/Logout";
import Modify from "./pages/Modify";
import Findemail from "./pages/Findemail";
import Write from "./pages/Write";
import Service from "./pages/Service";
import Notice from "./pages/service/Notice";
import Online from "./pages/service/Online";
import Qna from "./pages/service/Qna";
import Gallery from "./pages/service/Gallery";
import View from "./pages/View";
import { useState } from "react";
import Notpage from "./pages/Notpage";


function App() {
  

  // const light = {
  //   colors : {
  //     Primary : "#fff8ef",
  //     Secondary : "#102C57",
  //     BgColor : "#e9f1f6",
  //     TxtColor : "#000",
  //     ContentBg : "#fff"
  //   }
  // }
  // const dark = {
  //   colors : {
  //     Primary : "#102C57",
  //     Secondary : "#fff8ef",
  //     BgColor : "#333",
  //     Color : "#e9e9e9",
  //     ContentBg : "#272929"
  //   }
  // }

  return (
  <>
  <Provider store={store}>
    <Inner />
  </Provider>
  </>
  );
}

function Inner(){

  const light = {
    colors : {
      Primary : "#fff8ef",
      Secondary : "#102C57",
      BgColor : "#e9f1f6",
      TxtColor : "#000",
      ContentBg : "#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#102C57",
      Secondary : "#fff8ef",
      BgColor : "#333",
      Color : "#e9e9e9",
      ContentBg : "#272929"
    }
  }
  
  const theme = useSelector(state => state.dark);
  const DarkMode = theme === 'light' ? light : dark;
  
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user)
  const uid = sessionStorage.getItem("users");
  //console.log(uid)

  useEffect(()=>{
    if(uid){
      dispatch(logIn(uid)); //완전히 로딩되고 난 후 작성
    }
    const fetchUser = async () =>{
      if(!uid) return;
      const userDoc = doc(collection(getFirestore(),"users"), uid);
      try{
        const docSnapshot = await getDoc(userDoc);
        // console.log(docSnapshot.exists())
        if(docSnapshot.exists()){
          const userData = docSnapshot.data();
          dispatch(loggedIn(userData))
        }
      }catch(error){
        console.log(error)
      }
    }
    fetchUser();
  })
  
  // useEffect(()=>{
  //   const fetchUser = async () =>{
  //     if(!uid) return;
  //     const userDoc = doc(collection(getFirestore(),"users"), uid);
  //     try{
  //       const docSnapshot = await getDoc(userDoc);
  //       console.log(docSnapshot.exists())
  //       if(docSnapshot.exists()){
  //         const userData = docSnapshot.data();
  //         dispatch(loggedIn(userData))
  //       }
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  //   fetchUser();
  // },[dispatch, uid])
  
  const [isModal, setIsModal] = useState(true);
  const navigate = useNavigate();

  return(
    <>
    <ThemeProvider theme={DarkMode}>  
      <GlobalStyle />
      <Aside />
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        {/* <Route path="/" element={<Example />}></Route> */}
        <Route path="/member" element={<Member/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/modify" element={<Member />}></Route>
        <Route path="/findemail" element={<Findemail />}></Route>
        <Route path="/write/:board" element={<Write />}></Route>
        <Route path="/view/:board/:view" element={<View />}></Route>
        <Route path="/view/:board" element={isModal && <Modal error="유효하지 않은 경로입니다." onClose={()=>{navigate('/')}} />}></Route>
        <Route path="/edit/:board/:view" element={<Write />}></Route>
        <Route path="/service" element={<Service />}>
          <Route path="notice" element={<Notice />}></Route>
          <Route path="online" element={<Online />}></Route>
          <Route path="qna" element={<Qna />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
        </Route>
        <Route path="/*" element={<Notpage />}></Route>
      </Routes>
    </ThemeProvider>
    </>
    )
  }
 
export default App;
