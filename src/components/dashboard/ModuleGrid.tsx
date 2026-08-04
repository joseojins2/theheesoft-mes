import ModuleCard from "./ModuleCard";

const modules = [
  {
    type: "MASTER DATA",
    title: "기준정보",
    valueTitle: "등록된 마스터",
    value: "1,245건",
    color: "blue",
    items: [
      "품번 / 공정 조회",
      "BOM 조회",
      "자재소요 계획",
      "소요량 Matrix",
      "발주비율/기간 조회",
    ],
  },
  {
    type: "SALES",
    title: "영업/판매",
    valueTitle: "오늘 매출",
    value: "₩1,245,680,000",
    color: "green",
    items: [
      "데이터 관리",
      "입고 현황",
      "출고 현황",
      "출고-거래명세표",
      "고객 출고처 조회",
    ],
  },
  {
    type: "PRODUCTION",
    title: "생산정보",
    valueTitle: "오늘 생산량",
    value: "25,430 EA",
    color: "orange",
    items: [
      "생산 계획 및 실적",
      "작업지시서 조회",
      "실적 현황",
      "MPS 조회",
      "불량/폐기 현황",
    ],
  },
  {
    type: "MATERIAL",
    title: "자재정보",
    valueTitle: "현재 재고 금액",
    value: "₩2,458,700,000",
    color: "purple",
    items: [
      "재고 현황(운영)",
      "재고 현황(실사)",
      "자재 수불 현황",
      "자재 정보 조회",
      "납품 현황",
    ],
  },
  {
    type: "SUPPLIER",
    title: "사급정보",
    valueTitle: "사급 처리 건수",
    value: "156건",
    color: "cyan",
    items: [
      "부품판매 현황",
      "판매처별 수불부",
      "판매처 재고조회",
      "판매-거래명세표",
    ],
  },
  {
    type: "PURCHASE",
    title: "발주정보",
    valueTitle: "발주 진행 건수",
    value: "87건",
    color: "blue",
    items: [
      "발주계획/잔량(1)",
      "발주계획/잔량(2)",
      "추가 발주 현황",
      "발주대입고(월)",
    ],
  },
  {
    type: "ANALYSIS",
    title: "분석정보",
    valueTitle: "총 손실 금액",
    value: "₩42,580,000",
    color: "red",
    items: [
      "총괄 생산 현황",
      "판가 VS 재료비",
      "재료비 분석",
      "단가 변동 분석",
      "적정 재고 분석",
    ],
  },
  {
    type: "BARCODE",
    title: "바코드정보",
    valueTitle: "스캔 등록 건수",
    value: "8,532건",
    color: "dark",
    items: [
      "스캔 정보 조회",
      "자재 라벨 출력",
      "영업 라벨 출력",
      "재고분석-생산월",
    ],
  },
];

export default function ModuleGrid() {
  return (
    <div
      className="
      grid
      grid-cols-4
      gap-5
      w-full
      "
    >
      {modules.map((module) => (
        <ModuleCard
          key={module.title}
          {...module}
        />
      ))}
    </div>
  );
}