// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";function s(t){return n(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),n(this,"prev",{configurable:!1,enumerable:!0,get:function(){return this._prev}}),this.value=t,n(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),n(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function h(){return this instanceof h?(this._length=0,this._first=null,this._last=null,this):new h}t(h.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),t(h.prototype,"first",(function(){if(this._length)return this._first})),t(h.prototype,"insert",(function(t,e,r){var n,h;if(arguments.length>2){if("before"!==(n=r)&&"after"!==n)throw new Error(i("invalid argument. Third argument must be a recognized location. Value: `%s`.",n))}else n="after";if("after"===n&&t===this._last)return this.push(e);if("before"===n&&t===this._first)return this.unshift(e);for(h=this._first;h!==this._last&&h!==t;)h=h._next;if(h===this._last&&h!==t)throw new Error("invalid argument. The list does not contain the provided list node.");return h=new s(e),"after"===n?(t._next._prev=h,h._next=t._next,t._next=h,h._prev=t):(t._prev._next=h,h._prev=t._prev,t._prev=h,h._next=t),this._length+=1,this})),t(h.prototype,"iterator",(function(e){var n,s,h,l,o,u,a;if(arguments.length){if("forward"!==(o=e)&&"reverse"!==o)throw new Error(i("invalid argument. Must provide a recognized iteration direction. Value: `%s`.",o))}else o="forward";return h=this,"forward"===o?(a=-1,u=1):(a=this._length,u=-1),n=this.toArray(),t(s={},"next",_),t(s,"return",f),r&&t(s,r,p),s;function _(){return a+=u,l||a<0||a>=n.length?{done:!0}:{value:n[a],done:!1}}function f(t){return l=!0,arguments.length?{value:t,done:!0}:{done:!0}}function p(){return h.iterator()}})),t(h.prototype,"last",(function(){if(this._length)return this._last})),e(h.prototype,"length",(function(){return this._length})),t(h.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),t(h.prototype,"push",(function(t){var e;return e=new s(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),t(h.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),t(h.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),t(h.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),t(h.prototype,"toJSON",(function(){var t={type:"doubly-linked-list"};return t.data=this.toArray(),t})),t(h.prototype,"unshift",(function(t){var e;return e=new s(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this}));export{h as default};
//# sourceMappingURL=index.mjs.map
