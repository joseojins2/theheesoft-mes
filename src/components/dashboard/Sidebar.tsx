"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Database,
  ShoppingCart,
  Factory,
  Package,
  Users,
  ClipboardList,
  BarChart3,
  QrCode,
  Settings,
  ChevronRight,
} from "lucide-react";


const menus = [

  {
    title:"Dashboard",
    icon:LayoutDashboard,
    path:"/dashboard",
  },

  {
    title:"기준정보",
    icon:Database,
    path:"/master/data",
  },

  {
    title:"영업/판매",
    icon:ShoppingCart,
    path:"/sales",
  },

  {
    title:"생산정보",
    icon:Factory,
    path:"/production",
  },

  {
    title:"자재정보",
    icon:Package,
    path:"/material",
  },

  {
    title:"사급정보",
    icon:Users,
    path:"/supplier",
  },

  {
    title:"발주정보",
    icon:ClipboardList,
    path:"/purchase",
  },

  {
    title:"분석정보",
    icon:BarChart3,
    path:"/analysis",
  },

  {
    title:"바코드정보",
    icon:QrCode,
    path:"/barcode",
  },

];



export default function Sidebar(){


return(

<aside

className="
fixed
left-0
top-0
z-20
flex
h-screen
w-[220px]
flex-col
bg-[#102A43]
text-white
"

>


{/* Logo */}

<div

className="
px-6
py-7
"

>

<h1

className="
text-2xl
font-black
tracking-wide
"

>

E_MES

</h1>


<p

className="
mt-1
text-xs
text-white/60
"

>

생산 정보 시스템

</p>


</div>




<nav

className="
flex-1
space-y-1
px-3
"

>


{

menus.map((menu,index)=>(


<Link

href={menu.path}

key={menu.title}

className={`
group
flex
items-center
justify-between
rounded-lg
px-4
py-3
text-sm
font-bold
transition

${index===0
?
"bg-[#5FB8B2] text-white"
:
"text-white/90 hover:bg-white/10"
}

`}

>


<div

className="
flex
items-center
gap-3
"

>

<menu.icon

size={19}

/>


<span>

{menu.title}

</span>


</div>


<ChevronRight

size={15}

className="
opacity-60
"

/>


</Link>


))


}


</nav>




<div

className="
border-t
border-white/10
px-5
py-5
"

>


<Link

href="/settings"

className="
flex
items-center
gap-3
text-sm
font-bold
text-white/80
hover:text-white
"

>

<Settings

size={18}

/>

환경설정

</Link>


</div>



</aside>

);

}