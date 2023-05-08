import React, { FC, MouseEventHandler, useMemo } from "react";
import classNames from "classnames";
import styles from './Tabs.module.scss';
import {TabsNames, TabsProps} from "./type";
import {Theme, useThemeContext} from "../../components/context/Theme/Context";
import { useSelector } from "react-redux";


const Tabs: FC<TabsProps> = ({ tabsList, activeTab, onClick }) => {

  const {theme} =useThemeContext();
  

  const TABS_LIST = useMemo(
    () => [
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
    ],
    []
  );

  
return (
    <div className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark })}>
        {tabsList.map((tab, disabled,) => {
    return <div 
    key={tab.key} 
    className={classNames(styles.tab,{
        [styles.activeTab]:activeTab===tab.key,
        [styles.disabled]:tab.disabled,
    })}
        onClick={tab.disabled?undefined: () =>onClick(tab.key)}
        
        >{tab.title}</div>;
     })}
    </div>
   ); 
};

export default Tabs;