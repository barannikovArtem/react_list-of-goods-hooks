(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),a=n(7),i=n(3),l=n(1),r=(n(12),n(16));!function(t){t[t.length=0]="length",t[t.alph=1]="alph",t[t.none=2]="none"}(c||(c={}));var b=n(0),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t){return{name:t,id:Object(r.a)()}})),j=function(){var t=Object(l.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(l.useState)(!1),r=Object(i.a)(o,2),j=r[0],u=r[1],h=Object(l.useState)(c.none),d=Object(i.a)(h,2),O=d[0],m=d[1],_=Object(l.useState)("1"),x=Object(i.a)(_,2),f=x[0],g=x[1],A=function(){s(!n)};return Object(b.jsx)("div",{className:"App",children:n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:A,className:"App__btn App__btn--uniq",children:"Hide"}),Object(b.jsx)("button",{type:"button",onClick:function(){u(!j)},className:"App__btn",children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){m(c.alph)},className:"App__btn",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){m(c.length)},className:"App__btn",children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){m(c.none),u(!1)},className:"App__btn App__btn--uniq",children:"Reset"}),Object(b.jsxs)("select",{value:f,onChange:function(t){g(t.target.value)},className:"App__select",children:[Object(b.jsx)("option",{children:"1"}),Object(b.jsx)("option",{children:"2"}),Object(b.jsx)("option",{children:"3"}),Object(b.jsx)("option",{children:"4"}),Object(b.jsx)("option",{children:"5"}),Object(b.jsx)("option",{children:"6"}),Object(b.jsx)("option",{children:"7"}),Object(b.jsx)("option",{children:"8"}),Object(b.jsx)("option",{children:"9"}),Object(b.jsx)("option",{children:"10"})]})]}),Object(b.jsx)("ul",{className:"App__list",children:function(t){var e=Object(a.a)(t);return e.sort((function(t,e){switch(O){case c.alph:return t.name.localeCompare(e.name);case c.length:return t.name.length-e.name.length;default:return 0}})),j&&e.reverse(),e}(p).map((function(t){return t.name.length>=Number(f)&&Object(b.jsx)("li",{className:"App__list-item",children:t.name},t.id)}))})]}):Object(b.jsx)("div",{className:"App__start-container",children:Object(b.jsx)("button",{type:"button",onClick:A,className:"App__start-btn",children:"Start"})})})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.075cf59d.chunk.js.map