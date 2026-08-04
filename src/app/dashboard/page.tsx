import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import KPISection from "@/components/dashboard/KPISection";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import QuickMenu from "@/components/dashboard/QuickMenu";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f3f8fb]">

      <Sidebar />

      <main className="ml-[220px] min-w-0 flex-1 overflow-hidden p-6">

        <Header />

        <section className="mt-5 w-full overflow-x-hidden">
          <ModuleGrid />
        </section>

        <section className="mt-5 grid grid-cols-12 items-stretch gap-5">
          <div className="col-span-6">
            <KPISection />
          </div>
          <div className="col-span-4">
            <NotificationPanel />
          </div>
          <div className="col-span-2">
            <QuickMenu />
          </div>
        </section>

      </main>

    </div>
  );
}
