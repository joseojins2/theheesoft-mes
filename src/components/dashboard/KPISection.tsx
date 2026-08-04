"use client";

const kpis = [
  {
    title: "생산 가동률",
    value: "89.2%",
    change: "▲ 5.1%",
  },
  {
    title: "불량률",
    value: "2.45%",
    change: "▲ 0.35%",
  },
  {
    title: "납기 준수율",
    value: "96.8%",
    change: "▲ 2.3%",
  },
  {
    title: "재고 회전율",
    value: "5.2회",
    change: "▲ 0.7회",
  },
];


export default function KPISection() {

  return (
    <section
      className="
        h-full
        rounded-xl border border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >

      <div className="
        mb-3
        flex
        items-center
        justify-between
      ">

        <div>

          <h2 className="
            text-base
            font-black
            text-slate-800
          ">
            실시간 주요 현황
          </h2>

        </div>
        <span className="text-[10px] text-slate-400">실시간 업데이트</span>
      </div>



      <div className="
        grid
        grid-cols-4
        gap-3
      ">


        {kpis.map((item)=>(

          <div
            key={item.title}
            className="
              rounded-xl
              border
              border-slate-100
              bg-white
              p-3
            "
          >


            <p className="
              text-sm
              font-bold
              text-slate-500
            ">
              {item.title}
            </p>



            <div className="
              mt-3 flex flex-col items-center gap-2
            ">


              {/* 원형 표시 */}

              <div
                className="
                  flex
                  h-20 w-20
                  items-center
                  justify-center
                  rounded-full
                  border-[8px]
                  border-blue-500 border-r-slate-100
                "
              >

                <span className="
                  text-sm
                  font-black
                  text-slate-800
                ">
                  {item.value}
                </span>

              </div>



              <span className="
                text-xs
                font-bold
                text-emerald-500
              ">
                {item.change}
              </span>


            </div>


          </div>


        ))}


      </div>


    </section>
  );
}
