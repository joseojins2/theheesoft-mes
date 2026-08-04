"use client";

import Link from "next/link";
import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";


interface ModuleCardProps {

  title:string;
  subtitle:string;
  value:string;
  summary:string;
  path:string;
  menus:string[];
  icon:LucideIcon;
  color:string;

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

}:ModuleCardProps){


return(

<Link

href={path}

className="
flex
h-[430px]
flex-col
overflow-hidden
rounded-xl
border
border-slate-200
bg-white
shadow-sm
transition
hover:-translate-y-1
hover:shadow-md
"

>


<div

className="
flex
h-[95px]
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
h-14
w-14
items-center
justify-center
rounded-full
bg-white
"

>

<Icon

size={28}

style={{
color
}}

/>

</div>


</div>




<div

className="
flex
flex-1
flex-col
p-3
"

>


<p

className="
text-[10px]
font-bold
text-slate-400
"

>

{subtitle}

</p>



<h3

className="
mt-1
text-base
font-black
text-slate-800
"

>

{title}

</h3>




<p

className="
mt-3
text-[11px]
text-slate-400
"

>

{summary}

</p>



<p

className="
text-lg
font-black
"

style={{
color
}}

>

{value}

</p>




<div

className="
mt-4
flex-1
space-y-2
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
text-[11px]
text-slate-600
"

>

<span>

{menu}

</span>


<ArrowRight

size={12}

className="text-slate-300"

/>


</div>


))
}



</div>




<div

className="
flex
h-8
items-center
justify-center
rounded-md
border
text-xs
font-bold
"

style={{

borderColor:color,
color

}}

>

바로가기 →

</div>



</div>



</Link>


);


}