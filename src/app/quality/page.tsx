import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  ShieldCheck,
  SearchCheck,
  AlertTriangle,
  ClipboardCheck,
  BarChart3,
  FileCheck,
  Microscope,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "품질 검사",
    desc: "Inspection",
    icon: SearchCheck,
    color: "bg-sky-500",
  },
  {
    title: "검사 기준",
    desc: "Standard",
    icon: ClipboardCheck,
    color: "bg-emerald-500",
  },
  {
    title: "불량 관리",
    desc: "Defect",
    icon: AlertTriangle,
    color: "bg-orange-500",
  },
  {
    title: "품질 인증",
    desc: "Certification",
    icon: FileCheck,
    color: "bg-violet-500",
  },
  {
    title: "품질 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-cyan-500",
  },
  {
    title: "검사 장비",
    desc: "Equipment",
    icon: Microscope,
    color: "bg-blue-600",
  },
  {
    title: "품질 설정",
    desc: "Setting",
    icon: Settings,
    color: "bg-red-500",
  },
  {
    title: "통합 품질",
    desc: "Quality",
    icon: ShieldCheck,
    color: "bg-indigo-600",
  },
];

export default function QualityPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                품질관리
              </h2>

              <p className="mt-2 text-slate-500">
                품질 검사 및 불량 관리
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