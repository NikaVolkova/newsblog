import React, { FC, useEffect } from "react";
import { CardType } from "../../utils/@globalTypes";
import {ContentProps} from "./types";
import styles from "./ContentPage.module.scss";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { BookmarkIcon} from "../../assets/icons/BookmarkIcon";
import { DislikeIcon } from "../../assets/icons/DislikeIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import classNames from "classnames";

type PostProps = {
  post: CardType;
};
const ContentPage: FC<PostProps> = ({post}) => {
const { title,imageUrl,summary, id} = post;
const { theme } = useThemeContext();
return(
<div>
    <div className={styles.wraper}>
        <div className={styles.navigation}>
         <div className={styles.anchorНome}>
         <div
className={classNames (styles.anchorНome, {
[styles.darkAnchorНome]: theme === Theme.Dark,
})}
>
Home
</div>

         </div>
         <div className={styles.pipeline}>|</div>
         <div className={styles.postText}>Post {id}</div>
        </div>
              <div className={styles.contentFilling}>
               <div className={styles.header}>
               <div className={classNames(styles.title, {
              [styles.darkTitle]: theme === Theme.Dark,
              })}
               >
             {title}
            </div>

                </div>
               <img src={imageUrl} className={styles.picture}></img>
               <div className={styles.textPost}>
               <div className={classNames(styles.textPost, {
              [styles.darkText]: theme === Theme.Dark,
              })}
              >
            {summary}
             </div>

                </div>
              </div>
            <div className={styles.icons} >
              <div className={styles.leftIcons}>
                  <div className={styles.likeIc}>
                <LikeIcon/>
                  </div>
                  <div className={styles.disLikeIc}>
                <DislikeIcon/>
                  </div>
              </div>
              <div className={styles.rightIcons}>
               <div className={styles.saveIc}>
               <BookmarkIcon /> 
               </div>
               <div className={styles.addIc}>
               Add to favorites
               </div>
              </div>
            </div>


    </div>
</div>
);
};
export default ContentPage;