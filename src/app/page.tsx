"use client";

import Image from "next/image";
import Header from "@/components/layouts/Header";
import { useEffect, useState } from "react";
import { ArticleType } from "@/utils/type";
import Articles from "@/components/articles/Articles";
import { useWindowSize } from "@/utils/functions";

export default function Home() {
  // 画面の幅と高さを取得

  const [width, height] = useWindowSize();
  // console.log(width, height);

  // const [articles, setArticles] = useState<ArticleType[]>([]);
  // useEffect(() => {
  //   const getArticle = async () => {
  //     const res = await fetch(`/api?start=${0}`).then((res) => res.json());
  //     setArticles(res);
  //   };

  //   getArticle();
  // }, []);

  return (
    <div>
      {/* {width <= 1024 ? <Header /> : <></>} */}
      <Header />
      {/* <Articles articles={articles} /> */}
      <Articles />
    </div>
  );
}
