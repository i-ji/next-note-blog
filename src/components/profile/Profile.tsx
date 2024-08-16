import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="bg-sky-200 pt-5">
      <div className="flex items-center">
        <Image src="/img/icon.png" alt="" width={80} height={80} />
        <div className="ml-5">
          <h1 className="text-xl font-bold mb-2">J-Ito</h1>
          <div className="text-lg flex items-center justify-between">
            <FaXTwitter />
            <FaInstagramSquare />
          </div>
        </div>
      </div>

      <section className="px-2">
        <h2 className=" text-xl font-bold mt-5 mb-2 text-left">自己紹介</h2>

        <p className=" leading-6 text-sm">
          京都市在住、1997年生まれの♂です。
          2022年12月よりランニングを開始。10km~フルマラソンまでを走ります。
        </p>
      </section>

      <section className="px-2">
        <h2 className=" text-xl font-bold mt-5 mb-2 text-left">自己ベスト</h2>

        <ul className="text-sm space-y-1">
          <li>10km 43:17 (堺シティマラソン 2024)</li>
          <li>ハーフ 1:36:53(亀岡ハーフマラソン 2023)</li>
          <li>フル 4:19:44 (京都マラソン 2024)</li>
        </ul>
      </section>

      <section className="px-2">
        <h2 className=" text-xl font-bold mt-5 mb-2 text-left">今後の目標</h2>

        <p className=" leading-6 text-sm">
          2025年シーズンでのサブ3を目標にを目標に練習しています。サブ3達成後のことは何も考えていません。
        </p>
      </section>

      <div className="px-2 text-xl absolute bottom-5 cursor-pointer">
        <RiAdminLine />
      </div>
    </div>
  );
};

export default Profile;
