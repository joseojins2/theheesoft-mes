"use client";

import ModuleCard from "./ModuleCard";

import {
  Database,
  ShoppingCart,
  Factory,
  Package,
  Users,
  ClipboardList,
  BarChart3,
  QrCode,
} from "lucide-react";


const modules = [

  {
    title:"기준정보",
    subtitle:"MASTER DATA",
    value:"1,245건",
    summary:"등록된 마스터",
    path:"/master",
    menus:[
      "품번 / 공정 조회",
      "BOM 조회",
      "자재소요 계획",
      "소요량 Matrix",
      "발주비율 / 기간 조회",
    ],
    icon:Database,
    color:"#2563EB",
  },


  {
    title:"영업/판매",
    subtitle:"SALES",
    value:"₩1,245,680,000",
    summary:"오늘 매출",
    path:"/sales",
    menus:[
      "데이터 관리",
      "입고 현황",
      "출고 현황",
      "출고-거래명세표",
      "고객 출고처 조회",
    ],
    icon:ShoppingCart,
    color:"#16A34A",
  },


  {
    title:"생산정보",
    subtitle:"PRODUCTION",
    value:"25,430 EA",
    summary:"오늘 생산량",
    path:"/production",
    menus:[
      "생산 계획 및 실적",
      "작업지시서 조회",
      "실적 현황",
      "MPS 조회",
      "불량/폐기 현황",
    ],
    icon:Factory,
    color:"#F97316",
  },


  {
    title:"자재정보",
    subtitle:"MATERIAL",
    value:"₩2,458,700,000",
    summary:"현재 재고 금액",
    path:"/material",
    menus:[
      "재고 현황(운영)",
      "재고 현황(실사)",
      "자재 수불 현황",
      "자재 정보 조회",
      "납품 현황",
    ],
    icon:Package,
    color:"#7C3AED",
  },


  {
    title:"사급정보",
    subtitle:"SUPPLIER",
    value:"156건",
    summary:"사급 처리 건수",
    path:"/supplier",
    menus:[
      "부품판매 현황",
      "판매처별 수불부",
      "판매처 재고조회",
      "판매 거래명세표",
    ],
    icon:Users,
    color:"#0891B2",
  },


  {
    title:"발주정보",
    subtitle:"PURCHASE",
    value:"87건",
    summary:"발주 진행 건수",
    path:"/purchase",
    menus:[
      "발주계획/잔량(1)",
      "발주계획/잔량(2)",
      "추가 발주 현황",
      "발주대입고",
    ],
    icon:ClipboardList,
    color:"#2563EB",
  },


  {
    title:"분석정보",
    subtitle:"ANALYSIS",
    value:"₩42,580,000",
    summary:"총 손실 금액",
    path:"/analysis",
    menus:[
      "총괄 생산 현황",
      "판매 VS 재료비",
      "재료비 분석",
      "단가 변동 분석",
    ],
    icon:BarChart3,
    color:"#DC2626",
  },


  {
    title:"바코드정보",
    subtitle:"BARCODE",
    value:"8,532건",
    summary:"스캔 등록 건수",
    path:"/barcode",
    menus:[
      "스캔 정보 조회",
      "자재 라벨 출력",
      "영업 라벨 출력",
      "재고 분석",
    ],
    icon:QrCode,
    color:"#334155",
  },


];


export default function ModuleGrid(){

  return(

    <section className="mt-6">

      <div
        className="
          grid
          grid-cols-8
          gap-3
        "
      >

        {
          modules.map((module)=>(

            <ModuleCard
              key={module.title}
              {...module}
            />

          ))
        }

      </div>

    </section>

  );

}