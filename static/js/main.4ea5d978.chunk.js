(this.webpackJsonpcareer_guidance=this.webpackJsonpcareer_guidance||[]).push([[0],{118:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i),s=(a(75),a(27)),l=a(28),c=a(31),u=a(30),d=a(3),m=(a(98),a(29)),p=a.n(m),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.handleTogglerClick=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.height="65px"}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.height="auto"}},{key:"render",value:function(){var e=this.state.collapsed,t=r.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.handleTogglerClick});return r.a.createElement("div",{id:"caltoaction"},r.a.createElement("div",{className:"fadeInDown"},r.a.createElement(d.o,{color:"secondary-color",style:{marginTop:"2rem"},light:!0,expand:"md",fixed:"top",scrolling:!0,transparent:!0},r.a.createElement(d.h,null,r.a.createElement(d.p,{href:"/career/"},r.a.createElement("strong",null,"APSIT Career")),r.a.createElement(d.r,{onClick:this.handleTogglerClick}),r.a.createElement(d.g,{isOpen:e,navbar:!0},r.a.createElement(d.q,{right:!0},r.a.createElement(d.m,{active:!0},r.a.createElement(d.n,{to:"/career/"},"Home")),r.a.createElement(d.m,null,r.a.createElement(d.n,{to:"/career/dev"},"Developers")))))),e&&t),r.a.createElement(d.w,{src:p.a},r.a.createElement(d.h,{style:{height:"100%",width:"100%",paddingTop:"12rem"},className:"d-flex justify-content-center align-items-center"},r.a.createElement(d.u,null,r.a.createElement(d.f,{sm:"4",md:"12",className:"mb-4 text-center"},r.a.createElement("h1",{className:"display-4 font-weight-bold mb-0 pt-md-5 pt-5 fadeInDown",style:{animationDelay:".5s"}},"Find Your Interested Branch"),r.a.createElement("h4",{className:"pt-md-1 pt-sm-2 pt-1 pb-md-3 pb-sm-3 pb-3 fadeInDown",style:{animationDelay:".7s"}},"Confusion is ",r.a.createElement("strong",{className:"highlight"},"Temperary"),", Interest is ",r.a.createElement("strong",{className:"highlight"},"Permanent")),r.a.createElement(d.l,{to:"/career/questions"},r.a.createElement(d.b,{color:"success",className:"fadeInDown",style:{animationDelay:"1s"}},"Let Us Help"))))),r.a.createElement(d.i,null,r.a.createElement("div",{className:"footer-copyright text-center",style:{paddingTop:"8rem"}},r.a.createElement(d.h,{fluid:!0,className:"fadeInDown",style:{animationDelay:"1.2s"}},"\xa9 ",(new Date).getFullYear()," Phyerwaal Dev")))))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(h,null))},f=a(127),v=a(128),E=(a(99),a(63)),y=a.n(E);function b(){return r.a.createElement("section",{id:"dev-section"},r.a.createElement("div",{className:"header",align:"center"},r.a.createElement("p",{align:"center",className:"dev"},"Developed By"),r.a.createElement("img",{src:y.a,alt:"Phyerwaal_Dev"}),r.a.createElement(f.a,{className:"dev-details"},r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Tejas Raibagi")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Prasad Jadhav")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Sujoy Dev")),r.a.createElement(v.a,{sm:12,md:3},r.a.createElement("h1",{className:"name"},"Aseem Godambe")))))}var w=a(24),q=a.n(w),k=a(37),D=a(64),S=a.n(D),N=(a(118),a(38)),x=a(39),O=a(17),C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleTogglerClick=function(){var e=n.state.collapsed;n.setState({collapsed:!e})},n.onClick=function(e){return function(){n.setState({radio:e})}},n.onChoose=function(){var e=Object(k.a)(q.a.mark((function e(t,a){var r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:parseInt(a.target.id),val:t,question:n.state.selection[parseInt(a.target.id)-1].question,select:x[t].opt},i=[],e.next=4,n.state.selection.map((function(e,t){e.id==r.id?i.push(r):i.push({id:e.id,val:e.val,question:e.question,select:e.select})}));case 4:return e.next=6,n.setState({selection:i});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.validate=Object(k.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.setLoading();case 2:return e.next=4,n.setState({error:0,msg:""});case 4:t=0;case 5:if(!(t<=n.state.selection.length-1)){e.next=18;break}if(null==n.state.selection[t].val){e.next=11;break}return e.next=9,n.setState({msg:""});case 9:e.next=15;break;case 11:return e.next=13,n.setState({msg:"Please fill all the questions."});case 13:return e.next=15,n.setState({error:n.state.error+1});case 15:t++,e.next=5;break;case 18:0==n.state.error&&S.a.post("https://phyerwaal-dev-career.herokuapp.com/submit-data",{data:n.state.selection}).then((function(e){n.props.storeResponse(e.data),console.log(n.props.loading),n.props.history.push("/career/results")})).catch((function(e){}));case 19:case"end":return e.stop()}}),e)}))),n.state={loading:!1,collapsed:!1,msg:"",error:0,selection:N.map((function(e,t){return{id:e.id,question:e.question,val:null,select:null}}))},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("nav").style.height="65px"}},{key:"componentWillUnmount",value:function(){document.querySelector("nav").style.height="auto"}},{key:"render",value:function(){var e=this,t=this.state.collapsed,a=r.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"white"},onClick:this.handleTogglerClick});return r.a.createElement("div",{id:"questions"},r.a.createElement("div",{className:"fadeInDown"},r.a.createElement(d.o,{color:"secondary-color",style:{marginTop:"2rem"},light:!0,expand:"md",scrolling:!0,transparent:!0},r.a.createElement(d.h,null,r.a.createElement(d.p,{href:"/career/"},r.a.createElement("strong",null,"APSIT Career")),r.a.createElement(d.r,{onClick:this.handleTogglerClick}),r.a.createElement(d.g,{isOpen:t,navbar:!0},r.a.createElement(d.q,{right:!0},r.a.createElement(d.m,null,r.a.createElement(d.n,{to:"/career/"},"Home")),r.a.createElement(d.m,null,r.a.createElement(d.n,{to:"/career/dev"},"Developers")))))),t&&a),r.a.createElement(d.w,{src:p.a},r.a.createElement(d.h,{style:{height:"100%",width:"100%",paddingTop:"5rem"},className:"d-flex justify-content-center align-items-center"},r.a.createElement(d.u,null,r.a.createElement("h1",{className:"display-10 font-weight-bold question-header fadeInDown",style:{animationDelay:".2s"}},"QUESTIONS"),r.a.createElement(d.c,{style:{width:"100%"}},N.map((function(t,a){return r.a.createElement("div",{className:"card fadeInDown",style:{animationDelay:".4s"}},r.a.createElement(d.d,null,r.a.createElement(d.e,null,"Q",a+1,". ",t.question),x.map((function(n,i){return r.a.createElement(d.h,{className:"mt-3"},r.a.createElement(d.k,{key:i,required:!0,id:t.id,onClick:e.onChoose.bind(t.id,n.val),checked:e.state.selection[a].val===n.val,type:"radio",label:n.opt}))}))),r.a.createElement("hr",null))}))),r.a.createElement("div",{className:"send-btn fadeInDown",style:{animationDelay:"1s"}},r.a.createElement("h5",{className:"error-msg justify-content-center align-items-center"},this.state.msg),r.a.createElement(d.b,{color:"success",onClick:this.validate},"SEND ANSWER"))))))}}]),a}(r.a.Component),T=Object(O.b)((function(e){return{loading:e.loading}}),(function(e){return{storeResponse:function(t){e({type:"RES_SUCCESS",response:t})},setLoading:function(){e({type:"SET_LOADING"})}}}))(C),j=a(68),I=a(66),_=a.n(I),A=(a(121),Object(O.b)((function(e){return{options:e.options,series:e.series}}))((function(e){var t=e.options,a=e.series,i=Object(n.useState)(),o=Object(j.a)(i,2);o[0],o[1];return r.a.createElement("div",{className:"app",align:"center"},r.a.createElement(v.a,{className:"justify-content-center align-items-center"},r.a.createElement("h1",{className:"header-title"},"Results")),r.a.createElement(v.a,null,r.a.createElement("div",{className:"mixed-chart"},a?r.a.createElement(_.a,{options:t,series:a,type:"bar",width:"500"}):null)))}))),W=a(18),P=a(7);var L=function(){return r.a.createElement(W.a,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/career/",component:g}),r.a.createElement(P.a,{exact:!0,path:"/career/dev",component:b}),r.a.createElement(P.a,{exact:!0,path:"/career/questions",component:T}),r.a.createElement(P.a,{exact:!0,path:"/career/results",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(122);var R=a(19),U=a(25),B={options:{colors:["#121212","#18b64b","#e68a8c","#df5f6c","#dbb593"],plotOptions:{bar:{columnWidth:"45%",distributed:!0}},chart:{toolbar:{show:!1},id:"basic-bar"},xaxis:{categories:["Civil","Computers","EXTC","IT","Mechanical"]}},series:[{name:"Possibilities",data:[]}],loading:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if("RES_SUCCESS"==t.type){var a=t.response.probabilities.map((function(e,t){return Math.round(100*e)}));return Object(U.a)(Object(U.a)({},e),{},{series:[{name:"Probability % ",data:a}],loading:!1})}if("SET_LOADING"==t.type){e.loading;return Object(U.a)(Object(U.a)({},e),{},{loading:!0})}return e},G=[a(67).a],F=Object(R.d)(M,Object(R.c)(R.a.apply(void 0,G),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(O.a,{store:F},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports=a.p+"static/media/Web_bg.f2e4e6ab.png"},38:function(e){e.exports=JSON.parse('[{"id":"1","question":"Write logic to Make bank transactions automated"},{"id":"2","question":"Develop Games / Software"},{"id":"3","question":"To know how the internet works, build websites"},{"id":"4","question":"Develop, Load and manage computer software over a large computer network"},{"id":"5","question":"Compute and record statistical and other numerical data,to find out a suitable solution"},{"id":"6","question":"Maintain/develop cloud infrastructure like AWS, GCP"},{"id":"7","question":"Build an  operating system like Windows, MacOS, Android, iOS"},{"id":"8","question":"Build motherboards for various systems"},{"id":"9","question":"Identify objects from images using machine learning"},{"id":"10","question":"Writing computer programs for various purposes"},{"id":"11","question":"Develop satellite communication systems"},{"id":"12","question":"Design electronic control systems for vehicles, airplanes, ships, rockets"},{"id":"13","question":"Learn about circuit boards, processors, chips, electronic system design"},{"id":"14","question":"Design robotic control units"},{"id":"15","question":"Design electronic home automation systems"},{"id":"16","question":"Understand how the mobile and other telecommunication devices works"},{"id":"17","question":"Develop power supply tools and equipment"},{"id":"18","question":"Make a self driving car, Build robotic parts"},{"id":"19","question":"Repair/create machines, Create a mechanism to reduce water pollution from industry"},{"id":"20","question":"Assemble/build Products in a manufacturing unit"},{"id":"21","question":"Create an exoskeleton to increase strength, (like iron man)"},{"id":"22","question":"Build a remote controlled plane / quadcopter / car"},{"id":"23","question":"Build a rocket engines for interstellar travel like elon musk"},{"id":"24","question":"Develop machinery to make tasks easier, or automate them"},{"id":"25","question":"Visualize plans for an open space.(E.g. being able to imagine how a room will look if the furniture is rearranged)"},{"id":"26","question":"Try to visualize architectural structure by looking at any building/bridges/roads etc."},{"id":"27","question":"Determine efficient plans/methods for water management and conservation, Finding better water irrigation methods"},{"id":"28","question":"Finding ways to keep development in process with least deforestation"},{"id":"29","question":"To research a new ways for making roads more durable"},{"id":"30","question":"Gain Knowledge of materials, methods, and the tools involved in the construction or repair of houses, buildings, or other structures such as highways and roads"},{"id":"31","question":"Knowledge of design techniques, tools, and principles involved in production of precision technical plans, blueprints, drawings, and models"},{"id":"32","question":"Develop a way to better predict the weather with some technology."},{"id":"33","question":"Enter information into a computer database."},{"id":"34","question":"Do you like writing computer programs for various purposes?"},{"id":"35","question":"Want to hack/breach into a computer system."},{"id":"36","question":"Like solving complex math problems."},{"id":"37","question":"Fascinated about computer processors and GPUs."},{"id":"38","question":"Try to solve an application error or computer booting error by yourself."},{"id":"39","question":"Are you interested to know the working of virtual assistant (like google assistant/Alexa)?"},{"id":"40","question":"Work on new computer operating system."},{"id":"41","question":"Develop a machine learning algorithm."},{"id":"42","question":"Design antennas for wireless communication."},{"id":"43","question":"Design electronic control systems for electric vehicles."},{"id":"44","question":"Design an automated home lighting system"},{"id":"45","question":"Knowledge of machines and tools, including their designs, uses, repair, and maintenance."},{"id":"46","question":"Installing equipment, machines, wiring meet specifications."},{"id":"47","question":"Design and build sports cars chassis, engine etc."},{"id":"48","question":"Trying to provide better water quality/supply to the villages where there is shortage of water."},{"id":"49","question":"Trying to find the materials used to develop a road/bridge/railway-track."},{"id":"50","question":"Finding better water irrigation methods."}]')},39:function(e){e.exports=JSON.parse('[{"val":0,"opt":"Strongly Agree"},{"val":1,"opt":"Agree"},{"val":2,"opt":"Neutral"},{"val":3,"opt":"Disagree"},{"val":4,"opt":"Strongly Disagree"}]')},63:function(e,t,a){e.exports=a.p+"static/media/phyerwaal_dev_logo_final.fad90657.png"},70:function(e,t,a){e.exports=a(123)},75:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.4ea5d978.chunk.js.map