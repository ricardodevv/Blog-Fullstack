(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n(17),s=n.n(c),u=(n(23),n(1)),o=n.n(u),i=n(4),l=n(5),j=function(e){var t=e.blog;return Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Title: "})," ",t.title," ",Object(r.jsx)("b",{children:"Likes: "})," ",t.likes,Object(r.jsx)("hr",{})]})},p=n(6),b=n.n(p),d="/api/blogs",f=null,v={getAll:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.get(d),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createBlog:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,b.a.post(d,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.a.put("".concat(d," /").concat(t),n),e.next=3,r;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){f="bearer ".concat(e)}},O={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=(n(16),function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{className:"error",children:t})}),x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),p=u[0],b=u[1],d=Object(a.useState)(""),f=Object(l.a)(d,2),x=f[0],g=f[1],m=Object(a.useState)(""),w=Object(l.a)(m,2),k=w[0],y=w[1],S=Object(a.useState)(""),B=Object(l.a)(S,2),C=B[0],A=B[1],T=Object(a.useState)(""),I=Object(l.a)(T,2),J=I[0],N=I[1],U=Object(a.useState)(null),E=Object(l.a)(U,2),D=E[0],L=E[1],z=Object(a.useState)(null),P=Object(l.a)(z,2),W=P[0],q=P[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);L(t),v.setToken(t.token)}}),[]);var F=function(e){b(e.target.value)},G=function(e){g(e.target.vale)},H=function(e){y(e.target.value)},K=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={title:p,author:x,content:k},a=v.createBlog(r),e.next=5,a;case 5:s=e.sent,c(n.concat(s)),b(""),g(""),y("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.login({username:C,password:J});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),v.setToken(n.token),L(n),A(""),N(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),q("Wrong credentials"),setTimeout((function(){q(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();console.log(D);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"Blogs"}),Object(r.jsx)(h,{message:W}),null===D?Object(r.jsxs)("form",{onSubmit:M,children:[Object(r.jsxs)("div",{children:["username",Object(r.jsx)("input",{type:"text",value:C,name:"Username",onChange:function(e){var t=e.target;return A(t.value)}})]}),Object(r.jsxs)("div",{children:["password",Object(r.jsx)("input",{type:"password",value:J,name:"Password",onChange:function(e){var t=e.target;return N(t.value)}})]}),Object(r.jsx)("button",{type:"submit",children:"login"})]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[D.name," logged-in",Object(r.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogappUser")},children:"Log out"})]}),Object(r.jsxs)("form",{onSubmit:K,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["Title:",Object(r.jsx)("input",{type:"text",value:p,onChange:F})]}),Object(r.jsxs)("div",{children:["Author:",Object(r.jsx)("input",{type:"text",value:x,onChange:G})]}),Object(r.jsxs)("div",{children:["Content:",Object(r.jsx)("input",{type:"text",value:k,onChange:H})]}),Object(r.jsx)("button",{type:"submit",children:"Add"})]}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(j,{blog:e},e.id)}))})]})]})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.30b368c7.chunk.js.map