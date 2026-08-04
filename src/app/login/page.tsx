"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "로그인 중 오류가 발생했습니다.");
        return;
      }

      router.push(result.isMaster ? "/master/data" : "/dashboard");
    } catch {
      setError("로그인 서버에 연결할 수 없습니다.");
    } finally {
      setIsLoading(false);
    }

  };



  return (

    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#EEF5F7]
      "
    >


      <div
        className="
          w-[420px]
          rounded-2xl
          bg-white
          p-8
          shadow-lg
        "
      >


        <h1
          className="
            text-3xl
            font-black
            text-slate-800
          "
        >
          E-MES
        </h1>


        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          생산 정보 시스템 로그인
        </p>



        <div
          className="
            mt-8
            space-y-4
          "
        >


          <input
            value={id}
            onChange={(e)=>setId(e.target.value)}
            placeholder="아이디"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              text-black
              placeholder:text-slate-400
              outline-none
              focus:border-blue-500
            "
          />



          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="비밀번호"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              text-black
              placeholder:text-slate-400
              outline-none
              focus:border-blue-500
            "
          />



          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="
              h-12
              w-full
              rounded-xl
              bg-blue-600
              font-bold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            {isLoading ? "확인 중..." : "로그인"}
          </button>

          {error && <p className="text-center text-sm font-medium text-red-500">{error}</p>}


        </div>




        <div
          className="
            mt-6
            text-center
            text-sm
            text-slate-500
          "
        >

          계정이 없으신가요?


          <Link
            href="/signup"
            className="
              ml-2
              font-bold
              text-blue-600
              hover:underline
            "
          >
            회원가입
          </Link>


        </div>


      </div>


    </div>

  );

}
