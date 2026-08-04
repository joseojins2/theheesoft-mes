import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import KPISection from "@/components/dashboard/KPISection";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import RecentWork from "@/components/dashboard/RecentWork";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f3f8fb]">

      <Sidebar />

      <main className="flex-1 p-6 overflow-hidden">

        <Header />

        <section className="mt-6 w-full overflow-x-hidden">
          <ModuleGrid />
        </section>


        <section className="mt-8 grid grid-cols-12 gap-5">

          <div className="col-span-7">
            <KPISection />
          </div>

          <div className="col-span-5">
            <NotificationPanel />
          </div>

        </section>


        <section className="mt-5">
          <RecentWork />
        </section>

      </main>

    </div>
  );
}