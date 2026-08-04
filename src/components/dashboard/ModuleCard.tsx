interface Props {
  title:string;
  eng:string;
  value:string;
  label:string;
  color:string;
  menus:string[];
}


export default function ModuleCard({
  title,
  eng,
  value,
  label,
  color,
  menus
}:Props){

return (

<div
className="
h-[520px]
rounded-xl
bg-white
border
border-slate-200
shadow-sm
overflow-hidden
flex
flex-col
"
>


{/* 상단 색상 영역 */}

<div
className="
h-[125px]
flex
items-center
justify-center
relative
"
style={{
backgroundColor:color
}}
>

<div
className="
absolute
bottom-[-35px]
w-[75px]
h-[75px]
rounded-full
bg-white
border
flex
items-center
justify-center
shadow
"
>

<div
className="
w-10
h-10
rounded-full
border-4
"
style={{
borderColor:color
}}
/>

</div>

</div>



<div
className="
pt-12
px-4
flex
flex-col
flex-1
"
>


<p
className="
text-[11px]
font-bold
text-slate-400
"
>
{eng}
</p>


<h2
className="
text-[18px]
font-bold
mt-1
"
>
{title}
</h2>



<p
className="
mt-5
text-xs
text-slate-400
"
>
{label}
</p>


<p
className="
text-xl
font-bold
mt-1
"
style={{
color:color
}}
>
{value}
</p>



<div
className="
mt-5
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
justify-between
text-xs
text-slate-600
"
>

<span>
{menu}
</span>

<span
style={{
color:color
}}
>
›
</span>

</div>
))
}

</div>



<button
className="
h-9
rounded-lg
border
text-xs
font-bold
"
style={{
borderColor:color,
color:color
}}
>
바로가기 →
</button>


</div>


</div>

)

}