import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BlogType } from "@/utils/type";
import parse from "html-react-parser";

interface Blog {
  blog: BlogType | undefined;
}

const Blog = ({ blog }: Blog) => {
  // 投稿日時
  const year = blog?.created_at.substring(0, 4);
  const month = blog?.created_at.substring(5, 7);
  const day = blog?.created_at.substring(8, 10);

  const html = blog?.body;

  return (
    <div className="max-w-[640px] mx-auto mb-20">
      <header className="py-5 px-3 sm:px-0">
        <Link href={{ pathname: "/", query: {} }}>
          <IoMdArrowRoundBack className="text-3xl" />
        </Link>
      </header>

      {blog?.eyecatch && (
        <Image
          src={blog.eyecatch}
          alt=""
          width={600}
          height={600}
          priority={true}
          className="w-full max-w-[768px]"
        />
      )}

      <h1 className="font-bold text-xl sm:text-2xl sm:leading-10 mt-5 px-5">
        {blog?.name}
      </h1>

      <div className="flex items-center justify-between mt-5 px-5 mb-10">
        <div className="flex items-center gap-1">
          <CiHeart className="text-2xl" />
          <span>{blog?.like_count}</span>
        </div>

        <div>
          <span>
            {year}/{month}/{day}
          </span>
        </div>
      </div>

      <div className="prose px-5 sm:px-0">{html && parse(html)}</div>
      {/* <div className="px-5">{html}</div> */}
    </div>
  );
};

export default Blog;
