"use client";

import {
  ShoppingCart,
  TrendingUp,
  Receipt,
  Users,
} from "lucide-react";

const sales = [
  {
    title: "오늘 매출",
    value: "128",
    unit: "백만원",
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
  {
    title: "판매 건수",
    value: "356",
    unit: "건",
    icon: ShoppingCart,
    color: "bg-sky-500",
  },
  {
    title: "거래처",
    value: "84",
    unit: "개",
    icon: Users,
    color: "bg-violet-500",
  },
  {
    title: "미처리 계산서",
    value: "6",
    unit: "건",
    icon: Receipt,
    color: "bg-orange-500",
  },
];

export default function SalesSummary() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-800">
          영업 현황
        </h2>

        <p className="mt-2 text-slate-500">
          판매 및 매출 관리 현황
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {sales.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-50 p-6"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >

                <Icon
                  size={28}
                  className="text-white"
                />

              </div>


              <p className="mt-6 text-sm font-semibold text-slate-400">
                {item.title}
              </p>


              <div className="mt-2 flex items-end gap-2">

                <h3 className="text-4xl font-black text-slate-800">
                  {item.value}
                </h3>

                <span className="pb-1 text-slate-400">
                  {item.unit}
                </span>

              </div>


            </div>
          );
        })}

      </div>

    </section>
  );
}