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


return(

<Link

href={path}

className="
relative
flex
h-[420px]
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


<div

className="
flex
h-[100px]
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
h-16
w-16
items-center
justify-center
rounded-full
bg-white
shadow
"

>

<Icon

size={34}

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
p-4
"

>


<p className="
text-[10px]
font-bold
text-slate-400
">

{subtitle}

</p>


<h2 className="
mt-1
text-base
font-black
text-slate-800
">

{title}

</h2>



<p className="
mt-4
text-xs
text-slate-400
">

{summary}

</p>


<p

className="
text-xl
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
mt-5
flex-1
space-y-3
"

>

{

menus.map((menu)=>(

<div

key={menu}

className="
flex
justify-between
text-xs
text-slate-600
"

>

<span>

{menu}

</span>


<ArrowRight

size={12}

style={{
color:accent
}}

/>


</div>

))

}


</div>



<button

className="
mt-3
h-9
w-full
rounded-lg
border
text-xs
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


</Link>

);

}