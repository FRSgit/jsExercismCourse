(function(e){function t(t){for(var r,u,o=t[0],i=t[1],l=t[2],b=0,d=[];b<o.length;b++)u=o[b],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/jsExercismCourse/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"05c9":function(e,t,n){},"06bb":function(e,t,n){},"10fa":function(e,t,n){"use strict";n("b88c")},"16ff":function(e,t,n){"use strict";n("3443")},"1a3e":function(e,t,n){"use strict";n("68fe")},3443:function(e,t,n){},"4ca7":function(e,t,n){"use strict";n("06bb")},"4d8f":function(e,t,n){"use strict";n("05c9")},"543a":function(e,t,n){},"68fe":function(e,t,n){},"78d5":function(e,t,n){"use strict";n("be59")},a9f5:function(e,t,n){"use strict";n("b08c")},ad43:function(e,t,n){"use strict";n("d023")},b08c:function(e,t,n){},b88c:function(e,t,n){},bd8c:function(e,t,n){"use strict";n("543a")},be59:function(e,t,n){},c440:function(e,t,n){"use strict";n("fb5f")},c5ee:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){var o=Object(r["q"])("Game"),i=Object(r["q"])("Login"),l=Object(r["q"])("Register");return Object(r["j"])(),Object(r["d"])("div",null,[e.currentPage===e.Page.Game?(Object(r["j"])(),Object(r["d"])(o,{key:0,class:"page"})):e.currentPage===e.Page.Login?(Object(r["j"])(),Object(r["d"])(i,{key:1,class:"page"})):e.currentPage===e.Page.Register?(Object(r["j"])(),Object(r["d"])(l,{key:2,class:"page"})):Object(r["e"])("",!0)])}n("d81d");var c=Object(r["v"])("data-v-37cf0be0");Object(r["l"])("data-v-37cf0be0");var u={class:"game"};Object(r["k"])();var o=c((function(e,t,n,a,o,i){var l=Object(r["q"])("UserBar"),s=Object(r["q"])("Counter"),b=Object(r["q"])("Flag"),d=Object(r["q"])("TimeCounter"),f=Object(r["q"])("ResetButton"),j=Object(r["q"])("Board");return Object(r["j"])(),Object(r["d"])("div",u,[Object(r["g"])(l),Object(r["g"])(s,{clickCounter:e.clickCounter},null,8,["clickCounter"]),Object(r["g"])(s,{clickCounter:e.flagDisplay},{icon:c((function(){return[Object(r["g"])(b)]})),_:1},8,["clickCounter"]),Object(r["g"])(d,{time:e.timeCounter,"onUpdate:time":t[1]||(t[1]=function(t){return e.timeCounter=t}),start:e.startCounter},null,8,["time","start"]),Object(r["g"])(f,{onClick:e.resetGame,stillPlay:e.stillPlay,winGame:e.winGame},null,8,["onClick","stillPlay","winGame"]),Object(r["g"])(j,{class:"mt-10px",onLoseGame:e.lostGame,onWinGame:e.onWinGame,clickCounter:e.clickCounter,"onUpdate:clickCounter":t[2]||(t[2]=function(t){return e.clickCounter=t}),flagCounter:e.flagCounter,"onUpdate:flagCounter":t[3]||(t[3]=function(t){return e.flagCounter=t}),map:e.map,stillPlay:e.stillPlay},null,8,["onLoseGame","onWinGame","clickCounter","flagCounter","map","stillPlay"])])})),i=(n("4d90"),n("d3b7"),n("25f0"),Object(r["v"])("data-v-f0514e06")),l=i((function(e,t,n,a,c,u){var o=Object(r["q"])("Map");return Object(r["j"])(),Object(r["d"])(o,{map:e.board,onClickCell:e.onCellClick,onRightClick:e.toggleFlag},null,8,["map","onClickCell","onRightClick"])})),s=(n("a9e3"),n("13d5"),n("159b"),n("ade3")),b=Object(r["v"])("data-v-ab0a48aa"),d=b((function(e,t,n,a,c,u){var o=Object(r["q"])("Flag");return Object(r["j"])(),Object(r["d"])("div",null,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.map,(function(t,n){return Object(r["j"])(),Object(r["d"])("div",{class:"map__row",key:n},[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(t,(function(t,a){var c=t.value,u=t.hidden,i=t.flag;return Object(r["j"])(),Object(r["d"])("span",{class:["map__cell",Object(s["a"])({"map__cell--hidden":u},"map__cell--value-"+c,!u)],key:a,onClick:function(t){return e.$emit("clickCell",a,n)},onContextmenu:Object(r["u"])((function(t){return e.$emit("rightClick",a,n)}),["prevent"])},[u?i?(Object(r["j"])(),Object(r["d"])(o,{key:1,class:"map__cell-flag"})):Object(r["e"])("",!0):(Object(r["j"])(),Object(r["d"])(r["a"],{key:0},[Object(r["f"])(Object(r["r"])("*"===c?"💣":c),1)],64))],42,["onClick","onContextmenu"])})),128))])})),128))])})),f={height:"512",viewBox:"0 0 34 34",width:"512",xmlns:"http://www.w3.org/2000/svg"},j=Object(r["g"])("path",{d:"M26.3 10c0 .4-.2.7-.5.9l-13.2 7.7V31h2c.5 0 1 .5 1 1 0 .6-.5 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V2c0-.4.3-.7.5-.9 0-.1.8-.2 1 0h.1l13.6 8c.3.2.5.6.5.9z"},null,-1);function p(e,t){return Object(r["j"])(),Object(r["d"])("svg",f,[j])}const m={};m.render=p;var v=m,O=Object(r["h"])({name:"Map",components:{Flag:v},props:{map:Array},emits:["clickCell","rightClick"]});n("78d5");O.render=d,O.__scopeId="data-v-ab0a48aa";var g=O,h=n("2909"),k=(n("ac1f"),n("1276"),n("a15b"),n("5319"),function(e){return _(e.value).map((function(e){return e.split("").map((function(e){return{value:e,hidden:!0,flag:!1}}))}))}),C=function e(t,n,r){var a=t[n][r];if(!a.flag&&a.hidden&&(a.hidden=!1," "===a.value))for(var c=-1;c<2;++c)for(var u=-1;u<2;++u)n+c<0||r+u<0||n+c>=t.length||r+u>=t[0].length||0===c&&0===u||a.flag||e(t,n+c,r+u)},y=function(e){e.forEach((function(e){e.forEach((function(e){"*"===e.value&&(e.hidden=!1)}))}))};function w(e,t,n){var r=e.split(""),a=isNaN(parseInt(r[t]))?0:parseInt(r[t]);return r[t]=(a+n).toString(),r.join("")}var _=function(e){var t=Object(h["a"])(e);return e.forEach((function(n,r){for(var a=0;a<n.length;++a)if(" "===n[a])for(var c=-1;c<2;++c)if(1===c&&r!==e.length-1||-1===c&&0!==r||0===c){var u=e[r+c],o=u.substring(a-1,a+2).replace(/ /g,"").length;if(!o)continue;t[r]=w(t[r],a,o)}})),t},x=Object(r["h"])({name:"Board",props:{map:{type:Array,required:!0},clickCounter:{type:Number,required:!0},flagCounter:{type:Number,required:!0},stillPlay:{type:Boolean,required:!0}},emits:["update:clickCounter","update:flagCounter","loseGame","winGame"],components:{Map:g},setup:function(e,t){var n=t.emit,a=Object(r["s"])(e),c=a.map,u=a.clickCounter,o=a.flagCounter,i=a.stillPlay,l=Object(r["n"])(k(c)),s=Object(r["b"])((function(){return l.value.reduce((function(e,t){return t.forEach((function(t){return t.hidden&&e.push(t)})),e}),[]).length})),b=Object(r["b"])((function(){return l.value.reduce((function(e,t){return t.forEach((function(t){return"*"===t.value&&++e})),e}),0)}));Object(r["t"])(c,(function(){return l.value=k(c)})),Object(r["t"])(s,(function(){return s.value===b.value&&n("winGame")}));var d=function(e,t){if(i.value){var r=l.value[t][e];r.hidden&&(r.flag?(r.flag=!1,n("update:flagCounter",o.value+1)):o.value>0&&(r.flag=!0,n("update:flagCounter",o.value-1)))}},f=function(e,t){if(i.value){var r=l.value[t][e];"*"===r.value&&(n("loseGame"),y(l.value)),!r.flag&&r.hidden&&(n("update:clickCounter",u.value+1),C(l.value,t,e))}};return{board:l,onCellClick:f,toggleFlag:d}}});x.render=l,x.__scopeId="data-v-f0514e06";var G=x,P=Object(r["v"])("data-v-44f0b1b7");Object(r["l"])("data-v-44f0b1b7");var R={class:"bar"},S=Object(r["f"])("X"),q={key:0},T=Object(r["g"])("div",{class:"my-10px"},"To store stats:",-1),I={class:"my-10px"},B=Object(r["f"])("Login"),L=Object(r["f"])(" or "),V=Object(r["f"])("Register");Object(r["k"])();var U,M=P((function(e,t,n,a,c,u){var o=Object(r["q"])("Btn");return Object(r["j"])(),Object(r["d"])("div",R,[void 0!==e.username?(Object(r["j"])(),Object(r["d"])(r["a"],{key:0},[Object(r["g"])("div",null,[Object(r["g"])(o,{onClick:e.logout},{default:P((function(){return[S]})),_:1},8,["onClick"]),Object(r["f"])(" "+Object(r["r"])(e.username),1)]),e.stats?(Object(r["j"])(),Object(r["d"])("div",q," 🕓 "+Object(r["r"])(e.stats.avgWinTime)+" 🏆 "+Object(r["r"])(e.stats.wins)+" 😵 "+Object(r["r"])(e.stats.losses),1)):Object(r["e"])("",!0)],64)):(Object(r["j"])(),Object(r["d"])(r["a"],{key:1},[T,Object(r["g"])("div",I,[Object(r["g"])(o,{onClick:e.navigateToLogin},{default:P((function(){return[B]})),_:1},8,["onClick"]),L,Object(r["g"])(o,{onClick:e.navigateToRegister},{default:P((function(){return[V]})),_:1},8,["onClick"])])],64))])})),A=n("5530"),N=n("1da1"),$=(n("96cf"),n("99af"),n("bc3a")),E=n.n($),F=E.a.create({baseURL:"/api"}),D=n("5502");(function(e){e[e["Game"]=0]="Game",e[e["Register"]=1]="Register",e[e["Login"]=2]="Login"})(U||(U={}));var W=localStorage.getItem("user"),z=Object(D["a"])({state:{user:W?JSON.parse(W):void 0,stats:void 0,currentPage:U.Game},mutations:{setUser:function(e,t){t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user"),e.user=t},setStats:function(e,t){e.stats=t},setCurrentPage:function(e,t){e.currentPage=t}},actions:{getStats:function(e){return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==(n=e.state.user)&&void 0!==n&&n.token){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,F.get("/stats?id=".concat(e.state.user.id,"&token=").concat(e.state.user.token));case 4:r=t.sent,e.commit("setStats",r);case 6:case"end":return t.stop()}}),t)})))()},postGame:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==(r=e.state.user)&&void 0!==r&&r.username){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,F.post("/stats/countGame",Object(A["a"])(Object(A["a"])({},t),{},{id:e.state.user.id,token:e.state.user.token}));case 4:return n.next=6,e.dispatch("getStats");case 6:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",F.post("/register",t));case 1:case"end":return e.stop()}}),e)})))()},login:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F.post("/login",t);case 2:return r=n.sent,a=r.data,e.commit("setUser",{username:t.username,id:a.id,token:a.token}),n.next=7,e.dispatch("getStats");case 7:return n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){e.commit("setUser",void 0),e.commit("setStats",void 0)}}}),J=Object(r["v"])("data-v-16db75d0"),X=J((function(e,t){return Object(r["j"])(),Object(r["d"])("button",{class:"btn",type:e.$attrs.type||"button"},[Object(r["p"])(e.$slots,"default",{},void 0,!0)],8,["type"])}));n("a9f5");const H={};H.render=X,H.__scopeId="data-v-16db75d0";var K=H,Q=Object(r["h"])({name:"UserBar",components:{Btn:K},setup:function(){var e;return null!==(e=z.state.user)&&void 0!==e&&e.username&&z.dispatch("getStats"),{username:Object(r["b"])((function(){var e;return null===(e=z.state.user)||void 0===e?void 0:e.username})),stats:Object(r["b"])((function(){return z.state.stats})),navigateToLogin:function(){z.commit("setCurrentPage",U.Login)},navigateToRegister:function(){z.commit("setCurrentPage",U.Register)},logout:function(){z.dispatch("logout")}}}});n("ad43");Q.render=M,Q.__scopeId="data-v-44f0b1b7";var Y=Q,Z=Object(r["v"])("data-v-62f46a6a");Object(r["l"])("data-v-62f46a6a");var ee={class:"click-counter"},te={key:0,class:"click-counter--icon"};Object(r["k"])();var ne=Z((function(e,t,n,a,c,u){return Object(r["j"])(),Object(r["d"])("div",ee,[e.$slots.icon?(Object(r["j"])(),Object(r["d"])("div",te,[Object(r["p"])(e.$slots,"icon",{},void 0,!0)])):Object(r["e"])("",!0),Object(r["f"])(" "+Object(r["r"])(e.clickCounter),1)])})),re=Object(r["h"])({name:"Counter",props:{clickCounter:{type:[Number,String],required:!0}}});n("1a3e");re.render=ne,re.__scopeId="data-v-62f46a6a";var ae=re,ce=Object(r["v"])("data-v-a4d6bc5c"),ue=ce((function(e,t,n,a,c,u){var o=Object(r["q"])("Clock"),i=Object(r["q"])("Counter");return Object(r["j"])(),Object(r["d"])(i,{class:"time-display",clickCounter:e.formattedTime},{icon:ce((function(){return[Object(r["g"])(o)]})),_:1},8,["clickCounter"])})),oe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ie=Object(r["g"])("path",{d:"M347.216 301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966 0-19.83 8.864-19.83 19.83v118.978c0 6.246 2.935 12.136 7.932 15.864l79.318 59.489a19.713 19.713 0 0011.878 3.966c6.048 0 11.997-2.717 15.884-7.952 6.585-8.746 4.8-21.179-3.965-27.743z"},null,-1),le=Object(r["g"])("path",{d:"M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.833 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.066-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.066 216.341 216.341S375.275 472.341 256 472.341z"},null,-1);function se(e,t){return Object(r["j"])(),Object(r["d"])("svg",oe,[ie,le])}const be={};be.render=se;var de=be,fe=function(e){var t=e%60,n=(e-t)/60;return n.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")},je=Object(r["h"])({name:"TimeCounter",props:{time:{type:Number,required:!0},start:{type:Number,required:!0}},emits:["update:time"],components:{Counter:ae,Clock:de},setup:function(e,t){var n,a=t.emit,c=Object(r["s"])(e),u=c.time,o=c.start,i=function(){a("update:time",Math.floor((Date.now()-o.value)/1e3))},l=Object(r["b"])((function(){return fe(u.value)}));return Object(r["t"])(o,(function(){0!==o.value?n=setInterval(i,1e3):clearInterval(n)})),{formattedTime:l}}});n("fd83");je.render=ue,je.__scopeId="data-v-a4d6bc5c";var pe=je,me=Object(r["v"])("data-v-658842c5");Object(r["l"])("data-v-658842c5");var ve=Object(r["g"])("div",{class:"reset-button__eye reset-button__eye--left"},null,-1),Oe=Object(r["g"])("div",{class:"reset-button__eye reset-button__eye--right"},null,-1),ge=Object(r["g"])("div",{class:"reset-button__mouth"},null,-1);Object(r["k"])();var he=me((function(e,t,n,a,c,u){return Object(r["j"])(),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click")}),class:["reset-button",{"reset-button--game-lost":!e.stillPlay&&!e.winGame,"reset-button--game-won":!e.stillPlay&&e.winGame}]},[ve,Oe,ge],2)})),ke=Object(r["h"])({name:"ResetButton",emits:["click"],props:{stillPlay:{type:Boolean,required:!0},winGame:{type:Boolean,required:!0}}});n("bd8c");ke.render=he,ke.__scopeId="data-v-658842c5";var Ce=ke,ye=(n("cb29"),n("a434"),10),we=8,_e=function(e){for(var t=new Array(we).fill(0).map((function(){return new Array(we).fill(" ")})),n=new Array(we*we).fill(0).map((function(e,t){return t})),r=0;r<e;++r){var a=Math.floor(Math.random()*n.length),c=n[a],u=Math.floor(c/we),o=c%we;t[u][o]="*",n.splice(a,1)}return t.map((function(e){return e.join("")}))},xe=function(e){var t=Object(r["n"])(_e(e.value)),n=function(){return t.value=_e(e.value)};return Object(r["t"])(e,(function(e){return t.value=_e(e)})),{map:t,reset:n}},Ge=Object(r["h"])({name:"Game",components:{UserBar:Y,Board:G,Counter:ae,Flag:v,TimeCounter:pe,ResetButton:Ce},setup:function(){var e=Object(r["n"])(0),t=Object(r["n"])(0),n=Object(r["n"])(0),a=Object(r["n"])(ye),c=Object(r["n"])(ye),u=Object(r["b"])((function(){return a.value.toString().padStart(3,"0")})),o=xe(c),i=o.map,l=o.reset,s=Object(r["n"])(!0),b=Object(r["n"])(!1),d=!0;Object(r["t"])([a,n],(function(){d&&(d=!1,t.value=Date.now())}));var f=function(){t.value=0},j=function(e){return z.dispatch("postGame",e)},p=function(){s.value=!1,j({won:!1,time:e.value}),f()},m=function(){b.value=!0,s.value=!1,j({won:!0,time:e.value}),f()},v=function(){f(),e.value=0,d=!0},O=function(){l(),v(),s.value=!0,n.value=0,a.value=c.value};return{map:i,clickCounter:n,flagCounter:a,flagDisplay:u,timeCounter:e,resetGame:O,startCounter:t,lostGame:p,stillPlay:s,winGame:b,onWinGame:m}}});n("10fa");Ge.render=o,Ge.__scopeId="data-v-37cf0be0";var Pe=Ge,Re=Object(r["v"])("data-v-0757003a");Object(r["l"])("data-v-0757003a");var Se=Object(r["g"])("h1",{class:"title"},"Login",-1),qe={class:"mt-20px"},Te=Object(r["f"])("Cancel"),Ie=Object(r["f"])("Login"),Be={class:"mt-20px"},Le=Object(r["g"])("small",null,"Don't have an account yet?",-1),Ve=Object(r["f"])("Register");Object(r["k"])();var Ue=Re((function(e,t,n,a,c,u){var o=Object(r["q"])("Input"),i=Object(r["q"])("Btn");return Object(r["j"])(),Object(r["d"])("main",null,[Object(r["g"])("form",{onSubmit:t[3]||(t[3]=Object(r["u"])((function(){return e.login&&e.login.apply(e,arguments)}),["prevent"])),class:"form"},[Se,Object(r["g"])(o,{modelValue:e.username,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.username=t}),name:"username",class:"mt-10px",placeholder:"Type in your username"},null,8,["modelValue"]),Object(r["g"])(o,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),name:"password",class:"mt-10px",type:"password",placeholder:"Type in your password"},null,8,["modelValue"]),Object(r["g"])("div",qe,[Object(r["g"])(i,{onClick:e.navigateToGame},{default:Re((function(){return[Te]})),_:1},8,["onClick"]),Object(r["g"])(i,{class:"ml-10px",type:"submit"},{default:Re((function(){return[Ie]})),_:1})]),(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.errorArray,(function(e){return Object(r["j"])(),Object(r["d"])("div",{class:"error mt-10px",key:e},[Object(r["g"])("small",null,Object(r["r"])(e),1)])})),128)),Object(r["g"])("div",Be,[Le,Object(r["g"])(i,{class:"ml-10px",onClick:e.navigateToRegister},{default:Re((function(){return[Ve]})),_:1},8,["onClick"])])],32)])})),Me=Object(r["v"])("data-v-e3a62b2c"),Ae=Me((function(e,t,n,a,c,u){return Object(r["j"])(),Object(r["d"])("input",{class:"input",value:e.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["value"])})),Ne=Object(r["h"])({name:"Input",emits:["update:modelValue"],props:{modelValue:{type:String,required:!0}}});n("4d8f");Ne.render=Ae,Ne.__scopeId="data-v-e3a62b2c";var $e=Ne,Ee=Object(r["h"])({components:{Btn:K,Input:$e},name:"Login",setup:function(){var e=Object(r["n"])(""),t=Object(r["n"])(""),n=Object(r["n"])([]);return{username:e,password:t,errorArray:n,navigateToGame:function(){return z.commit("setCurrentPage",U.Game)},navigateToRegister:function(){return z.commit("setCurrentPage",U.Register)},login:function(){var r=Object(N["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.value=[],r.next=3,z.dispatch("login",{username:e.value,password:t.value}).catch((function(e){var t=e.data;n.value=null!==t&&void 0!==t&&t.errors?t.errors:["Unexpected server error"]}));case 3:if(a=r.sent,a){r.next=6;break}return r.abrupt("return");case 6:z.commit("setCurrentPage",U.Game);case 7:case"end":return r.stop()}}),r)})));function a(){return r.apply(this,arguments)}return a}()}}});n("c440");Ee.render=Ue,Ee.__scopeId="data-v-0757003a";var Fe=Ee,De=Object(r["v"])("data-v-9420d330");Object(r["l"])("data-v-9420d330");var We=Object(r["g"])("h1",{class:"title"},"Register",-1),ze={class:"mt-20px"},Je=Object(r["f"])("Cancel"),Xe=Object(r["f"])("Register"),He={class:"mt-20px"},Ke=Object(r["g"])("small",null,"Already have an account?",-1),Qe=Object(r["f"])("Login");Object(r["k"])();var Ye=De((function(e,t,n,a,c,u){var o=Object(r["q"])("Input"),i=Object(r["q"])("Btn");return Object(r["j"])(),Object(r["d"])("main",null,[Object(r["g"])("form",{onSubmit:t[3]||(t[3]=Object(r["u"])((function(){return e.register&&e.register.apply(e,arguments)}),["prevent"])),class:"form"},[We,Object(r["g"])(o,{modelValue:e.username,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.username=t}),name:"username",class:"mt-10px",placeholder:"Type in your username"},null,8,["modelValue"]),Object(r["g"])(o,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),name:"password",class:"mt-10px",type:"password",placeholder:"Type in your password"},null,8,["modelValue"]),Object(r["g"])("div",ze,[Object(r["g"])(i,{onClick:e.navigateToGame},{default:De((function(){return[Je]})),_:1},8,["onClick"]),Object(r["g"])(i,{class:"ml-10px",type:"submit"},{default:De((function(){return[Xe]})),_:1})]),(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.errorArray,(function(e){return Object(r["j"])(),Object(r["d"])("div",{class:"error mt-10px",key:e},[Object(r["g"])("small",null,Object(r["r"])(e),1)])})),128)),Object(r["g"])("div",He,[Ke,Object(r["g"])(i,{class:"ml-10px",onClick:e.navigateToLogin},{default:De((function(){return[Qe]})),_:1},8,["onClick"])])],32)])})),Ze=Object(r["h"])({components:{Btn:K,Input:$e},name:"Register",setup:function(){var e=Object(r["n"])(""),t=Object(r["n"])(""),n=Object(r["n"])([]);return{username:e,password:t,errorArray:n,navigateToGame:function(){return z.commit("setCurrentPage",U.Game)},navigateToLogin:function(){return z.commit("setCurrentPage",U.Login)},register:function(){var r=Object(N["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.value=[],r.next=3,z.dispatch("register",{username:e.value,password:t.value}).catch((function(e){var t=e.data;n.value=null!==t&&void 0!==t&&t.errors?t.errors:["Unexpected server error"]}));case 3:if(a=r.sent,a){r.next=6;break}return r.abrupt("return");case 6:z.commit("setCurrentPage",U.Game);case 7:case"end":return r.stop()}}),r)})));function a(){return r.apply(this,arguments)}return a}()}}});n("4ca7");Ze.render=Ye,Ze.__scopeId="data-v-9420d330";var et=Ze,tt=Object(r["h"])({name:"App",components:{Game:Pe,Login:Fe,Register:et},setup:function(){return{currentPage:Object(r["b"])((function(){return z.state.currentPage})),Page:U}}});n("16ff"),n("eec0");tt.render=a;var nt=tt;Object(r["c"])(nt).use(z).mount("#app")},d023:function(e,t,n){},d2b9:function(e,t,n){},eec0:function(e,t,n){"use strict";n("d2b9")},fb5f:function(e,t,n){},fd83:function(e,t,n){"use strict";n("c5ee")}});
//# sourceMappingURL=app.ce3f4217.js.map