"use client";

import {
  CheckCircle2,
  Clock3,
  Factory,
  AlertCircle,
} from "lucide-react";

const works = [
  {
    name: "자동차 부품 A-100 생산",
    line: "생산라인 1",
    status: "완료",
    time: "10:30",
  },
  {
    name: "전자부품 B-205 조립",
    line: "생산라인 2",
    status: "진행중",
    time: "11:20",
  },
  {
    name: "품질 검사 C-310",
    line: "검사라인",
    status: "대기",
    time: "13:00",
  },
  {
    name: "자재 입고 확인",
    line: "창고",
    status: "오류",
    time: "14:10",
  },
];

export default function RecentWork() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-black text-slate-800">
            최근 작업 현황
          </h2>

          <p className="mt-2 text-slate-500">
            실시간 작업 진행 상태
          </p>
        </div>

        <Factory
          size={32}
          className="text-sky-500"
        />

      </div>


      <div className="space-y-4">

        {works.map((work) => (

          <div
            key={work.name}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5"
          >

            <div>

              <h3 className="font-bold text-slate-800">
                {work.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {work.line}
              </p>

            </div>


            <div className="flex items-center gap-6">

              <span className="flex items-center gap-2 text-sm text-slate-500">

                <Clock3 size={16} />

                {work.time}

              </span>


              {work.status === "완료" && (
                <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">

                  <CheckCircle2 size={16} />

                  완료

                </span>
              )}


              {work.status === "진행중" && (
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-600">
                  진행중
                </span>
              )}


              {work.status === "대기" && (
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-600">
                  대기
                </span>
              )}


              {work.status === "오류" && (
                <span className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">

                  <AlertCircle size={16} />

                  오류

                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}