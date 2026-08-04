import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  BarChart3,
  ChartColumn,
  TrendingUp,
  PieChart,
  Database,
  Activity,
  FileSpreadsheet,
  FileSearch,
} from "lucide-react";

const menus = [
  {
    title: "생산 분석",
    desc: "Production",
    icon: ChartColumn,
    color: "bg-sky-500",
  },
  {
    title: "판매 분석",
    desc: "Sales",
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
  {
    title: "재고 분석",
    desc: "Inventory",
    icon: Database,
    color: "bg-orange-500",
  },
  {
    title: "품질 분석",
    desc: "Quality",
    icon: PieChart,
    color: "bg-violet-500",
  },
  {
    title: "실시간 모니터링",
    desc: "Monitoring",
    icon: Activity,
    color: "bg-cyan-500",
  },
  {
    title: "통계 리포트",
    desc: "Report",
    icon: FileSpreadsheet,
    color: "bg-blue-600",
  },
  {
    title: "데이터 조회",
    desc: "Search",
    icon: FileSearch,
    color: "bg-red-500",
  },
  {
    title: "통합 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-indigo-600",
  },
];

export default function AnalysisPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto lg:ml-[220px]">

        <div className="mx-auto max-w-[1750px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                분석정보
              </h2>

              <p className="mt-2 text-slate-500">
                생산 및 경영 데이터 분석
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
