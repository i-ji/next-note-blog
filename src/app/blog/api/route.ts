import { BlogType } from "@/utils/type";

const ENDPOINT = "https://note.com/api/v3/notes";

// ブログの詳細を取得
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  try {
    const data = await fetch(`${ENDPOINT}/${key}`, { cache: "no-store" }).then(
      (res) => res.json()
    );

    const blogDetail: BlogType = {
      id: data.data.id,
      name: data.data.name,
      body: data.data.body,
      created_at: data.data.created_at,
      eyecatch: data.data.eyecatch,
      like_count: data.data.like_count,
      key: data.data.key,
    };

    return Response.json(blogDetail);
  } catch (error) {
    console.error("GETリクエストが失敗しました", error);
  }
}
