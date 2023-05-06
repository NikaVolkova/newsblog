export enum TabsNames {
  Articles = "articles",
    News = "news",
 
  }
  
  export type TabsType = {
    title: string;
    disabled?: boolean;
    key: TabsNames;
  };
  
  export type TabsProps = {
    tabsList: TabsType[];
    onClick: (id: TabsNames) => void;
    activeTab: TabsNames;
  };