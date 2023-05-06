import React, { FC } from "react";
import { CardListType} from "src/utils/@globalTypes";
import Card from "src/components/Card";
import EmptyState from "src/components/EmptyState";
import styles from "./SearchCardList.module.scss";

type SearchCardListProps = {
  cardsList: CardListType;
};
const SearchCardList: FC<SearchCardListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <Card key={`searchItem_${item.id}_${index}`} post={item}  />;
      })}
    </div>
  ) : (
    <EmptyState />
  );
};
export default SearchCardList;