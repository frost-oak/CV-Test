(function(e){function t(t){for(var r,u,a=t[0],l=t[1],i=t[2],s=0,d=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/CV-Test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c0b":function(e,t,n){},"15bc":function(e,t,n){"use strict";n("ab52")},"247f":function(e,t,n){"use strict";n("3ca4")},"2c0c":function(e,t,n){"use strict";n("75a3")},"35a13":function(e,t,n){},"3ca4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"app"};function o(e,t,n,o,u,a){var l=Object(r["M"])("router-view");return Object(r["D"])(),Object(r["i"])("div",c,[Object(r["m"])(l)])}var u={name:"App",components:{}};n("c027");u.render=o;var a=u,l=n("6c02"),i=Object(r["fb"])("data-v-13de8b1a");Object(r["G"])("data-v-13de8b1a");var f=Object(r["l"])("登录"),s=Object(r["l"])("重置");Object(r["E"])();var d=i((function(e,t,n,c,o,u){var a=Object(r["M"])("el-input"),l=Object(r["M"])("el-form-item"),d=Object(r["M"])("el-button"),b=Object(r["M"])("el-form"),m=Object(r["M"])("el-col"),p=Object(r["M"])("el-row");return Object(r["D"])(),Object(r["i"])(p,{type:"flex",justify:"center",align:"middle"},{default:i((function(){return[Object(r["m"])(m,{span:8},{default:i((function(){return[Object(r["m"])(b,{model:o.loginForm,rules:o.rules,ref:"loginForm"},{default:i((function(){return[Object(r["m"])(l,{label:"用户名",prop:"username"},{default:i((function(){return[Object(r["m"])(a,{modelValue:o.loginForm.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.loginForm.username=e})},null,8,["modelValue"])]})),_:1}),Object(r["m"])(l,{label:"密码",prop:"password"},{default:i((function(){return[Object(r["m"])(a,{type:"password",modelValue:o.loginForm.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.loginForm.password=e})},null,8,["modelValue"])]})),_:1}),Object(r["m"])(l,null,{default:i((function(){return[Object(r["m"])(d,{type:"success",onClick:u.startLogin},{default:i((function(){return[f]})),_:1},8,["onClick"]),Object(r["m"])(d,{onClick:u.resetForm},{default:i((function(){return[s]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})})),b=n("1da1"),m=(n("96cf"),{data:function(){return{loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:10,message:"长度在 5 到 10 个字符",trigger:"blur"}]}}},methods:{startLogin:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:"admin"==e.$refs.loginForm.model.username&"admin"==e.$refs.loginForm.model.password?(e.$message({message:"登录成功",type:"success",duration:800}),localStorage.setItem("token","ImToken"),e.$router.push("/index/home")):(e.$message({message:"用户名或密码错误",type:"error",duration:800}),localStorage.setItem("token","ImToken"),e.$router.push("/index/error"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(){this.$refs.loginForm.resetFields()}}});n("2c0c");m.render=d,m.__scopeId="data-v-13de8b1a";var p=m,O=n("cf05"),j=n.n(O),g=Object(r["fb"])("data-v-7a629cee");Object(r["G"])("data-v-7a629cee");var v=Object(r["m"])("img",{src:j.a,alt:""},null,-1),h=Object(r["m"])("h1",null,"首页界面",-1),_=Object(r["m"])("i",{class:"el-icon-location"},null,-1),x=Object(r["m"])("span",null,"用户信息",-1),w=Object(r["l"])("还是用户信息"),y=Object(r["m"])("i",{class:"el-icon-location"},null,-1),k=Object(r["m"])("span",null,"错误信息",-1),M=Object(r["l"])("还是错误信息"),F=Object(r["m"])("i",{class:"el-icon-location"},null,-1),$=Object(r["m"])("span",null,"占个位置",-1),P=Object(r["l"])("回到登录页");Object(r["E"])();var I=g((function(e,t,n,c,o,u){var a=Object(r["M"])("el-col"),l=Object(r["M"])("el-row"),i=Object(r["M"])("el-header"),f=Object(r["M"])("el-menu-item"),s=Object(r["M"])("el-submenu"),d=Object(r["M"])("el-menu"),b=Object(r["M"])("el-aside"),m=Object(r["M"])("router-view"),p=Object(r["M"])("el-main"),O=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(O,null,{default:g((function(){return[Object(r["m"])(i,null,{default:g((function(){return[Object(r["m"])(l,null,{default:g((function(){return[Object(r["m"])(a,{span:8},{default:g((function(){return[v]})),_:1}),Object(r["m"])(a,{span:8},{default:g((function(){return[h]})),_:1}),Object(r["m"])(a,{span:8,class:"col_r"},{default:g((function(){return[Object(r["m"])("a",{onClick:t[1]||(t[1]=Object(r["eb"])((function(){return u.logout&&u.logout.apply(u,arguments)}),["prevent"])),href:"#"},"退出登录")]})),_:1})]})),_:1})]})),_:1}),Object(r["m"])(O,null,{default:g((function(){return[Object(r["m"])(b,{width:"200px"},{default:g((function(){return[Object(r["m"])(d,{router:!0,"default-active":u.handlePath(),"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:g((function(){return[Object(r["m"])(s,{index:"1"},{title:g((function(){return[_,x]})),default:g((function(){return[Object(r["m"])(f,{index:"home"},{default:g((function(){return[w]})),_:1})]})),_:1})]})),_:1},8,["default-active"]),Object(r["m"])(d,{router:!0,"default-active":u.handlePath(),"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:g((function(){return[Object(r["m"])(s,{index:"2"},{title:g((function(){return[y,k]})),default:g((function(){return[Object(r["m"])(f,{index:"error"},{default:g((function(){return[M]})),_:1})]})),_:1})]})),_:1},8,["default-active"]),Object(r["m"])(d,{router:!0,"default-active":u.handlePath(),"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:g((function(){return[Object(r["m"])(s,{index:"3"},{title:g((function(){return[F,$]})),default:g((function(){return[Object(r["m"])(f,{index:"/login"},{default:g((function(){return[P]})),_:1})]})),_:1})]})),_:1},8,["default-active"])]})),_:1}),Object(r["m"])(p,null,{default:g((function(){return[Object(r["m"])(m)]})),_:1})]})),_:1})]})),_:1})})),S=(n("ac1f"),n("1276"),{data:function(){return{}},methods:{logout:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$confirm("此操作将退出该账户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:localStorage.removeItem("token"),e.$router.back(),e.$message({message:"退出成功",type:"success",duration:800}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$message({message:"退出取消",type:"info",duration:800});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},handlePath:function(){var e=this.$route.path,t=e.split("/");return t[2]}}});n("247f");S.render=I,S.__scopeId="data-v-7a629cee";var T=S,V=Object(r["fb"])("data-v-2fec671d"),C=V((function(e,t,n,c,o,u){return Object(r["D"])(),Object(r["i"])("div",null,"这里是错误信息")})),D={};n("6495");D.render=C,D.__scopeId="data-v-2fec671d";var R=D,E=Object(r["fb"])("data-v-516f1496"),q=E((function(e,t,n,c,o,u){return Object(r["D"])(),Object(r["i"])("div",null,"这里是用户信息")})),B={};n("15bc");B.render=q,B.__scopeId="data-v-516f1496";var G=B,J=[{path:"/",redirect:"/login"},{path:"/login",component:p},{path:"/index",component:T,children:[{path:"home",component:G},{path:"error",component:R}]}],L=Object(l["a"])({history:Object(l["b"])(),routes:J});L.beforeEach((function(e,t,n){if("/login"===e.path)n();else{var r=localStorage.getItem("token");r?n():n("/login")}}));var U=L,A=n("3fd4");n("7dd6"),n("35a13");Object(r["h"])(a).use(A["a"]).use(U).mount("#app")},6495:function(e,t,n){"use strict";n("82fb")},"75a3":function(e,t,n){},"82fb":function(e,t,n){},ab52:function(e,t,n){},c027:function(e,t,n){"use strict";n("0c0b")},cf05:function(e,t,n){e.exports=n.p+"img/logo.c96272dd.png"}});
//# sourceMappingURL=app.1d78c57b.js.map