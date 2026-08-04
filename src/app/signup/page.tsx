"use client";

import Link from "next/link";
import { useState } from "react";


export default function SignupPage() {

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");



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
          w-[450px]
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
          생산 정보 시스템 회원가입
        </p>




        <div
          className="
            mt-8
            space-y-4
          "
        >


          <input
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
            placeholder="회사명"
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
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="사용자명"
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
            회원가입
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

          이미 계정이 있으신가요?


          <Link
            href="/login"
            className="
              ml-2
              font-bold
              text-blue-600
              hover:underline
            "
          >
            로그인
          </Link>


        </div>


      </div>


    </div>

  );

}