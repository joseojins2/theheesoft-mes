import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

import ModuleGrid from "@/components/dashboard/ModuleGrid";
import KPISection from "@/components/dashboard/KPISection";

import QuickMenu from "@/components/dashboard/QuickMenu";
import SystemStatus from "@/components/dashboard/SystemStatus";


export default function DashboardPage() {

  return (

    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-[#EEF5F7]
      "
    >

      <Sidebar />


      <main
        className="
          flex-1
          overflow-y-auto
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[2200px]
            px-8
            py-6
          "
        >


          <Header />


          {/* 업무 메뉴 */}

          <ModuleGrid />



          {/* 실시간 주요 현황 */}

          <KPISection />



          {/* 최근 사용 메뉴 */}

          <QuickMenu />



          {/* 시스템 현황 */}

          <SystemStatus />


        </div>


      </main>


    </div>

  );
}