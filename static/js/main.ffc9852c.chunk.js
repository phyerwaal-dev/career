(this.webpackJsonpcareer_guidance=this.webpackJsonpcareer_guidance||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),i=a.n(o),s=(a(67),a(16)),l=a(17),c=a(20),m=a(19),u=a(3),d=(a(90),a(26)),p=a.n(d),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.handleTogglerClick=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.height="65px"}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.height="auto"}},{key:"render",value:function(){var e=this.state.collapsed,t=r.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.handleTogglerClick});return r.a.createElement("div",{id:"caltoaction"},r.a.createElement("div",{className:"fadeInDown"},r.a.createElement(u.o,{color:"secondary-color",style:{marginTop:"2rem"},light:!0,expand:"md",fixed:"top",scrolling:!0,transparent:!0},r.a.createElement(u.h,null,r.a.createElement(u.p,{href:"/career/"},r.a.createElement("strong",null,"APSIT Career")),r.a.createElement(u.r,{onClick:this.handleTogglerClick}),r.a.createElement(u.g,{isOpen:e,navbar:!0},r.a.createElement(u.q,{right:!0},r.a.createElement(u.m,{active:!0},r.a.createElement(u.n,{to:"/career/"},"Home")),r.a.createElement(u.m,null,r.a.createElement(u.n,{to:"/career/dev"},"Developers")))))),e&&t),r.a.createElement(u.w,{src:p.a},r.a.createElement(u.h,{style:{height:"100%",width:"100%",paddingTop:"12rem"},className:"d-flex justify-content-center align-items-center"},r.a.createElement(u.u,null,r.a.createElement(u.f,{sm:"4",md:"12",className:"mb-4 text-center"},r.a.createElement("h1",{className:"display-4 font-weight-bold mb-0 pt-md-5 pt-5 fadeInDown",style:{animationDelay:".5s"}},"Find Your Interested Branch"),r.a.createElement("h4",{className:"pt-md-1 pt-sm-2 pt-1 pb-md-3 pb-sm-3 pb-3 fadeInDown",style:{animationDelay:".7s"}},"Confusion is ",r.a.createElement("strong",{className:"highlight"},"Temperary"),", Interest is ",r.a.createElement("strong",{className:"highlight"},"Permanent")),r.a.createElement(u.l,{to:"/career/questions"},r.a.createElement(u.b,{color:"success",className:"fadeInDown",style:{animationDelay:"1s"}},"Let Us Help"))))),r.a.createElement(u.i,null,r.a.createElement("div",{className:"footer-copyright text-center",style:{paddingTop:"8rem"}},r.a.createElement(u.h,{fluid:!0,className:"fadeInDown",style:{animationDelay:"1.2s"}},"\xa9 ",(new Date).getFullYear()," Phyerwaal Dev")))))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(h,null))},f=a(119),v=a(120),E=(a(91),a(58)),y=a.n(E);function b(){return r.a.createElement("section",{id:"dev-section"},r.a.createElement("div",{className:"header",align:"center"},r.a.createElement("p",{align:"center",className:"dev"},"Developed By"),r.a.createElement("img",{src:y.a,alt:"Phyerwaal_Dev"}),r.a.createElement(f.a,{className:"dev-details"},r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Tejas Raibagi")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Prasad Jadhav")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Sujoy Dev")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Aseem Godambe")))))}var w=a(24),k=a.n(w),q=a(32),D=(a(93),a(111),a(33)),N=a(59),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1,msg:"",error:0,selection:D.map((function(e,t){return{id:e.id,val:null}}))},e.handleTogglerClick=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e.onClick=function(t){return function(){e.setState({radio:t})}},e.onChoose=function(){var t=Object(q.a)(k.a.mark((function t(a,n){var r,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id:parseInt(n.target.id),val:a},o=[],t.next=4,e.state.selection.map((function(e,t){e.id==r.id?o.push(r):o.push({id:e.id,val:e.val})}));case 4:return t.next=6,e.setState({selection:o});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.validate=Object(q.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({error:0,msg:""});case 2:a=0;case 3:if(!(a<=e.state.selection.length-1)){t.next=19;break}if(null==e.state.selection[a].val){t.next=10;break}return console.log(e.state.selection[a].id+" : "+e.state.selection[a].val),t.next=8,e.setState({msg:""});case 8:t.next=16;break;case 10:return console.log(" Value is Null for "+a),console.log(e.state.selection),t.next=14,e.setState({msg:"Please fill all the questions."});case 14:return t.next=16,e.setState({error:e.state.error+1});case 16:a++,t.next=3;break;case 19:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.height="65px"}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.height="auto"}},{key:"render",value:function(){var e=this,t=this.state.collapsed,a=r.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"white"},onClick:this.handleTogglerClick});return r.a.createElement("div",{id:"questions"},r.a.createElement("div",{className:"fadeInDown"},r.a.createElement(u.o,{color:"secondary-color",style:{marginTop:"2rem"},light:!0,expand:"md",scrolling:!0,transparent:!0},r.a.createElement(u.h,null,r.a.createElement(u.p,{href:"/career/"},r.a.createElement("strong",null,"APSIT Career")),r.a.createElement(u.r,{onClick:this.handleTogglerClick}),r.a.createElement(u.g,{isOpen:t,navbar:!0},r.a.createElement(u.q,{right:!0},r.a.createElement(u.m,null,r.a.createElement(u.n,{to:"/career/"},"Home")),r.a.createElement(u.m,null,r.a.createElement(u.n,{to:"/career/dev"},"Developers")))))),t&&a),r.a.createElement(u.w,{src:p.a},r.a.createElement(u.h,{style:{height:"100%",width:"100%",paddingTop:"5rem"},className:"d-flex justify-content-center align-items-center"},r.a.createElement(u.u,null,r.a.createElement("h1",{className:"display-10 font-weight-bold question-header fadeInDown",style:{animationDelay:".2s"}},"QUESTIONS"),r.a.createElement(u.c,{style:{width:"100%"}},D.map((function(t,a){return r.a.createElement("div",{className:"card fadeInDown",style:{animationDelay:".4s"}},r.a.createElement(u.d,null,r.a.createElement(u.e,null,"Q",a+1,". ",t.question),N.map((function(n,o){return r.a.createElement(u.h,{className:"mt-3"},r.a.createElement(u.k,{required:!0,id:t.id,onClick:e.onChoose.bind(t.id,n.val),checked:e.state.selection[a].val===n.val,type:"radio",label:n.opt}))}))),r.a.createElement("hr",null))}))),r.a.createElement("div",{className:"send-btn fadeInDown",style:{animationDelay:"1s"}},r.a.createElement("h5",{className:"error-msg justify-content-center align-items-center"},this.state.msg),r.a.createElement(u.b,{color:"success",href:"/career/results"},"SEND ANSWER"))))))}}]),a}(r.a.Component),C=a(60),S=a.n(C),O=(a(113),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={options:{colors:["#121212","#18b64b","#e68a8c","#df5f6c","#dbb593"],plotOptions:{bar:{columnWidth:"45%",distributed:!0}},chart:{toolbar:{show:!1},id:"basic-bar"},xaxis:{categories:["IT","Computers","EXTC","Mechanical","Civil"]}},series:[{name:"Possibilities",data:[100,40,45,50,49]}]},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app",align:"center"},r.a.createElement(v.a,{className:"justify-content-center align-items-center"},r.a.createElement("h1",{className:"header-title"},"Results")),r.a.createElement(v.a,null,r.a.createElement("div",{className:"mixed-chart"},r.a.createElement(S.a,{options:this.state.options,series:this.state.series,type:"bar",width:"500"}))))}}]),a}(n.Component)),j=a(21),T=a(7);var I=function(){return r.a.createElement(j.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/career/",component:g}),r.a.createElement(T.a,{exact:!0,path:"/career/dev",component:b}),r.a.createElement(T.a,{exact:!0,path:"/career/questions",component:x}),r.a.createElement(T.a,{exact:!0,path:"/career/results",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(114);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports=a.p+"static/media/Web_bg.f2e4e6ab.png"},33:function(e){e.exports=JSON.parse('[{"id":"1","question":"Write logic to Make bank transactions automated"},{"id":"2","question":"Develop Games / Software"},{"id":"3","question":"To know how the internet works, build websites"},{"id":"4","question":"Develop, Load and manage computer software over a large computer network"},{"id":"5","question":"Compute and record statistical and other numerical data,to find out a suitable solution"},{"id":"6","question":"Maintain/develop cloud infrastructure like AWS, GCP"},{"id":"7","question":"Build an  operating system like Windows, MacOS, Android, iOS"},{"id":"8","question":"Build motherboards for various systems"},{"id":"9","question":"Identify objects from images using machine learning"},{"id":"10","question":"Writing computer programs for various purposes"},{"id":"11","question":"Develop satellite communication systems"},{"id":"12","question":"Design electronic control systems for vehicles, airplanes, ships, rockets"},{"id":"13","question":"Learn about circuit boards, processors, chips, electronic system design"},{"id":"14","question":"Design robotic control units"},{"id":"15","question":"Design electronic home automation systems"},{"id":"16","question":"Understand how the mobile and other telecommunication devices works"},{"id":"17","question":"Develop power supply tools and equipment"},{"id":"18","question":"Make a self driving car, Build robotic parts"},{"id":"19","question":"Repair/create machines, Create a mechanism to reduce water pollution from industry"},{"id":"20","question":"Assemble/build Products in a manufacturing unit"},{"id":"21","question":"Create an exoskeleton to increase strength, (like iron man)"},{"id":"22","question":"Build a remote controlled plane / quadcopter / car"},{"id":"23","question":"Build a rocket engines for interstellar travel like elon musk"},{"id":"24","question":"Develop machinery to make tasks easier, or automate them"},{"id":"25","question":"Visualize plans for an open space.(E.g. being able to imagine how a room will look if the furniture is rearranged)"},{"id":"26","question":"Try to visualize architectural structure by looking at any building/bridges/roads etc."},{"id":"27","question":"Determine efficient plans/methods for water management and conservation, Finding better water irrigation methods"},{"id":"28","question":"Finding ways to keep development in process with least deforestation"},{"id":"29","question":"To research a new ways for making roads more durable"},{"id":"30","question":"Gain Knowledge of materials, methods, and the tools involved in the construction or repair of houses, buildings, or other structures such as highways and roads"},{"id":"31","question":"Knowledge of design techniques, tools, and principles involved in production of precision technical plans, blueprints, drawings, and models"}]')},58:function(e,t,a){e.exports=a.p+"static/media/phyerwaal_dev_logo_final.fad90657.png"},59:function(e){e.exports=JSON.parse('[{"val":0,"opt":"Strongly Agree"},{"val":1,"opt":"Agree"},{"val":2,"opt":"Neutral"},{"val":3,"opt":"Disagree"},{"val":4,"opt":"Strongly Disagree"}]')},62:function(e,t,a){e.exports=a(115)},67:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.ffc9852c.chunk.js.map