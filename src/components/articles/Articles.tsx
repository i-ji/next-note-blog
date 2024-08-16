"use client";

import React, { useState, useEffect } from "react";
import { ArticleType } from "@/utils/type";
import Article from "../article/Article";
import Profile from "../profile/Profile";
import InfinityScroll from "react-infinite-scroller";
import { useWindowSize } from "@/utils/functions";

interface Articles {
  initialArticles: ArticleType[];
}

const Articles = () => {
  // 画面の幅と高さを取得
  const [width, height] = useWindowSize();

  let initialArticles = [] as ArticleType[];

  // スクロールしたい要素がまだあるか
  const [hasMore, setHasMore] = useState(true);
  const [articles, setArticles] = useState<ArticleType[]>([]);

  // useEffect(() => {
  //   const getArticle = async () => {
  //     const res = await fetch(`/api?start=${0}`).then((res) => res.json());
  //     setArticles(res);
  //   };

  //   getArticle();
  // }, []);

  // loadMoreのコールバック関数
  const loadArticles = async (page: number) => {
    const res: ArticleType[] = await fetch(`/api?start=${page}`).then((res) =>
      res.json()
    );
    // console.log(page);
    setArticles([...articles, ...res]);
    const count = res.length;

    setHasMore(count > 0);
  };

  // initialArticles = [...articles];
  // console.log(initialArticles);

  return (
    // <div className="lg:flex">
    //   {width >= 1024 ? (
    //     <div className="w-[300px] min-h-max">
    //       <Profile />
    //     </div>
    //   ) : (
    //     <></>
    //   )}
    <InfinityScroll
      hasMore={hasMore}
      loadMore={loadArticles}
      pageStart={-2}
      loader={
        <div key={0} className="text-center py-5 font-bold text-xl mx-auto">
          Loading...
        </div>
      }
    >
      <ul className="sm:flex sm:flex-wrap">
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </ul>
    </InfinityScroll>
    // </div>
  );
};

export default Articles;
