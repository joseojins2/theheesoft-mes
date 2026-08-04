import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  ClipboardList,
  ShoppingBag,
  FileCheck,
  Truck,
  Receipt,
  Wallet,
  BarChart3,
  Clock3,
} from "lucide-react";

const menus = [
  {
    title: "발주 등록",
    desc: "Purchase",
    icon: ShoppingBag,
    color: "bg-sky-500",
  },
  {
    title: "발주 현황",
    desc: "Status",
    icon: ClipboardList,
    color: "bg-emerald-500",
  },
  {
    title: "입고 확인",
    desc: "Inbound",
    icon: Truck,
    color: "bg-orange-500",
  },
  {
    title: "검수 관리",
    desc: "Inspection",
    icon: FileCheck,
    color: "bg-violet-500",
  },
  {
    title: "매입 관리",
    desc: "Purchase Cost",
    icon: Wallet,
    color: "bg-cyan-500",
  },
  {
    title: "세금계산서",
    desc: "Invoice",
    icon: Receipt,
    color: "bg-blue-600",
  },
  {
    title: "발주 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-red-500",
  },
  {
    title: "납기 관리",
    desc: "Schedule",
    icon: Clock3,
    color: "bg-indigo-600",
  },
];

export default function PurchasePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                발주정보
              </h2>

              <p className="mt-2 text-slate-500">
                발주 및 구매 업무 관리
              </p>

            </div>

            <div className="grid grid-cols-4 gap-7">

              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <button
                    key={menu.title}
                    className="rounded-[30px] bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="flex items-start justify-between">

                      <div>

                        <p className="text-sm font-semibold uppercase text-slate-400">
                          {menu.desc}
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-slate-800">
                          {menu.title}
                        </h3>

                      </div>

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-3xl ${menu.color}`}
                      >
                        <Icon
                          size={30}
                          className="text-white"
                        />
                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

          </section>

        </div>
      </main>
    </div>
  );
}
