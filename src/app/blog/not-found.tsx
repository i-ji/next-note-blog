import Link from "next/link";

export default function UserNotFoundPage() {
  return (
    <div className="max-w-[768px] mx-auto mt-10 px-5">
      <h1 className="text-lg border-b pb-1 mb-1">このページは見つかりません</h1>
      {/* <p>未找到测验</p>
      <p className="mt-4">
        <Link href="/" className="text-white hover:text-white/85">
          返回
        </Link>
      </p> */}
    </div>
  );
}
