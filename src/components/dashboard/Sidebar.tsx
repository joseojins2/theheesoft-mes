"use client";

import {
  LayoutDashboard,
  Database,
  ShoppingCart,
  Factory,
  Package,
  Users,
  ClipboardList,
  BarChart3,
  QrCode,
  Settings,
} from "lucide-react";


const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "기준정보",
    icon: Database,
  },
  {
    title: "영업/판매",
    icon: ShoppingCart,
  },
  {
    title: "생산정보",
    icon: Factory,
  },
  {
    title: "자재정보",
    icon: Package,
  },
  {
    title: "사급정보",
    icon: Users,
  },
  {
    title: "발주정보",
    icon: ClipboardList,
  },
  {
    title: "분석정보",
    icon: BarChart3,
  },
  {
    title: "바코드정보",
    icon: QrCode,
  },
];


export default function Sidebar() {

  return (

    <aside
      className="
        flex
        h-screen
        w-[190px]
        shrink-0
        flex-col
        bg-[#1769FF]
        px-3
        py-5
        text-white
      "
    >


      {/* 로고 */}

      <div className="mb-6 px-2">

        <h1
          className="
            text-xl
            font-black
            tracking-tight
          "
        >
          THEHEESOFT
        </h1>


        <p
          className="
            mt-1
            text-[11px]
            text-blue-100
          "
        >
          Smart MES System
        </p>

      </div>



      {/* 메뉴 */}

      <nav
        className="
          flex-1
          space-y-1
        "
      >

        {menus.map((menu,index)=>{

          const Icon = menu.icon;


          return (

            <button
              key={menu.title}
              className={`
                flex
                h-10
                w-full
                items-center
                gap-3
                rounded-lg
                px-3
                text-sm
                font-bold
                transition

                ${
                  index === 0
                  ? "bg-white text-blue-600"
                  : "hover:bg-white/10"
                }
              `}
            >

              <Icon size={18}/>


              <span>
                {menu.title}
              </span>


            </button>

          );

        })}


      </nav>



      {/* 설정 */}

      <button
        className="
          flex
          h-10
          items-center
          gap-3
          rounded-lg
          px-3
          text-sm
          font-bold
          hover:bg-white/10
        "
      >

        <Settings size={18}/>

        환경설정

      </button>


    </aside>

  );

}