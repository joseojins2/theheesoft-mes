import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Settings,
  FileText,
  Bell,
  Users,
  Shield,
  Database,
  HelpCircle,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    title: "환경 설정",
    desc: "Setting",
    icon: Settings,
    color: "bg-sky-500",
  },
  {
    title: "문서 관리",
    desc: "Document",
    icon: FileText,
    color: "bg-emerald-500",
  },
  {
    title: "공지 관리",
    desc: "Notice",
    icon: Bell,
    color: "bg-orange-500",
  },
  {
    title: "사용자 관리",
    desc: "User",
    icon: Users,
    color: "bg-violet-500",
  },
  {
    title: "권한 관리",
    desc: "Permission",
    icon: Shield,
    color: "bg-cyan-500",
  },
  {
    title: "데이터 관리",
    desc: "Database",
    icon: Database,
    color: "bg-blue-600",
  },
  {
    title: "도움말",
    desc: "Help",
    icon: HelpCircle,
    color: "bg-red-500",
  },
  {
    title: "시스템 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-indigo-600",
  },
];

export default function EtcPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                기타정보
              </h2>

              <p className="mt-2 text-slate-500">
                시스템 환경 및 운영 관리
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