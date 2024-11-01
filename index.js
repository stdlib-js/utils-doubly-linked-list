// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function i(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function n(t,e,r){var n=!1,a=e-t.length;return a<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+i(a):i(a)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function o(t){var e,i,o;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=t.arg,o=parseInt(i,10),!isFinite(o)){if(!r(i))throw new Error("invalid integer. Value: "+i);o=0}return o<0&&("u"===t.specifier||10!==e)&&(o=4294967295+o+1),o<0?(i=(-o).toString(e),t.precision&&(i=n(i,t.precision,t.padRight)),i="-"+i):(i=o.toString(e),o||t.precision?t.precision&&(i=n(i,t.precision,t.padRight)):i="",t.sign&&(i=t.sign+i)),16===e&&(t.alternate&&(i="0x"+i),i=t.specifier===s.call(t.specifier)?s.call(i):a.call(i)),8===e&&t.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,h=String.prototype.replace,f=/e\+(\d)$/,c=/e-(\d)$/,g=/^(\d+)$/,_=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(t){var e,i,n=parseFloat(t.arg);if(!isFinite(n)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+i);n=t.arg}switch(t.specifier){case"e":case"E":i=n.toExponential(t.precision);break;case"f":case"F":i=n.toFixed(t.precision);break;case"g":case"G":l(n)<1e-4?((e=t.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(t.precision),t.alternate||(i=h.call(i,b,"$1e"),i=h.call(i,v,"e"),i=h.call(i,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return i=h.call(i,f,"e+0$1"),i=h.call(i,c,"e-0$1"),t.alternate&&(i=h.call(i,g,"$1."),i=h.call(i,_,"$1.e")),n>=0&&t.sign&&(i=t.sign+i),i=t.specifier===u.call(t.specifier)?u.call(i):p.call(i)}function y(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var m=String.fromCharCode,x=Array.isArray;function E(t){return t!=t}function k(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function S(t){var e,r,i,a,s,l,p,u,h,f,c,g,_;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",p=1,u=0;u<t.length;u++)if("string"==typeof(i=t[u]))l+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),r=i.flags,h=0;h<r.length;h++)switch(a=r.charAt(h)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=o(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!E(i.arg)){if((s=parseInt(i.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(s)?String(i.arg):m(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,c=i.width,g=i.padRight,_=void 0,(_=c-f.length)<0?f:f=g?f+y(_):y(_)+f)),l+=i.arg||"",p+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function V(t){var e,r,i,n;for(r=[],n=0,i=T.exec(t);i;)(e=t.slice(n,T.lastIndex-i[0].length)).length&&r.push(e),r.push(j(i)),n=T.lastIndex,i=T.exec(t);return(e=t.slice(n)).length&&r.push(e),r}function A(t){var e,r;if("string"!=typeof t)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[V(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return S.apply(null,e)}var $,F=Object.prototype,I=F.toString,L=F.__defineGetter__,C=F.__defineSetter__,O=F.__lookupGetter__,R=F.__lookupSetter__;$=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var i,n,a,s;if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((n="value"in r)&&(O.call(t,e)||R.call(t,e)?(i=t.__proto__,t.__proto__=F,delete t[e],t[e]=r.value,t.__proto__=i):t[e]=r.value),a="get"in r,s="set"in r,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(t,e,r.get),s&&C&&C.call(t,e,r.set),t};var P=$;function Z(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var G,W,U,B=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X&&"symbol"==typeof X("foo")&&(W="iterator",null!=(G=X)&&B.call(G,W))&&"symbol"==typeof X.iterator?Symbol.iterator:null;function J(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function M(t){return P(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),P(this,"prev",{configurable:!1,enumerable:!0,get:function(){return this._prev}}),this.value=t,P(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),P(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function N(){return this instanceof N?(this._length=0,this._first=null,this._last=null,this):new N}return Z(N.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),Z(N.prototype,"first",(function(){if(this._length)return this._first})),Z(N.prototype,"insert",(function(t,e,r){var i,n;if(arguments.length>2){if("before"!==(i=r)&&"after"!==i)throw new Error(J("1TLB4",i))}else i="after";if("after"===i&&t===this._last)return this.push(e);if("before"===i&&t===this._first)return this.unshift(e);for(n=this._first;n!==this._last&&n!==t;)n=n._next;if(n===this._last&&n!==t)throw new Error(J("1TL1e"));return n=new M(e),"after"===i?(t._next._prev=n,n._next=t._next,t._next=n,n._prev=t):(t._prev._next=n,n._prev=t._prev,t._prev=n,n._next=t),this._length+=1,this})),Z(N.prototype,"iterator",(function(t){var e,r,i,n,a,s,o;if(arguments.length){if("forward"!==(a=t)&&"reverse"!==a)throw new Error(J("1TLB5",a))}else a="forward";return i=this,"forward"===a?(o=-1,s=1):(o=this._length,s=-1),e=this.toArray(),Z(r={},"next",(function(){return o+=s,n||o<0||o>=e.length?{done:!0}:{value:e[o],done:!1}})),Z(r,"return",(function(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}})),z&&Z(r,z,(function(){return i.iterator()})),r})),Z(N.prototype,"last",(function(){if(this._length)return this._last})),U=N.prototype,P(U,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),Z(N.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),Z(N.prototype,"push",(function(t){var e;return e=new M(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),Z(N.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error(J("1TL1e"));return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),Z(N.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),Z(N.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),Z(N.prototype,"toJSON",(function(){var t={type:"doubly-linked-list"};return t.data=this.toArray(),t})),Z(N.prototype,"unshift",(function(t){var e;return e=new M(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),N},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).doublyLinkedList=e();
//# sourceMappingURL=index.js.map