"use client";

import React, { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { BlogType } from "@/utils/type";
import Blog from "@/components/blog/Blog";
// import { useWindowSize } from "@/utils/functions";

const Page = () => {
  // const [width, height] = useWindowSize();
  // console.log(width, height);

  // keyを抽出
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const [blog, setBlog] = useState<BlogType>();

  useEffect(() => {
    const getBlog = async () => {
      const res: BlogType = await fetch(`/blog/api?key=${key}`).then((res) =>
        res.json()
      );
      setBlog(res);
    };
    getBlog();
  }, [key]);

  return <Blog blog={blog} />;
};

export default Page;
