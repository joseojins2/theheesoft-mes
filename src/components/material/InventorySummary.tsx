"use client";

import {
  Boxes,
  PackageCheck,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const inventory = [
  {
    title: "전체 재고",
    value: "8,420",
    unit: "EA",
    icon: Boxes,
    color: "bg-sky-500",
  },
  {
    title: "정상 재고",
    value: "7,950",
    unit: "EA",
    icon: PackageCheck,
    color: "bg-emerald-500",
  },
  {
    title: "부족 재고",
    value: "320",
    unit: "EA",
    icon: AlertTriangle,
    color: "bg-orange-500",
  },
  {
    title: "재고 증가율",
    value: "+12.5%",
    unit: "",
    icon: TrendingUp,
    color: "bg-violet-500",
  },
];

export default function InventorySummary() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-800">
          재고 현황
        </h2>

        <p className="mt-2 text-slate-500">
          자재 및 제품 재고 상태
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {inventory.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-50 p-6 transition hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

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