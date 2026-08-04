"use client";

import { Bell } from "lucide-react";

const notifications = [
  {
    title: "생산 작업 완료",
    desc: "2024-05-20",
    time: "시스템 점검 안내 (5/25 토요일)",
  },
  {
    title: "재고 부족 알림",
    desc: "2024-05-16",
    time: "6월 생산계획 입력 요청",
  },
  {
    title: "시스템 업데이트",
    desc: "2024-05-10",
    time: "자재코드 정합성 점검 안내",
  },
];

export default function NotificationPanel() {
  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="mb-3 flex items-center justify-between">

        <div>
          <h2 className="flex items-center gap-2 text-base font-black text-slate-800">
            <Bell size={17} className="text-blue-600" /> 공지사항
          </h2>

        </div>

        <button className="text-xs text-slate-500">더보기 ＋</button>

      </div>


      <div className="space-y-1">

        {notifications.map((item) => (

          <div
            key={item.title}
            className="flex items-center gap-4 border-b border-slate-100 py-3 text-xs"
          >

            <span className="shrink-0 text-slate-500">{item.desc}</span>
            <span className="truncate font-medium text-slate-700">{item.time}</span>
            <span className="ml-auto rounded bg-blue-600 px-1 text-[9px] text-white">N</span>

          </div>

        ))}

      </div>

    </section>
  );
}
