"use client";

import {
  Bell,
  LockKeyhole,
  LogOut,
} from "lucide-react";

import { useRouter } from "next/navigation";


export default function Header() {

  const router = useRouter();


  const handleLogout = () => {

    // 추후 토큰 삭제 / DB 세션 종료 연결

    router.push("/login");

  };


  return (

    <header
      className="
        relative
        flex
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
            text-[32px]
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
          absolute right-0 top-3 flex
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
            px-4
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
            px-4
            text-sm
            font-bold
            text-slate-600
          "
        >

          <LockKeyhole size={16}/>

          암호 변경

        </button>



        <button
          onClick={handleLogout}
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-xl
            bg-slate-800
            px-4
            text-sm
            font-bold
            text-white
          "
        >

          <LogOut size={16}/>

          로그아웃

        </button>


      </div>


    </header>

  );

}
