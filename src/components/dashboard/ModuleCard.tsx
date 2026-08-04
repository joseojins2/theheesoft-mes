// src/components/dashboard/ModuleCard.tsx

"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";


interface ModuleCardProps {
  title:string;
  subtitle:string;
  value:string;
  summary:string;
  path:string;
  menus:string[];
  icon:LucideIcon;
  color:string;
  accent:string;
}


export default function ModuleCard({
  title,
  subtitle,
  value,
  summary,
  path,
  menus,
  icon:Icon,
  color,
  accent,

}:ModuleCardProps){


return (

<Link
href={path}
className="
relative
flex
h-[520px]
flex-col
overflow-hidden
rounded-xl
border
border-slate-200
bg-white
shadow-sm
transition
hover:shadow-md
"
>


{/* 상단 컬러 영역 */}

<div
className="
h-[125px]
flex
items-center
justify-center
"
style={{
backgroundColor:color
}}
>

<div
className="
flex
h-[90px]
w-[90px]
items-center
justify-center
rounded-full
bg-white
shadow
"
>

<Icon
size={42}
style={{
color:accent
}}
/>

</div>

</div>



<div
className="
flex
flex-1
flex-col
px-4
py-5
"
>


<p
className="
text-[11px]
font-bold
text-slate-400
"
>
{subtitle}
</p>


<h2
className="
mt-2
text-[18px]
font-black
text-slate-800
"
>
{title}
</h2>



<p
className="
mt-5
text-xs
text-slate-500
"
>
{summary}
</p>


<p
className="
mt-1
text-[22px]
font-black
"
style={{
color:accent
}}
>
{value}
</p>



<div
className="
mt-6
space-y-4
flex-1
"
>

{
menus.map((menu)=>(

<div
key={menu}
className="
flex
items-center
justify-between
text-[13px]
text-slate-600
"
>

<span>
{menu}
</span>


<ArrowRight
size={14}
style={{
color:accent
}}
/>

</div>

))
}

</div>




<div
className="
mt-auto
pt-4
"
>

<button
className="
h-9
w-full
rounded-lg
border
text-sm
font-bold
"
style={{
borderColor:accent,
color:accent
}}
>
바로가기 →
</button>

</div>


</div>


</Link>

);

}