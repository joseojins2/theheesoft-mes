import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import KPISection from "@/components/dashboard/KPISection";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import RecentWork from "@/components/dashboard/RecentWork";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fb]">

      {/* 사이드바 */}
      <Sidebar />


      {/* 메인 영역 */}
      <main
        className="
        ml-[220px]
        min-h-screen
        w-[calc(100%-220px)]
        p-6
        "
      >

        {/* 상단 헤더 */}
        <Header />


        {/* 카드 8개 영역 */}
        <section
          className="
          mt-6
          w-full
          "
        >
          <ModuleGrid />
        </section>



        {/* 하단 영역 */}
        <section
          className="
          mt-8
          grid
          grid-cols-12
          gap-5
          "
        >

          <div
            className="
            col-span-7
            "
          >
            <KPISection />
          </div>


          <div
            className="
            col-span-5
            "
          >
            <NotificationPanel />
          </div>


        </section>



        <section
          className="
          mt-5
          "
        >
          <RecentWork />
        </section>


      </main>

    </div>
  );
}