"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function StatisticCard({
  title,
  value,
  change,
  positive = true,
}: StatisticCardProps) {
  return (
    <div className="rounded-[30px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-800">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-3xl ${
            positive
              ? "bg-emerald-100"
              : "bg-red-100"
          }`}
        >
          {positive ? (
            <TrendingUp
              size={30}
              className="text-emerald-600"
            />
          ) : (
            <TrendingDown
              size={30}
              className="text-red-500"
            />
          )}
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <span
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            positive
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {change}
        </span>

        <span className="text-sm text-slate-400">
          전일 대비
        </span>

      </div>

    </div>
  );
}