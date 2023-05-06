import { ButtonSort} from "../../utils";
import { ReactNode } from "react";

export type FilterBtnNameArray = {
  key: ButtonSort;
  title: string|ReactNode;
  disabled?: boolean;
};

export type FilterBtnProps = {
  buttonGroup: FilterBtnNameArray[];
  onClick: (id: ButtonSort) => void;
  activeBtn?: ButtonSort;
  
};

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
export type ButtonClassnamesType = {
  [k in ButtonType]: string;
};

export type ButtonPropsType = {
  title?: string|ReactNode;
  onClick?: any;
  className?: string;
  disabled?: boolean;
  type: ButtonType;
  children?: ReactNode;
};