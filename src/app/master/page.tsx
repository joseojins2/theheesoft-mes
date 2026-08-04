import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Database,
  Building2,
  Users,
  Package,
  MapPinned,
  ClipboardList,
  FolderTree,
  Boxes,
} from "lucide-react";

const menus = [
  {
    title: "회사 정보",
    desc: "Company",
    icon: Building2,
    color: "bg-sky-500",
  },
  {
    title: "거래처 관리",
    desc: "Customer",
    icon: Users,
    color: "bg-emerald-500",
  },
  {
    title: "품목 관리",
    desc: "Item",
    icon: Package,
    color: "bg-orange-500",
  },
  {
    title: "창고 관리",
    desc: "Warehouse",
    icon: MapPinned,
    color: "bg-violet-500",
  },
  {
    title: "공정 관리",
    desc: "Process",
    icon: FolderTree,
    color: "bg-cyan-500",
  },
  {
    title: "BOM 관리",
    desc: "BOM",
    icon: ClipboardList,
    color: "bg-blue-600",
  },
  {
    title: "설비 관리",
    desc: "Equipment",
    icon: Database,
    color: "bg-red-500",
  },
  {
    title: "기초 데이터",
    desc: "Master",
    icon: Boxes,
    color: "bg-indigo-600",
  },
];

export default function MasterPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-[1750px] px-10 py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                기준정보
              </h2>

              <p className="mt-2 text-slate-500">
                기준 데이터 및 환경 설정
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