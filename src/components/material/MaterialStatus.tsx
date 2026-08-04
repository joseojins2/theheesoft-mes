"use client";

import {
  Boxes,
  PackageOpen,
  PackageCheck,
  AlertTriangle,
} from "lucide-react";

const material = [
  {
    title: "전체 자재",
    value: "2,840",
    unit: "EA",
    icon: Boxes,
    color: "bg-sky-500",
  },
  {
    title: "입고 완료",
    value: "1,920",
    unit: "EA",
    icon: PackageCheck,
    color: "bg-emerald-500",
  },
  {
    title: "출고 예정",
    value: "680",
    unit: "EA",
    icon: PackageOpen,
    color: "bg-violet-500",
  },
  {
    title: "부족 자재",
    value: "12",
    unit: "종",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
];

export default function MaterialStatus() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-800">
          자재 현황
        </h2>

        <p className="mt-2 text-slate-500">
          자재 입출고 및 재고 상태
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {material.map((item) => {
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