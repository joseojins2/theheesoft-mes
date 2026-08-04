"use client";

import {
  Bell,
  LockKeyhole,
  LogOut,
  User,
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
        mb-6
        flex
        items-center
        justify-between
        rounded-2xl
        bg-white
        px-6
        py-4
        shadow-sm
      "
    >


      <div>

        <h1
          className="
            text-2xl
            font-black
            text-slate-800
          "
        >
          생산 정보 시스템 (E_MES)
        </h1>


        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          한눈에 보는 통합 생산 관리 플랫폼
        </p>

      </div>




      <div
        className="
          flex
          items-center
          gap-3
        "
      >


        {/* 사용자 */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-slate-50
            px-4
            py-2
          "
        >

          <User
            size={18}
            className="text-blue-500"
          />


          <span
            className="
              text-sm
              font-bold
              text-slate-700
            "
          >
            관리자
          </span>


        </div>



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

          알림

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