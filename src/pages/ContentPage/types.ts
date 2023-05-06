export type CardPostType = {
    id: number;
    imageUrl: string | null;
    summary: string;
    title: string;
    text: string;
  };
  
  export type PostProps = {
    post: CardPostType;
  };