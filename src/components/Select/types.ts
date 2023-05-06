import { SortOrder } from "../../utils";

export type SelectNameArray = {
  key: SortOrder;
  title: string;
  value: string;
};
export type SelectProps = {
  options: Array<SelectNameArray>;
  onChange?: any;
  selectValue: string;
  disabled?: boolean;
};