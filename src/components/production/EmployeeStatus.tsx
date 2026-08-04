"use client";

import {
  Users,
  UserCheck,
  UserMinus,
  Clock3,
  Activity,
} from "lucide-react";

const employees = [
  {
    title: "전체 작업자",
    value: "128",
    unit: "명",
    icon: Users,
    color: "bg-sky-500",
  },
  {
    title: "작업중",
    value: "96",
    unit: "명",
    icon: UserCheck,
    color: "bg-emerald-500",
  },
  {
    title: "휴식 / 대기",
    value: "24",
    unit: "명",
    icon: Clock3,
    color: "bg-orange-500",
  },
  {
    title: "이탈 인원",
    value: "8",
    unit: "명",
    icon: UserMinus,
    color: "bg-red-500",
  },
];

export default function EmployeeStatus() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-black text-slate-800">
            작업자 현황
          </h2>

          <p className="mt-2 text-slate-500">
            생산 인력 운영 상태
          </p>
        </div>

        <Activity
          size={32}
          className="text-sky-500"
        />

      </div>


      <div className="grid grid-cols-4 gap-6">

        {employees.map((employee) => {
          const Icon = employee.icon;

          return (
            <div
              key={employee.title}
              className="rounded-3xl bg-slate-50 p-6"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${employee.color}`}
              >

                <Icon
                  size={28}
                  className="text-white"
                />

              </div>


              <p className="mt-6 text-sm font-semibold text-slate-400">
                {employee.title}
              </p>


              <div className="mt-2 flex items-end gap-2">

                <h3 className="text-4xl font-black text-slate-800">
                  {employee.value}
                </h3>

                <span className="pb-1 text-slate-400">
                  {employee.unit}
                </span>

              </div>


            </div>
          );
        })}

      </div>

    </section>
  );
}