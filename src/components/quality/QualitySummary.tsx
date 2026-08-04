"use client";

import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BarChart3,
} from "lucide-react";

const quality = [
  {
    title: "검사 완료",
    value: "1,245",
    unit: "건",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
  {
    title: "양품",
    value: "1,220",
    unit: "건",
    icon: ShieldCheck,
    color: "bg-sky-500",
  },
  {
    title: "불량",
    value: "25",
    unit: "건",
    icon: XCircle,
    color: "bg-red-500",
  },
  {
    title: "불량률",
    value: "2.1",
    unit: "%",
    icon: AlertTriangle,
    color: "bg-orange-500",
  },
];

export default function QualitySummary() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black text-slate-800">
            품질 현황
          </h2>

          <p className="mt-2 text-slate-500">
            검사 및 불량 관리 현황
          </p>

        </div>

        <BarChart3
          size={32}
          className="text-sky-500"
        />

      </div>


      <div className="grid grid-cols-4 gap-6">

        {quality.map((item) => {
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