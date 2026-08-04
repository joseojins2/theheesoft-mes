import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Workflow,
  Settings,
  Factory,
  GitBranch,
  ClipboardList,
  Layers,
  Timer,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    title: "공정 관리",
    desc: "Process",
    icon: Workflow,
    color: "bg-sky-500",
  },
  {
    title: "공정 설정",
    desc: "Setup",
    icon: Settings,
    color: "bg-emerald-500",
  },
  {
    title: "작업 흐름",
    desc: "Workflow",
    icon: GitBranch,
    color: "bg-orange-500",
  },
  {
    title: "생산 라인",
    desc: "Line",
    icon: Factory,
    color: "bg-violet-500",
  },
  {
    title: "작업 이력",
    desc: "History",
    icon: ClipboardList,
    color: "bg-cyan-500",
  },
  {
    title: "공정 단계",
    desc: "Step",
    icon: Layers,
    color: "bg-blue-600",
  },
  {
    title: "공정 시간",
    desc: "Cycle Time",
    icon: Timer,
    color: "bg-red-500",
  },
  {
    title: "공정 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-indigo-600",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                생산공정
              </h2>

              <p className="mt-2 text-slate-500">
                생산 공정 및 작업 흐름 관리
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