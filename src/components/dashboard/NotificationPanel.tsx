"use client";

import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";

const notifications = [
  {
    title: "생산 작업 완료",
    desc: "생산라인 1 작업이 완료되었습니다.",
    type: "success",
    time: "10분 전",
  },
  {
    title: "재고 부족 알림",
    desc: "자재 A-102 재고 확인이 필요합니다.",
    type: "warning",
    time: "30분 전",
  },
  {
    title: "시스템 업데이트",
    desc: "MES 시스템 점검이 완료되었습니다.",
    type: "info",
    time: "1시간 전",
  },
];

export default function NotificationPanel() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-black text-slate-800">
            시스템 알림
          </h2>

          <p className="mt-2 text-slate-500">
            최근 발생한 주요 알림
          </p>
        </div>

        <Bell
          size={32}
          className="text-sky-500"
        />

      </div>


      <div className="space-y-4">

        {notifications.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5"
          >

            <div className="flex items-center gap-4">

              {item.type === "success" && (
                <CheckCircle2
                  size={28}
                  className="text-emerald-500"
                />
              )}

              {item.type === "warning" && (
                <AlertTriangle
                  size={28}
                  className="text-orange-500"
                />
              )}

              {item.type === "info" && (
                <Info
                  size={28}
                  className="text-sky-500"
                />
              )}

              <div>

                <h3 className="font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.desc}
                </p>

              </div>

            </div>


            <span className="text-sm text-slate-400">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}