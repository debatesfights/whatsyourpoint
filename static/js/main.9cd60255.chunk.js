(this.webpackJsonpwhatsyourpoint=this.webpackJsonpwhatsyourpoint||[]).push([[0],{55:function(e,t,a){e.exports=a(72)},60:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),u=a.n(c),o=(a(60),a(19)),l=a(6),i=a(17),s=a.n(i),m=a(24),f=a(8),p=a(41),g=a.n(p);a(62),a(64),a(66);g.a.initializeApp({apiKey:"AIzaSyCzSZFG-HLeakTSP0X_CJGXs6kBRRxasOQ",authDomain:"debates-3f413.firebaseapp.com",databaseURL:"https://debates-3f413.firebaseio.com",projectId:"debates-3f413",storageBucket:"debates-3f413.appspot.com",messagingSenderId:"364331969790",appId:"1:364331969790:web:5359c5e81b7f5cb4f749af"});var h=g.a.auth(),b=g.a.database(),d=r.a.createContext(null),E=function(){var e=Object(n.useContext)(d),t=e.login,a=e.register,c=e.error,u=e.setError,o=Object(n.useState)("wyp3@gmail.com"),i=Object(f.a)(o,2),p=i[0],g=i[1],h=Object(n.useState)("Wypwyp12"),b=Object(f.a)(h,2),E=b[0],v=b[1],O=Object(l.f)();Object(n.useEffect)((function(){return u("")}),[]);var j=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,t(a,n);case 3:"login"===t&&!c&&O.goBack();case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:p,onChange:function(e){return g(e.target.value)}}),r.a.createElement("input",{value:E,onChange:function(e){return v(e.target.value)}}),r.a.createElement("button",{id:"login",autoFocus:!0,onClick:function(){return j(t,p,E)}},"Login"),r.a.createElement("button",{onClick:function(){return j(a,p,E)}},"Register"),r.a.createElement("div",{className:"error"},c))},v=a(34),O=a(22),j=a(51),w=a.n(j),k=a(106),y=a(100),C=a(107);function x(e){var t=e.message,a=r.a.useState(!0),n=Object(f.a)(a,2),c=n[0],u=n[1],o=Object(l.f)(),i=t||"Please login first";return r.a.createElement(k.a,{open:c,onClose:function(){return u(!1)}},r.a.createElement(C.a,null,i),r.a.createElement(y.a,null,r.a.createElement("button",{onClick:function(){return o.goBack()},color:"primary"},"Go back"),r.a.createElement("button",{onClick:function(){return o.push("/login")},color:"primary",autoFocus:!0},"Login")))}var S=function(){var e=Object(n.useContext)(d),t=e.username,a=e.create,c={title:"",manifest:""},u=Object(l.f)(),o=Object(n.useState)(c),i=Object(f.a)(o,2),s=i[0],m=i[1],p=function(e){var t=e.target,a=t.name,n=t.value;m(Object(O.a)(Object(O.a)({},s),{},Object(v.a)({},a,n)))};return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(x,null),r.a.createElement("form",null,r.a.createElement("p",null,"Make your point:"),Object.keys(c).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("input",{className:"new_message",onChange:p,name:e,placeholder:e,value:s[e]}))}))),r.a.createElement("button",{onClick:function(){a(Object(O.a)(Object(O.a)({},s),{},{username:t,status:0,date:w()(new Date).format("DD/MM/YYYY HH:mm:ss")})),u.push("/")}},"Save"))},N=a(39),R=a(102),I=a(105),L=a(101),B=a(103),P=a(104),F=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],u=Object(n.useContext)(d),o=u.getChatsRef,i=u.getChatRef,s=u.username,m=o();Object(n.useEffect)((function(){m.on("child_added",(function(e){var t=Object(O.a)(Object(O.a)({},e.val()),{},{id:e.key});c((function(e){return[].concat(Object(N.a)(e),[t])}))}))}),[]);var p=["title","manifest","username","challenger","date","views"],g=Object(l.f)(),h=function(e){var t=e.chat,a=e.path,n=e.icon;return r.a.createElement(L.a,{align:"left"},r.a.createElement("button",{className:a,onClick:function(){var e=void 0!==t.views?t.views+1:1;return"peep"===a&&i(t.id).update({views:e}),g.push("".concat(a,"/").concat(t.id))}},r.a.createElement("span",null,n)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(B.a,null,r.a.createElement(P.a,{key:"i"},p.map((function(e){return r.a.createElement(L.a,{key:e,align:"left"},e,"\xa0")})))),r.a.createElement(I.a,null,a.map((function(e){return r.a.createElement(P.a,{key:e.id},p.map((function(t){return r.a.createElement(L.a,{key:t,align:"left"},e[t])})),r.a.createElement(h,{icon:"\ud83d\udc40",path:"peep",chat:e}),s&&(!e.challenger||e.challenger===s||e.username===s)&&r.a.createElement(h,{icon:"\u2694\ufe0f",path:"onechat",chat:e}))})))))},M=function(e){var t=e.peep,a=window.location.pathname.split("/")[window.location.pathname.split("/").length-1],c=Object(n.useState)([]),u=Object(f.a)(c,2),o=u[0],l=u[1],i=Object(n.useContext)(d),s=i.getChatRefMessages,m=i.username,p=i.getChatRef,g=s(a),h=p(a),b=Object(n.useState)(),E=Object(f.a)(b,2),v=E[0],O=E[1],j=Object(n.useState)(),w=Object(f.a)(j,2),k=w[0],y=w[1];Object(n.useEffect)((function(){y(document.getElementById("bottom")),k&&k.scrollIntoView()}),[k,y]),Object(n.useEffect)((function(){h.on("value",(function(e){return O(e.val())})),g.on("child_added",(function(e){return l((function(t){return[].concat(Object(N.a)(t),[e.val()])}))}))}),[]);var C=function(e){var t="message";return t=e===v.username?t+" blue":t+" red"},S=r.a.createElement("p",null,"loading....");return o&&v&&(S=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"titles"},v.manifest),r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{className:C(e.user),key:t},e.text)}))),r.a.createElement("div",null,r.a.createElement("spam",{id:"bottom"})),!t&&r.a.createElement("input",{className:"new_message",onKeyDown:function(e){"Enter"===e.key&&(g.push({text:e.target.value,user:m}),e.target.value="",!v.challenger&&h.update({status:1,challenger:m}))}}),!t&&m===v.username&&0===v.status&&r.a.createElement(x,{message:"You cant start debate with yourself"}))),t||m||(S=r.a.createElement(x,{message:"Please login"})),S},Y=function(e){var t=e.user,a=e.logout;return r.a.createElement("nav",null,r.a.createElement(o.b,{activeClassName:"selectedLink",exact:!0,to:"/"},"Home "),r.a.createElement(o.b,{activeClassName:"selectedLink",to:"/new"},"New"),t&&r.a.createElement("p",{className:"navbar-right"},r.a.createElement("div",{className:"navbar-right-el"},t),r.a.createElement("button",{id:"logout",className:"navbar-right-el",onClick:function(){return a()}},"Logout")),!t&&r.a.createElement(o.b,{id:"loginnav",exact:!0,className:"navbar-right",activeClassName:"selectedLink",to:"/login"},"Login"))},_=function(){var e=function(){var e=Object(n.useState)(),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),u=Object(f.a)(c,2),o=u[0],l=u[1];return{login:function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,h.signInWithEmailAndPassword(t,a).catch((function(e){return l(e.message)}));case 3:h.currentUser&&r(h.currentUser.email);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),logout:function(){return r(""),h.signOut()},register:function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,h.createUserWithEmailAndPassword(t,a).catch((function(e){return l(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),isInitialized:function(){return new Promise((function(e){h.onAuthStateChanged(e)}))},username:a,create:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.ref("chats").push(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getChatsRef:function(){return b.ref("chats").orderByKey().limitToLast(1e3)},getChatRefMessages:function(e){return b.ref("chats").child(e).child("messages")},error:o,getChatRef:function(e){return b.ref("chats").child(e)},setError:l}}();Object(n.useEffect)((function(){e.isInitialized()}),[]);var t=e.username,a=e.logout;return r.a.createElement(o.a,null,r.a.createElement("h2",{className:"main_title"},"Make Your Point"),r.a.createElement(Y,{user:t,logout:a}),r.a.createElement(l.c,null,r.a.createElement(d.Provider,{value:e},r.a.createElement(l.a,{exact:!0,path:"/",component:F}),r.a.createElement(l.a,{exact:!0,path:"/login",component:E}),r.a.createElement(l.a,{exact:!0,path:"/new",component:S}),r.a.createElement(l.a,{exact:!0,path:"/oneChat/:id",render:function(e){return r.a.createElement(M,Object.assign({},e,{peep:!1}))}}),r.a.createElement(l.a,{exact:!0,path:"/peep/:id",render:function(e){return r.a.createElement(M,Object.assign({},e,{peep:!0}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.9cd60255.chunk.js.map