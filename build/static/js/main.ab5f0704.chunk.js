(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(18),s=n.n(i),o=(n(24),n(8)),u=n(2),l=n.n(u),b=n(5),j=n(3),d=function(e){var t=e.blog,n=e.updateBlog,a=e.delBlog,i=Object(c.useState)(!1),s=Object(j.a)(i,2),o=s[0],u=s[1],l={display:o?"":"none"},b={display:o?"none":""},d=function(e){n(e)};return Object(r.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(r.jsxs)("div",{style:b,className:"blog-preview",children:[Object(r.jsx)("b",{children:"Title: "})," ",t.title," ",Object(r.jsx)("b",{children:"Likes: "})," ",t.likes,Object(r.jsx)("hr",{}),Object(r.jsx)("button",{id:"likeButton",onClick:function(){return d(t.id,t.title,t.author,t.content,t.likes)},children:"Like"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return u(!o)},children:o?"Hide":"More"})]}),Object(r.jsxs)("div",{style:l,className:"blog-full",children:[Object(r.jsx)("b",{children:"Title: "})," ",t.title,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Author: "})," ",t.author,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Content: "})," ",t.content,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Likes: "})," ",t.likes,Object(r.jsx)("button",{onClick:function(){return d(t.id,t.title,t.author,t.content,t.likes)},children:"Like"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return u(!o)},children:o?"Hide":"More"}),Object(r.jsx)("button",{onClick:function(){return e=t.id,void a(e);var e},children:"Delete"})]})]})},p=(n(9),function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{className:"error",children:t})}),f=function(e){var t=e.username,n=e.password,c=e.handleUsernameChange,a=e.handlePasswordChange,i=e.handleLogin;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:i,children:[Object(r.jsxs)("div",{children:["username",Object(r.jsx)("input",{id:"username",value:t,onChange:c})]}),Object(r.jsxs)("div",{children:["password",Object(r.jsx)("input",{id:"password",type:"password",value:n,onChange:a})]}),Object(r.jsx)("button",{id:"login-button",type:"submit",children:"login"})]})]})},h=function(e){var t=e.createBlog,n=e.username,a=Object(c.useState)(""),i=Object(j.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),b=l[0],d=l[1];console.log(n);return Object(r.jsx)("div",{className:"formDiv",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:s,author:n.name,content:b,likes:0}),o(""),d("")},children:[Object(r.jsxs)("div",{children:["Title:",Object(r.jsx)("input",{id:"title",type:"text",value:s,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{children:["Content:",Object(r.jsx)("input",{type:"text",value:b,onChange:function(e){d(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",children:"Add"})]})})},O=a.a.forwardRef((function(e,t){var n=Object(c.useState)(!1),a=Object(j.a)(n,2),i=a[0],s=a[1],o={display:i?"none":""},u={display:i?"":"none"},l=function(){s(!i)};return Object(c.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:o,children:Object(r.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(r.jsxs)("div",{style:u,className:"blog-full",children:[e.children,Object(r.jsx)("button",{onClick:l,children:"cancel"})]})]})}));O.displayName="Togglable";var g=O,x=n(6),v=n.n(x),m="/api/blogs",k=null,w=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(m,k);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={getAll:w,createBlog:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,v.a.post(m,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.a.put("".concat(m,"/").concat(t),n),e.next=3,r;case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){k="bearer ".concat(e)},deleteBlog:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},r=v.a.delete("".concat(m,"/").concat(t),n),e.next=4,r;case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getOne:y},B={login:function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(j.a)(i,2),u=s[0],O=s[1],x=Object(c.useState)(null),v=Object(j.a)(x,2),m=v[0],k=v[1],w=Object(c.useState)(!0),y=Object(j.a)(w,2),S=y[0],L=y[1],N=Object(c.useState)(""),T=Object(j.a)(N,2),A=T[0],I=T[1],U=Object(c.useState)(""),D=Object(j.a)(U,2),J=D[0],E=D[1],H=Object(c.useRef)();Object(c.useEffect)((function(){C.getAll().then((function(e){a(e)}))}),[]),Object(c.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);O(t),C.setToken(t.token)}}),[]);var z=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,B.login({username:A,password:J});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),C.setToken(n.token),O(n),I(""),E(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),k("Wrong credentials"),setTimeout((function(){k(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){H.current.toggleVisibility(),C.createBlog(e).then((function(e){a(n.concat(e))}))},P=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.find((function(e){return e.id===t})),c=Object(o.a)(Object(o.a)({},r),{},{likes:r.likes+1}),e.next=4,C.update(t,c);case 4:i=e.sent,a(n.map((function(e){return e.id!==t?e:i})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.deleteBlog(t);case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"Blogs"}),Object(r.jsx)(p,{message:m}),null===u?Object(r.jsx)(g,{buttonLabel:"login",children:Object(r.jsx)(f,{username:A,password:J,handleUsernameChange:function(e){var t=e.target;return I(t.value)},handlePasswordChange:function(e){var t=e.target;return E(t.value)},handleLogin:z})}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[u.name," logged-in",Object(r.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogappUser")},children:"Log out"})]}),Object(r.jsx)(g,{buttonLabel:"new blog",ref:H,children:Object(r.jsx)(h,{createBlog:M,username:u})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){return L(!S)},children:S?"hide":"show"})}),Object(r.jsx)("ul",{children:!0===S?n.map((function(e,t){return Object(r.jsx)(d,{blog:e,updateBlog:P,delBlog:R},t)})):""})]})};s.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))},9:function(e,t,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.ab5f0704.chunk.js.map