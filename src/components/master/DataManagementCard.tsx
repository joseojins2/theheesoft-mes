"use client";


interface DataManagementCardProps {

  title:string;
  items:string[];

}



export default function DataManagementCard({

  title,
  items,

}:DataManagementCardProps){


return (

<div

className="
overflow-hidden
rounded-2xl
border
border-[#B8DED9]
bg-white
shadow-sm
"

>


{/* 제목 */}

<div

className="
bg-[#5FB8B2]
px-5
py-4
"

>

<h2

className="
text-lg
font-black
text-white
"

>

{title}

</h2>


</div>




{/* 메뉴 */}

<div

className="
space-y-2
bg-[#E8F6F4]
p-5
"

>


{

items.map((item,index)=>(


<div

key={index}

className="
flex
items-center
justify-between
rounded-lg
border
border-[#D5EBE8]
bg-white
px-4
py-3
text-sm
font-semibold
text-slate-700
transition
hover:bg-[#F5FCFB]
"

>


<span>

{item}

</span>



<span

className="
text-[#5FB8B2]
"

>

＞

</span>



</div>


))


}



<button

className="
mt-4
w-full
rounded-lg
border
border-[#5FB8B2]
py-2
text-sm
font-bold
text-[#5FB8B2]
transition
hover:bg-[#5FB8B2]
hover:text-white
"

>

바로가기 →

</button>


</div>


</div>


);


}