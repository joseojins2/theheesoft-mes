"use client";

import {
  Bell,
  LockKeyhole,
  LogIn,
} from "lucide-react";

import { useRouter } from "next/navigation";


export default function Header() {

  const router = useRouter();


  const handleLogin = () => {
    router.push("/login");

  };


  return (

    <header
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        border-b border-slate-200
        px-2
        pb-4
      "
    >


      <div className="text-center">

        <h1
          className="
            text-2xl sm:text-[32px]
            font-black
            text-slate-800
          "
        >
          생산 정보 시스템 (E_MES)
        </h1>


        <p
          className="
            mt-1
            text-base
            text-slate-600
          "
        >
          한눈에 보는 통합 생산 관리 플랫폼
        </p>

      </div>




      <div
        className="
          mt-4 flex flex-wrap justify-center md:absolute md:right-0 md:top-3 md:mt-0
          items-center
          gap-3
        "
      >


        <button
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-3 sm:px-4
            text-sm
            font-bold
            text-slate-600
          "
        >

          <Bell size={16}/>

        </button>



        <button
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-3 sm:px-4
            text-sm
            font-bold
            text-slate-600
          "
        >

          <LockKeyhole size={16}/>

          암호 변경

        </button>



        <button
          onClick={handleLogin}
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-xl
            bg-slate-800
            px-3 sm:px-4
            text-sm
            font-bold
            text-white
          "
        >

          <LogIn size={16}/>

          로그인

        </button>


      </div>


    </header>

  );

}
