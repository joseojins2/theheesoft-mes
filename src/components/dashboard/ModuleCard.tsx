interface Props {
  type: string;
  title: string;
  valueTitle: string;
  value: string;
  color: string;
  items: string[];
}

const colors:any = {
  blue:{
    bg:"#2563eb",
    text:"#2563eb"
  },
  green:{
    bg:"#16a34a",
    text:"#16a34a"
  },
  orange:{
    bg:"#f97316",
    text:"#f97316"
  },
  purple:{
    bg:"#7c3aed",
    text:"#7c3aed"
  },
  cyan:{
    bg:"#0891b2",
    text:"#0891b2"
  },
  red:{
    bg:"#ef4444",
    text:"#ef4444"
  },
  dark:{
    bg:"#334155",
    text:"#334155"
  }
};


export default function ModuleCard({
  type,
  title,
  valueTitle,
  value,
  color,
  items
}:Props){

const c = colors[color];

return (
<div
className="
bg-white
rounded-xl
border
shadow-sm
overflow-hidden
h-[520px]
flex
flex-col
"
>

<div
className="
h-[125px]
flex
items-center
justify-center
"
style={{
background:c.bg
}}
>

<div
className="
w-20
h-20
rounded-full
bg-white
flex
items-center
justify-center
text-3xl
"
>
◉
</div>

</div>


<div className="p-5 flex flex-col flex-1">


<p className="text-xs text-gray-400 font-bold">
{type}
</p>

<h2 className="text-xl font-bold mt-2">
{title}
</h2>


<p className="text-sm text-gray-400 mt-5">
{valueTitle}
</p>


<p
className="text-2xl font-bold mt-1"
style={{
color:c.text
}}
>
{value}
</p>


<div className="mt-6 space-y-3 flex-1">

{
items.map((item)=>(
<div
key={item}
className="
flex
justify-between
text-sm
text-gray-600
"
>

<span>
{item}
</span>

<span
style={{
color:c.text
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
h-10
rounded-lg
border
font-bold
text-sm
"
style={{
borderColor:c.text,
color:c.text
}}
>
바로가기 →
</button>


</div>

</div>
)

}