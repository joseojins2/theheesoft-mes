"use client";

import {
  ShoppingCart,
  Truck,
  PackageCheck,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const orders = [
  {
    title: "발주 요청",
    count: "24",
    unit: "건",
    status: "대기",
    icon: ShoppingCart,
    color: "bg-sky-500",
  },
  {
    title: "입고 예정",
    count: "18",
    unit: "건",
    status: "진행",
    icon: Truck,
    color: "bg-emerald-500",
  },
  {
    title: "출하 완료",
    count: "56",
    unit: "건",
    status: "완료",
    icon: PackageCheck,
    color: "bg-blue-600",
  },
  {
    title: "지연 건",
    count: "3",
    unit: "건",
    status: "확인 필요",
    icon: AlertCircle,
    color: "bg-red-500",
  },
];

export default function OrderStatus() {
  return (
    <section className="mt-10 rounded-[30px] bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-black text-slate-800">
          발주 / 출하 현황
        </h2>

        <p className="mt-2 text-slate-500">
          구매 및 물류 진행 상태
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {orders.map((order) => {
          const Icon = order.icon;

          return (
            <div
              key={order.title}
              className="rounded-3xl bg-slate-50 p-6"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${order.color}`}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

              </div>


              <h3 className="mt-6 text-lg font-bold text-slate-700">
                {order.title}
              </h3>


              <div className="mt-3 flex items-end gap-2">

                <span className="text-4xl font-black text-slate-800">
                  {order.count}
                </span>

                <span className="pb-1 text-slate-400">
                  {order.unit}
                </span>

              </div>


              <div className="mt-5 flex items-center gap-2">

                {order.status === "완료" && (
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />
                )}

                {order.status === "대기" && (
                  <Clock3
                    size={18}
                    className="text-orange-500"
                  />
                )}

                {order.status === "진행" && (
                  <Clock3
                    size={18}
                    className="text-sky-500"
                  />
                )}

                {order.status === "확인 필요" && (
                  <AlertCircle
                    size={18}
                    className="text-red-500"
                  />
                )}

                <span className="text-sm font-bold text-slate-600">
                  {order.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}