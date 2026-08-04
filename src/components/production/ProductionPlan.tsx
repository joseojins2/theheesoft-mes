"use client";

import {
  CalendarDays,
  Factory,
  Clock3,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

const plans = [
  {
    product: "자동차 부품 A-100",
    line: "생산라인 1",
    quantity: "1,200 EA",
    progress: 100,
    status: "완료",
  },
  {
    product: "전자부품 B-205",
    line: "생산라인 2",
    quantity: "850 EA",
    progress: 75,
    status: "진행중",
  },
  {
    product: "모듈 C-310",
    line: "생산라인 3",
    quantity: "600 EA",
    progress: 40,
    status: "진행중",
  },
  {
    product: "제품 D-410",
    line: "생산라인 4",
    quantity: "400 EA",
    progress: 10,
    status: "대기",
  },
];

export default function ProductionPlan() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black text-slate-800">
            생산 계획
          </h2>

          <p className="mt-2 text-slate-500">
            오늘 생산 작업 진행 현황
          </p>

        </div>

        <CalendarDays
          size={32}
          className="text-sky-500"
        />

      </div>


      <div className="space-y-5">

        {plans.map((plan) => (

          <div
            key={plan.product}
            className="rounded-3xl bg-slate-50 p-6"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                  <Factory
                    size={26}
                    className="text-sky-600"
                  />

                </div>


                <div>

                  <h3 className="font-bold text-slate-800">
                    {plan.product}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {plan.line} · {plan.quantity}
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3">

                {plan.status === "완료" && (
                  <CheckCircle2
                    size={22}
                    className="text-emerald-500"
                  />
                )}

                {plan.status === "진행중" && (
                  <PlayCircle
                    size={22}
                    className="text-sky-500"
                  />
                )}

                {plan.status === "대기" && (
                  <Clock3
                    size={22}
                    className="text-orange-500"
                  />
                )}

                <span className="font-bold text-slate-700">
                  {plan.progress}%
                </span>

              </div>

            </div>


            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-sky-500"
                style={{
                  width: `${plan.progress}%`,
                }}
              />

            </div>


          </div>

        ))}

      </div>

    </section>
  );
}