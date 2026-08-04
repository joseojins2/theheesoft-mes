import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  ShoppingCart,
  Users,
  ClipboardCheck,
  Receipt,
  FileSpreadsheet,
  PackageCheck,
  Wallet,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    title: "견적 관리",
    desc: "Estimate",
    icon: ClipboardCheck,
    color: "bg-sky-500",
  },
  {
    title: "수주 관리",
    desc: "Order",
    icon: ShoppingCart,
    color: "bg-emerald-500",
  },
  {
    title: "거래처 관리",
    desc: "Customer",
    icon: Users,
    color: "bg-orange-500",
  },
  {
    title: "출하 관리",
    desc: "Shipment",
    icon: PackageCheck,
    color: "bg-violet-500",
  },
  {
    title: "매출 관리",
    desc: "Sales",
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
    title: "판매 현황",
    desc: "Report",
    icon: BarChart3,
    color: "bg-red-500",
  },
  {
    title: "거래 내역",
    desc: "History",
    icon: FileSpreadsheet,
    color: "bg-indigo-600",
  },
];

export default function SalesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                영업 / 판매
              </h2>

              <p className="mt-2 text-slate-500">
                영업 및 판매 업무 관리
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