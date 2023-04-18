import React, {useEffect, useState,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import styles from "./Home.module.scss";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Tabs from "src/components/Tabs";
import CardsList from "src/components/CardsList";
import { TabsNames, ButtonType } from "src/utils/@globalTypes";
import {Theme, useThemeContext} from "../../components/context/Theme/Context";

import { getAllPosts, PostSelectors } from "src/redux/reducers/postSlice";
import SelectedPostModal from "./SelectedPostModal";
import { AuthSelectors } from "src/redux/reducers/authSlice";
import { PER_PAGE } from "src/utils/constants";
import Button from "src/components/Button";
import Loader from "src/components/Loader";

enum Order {
  Date = "date",
  Title = "title",
}

const TABS_LIST = [
  {
    title: "Articles",
    disabled: false,
    key: TabsNames.Articles,
  },
  {
    title: "News",
    disabled: false,
    key: TabsNames.News,
  },
 
];





const Home = () => {
 
  const {theme} =useThemeContext();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(TabsNames.Articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordering, setOrdering] = useState("");


  const onTabClick = (key: TabsNames) => () => {
    setActiveTab(key);
    setCurrentPage(1);
  };
  const onFilterButtonClick = (order: Order) => () => {
    if (order === ordering) {
      setOrdering("");
      setCurrentPage(1);} 
      else {
      setOrdering(order);
    }
  };

  const params = useParams();
  console.log("Id from url", params?.id);

  const postsList = useSelector(PostSelectors.getAllPosts);

  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
    dispatch(getAllPosts({ offset, ordering }));
  }, [currentPage, ordering]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };
 // const favouriteList = useSelector(PostSelectors.getLikedPosts);
   const News = useSelector(PostSelectors.getMyPosts);
 //  const addPostList = useSelector(PostSelectors.getAddPost);
   const postsCount = useSelector(PostSelectors.getAllPostsCount);
   const pagesCount = Math.ceil(postsCount / PER_PAGE);
   const isLoading = useSelector(PostSelectors.getAllPostsLoading);

  const getCurrentList = () => {
    switch (activeTab) {
     // case TabsNames.Popular:
       // return favouriteList;
      case TabsNames.News:
        return News; 
     // case TabsNames.Favourites:
     //   return addPostList;
        case TabsNames.Articles:
      default:
        return postsList;
    }
  };
  return (
    <div>

      <Title title={"Blog"} />
      <Tabs tabsList={TABS_LIST} activeTab={activeTab} onClick={onTabClick}/>

      <div className={styles.filterButtons}>
        <Button  title={"Day"}
          onClick={onFilterButtonClick(Order.Date)}
          type={ButtonType.Secondary}
          className={classNames(styles.filter, {
            [styles.activeButton]: ordering === Order.Date,
          })}
        />
         <Button  title={"Week"}
          onClick={onFilterButtonClick(Order.Date)}
          type={ButtonType.Secondary}
          className={classNames(styles.filter, {
            [styles.activeButton]: ordering === Order.Date,
          })}
        />
         <Button  title={"Month"}
          onClick={onFilterButtonClick(Order.Date)}
          type={ButtonType.Secondary}
          className={classNames(styles.filter, {
            [styles.activeButton]: ordering === Order.Date,
          })}
        />
         <Button  title={"Year"}
          onClick={onFilterButtonClick(Order.Date)}
          type={ButtonType.Secondary}
          className={classNames(styles.filter, {
            [styles.activeButton]: ordering === Order.Date,
          })}
        />
        <Button title={"Title Filter"}
          onClick={onFilterButtonClick(Order.Title)}
          type={ButtonType.Secondary}
          className={classNames(styles.filter, {
            [styles.activeButton]: ordering === Order.Title,
          })}
        />
      </div>

{isLoading ? (
  <Loader />
    ) : (
    <>  
      <CardsList cardsList={getCurrentList()} />
      {activeTab !== TabsNames.Articles &&
        activeTab !== TabsNames.News && (
          <ReactPaginate
            pageCount={pagesCount}
            onPageChange={onPageChange}
            containerClassName={styles.pagesContainer}
            pageClassName={styles.pageNumber}
            breakClassName={styles.pageNumber}
            breakLinkClassName={styles.linkPage}
            activeLinkClassName={styles.linkPage}
            pageLinkClassName={styles.linkPage}
            activeClassName={styles.activePageNumber}
            nextClassName={classNames(styles.arrowButton, {
              [styles.blockedButton]: currentPage === pagesCount,
            })}
            previousClassName={classNames(styles.arrowButton, {
              [styles.blockedButton]: currentPage === 1,
            })}
            previousLinkClassName={styles.linkPage}
            nextLinkClassName={styles.linkPage}
          />
        )}
      </>
    )}
      <SelectedPostModal/>
      
    </div>
  );
};

export default Home;