"use client";

import {
  Factory,
  CheckCircle2,
  AlertTriangle,
  Settings,
  Activity,
} from "lucide-react";

const equipment = [
  {
    title: "전체 설비",
    value: "48",
    unit: "대",
    icon: Factory,
    color: "bg-sky-500",
  },
  {
    title: "가동 설비",
    value: "42",
    unit: "대",
    icon: Activity,
    color: "bg-emerald-500",
  },
  {
    title: "점검 설비",
    value: "4",
    unit: "대",
    icon: Settings,
    color: "bg-orange-500",
  },
  {
    title: "이상 설비",
    value: "2",
    unit: "대",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
];

export default function EquipmentStatus() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-800">
          설비 현황
        </h2>

        <p className="mt-2 text-slate-500">
          생산 설비 운영 상태
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {equipment.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-50 p-6"
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


                <CheckCircle2
                  size={22}
                  className="text-emerald-500"
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