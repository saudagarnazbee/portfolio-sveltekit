import{S as E,i as S,s as q,k as b,q as f,a as x,l as _,m as d,r as g,h as p,c as H,b as l,H as h,u as v,D as $,P}from"../chunks/shared-0e4a7fe2.js";import{s as k}from"../chunks/singletons-f208f040.js";const y=()=>{const s=k;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},C={subscribe(s){return y().page.subscribe(s)}};function D(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=f(r),n=x(),i=b("p"),u=f(c)},l(e){t=_(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(p),n=H(e),i=_(e,"P",{});var m=d(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),h(t,o),l(e,n,a),l(e,i,a),h(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(u,c)},i:$,o:$,d(e){e&&p(t),e&&p(n),e&&p(i)}}}function j(s,t,r){let o;return P(s,C,n=>r(0,o=n)),[o]}let A=class extends E{constructor(t){super(),S(this,t,j,D,q,{})}};export{A as default};
