(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==c[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/jsExercismCourse/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"16ff":function(e,t,n){"use strict";n("3443")},"1a3e":function(e,t,n){"use strict";n("68fe")},3443:function(e,t,n){},"543a":function(e,t,n){},"590d":function(e,t,n){},"64b2":function(e,t,n){},"68fe":function(e,t,n){},"6be9":function(e,t,n){"use strict";n("64b2")},"78d5":function(e,t,n){"use strict";n("be59")},bd8c:function(e,t,n){"use strict";n("543a")},be59:function(e,t,n){},c5ee:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("Game"),l=Object(r["resolveComponent"])("ChangeName");return e.username?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:0,username:e.username,onResetUsername:t[1]||(t[1]=function(t){return e.username=""})},null,8,["username"])):(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:1,username:e.username,"onUpdate:username":t[2]||(t[2]=function(t){return e.username=t})},null,8,["username"]))}n("d81d");var a=Object(r["withScopeId"])("data-v-c4a194fe");Object(r["pushScopeId"])("data-v-c4a194fe");var o={class:"game"};Object(r["popScopeId"])();var u=a((function(e,t,n,c,u,l){var i=Object(r["resolveComponent"])("UserBar"),s=Object(r["resolveComponent"])("Counter"),p=Object(r["resolveComponent"])("Flag"),d=Object(r["resolveComponent"])("TimeCounter"),f=Object(r["resolveComponent"])("ResetButton"),b=Object(r["resolveComponent"])("Board");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])(i,{update:e.updateUserBar,"onUpdate:update":t[1]||(t[1]=function(t){return e.updateUserBar=t}),username:e.username,onResetUsername:t[2]||(t[2]=function(t){return e.$emit("reset-username")})},null,8,["update","username"]),Object(r["createVNode"])(s,{clickCounter:e.clickCounter},null,8,["clickCounter"]),Object(r["createVNode"])(s,{clickCounter:e.flagDisplay},{icon:a((function(){return[Object(r["createVNode"])(p)]})),_:1},8,["clickCounter"]),Object(r["createVNode"])(d,{time:e.timeCounter,"onUpdate:time":t[3]||(t[3]=function(t){return e.timeCounter=t}),start:e.startCounter},null,8,["time","start"]),Object(r["createVNode"])(f,{onClick:e.resetGame,stillPlay:e.stillPlay,winGame:e.winGame},null,8,["onClick","stillPlay","winGame"]),Object(r["createVNode"])(b,{class:"mt-10px",onLoseGame:e.lostGame,onWinGame:e.onWinGame,clickCounter:e.clickCounter,"onUpdate:clickCounter":t[4]||(t[4]=function(t){return e.clickCounter=t}),flagCounter:e.flagCounter,"onUpdate:flagCounter":t[5]||(t[5]=function(t){return e.flagCounter=t}),map:e.map,stillPlay:e.stillPlay},null,8,["onLoseGame","onWinGame","clickCounter","flagCounter","map","stillPlay"])])})),l=n("5530"),i=(n("4d90"),n("d3b7"),n("25f0"),Object(r["withScopeId"])("data-v-f0514e06")),s=i((function(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("Map");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{map:e.board,onClickCell:e.onCellClick,onRightClick:e.toggleFlag},null,8,["map","onClickCell","onRightClick"])})),p=(n("a9e3"),n("13d5"),n("159b"),n("ade3")),d=Object(r["withScopeId"])("data-v-ab0a48aa"),f=d((function(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("Flag");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.map,(function(t,n){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"map__row",key:n},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t,(function(t,c){var a=t.value,o=t.hidden,l=t.flag;return Object(r["openBlock"])(),Object(r["createBlock"])("span",{class:["map__cell",Object(p["a"])({"map__cell--hidden":o},"map__cell--value-"+a,!o)],key:c,onClick:function(t){return e.$emit("clickCell",c,n)},onContextmenu:Object(r["withModifiers"])((function(t){return e.$emit("rightClick",c,n)}),["prevent"])},[o?l?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:1,class:"map__cell-flag"})):Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:0},[Object(r["createTextVNode"])(Object(r["toDisplayString"])("*"===a?"💣":a),1)],64))],42,["onClick","onContextmenu"])})),128))])})),128))])})),b={height:"512",viewBox:"0 0 34 34",width:"512",xmlns:"http://www.w3.org/2000/svg"},m=Object(r["createVNode"])("path",{d:"M26.3 10c0 .4-.2.7-.5.9l-13.2 7.7V31h2c.5 0 1 .5 1 1 0 .6-.5 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V2c0-.4.3-.7.5-.9 0-.1.8-.2 1 0h.1l13.6 8c.3.2.5.6.5.9z"},null,-1);function v(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("svg",b,[m])}const j={};j.render=v;var O=j,C=Object(r["defineComponent"])({name:"Map",components:{Flag:O},props:{map:Array},emits:["clickCell","rightClick"]});n("78d5");C.render=f,C.__scopeId="data-v-ab0a48aa";var k=C,g=n("2909"),h=(n("ac1f"),n("1276"),n("a15b"),n("5319"),function(e){return S(e.value).map((function(e){return e.split("").map((function(e){return{value:e,hidden:!0,flag:!1}}))}))}),y=function e(t,n,r){var c=t[n][r];if(!c.flag&&c.hidden&&(c.hidden=!1," "===c.value))for(var a=-1;a<2;++a)for(var o=-1;o<2;++o)n+a<0||r+o<0||n+a>=t.length||r+o>=t[0].length||0===a&&0===o||c.flag||e(t,n+a,r+o)},w=function(e){e.forEach((function(e){e.forEach((function(e){"*"===e.value&&(e.hidden=!1)}))}))};function B(e,t,n){var r=e.split(""),c=isNaN(parseInt(r[t]))?0:parseInt(r[t]);return r[t]=(c+n).toString(),r.join("")}var S=function(e){var t=Object(g["a"])(e);return e.forEach((function(n,r){for(var c=0;c<n.length;++c)if(" "===n[c])for(var a=-1;a<2;++a)if(1===a&&r!==e.length-1||-1===a&&0!==r||0===a){var o=e[r+a],u=o.substring(c-1,c+2).replace(/ /g,"").length;if(!u)continue;t[r]=B(t[r],c,u)}})),t},_=Object(r["defineComponent"])({name:"Board",props:{map:{type:Array,required:!0},clickCounter:{type:Number,required:!0},flagCounter:{type:Number,required:!0},stillPlay:{type:Boolean,required:!0}},emits:["update:clickCounter","update:flagCounter","loseGame","winGame"],components:{Map:k},setup:function(e,t){var n=t.emit,c=Object(r["toRefs"])(e),a=c.map,o=c.clickCounter,u=c.flagCounter,l=c.stillPlay,i=Object(r["ref"])(h(a)),s=Object(r["computed"])((function(){return i.value.reduce((function(e,t){return t.forEach((function(t){return t.hidden&&e.push(t)})),e}),[]).length})),p=Object(r["computed"])((function(){return i.value.reduce((function(e,t){return t.forEach((function(t){return"*"===t.value&&++e})),e}),0)}));Object(r["watch"])(a,(function(){return i.value=h(a)})),Object(r["watch"])(s,(function(){return s.value===p.value&&n("winGame")}));var d=function(e,t){if(l.value){var r=i.value[t][e];r.hidden&&(r.flag?(r.flag=!1,n("update:flagCounter",u.value+1)):u.value>0&&(r.flag=!0,n("update:flagCounter",u.value-1)))}},f=function(e,t){if(l.value){var r=i.value[t][e];"*"===r.value&&(n("loseGame"),w(i.value)),!r.flag&&r.hidden&&(n("update:clickCounter",o.value+1),y(i.value,t,e))}};return{board:i,onCellClick:f,toggleFlag:d}}});_.render=s,_.__scopeId="data-v-f0514e06";var N=_,V=Object(r["withScopeId"])("data-v-64464edc");Object(r["pushScopeId"])("data-v-64464edc");var I={class:"bar"},G={key:0};Object(r["popScopeId"])();var P=V((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("div",I,[Object(r["createVNode"])("div",null,[Object(r["createVNode"])("button",{type:"button",onClick:t[1]||(t[1]=function(t){return e.$emit("reset-username")})},"✎"),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.username),1)]),!e.areStatsLoading&&e.stats?(Object(r["openBlock"])(),Object(r["createBlock"])("div",G," 🕓 "+Object(r["toDisplayString"])(e.stats.avgWinTime)+" 🏆 "+Object(r["toDisplayString"])(e.stats.wins)+" 😵 "+Object(r["toDisplayString"])(e.stats.losses),1)):Object(r["createCommentVNode"])("",!0)])})),x=n("f786"),M=n("bc3a"),U=n.n(M),q=U.a.create({baseURL:"/api"}),R=Object(r["defineComponent"])({name:"UserBar",events:["reset-username","update:update"],props:{username:{type:String,required:!0},update:{type:Boolean,required:!0}},setup:function(e,t){var n=Object(r["toRefs"])(e),c=n.update,a=n.username,o=Object(r["ref"])(),u=Object(r["ref"])();return Object(r["watch"])(c,(function(e){if(e)var n=Object(x["a"])("/stats?username=".concat(a.value),q),c=n.data,l=n.isFinished,i=Object(r["watch"])(l,(function(e){u.value=e,o.value=c.value,e&&(i(),t.emit("update:update",!1))}),{immediate:!0})}),{immediate:!0}),{areStatsLoading:u,stats:o}}});n("6be9");R.render=P,R.__scopeId="data-v-64464edc";var T=R,D=Object(r["withScopeId"])("data-v-62f46a6a");Object(r["pushScopeId"])("data-v-62f46a6a");var F={class:"click-counter"},$={key:0,class:"click-counter--icon"};Object(r["popScopeId"])();var A=D((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("div",F,[e.$slots.icon?(Object(r["openBlock"])(),Object(r["createBlock"])("div",$,[Object(r["renderSlot"])(e.$slots,"icon",{},void 0,!0)])):Object(r["createCommentVNode"])("",!0),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.clickCounter),1)])})),L=Object(r["defineComponent"])({name:"Counter",props:{clickCounter:{type:[Number,String],required:!0}}});n("1a3e");L.render=A,L.__scopeId="data-v-62f46a6a";var E=L,W=Object(r["withScopeId"])("data-v-a4d6bc5c"),z=W((function(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("Clock"),l=Object(r["resolveComponent"])("Counter");return Object(r["openBlock"])(),Object(r["createBlock"])(l,{class:"time-display",clickCounter:e.formattedTime},{icon:W((function(){return[Object(r["createVNode"])(u)]})),_:1},8,["clickCounter"])})),J={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Y=Object(r["createVNode"])("path",{d:"M347.216 301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966 0-19.83 8.864-19.83 19.83v118.978c0 6.246 2.935 12.136 7.932 15.864l79.318 59.489a19.713 19.713 0 0011.878 3.966c6.048 0 11.997-2.717 15.884-7.952 6.585-8.746 4.8-21.179-3.965-27.743z"},null,-1),H=Object(r["createVNode"])("path",{d:"M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.833 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.066-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.066 216.341 216.341S375.275 472.341 256 472.341z"},null,-1);function K(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("svg",J,[Y,H])}const Q={};Q.render=K;var X=Q,Z=function(e){var t=e%60,n=(e-t)/60;return n.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")},ee=Object(r["defineComponent"])({name:"TimeCounter",props:{time:{type:Number,required:!0},start:{type:Number,required:!0}},emits:["update:time"],components:{Counter:E,Clock:X},setup:function(e,t){var n,c=t.emit,a=Object(r["toRefs"])(e),o=a.time,u=a.start,l=function(){c("update:time",Math.floor((Date.now()-u.value)/1e3))},i=Object(r["computed"])((function(){return Z(o.value)}));return Object(r["watch"])(u,(function(){0!==u.value?n=setInterval(l,1e3):clearInterval(n)})),{formattedTime:i}}});n("fd83");ee.render=z,ee.__scopeId="data-v-a4d6bc5c";var te=ee,ne=Object(r["withScopeId"])("data-v-658842c5");Object(r["pushScopeId"])("data-v-658842c5");var re=Object(r["createVNode"])("div",{class:"reset-button__eye reset-button__eye--left"},null,-1),ce=Object(r["createVNode"])("div",{class:"reset-button__eye reset-button__eye--right"},null,-1),ae=Object(r["createVNode"])("div",{class:"reset-button__mouth"},null,-1);Object(r["popScopeId"])();var oe=ne((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click")}),class:["reset-button",{"reset-button--game-lost":!e.stillPlay&&!e.winGame,"reset-button--game-won":!e.stillPlay&&e.winGame}]},[re,ce,ae],2)})),ue=Object(r["defineComponent"])({name:"ResetButton",emits:["click"],props:{stillPlay:{type:Boolean,required:!0},winGame:{type:Boolean,required:!0}}});n("bd8c");ue.render=oe,ue.__scopeId="data-v-658842c5";var le=ue,ie=(n("cb29"),n("a434"),10),se=8,pe=function(e){for(var t=new Array(se).fill(0).map((function(){return new Array(se).fill(" ")})),n=new Array(se*se).fill(0).map((function(e,t){return t})),r=0;r<e;++r){var c=Math.floor(Math.random()*n.length),a=n[c],o=Math.floor(a/se),u=a%se;t[o][u]="*",n.splice(c,1)}return t.map((function(e){return e.join("")}))},de=function(e){var t=Object(r["ref"])(pe(e.value)),n=function(){return t.value=pe(e.value)};return Object(r["watch"])(e,(function(e){return t.value=pe(e)})),{map:t,reset:n}},fe=Object(r["defineComponent"])({name:"Game",events:["reset-username"],components:{UserBar:T,Board:N,Counter:E,Flag:O,TimeCounter:te,ResetButton:le},props:{username:{type:String,required:!0}},setup:function(e){var t=Object(r["toRefs"])(e),n=t.username,c=Object(r["ref"])(0),a=Object(r["ref"])(0),o=Object(r["ref"])(0),u=Object(r["ref"])(ie),i=Object(r["ref"])(ie),s=Object(r["computed"])((function(){return u.value.toString().padStart(3,"0")})),p=de(i),d=p.map,f=p.reset,b=!0,m=Object(r["ref"])(!0),v=Object(r["ref"])(!1),j=Object(r["ref"])(!0);Object(r["watch"])([u,o],(function(){b&&(b=!1,a.value=Date.now())}));var O=function(){a.value=0},C=function(e){var t=Object(x["a"])("/stats/countGame",{method:"POST",data:Object(l["a"])(Object(l["a"])({},e),{},{username:n.value})},q),c=t.isFinished;Object(r["watch"])(c,(function(e){e&&(j.value=!0)}))},k=function(){m.value=!1,C({won:!1,time:c.value}),O()},g=function(){v.value=!0,m.value=!1,C({won:!0,time:c.value}),O()},h=function(){O(),c.value=0,b=!0},y=function(){f(),h(),m.value=!0,o.value=0,u.value=i.value};return{map:d,clickCounter:o,flagCounter:u,flagDisplay:s,timeCounter:c,resetGame:y,startCounter:a,lostGame:k,stillPlay:m,winGame:v,onWinGame:g,updateUserBar:j}}});n("ede8");fe.render=u,fe.__scopeId="data-v-c4a194fe";var be=fe,me=Object(r["createVNode"])("button",{type:"submit"},"Save",-1);function ve(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("form",{onSubmit:t[2]||(t[2]=Object(r["withModifiers"])((function(t){return e.$emit("update:username",e.inputValue)}),["prevent"]))},[Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputValue=t}),placeholder:"Your username"},null,512),[[r["vModelText"],e.inputValue]]),me],32)}var je=Object(r["defineComponent"])({name:"ChangeName",events:["update:username"],props:{username:{type:String,required:!0}},setup:function(e){var t=Object(r["toRefs"])(e),n=t.username,c=Object(r["ref"])(n.value);return Object(r["watch"])(n,(function(){return c.value=n.value})),{inputValue:c}}});je.render=ve;var Oe=je,Ce=Object(r["defineComponent"])({name:"App",components:{Game:be,ChangeName:Oe},setup:function(){return{username:Object(r["ref"])(""),console:console}}});n("16ff"),n("ebd0");Ce.render=c;var ke=Ce;Object(r["createApp"])(ke).mount("#app")},ebd0:function(e,t,n){"use strict";n("590d")},ede8:function(e,t,n){"use strict";n("f428")},f428:function(e,t,n){},fd83:function(e,t,n){"use strict";n("c5ee")}});
//# sourceMappingURL=app.5e71a50e.js.map