import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  ScanBarcode,
  Printer,
  PackageSearch,
  ClipboardList,
  Boxes,
  QrCode,
  FileText,
  BarChart3,
} from "lucide-react";

const menus = [
  {
    title: "바코드 발행",
    desc: "Barcode Print",
    icon: Printer,
    color: "bg-sky-500",
  },
  {
    title: "바코드 조회",
    desc: "Barcode Search",
    icon: ScanBarcode,
    color: "bg-emerald-500",
  },
  {
    title: "품목 조회",
    desc: "Item Search",
    icon: PackageSearch,
    color: "bg-orange-500",
  },
  {
    title: "LOT 조회",
    desc: "LOT Tracking",
    icon: ClipboardList,
    color: "bg-violet-500",
  },
  {
    title: "재고 확인",
    desc: "Inventory",
    icon: Boxes,
    color: "bg-cyan-500",
  },
  {
    title: "QR 관리",
    desc: "QR Management",
    icon: QrCode,
    color: "bg-blue-600",
  },
  {
    title: "이력 조회",
    desc: "History",
    icon: FileText,
    color: "bg-red-500",
  },
  {
    title: "바코드 분석",
    desc: "Analytics",
    icon: BarChart3,
    color: "bg-indigo-600",
  },
];

export default function BarcodePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#EEF5F7]">

      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto lg:ml-[220px]">

        <div className="mx-auto max-w-[1750px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">

          <Header />

          <section className="mt-10">

            <div className="mb-8">

              <h2 className="text-4xl font-black text-slate-800">
                바코드정보
              </h2>

              <p className="mt-2 text-slate-500">
                바코드 및 LOT 추적 관리
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
