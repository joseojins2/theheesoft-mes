import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Boxes,
  Package,
  Warehouse,
  ArrowDownToLine,
  ArrowUpFromLine,
  ClipboardList,
  BarChart3,
  ScanBarcode,
} from "lucide-react";

const menus = [
  {
    title: "품목 관리",
    desc: "Item",
    icon: Package,
    color: "bg-sky-500",
  },
  {
    title: "입고 관리",
    desc: "Inbound",
    icon: ArrowDownToLine,
    color: "bg-emerald-500",
  },
  {
    title: "출고 관리",
    desc: "Outbound",
    icon: ArrowUpFromLine,
    color: "bg-orange-500",
  },
  {
    title: "재고 관리",
    desc: "Inventory",
    icon: Warehouse,
    color: "bg-violet-500",
  },
  {
    title: "자재 현황",
    desc: "Material",
    icon: Boxes,
    color: "bg-cyan-500",
  },
  {
    title: "LOT 관리",
    desc: "LOT",
    icon: ScanBarcode,
    color: "bg-blue-600",
  },
  {
    title: "자재 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-red-500",
  },
  {
    title: "입출고 이력",
    desc: "History",
    icon: ClipboardList,
    color: "bg-indigo-600",
  },
];

export default function MaterialPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto lg:ml-[220px]">

        <div className="mx-auto max-w-[1750px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                자재정보
              </h2>

              <p className="mt-2 text-slate-500">
                자재 및 재고 운영 관리
              </p>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">

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
