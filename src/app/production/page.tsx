import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Factory,
  CalendarDays,
  ClipboardList,
  Workflow,
  Wrench,
  Gauge,
  PackageCheck,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    title: "생산 계획",
    desc: "Planning",
    icon: CalendarDays,
    color: "bg-sky-500",
  },
  {
    title: "작업 지시",
    desc: "Work Order",
    icon: ClipboardList,
    color: "bg-emerald-500",
  },
  {
    title: "공정 관리",
    desc: "Process",
    icon: Workflow,
    color: "bg-orange-500",
  },
  {
    title: "설비 관리",
    desc: "Equipment",
    icon: Wrench,
    color: "bg-violet-500",
  },
  {
    title: "생산 실적",
    desc: "Production",
    icon: Factory,
    color: "bg-cyan-500",
  },
  {
    title: "LOT 추적",
    desc: "LOT",
    icon: PackageCheck,
    color: "bg-blue-600",
  },
  {
    title: "설비 모니터링",
    desc: "Monitoring",
    icon: Gauge,
    color: "bg-red-500",
  },
  {
    title: "생산 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-indigo-600",
  },
];

export default function ProductionPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto lg:ml-[220px]">

        <div className="mx-auto max-w-[1750px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                생산정보
              </h2>

              <p className="mt-2 text-slate-500">
                생산 및 공정 운영 관리
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
