(this.webpackJsonpgitsearch=this.webpackJsonpgitsearch||[]).push([[0],{93:function(e,n,t){"use strict";t.r(n);var r,c=t(1),a=t(32),s=t.n(a),i=t(24),o=t(3),l=t(4),u=Object(l.a)(r||(r=Object(o.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Roboto" , sans-serif;\n  }\n  \n  \n  a {\n    text-decoration: none;\n  }\n  \n  ul {\n    list-style: none;\n  }\n  \n  body {\n    overflow-x: hidden;\n    background: #232324;\n    scroll-behavior: smooth;\n  }\n']))),j=t(10),b=t.n(j),d=t(19),p=t(11),x=t(62),f=t.n(x).a.create({baseURL:"https://api.github.com/users",timeout:1e4,headers:{"Content-Type":"application/json"}});f.interceptors.response.use((function(e){return function(e){return 404===e.status&&alert("Deu ruim!"),e}(e)}),(function(e){return function(e){return Promise.reject(e)}(e)}));var h,g,O,m,v,w,y,S,k,z,C,I,F,J,L,T,R,V,N,P,U,_,D,E,G,q,B,A,H,K,M,Q=function(){var e=Object(d.a)(b.a.mark((function e(n){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/".concat(n));case 2:return t=e.sent,e.next=5,t;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(b.a.mark((function e(n){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/".concat(n,"/repos"));case 2:return t=e.sent,e.next=5,t;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),X=t(6),Y=t(39),Z=t(2),$=Object(c.createContext)({}),ee=$.Provider,ne=function(e){var n=e.children,t=Object(c.useState)(JSON.parse(localStorage.getItem("users"))||[]),r=Object(p.a)(t,2),a=r[0],s=r[1],i=Object(c.useState)(JSON.parse(localStorage.getItem("repo"))||[]),o=Object(p.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(""),x=Object(p.a)(j,2),f=x[0],h=x[1],g=Object(c.useState)(null),O=Object(p.a)(g,2),m=O[0],v=O[1],w=!!m,y=Object(X.f)().push,S=Object(c.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(n,t){var r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(n);case 3:return r=e.sent,e.next=6,r;case 6:return c=e.sent,a=c.data,localStorage.setItem("users",JSON.stringify(a)),s(a),e.next=12,t(n);case 12:return Y.b.success("Logando..."),e.abrupt("return",a);case 16:e.prev=16,e.t0=e.catch(0),localStorage.removeItem("users"),h(""),Y.b.error("Usu\xe1rio n\xe3o encontrado!"),setTimeout((function(){window.location.reload()}),1e3);case 22:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n,t){return e.apply(this,arguments)}}(),[]),k=Object(c.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(n){var t,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(n);case 3:return t=e.sent,e.next=6,t;case 6:return r=e.sent,c=r.data,u(c),localStorage.setItem("repo",JSON.stringify(c)),y("/profile"),e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(0),localStorage.removeItem("repo"),h(""),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){w&&S(f,k)}),[w]),Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ee,{value:{data:a,setData:s,user:f,setUser:h,repo:l,setRepo:u,values:m,setValues:v},children:n}),Object(Z.jsx)(Y.a,{})]})},te=t(42),re=t(38),ce=l.b.button(h||(h=Object(o.a)(["\n  width: 100%;\n  max-width: 300px;\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0 auto;\n  color: #fff;\n  background: #8752cc;\n\n  padding: 12px;\n  border-radius: 12px;\n\n  cursor: pointer;\n  border: none;\n  outline: none;\n\n  &:focus {\n    transform: scale(0.95);\n  }\n"]))),ae=l.b.form(g||(g=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),se=l.b.input(O||(O=Object(o.a)(["\n  text-align: center;\n  font-size: 1.125rem;\n  font-weight: 400;\n  color: #535353;\n\n  border: none;\n  border-bottom: 4px solid #8752cc;\n  background: none;\n  outline: none;\n\n  padding: 5px;\n  margin: 20px 0;\n"]))),ie=function(e){var n=e.onSubmit,t=e.onChange,r=e.value;return Object(Z.jsxs)(ae,{onSubmit:n,children:[Object(Z.jsx)(se,{type:"text",placeholder:"Enter your user name",minLength:1,onChange:t,value:r,required:!0}),Object(Z.jsx)(ce,{type:"submit",children:"Search"})]})},oe=t(65),le=function(){return Object(oe.a)({},Object(c.useContext)($))},ue=l.b.main(m||(m=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100vw;\n  height: 100vh;\n"]))),je=l.b.img(v||(v=Object(o.a)(["\n  max-width: 197px;\n"]))),be=function(){var e=le(),n=e.user,t=e.setUser,r=e.setValues;return Object(Z.jsxs)(ue,{children:[Object(Z.jsx)(re.a,{title:"Login | GithubSearch"}),Object(Z.jsx)(je,{src:"/assets/svg/logo-vertical.svg",alt:"Logo"}),Object(Z.jsx)(ie,{onSubmit:function(e){r(n),e.preventDefault()},onChange:function(e){t(e.target.value)},value:n})]})},de=l.b.header(w||(w=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 15px;\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),pe=l.b.img(y||(y=Object(o.a)([""]))),xe=function(){var e=le().setValues;return Object(Z.jsxs)(de,{children:[Object(Z.jsx)(i.b,{to:"/profile",children:Object(Z.jsx)(pe,{src:"/assets/svg/logo-horizontal.svg",alt:"Github Search"})}),Object(Z.jsx)(i.b,{to:"/",onClick:function(){e(!1),localStorage.removeItem("users"),localStorage.removeItem("repo")},children:Object(Z.jsx)(pe,{src:"/assets/images/row.png",alt:"Github Search"})})]})},fe=l.b.div(S||(S=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #201f1f;\n  width: 100%;\n  max-width: 300px;\n  padding: 14px;\n  margin: 0 auto;\n"]))),he=l.b.span(k||(k=Object(o.a)(["\n  font-size: 18px;\n  color: #e5e5e5;\n  padding-bottom: 8px;\n"]))),ge=l.b.div(z||(z=Object(o.a)(["\n  padding: 20px 0;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  max-width: 300px;\n  align-items: center;\n  flex-wrap: wrap;\n  @media (max-width: 650px) {\n    justify-content: center;\n  }\n"]))),Oe=l.b.div(C||(C=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),me=l.b.p(I||(I=Object(o.a)(["\n  font-size: 14px;\n  color: #e5e5e5;\n"]))),ve=l.b.span(F||(F=Object(o.a)(["\n  display: flex;\n  gap: 10px;\n  color: #e5e5e5;\n"]))),we=l.b.img(J||(J=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n"]))),ye=function(e){var n=e.id,t=e.href,r=e.title,c=e.description,a=e.star,s=e.forks,i=e.language;return Object(Z.jsxs)(fe,{children:[Object(Z.jsx)(he,{children:r}),Object(Z.jsxs)(Oe,{children:[Object(Z.jsx)(me,{children:c}),Object(Z.jsxs)(ge,{children:[Object(Z.jsxs)(ve,{children:[Object(Z.jsx)(we,{src:"/assets/svg/star.svg",alt:"Star(s)"}),a]}),Object(Z.jsxs)(ve,{children:[Object(Z.jsx)(we,{src:"/assets/svg/fork.svg",alt:"Fork"}),s]}),Object(Z.jsxs)(ve,{children:[Object(Z.jsx)(we,{src:"/assets/svg/tech.svg",alt:"Tech"}),i]}),Object(Z.jsx)(ve,{children:Object(Z.jsx)("a",{href:t,children:Object(Z.jsx)(we,{src:"/assets/svg/link.svg",alt:"Search"})})})]})]})]},n)},Se=l.b.div(L||(L=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 900px;\n  margin: 0 auto;\n\n  padding: 20px;\n\n  @media (max-width: 650px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),ke=l.b.img(T||(T=Object(o.a)(["\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n"]))),ze=l.b.div(R||(R=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ce=l.b.h2(V||(V=Object(o.a)(["\n  color: #8752cc;\n  @media (max-width: 650px) {\n    text-align: center;\n  }\n"]))),Ie=l.b.span(N||(N=Object(o.a)(["\n  color: #e5e5e5;\n\n  @media (max-width: 650px) {\n    text-align: center;\n  }\n"]))),Fe=l.b.div(P||(P=Object(o.a)(["\n  padding: 20px 0;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  max-width: 300px;\n  align-items: center;\n  flex-wrap: wrap;\n  @media (max-width: 650px) {\n    justify-content: center;\n  }\n"]))),Je=l.b.div(U||(U=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 90px;\n  width: 160px;\n  padding: 12px;\n  background: #201f1f;\n"]))),Le=l.b.span(_||(_=Object(o.a)(["\n  font-size: 16px;\n  color: #e5e5e5;\n"]))),Te=l.b.div(D||(D=Object(o.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 70px;\n"]))),Re=l.b.img(E||(E=Object(o.a)([""]))),Ve=l.b.p(G||(G=Object(o.a)(["\n  font-size: 24px;\n  color: #e5e5e5;\n"]))),Ne=l.b.span(q||(q=Object(o.a)(["\n  display: flex;\n  gap: 10px;\n  color: #e5e5e5;\n"]))),Pe=l.b.img(B||(B=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n"]))),Ue=function(e){var n=e.src,t=e.name,r=e.account,c=e.location,a=e.company,s=e.followers,i=e.following,o=e.repos;return Object(Z.jsxs)(Se,{children:[Object(Z.jsx)(ke,{alt:"profile",src:n}),Object(Z.jsxs)(ze,{children:[Object(Z.jsx)(Ce,{children:t}),Object(Z.jsxs)(Ie,{children:["@",r]}),Object(Z.jsxs)(Fe,{children:[Object(Z.jsxs)(Ne,{children:[Object(Z.jsx)(Pe,{src:"/assets/svg/location.svg",alt:"Localiza\xe7\xe3o"}),c]}),Object(Z.jsxs)(Ne,{children:[Object(Z.jsx)(Pe,{src:"/assets/svg/work.svg",alt:"Trabalho"}),a]}),Object(Z.jsxs)(Ne,{children:[Object(Z.jsx)(Pe,{src:"/assets/svg/peoples.svg",alt:"Followers"}),s]}),Object(Z.jsxs)(Ne,{children:[Object(Z.jsx)(Pe,{src:"/assets/svg/peoples-none.svg",alt:"Following"}),i]})]})]}),Object(Z.jsxs)(Je,{children:[Object(Z.jsx)(Le,{children:"Total Repositories"}),Object(Z.jsxs)(Te,{children:[Object(Z.jsx)(Re,{src:"/assets/svg/repo.svg",alt:"Repositories"}),Object(Z.jsx)(Ve,{children:o})]})]})]})},_e=l.b.div(A||(A=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  max-width: 900px;\n"]))),De=function(){var e=le(),n=e.data,t=e.repo;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(xe,{}),Object(Z.jsx)(re.a,{title:"".concat(null===n||void 0===n?void 0:n.name," | Profile")}),Object(Z.jsx)(Ue,{src:null===n||void 0===n?void 0:n.avatar_url,name:null===n||void 0===n?void 0:n.name,account:null===n||void 0===n?void 0:n.login,location:null===n||void 0===n?void 0:n.location,company:null===n||void 0===n?void 0:n.company,followers:null===n||void 0===n?void 0:n.followers,following:null===n||void 0===n?void 0:n.following,repos:null===n||void 0===n?void 0:n.public_repos}),Object(Z.jsx)(_e,{children:null===t||void 0===t?void 0:t.map((function(e){var n=e.name,t=e.description,r=e.language,c=e.stargazers_count,a=e.forks,s=e.html_url,i=e.id;return Object(Z.jsx)(ye,{title:n,description:t,star:c,forks:a,language:r,href:s},i)}))})]})},Ee=l.b.div(H||(H=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 50px;\n  height: 100vh;\n  max-width: 900px;\n  margin: 0 auto;\n"]))),Ge=l.b.h1(K||(K=Object(o.a)(["\n  font-size: 36px;\n  color: #8752cc;\n  font-weight: 700;\n  text-align: center;\n"]))),qe=l.b.p(M||(M=Object(o.a)(["\n  font-size: 18px;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n"]))),Be=function(){var e=Object(X.f)().push;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(Ee,{children:[Object(Z.jsx)(Ge,{children:"Ooops.. 404!"}),Object(Z.jsx)("img",{src:"/assets/images/not-found.png",alt:"error"}),Object(Z.jsx)(qe,{children:"Parece que algo de errado aconteceu! Volte para a tela inicial e tente novamente"}),Object(Z.jsx)(ce,{onClick:function(){return e("/")},children:"Voltar para login!"})]})})},Ae=function(){var e=Object(X.g)();return Object(te.useTransition)(e,{from:{opacity:0,transform:"translate(100%,0)"},enter:{opacity:1,transform:"translate(0%,0)"},leave:{opacity:0,transform:"translate(-50%,0)"}})((function(e,n){return Object(Z.jsx)(te.animated.div,{style:e,children:Object(Z.jsxs)(X.c,{location:n,children:[Object(Z.jsx)(X.a,{path:"/",exact:!0,component:be}),Object(Z.jsx)(X.a,{path:"/profile",component:De}),Object(Z.jsx)(X.a,{component:Be})]})})}))},He=function(){return Object(Z.jsx)(i.a,{children:Object(Z.jsxs)(ne,{children:[Object(Z.jsx)(u,{}),Object(Z.jsx)(Ae,{})]})})};s.a.render(Object(Z.jsx)(He,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.271168f9.chunk.js.map