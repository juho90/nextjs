"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>로그인됨: {session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white p-2 rounded"
        >
          로그아웃
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>로그인되지 않음</p>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Google 로그인
        </button>
      </div>
    );
  }
}
