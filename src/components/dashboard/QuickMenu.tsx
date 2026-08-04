"use client";

import {
  Factory,
  Package,
  ClipboardList,
  BarChart3,
  ScanLine,
} from "lucide-react";


const menus = [
  {
    title: "입고 현황",
    icon: Package,
  },
  {
    title: "생산 계획 및 실적",
    icon: Factory,
  },
  {
    title: "재고 현황(실사)",
    icon: Package,
  },
  {
    title: "발주계획/잔량",
    icon: ClipboardList,
  },
  {
    title: "총괄 생산 현황",
    icon: BarChart3,
  },
  {
    title: "스캔 등록 현황",
    icon: ScanLine,
  },
];


export default function QuickMenu() {

  return (

    <section
      className="
        h-full
        rounded-xl border border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >


      <div className="mb-4">

        <h2
          className="
            text-base
            font-black
            text-slate-800
          "
        >
          최근 사용 메뉴
        </h2>


      </div>




      <div
        className="
          space-y-1
        "
      >


        {menus.map((menu)=>{

          const Icon = menu.icon;


          return (

            <button
              key={menu.title}
              className="
                flex
                items-center
                gap-3
                w-full border-b border-slate-100
                px-1 py-1.5
                text-left
                transition
                hover:bg-slate-100
              "
            >

              <div
                className="
                  flex
                  h-6 w-6
                  items-center
                  justify-center
                  rounded
                  bg-white
                "
              >

                <Icon
                  size={18}
                  className="text-sky-500"
                />

              </div>


              <span
                className="
                  text-xs
                  font-bold
                  text-slate-700
                "
              >
                {menu.title}
              </span>


            </button>

          );

        })}


      </div>


    </section>

  );

}
