(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(13),i=n.n(a),o=(n(40),n(8)),s=n.n(o),u=n(15),j=n(5),l=n(14),d=n.p+"static/media/image.f5a54656.jpg",b=n.p+"static/media/image2.eb63b592.jpg",f=n.p+"static/media/image3.b6992aba.jpg",p=n.p+"static/media/rawdata.08a7002e.txt",m=(n(42),n(33)),O=n(20),h=(n(43),n(4)),x=function(e){var t=Object(c.useState)(0),n=Object(j.a)(t,2),r=n[0],a=n[1],i=Object(O.useTransition)(r,{key:r,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:3e3}});return Object(c.useEffect)((function(){var t=setInterval((function(){return a((function(t){return(t+1)%e.length}))}),4e3);return function(){return clearTimeout(t)}}),[]),Object(h.jsx)("div",{children:i((function(t,n){return Object(h.jsx)(O.animated.img,{className:"imageBlock dropShadow",src:e[n],style:Object(m.a)({},t)})}))})},g=n(27),w=(n(45),function(e){return Object(h.jsx)("div",{className:"text-items-center",children:Object(h.jsx)(g.Spring,{from:{opacity:0,color:"#686868"},to:[{opacity:.5,color:"#82B8FFC"},{opacity:.75,color:"#828FFC"},{opacity:1,color:"#686868"},{opacity:1,color:"#686868"},{opacity:1,color:"#686868"},{opacity:1,color:"#686868"},{opacity:1,color:"#686868"},{opacity:1,color:"#686868"}],children:function(t){return Object(h.jsx)(g.animated.div,{className:"textBox",style:t,children:e})}})})}),v=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c,r,a,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(c=e.sent).ok){e.next=7;break}return e.next=6,c.text();case 6:n=e.sent;case 7:if(n){e.next=9;break}throw Error("File Buffer is empty!");case 9:return r=n.toString().split("\n"),a=0,i=[],o={prompt:"",images:[],answer:"",intermission:""},r.forEach((function(e){switch(a%4){case 0:o.prompt=y("prompt:",e,a);break;case 1:o.images=S("images:",e,a);break;case 2:o.answer=y("answer:",e,a);break;case 3:o.intermission=y("intermission:",e,a),i.push(o),o={prompt:"",images:[],answer:"",intermission:""};break;default:throw Error("Line could not be parsed correctly...")}a++})),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t,n){var c=t.replace(e,"");if(c.length===t.length)throw new Error("Expected '".concat(e,"' keyword in line ").concat(n," but didn't."));return c=c.trim()},S=function(e,t,n){var c=t.replace(e,"");if(c=c.trim(),"images:"!==e)throw new Error("Expected '".concat(e,"' keyword in line ").concat(n," but didn't."));var r=c.split(",");return r.forEach((function(e){e=e.trim()})),r},k=v,E=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(j.a)(a,2),o=i[0],m=i[1],O=Object(c.useState)(!0),g=Object(j.a)(O,2),v=g[0],y=g[1],S=Object(c.useState)(0),E=Object(j.a)(S,2),N=E[0],B=E[1],C=Object(c.useState)(!1),F=Object(j.a)(C,2),T=F[0],L=F[1],P=[d,b,f],I=Object(c.useState)([]),J=Object(j.a)(I,2),q=J[0],D=J[1],H=Object(c.useState)(P),M=Object(j.a)(H,2),W=M[0],Y=M[1],z=Object(c.useState)([]),A=Object(j.a)(z,2),G=A[0],K=A[1],Q=Object(c.useState)("There is nothing in the queue..."),R=Object(j.a)(Q,2),U=R[0],V=R[1],X=Object(c.useState)("Welcome to the Scavenger Hunt, click continue to Start!"),Z=Object(j.a)(X,2),$=Z[0],_=Z[1],ee=Object(c.useState)(),te=Object(j.a)(ee,2),ne=te[0],ce=te[1];Object(c.useEffect)((function(){n||(r(!0),k(p).then((function(e){D(e)})))}),[n]),Object(c.useEffect)((function(){0!==q.length&&(ae(),y(!1))}),[q]);var re=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ae=function(){"undefined"!=typeof q&&(V(q[N].prompt),K(q[N].images))},ie=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,re(500);case 3:y(!1),_(U),Y(G),m(!1),V(q[N].intermission);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"d-flex align-items-center min-vh-100",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)(l.f,{children:[Object(h.jsx)(l.b,{className:"m-4",id:"imageBox",children:x(W)}),Object(h.jsx)(l.b,{className:"m-4",id:"textBox",children:w($)})]}),T?null:v?Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(l.g,{children:"Loading..."})}):o?Object(h.jsx)(l.f,{children:Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(l.a,{className:"continueButton dropShadowBtn",onClick:function(){return ie()},children:"Continue"})})}):Object(h.jsx)(l.f,{children:Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(l.c,{children:Object(h.jsxs)(l.e,{className:"continueButton",children:[Object(h.jsx)(l.d,{id:"inputPassword",name:"password",placeholder:"answer",type:"password",value:ne,onChange:function(e){return ce(e.target.value)}}),Object(h.jsx)(l.a,{onClick:function(){ne===q[N].answer?(_(U),N+1==q.length?L(!0):(V(q[N+1].prompt),K(q[N+1].images),B(N+1),ce(""),m(!0))):alert("You guessed wrong nerd!")},children:">"})]})})})})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.7f673b4e.chunk.js.map