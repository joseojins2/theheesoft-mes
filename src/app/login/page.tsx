"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {

    // 추후 DB 인증 연결 예정
    // 현재는 테스트용 대시보드 이동

    router.push("/dashboard");

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
            로그인
          </button>


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