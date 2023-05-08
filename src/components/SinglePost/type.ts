export type PostType = {
    id: number;
    imageUrl: string | null;
    summary: string;
    title: string;
    text: string| null;
  };
  
  export type PostProps = {
    post: PostType;
  };