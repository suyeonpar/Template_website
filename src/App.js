import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./components/Nav";
import store from "./store";
import { Provider, useSelector } from "react-redux";

function App() {

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
  
  return(
    <>
    <ThemeProvider theme={DarkMode}>
      <GlobalStyle />
      <Aside />
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </ThemeProvider>
    </>
    )
  }
 
export default App;
