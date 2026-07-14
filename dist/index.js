"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(l,i){
var n=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/stats-incr-range/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function o(a){var r,e;if(!n(a))throw new TypeError(s('1LN3w',a));for(r=v();e=a.next(),!e.done;)typeof e.value=="number"?r(e.value):r(NaN);return r()}i.exports=o
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
