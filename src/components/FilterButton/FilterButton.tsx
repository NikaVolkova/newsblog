import { FC } from "react";
import classNames from "classnames";
import styles from "../Button/Button.module.scss";
import Button from "../Button";
import { FilterBtnProps,ButtonType } from "src/utils/@globalTypes";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";


const ButtonFilter: FC<FilterBtnProps> = ({
  buttonGroup,
  onClick,
  activeBtn,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.filterButtons, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {buttonGroup.map(({ key, title }) => {
        return (
          
          <Button 
            key={key}
            type={activeBtn === key ? ButtonType.Primary : ButtonType.Secondary}
            onClick={() => onClick(key)}
            title= {title}
          >
            
          </Button >
      
        );
      })}
    </div>
  );
};

export default ButtonFilter;