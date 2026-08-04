"use client";

import {
  Server,
  Database,
  Cpu,
  Wifi,
  CheckCircle2,
} from "lucide-react";


const status = [
  {
    title: "MES Server",
    value: "정상 운영",
    icon: Server,
  },
  {
    title: "Database",
    value: "정상 운영",
    icon: Database,
  },
  {
    title: "CPU",
    value: "42%",
    icon: Cpu,
  },
  {
    title: "Network",
    value: "안정",
    icon: Wifi,
  },
];


export default function SystemStatus() {

  return (

    <section
      className="
        mt-6
        rounded-2xl
        bg-white
        p-5
        shadow-sm
      "
    >

      <div
        className="
          mb-4
          flex
          items-center
          justify-between
        "
      >

        <h2
          className="
            text-xl
            font-black
            text-slate-800
          "
        >
          시스템 현황
        </h2>


        <span
          className="
            text-xs
            text-emerald-500
          "
        >
          정상 운영
        </span>

      </div>



      <div
        className="
          grid
          grid-cols-4
          gap-4
        "
      >

        {status.map((item)=>{

          const Icon = item.icon;


          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-slate-50
                px-4
                py-3
              "
            >


              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                  "
                >

                  <Icon
                    size={20}
                    className="text-sky-500"
                  />

                </div>


                <div>

                  <p
                    className="
                      text-xs
                      text-slate-400
                    "
                  >
                    {item.title}
                  </p>


                  <p
                    className="
                      text-sm
                      font-black
                      text-slate-700
                    "
                  >
                    {item.value}
                  </p>


                </div>


              </div>


              <CheckCircle2
                size={18}
                className="text-emerald-500"
              />


            </div>

          );

        })}


      </div>


    </section>

  );
}