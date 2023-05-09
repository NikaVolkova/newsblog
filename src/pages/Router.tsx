import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";


import PagesContainer from "./PagesContainer";
import SingInPage from "./SingInPage";
import SingUpPage from "./SingUpPage";
import SuccessPage from "./SuccessPage";
import UserPage from "src/components/UserPage/UserPage";

import ContentPage from "./ContentPage";
import Verification from "src/components/Verification";
import PrivateRoute from "src/pages/PrivateRouter";
import Home from "./Home";
import RegConfirmation from "./RegConfirmation";
//import NewPass from "./Newpassword/NewPass";
//import ResetPass from "./ResetPassword/ResetPass";
import Search from "src/pages/Search";


export enum RoutesList {
  Home = "/",
  ContentPage="/posts/:id",
  SinglePost = "/blog/:id",
  Search = "/blog/search",
  Verification = "/verify-email",
  UserPage = "/profile",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  
  Success = "/sign-up/success",
  Default = "*",
  NewPass ="/new-password",
  ResetPass="/sign-in/reset-password"
}

const Router = () => {

  const dispatch= useDispatch();


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.ContentPage} element={<ContentPage/>} />
          <Route path={RoutesList.Verification} element={<Verification/>}/>
          <Route path={RoutesList.UserPage} element={ <PrivateRoute> <UserPage /> </PrivateRoute>}/>

          <Route path={RoutesList.Default } element={<div>404 NOT FOUND</div>}/>
          <Route path={RoutesList.SignIn} element={<SingInPage />} />
          <Route path={RoutesList.SignUp} element={<SingUpPage />} />
          <Route path={RoutesList.Success} element={<SuccessPage />} />

          <Route path={RoutesList.Search} element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;