import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { AuthSelectors, getUserInfo } from "src/redux/reducers/authSlice";
import {getMyPosts} from "src/redux/reducers/postSlice";
import PagesContainer from "./PagesContainer";
//import SingInPage from "./SingInPage";
//import SingUpPage from "./SingUpPage";
//import SuccessPage from "./SuccessPage";
import SinglePost from "./SinglePost";
import Home from "./Home";
//import RegConfirmation from "./RegConfirmation";
//import NewPass from "./Newpassword/NewPass";
//import ResetPass from "./ResetPassword/ResetPass";
import Search from "src/pages/Search";
//import AddPost from "src/pages/AddPost";

export enum RoutesList {
  Home = "/",
  SinglePost = "/blog/:id",
  Search = "/blog/search",
  AddPost = '/blog/add',
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Confirm = "/activate/:uid/:token",
  Success = "/sign-up/success",
  Default = "*",
  NewPass ="/new-password",
  ResetPass="/sign-in/reset-password"
}

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch= useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
      dispatch(getMyPosts());
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SinglePost} element={<SinglePost/>} />
          <Route path={RoutesList.Default } element={<div>404 NOT FOUND</div>}/>

          <Route path={RoutesList.Search} element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;