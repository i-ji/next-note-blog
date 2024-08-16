export interface ArticleType {
  id: number;
  key: string;
  name: string;
  like_count: number;
  create_at: string;
  eyechatch: string;
}

export interface BlogType {
  id: number;
  name: string;
  body: string;
  created_at: string;
  eyecatch: string | undefined;
  like_count: number;
  key: string;
}
