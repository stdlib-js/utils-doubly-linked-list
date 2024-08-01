"use strict";var v=function(s,t){return function(){return t||s((t={exports:{}}).exports,t),t.exports}};var c=v(function(L,p){"use strict";var o=require("@stdlib/utils-define-property");function A(s){return o(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),o(this,"prev",{configurable:!1,enumerable:!0,get:function(){return this._prev}}),this.value=s,o(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),o(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}p.exports=A});var d=v(function(S,y){"use strict";var l=require("@stdlib/utils-define-nonenumerable-read-only-property"),E=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),g=require("@stdlib/symbol-iterator"),x=require("@stdlib/string-format"),_=c();function n(){return this instanceof n?(this._length=0,this._first=null,this._last=null,this):new n}l(n.prototype,"clear",function(){return this._length=0,this._first=null,this._last=null,this});l(n.prototype,"first",function(){if(this._length)return this._first});l(n.prototype,"insert",function(t,e,i){var a,r;if(arguments.length>2){if(a=i,a!=="before"&&a!=="after")throw new Error(x("invalid argument. Third argument must be a recognized location. Value: `%s`.",a))}else a="after";if(a==="after"&&t===this._last)return this.push(e);if(a==="before"&&t===this._first)return this.unshift(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last&&r!==t)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new _(e),a==="after"?(t._next._prev=r,r._next=t._next,t._next=r,r._prev=t):(t._prev._next=r,r._prev=t._prev,t._prev=r,r._next=t),this._length+=1,this});l(n.prototype,"iterator",function(t){var e,i,a,r,h,f,u;if(arguments.length){if(h=t,h!=="forward"&&h!=="reverse")throw new Error(x("invalid argument. Must provide a recognized iteration direction. Value: `%s`.",h))}else h="forward";return a=this,h==="forward"?(u=-1,f=1):(u=this._length,f=-1),e=this.toArray(),i={},l(i,"next",w),l(i,"return",m),g&&l(i,g,b),i;function w(){return u+=f,r||u<0||u>=e.length?{done:!0}:{value:e[u],done:!1}}function m(q){return r=!0,arguments.length?{value:q,done:!0}:{done:!0}}function b(){return a.iterator()}});l(n.prototype,"last",function(){if(this._length)return this._last});E(n.prototype,"length",function(){return this._length});l(n.prototype,"pop",function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t});l(n.prototype,"push",function(t){var e;return e=new _(t),this._length===0?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this});l(n.prototype,"remove",function(t){var e,i;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,i=this._first;i!==this._last&&i!==t;)i=i._next;if(i===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e});l(n.prototype,"shift",function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t});l(n.prototype,"toArray",function(){var t,e,i;for(e=[],t=this._first,i=0;i<this._length;i++)e.push(t.value),t=t.next;return e});l(n.prototype,"toJSON",function(){var t={};return t.type="doubly-linked-list",t.data=this.toArray(),t});l(n.prototype,"unshift",function(t){var e;return e=new _(t),this._length===0?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this});y.exports=n});var N=d();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
