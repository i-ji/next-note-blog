import { ArticleType } from "@/utils/type";

const ENDPOINT = "https://note.com/api/v2/creators/tamujo0402";
// const ENDPOINT = "https://note.com/api/v2/creators/kachofugetsu1234";
// const ENDPOINT_COUNT = "https://note.com/api/v2/creators/tamujo0402";

// ブログ一覧を取得
export async function GET(req: Request) {
  // クエリ文字列を受け取る
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");

  const startNum = Number(start) * 2 + 1;

  const articles = [] as ArticleType[];

  try {
    for (let i = startNum; i <= startNum + 1; i++) {
      const data = await fetch(`${ENDPOINT}/contents?kind=note&page=${i}`, {
        cache: "no-store",
      }).then((res) => res.json());

      for (let i = 0; i <= 5; i++) {
        const article: ArticleType = {
          id: data.data.contents[i].id,
          key: data.data.contents[i].key,
          name: data.data.contents[i].name,
          create_at: data.data.contents[i].publishAt,
          like_count: data.data.contents[i].likeCount,
          eyechatch: data.data.contents[i].eyecatch,
        };
        articles.push(article);
      }
    }
  } catch (error) {
    console.error("GETリクエストが失敗しました", error);
  }
  return Response.json(articles);
}
