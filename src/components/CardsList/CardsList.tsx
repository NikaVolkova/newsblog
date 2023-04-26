import React, { FC } from "react";
import { CardListType, CardSize } from "../../utils/@globalTypes";
import Card from "../Card";
import EmptyState from "../EmptyState/EmptyState";
import styles from "./CardsList.module.scss";

export type CardsListProps = {
  cardsList: CardListType;
};
const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      <div>
          <div className={styles.mediumContainer}>
          {cardsList.map((item, index) => {
            if (index > 0 && index < 13) {
              return <Card key={item.id} card={item} size={CardSize.Medium} />;
            }
          })}
        </div>
      </div>
      
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no posts"
      description="Try to check out another category"
    />
  );
};

export default CardsList;