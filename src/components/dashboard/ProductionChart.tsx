"use client";

import {
  TrendingUp,
  Factory,
} from "lucide-react";

const data = [
  { day: "월", value: 65 },
  { day: "화", value: 78 },
  { day: "수", value: 82 },
  { day: "목", value: 91 },
  { day: "금", value: 86 },
  { day: "토", value: 72 },
  { day: "일", value: 95 },
];

export default function ProductionChart() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-black text-slate-800">
            생산 현황
          </h2>

          <p className="mt-2 text-slate-500">
            최근 7일 생산 진행률
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-sky-50 px-5 py-3">

          <Factory
            size={22}
            className="text-sky-600"
          />

          <span className="font-bold text-sky-600">
            정상 운영
          </span>

        </div>

      </div>


      <div className="flex h-72 items-end justify-between gap-5">

        {data.map((item) => (

          <div
            key={item.day}
            className="flex flex-1 flex-col items-center gap-4"
          >

            <div className="flex h-52 w-full items-end rounded-2xl bg-slate-50">

              <div
                className="w-full rounded-2xl bg-sky-500 transition-all"
                style={{
                  height: `${item.value}%`,
                }}
              />

            </div>


            <span className="text-sm font-semibold text-slate-500">
              {item.day}
            </span>

          </div>

        ))}

      </div>


      <div className="mt-8 flex items-center gap-3 rounded-2xl bg-emerald-50 p-5">

        <TrendingUp
          size={24}
          className="text-emerald-600"
        />

        <p className="font-semibold text-emerald-700">
          금주 생산량이 전주 대비 12.4% 증가했습니다.
        </p>

      </div>


    </section>
  );
}