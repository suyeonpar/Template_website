import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./components/Nav";

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
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = () => {
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  return (
  <>
    <ThemeProvider theme={DarkMode}>
      <GlobalStyle />
      <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig} />
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </ThemeProvider>
  </>
  );
}

export default App;
