import{S as y,i as A,s as B,k as v,q as k,a as h,e as q,l as g,m as E,r as $,h as p,c as R,b as u,B as P,u as S,A as w,C as H}from"../chunks/index-379fe32e.js";import{s as O}from"../chunks/singletons-ce47e728.js";import"../chunks/index-e6b6ae2b.js";const z=()=>{const t=O,r={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return F(),{}},enumerable:!1}}),r},D={subscribe(t){return z().page.subscribe(t)}};function F(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function C(t){let r,a=t[0].error.frame+"",o;return{c(){r=v("pre"),o=k(a)},l(s){r=g(s,"PRE",{});var i=E(r);o=$(i,a),i.forEach(p)},m(s,i){u(s,r,i),P(r,o)},p(s,i){i&1&&a!==(a=s[0].error.frame+"")&&S(o,a)},d(s){s&&p(r)}}}function N(t){let r,a=t[0].error.stack+"",o;return{c(){r=v("pre"),o=k(a)},l(s){r=g(s,"PRE",{});var i=E(r);o=$(i,a),i.forEach(p)},m(s,i){u(s,r,i),P(r,o)},p(s,i){i&1&&a!==(a=s[0].error.stack+"")&&S(o,a)},d(s){s&&p(r)}}}function G(t){let r,a=t[0].status+"",o,s,i,b=t[0].error.message+"",_,d,c,m,l=t[0].error.frame&&C(t),n=t[0].error.stack&&N(t);return{c(){r=v("h1"),o=k(a),s=h(),i=v("pre"),_=k(b),d=h(),l&&l.c(),c=h(),n&&n.c(),m=q()},l(e){r=g(e,"H1",{});var f=E(r);o=$(f,a),f.forEach(p),s=R(e),i=g(e,"PRE",{});var j=E(i);_=$(j,b),j.forEach(p),d=R(e),l&&l.l(e),c=R(e),n&&n.l(e),m=q()},m(e,f){u(e,r,f),P(r,o),u(e,s,f),u(e,i,f),P(i,_),u(e,d,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,m,f)},p(e,[f]){f&1&&a!==(a=e[0].status+"")&&S(o,a),f&1&&b!==(b=e[0].error.message+"")&&S(_,b),e[0].error.frame?l?l.p(e,f):(l=C(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=N(e),n.c(),n.m(m.parentNode,m)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&p(r),e&&p(s),e&&p(i),e&&p(d),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(m)}}}function I(t,r,a){let o;return H(t,D,s=>a(0,o=s)),[o]}class M extends y{constructor(r){super(),A(this,r,I,G,B,{})}}export{M as default};
