import DataManagementCard from "@/components/master/DataManagementCard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const dataMenus = [

  {
    title:"기준정보",
    items:[
      "품번 / 공정 관리",
      "신규품번 업로드",
      "BOM 관리",
      "단가관리 업로드",
      "거래처 관리",
      "출고처 관리",
      "발주비율 / 조달기간",
      "동일제품 품번관리",
      "업체별 담당자관리",
      "휴무일 관리",
      "원 / 부자재 관리",
      "검사판정",
    ],
  },


  {
    title:"영업 / 판매",
    items:[
      "입고관리",
      "상품입고 - 거래명세표",
      "출고관리",
      "실사재고관리",
      "판가변동 일괄적용",
      "월 판매계획 Upload",
      "월별 예상계획 Upload",
      "마감확정",
    ],
  },


  {
    title:"생산정보",
    items:[
      "생산계획(MPS) 관리",
      "생산계획 Upload",
      "작업지시서 관리",
      "조립 UPH 관리",
      "조립라인 관리",
      "조립 실적관리",
    ],
  },


  {
    title:"자재정보",
    items:[
      "입고관리",
      "입고처리 - 거래명세표",
      "출고관리",
      "실사재고 관리",
      "불량 / 폐기 관리",
      "소급관리",
      "추가발주등록",
      "부품판매(사급)",
      "이월처리",
      "자재정보관리",
      "협력사 재고관리",
    ],
  },


];



export default async function DataManagementPage(){

const cookieStore = await cookies();
if (cookieStore.get("mes_role")?.value !== "master") {
  redirect("/login");
}


return (

<div

className="
min-h-screen
bg-[#EEF7F5]
p-8
"

>


<div

className="
mx-auto
max-w-[1750px]
rounded-2xl
border
border-[#D6ECE8]
bg-white
p-8
shadow-sm
"

>



{/* 상단 */}

<div

className="
mb-8
flex
items-center
justify-between
"

>


<div>

<h1

className="
text-3xl
font-black
text-slate-800
"

>

DATA 관리

</h1>


<p

className="
mt-2
text-sm
text-slate-400
"

>

MES 기준 데이터 관리 시스템

</p>


</div>




<button

className="
rounded-lg
border
border-[#5FB8B2]
px-6
py-2
text-sm
font-bold
text-[#5FB8B2]
hover:bg-[#5FB8B2]
hover:text-white
"

>

종료

</button>


</div>





{/* 카드 영역 */}

<div

className="
grid
grid-cols-4
gap-6
"

>


{

dataMenus.map((menu)=>(


<DataManagementCard

key={menu.title}

title={menu.title}

items={menu.items}

/>


))


}



</div>



</div>



</div>

);


}
