(this["webpackJsonpblog-platform"]=this["webpackJsonpblog-platform"]||[]).push([[0],{245:function(e,t,a){e.exports=a(494)},249:function(e,t,a){},253:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var r,n,l=a(0),o=a.n(l),s=a(4),c=a.n(s),i=(a(249),a(54)),u=a(26),m=(a(253),a(254),a(225)),d=a(496),p=a(499),E=a(64),h=a(38),g=a.n(h),b=a(502),f=a(226),y=a(227),S=a.n(y),v=(localStorage.getItem("user")||{}).token,O=v?{Autorization:"Bearer ".concat(v)}:{},w=S.a.create({baseURL:"https://conduit.productionready.io/api/",headers:Object(f.a)({},O,{"Content-type":"application/json"})}),j=function(e){var t,a;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=JSON.stringify({user:e}),r.next=3,g.a.awrap(w.post("/users/login",t));case 3:return a=r.sent,localStorage.setItem("user",JSON.stringify(a.data.user)),r.abrupt("return",a.data.user);case 6:case"end":return r.stop()}}))},I=function(e){var t,a;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=JSON.stringify({user:e}),r.next=3,g.a.awrap(w.post("/users",t));case 3:return a=r.sent,r.abrupt("return",a.data.user);case 5:case"end":return r.stop()}}))},R=a(23),x=Object(R.a)(),_=Object(b.a)("USER_LOGIN_REQUEST"),T=Object(b.a)("USER_LOGIN_SUCCESS"),U=Object(b.a)("USER_LOGIN_FAILURE"),C=Object(b.a)("USER_LOGOUT"),N=Object(b.a)("USER_REGISTR_REQUEST"),L=Object(b.a)("USER_REGISTR_SUCCESS"),k=Object(b.a)("USER_REGISTR_FAILURE"),B=Object(i.g)((function(e){var t=Object(u.c)((function(e){return e.userReducer})).loggedIn,a=Object(u.b)(),r=e.location;return o.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[r.pathname],selectedKeys:[r.pathname],style:{lineHeight:"64px",display:"flex"}},o.a.createElement(p.a.Item,{key:"/home"},o.a.createElement(E.b,{to:"/home"},"Home")),!t&&o.a.createElement(p.a.Item,{key:"/login",style:{marginLeft:"auto"}},o.a.createElement(E.b,{to:"/login"},"Login")),t&&o.a.createElement(p.a.Item,{style:{marginLeft:"auto"},onClick:function(){return a(C())}},"Log out"))})),M=function(){var e=JSON.parse(localStorage.getItem("user"));return o.a.createElement("h1",null,e&&"Hello ".concat(e.username))},q=a(117),J=a(43),F=a(497),G=a(500),A=a(10),D=a(163),H=a(501),V=J.object().shape({email:J.string().email("Must be a valid email address").required("Email is required"),password:J.string().required("Password is required")}),X=function(){var e=Object(u.c)((function(e){return e.errorsReducer})).errors,t=Object(u.b)();return o.a.createElement(q.a,{initialValues:{email:"",password:""},validationSchema:V,onSubmit:function(e,a){var r,n=a.setSubmitting,l=a.resetForm;n(!0),t((r=e,function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e(_()),a.prev=1,a.next=4,g.a.awrap(j(r));case 4:t=a.sent,e(T({user:t})),x.push("/home"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),e(U(a.t0.response.data));case 12:case"end":return a.stop()}}),null,null,[[1,9]])})),n(!1),l()}},(function(t){var a=t.values,r=t.errors,n=t.touched,l=t.isSubmitting,s=t.handleChange,c=t.handleBlur,i=t.handleSubmit;return o.a.createElement(F.a,{onSubmit:i,style:{marginTop:"70px",width:"300px"}},o.a.createElement(F.a.Item,{validateStatus:n.email&&r.email?"error":null,help:n.email&&r.email?r.email:null},o.a.createElement(G.a,{type:"email",id:"email",prefix:o.a.createElement(A.a,{type:"mail"}),placeholder:"Enter an email",value:a.email,onChange:s,onBlur:c})),o.a.createElement(F.a.Item,{validateStatus:n.password&&r.password?"error":null,help:n.password&&r.password?r.password:null},o.a.createElement(G.a,{type:"password",id:"password",prefix:o.a.createElement(A.a,{type:"lock"}),placeholder:"Enter a password",value:a.password,onChange:s,onBlur:c})),o.a.createElement(F.a.Item,null,o.a.createElement(D.a,{style:{width:"100%"},type:"primary",htmlType:"submit",disabled:l},"Log in"),"Or ",o.a.createElement(E.a,{to:"/signup"},"register now!")),e&&o.a.createElement(H.a,{type:"error",message:JSON.stringify(e,null,2)}))}))},z=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(X,null))},K=J.object().shape({username:J.string().min(1,"Must have a character").max(50,"Must be shorter than 50").required("Must enter a name"),email:J.string().email("Must be a valid email address").required("Email is required"),password:J.string().min(8,"Must be longer than 8").max(40,"Must be shorter than 40").matches(/[0-9]/,"Must have at least one digit").matches(/[A-Z]/,"Must have at least one uppercase character").matches(/^[a-zA-Z0-9]{8,}$/,"Must have only letters and digits").required("Password is required")}),P=function(){var e=Object(u.c)((function(e){return e.errorsReducer})).errors,t=Object(u.b)();return o.a.createElement(q.a,{initialValues:{username:"",email:"",password:""},validationSchema:K,onSubmit:function(e,a){var r,n=a.setSubmitting,l=a.resetForm;n(!0),t((r=e,function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e(N()),a.prev=1,a.next=4,g.a.awrap(I(r));case 4:t=a.sent,e(L({user:t})),x.push("/login"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),e(k(a.t0.response.data));case 12:case"end":return a.stop()}}),null,null,[[1,9]])})),n(!1),l()}},(function(t){var a=t.values,r=t.errors,n=t.touched,l=t.isSubmitting,s=t.handleChange,c=t.handleBlur,i=t.handleSubmit;return o.a.createElement(F.a,{onSubmit:i,style:{marginTop:"70px",width:"300px"}},o.a.createElement(F.a.Item,{validateStatus:n.username&&r.username?"error":null,help:n.username&&r.username?r.username:null},o.a.createElement(G.a,{type:"text",id:"username",prefix:o.a.createElement(A.a,{type:"user"}),placeholder:"Enter a username",value:a.username,onChange:s,onBlur:c})),o.a.createElement(F.a.Item,{validateStatus:n.email&&r.email?"error":null,help:n.email&&r.email?r.email:null},o.a.createElement(G.a,{type:"email",id:"email",prefix:o.a.createElement(A.a,{type:"mail"}),placeholder:"Enter an email",value:a.email,onChange:s,onBlur:c})),o.a.createElement(F.a.Item,{validateStatus:n.password&&r.password?"error":null,help:n.password&&r.password?r.password:null},o.a.createElement(G.a,{type:"password",id:"password",prefix:o.a.createElement(A.a,{type:"lock"}),placeholder:"Enter a password",value:a.password,onChange:s,onBlur:c})),o.a.createElement(F.a.Item,null,o.a.createElement(D.a,{style:{width:"100%"},type:"primary",htmlType:"submit",disabled:l},"Sign up")),e&&o.a.createElement(H.a,{type:"error",message:JSON.stringify(e,null,2)}))}))},Q=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(P,null))},W=d.a.Header,Z=d.a.Content,$=function(e){var t=e.component,a=e.pathToRedirect,r=e.conditionFunc,n=Object(m.a)(e,["component","pathToRedirect","conditionFunc"]);return o.a.createElement(i.b,Object.assign({},n,{render:function(e){return r()?o.a.createElement(t,e):o.a.createElement(i.a,{to:a})}}))},Y=function(){var e=Object(u.c)((function(e){return e.userReducer})).loggedIn;return o.a.createElement(d.a,{className:"layout"},o.a.createElement(W,null,o.a.createElement("div",{className:"logo"}),o.a.createElement(B,null)),o.a.createElement(Z,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/"},o.a.createElement(i.a,{to:"/home"})),o.a.createElement($,{path:"/home",component:M,pathToRedirect:"/login",conditionFunc:function(){return e}}),o.a.createElement(i.b,{path:"/login",component:z}),o.a.createElement(i.b,{path:"/signup",component:Q}))))},ee=a(51),te=a(241),ae=a(42),re=a(498),ne=JSON.parse(localStorage.getItem("user")),le=ne?{loggedIn:!0,userData:ne}:{loggedIn:!1},oe=Object(re.a)((r={},Object(ae.a)(r,T,(function(e,t){return{loggedIn:!0,user:t.payload.user}})),Object(ae.a)(r,U,(function(){return{loggedIn:!1}})),Object(ae.a)(r,C,(function(){return localStorage.removeItem("user"),{loggedIn:!1}})),r),le),se=Object(re.a)((n={},Object(ae.a)(n,T,(function(){return{}})),Object(ae.a)(n,U,(function(e,t){return{errors:t.payload.errors}})),Object(ae.a)(n,k,(function(e,t){return{errors:t.payload.errors}})),n),{}),ce=Object(ee.c)({userReducer:oe,errorsReducer:se}),ie=Object(ee.e)(ce,Object(ee.d)(Object(ee.a)(te.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var ue=function(){return o.a.createElement(u.a,{store:ie},o.a.createElement(i.c,{history:x},o.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[245,1,2]]]);
//# sourceMappingURL=main.def8108a.chunk.js.map