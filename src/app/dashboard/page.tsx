import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import KPISection from "@/components/dashboard/KPISection";
import QuickMenu from "@/components/dashboard/QuickMenu";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f3f8fb]">

      <Sidebar />

      <main className="min-w-0 flex-1 overflow-hidden p-3 sm:p-4 lg:ml-[220px] lg:p-6">

        <Header />

        <section className="mt-5 w-full overflow-x-hidden">
          <ModuleGrid />
        </section>

        <section className="mt-5 grid grid-cols-1 items-stretch gap-5 xl:grid-cols-4">
          <div className="xl:col-span-3">
            <KPISection />
          </div>
          <div>
            <QuickMenu />
          </div>
        </section>

      </main>

    </div>
  );
}
