import{S as k,i as $,s as q,k as d,a as N,q as P,l as c,m as v,h as u,c as S,r as U,n as s,b as j,B as l,H as D,I as B,A as C,J as A,C as H}from"../../chunks/index-379fe32e.js";import{u as T}from"../../chunks/store-a2c95ffc.js";import{c as m}from"../../chunks/singletons-ce47e728.js";import"../../chunks/index-e6b6ae2b.js";m.disable_scroll_handling;const J=m.goto;m.invalidate;m.prefetch;m.prefetch_routes;m.before_navigate;m.after_navigate;function O(p){let a,n,e,o,t,g,f,r,b,y,x;return{c(){a=d("div"),n=d("div"),e=d("div"),o=d("div"),t=d("input"),g=N(),f=d("div"),r=d("button"),b=P("Build CV"),this.h()},l(i){a=c(i,"DIV",{class:!0});var h=v(a);n=c(h,"DIV",{class:!0});var I=v(n);e=c(I,"DIV",{class:!0});var _=v(e);o=c(_,"DIV",{class:!0});var V=v(o);t=c(V,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),V.forEach(u),g=S(_),f=c(_,"DIV",{class:!0});var w=v(f);r=c(w,"BUTTON",{type:!0,class:!0});var E=v(r);b=U(E,"Build CV"),E.forEach(u),w.forEach(u),_.forEach(u),I.forEach(u),h.forEach(u),this.h()},h(){s(t,"type","text"),s(t,"name","first-name"),s(t,"placeholder","Your name"),s(t,"class","mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"),s(o,"class","col-span-6 sm:col-span-3"),s(r,"type","submit"),s(r,"class","inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"),s(f,"class","col-span-6 text-right sm:col-span-3"),s(e,"class","grid grid-cols-6 gap-6"),s(n,"class","bg-gray-50 px-4 py-5 sm:p-6"),s(a,"class","overflow-hidden shadow sm:rounded-md")},m(i,h){j(i,a,h),l(a,n),l(n,e),l(e,o),l(o,t),D(t,p[0].name),l(e,g),l(e,f),l(f,r),l(r,b),y||(x=[B(t,"input",p[2]),B(r,"click",p[1])],y=!0)},p(i,[h]){h&1&&t.value!==i[0].name&&D(t,i[0].name)},i:C,o:C,d(i){i&&u(a),y=!1,A(x)}}}function Y(p,a,n){let e;H(p,T,g=>n(0,e=g));const o=()=>{J("/templates")};function t(){e.name=this.value,T.set(e)}return[e,o,t]}class L extends k{constructor(a){super(),$(this,a,Y,O,q,{})}}export{L as default};