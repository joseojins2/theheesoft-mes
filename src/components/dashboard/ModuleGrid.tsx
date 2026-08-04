import ModuleCard from "./ModuleCard";

const modules = [
  {
    title:"기준정보",
    eng:"MASTER DATA",
    value:"1,245건",
    label:"등록된 마스터",
    color:"#2563EB",
    menus:[
      "품번 / 공정 조회",
      "BOM 조회",
      "자재소요 계획",
      "소요량 - Matrix",
      "발주비율/기간 조회"
    ]
  },
  {
    title:"영업/판매",
    eng:"SALES",
    value:"₩1,245,680,000",
    label:"오늘 매출",
    color:"#16A34A",
    menus:[
      "데이터 관리",
      "입고 현황",
      "출고 현황",
      "출고-거래명세표",
      "고객 출고처 조회"
    ]
  },
  {
    title:"생산정보",
    eng:"PRODUCTION",
    value:"25,430 EA",
    label:"오늘 생산량",
    color:"#F97316",
    menus:[
      "생산 계획 및 실적",
      "작업지시서 조회",
      "실적 현황",
      "MPS 조회",
      "불량/폐기 현황"
    ]
  },
  {
    title:"자재정보",
    eng:"MATERIAL",
    value:"₩2,458,700,000",
    label:"현재 재고 금액",
    color:"#7C3AED",
    menus:[
      "재고 현황(운영)",
      "재고 현황(실사)",
      "자재 수불 현황",
      "자재 정보 조회",
      "납품 현황"
    ]
  },
  {
    title:"사급정보",
    eng:"SUPPLIER",
    value:"156건",
    label:"사급 처리 건수",
    color:"#0891B2",
    menus:[
      "부품판매 현황",
      "판매처별 수불부",
      "판매처 재고조회",
      "판매-거래명세표"
    ]
  },
  {
    title:"발주정보",
    eng:"PURCHASE",
    value:"87건",
    label:"발주 진행 건수",
    color:"#2563EB",
    menus:[
      "발주계획/잔량(1)",
      "발주계획/잔량(2)",
      "추가 발주 현황",
      "발주대입고(월)"
    ]
  },
  {
    title:"분석정보",
    eng:"ANALYSIS",
    value:"₩42,580,000",
    label:"총 손실 금액",
    color:"#EF4444",
    menus:[
      "총괄 생산 현황",
      "판가 VS 재료비",
      "재료비 분석",
      "단가 변동 분석",
      "적정 재고 분석"
    ]
  },
  {
    title:"바코드정보",
    eng:"BARCODE",
    value:"8,532건",
    label:"스캔 등록 건수",
    color:"#334155",
    menus:[
      "스캔 정보 조회",
      "자재 라벨 출력",
      "영업 라벨 출력",
      "재고분석-생산월"
    ]
  }
];


export default function ModuleGrid(){

  return(
    <div
      className="
      grid
      grid-cols-8
      gap-2
      w-full
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
  )
}