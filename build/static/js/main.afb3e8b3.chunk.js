(this["webpackJsonpreact-learning-2"]=this["webpackJsonpreact-learning-2"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var r={ADD_INGREDIENT:"ADD_INGREDIENT",REMOVE_INGREDIENT:"REMOVE_INGREDIENT",SET_INGREDIENTS:"SET_INGREDIENTS",FETCH_INGREDIENTS_FAIL:"FETCH_INGREDIENTS_FAIL"},c={CALCULATE_PRICE:"CALCULATE_PRICE",RESET_PRICE:"RESET_PRICE"},i={SET_ORDERS:"SET_ORDERS",FETCH_ORDERS_FAIL:"FETCH_ORDERS_FAIL"},o={AUTH_START:"AUTH_START",AUTH_SUCCESS:"AUTH_SUCCESS",AUTH_FAIL:"AUTH_FAIL",AUTH_LOGOUT:"AUTH_LOGOUT",LOCAL_AUTH_CHECKED:"LOCAL_AUTH_CHECKED"}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(4),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a}));var r="/burger-builder",c="".concat(r,"/checkout"),i="".concat(c,"/contact-data"),o="/orders",a="/sign-in"},,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"j",(function(){return a})),n.d(t,"a",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return f})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return L}));var r=n(2),c=r.d.CALCULATE_PRICE,i=r.d.RESET_PRICE,o=function(e){return{type:c,payload:{ingredients:e}}},a=function(){return{type:i}},u=n(17),s=r.b.ADD_INGREDIENT,d=r.b.REMOVE_INGREDIENT,l=r.b.FETCH_INGREDIENTS_FAIL,j=r.b.SET_INGREDIENTS,b=function(e){return{type:s,payload:{ingredient:e}}},O=function(e){return{type:d,payload:{ingredient:e}}},f=function(){return _()},_=function(){return function(e){u.a.get("/ingredients.json").then((function(t){var n=t.data;return e(function(e){return{type:j,payload:{ingredients:e}}}(n))})).catch((function(){return e({type:l})}))}},g=n(4),h=r.c.FETCH_ORDERS_FAIL,x=r.c.SET_ORDERS,p=function(e,t){return function(n){var r="?auth=".concat(e,'&orderBy="localId"&equalTo="').concat(t,'"');u.a.get("/orders.json".concat(r)).then((function(e){var t=e.data,r=[];for(var c in t)r.push(Object(g.a)(Object(g.a)({},t[c]),{},{id:c}));n(function(e){return{type:x,payload:{orders:e}}}(r))})).catch((function(e){return n({type:h})}))}},I="EXPIRATION_DATE",E="ID_TOKEN",v="LOCAL_ID",T=r.a.AUTH_FAIL,S=r.a.AUTH_START,m=r.a.AUTH_SUCCESS,C=r.a.AUTH_LOGOUT,N=(r.a.LOCAL_AUTH_CHECKED,function(e){return{type:m,payload:{authentication:e}}}),R=function(e){return function(t){setTimeout((function(){return t(A())}),1e3*e)}},A=function(){return D(),{type:C}},D=function(){localStorage.removeItem(E),localStorage.removeItem(I),localStorage.removeItem(v)},L=function(){return function(e){var t=localStorage.getItem(E);if(t){var n=new Date(localStorage.getItem(I));if(n>new Date){var r=localStorage.getItem(v),c=n.getTime()-(new Date).getTime();return e(N({idToken:t,localId:r})),void e(R(c/1e3))}}e(A())}},k=function(e,t){return function(n){n({type:S});var r=Object(g.a)(Object(g.a)({},e),{},{returnSecureToken:!0}),c=t?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";c+="".concat("AIzaSyCm6jomIaSVjN9WR7muaU-hOgRminSRVPY"),u.a.post(c,r).then((function(e){var t=e.data;!function(e){var t=e.idToken,n=e.expiresIn,r=e.localId,c=new Date((new Date).getTime()+1e3*n).toISOString();localStorage.setItem(E,t),localStorage.setItem(I,c),localStorage.setItem(v,r)}(t),n(N(t)),n(R(t.expiresIn))})).catch((function(e){var t=e.response.data.error;return n(function(e){return{type:T,payload:{error:e}}}(t))}))}}},,,function(e,t,n){"use strict";var r=n(54),c=n.n(r).a.create({baseURL:"https://react-burger-project-api.firebaseio.com/"});t.a=c},,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3In5S",Open:"SideDrawer_Open__2nowa",Close:"SideDrawer_Close__25E3I",Logo:"SideDrawer_Logo__neV4V"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1ZgKc",Less:"BuildControl_Less__2aiYe",More:"BuildControl_More__31Sti",Label:"BuildControl_Label__mTgZe"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2FdTq",Logo:"Toolbar_Logo__1-Iy9",DesktopOnly:"Toolbar_DesktopOnly__309k0"}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1Mj9-",BreadTop:"BurgerIngredient_BreadTop__GVS38",Seeds1:"BurgerIngredient_Seeds1__43WyK",Seeds2:"BurgerIngredient_Seeds2__1tE9v",Meat:"BurgerIngredient_Meat__2XrXK",Cheese:"BurgerIngredient_Cheese__NQpVS",Salad:"BurgerIngredient_Salad__3sQZR",Bacon:"BurgerIngredient_Bacon__t-zPK"}},function(e,t,n){"use strict";var r=n(0),c=(n(1),n(3)),i=n.n(c),o=n(39),a=n.n(o);i.a.string,i.a.func;t.a=function(e){var t=e.type,n=e.clicked,c=e.children;return Object(r.jsx)("button",{className:[o.Button,a.a[t]].join(" "),onClick:n,children:c})}},function(e,t,n){"use strict";var r=n(0),c=(n(1),n(59));t.a=function(){return Object(r.jsx)("div",{className:c.Loader,children:"Loading..."})}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2u_sr",active:"NavigationItem_active__1K8BG"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__35Oav",OrderButton:"BuildControls_OrderButton__1zpkj",OrderButtonactive:"BuildControls_OrderButtonactive__1CoIg",enable:"BuildControls_enable__1NFBN"}},function(e,t,n){e.exports={Button:"Button_Button__2VNhy",Success:"Button_Success__28olz",Danger:"Button_Danger__2nsR8"}},,,,,,,,,,function(e,t,n){"use strict";var r=n(61),c=n(0),i=(n(1),n(8)),o=n(3),a=n.n(o),u=n(57),s=n(29),d=n.n(s),l=(a.a.string,function(e){var t=e.ingredient;return Object(c.jsx)("div",{className:d.a[t],children:"BreadTop"===t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:s.Seeds1}),Object(c.jsx)("div",{className:s.Seeds2})]})})}),j=(a.a.number,a.a.shape,function(e){return e.charAt(0).toUpperCase()+e.slice(1)});t.a=Object(i.b)((function(e){return{reduxState:{ingredients:e.ingredientsReducer.ingredients}}}))((function(e){var t=e.reduxState.ingredients,n=[];return t&&(n=Object.keys(t).map((function(e){return Object(r.a)(Array(+t[e])).map((function(t,n){return Object(c.jsx)(l,{ingredient:j(e)},"".concat(e,"_").concat(n))}))})).reduce((function(e,t){return e.concat(t)}),[])),0===n.length&&(n=Object(c.jsx)("p",{children:"Please add ingredients!"})),Object(c.jsxs)("div",{className:u.Burger,children:[Object(c.jsx)(l,{ingredient:"BreadTop"}),n,Object(c.jsx)(l,{ingredient:"BreadBottom"})]})}))},,function(e,t,n){e.exports={Content:"Layout_Content__34UoF"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2nUxa"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3eFtm"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__Vypeh"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2ReEb"}},function(e,t,n){e.exports={Burger:"Burger_Burger__3YXKi"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2EYo0"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2Rv5K",load2:"Spinner_load2__2GyUx"}},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),o=n(25),a=n.n(o),u=(n(67),n(16)),s=n(8),d=n(15),l=n(51),j=n(28),b=n(52),O=n.p+"static/media/burger-logo.ec69c7f6.png",f=function(e){e.height;return Object(r.jsx)("div",{className:b.Logo,children:Object(r.jsx)("img",{src:O,alt:"Burger"})})},_=n(5),g=n(53),h=n(3),x=n.n(h),p=n(35),I=(x.a.string,x.a.func,function(e){var t=e.link,n=e.clicked,c=e.children;return Object(r.jsx)("li",{className:p.NavigationItem,onClick:n,children:n?Object(r.jsx)("a",{style:{cursor:"pointer"},children:c}):Object(r.jsx)(u.b,{to:"".concat(t),activeClassName:p.active,children:c})})}),E=n(14),v=n(9),T=Object(s.b)((function(e){return{reduxState:{localId:e.authReducer.localId}}}),(function(e){return{reduxActions:{onLogout:function(){return e(Object(E.d)())}}}}))((function(e){var t=e.reduxState.localId,n=e.reduxActions.onLogout,c=Object(_.g)();return Object(r.jsxs)("ul",{className:g.NavigationItems,children:[Object(r.jsx)(I,{link:v.a,children:"Burger Builder"}),t&&Object(r.jsx)(I,{link:v.d,children:"Orders"}),Object(r.jsx)(I,{link:v.e,clicked:t&&function(){window.confirm("Are you sure you want to leave?")&&(n(),c.push(v.a))},children:t?"Logout":"Sign in"})]})})),S=n(55),m=Object(c.createContext)({clicked:function(){}}),C=function(){var e=Object(c.useContext)(m).clicked;return Object(r.jsxs)("div",{className:S.DrawerToggle,onClick:function(){return e()},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},N=function(){return Object(r.jsxs)("header",{className:j.Toolbar,children:[Object(r.jsx)(C,{}),Object(r.jsx)("div",{className:j.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{className:j.DesktopOnly,children:Object(r.jsx)(T,{})})]})},R=n(23),A=n(56),D=(x.a.bool,function(e){var t=e.show,n=Object(c.useContext)(m).clicked;return t&&Object(r.jsx)("div",{className:A.Backdrop,onClick:function(){return n()}})}),L=(x.a.bool,function(e){var t=e.show,n=[R.SideDrawer,t?R.Open:R.Close].join(" "),i=Object(c.useContext)(m).clicked;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{show:t}),Object(r.jsxs)("div",{className:n,children:[Object(r.jsx)("div",{className:R.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{onClick:i,children:Object(r.jsx)(T,{})})]})]})}),k=function(e){var t=e.children,n=Object(c.useState)(!1),i=Object(d.a)(n,2),o=i[0],a=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m.Provider,{value:{clicked:function(){a((function(e){return!e}))}},children:[Object(r.jsx)(N,{}),Object(r.jsx)(L,{show:o})]}),Object(r.jsx)("main",{className:l.Content,children:t})]})},B=n(4),y=n(17),w=n(49),U=n(18),F=n(38),H=Object(c.createContext)({disabledInfo:{}}),G=n(2),P=n(24),M=G.b.ADD_INGREDIENT,V=G.b.REMOVE_INGREDIENT,K=(x.a.string,x.a.func,Object(s.b)(null,(function(e){return{reduxActions:{onAddIngredient:function(t){return e(Object(E.a)(t))},onRemoveIngredient:function(t){return e(Object(E.h)(t))}}}}))((function(e){var t=e.label,n=e.ingredient,i=e.updatePrice,o=e.reduxActions,a=o.onRemoveIngredient,u=o.onAddIngredient,s=Object(c.useContext)(H).disabledInfo,d=function(e){switch(e){case M:u(n),i(n,1);break;case V:a(n),i(n,-1);break;default:return}};return Object(r.jsxs)("div",{className:P.BuildControl,children:[Object(r.jsx)("div",{className:P.Label,children:t}),Object(r.jsx)("button",{className:P.Less,disabled:s[n],onClick:function(){return d(V)},children:"Less"}),Object(r.jsx)("button",{className:P.More,onClick:function(){return d(M)},children:"More"})]})}))),z=Object(s.b)((function(e){return{reduxState:{ingredients:e.ingredientsReducer.ingredients,price:e.priceReducer.price,localId:e.authReducer.localId}}}),(function(e){return{reduxActions:{updatePrice:function(t){return e(Object(E.b)(t))}}}}))((function(e){var t=e.purchasable,n=e.summarize,c=e.reduxState,i=c.ingredients,o=c.price,a=c.localId,u=e.reduxActions.updatePrice,s=Object(_.g)(),d=function(e,t){u(Object(B.a)(Object(B.a)({},i),{},Object(U.a)({},e,i[e]+t)))};return Object(r.jsxs)("div",{className:F.BuildControls,children:[Object(r.jsxs)("p",{children:["Price: ",Object(r.jsxs)("strong",{children:["$",o]})]}),Object.keys(i).map((function(e){return Object(r.jsx)(K,{label:e,ingredient:e,updatePrice:d},e)})),Object(r.jsx)("button",{disabled:!t,className:F.OrderButton,onClick:function(){return function(){if(a)return n();s.push(v.e)}()},children:a?"ORDER NOW":"SIGN IN TO ORDER"})]})})),Y=n(58),X=function(e){var t=e.show,n=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{show:t}),Object(r.jsx)("div",{className:Y.Modal,style:{transform:t?"translateY(0)":"translateY(-100vh)",opacity:t?"1":"0"},children:n})]})},q=(x.a.bool,Object(c.memo)(X,(function(e,t){var n=e.show,r=t.show;return!(n||r)}))),W=n(30),Z=(x.a.func,x.a.shape,x.a.number,Object(s.b)((function(e){return{reduxState:{ingredients:e.ingredientsReducer.ingredients,price:e.priceReducer.price}}}))((function(e){var t=e.purchase,n=e.close,c=e.reduxState,i=c.ingredients,o=c.price,a=Object.keys(i).map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:e}),":"," ",i[e]]},e)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Your order"}),Object(r.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(r.jsx)("ul",{children:a}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["TOTAL: $",o]})}),Object(r.jsx)("p",{children:"Continue to checkout?"}),Object(r.jsx)(W.a,{type:"Danger",clicked:n,children:"CANCEL"}),Object(r.jsx)(W.a,{type:"Success",clicked:function(){return t()},children:"CONTINUE"})]})}))),J=n(31),Q=function(e,t){var n=t.interceptors;return function(t){var i=Object(c.useState)(!1),o=Object(d.a)(i,2),a=o[0],u=o[1];Object(c.useEffect)((function(){var e=n.request.use((function(e){return setTimeout((function(){return u("Action completed")}),1e3),e}),(function(e){var t=e.message;return u(t)})),t=n.response.use((function(e){return e}),(function(e){var t=e.message;return u(t)}));return function(){console.log("[withErrorHandler.js || useEffect] Cleanup function",e,t),n.request.eject(e),n.response.eject(t)}}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.Provider,{value:{clicked:function(){return u(!1)}},children:Object(r.jsx)(q,{show:!!a,children:a})}),Object(r.jsx)(e,Object(B.a)({},t))]})}},$=Object(s.b)((function(e){var t=e.ingredientsReducer;return{reduxState:{ingredients:t.ingredients,error:t.error}}}),(function(e){return{reduxActions:{onInitIngredients:function(){return e(Object(E.f)())}}}}))(Q((function(e){var t=e.reduxState,n=t.ingredients,i=t.error,o=e.reduxActions.onInitIngredients,a=Object(_.g)(),u=Object(c.useState)({}),s=Object(d.a)(u,2),l=s[0],j=s[1],b=Object(c.useState)(!1),O=Object(d.a)(b,2),f=O[0],g=O[1],h=Object(c.useState)(!1),x=Object(d.a)(h,2),p=x[0],I=x[1],E=Object(c.useState)(!1),T=Object(d.a)(E,2),S=T[0],C=T[1];Object(c.useEffect)((function(){n||o()}),[o,n]),Object(c.useEffect)((function(){j((function(){var e=Object(B.a)({},n);for(var t in n)e[t]=e[t]<=0;return e})),g((function(){return Object.values(Object(B.a)({},n)).reduce((function(e,t){return e+t}),0)>0}))}),[n]);var N=function(){I(!0)},R=function(){I(!1)},A=function(){a.push(v.b),C(!0)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.Provider,{value:{clicked:R},children:Object(r.jsx)(q,{show:p,children:S||!n?i?Object(r.jsx)("p",{children:"Ingredients can't be loaded"}):Object(r.jsx)(J.a,{}):Object(r.jsx)(Z,{close:R,purchase:A})})}),n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w.a,{}),Object(r.jsx)(H.Provider,{value:{disabledInfo:l},children:Object(r.jsx)(z,{purchasable:f,summarize:N})})]}):i?Object(r.jsx)("p",{children:"Ingredients can't be loaded"}):Object(r.jsx)(J.a,{})]})}),y.a)),ee=function(e){return function(t){var n=Object(c.useState)(),i=Object(d.a)(n,2),o=i[0],a=i[1];return Object(c.useEffect)((function(){return e().then((function(e){return a(e.default)}))}),[]),o&&Object(r.jsx)(o,Object(B.a)({},t))||null}},te=ee((function(){return n.e(3).then(n.bind(null,99))})),ne=ee((function(){return n.e(4).then(n.bind(null,97))})),re=ee((function(){return n.e(5).then(n.bind(null,100))})),ce=Object(s.b)((function(e){return{reduxState:{authenticated:null!=e.authReducer.idToken}}}))((function(e){return e.reduxState.authenticated?Object(r.jsxs)(_.d,{children:[Object(r.jsx)(_.b,{path:v.a,component:$,exact:!0}),Object(r.jsx)(_.b,{path:v.b,component:te}),";",Object(r.jsx)(_.b,{path:v.d,component:re,exact:!0}),";",Object(r.jsx)(_.a,{to:v.a})]}):Object(r.jsxs)(_.d,{children:[Object(r.jsx)(_.b,{path:v.a,component:$,exact:!0}),Object(r.jsx)(_.b,{path:v.e,component:ne}),Object(r.jsx)(_.a,{to:v.a})]})})),ie=Object(s.b)((function(e){return{reduxState:{checked:e.authReducer.checked}}}),(function(e){return{reduxActions:{onCheckAuthState:function(){return e(Object(E.c)())}}}}))((function(e){var t=e.reduxState.checked,n=e.reduxActions.onCheckAuthState;return Object(c.useEffect)((function(){return n()}),[n]),Object(r.jsx)(u.a,{children:Object(r.jsx)(k,{children:t&&Object(r.jsx)(ce,{})})})})),oe=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,98)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))},ae=n(60),ue=n(19),se=n(6),de=G.b.ADD_INGREDIENT,le=G.b.REMOVE_INGREDIENT,je=G.b.FETCH_INGREDIENTS_FAIL,be=G.b.SET_INGREDIENTS,Oe={ingredients:null,error:!1},fe=function(e,t){var n=t.ingredients;return Object(se.a)(e,{ingredients:n})},_e=function(e,t){var n=t.ingredient,r=e.ingredients,c=Object(B.a)(Object(B.a)({},r),{},Object(U.a)({},n,r[n]+1));return Object(se.a)(e,{ingredients:c})},ge=function(e,t){var n=t.ingredient,r=e.ingredients,c=Object(B.a)(Object(B.a)({},r),{},Object(U.a)({},n,r[n]-1));return Object(se.a)(e,{ingredients:c})},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;switch(r){case de:return _e(e,n);case le:return ge(e,n);case be:return fe(e,n);case je:return Object(se.a)(e,{error:!0});default:return e}},xe=G.c.FETCH_ORDERS_FAIL,pe=G.c.SET_ORDERS,Ie={orders:null,error:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;switch(r){case pe:return Object(se.a)(e,Object(B.a)(Object(B.a)({},Ie),{},{orders:n.orders}));case xe:return Object(se.a)(e,Object(B.a)(Object(B.a)({},Ie),{},{error:!0}));default:return e}},ve=G.d.CALCULATE_PRICE,Te=G.d.RESET_PRICE,Se={price:2e3},me={bacon:1200,meat:1700,cheese:1e3,salad:700},Ce=function(e,t){var n=t.ingredients,r=Object.keys(n).reduce((function(e,t){return e+n[t]*me[t]}),Se.price);return Object(se.a)(e,{price:r})},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;switch(r){case ve:return Ce(e,n);case Te:return Object(se.a)(e,{price:Se.price});default:return e}},Re=G.a.AUTH_START,Ae=G.a.AUTH_FAIL,De=G.a.AUTH_SUCCESS,Le=G.a.AUTH_LOGOUT,ke=G.a.LOCAL_AUTH_CHECKED,Be={checked:!1,loading:!1,error:null,idToken:null,localId:null},ye=function(e){return Object(se.a)(e,Object(se.a)(Be,{checked:!0}))},we=function(e,t){var n=t.authentication,r=n.idToken,c=n.localId;return Object(se.a)(e,Object(se.a)(Be,{idToken:r,localId:c,checked:!0}))},Ue=function(e,t){var n=t.error;return Object(se.a)(e,Object(se.a)(Be,{error:n,checked:!0}))},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Re:return Object(se.a)(e,{loading:!0});case De:return we(e,r);case Ae:return Ue(e,r);case Le:return ye(e);case ke:return Object(se.a)(e,{checked:!0});default:return e}},He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,Ge=Object(ue.c)({ingredientsReducer:he,priceReducer:Ne,ordersReducer:Ee,authReducer:Fe}),Pe=Object(ue.e)(Ge,He(Object(ue.a)(ae.a)));a.a.render(Object(r.jsx)(s.a,{store:Pe,children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ie,{})})}),document.getElementById("root")),oe()}],[[90,1,2]]]);
//# sourceMappingURL=main.afb3e8b3.chunk.js.map