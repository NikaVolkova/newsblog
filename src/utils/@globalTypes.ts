export type CardType = {
    id: number;
    imageUrl: string;
    summary: string;
    newsSite:string;
    publishedAt: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
  };
  
  export type CardListType = CardType[]
  
  export enum CardSize {
    Large,
    Medium,
    Small,
    Search,
  }
  
  export enum ButtonType {
    Primary = "Primary",
    Secondary = "Secondary",
    Error = "Error",
  }

  export enum TabsNames {
    Articles,
    News,
  }

