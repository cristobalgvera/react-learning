(this["webpackJsonpreact-learning-2"]=this["webpackJsonpreact-learning-2"]||[]).push([[4],{91:function(e,t,n){"use strict";var a=n(0),c=(n(1),n(3)),r=n.n(c),u=n(92);r.a.string,r.a.number,r.a.bool,r.a.func;t.a=function(e){var t=e.type,n=e.name,c=e.placeholder,r=e.value,i=e.change;return Object(a.jsxs)("div",{className:u.Input,children:[Object(a.jsx)("label",{htmlFor:n,children:n}),Object(a.jsx)("input",{type:t,name:n,placeholder:c,value:r,onChange:function(e){var t=e.target,n=t.value,a=t.name;return i(a,n)}})]})}},92:function(e,t,n){e.exports={Input:"Input_Input__1luiK"}},95:function(e,t,n){e.exports={Auth:"Auth_Auth__3_QNE"}},97:function(e,t,n){"use strict";n.r(t);var a=n(18),c=n(15),r=n(0),u=n(1),i=n(8),s=n(91),l=n(30),o=n(95),j=n(14),d=n(31),p=n(5),b=n(6),h=n(9),O={email:"",password:""};t.default=Object(i.b)((function(e){var t=e.authReducer;return{reduxState:{error:t.error,loading:t.loading,localId:t.localId}}}),(function(e){return{reduxActions:{onInitAuthentication:function(t,n){return e(Object(j.e)(t,n))}}}}))((function(e){var t=e.reduxState,n=t.error,i=t.loading,j=t.localId,f=e.reduxActions.onInitAuthentication,x=Object(u.useState)(O),m=Object(c.a)(x,2),g=m[0],v=m[1],I=Object(u.useState)(!0),A=Object(c.a)(I,2),S=A[0],N=A[1],_=g.email,w=g.password,y=function(e,t){v((function(n){return Object(b.a)(n,Object(a.a)({},e,t))}))},k=function(e){e.preventDefault(),f(g,S)},G=function(){N((function(e){return!e}))};return Object(r.jsx)("div",{className:o.Auth,children:i?Object(r.jsx)(d.a,{}):j?Object(r.jsx)(p.a,{to:h.a}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{children:[Object(r.jsx)(s.a,{type:"email",name:"email",placeholder:"Email",value:_,change:y}),Object(r.jsx)(s.a,{type:"password",name:"password",placeholder:"**********",value:w,change:y}),n&&Object(r.jsx)("p",{children:n.message}),Object(r.jsx)(l.a,{type:"Success",clicked:k,children:S?"LOGIN":"SIGN UP"})]}),Object(r.jsxs)(l.a,{type:"Danger",clicked:G,children:["SWITCH TO ",S?"SIGN UP":"LOGIN"]})]})})}))}}]);
//# sourceMappingURL=4.7cc14eeb.chunk.js.map