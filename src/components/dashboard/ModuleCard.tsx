interface Props{
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

return(

<div
className="
w-[150px]
h-[520px]
bg-white
rounded-xl
border
border-slate-200
shadow-sm
overflow-hidden
flex
flex-col
"
>


<div
className="
h-[125px]
flex
justify-center
items-center
relative
"
style={{
backgroundColor:color
}}
>

<div
className="
absolute
bottom-[-38px]
w-[78px]
h-[78px]
rounded-full
bg-white
flex
items-center
justify-center
shadow
"
>

<div
className="
w-12
h-12
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
flex-1
flex
flex-col
"
>


<p
className="
text-[10px]
font-bold
text-slate-400
"
>
{eng}
</p>


<h2
className="
text-[16px]
font-bold
mt-2
whitespace-nowrap
"
>
{title}
</h2>


<p
className="
mt-5
text-[11px]
text-slate-400
"
>
{label}
</p>


<p
className="
text-[18px]
font-bold
mt-1
whitespace-nowrap
"
style={{
color:color
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
menus.map(menu=>(

<div
key={menu}
className="
flex
justify-between
text-[11px]
text-slate-600
"
>

<span>
{menu}
</span>

<span style={{color}}>
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