import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Paginate from "src/components/Paginate";
import SearchList from "src/components/SearchList";
import EmptyState from "src/components/EmptyState";
import { LocationState } from "./type";
import Selectors from "src/redux/Selectors";

import { PER_PAGE } from "src/utils/constants";
import { RoutesList } from "../Router";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchElement } = location.state as LocationState;
  const searchValue = useSelector(Selectors.getSearchedPosts);
  const postsCount = useSelector(Selectors.getSearchedPostsCount);
  const [page, setPage] = useState(1);
  const searchedPosts = useSelector(Selectors.getSearchedPosts);
  const isSearchPostsLoading = useSelector(
    Selectors.getSearchedPostsLoading
  );
  
   useEffect(() => {
    
    if (searchElement.length === 0) {
      navigate(RoutesList.Home);
    }
         
  }, [searchElement]);

  const onNextReached = () => {
    setPage(page + 1);
  };
  return (
    searchedPosts.length > 0 ? ( <div>
       Search results "{searchElement}"

       <SearchList title="searched" description="" searchedPosts={searchedPosts}/>
       <Paginate pagesCount={16} ></Paginate>
      
    </div>): (
    <EmptyState />  )
  );
};

export default Search;