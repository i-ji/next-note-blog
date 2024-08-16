import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { ArticleType } from "@/utils/type";

interface Article {
  article: ArticleType;
}

const Article = ({ article }: Article) => {
  // 投稿日時の抽出
  const year = article.create_at.substring(0, 4);
  const month = article.create_at.substring(5, 7);
  const day = article.create_at.substring(8, 10);

  //   console.log(article.create_at);

  return (
    <li
      key={article.id}
      className="w-full px-10 sm:px-5 py-5 odd:bg-sky-200 even:bg-sky-100 sm:odd:bg-sky-300 sm:even:bg-sky-300 sm:w-1/2 lg:w-1/3 sm:hover:opacity-60"
    >
      <Link
        href={{ pathname: "/blog", query: { key: article.key } }}
        className="cursor-pointer"
      >
        <h1 className="text-lg font-bold sm:h-14">{article.name}</h1>
        <Image
          src={article.eyechatch}
          alt=""
          width={600}
          height={600}
          priority={true}
          className="w-full mt-1"
        />
      </Link>

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-1">
          <CiHeart className="text-2xl" />
          <span>{article.like_count}</span>
        </div>

        <div>
          <span>
            {year}/{month}/{day}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Article;
