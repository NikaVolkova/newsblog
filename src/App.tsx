import React from 'react';
import './App.css';
import {  useSelector  } from "react-redux";

import ThemeProvider from "./components/context/Theme/Provider";
import { Theme } from "./components/context/Theme/Context";
import Router from "./pages/Router";

import { useDispatch } from "react-redux/es/exports";
import { changeTheme, ThemeSelectors } from "./redux/reducers/themeSlice";
 

const App=()=> {
  
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getThemeValue);

  const onChangeTheme=(value:Theme)=>{
    dispatch(changeTheme(value));
  };

  
  return (
 
      <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
         <Router/>
      </ThemeProvider>
  );
}

export default App;
