(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1707:function(e,t,s){Promise.resolve().then(s.bind(s,5745)),Promise.resolve().then(s.t.bind(s,3247,23)),Promise.resolve().then(s.t.bind(s,8877,23))},5745:function(e,t,s){"use strict";s.d(t,{default:function(){return O}});var a=s(7437),r=s(2265),n=s(4839),l=s(7138);function i(e){let{href:t,children:s,setCurrentLink:r,name:i,current:o}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{className:"inline-flex",children:(0,a.jsx)(l.default,{href:"".concat(t),className:(0,n.Z)(o===i?"border-neutral-900 text-neutral-900":"border-transparent text-neutral-500","inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700"),onClick:()=>r(i),children:s})})})}function o(){let[e,t]=(0,r.useState)("All"),s=s=>{t(s),console.log("current="+e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0 ",children:[{name:"All",path:"/"},{name:"Accessories",path:"/Accessories"},{name:"Clothing",path:"/Clothing"}].map((t,r)=>(0,a.jsx)(i,{href:"".concat(t.path),setCurrentLink:s,name:t.name,current:e,children:t.name},r))})})}var d=s(4817);function c(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{className:"group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-80",children:[(0,a.jsx)("label",{className:"w-full mx-3 mr-10",children:(0,a.jsx)("input",{type:"text",name:"search",placeholder:"Search for products...",autoComplete:"on",required:!0,className:"h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"})}),(0,a.jsx)("div",{className:"absolute inset-y-0 right-0",children:(0,a.jsx)("button",{type:"submit",className:"inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80",children:(0,a.jsx)(d.Z,{"aria-hidden":!0,className:"h-5 w-5"})})})]})})}var x=s(5097);function h(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex items-center justify-center ",children:(0,a.jsx)("a",{href:"./cart",className:"w-8 h-6",children:(0,a.jsx)(x.tqy,{className:"h-6 w-6"})})})})}function m(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex items-center justify-center md:hidden",children:(0,a.jsx)(x.lIk,{className:"h-6 w-6 "})})})}var u=s(8229),f=s(2218),p=s(4697),j=s(6164);function g(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,j.m6)((0,n.W)(t))}let b=u.Root,N=u.Trigger;u.Close;let w=u.Portal,y=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(u.Overlay,{className:g("fixed inset-0 z-50 bg-black/10 backdrop-blur-md  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:t})});y.displayName=u.Overlay.displayName;let v=(0,f.j)("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",myright:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"}},defaultVariants:{side:"right"}}),k=r.forwardRef((e,t)=>{let{side:s="right",className:r,children:n,...l}=e;return(0,a.jsxs)(w,{children:[(0,a.jsx)(y,{}),(0,a.jsxs)(u.Content,{ref:t,className:g(v({side:s}),r),...l,children:[n,(0,a.jsxs)(u.Close,{className:"absolute right-8 top-6 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800",children:[(0,a.jsx)(p.Z,{className:"h-6 w-6"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});k.displayName=u.Content.displayName;let C=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:g("flex flex-col space-y-2 text-center sm:text-left",t),...s})};C.displayName="SheetHeader",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(u.Title,{ref:t,className:g("text-lg font-semibold text-slate-950 dark:text-slate-50",s),...r})}).displayName=u.Title.displayName;let A=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(u.Description,{ref:t,className:g("text-sm text-slate-500 dark:text-slate-400",s),...r})});function F(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("a",{href:"/",className:"flex items-center space-x-2",children:[(0,a.jsx)(x.gXb,{className:"h-8 w-8"}),(0,a.jsx)("span",{className:"text-xl font-bold block",children:"My Store"})]})})}function _(e){let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(b,{children:[(0,a.jsx)(N,{children:t}),(0,a.jsx)(k,{side:"top",children:(0,a.jsxs)(C,{children:[(0,a.jsx)(F,{}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(c,{})}),(0,a.jsx)(A,{children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsx)(u.Close,{children:(0,a.jsx)("span",{children:"All Products"})})})}),(0,a.jsx)(A,{children:(0,a.jsx)(l.default,{href:"/Accessories",children:(0,a.jsx)(u.Close,{children:(0,a.jsx)("span",{children:"Accessories"})})})}),(0,a.jsx)(A,{children:(0,a.jsx)(l.default,{href:"/Clothing",children:(0,a.jsx)(u.Close,{children:(0,a.jsx)("span",{children:"Clothing"})})})})]})})]})})}A.displayName=u.Description.displayName;var P=s(1942);function R(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("a",{href:"./cart",className:"w-8 ",children:(0,a.jsx)(P.Xws,{className:"h-6 w-6"})})," "]})})}function O(){return(0,a.jsxs)("nav",{className:" flex w-full gap-4 lg:gap-6","aria-label":"Main navigation",children:[(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8",children:(0,a.jsx)("div",{className:"hidden lg:flex",children:(0,a.jsx)(c,{})})}),(0,a.jsx)(h,{}),(0,a.jsx)(R,{}),(0,a.jsx)(_,{children:(0,a.jsx)(m,{})})]})}},8877:function(){}},function(e){e.O(0,[569,706,699,398,462,971,23,744],function(){return e(e.s=1707)}),_N_E=e.O()}]);