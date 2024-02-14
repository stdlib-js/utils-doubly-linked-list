// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function o(e){var r,i,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,o=parseInt(i,10),!isFinite(o)){if(!t(i))throw new Error("invalid integer. Value: "+i);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(i=(-o).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=o.toString(r),o||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var c=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,h=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,_=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":c(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=h.call(i,b,"$1e"),i=h.call(i,w,"e"),i=h.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=h.call(i,f,"e+0$1"),i=h.call(i,g,"e-0$1"),e.alternate&&(i=h.call(i,d,"$1."),i=h.call(i,_,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+m(i):m(i)+e}var E=String.fromCharCode,k=isNaN,S=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,i,a,s,c,p,u,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,h=0;h<t.length;h++)switch(a=t.charAt(h)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=o(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((s=parseInt(i.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(s)?String(i.arg):E(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var R,j=Object.prototype,Z=j.toString,O=j.__defineGetter__,W=j.__defineSetter__,P=j.__lookupGetter__,G=j.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,s;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=j,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),s&&W&&W.call(e,r,t.set),e};var L=R;function N(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var z=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0;var X,M,J="function"==typeof U&&"symbol"==typeof U("foo")&&(M="iterator",null!=(X=U)&&z.call(X,M))&&"symbol"==typeof U.iterator?Symbol.iterator:null;function q(e){return"number"==typeof e}function B(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function D(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+B(n):B(n)+e,i&&(e="-"+e)),e}var H=String.prototype.toLowerCase,K=String.prototype.toUpperCase;function Q(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!q(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=D(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=D(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===K.call(e.specifier)?K.call(t):H.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Y(e){return"string"==typeof e}var ee=Math.abs,re=String.prototype.toLowerCase,te=String.prototype.toUpperCase,ie=String.prototype.replace,ne=/e\+(\d)$/,ae=/e-(\d)$/,se=/^(\d+)$/,oe=/^(\d+)e/,le=/\.0$/,ce=/\.0*e/,pe=/(\..*[^0])0*e/;function ue(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!q(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ee(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ie.call(t,pe,"$1e"),t=ie.call(t,ce,"e"),t=ie.call(t,le,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ie.call(t,ne,"e+0$1"),t=ie.call(t,ae,"e-0$1"),e.alternate&&(t=ie.call(t,se,"$1."),t=ie.call(t,oe,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===te.call(e.specifier)?te.call(t):re.call(t)}function he(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function fe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+he(i):he(i)+e}var ge=String.fromCharCode,de=isNaN,_e=Array.isArray;function ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function we(e){var r,t,i,n,a,s,o,l,c;if(!_e(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",o=1,l=0;l<e.length;l++)if(Y(i=e[l]))s+=i;else{if(r=void 0!==i.precision,!(i=ve(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(n=t.charAt(c)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[o],10),o+=1,de(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[o],10),o+=1,de(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Q(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!de(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=de(a)?String(i.arg):ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ue(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=D(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fe(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}var be,ye=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function xe(e){var r,t,i,n;for(t=[],n=0,i=ye.exec(e);i;)(r=e.slice(n,ye.lastIndex-i[0].length)).length&&t.push(r),t.push(me(i)),n=ye.lastIndex,i=ye.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ee(e){return"string"==typeof e}function ke(e){var r,t,i;if(!Ee(e))throw new TypeError(ke("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=xe(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return we.apply(null,t)}function Se(e){return L(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),L(this,"prev",{configurable:!1,enumerable:!0,get:function(){return this._prev}}),this.value=e,L(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),L(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function Ve(){return this instanceof Ve?(this._length=0,this._first=null,this._last=null,this):new Ve}N(Ve.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),N(Ve.prototype,"first",(function(){if(this._length)return this._first})),N(Ve.prototype,"insert",(function(e,r,t){var i,n;if(arguments.length>2){if("before"!==(i=t)&&"after"!==i)throw new Error(ke("invalid argument. Third argument must be a recognized location. Value: `%s`.",i))}else i="after";if("after"===i&&e===this._last)return this.push(r);if("before"===i&&e===this._first)return this.unshift(r);for(n=this._first;n!==this._last&&n!==e;)n=n._next;if(n===this._last&&n!==e)throw new Error("invalid argument. The list does not contain the provided list node.");return n=new Se(r),"after"===i?(e._next._prev=n,n._next=e._next,e._next=n,n._prev=e):(e._prev._next=n,n._prev=e._prev,e._prev=n,n._next=e),this._length+=1,this})),N(Ve.prototype,"iterator",(function(e){var r,t,i,n,a,s,o;if(arguments.length){if("forward"!==(a=e)&&"reverse"!==a)throw new Error(ke("invalid argument. Must provide a recognized iteration direction. Value: `%s`.",a))}else a="forward";return i=this,"forward"===a?(o=-1,s=1):(o=this._length,s=-1),r=this.toArray(),N(t={},"next",l),N(t,"return",c),J&&N(t,J,p),t;function l(){return o+=s,n||o<0||o>=r.length?{done:!0}:{value:r[o],done:!1}}function c(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return i.iterator()}})),N(Ve.prototype,"last",(function(){if(this._length)return this._last})),be=Ve.prototype,L(be,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),N(Ve.prototype,"pop",(function(){var e;return this._length&&(e=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),e})),N(Ve.prototype,"push",(function(e){var r;return r=new Se(e),0===this._length?(this._first=r,this._last=r):(r._prev=this._last,this._last._next=r,this._last=r),this._length+=1,this})),N(Ve.prototype,"remove",(function(e){var r,t;if(e===this._first)return this.shift();if(e===this._last)return this.pop();for(r=e.value,t=this._first;t!==this._last&&t!==e;)t=t._next;if(t===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return e._prev._next=e._next,e._next._prev=e._prev,this._length-=1,r})),N(Ve.prototype,"shift",(function(){var e;return this._length&&(e=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),e})),N(Ve.prototype,"toArray",(function(){var e,r,t;for(r=[],e=this._first,t=0;t<this._length;t++)r.push(e.value),e=e.next;return r})),N(Ve.prototype,"toJSON",(function(){var e={type:"doubly-linked-list"};return e.data=this.toArray(),e})),N(Ve.prototype,"unshift",(function(e){var r;return r=new Se(e),0===this._length?(this._first=r,this._last=r):(r._next=this._first,this._first._prev=r,this._first=r),this._length+=1,this}));export{Ve as default};
//# sourceMappingURL=mod.js.map
