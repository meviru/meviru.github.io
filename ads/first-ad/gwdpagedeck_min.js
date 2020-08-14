(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g,k=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},m=k(this),n="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={J:!0},t={};try{t.__proto__=r;q=t.J;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var u=p,goog=goog||{},v=this||self,w=Date.now,x=function(a,b){a=a.split(".");var c=v;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var y=function(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d)},z=function(a,b,c){var d=function(e){a.removeEventListener(b,d);c(e)};a.addEventListener(b,d)};var A="center top bottom left right transparent".split(" ");var B=["-ms-","-moz-","-webkit-",""],C=function(a,b){var c=void 0===c?!1:c;for(var d,e,f=0;f<B.length;f++)d=B[f]+"transition-duration",e=(c?B[f]:"")+b,a.style.setProperty(d,e)},D=function(a){var b=document,c=b.getElementsByTagName("head")[0];if(!c){var d=b.getElementsByTagName("body")[0];c=b.createElement("head");d.parentNode.insertBefore(c,d)}b=b.createElement("style");b.textContent=a;c.appendChild(b);return b};var E=function(a){for(var b=0;b<A.length;b++)a.classList.remove(A[b])},F=function(a,b){var c=function(){a.removeEventListener("webkitTransitionEnd",c);a.removeEventListener("transitionend",c);b()};a.addEventListener("webkitTransitionEnd",c);a.addEventListener("transitionend",c)},G=function(a,b,c,d){c="transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+c+","+d+",0,1);";return a+"."+b+"{-webkit-"+c+"-moz-"+c+"-ms-"+c+c+"}"},H=function(a,b,c){a=(a&&"#")+a+".gwd-pagedeck > .gwd-page";return G(a,"center",0,
0)+G(a,"top",0,c)+G(a,"bottom",0,-c)+G(a,"left",b,0)+G(a,"right",-b,0)},I=function(a,b,c,d,e,f,h){d=void 0===d?"none":d;this.b=a;this.c=b;this.C=c;this.h="none"==d?0:void 0===e?1E3:e;this.i=void 0===f?"linear":f;this.l=[];if(this.h){a=d;h=void 0===h?"top":h;if(this.b){this.b.classList.add("gwd-page");this.b.classList.add("center");b="center";if("push"==a)switch(h){case "top":b="top";break;case "bottom":b="bottom";break;case "left":b="left";break;case "right":b="right"}this.l.push(b);"fade"==a&&this.l.push("transparent")}b=
"center";if("none"!=a&&"fade"!=a)switch(h){case "top":b="bottom";break;case "bottom":b="top";break;case "left":b="right";break;case "right":b="left"}this.c.classList.add(b);this.c.classList.add("gwd-page");"fade"==a&&this.c.classList.add("transparent")}};
I.prototype.start=function(){if(this.h){F(this.c,this.R.bind(this));this.b&&(C(this.b,this.h+"ms"),this.b.classList.add(this.i));C(this.c,this.h+"ms");this.c.classList.add(this.i);var a=this.c;a.setAttribute("gwd-reflow",a.offsetWidth);if(this.b)for(a=0;a<this.l.length;a++)this.b.classList.add(this.l[a]);E(this.c)}else this.C()};I.prototype.R=function(){this.b&&(E(this.b),C(this.b,0),this.b.classList.remove(this.i));C(this.c,0);this.c.classList.remove(this.i);this.C()};var J=function(){this.H=""};J.prototype.toString=function(){return"SafeStyle{"+this.H+"}"};J.prototype.m=function(a){this.H=a};(new J).m("");var K=function(){this.G=""};K.prototype.toString=function(){return"SafeStyleSheet{"+this.G+"}"};K.prototype.m=function(a){this.G=a};(new K).m("");Object.freeze&&Object.freeze([]);var L=function(a,b){var c=(c=v.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):w();a={label:a,type:9,value:c};b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)};var N={},O=!1,P=!1;N.O=function(a){O||(O=!0,L("11",a))};N.B=function(a){P||(P=!0,L("12",a))};N.P=function(a,b,c){c=void 0===c?0:c;var d=b;d=void 0===d?v:d;if(d=(d=d.performance)&&d.now?d.now():null)a={label:a,type:c,value:d},b=b.google_js_reporting_queue=b.google_js_reporting_queue||[],2048>b.length&&b.push(a)};N.reset=function(a){P=O=!1;(a.google_js_reporting_queue=a.google_js_reporting_queue||[]).length=0};x("gwd.rumUtil",N);x("gwd.rumUtil.logContentLoading",N.O);
x("gwd.rumUtil.logContentRendered",N.B);x("gwd.rumUtil.logTimingEvent",N.P);x("gwd.rumUtil.reset",N.reset);var Q=function(){var a=HTMLElement.call(this)||this;z(window,"WebComponentsReady",a.N.bind(a));a.v=a.j.bind(a,"shake");a.A=a.j.bind(a,"tilt");a.u=a.j.bind(a,"rotatetoportrait");a.s=a.j.bind(a,"rotatetolandscape");a.a=[];a.D=a.M.bind(a);a.K=a.L.bind(a);a.F=null;a.g=null;a.f=-1;a.o=!1;return a},R=HTMLElement;Q.prototype=n(R.prototype);Q.prototype.constructor=Q;
if(u)u(Q,R);else for(var S in R)if("prototype"!=S)if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(R,S);T&&Object.defineProperty(Q,S,T)}else Q[S]=R[S];Q.prototype.connectedCallback=function(){this.addEventListener("pageload",this.D,!1);document.body.addEventListener("shake",this.v,!0);document.body.addEventListener("tilt",this.A,!0);document.body.addEventListener("rotatetoportrait",this.u,!0);document.body.addEventListener("rotatetolandscape",this.s,!0)};
Q.prototype.disconnectedCallback=function(){this.removeEventListener("pageload",this.D,!1);document.body&&(document.body.removeEventListener("shake",this.v,!0),document.body.removeEventListener("tilt",this.A,!0),document.body.removeEventListener("rotatetoportrait",this.u,!0),document.body.removeEventListener("rotatetolandscape",this.s,!0))};
Q.prototype.N=function(){this.classList.add("gwd-pagedeck");this.F||(this.F=D(H(this.id,this.offsetWidth,this.offsetHeight)));this.a=Array.prototype.slice.call(this.querySelectorAll("gwd-page"));this.a.forEach(function(a){a.classList.add("gwd-page")});for(y("beforepagesdetached",this,{pages:this.a.slice()});this.firstChild;)this.removeChild(this.firstChild);-1==this.f&&void 0!==this.I&&this.goToPage(this.I)};
var V=function(a,b,c,d,e,f){if(!(a.f==b||0>b||b>a.a.length-1||a.g)){var h=a.a[a.f],l=a.a[b];a.f=b;a.g=new I(h,l,a.K,c,d,e,f);var M=l.gwdLoad&&!l.gwdIsLoaded();a.o=M;z(l,"attached",function(){l.gwdActivate();M?l.gwdLoad():U(a)});a.appendChild(l)}};Q.prototype.M=function(a){this.o&&a.target.parentNode==this&&(U(this),this.o=!1)};var U=function(a){(0,N.B)(window);a.g.start();y("pagetransitionstart",a)};g=Q.prototype;
g.L=function(){if(this.g){var a=this.g.b,b=this.g.c;this.g=null;y("pagetransitionend",this,{outgoingPage:a?a:null,incomingPage:b});a&&a.gwdDeactivate();b.gwdPresent()}};g.findPageIndexByAttributeValue=function(a,b){for(var c=this.a.length,d,e=0;e<c;e++)if(d=this.a[e],"boolean"==typeof b){if(d.hasAttribute(a))return e}else if(d.getAttribute(a)==b)return e;return-1};g.goToNextPage=function(a,b,c,d,e){var f=this.f,h=f+1;h>=this.a.length&&(h=a?0:f);V(this,h,b,c,d,e)};
g.goToPreviousPage=function(a,b,c,d,e){var f=this.f,h=this.a.length,l=f-1;0>l&&(l=a?h-1:f);V(this,l,b,c,d,e)};g.goToPage=function(a,b,c,d,e){this.a.length?(a="number"==typeof a?a:this.findPageIndexByAttributeValue("id",a),0<=a&&V(this,a,b,c,d,e)):this.I=a};g.getPages=function(){return this.a};g.getPage=function(a){if("number"!=typeof a){if(!a)return null;a=this.findPageIndexByAttributeValue("id",a)}return 0>a||a>this.a.length-1?null:this.a[a]};g.getCurrentPage=function(){return this.getPage(this.f)};
g.getDefaultPage=function(){var a=this.getAttribute("default-page");return a?this.getPage(this.findPageIndexByAttributeValue("id",a)):this.getPage(0)};g.getOrientationSpecificPage=function(a,b){b=this.getPage(b);var c=b.getAttribute("alt-orientation-page");if(!c)return b;var d=b.isPortrait();a=1==a;c=this.getPage(c);return a==d?b:c};g.j=function(a,b){if(b.target==document.body){var c=this.getPage(this.f);y(a,c,b.detail)}};
g.getElementById=function(a){for(var b=this.a.length,c=0;c<b;c++){var d=this.a[c].querySelector("#"+a);if(d)return d}return null};g.getElementsBySelector=function(a){for(var b=this.a.length,c=[],d=0;d<b;d++){var e=this.a[d].querySelectorAll(a);e&&(c=c.concat(Array.prototype.slice.call(e)))}return c};m.Object.defineProperties(Q.prototype,{currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<=this.f?this.f:void 0}}});customElements.define("gwd-pagedeck",Q);}).call(this);