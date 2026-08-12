(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Bm={exports:{}},Gl={},zm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),Xv=Symbol.for("react.strict_mode"),Yv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Qv=Symbol.for("react.lazy"),Ah=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Gm={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=Gs.prototype;function od(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}var ad=od.prototype=new Wm;ad.constructor=od;Vm(ad,Gs.prototype);ad.isPureReactComponent=!0;var Rh=Array.isArray,Xm=Object.prototype.hasOwnProperty,ld={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,i)&&!Ym.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Ko,type:t,key:s,ref:o,props:r,_owner:ld.current}}function e_(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function t_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?t_(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case Gv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+dc(o,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),Ya(r,e,n,"",function(c){return c})):r!=null&&(cd(r)&&(r=e_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rh(t))for(var l=0;l<t.length;l++){s=t[l];var a=i+dc(s,l);o+=Ya(s,e,n,a,r)}else if(a=jv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=i+dc(s,l++),o+=Ya(s,e,n,a,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function n_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},$a={transition:null},i_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:$a,ReactCurrentOwner:ld};function qm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Gs;Ve.Fragment=Wv;Ve.Profiler=Yv;Ve.PureComponent=od;Ve.StrictMode=Xv;Ve.Suspense=Zv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_;Ve.act=qm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Xm.call(e,a)&&!Ym.hasOwnProperty(a)&&(i[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:Ko,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$v,_context:t},t.Consumer=t};Ve.createElement=$m;Ve.createFactory=function(t){var e=$m.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Kv,render:t}};Ve.isValidElement=cd;Ve.lazy=function(t){return{$$typeof:Qv,_payload:{_status:-1,_result:t},_init:n_}};Ve.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};Ve.unstable_act=qm;Ve.useCallback=function(t,e){return an.current.useCallback(t,e)};Ve.useContext=function(t){return an.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return an.current.useEffect(t,e)};Ve.useId=function(){return an.current.useId()};Ve.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return an.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ve.useRef=function(t){return an.current.useRef(t)};Ve.useState=function(t){return an.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return an.current.useTransition()};Ve.version="18.3.1";zm.exports=Ve;var je=zm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=je,s_=Symbol.for("react.element"),o_=Symbol.for("react.fragment"),a_=Object.prototype.hasOwnProperty,l_=r_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c_={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)a_.call(e,i)&&!c_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:s_,type:t,key:s,ref:o,props:r,_owner:l_.current}}Gl.Fragment=o_;Gl.jsx=Km;Gl.jsxs=Km;Bm.exports=Gl;var nt=Bm.exports,Zm={exports:{}},An={},Jm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,V){var I=L.length;L.push(V);e:for(;0<I;){var J=I-1>>>1,q=L[J];if(0<r(q,V))L[J]=V,L[I]=q,I=J;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var V=L[0],I=L.pop();if(I!==V){L[0]=I;e:for(var J=0,q=L.length,ve=q>>>1;J<ve;){var _e=2*(J+1)-1,Me=L[_e],k=_e+1,ne=L[k];if(0>r(Me,I))k<q&&0>r(ne,Me)?(L[J]=ne,L[k]=I,J=k):(L[J]=Me,L[_e]=I,J=_e);else if(k<q&&0>r(ne,I))L[J]=ne,L[k]=I,J=k;else break e}}return V}function r(L,V){var I=L.sortIndex-V.sortIndex;return I!==0?I:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,f=null,u=3,p=!1,v=!1,T=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=L)i(c),V.sortIndex=V.expirationTime,e(a,V);else break;V=n(c)}}function S(L){if(T=!1,y(L),!v)if(n(a)!==null)v=!0,Z(M);else{var V=n(c);V!==null&&B(S,V.startTime-L)}}function M(L,V){v=!1,T&&(T=!1,d(g),g=-1),p=!0;var I=u;try{for(y(V),f=n(a);f!==null&&(!(f.expirationTime>V)||L&&!b());){var J=f.callback;if(typeof J=="function"){f.callback=null,u=f.priorityLevel;var q=J(f.expirationTime<=V);V=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(a)&&i(a),y(V)}else i(a);f=n(a)}if(f!==null)var ve=!0;else{var _e=n(c);_e!==null&&B(S,_e.startTime-V),ve=!1}return ve}finally{f=null,u=I,p=!1}}var A=!1,w=null,g=-1,C=5,R=-1;function b(){return!(t.unstable_now()-R<C)}function D(){if(w!==null){var L=t.unstable_now();R=L;var V=!0;try{V=w(!0,L)}finally{V?H():(A=!1,w=null)}}else A=!1}var H;if(typeof x=="function")H=function(){x(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,F=$.port2;$.port1.onmessage=D,H=function(){F.postMessage(null)}}else H=function(){m(D,0)};function Z(L){w=L,A||(A=!0,H())}function B(L,V){g=m(function(){L(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Z(M))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var V=3;break;default:V=u}var I=u;u=V;try{return L()}finally{u=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=u;u=L;try{return V()}finally{u=I}},t.unstable_scheduleCallback=function(L,V,I){var J=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=I+q,L={id:h++,callback:V,priorityLevel:L,startTime:I,expirationTime:q,sortIndex:-1},I>J?(L.sortIndex=I,e(c,L),n(a)===null&&L===n(c)&&(T?(d(g),g=-1):T=!0,B(S,I-J))):(L.sortIndex=q,e(a,L),v||p||(v=!0,Z(M))),L},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(L){var V=u;return function(){var I=u;u=V;try{return L.apply(this,arguments)}finally{u=I}}}})(Qm);Jm.exports=Qm;var u_=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=je,wn=u_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,bo={};function Xr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(bo[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,d_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bh={},Ph={};function h_(t){return Mu.call(Ph,t)?!0:Mu.call(bh,t)?!1:d_.test(t)?Ph[t]=!0:(bh[t]=!0,!1)}function p_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m_(t,e,n,i){if(e===null||typeof e>"u"||p_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,fd);Yt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,fd);Yt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,fd);Yt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m_(e,n,r,i)&&(n=null),i||r===null?h_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,hc;function co(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var pc=!1;function mc(t,e){if(!t||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var a=`
`+r[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function g_(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=mc(t.type,!1),t;case 11:return t=mc(t.type.render,!1),t;case 1:return t=mc(t.type,!0),t;default:return""}}function Au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case fs:return"Portal";case Eu:return"Profiler";case hd:return"StrictMode";case Tu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case md:return e=t.displayName||null,e!==null?e:Au(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Au(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function __(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=__(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function Cu(t,e){sg(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&bu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bu(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(uo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function og(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x_=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){x_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var S_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(S_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,Ts=null,ws=null;function Fh(t){if(t=Qo(t)){if(typeof Uu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ql(e),Uu(t.stateNode,t.type,e))}}function fg(t){Ts?ws?ws.push(t):ws=[t]:Ts=t}function dg(){if(Ts){var t=Ts,e=ws;if(ws=Ts=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function hg(t,e){return t(e)}function pg(){}var gc=!1;function mg(t,e,n){if(gc)return t(e,n);gc=!0;try{return hg(t,e,n)}finally{gc=!1,(Ts!==null||ws!==null)&&(pg(),dg())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Fu=!1;if(Ii)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Fu=!1}function y_(t,e,n,i,r,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var So=!1,dl=null,hl=!1,Ou=null,M_={onError:function(t){So=!0,dl=t}};function E_(t,e,n,i,r,s,o,l,a){So=!1,dl=null,y_.apply(M_,arguments)}function T_(t,e,n,i,r,s,o,l,a){if(E_.apply(this,arguments),So){if(So){var c=dl;So=!1,dl=null}else throw Error(re(198));hl||(hl=!0,Ou=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oh(t){if(Yr(t)!==t)throw Error(re(188))}function w_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Oh(r),t;if(s===i)return Oh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function vg(t){return t=w_(t),t!==null?_g(t):null}function _g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_g(t);if(e!==null)return e;t=t.sibling}return null}var xg=wn.unstable_scheduleCallback,kh=wn.unstable_cancelCallback,A_=wn.unstable_shouldYield,R_=wn.unstable_requestPaint,Rt=wn.unstable_now,C_=wn.unstable_getCurrentPriorityLevel,vd=wn.unstable_ImmediatePriority,Sg=wn.unstable_UserBlockingPriority,pl=wn.unstable_NormalPriority,b_=wn.unstable_LowPriority,yg=wn.unstable_IdlePriority,Wl=null,fi=null;function P_(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:I_,L_=Math.log,D_=Math.LN2;function I_(t){return t>>>=0,t===0?32:31-(L_(t)/D_|0)|0}var ca=64,ua=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=fo(l):(s&=o,s!==0&&(i=fo(s)))}else o=n&~r,o!==0?i=fo(o):s!==0&&(i=fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function N_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),l=1<<o,a=r[o];a===-1?(!(l&n)||l&i)&&(r[o]=N_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function F_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,xd,wg,Ag,Rg,Bu=!1,fa=[],sr=null,or=null,ar=null,Do=new Map,Io=new Map,ji=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qo(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k_(t,e,n,i,r){switch(e){case"focusin":return sr=Zs(sr,t,e,n,i,r),!0;case"dragenter":return or=Zs(or,t,e,n,i,r),!0;case"mouseover":return ar=Zs(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Do.set(s,Zs(Do.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,Zs(Io.get(s)||null,t,e,n,i,r)),!0}return!1}function Cg(t){var e=br(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=Qo(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function zh(t,e,n){qa(t)&&n.delete(e)}function B_(){Bu=!1,sr!==null&&qa(sr)&&(sr=null),or!==null&&qa(or)&&(or=null),ar!==null&&qa(ar)&&(ar=null),Do.forEach(zh),Io.forEach(zh)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,B_)))}function No(t){function e(r){return Js(r,t)}if(0<fa.length){Js(fa[0],t);for(var n=1;n<fa.length;n++){var i=fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&Js(sr,t),or!==null&&Js(or,t),ar!==null&&Js(ar,t),Do.forEach(e),Io.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&ji.shift()}var As=Bi.ReactCurrentBatchConfig,gl=!0;function z_(t,e,n,i){var r=rt,s=As.transition;As.transition=null;try{rt=1,Sd(t,e,n,i)}finally{rt=r,As.transition=s}}function H_(t,e,n,i){var r=rt,s=As.transition;As.transition=null;try{rt=4,Sd(t,e,n,i)}finally{rt=r,As.transition=s}}function Sd(t,e,n,i){if(gl){var r=zu(t,e,n,i);if(r===null)Rc(t,e,i,vl,n),Bh(t,i);else if(k_(r,t,e,n,i))i.stopPropagation();else if(Bh(t,i),e&4&&-1<O_.indexOf(t)){for(;r!==null;){var s=Qo(r);if(s!==null&&Tg(s),s=zu(t,e,n,i),s===null&&Rc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var vl=null;function zu(t,e,n,i){if(vl=null,t=gd(i),t=br(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C_()){case vd:return 1;case Sg:return 4;case pl:case b_:return 16;case yg:return 536870912;default:return 16}default:return 16}}var nr=null,yd=null,Ka=null;function Pg(){if(Ka)return Ka;var t,e=yd,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ka=r.slice(t,1<i?1-i:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Hh(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:Hh,this.isPropagationStopped=Hh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=Rn(Ws),Jo=_t({},Ws,{view:0,detail:0}),V_=Rn(Jo),_c,xc,Qs,Xl=_t({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(_c=t.screenX-Qs.screenX,xc=t.screenY-Qs.screenY):xc=_c=0,Qs=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Vh=Rn(Xl),G_=_t({},Xl,{dataTransfer:0}),W_=Rn(G_),X_=_t({},Jo,{relatedTarget:0}),Sc=Rn(X_),Y_=_t({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Rn(Y_),q_=_t({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K_=Rn(q_),Z_=_t({},Ws,{data:0}),Gh=Rn(Z_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function Ed(){return ex}var tx=_t({},Jo,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=Rn(tx),ix=_t({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Rn(ix),rx=_t({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),sx=Rn(rx),ox=_t({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Rn(ox),lx=_t({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Rn(lx),ux=[9,13,27,32],Td=Ii&&"CompositionEvent"in window,yo=null;Ii&&"documentMode"in document&&(yo=document.documentMode);var fx=Ii&&"TextEvent"in window&&!yo,Lg=Ii&&(!Td||yo&&8<yo&&11>=yo),Xh=" ",Yh=!1;function Dg(t,e){switch(t){case"keyup":return ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function dx(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(Yh=!0,Xh);case"textInput":return t=e.data,t===Xh&&Yh?null:t;default:return null}}function hx(t,e){if(hs)return t==="compositionend"||!Td&&Dg(t,e)?(t=Pg(),Ka=yd=nr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!px[t.type]:e==="textarea"}function Ng(t,e,n,i){fg(i),e=_l(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Mo=null,Uo=null;function mx(t){Xg(t,0)}function Yl(t){var e=gs(t);if(rg(e))return t}function gx(t,e){if(t==="change")return e}var Ug=!1;if(Ii){var yc;if(Ii){var Mc="oninput"in document;if(!Mc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Mc=typeof qh.oninput=="function"}yc=Mc}else yc=!1;Ug=yc&&(!document.documentMode||9<document.documentMode)}function Kh(){Mo&&(Mo.detachEvent("onpropertychange",Fg),Uo=Mo=null)}function Fg(t){if(t.propertyName==="value"&&Yl(Uo)){var e=[];Ng(e,Uo,t,gd(t)),mg(mx,e)}}function vx(t,e,n){t==="focusin"?(Kh(),Mo=e,Uo=n,Mo.attachEvent("onpropertychange",Fg)):t==="focusout"&&Kh()}function _x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function xx(t,e){if(t==="click")return Yl(e)}function Sx(t,e){if(t==="input"||t==="change")return Yl(e)}function yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:yx;function Fo(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mu.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,e){var n=Zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zh(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mx(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jh(n,s);var o=Jh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=Ii&&"documentMode"in document&&11>=document.documentMode,ps=null,Hu=null,Eo=null,Vu=!1;function Qh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||ps==null||ps!==fl(i)||(i=ps,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Eo&&Fo(Eo,i)||(Eo=i,i=_l(Hu,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Ec={},Bg={};Ii&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function $l(t){if(Ec[t])return Ec[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return Ec[t]=e[n];return t}var zg=$l("animationend"),Hg=$l("animationiteration"),Vg=$l("animationstart"),Gg=$l("transitionend"),Wg=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Wg.set(t,e),Xr(e,[t])}for(var Tc=0;Tc<jh.length;Tc++){var wc=jh[Tc],Tx=wc.toLowerCase(),wx=wc[0].toUpperCase()+wc.slice(1);gr(Tx,"on"+wx)}gr(zg,"onAnimationEnd");gr(Hg,"onAnimationIteration");gr(Vg,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Gg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,T_(i,e,void 0,t),t.currentTarget=null}function Xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&r.isPropagationStopped())break e;ep(r,l,c),s=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&r.isPropagationStopped())break e;ep(r,l,c),s=a}}}if(hl)throw t=Ou,hl=!1,Ou=null,t}function ht(t,e){var n=e[$u];n===void 0&&(n=e[$u]=new Set);var i=t+"__bubble";n.has(i)||(Yg(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),Yg(n,t,i,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[pa]){t[pa]=!0,jm.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,Ac("selectionchange",!1,e))}}function Yg(t,e,n,i){switch(bg(e)){case 1:var r=z_;break;case 4:r=H_;break;default:r=Sd}n=r.bind(null,e,n,t),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=br(l),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}l=l.parentNode}}i=i.return}mg(function(){var c=s,h=gd(n),f=[];e:{var u=Wg.get(t);if(u!==void 0){var p=Md,v=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":p=nx;break;case"focusin":v="focus",p=Sc;break;case"focusout":v="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sx;break;case zg:case Hg:case Vg:p=$_;break;case Gg:p=ax;break;case"scroll":p=V_;break;case"wheel":p=cx;break;case"copy":case"cut":case"paste":p=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wh}var T=(e&4)!==0,m=!T&&t==="scroll",d=T?u!==null?u+"Capture":null:u;T=[];for(var x=c,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Lo(x,d),S!=null&&T.push(ko(x,S,y)))),m)break;x=x.return}0<T.length&&(u=new p(u,v,null,n,h),f.push({event:u,listeners:T}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Nu&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ni]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?br(v):null,v!==null&&(m=Yr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(T=Vh,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(T=Wh,S="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?u:gs(p),y=v==null?u:gs(v),u=new T(S,x+"leave",p,n,h),u.target=m,u.relatedTarget=y,S=null,br(h)===c&&(T=new T(d,x+"enter",v,n,h),T.target=y,T.relatedTarget=m,S=T),m=S,p&&v)t:{for(T=p,d=v,x=0,y=T;y;y=Zr(y))x++;for(y=0,S=d;S;S=Zr(S))y++;for(;0<x-y;)T=Zr(T),x--;for(;0<y-x;)d=Zr(d),y--;for(;x--;){if(T===d||d!==null&&T===d.alternate)break t;T=Zr(T),d=Zr(d)}T=null}else T=null;p!==null&&tp(f,u,p,T,!1),v!==null&&m!==null&&tp(f,m,v,T,!0)}}e:{if(u=c?gs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var M=gx;else if($h(u))if(Ug)M=Sx;else{M=_x;var A=vx}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(M=xx);if(M&&(M=M(t,c))){Ng(f,M,n,h);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&bu(u,"number",u.value)}switch(A=c?gs(c):window,t){case"focusin":($h(A)||A.contentEditable==="true")&&(ps=A,Hu=c,Eo=null);break;case"focusout":Eo=Hu=ps=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Qh(f,n,h);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Qh(f,n,h)}var w;if(Td)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else hs?Dg(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Lg&&n.locale!=="ko"&&(hs||g!=="onCompositionStart"?g==="onCompositionEnd"&&hs&&(w=Pg()):(nr=h,yd="value"in nr?nr.value:nr.textContent,hs=!0)),A=_l(c,g),0<A.length&&(g=new Gh(g,t,null,n,h),f.push({event:g,listeners:A}),w?g.data=w:(w=Ig(n),w!==null&&(g.data=w)))),(w=fx?dx(t,n):hx(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(h=new Gh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}Xg(f,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(t,n),s!=null&&i.unshift(ko(t,s,r)),s=Lo(t,e),s!=null&&i.push(ko(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&c!==null&&(l=c,r?(a=Lo(n,s),a!=null&&o.unshift(ko(n,a,l))):r||(a=Lo(n,s),a!=null&&o.push(ko(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rx=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Cx,"")}function ma(t,e,n){if(e=np(e),np(t)!==e&&n)throw Error(re(425))}function xl(){}var Gu=null,Wu=null;function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(Lx)}:Yu;function Lx(t){setTimeout(function(){throw t})}function Cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),No(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);No(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),li="__reactFiber$"+Xs,Bo="__reactProps$"+Xs,Ni="__reactContainer$"+Xs,$u="__reactEvents$"+Xs,Dx="__reactListeners$"+Xs,Ix="__reactHandles$"+Xs;function br(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[li])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[li]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ql(t){return t[Bo]||null}var qu=[],vs=-1;function vr(t){return{current:t}}function pt(t){0>vs||(t.current=qu[vs],qu[vs]=null,vs--)}function dt(t,e){vs++,qu[vs]=t.current,t.current=e}var pr={},nn=vr(pr),hn=vr(!1),Or=pr;function Is(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Sl(){pt(hn),pt(nn)}function sp(t,e,n){if(nn.current!==pr)throw Error(re(168));dt(nn,e),dt(hn,n)}function $g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,v_(t)||"Unknown",r));return _t({},n,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Or=nn.current,dt(nn,t),dt(hn,hn.current),!0}function op(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=$g(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,pt(hn),pt(nn),dt(nn,t)):pt(hn),dt(hn,n)}var wi=null,Kl=!1,bc=!1;function qg(t){wi===null?wi=[t]:wi.push(t)}function Nx(t){Kl=!0,qg(t)}function _r(){if(!bc&&wi!==null){bc=!0;var t=0,e=rt;try{var n=wi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Kl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),xg(vd,_r),r}finally{rt=e,bc=!1}}return null}var _s=[],xs=0,Ml=null,El=0,Ln=[],Dn=0,kr=null,Ai=1,Ri="";function Tr(t,e){_s[xs++]=El,_s[xs++]=Ml,Ml=t,El=e}function Kg(t,e,n){Ln[Dn++]=Ai,Ln[Dn++]=Ri,Ln[Dn++]=kr,kr=t;var i=Ai;t=Ri;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-Jn(e)+r|n<<r|i,Ri=s+t}else Ai=1<<s|n<<r|i,Ri=t}function Ad(t){t.return!==null&&(Tr(t,1),Kg(t,1,0))}function Rd(t){for(;t===Ml;)Ml=_s[--xs],_s[xs]=null,El=_s[--xs],_s[xs]=null;for(;t===kr;)kr=Ln[--Dn],Ln[Dn]=null,Ri=Ln[--Dn],Ln[Dn]=null,Ai=Ln[--Dn],Ln[Dn]=null}var En=null,Mn=null,mt=!1,$n=null;function Zg(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(mt){var e=Mn;if(e){var n=e;if(!ap(t,e)){if(Ku(t))throw Error(re(418));e=lr(n.nextSibling);var i=En;e&&ap(t,e)?Zg(i,n):(t.flags=t.flags&-4097|2,mt=!1,En=t)}}else{if(Ku(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,En=t}}}function lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ga(t){if(t!==En)return!1;if(!mt)return lp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xu(t.type,t.memoizedProps)),e&&(e=Mn)){if(Ku(t))throw Jg(),Error(re(418));for(;e;)Zg(t,e),e=lr(e.nextSibling)}if(lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?lr(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=Mn;t;)t=lr(t.nextSibling)}function Ns(){Mn=En=null,mt=!1}function Cd(t){$n===null?$n=[t]:$n.push(t)}var Ux=Bi.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cp(t){var e=t._init;return e(t._payload)}function Qg(t){function e(d,x){if(t){var y=d.deletions;y===null?(d.deletions=[x],d.flags|=16):y.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=dr(d,x),d.index=0,d.sibling=null,d}function s(d,x,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<x?(d.flags|=2,x):y):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,x,y,S){return x===null||x.tag!==6?(x=Fc(y,d.mode,S),x.return=d,x):(x=r(x,y),x.return=d,x)}function a(d,x,y,S){var M=y.type;return M===ds?h(d,x,y.props.children,S,y.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ji&&cp(M)===x.type)?(S=r(x,y.props),S.ref=js(d,x,y),S.return=d,S):(S=il(y.type,y.key,y.props,null,d.mode,S),S.ref=js(d,x,y),S.return=d,S)}function c(d,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Oc(y,d.mode,S),x.return=d,x):(x=r(x,y.children||[]),x.return=d,x)}function h(d,x,y,S,M){return x===null||x.tag!==7?(x=Ur(y,d.mode,S,M),x.return=d,x):(x=r(x,y),x.return=d,x)}function f(d,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Fc(""+x,d.mode,y),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oa:return y=il(x.type,x.key,x.props,null,d.mode,y),y.ref=js(d,null,x),y.return=d,y;case fs:return x=Oc(x,d.mode,y),x.return=d,x;case Ji:var S=x._init;return f(d,S(x._payload),y)}if(uo(x)||qs(x))return x=Ur(x,d.mode,y,null),x.return=d,x;va(d,x)}return null}function u(d,x,y,S){var M=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:l(d,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:return y.key===M?a(d,x,y,S):null;case fs:return y.key===M?c(d,x,y,S):null;case Ji:return M=y._init,u(d,x,M(y._payload),S)}if(uo(y)||qs(y))return M!==null?null:h(d,x,y,S,null);va(d,y)}return null}function p(d,x,y,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,l(x,d,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:return d=d.get(S.key===null?y:S.key)||null,a(x,d,S,M);case fs:return d=d.get(S.key===null?y:S.key)||null,c(x,d,S,M);case Ji:var A=S._init;return p(d,x,y,A(S._payload),M)}if(uo(S)||qs(S))return d=d.get(y)||null,h(x,d,S,M,null);va(x,S)}return null}function v(d,x,y,S){for(var M=null,A=null,w=x,g=x=0,C=null;w!==null&&g<y.length;g++){w.index>g?(C=w,w=null):C=w.sibling;var R=u(d,w,y[g],S);if(R===null){w===null&&(w=C);break}t&&w&&R.alternate===null&&e(d,w),x=s(R,x,g),A===null?M=R:A.sibling=R,A=R,w=C}if(g===y.length)return n(d,w),mt&&Tr(d,g),M;if(w===null){for(;g<y.length;g++)w=f(d,y[g],S),w!==null&&(x=s(w,x,g),A===null?M=w:A.sibling=w,A=w);return mt&&Tr(d,g),M}for(w=i(d,w);g<y.length;g++)C=p(w,d,g,y[g],S),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?g:C.key),x=s(C,x,g),A===null?M=C:A.sibling=C,A=C);return t&&w.forEach(function(b){return e(d,b)}),mt&&Tr(d,g),M}function T(d,x,y,S){var M=qs(y);if(typeof M!="function")throw Error(re(150));if(y=M.call(y),y==null)throw Error(re(151));for(var A=M=null,w=x,g=x=0,C=null,R=y.next();w!==null&&!R.done;g++,R=y.next()){w.index>g?(C=w,w=null):C=w.sibling;var b=u(d,w,R.value,S);if(b===null){w===null&&(w=C);break}t&&w&&b.alternate===null&&e(d,w),x=s(b,x,g),A===null?M=b:A.sibling=b,A=b,w=C}if(R.done)return n(d,w),mt&&Tr(d,g),M;if(w===null){for(;!R.done;g++,R=y.next())R=f(d,R.value,S),R!==null&&(x=s(R,x,g),A===null?M=R:A.sibling=R,A=R);return mt&&Tr(d,g),M}for(w=i(d,w);!R.done;g++,R=y.next())R=p(w,d,g,R.value,S),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?g:R.key),x=s(R,x,g),A===null?M=R:A.sibling=R,A=R);return t&&w.forEach(function(D){return e(d,D)}),mt&&Tr(d,g),M}function m(d,x,y,S){if(typeof y=="object"&&y!==null&&y.type===ds&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:e:{for(var M=y.key,A=x;A!==null;){if(A.key===M){if(M=y.type,M===ds){if(A.tag===7){n(d,A.sibling),x=r(A,y.props.children),x.return=d,d=x;break e}}else if(A.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ji&&cp(M)===A.type){n(d,A.sibling),x=r(A,y.props),x.ref=js(d,A,y),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}y.type===ds?(x=Ur(y.props.children,d.mode,S,y.key),x.return=d,d=x):(S=il(y.type,y.key,y.props,null,d.mode,S),S.ref=js(d,x,y),S.return=d,d=S)}return o(d);case fs:e:{for(A=y.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(d,x.sibling),x=r(x,y.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Oc(y,d.mode,S),x.return=d,d=x}return o(d);case Ji:return A=y._init,m(d,x,A(y._payload),S)}if(uo(y))return v(d,x,y,S);if(qs(y))return T(d,x,y,S);va(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,y),x.return=d,d=x):(n(d,x),x=Fc(y,d.mode,S),x.return=d,d=x),o(d)):n(d,x)}return m}var Us=Qg(!0),jg=Qg(!1),Tl=vr(null),wl=null,Ss=null,bd=null;function Pd(){bd=Ss=wl=null}function Ld(t){var e=Tl.current;pt(Tl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){wl=t,bd=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(wl===null)throw Error(re(308));Ss=t,wl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Pr=null;function Dd(t){Pr===null?Pr=[t]:Pr.push(t)}function e0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}function up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var f=r.baseState;o=0,h=c=a=null,l=s;do{var u=l.lane,p=l.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,T=l;switch(u=e,p=n,T.tag){case 1:if(v=T.payload,typeof v=="function"){f=v.call(p,f,u);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=T.payload,u=typeof v=="function"?v.call(p,f,u):v,u==null)break e;f=_t({},f,u);break e;case 2:Qi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[l]:u.push(l))}else p={eventTime:p,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=p,a=f):h=h.next=p,o|=u;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;u=l,l=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(a=f),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=f}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var jo={},di=vr(jo),zo=vr(jo),Ho=vr(jo);function Lr(t){if(t===jo)throw Error(re(174));return t}function Nd(t,e){switch(dt(Ho,e),dt(zo,t),dt(di,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lu(e,t)}pt(di),dt(di,e)}function Fs(){pt(di),pt(zo),pt(Ho)}function n0(t){Lr(Ho.current);var e=Lr(di.current),n=Lu(e,t.type);e!==n&&(dt(zo,t),dt(di,n))}function Ud(t){zo.current===t&&(pt(di),pt(zo))}var gt=vr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pc=[];function Fd(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Qa=Bi.ReactCurrentDispatcher,Lc=Bi.ReactCurrentBatchConfig,Br=0,vt=null,Nt=null,zt=null,Cl=!1,To=!1,Vo=0,Fx=0;function qt(){throw Error(re(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,s){if(Br=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?zx:Hx,t=n(i,r),To){s=0;do{if(To=!1,Vo=0,25<=s)throw Error(re(301));s+=1,zt=Nt=null,e.updateQueue=null,Qa.current=Vx,t=n(i,r)}while(To)}if(Qa.current=bl,e=Nt!==null&&Nt.next!==null,Br=0,zt=Nt=vt=null,Cl=!1,e)throw Error(re(300));return t}function Bd(){var t=Vo!==0;return Vo=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?vt.memoizedState=zt=t:zt=zt.next=t,zt}function Bn(){if(Nt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=zt===null?vt.memoizedState:zt.next;if(e!==null)zt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?vt.memoizedState=zt=t:zt=zt.next=t}return zt}function Go(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((Br&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,o=i):a=a.next=f,vt.lanes|=h,zr|=h}c=c.next}while(c!==null&&c!==s);a===null?o=i:a.next=l,jn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=a,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Bn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i0(){}function r0(t,e){var n=vt,i=Bn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,zd(a0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Wo(9,o0.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(re(349));Br&30||s0(n,e,r)}return r}function s0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o0(t,e,n,i){e.value=n,e.getSnapshot=i,l0(e)&&c0(t)}function a0(t,e,n){return n(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function c0(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function dp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=Bx.bind(null,vt,t),[e.memoizedState,t]}function Wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return Bn().memoizedState}function ja(t,e,n,i){var r=oi();vt.flags|=t,r.memoizedState=Wo(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Od(i,o.deps)){r.memoizedState=Wo(e,n,s,i);return}}vt.flags|=t,r.memoizedState=Wo(1|e,n,s,i)}function hp(t,e){return ja(8390656,8,t,e)}function zd(t,e){return Zl(2048,8,t,e)}function f0(t,e){return Zl(4,2,t,e)}function d0(t,e){return Zl(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,h0.bind(null,e,t),n)}function Hd(){}function m0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function v0(t,e,n){return Br&21?(jn(n,e)||(n=Mg(),vt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Ox(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Lc.transition;Lc.transition={};try{t(!1),e()}finally{rt=n,Lc.transition=i}}function _0(){return Bn().memoizedState}function kx(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x0(t))S0(e,n);else if(n=e0(t,e,n,i),n!==null){var r=on();Qn(n,t,i,r),y0(n,e,i)}}function Bx(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(t))S0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,jn(l,o)){var a=e.interleaved;a===null?(r.next=r,Dd(e)):(r.next=a.next,a.next=r),e.interleaved=r;return}}catch{}finally{}n=e0(t,e,r,i),n!==null&&(r=on(),Qn(n,t,i,r),y0(n,e,i))}}function x0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function S0(t,e){To=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}var bl={readContext:kn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},zx={readContext:kn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kx.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:Hd,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=Ox.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=oi();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ht===null)throw Error(re(349));Br&30||s0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hp(a0.bind(null,i,s,t),[t]),i.flags|=2048,Wo(9,o0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Ht.identifierPrefix;if(mt){var n=Ri,i=Ai;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hx={readContext:kn,useCallback:m0,useContext:kn,useEffect:zd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:Dc,useRef:u0,useState:function(){return Dc(Go)},useDebugValue:Hd,useDeferredValue:function(t){var e=Bn();return v0(e,Nt.memoizedState,t)},useTransition:function(){var t=Dc(Go)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:_0,unstable_isNewReconciler:!1},Vx={readContext:kn,useCallback:m0,useContext:kn,useEffect:zd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:Ic,useRef:u0,useState:function(){return Ic(Go)},useDebugValue:Hd,useDeferredValue:function(t){var e=Bn();return Nt===null?e.memoizedState=t:v0(e,Nt.memoizedState,t)},useTransition:function(){var t=Ic(Go)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:_0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=fr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=fr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=fr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(Qn(e,t,i,n),Ja(e,t,i))}};function pp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,i)||!Fo(r,s):!0}function M0(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=pn(e)?Or:nn.current,i=e.contextTypes,s=(i=i!=null)?Is(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=pn(e)?Or:nn.current,r.context=Is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=g_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,ff=i),ef(t,e)},n}function T0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iS.bind(null,t,e,n),e.then(t,t))}function vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Wx=Bi.ReactCurrentOwner,dn=!1;function sn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Us(e,t.child,n,i)}function xp(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=kd(t,e,n,i,s,r),n=Bd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(mt&&n&&Ad(e),e.flags|=1,sn(t,e,i,r),e.child)}function Sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w0(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function w0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fo(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return tf(t,e,n,i,r)}function A0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ms,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Ms,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Ms,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Ms,yn),yn|=i;return sn(t,e,r,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,i,r){var s=pn(n)?Or:nn.current;return s=Is(e,s),Rs(e,r),n=kd(t,e,n,i,s,r),i=Bd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(mt&&i&&Ad(e),e.flags|=1,sn(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(pn(n)){var s=!0;yl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)el(t,e),M0(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=pn(n)?Or:nn.current,c=Is(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==c)&&mp(e,o,i,c),Qi=!1;var u=e.memoizedState;o.state=u,Al(e,i,o,r),a=e.memoizedState,l!==i||u!==a||hn.current||Qi?(typeof h=="function"&&(Qu(e,n,h,i),a=e.memoizedState),(l=Qi||pp(e,n,l,i,u,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=a),o.props=i,o.state=a,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,t0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Xn(e.type,l),o.props=c,f=e.pendingProps,u=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=kn(a):(a=pn(n)?Or:nn.current,a=Is(e,a));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||u!==a)&&mp(e,o,i,a),Qi=!1,u=e.memoizedState,o.state=u,Al(e,i,o,r);var v=e.memoizedState;l!==f||u!==v||hn.current||Qi?(typeof p=="function"&&(Qu(e,n,p,i),v=e.memoizedState),(c=Qi||pp(e,n,c,i,u,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=a,i=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return nf(t,e,n,i,s,r)}function nf(t,e,n,i,r,s){R0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&op(e,n,!1),Fi(t,e,s);i=e.stateNode,Wx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,l,s)):sn(t,e,l,s),e.memoizedState=i.state,r&&op(e,n,!0),e.child}function C0(t){var e=t.stateNode;e.pendingContext?sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sp(t,e.context,!1),Nd(t,e.containerInfo)}function Mp(t,e,n,i,r){return Ns(),Cd(r),e.flags|=256,sn(t,e,n,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function b0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(gt,r&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sf(n),e.memoizedState=rf,t):Vd(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Xx(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=a,e.deletions=null):(i=dr(r,a),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rf,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vd(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&Cd(i),Us(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(re(422))),_a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=sf(o),e.memoizedState=rf,s);if(!(e.mode&1))return _a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(re(419)),i=Nc(s,i,void 0),_a(t,e,o,i)}if(l=(o&t.childLanes)!==0,dn||l){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return qd(),i=Nc(Error(re(421))),_a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=lr(r.nextSibling),En=e,mt=!0,$n=null,t!==null&&(Ln[Dn++]=Ai,Ln[Dn++]=Ri,Ln[Dn++]=kr,Ai=t.id,Ri=t.overflow,kr=e),e=Vd(e,i.children),e.flags|=4096,e)}function Ep(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Uc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function P0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,n,e);else if(t.tag===19)Ep(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yx(t,e,n){switch(e.tag){case 3:C0(e),Ns();break;case 5:n0(e);break;case 1:pn(e.type)&&yl(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?b0(t,e,n):(dt(gt,gt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);dt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return Fi(t,e,n)}var L0,of,D0,I0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};of=function(){};D0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(di.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(t,r),i=Pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Du(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var a=i[c];if(l=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ht("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I0=function(t,e,n,i){n!==i&&(e.flags|=4)};function eo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $x(t,e,n){var i=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return pn(e.type)&&Sl(),Kt(e),null;case 3:return i=e.stateNode,Fs(),pt(hn),pt(nn),Fd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(pf($n),$n=null))),of(t,e),Kt(e),null;case 5:Ud(e);var r=Lr(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Kt(e),null}if(t=Lr(di.current),ga(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ho.length;r++)ht(ho[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Dh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Nh(i,s),ht("invalid",i)}Du(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,l,t),r=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":aa(i),Ih(i,s,!0);break;case"textarea":aa(i),Uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[Bo]=i,L0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Iu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ho.length;r++)ht(ho[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Dh(t,i),r=Ru(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Nh(t,i),r=Pu(t,i),ht("invalid",t);break;default:r=i}Du(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?ug(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&lg(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Po(t,a):typeof a=="number"&&Po(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ht("scroll",t):a!=null&&dd(t,s,a,o))}switch(n){case"input":aa(t),Ih(t,i,!1);break;case"textarea":aa(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Lr(Ho.current),Lr(di.current),ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Kt(e),null;case 13:if(pt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Mn!==null&&e.mode&1&&!(e.flags&128))Jg(),Ns(),e.flags|=98560,s=!1;else if(s=ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else $n!==null&&(pf($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ut===0&&(Ut=3):qd())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Fs(),of(t,e),t===null&&Oo(e.stateNode.containerInfo),Kt(e),null;case 10:return Ld(e.type._context),Kt(e),null;case 17:return pn(e.type)&&Sl(),Kt(e),null;case 19:if(pt(gt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)eo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>ks&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Kt(e),null}else 2*Rt()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=gt.current,dt(gt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function qx(t,e){switch(Rd(e),e.tag){case 1:return pn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),pt(hn),pt(nn),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(pt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Fs(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var xa=!1,jt=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function af(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Tp=!1;function Zx(t,e){if(Gu=gl,t=kg(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(l=o+r),f!==s||i!==0&&f.nodeType!==3||(a=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(l=o),u===s&&++h===i&&(a=o),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},gl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var T=v.memoizedProps,m=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?T:Xn(e.type,T),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=Tp,Tp=!1,v}function wo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&af(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Bo],delete e[$u],delete e[Dx],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var Gt=null,Yn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:jt||ys(n,e);case 6:var i=Gt,r=Yn;Gt=null,Wi(t,e,n),Gt=i,Yn=r,Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?Cc(t.parentNode,n):t.nodeType===1&&Cc(t,n),No(t)):Cc(Gt,n.stateNode));break;case 4:i=Gt,r=Yn,Gt=n.stateNode.containerInfo,Yn=!0,Wi(t,e,n),Gt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&af(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!jt&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Mt(n,e,l)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Wi(t,e,n),jt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kx),e.forEach(function(i){var r=sS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Gt=l.stateNode,Yn=!1;break e;case 3:Gt=l.stateNode.containerInfo,Yn=!0;break e;case 4:Gt=l.stateNode.containerInfo,Yn=!0;break e}l=l.return}if(Gt===null)throw Error(re(160));F0(s,o,r),Gt=null,Yn=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O0(e,t),e=e.sibling}function O0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ii(t),i&4){try{wo(3,t,t.return),Ql(3,t)}catch(T){Mt(t,t.return,T)}try{wo(5,t,t.return)}catch(T){Mt(t,t.return,T)}}break;case 1:zn(e,t),ii(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if(zn(e,t),ii(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{Po(r,"")}catch(T){Mt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),Iu(l,o);var c=Iu(l,s);for(o=0;o<a.length;o+=2){var h=a[o],f=a[o+1];h==="style"?ug(r,f):h==="dangerouslySetInnerHTML"?lg(r,f):h==="children"?Po(r,f):dd(r,h,f,c)}switch(l){case"input":Cu(r,s);break;case"textarea":og(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Es(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[Bo]=s}catch(T){Mt(t,t.return,T)}}break;case 6:if(zn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){Mt(t,t.return,T)}}break;case 3:if(zn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(T){Mt(t,t.return,T)}break;case 4:zn(e,t),ii(t);break;case 13:zn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=Rt())),i&4&&Ap(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||h,zn(e,t),jt=c):zn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(f=ye=h;ye!==null;){switch(u=ye,p=u.child,u.tag){case 0:case 11:case 14:case 15:wo(4,u,u.return);break;case 1:ys(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(T){Mt(i,n,T)}}break;case 5:ys(u,u.return);break;case 22:if(u.memoizedState!==null){Cp(f);continue}}p!==null?(p.return=u,ye=p):Cp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=cg("display",o))}catch(T){Mt(t,t.return,T)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(T){Mt(t,t.return,T)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),ii(t),i&4&&Ap(t);break;case 21:break;default:zn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Po(r,""),i.flags&=-33);var s=wp(t);uf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=wp(t);cf(t,l,o);break;default:throw Error(re(161))}}catch(a){Mt(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){ye=t,k0(t)}function k0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xa;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||jt;l=xa;var c=jt;if(xa=o,(jt=a)&&!c)for(ye=r;ye!==null;)o=ye,a=o.child,o.tag===22&&o.memoizedState!==null?bp(r):a!==null?(a.return=o,ye=a):bp(r);for(;s!==null;)ye=s,k0(s),s=s.sibling;ye=r,xa=l,jt=c}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Rp(t)}}function Rp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&No(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}jt||e.flags&512&&lf(e)}catch(u){Mt(e,e.return,u)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Cp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function bp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(a){Mt(e,n,a)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(a){Mt(e,r,a)}}var s=e.return;try{lf(e)}catch(a){Mt(e,s,a)}break;case 5:var o=e.return;try{lf(e)}catch(a){Mt(e,o,a)}}}catch(a){Mt(e,e.return,a)}if(e===t){ye=null;break}var l=e.sibling;if(l!==null){l.return=e.return,ye=l;break}ye=e.return}}var Qx=Math.ceil,Pl=Bi.ReactCurrentDispatcher,Gd=Bi.ReactCurrentOwner,Fn=Bi.ReactCurrentBatchConfig,Ze=0,Ht=null,Lt=null,Xt=0,yn=0,Ms=vr(0),Ut=0,Xo=null,zr=0,jl=0,Wd=0,Ao=null,fn=null,Xd=0,ks=1/0,Ei=null,Ll=!1,ff=null,ur=null,Sa=!1,ir=null,Dl=0,Ro=0,df=null,tl=-1,nl=0;function on(){return Ze&6?Rt():tl!==-1?tl:tl=Rt()}function fr(t){return t.mode&1?Ze&2&&Xt!==0?Xt&-Xt:Ux.transition!==null?(nl===0&&(nl=Mg()),nl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function Qn(t,e,n,i){if(50<Ro)throw Ro=0,df=null,Error(re(185));Zo(t,n,i),(!(Ze&2)||t!==Ht)&&(t===Ht&&(!(Ze&2)&&(jl|=n),Ut===4&&er(t,Xt)),mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(ks=Rt()+500,Kl&&_r()))}function mn(t,e){var n=t.callbackNode;U_(t,e);var i=ml(t,t===Ht?Xt:0);if(i===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?Nx(Pp.bind(null,t)):qg(Pp.bind(null,t)),Px(function(){!(Ze&6)&&_r()}),n=null;else{switch(Eg(i)){case 1:n=vd;break;case 4:n=Sg;break;case 16:n=pl;break;case 536870912:n=yg;break;default:n=pl}n=Y0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(tl=-1,nl=0,Ze&6)throw Error(re(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var i=ml(t,t===Ht?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=Ze;Ze|=2;var s=H0();(Ht!==t||Xt!==e)&&(Ei=null,ks=Rt()+500,Nr(t,e));do try{tS();break}catch(l){z0(t,l)}while(!0);Pd(),Pl.current=s,Ze=r,Lt!==null?e=0:(Ht=null,Xt=0,e=Ut)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=hf(t,r))),e===1)throw n=Xo,Nr(t,0),er(t,i),mn(t,Rt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!jx(r)&&(e=Il(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=hf(t,s))),e===1))throw n=Xo,Nr(t,0),er(t,i),mn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:wr(t,fn,Ei);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Xd+500-Rt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yu(wr.bind(null,t,fn,Ei),e);break}wr(t,fn,Ei);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qx(i/1960))-i,10<i){t.timeoutHandle=Yu(wr.bind(null,t,fn,Ei),i);break}wr(t,fn,Ei);break;case 5:wr(t,fn,Ei);break;default:throw Error(re(329))}}}return mn(t,Rt()),t.callbackNode===n?B0.bind(null,t):null}function hf(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=fn,fn=n,e!==null&&pf(e)),t}function pf(t){fn===null?fn=t:fn.push.apply(fn,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Wd,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function Pp(t){if(Ze&6)throw Error(re(327));Cs();var e=ml(t,0);if(!(e&1))return mn(t,Rt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=hf(t,i))}if(n===1)throw n=Xo,Nr(t,0),er(t,e),mn(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,fn,Ei),mn(t,Rt()),null}function Yd(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(ks=Rt()+500,Kl&&_r())}}function Hr(t){ir!==null&&ir.tag===0&&!(Ze&6)&&Cs();var e=Ze;Ze|=1;var n=Fn.transition,i=rt;try{if(Fn.transition=null,rt=1,t)return t()}finally{rt=i,Fn.transition=n,Ze=e,!(Ze&6)&&_r()}}function $d(){yn=Ms.current,pt(Ms)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bx(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Rd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Fs(),pt(hn),pt(nn),Fd();break;case 5:Ud(i);break;case 4:Fs();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:Ld(i.type._context);break;case 22:case 23:$d()}n=n.return}if(Ht=t,Lt=t=dr(t.current,null),Xt=yn=e,Ut=0,Xo=null,Wd=jl=zr=0,fn=Ao=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function z0(t,e){do{var n=Lt;try{if(Pd(),Qa.current=bl,Cl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Br=0,zt=Nt=vt=null,To=!1,Vo=0,Gd.current=null,n===null||n.return===null){Ut=1,Xo=e,Lt=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Xt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=vp(o);if(p!==null){p.flags&=-257,_p(p,o,l,s,e),p.mode&1&&gp(s,c,e),e=p,a=c;var v=e.updateQueue;if(v===null){var T=new Set;T.add(a),e.updateQueue=T}else v.add(a);break e}else{if(!(e&1)){gp(s,c,e),qd();break e}a=Error(re(426))}}else if(mt&&l.mode&1){var m=vp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),_p(m,o,l,s,e),Cd(Os(a,l));break e}}s=a=Os(a,l),Ut!==4&&(Ut=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=E0(s,a,e);up(s,d);break e;case 1:l=a;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=T0(s,l,e);up(s,S);break e}}s=s.return}while(s!==null)}G0(n)}catch(M){e=M,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function H0(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function qd(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Ht===null||!(zr&268435455)&&!(jl&268435455)||er(Ht,Xt)}function Il(t,e){var n=Ze;Ze|=2;var i=H0();(Ht!==t||Xt!==e)&&(Ei=null,Nr(t,e));do try{eS();break}catch(r){z0(t,r)}while(!0);if(Pd(),Ze=n,Pl.current=i,Lt!==null)throw Error(re(261));return Ht=null,Xt=0,Ut}function eS(){for(;Lt!==null;)V0(Lt)}function tS(){for(;Lt!==null&&!A_();)V0(Lt)}function V0(t){var e=X0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?G0(t):Lt=e,Gd.current=null}function G0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qx(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=$x(n,e,yn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function wr(t,e,n){var i=rt,r=Fn.transition;try{Fn.transition=null,rt=1,nS(t,e,n,i)}finally{Fn.transition=r,rt=i}return null}function nS(t,e,n,i){do Cs();while(ir!==null);if(Ze&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F_(t,s),t===Ht&&(Lt=Ht=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,Y0(pl,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=rt;rt=1;var l=Ze;Ze|=4,Gd.current=null,Zx(t,n),O0(n,t),Mx(Wu),gl=!!Gu,Wu=Gu=null,t.current=n,Jx(n),R_(),Ze=l,rt=o,Fn.transition=s}else t.current=n;if(Sa&&(Sa=!1,ir=t,Dl=r),s=t.pendingLanes,s===0&&(ur=null),P_(n.stateNode),mn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=ff,ff=null,t;return Dl&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===df?Ro++:(Ro=0,df=t):Ro=0,_r(),null}function Cs(){if(ir!==null){var t=Eg(Dl),e=Fn.transition,n=rt;try{if(Fn.transition=null,rt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Dl=0,Ze&6)throw Error(re(331));var r=Ze;for(Ze|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(ye=c;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:wo(8,h,s)}var f=h.child;if(f!==null)f.return=h,ye=f;else for(;ye!==null;){h=ye;var u=h.sibling,p=h.return;if(N0(h),h===c){ye=null;break}if(u!==null){u.return=p,ye=u;break}ye=p}}}var v=s.alternate;if(v!==null){var T=v.child;if(T!==null){v.child=null;do{var m=T.sibling;T.sibling=null,T=m}while(T!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var x=t.current;for(ye=x;ye!==null;){o=ye;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ye=y;else e:for(o=x;ye!==null;){if(l=ye,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ql(9,l)}}catch(M){Mt(l,l.return,M)}if(l===o){ye=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ye=S;break e}ye=l.return}}if(Ze=r,_r(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{rt=n,Fn.transition=e}}return!1}function Lp(t,e,n){e=Os(n,e),e=E0(t,e,1),t=cr(t,e,1),e=on(),t!==null&&(Zo(t,1,e),mn(t,e))}function Mt(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Os(n,t),t=T0(e,t,1),e=cr(e,t,1),t=on(),e!==null&&(Zo(e,1,t),mn(e,t));break}}e=e.return}}function iS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Xt&n)===n&&(Ut===4||Ut===3&&(Xt&130023424)===Xt&&500>Rt()-Xd?Nr(t,0):Wd|=n),mn(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=on();t=Ui(t,e),t!==null&&(Zo(t,e,n),mn(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function sS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),W0(t,n)}var X0;X0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Yx(t,e,n);dn=!!(t.flags&131072)}else dn=!1,mt&&e.flags&1048576&&Kg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Is(e,nn.current);Rs(e,n),r=kd(null,e,i,t,r,n);var s=Bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,yl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Id(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=nf(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Ad(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aS(i),t=Xn(i,t),r){case 0:e=tf(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=xp(null,e,i,t,n);break e;case 14:e=Sp(null,e,i,Xn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),yp(t,e,i,r,n);case 3:e:{if(C0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t0(t,e),Al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(re(423)),e),e=Mp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(re(424)),e),e=Mp(t,e,i,n,r);break e}else for(Mn=lr(e.stateNode.containerInfo.firstChild),En=e,mt=!0,$n=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return n0(e),t===null&&Zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xu(i,r)?o=null:s!==null&&Xu(i,s)&&(e.flags|=32),R0(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return b0(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),xp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Tl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!hn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=bi(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ju(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=kn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Sp(t,e,i,r,n);case 15:return w0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),el(t,e),e.tag=1,pn(i)?(t=!0,yl(e)):t=!1,Rs(e,n),M0(e,i,r),ju(e,i,r,n),nf(null,e,i,!0,t,n);case 19:return P0(t,e,n);case 22:return A0(t,e,n)}throw Error(re(156,e.tag))};function Y0(t,e){return xg(t,e)}function oS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new oS(t,e,n,i)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aS(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pd)return 11;if(t===md)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ds:return Ur(n.children,r,s,e);case hd:o=8,r|=8;break;case Eu:return t=Un(12,n,e,r|2),t.elementType=Eu,t.lanes=s,t;case Tu:return t=Un(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case wu:return t=Un(19,n,e,r),t.elementType=wu,t.lanes=s,t;case ng:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case pd:o=11;break e;case md:o=14;break e;case Ji:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Un(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,i,r,s,o,l,a){return t=new lS(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function cS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $0(t){if(!t)return pr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(pn(n))return $g(t,n,e)}return e}function q0(t,e,n,i,r,s,o,l,a){return t=Zd(n,i,!0,t,r,s,o,l,a),t.context=$0(null),n=t.current,i=on(),r=fr(n),s=bi(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,Zo(t,r,i),mn(t,i),t}function tc(t,e,n,i){var r=e.current,s=on(),o=fr(r);return n=$0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(Qn(t,r,o,s),Ja(t,r,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function uS(){return null}var K0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}nc.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));tc(t,e,null,null)};nc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){tc(null,t,null,null)}),e[Ni]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&Cg(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function fS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(o);s.call(c)}}var o=q0(e,i,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=o,t[Ni]=o.current,Oo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var c=Nl(a);l.call(c)}}var a=Zd(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=a,t[Ni]=a.current,Oo(t.nodeType===8?t.parentNode:t),Hr(function(){tc(e,a,n,i)}),a}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var a=Nl(o);l.call(a)}}tc(e,o,t,r)}else o=fS(n,e,t,r,i);return Nl(o)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(_d(e,n|1),mn(e,Rt()),!(Ze&6)&&(ks=Rt()+500,_r()))}break;case 13:Hr(function(){var i=Ui(t,1);if(i!==null){var r=on();Qn(i,t,1,r)}}),Jd(t,1)}};xd=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=on();Qn(e,t,134217728,n)}Jd(t,134217728)}};wg=function(t){if(t.tag===13){var e=fr(t),n=Ui(t,e);if(n!==null){var i=on();Qn(n,t,e,i)}Jd(t,e)}};Ag=function(){return rt};Rg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Uu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(re(90));rg(i),Cu(i,r)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};hg=Yd;pg=Hr;var dS={usingClientEntryPoint:!1,Events:[Qo,gs,ql,fg,dg,Yd]},to={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Wl=ya.inject(hS),fi=ya}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(re(200));return cS(t,e,null,n)};An.createRoot=function(t,e){if(!jd(t))throw Error(re(299));var n=!1,i="",r=K0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Qd(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Hr(t)};An.hydrate=function(t,e,n){if(!ic(e))throw Error(re(200));return rc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=K0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q0(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,Oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};An.render=function(t,e,n){if(!ic(e))throw Error(re(200));return rc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!ic(t))throw Error(re(40));return t._reactRootContainer?(Hr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};An.unstable_batchedUpdates=Yd;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return rc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(t){console.error(t)}}Z0(),Zm.exports=An;var pS=Zm.exports,J0,Np=pS;J0=Np.createRoot,Np.hydrateRoot;const mS="72062d1a73210f87f50eab949e247cb0",gS="https://api.tmdb.org/3",vS="https://image.tmdb.org/t/p/original",_S="https://image.tmdb.org/t/p/w500",ft={imageUrl(t,e="w500"){return t?`${e==="original"?vS:_S}${t}`:""},async fetchJson(t,e={}){const n=new URL(`${gS}${t}`);n.searchParams.set("api_key",mS);for(const[r,s]of Object.entries(e))n.searchParams.set(r,s);const i=await fetch(n.toString());if(!i.ok)throw new Error(`TMDB ${i.status}: ${i.statusText}`);return i.json()},trendingMovies(t=1){return this.fetchJson("/trending/movie/week",{page:String(t)})},trendingTV(t=1){return this.fetchJson("/trending/tv/week",{page:String(t)})},popularMovies(t=1){return this.fetchJson("/movie/popular",{page:String(t)})},popularTV(t=1){return this.fetchJson("/tv/popular",{page:String(t)})},topRatedMovies(t=1){return this.fetchJson("/movie/top_rated",{page:String(t)})},upcomingMovies(t=1){return this.fetchJson("/movie/upcoming",{page:String(t)})},nowPlayingMovies(t=1){return this.fetchJson("/movie/now_playing",{page:String(t)})},topRatedTV(t=1){return this.fetchJson("/tv/top_rated",{page:String(t)})},latestTV(t=1){return this.fetchJson("/tv/on_the_air",{page:String(t)})},getTopRated(){return this.fetchJson("/movie/top_rated")},getUpcoming(){return this.fetchJson("/movie/upcoming")},getSimilarMovies(t,e="movie"){return this.fetchJson(`/${e}/${t}/similar`)},movieGenres(){return this.fetchJson("/genre/movie/list")},tvGenres(){return this.fetchJson("/genre/tv/list")},discoverMovies(t){const e={page:String(t.page??1),sort_by:"popularity.desc"};return t.with_genres&&(e.with_genres=String(t.with_genres)),t.year&&(e.primary_release_year=String(t.year)),this.fetchJson("/discover/movie",e)},discoverTV(t){const e={page:String(t.page??1),sort_by:"popularity.desc"};return t.with_genres&&(e.with_genres=String(t.with_genres)),this.fetchJson("/discover/tv",e)},movieDetails(t){return this.fetchJson(`/movie/${t}`,{append_to_response:"credits,videos"})},tvDetails(t){return this.fetchJson(`/tv/${t}`,{append_to_response:"credits,videos"})},tvSeason(t,e){return this.fetchJson(`/tv/${t}/season/${e}`)},search(t,e=1){return this.fetchJson("/search/multi",{query:t,page:String(e)})},personMovieCredits(t){return this.fetchJson(`/person/${t}/movie_credits`)},personTVCredits(t){return this.fetchJson(`/person/${t}/tv_credits`)}};function Ti(t){return t.title||t.name||"Untitled"}function mf(t){const e=t.release_date||t.first_air_date;return e?e.slice(0,4):"—"}function po(t){return t.media_type==="tv"||t.first_air_date?"tv":"movie"}function rl(t,e="movie",n=1,i=1){return e==="tv"?[{url:`https://vidnest.fun/tv/${t}/${n}/${i}`},{url:`https://vidlink.pro/tv/${t}?season=${n}&episode=${i}`},{url:`https://www.vidking.net/embed/tv/${t}/${n}/${i}`}]:[{url:`https://vidnest.fun/movie/${t}`},{url:`https://vidlink.pro/movie/${t}?autoplay=true&title=true`},{url:`https://www.vidking.net/embed/movie/${t}`}]}let Q0=0;const xS=t=>`${t}-${Q0++}`;function Ue(t,e,n,i){return{x:t,y:e,w:n,h:i}}function Hn(t,e,n,i,r,s,o){return{id:t,direction:n,viewport:e,contentSize:{w:e.w,h:e.h},scrollX:0,scrollY:0,targetScrollX:0,targetScrollY:0,tiles:[],parentTile:r,color:i,depth:s,title:o}}function We(t,e,n,i,r,s=null){const o={id:xS("t"),label:e,bounds:n,panel:t,childPanel:s,color:i,content:r};return t.tiles.push(o),o}function bn(t){let e=t.viewport.w,n=t.viewport.h;for(const i of t.tiles)e=Math.max(e,i.bounds.x+i.bounds.w),n=Math.max(n,i.bounds.y+i.bounds.h);t.contentSize.w=e,t.contentSize.h=n}const Ae={bg:659226,panel:988970,header:1976635,accent:16096779,amber:14251782,teal:889992,emerald:366185,blue:2450411,sky:959977,rose:14753096,red:14427686,orange:15357964,cyan:561586,green:1483594,indigo:5195493,slateDark:1976635,slateMid:3359061,posterBg:659744,previewBg:858922},Ma=[889992,366185,2450411,959977,15357964,14427686,14753096,561586,1483594,14251782];function SS(t,e){const n=Math.round(t/9),i=Math.min(200,Math.max(100,n)),r=Math.round(i*1.45),s=Math.round(t*.008+6),o=Math.round(t*.016+8),l=r+32,a=Math.min(400,Math.max(180,Math.round(t*.28))),c=Math.round(Math.min(t*.55,Math.max(280,t/2))),h=t-o*2,f=Math.max(2,Math.floor((h+s)/(i+s))),u=Math.min(180,Math.max(100,Math.round(t/7))),p=Math.round(u*.9),v=Math.min(140,Math.max(80,Math.round(t/9))),T=Math.round(v*.65),m=Math.min(160,Math.max(90,Math.round(t/8))),d=Math.round(m*.85),x=Math.min(260,Math.max(140,Math.round(t/4))),y=Math.round(x*.55),S=Math.min(180,Math.max(100,Math.round(t/7))),M=Math.round(S*.38),A=Math.max(48,Math.round(e*.07)),w=Math.max(32,Math.round(e*.045));return{W:t,H:e,pad:o,gap:s,headerH:A,sectionH:w,posterW:i,posterH:r,rowH:l,heroH:a,heroTileW:c,gridCols:f,chipW:u,chipH:p,yearChipW:v,yearChipH:T,castW:m,castH:d,episodeW:x,episodeH:y,seasonW:S,seasonH:M}}function kc(t,e,n,i={type:"home"},r=null,s="all"){var g,C;Q0=0;const o=[],l=[],a=SS(t,e),c=R=>(o.push(R),R),h=R=>{for(const b of R.tiles)b.childPanel?h(b.childPanel):b.content.kind!=="placeholder"&&b.content.kind!=="section"&&l.push(b)},f=e-a.headerH,u=c(Hn("root",Ue(0,0,t,e),"vertical",Ae.bg,null,0)),p=We(u,"Header",Ue(0,0,t,a.headerH),Ae.header,{kind:"placeholder"}),v=c(Hn("header",Ue(0,0,t,a.headerH),"horizontal",Ae.header,p,1,"header"));p.childPanel=v;const T=[{label:"Netflix",action:"home",payload:null,active:i.type==="home"&&s==="all",color:Ae.red},{label:"Movies",action:"setFilter",payload:"movie",active:i.type==="home"&&s==="movie",color:Ae.blue},{label:"TV Shows",action:"setFilter",payload:"tv",active:i.type==="home"&&s==="tv",color:Ae.teal}],m=Math.floor(t/T.length);for(let R=0;R<T.length;R++){const b=T[R],D=b.active?b.color:Ae.slateDark;We(v,b.label,Ue(R*m,0,m,a.headerH),D,{kind:"text",text:b.label,action:b.action,payload:b.payload})}bn(v);const d=We(u,"Main",Ue(0,a.headerH,t,f),Ae.panel,{kind:"placeholder"}),x=c(Hn("main",Ue(0,0,t,f),"vertical",Ae.panel,d,1,"main"));d.childPanel=x;const y=t,S=x;let M=0;const A=(R,b,D)=>{if(!b||b.length===0)return;We(S,R,Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:R}),M+=a.sectionH+4;const H=a.posterH+20,$=We(S,`${R}Row`,Ue(0,M,y,H),Ae.panel,{kind:"placeholder"}),F=c(Hn(`row-${R}`,Ue(0,M,y,H),"horizontal",Ae.panel,$,3));$.childPanel=F,yS(F,b,D,a),bn(F),M+=H+a.gap*2},w=(R,b,D)=>{if(!b||b.length===0)return;We(S,R,Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:R}),M+=a.sectionH+8;const{posterW:H,posterH:$,gap:F,pad:Z,gridCols:B}=a;for(let V=0;V<b.length;V++){const I=b[V],J=V%B,q=Math.floor(V/B),ve=Z+J*(H+F),_e=M+q*($+F);We(S,Ti(I),Ue(ve,_e,H,$),D,{kind:"poster",movieId:I.id,imageUrl:mo(I.poster_path,"w500"),title:Ti(I),year:mf(I),rating:I.vote_average||0,movie:I})}const L=Math.ceil(b.length/B);M+=L*($+F)+20};if(i.type==="home")if(s==="all"){const R=[...n.trending.slice(0,3),...n.trendingTV.slice(0,3)],b=We(S,"Hero",Ue(0,M,y,a.heroH),Ae.previewBg,{kind:"placeholder"}),D=c(Hn("hero",Ue(0,0,y,a.heroH),"horizontal",Ae.previewBg,b,3,"hero"));b.childPanel=D;for(let H=0;H<R.length;H++){const $=R[H];We(D,Ti($),Ue(H*(a.heroTileW+a.gap),8,a.heroTileW,a.heroH-16),Ae.previewBg,{kind:"backdrop",movieId:$.id,imageUrl:mo($.backdrop_path,"original"),title:Ti($),metadata:"",overview:$.overview||"",movie:$})}bn(D),M+=a.heroH+a.gap*2,A("Trending Movies",n.trending,Ae.blue),A("Trending TV",n.trendingTV,Ae.teal),A("Top Rated Movies",n.topRated,Ae.amber),A("Top Rated TV",n.topRatedTV,Ae.rose)}else{const R=s==="tv",b=R?n.trendingTV:n.trending,D=R?n.topRatedTV:n.topRated,H=R?n.latestTV:n.nowPlaying,$=R?n.tvGenres:n.movieGenres,F=b.slice(0,6),Z=We(S,"Hero",Ue(0,M,y,a.heroH),Ae.previewBg,{kind:"placeholder"}),B=c(Hn("hero",Ue(0,0,y,a.heroH),"horizontal",Ae.previewBg,Z,3,"hero"));Z.childPanel=B;for(let k=0;k<F.length;k++){const ne=F[k];We(B,Ti(ne),Ue(k*(a.heroTileW+a.gap),8,a.heroTileW,a.heroH-16),Ae.previewBg,{kind:"backdrop",movieId:ne.id,imageUrl:mo(ne.backdrop_path,"original"),title:Ti(ne),metadata:"",overview:ne.overview||"",movie:ne})}bn(B),M+=a.heroH+a.gap*2,A("Trending Now",b,Ae.teal),A("Top Rated",D,Ae.amber),A("Latest Releases",H,Ae.slateMid),We(S,"Browse by Genre",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Browse by Genre"}),M+=a.sectionH+8;const L=a.chipH+20,V=We(S,"GenreRow",Ue(0,M,y,L),Ae.panel,{kind:"placeholder"}),I=c(Hn("genreRow",Ue(0,0,y,L),"horizontal",Ae.panel,V,3,"genreRow"));V.childPanel=I;let J=a.pad;for(let k=0;k<$.length&&k<10;k++){const ne=$[k];We(I,ne.name,Ue(J,10,a.chipW,a.chipH),Ma[k%Ma.length],{kind:"text",text:ne.name,action:"genre",payload:{id:ne.id,name:ne.name,mediaType:s}}),J+=a.chipW+a.gap}bn(I),M+=L+a.gap,We(S,"Browse by Year",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Browse by Year"}),M+=a.sectionH+8;const q=a.yearChipH+20,ve=We(S,"YearRow",Ue(0,M,y,q),Ae.panel,{kind:"placeholder"}),_e=c(Hn("yearRow",Ue(0,0,y,q),"horizontal",Ae.panel,ve,3,"yearRow"));ve.childPanel=_e;let Me=a.pad;for(let k=0;k<n.years.length;k++){const ne=n.years[k];We(_e,String(ne),Ue(Me,10,a.yearChipW,a.yearChipH),Ma[k%Ma.length],{kind:"text",text:String(ne),action:"year",payload:{year:ne,mediaType:s}}),Me+=a.yearChipW+a.gap}bn(_e),M+=q+a.gap}else if(i.type==="genre"){const R=i.mediaType==="tv"?"TV Shows":"Movies",b=Math.round(a.sectionH*2);We(S,"Genre Header",Ue(0,M,y,b),Ae.header,{kind:"text",text:`${i.genreName} ${R}`}),M+=b+a.gap,r&&w("Top Results",r,Ae.teal)}else if(i.type==="year"){const R=i.mediaType==="tv"?"TV Shows":"Movies",b=Math.round(a.sectionH*2);We(S,"Year Header",Ue(0,M,y,b),Ae.header,{kind:"text",text:`${R} from ${i.year}`}),M+=b+a.gap,r&&w("Top Results",r,Ae.amber)}else if(i.type==="person"){const R=Math.round(a.sectionH*2);We(S,"Person Header",Ue(0,M,y,R),Ae.header,{kind:"text",text:i.personName}),M+=R+a.gap,r&&r.length>0&&w("Their Works",r,Ae.indigo)}else if(i.type==="details"){const R=i.movie,b=po(R)==="tv",D=Math.min(a.heroH*1.1,Math.round(y*9/21));We(S,`Hero-${R.id}`,Ue(0,M,y,D),Ae.previewBg,{kind:"backdrop",movieId:R.id,imageUrl:mo(R.backdrop_path,"original"),title:Ti(R),metadata:`${mf(R)}  ·  ★ ${((g=R.vote_average)==null?void 0:g.toFixed(1))||"?"}  ·  ${b?"TV Series":"Movie"}`,overview:R.overview||"",movie:R}),M+=D+a.gap,We(S,"ServersHeader",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Select a Server to Play"}),M+=a.sectionH+8;const H=rl(R.id,b?"tv":"movie",i.season,i.episode),$=Math.max(160,Math.floor((y-a.pad*2-a.gap*3)/4)),F=Math.round($*.45),Z=Math.max(2,Math.floor((y-a.pad*2+a.gap)/($+a.gap)));for(let L=0;L<H.length;L++){const V=L%Z,I=Math.floor(L/Z);We(S,`Server ${L+1}`,Ue(a.pad+V*($+a.gap),M+I*(F+a.gap),$,F),Ae.teal,{kind:"text",text:`Server ${L+1}`,action:"play_server",payload:L})}if(M+=Math.ceil(H.length/Z)*(F+a.gap)+a.gap,R.cast&&R.cast.length>0){We(S,"CastHeader",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Cast"}),M+=a.sectionH+8;const L=a.castH+20,V=We(S,"CastRow",Ue(0,M,y,L),Ae.panel,{kind:"placeholder"}),I=c(Hn(`cast-${R.id}`,Ue(0,M,y,L),"horizontal",Ae.panel,V,3));V.childPanel=I;let J=a.pad;for(const q of R.cast.slice(0,20))We(I,q.name,Ue(J,10,a.castW,a.castH),Ae.slateMid,{kind:"text",text:q.name,subtext:q.character,action:"person",payload:{id:q.id,name:q.name}}),J+=a.castW+a.gap;bn(I),M+=L+a.gap}const B=(C=R.crew)==null?void 0:C.find(L=>L.job==="Director");if(B){We(S,"DirectorHeader",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Director"}),M+=a.sectionH+8;const L=Math.min(220,Math.max(120,Math.round(t/5))),V=Math.round(L*.32);We(S,B.name,Ue(a.pad,M,L,V),Ae.indigo,{kind:"text",text:B.name,action:"person",payload:{id:B.id,name:B.name}}),M+=V+a.gap*2}if(b&&i.seasonsData&&i.episodesData){We(S,"SeasonsHeader",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:"Seasons"}),M+=a.sectionH+8;const L=a.seasonH+20,V=We(S,"SeasonsRow",Ue(0,M,y,L),Ae.panel,{kind:"placeholder"}),I=c(Hn(`seasons-${R.id}`,Ue(0,M,y,L),"horizontal",Ae.panel,V,3,`seasons-${R.id}`));V.childPanel=I;let J=a.pad;for(const k of i.seasonsData){const ne=k.air_date?new Date(k.air_date).getFullYear().toString():void 0;We(I,`Season-${k.season_number}`,Ue(J,10,a.seasonW,a.seasonH),k.season_number===i.season?Ae.teal:Ae.blue,{kind:"text",text:k.name||`Season ${k.season_number}`,subtext:ne,action:"change_season",payload:k.season_number}),J+=a.seasonW+a.gap}bn(I),M+=L+a.gap,We(S,"EpisodesHeader",Ue(0,M,y,a.sectionH),Ae.bg,{kind:"section",title:`Season ${i.season} Episodes`}),M+=a.sectionH+8;const q=a.episodeH+20,ve=We(S,"EpisodesRow",Ue(0,M,y,q),Ae.panel,{kind:"placeholder"}),_e=c(Hn(`episodes-${R.id}`,Ue(0,M,y,q),"horizontal",Ae.panel,ve,3,`episodes-${R.id}`));ve.childPanel=_e;let Me=a.pad;for(const k of i.episodesData){const ne=k.episode_number===i.episode,se=[k.air_date?k.air_date.slice(0,10):null,k.runtime?`${k.runtime}m`:null].filter(Boolean).join(" · ");We(_e,`Episode-${k.episode_number}`,Ue(Me,10,a.episodeW,a.episodeH),ne?Ae.amber:Ae.slateMid,{kind:"text",text:`${k.episode_number}. ${k.name}`,subtext:se||void 0,action:"change_episode",payload:k.episode_number}),Me+=a.episodeW+a.gap}bn(_e),M+=q+a.gap}A(b?"Similar TV Shows":"More Like This",i.similar||[],Ae.blue)}return bn(S),bn(x),bn(u),h(u),{root:u,allPanels:o,allLeaves:l}}function yS(t,e,n,i){let r=i.pad;for(const s of e.slice(0,20))We(t,Ti(s),Ue(r,8,i.posterW,i.posterH),n,{kind:"poster",movieId:s.id,imageUrl:mo(s.poster_path,"w500"),title:Ti(s),year:mf(s),rating:s.vote_average||0,movie:s}),r+=i.posterW+i.gap}function mo(t,e="w500"){return t?`${e==="original"?"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500"}${t}`:""}function Up(t,e,n){return t<e?e:t>n?n:t}function Fp(t,e){const n=Math.max(t.x,e.x),i=Math.max(t.y,e.y),r=Math.min(t.x+t.w,e.x+e.w),s=Math.min(t.y+t.h,e.y+e.h);return{x:n,y:i,w:Math.max(0,r-n),h:Math.max(0,s-i)}}function j0(t){if(!t.parentTile)return{...t.viewport};const e=t.parentTile.panel,n=j0(e);return{x:n.x+t.parentTile.bounds.x-e.targetScrollX,y:n.y+t.parentTile.bounds.y-e.targetScrollY,w:t.viewport.w,h:t.viewport.h}}function Yo(t){if(!t.parentTile)return{...t.viewport};const e=t.parentTile.panel,n=Yo(e);return{x:n.x+t.parentTile.bounds.x-e.scrollX,y:n.y+t.parentTile.bounds.y-e.scrollY,w:t.viewport.w,h:t.viewport.h}}function MS(t){var i,r;let e=Yo(t),n=((i=t.parentTile)==null?void 0:i.panel)??null;for(;n;)e=Fp(e,Yo(n)),n=((r=n.parentTile)==null?void 0:r.panel)??null;return e=Fp(e,{x:0,y:0,w:window.innerWidth,h:window.innerHeight}),e}function Op(t){const e=t.panel,n=j0(e);return{x:n.x+t.bounds.x-e.targetScrollX,y:n.y+t.bounds.y-e.targetScrollY,w:t.bounds.w,h:t.bounds.h}}function Ea(t,e,n,i){return t<n+i&&t+e>n}function ES(t,e,n){const i=Op(t),r=i.x+i.w/2,s=i.y+i.h/2;let o=null,l=1/0;for(const a of n){if(a===t)continue;const c=Op(a),h=c.x+c.w/2,f=c.y+c.h/2;let u=!1,p=!1,v=1/0,T=0;switch(e){case"right":u=h>r,p=Ea(i.y,i.h,c.y,c.h),v=Math.max(0,c.x-(i.x+i.w)),T=Math.abs(f-s);break;case"left":u=h<r,p=Ea(i.y,i.h,c.y,c.h),v=Math.max(0,i.x-(c.x+c.w)),T=Math.abs(f-s);break;case"down":u=f>s,p=Ea(i.x,i.w,c.x,c.w),v=Math.max(0,c.y-(i.y+i.h)),T=Math.abs(h-r);break;case"up":u=f<s,p=Ea(i.x,i.w,c.x,c.w),v=Math.max(0,i.y-(c.y+c.h)),T=Math.abs(h-r);break}if(!u||!p)continue;const m=v*1e3+T;m<l&&(l=m,o=a)}return console.log(`findNext from ${t.id} dir ${e}: best is ${o==null?void 0:o.id} with score ${l}`),o}function Bc(t){let e=t.panel,n=t.bounds;const i=28;for(;e;){let r=e.targetScrollX,s=e.targetScrollY;n.x<e.targetScrollX+i?r=n.x-i:n.x+n.w>e.targetScrollX+e.viewport.w-i&&(r=n.x+n.w-e.viewport.w+i),n.y<e.targetScrollY+i?s=n.y-i:n.y+n.h>e.targetScrollY+e.viewport.h-i&&(s=n.y+n.h-e.viewport.h+i);const o=Math.max(0,e.contentSize.w-e.viewport.w),l=Math.max(0,e.contentSize.h-e.viewport.h);if(e.targetScrollX=Up(r,0,o),e.targetScrollY=Up(s,0,l),e.parentTile)n=e.parentTile.bounds,e=e.parentTile.panel;else break}}class zc{constructor(e){this.lastDir=null,this.onFocusChange=null,this.layout=e,this.root=e.root,this.allPanels=e.allPanels,this.allLeaves=e.allLeaves,this.focused=e.allLeaves[0],Bc(this.focused)}handleInput(e){return this.navigate(e)}updateLayout(e){this.layout=e,this.root=e.root,this.allPanels=e.allPanels,this.allLeaves=e.allLeaves;const n=e.allLeaves.find(i=>i.panel.id===this.focused.panel.id&&i.label===this.focused.label||i.id===this.focused.id);n?this.focused=n:e.allLeaves.length>0&&(this.focused=e.allLeaves[0]),Bc(this.focused)}navigate(e){this.lastDir=e;const n=ES(this.focused,e,this.allLeaves);return n?(this.setFocus(n),!0):!1}setFocus(e){var n;this.focused=e,Bc(e),(n=this.onFocusChange)==null||n.call(this,e,this.lastDir)}step(e){const n=1-Math.pow(8e-4,e);for(const i of this.allPanels)i.scrollX+=(i.targetScrollX-i.scrollX)*n,i.scrollY+=(i.targetScrollY-i.scrollY)*n}snapScroll(){for(const e of this.allPanels)e.scrollX=e.targetScrollX,e.scrollY=e.targetScrollY}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="185",TS=0,kp=1,wS=2,sl=1,AS=2,go=3,mr=0,gn=1,In=2,Pi=0,bs=1,Bp=2,zp=3,Hp=4,RS=5,Rr=100,CS=101,bS=102,PS=103,LS=104,DS=200,IS=201,NS=202,US=203,gf=204,vf=205,FS=206,OS=207,kS=208,BS=209,zS=210,HS=211,VS=212,GS=213,WS=214,_f=0,xf=1,Sf=2,Bs=3,yf=4,Mf=5,Ef=6,Tf=7,ev=0,XS=1,YS=2,hi=0,tv=1,nv=2,iv=3,rv=4,sv=5,ov=6,av=7,lv=300,Vr=301,zs=302,Hc=303,Vc=304,sc=306,wf=1e3,Ci=1001,Af=1002,Wt=1003,$S=1004,Ta=1005,en=1006,Gc=1007,Dr=1008,Nn=1009,cv=1010,uv=1011,$o=1012,th=1013,gi=1014,ci=1015,Oi=1016,nh=1017,ih=1018,qo=1020,fv=35902,dv=35899,hv=1021,pv=1022,Zn=1023,ki=1026,Ir=1027,mv=1028,rh=1029,Gr=1030,sh=1031,oh=1033,ol=33776,al=33777,ll=33778,cl=33779,Rf=35840,Cf=35841,bf=35842,Pf=35843,Lf=36196,Df=37492,If=37496,Nf=37488,Uf=37489,Ul=37490,Ff=37491,Of=37808,kf=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,Xf=37816,Yf=37817,$f=37818,qf=37819,Kf=37820,Zf=37821,Jf=36492,Qf=36494,jf=36495,ed=36283,td=36284,Fl=36285,nd=36286,qS=3200,Vp=0,KS=1,tr="",Qt="srgb",Ol="srgb-linear",kl="linear",it="srgb",Jr=7680,Gp=519,ZS=512,JS=513,QS=514,ah=515,jS=516,ey=517,lh=518,ty=519,Wp=35044,Xp="300 es",ui=2e3,Bl=2001;function ny(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iy(){const t=zl("canvas");return t.style.display="block",t}const Yp={};function $p(...t){const e="THREE."+t.shift();console.log(e,...t)}function gv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=gv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=gv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ps(...t){const e=t.join(" ");e in Yp||(Yp[e]=!0,Ie(...t))}function ry(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sy={[_f]:xf,[Sf]:Ef,[yf]:Tf,[Bs]:Mf,[xf]:_f,[Ef]:Sf,[Tf]:yf,[Mf]:Bs};class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,id=180/Math.PI;function ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function oy(t,e){return(t%e+e)%e}function Xc(t,e,n){return(1-n)*t+n*e}function no(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dh=class dh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;let Qe=dh;class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let a=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],v=s[o+2],T=s[o+3];if(f!==T||a!==u||c!==p||h!==v){let m=a*u+c*p+h*v+f*T;m<0&&(u=-u,p=-p,v=-v,T=-T,m=-m);let d=1-l;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);d=Math.sin(d*x)/y,l=Math.sin(l*x)/y,a=a*d+u*l,c=c*d+p*l,h=h*d+v*l,f=f*d+T*l}else{a=a*d+u*l,c=c*d+p*l,h=h*d+v*l,f=f*d+T*l;const x=1/Math.sqrt(a*a+c*c+h*h+f*f);a*=x,c*=x,h*=x,f*=x}}e[n]=a,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],a=i[r+1],c=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[n]=l*v+h*f+a*p-c*u,e[n+1]=a*v+h*u+c*f-l*p,e[n+2]=c*v+h*p+l*u-a*f,e[n+3]=h*v-l*f-a*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,a=Math.sin,c=l(i/2),h=l(r/2),f=l(s/2),u=a(i/2),p=a(r/2),v=a(s/2);switch(o){case"XYZ":this._x=u*h*f+c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f-u*p*v;break;case"YXZ":this._x=u*h*f+c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f+u*p*v;break;case"ZXY":this._x=u*h*f-c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f-u*p*v;break;case"ZYX":this._x=u*h*f-c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f+u*p*v;break;case"YZX":this._x=u*h*f+c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f-u*p*v;break;case"XZY":this._x=u*h*f-c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f+u*p*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],a=n[9],c=n[2],h=n[6],f=n[10],u=i+l+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>l&&i>f){const p=2*Math.sqrt(1+i-l-f);this._w=(h-a)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(l>f){const p=2*Math.sqrt(1+l-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+f-i-l);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,a=n._y,c=n._z,h=n._w;return this._x=i*h+o*l+r*c-s*a,this._y=r*h+o*a+s*l-i*c,this._z=s*h+o*c+i*a-r*l,this._w=o*h-i*l-r*a-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,o=-o,l=-l);let a=1-n;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);a=Math.sin(a*c)/h,n=Math.sin(n*c)/h,this._x=this._x*a+i*n,this._y=this._y*a+r*n,this._z=this._z*a+s*n,this._w=this._w*a+o*n,this._onChangeCallback()}else this._x=this._x*a+i*n,this._y=this._y*a+r*n,this._z=this._z*a+s*n,this._w=this._w*a+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hh=class hh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,a=e.w,c=2*(o*r-l*i),h=2*(l*n-s*r),f=2*(s*i-o*n);return this.x=n+a*c+o*f-l*h,this.y=i+a*h+l*c-s*f,this.z=r+a*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,a=n.z;return this.x=r*a-s*l,this.y=s*o-i*a,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;let Y=hh;const Yc=new Y,qp=new Ys,ph=class ph{constructor(e,n,i,r,s,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,a,c)}set(e,n,i,r,s,o,l,a,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=a,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],a=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],v=i[8],T=r[0],m=r[3],d=r[6],x=r[1],y=r[4],S=r[7],M=r[2],A=r[5],w=r[8];return s[0]=o*T+l*x+a*M,s[3]=o*m+l*y+a*A,s[6]=o*d+l*S+a*w,s[1]=c*T+h*x+f*M,s[4]=c*m+h*y+f*A,s[7]=c*d+h*S+f*w,s[2]=u*T+p*x+v*M,s[5]=u*m+p*y+v*A,s[8]=u*d+p*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8];return n*o*h-n*l*c-i*s*h+i*l*a+r*s*c-r*o*a}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],f=h*o-l*c,u=l*a-h*s,p=c*s-o*a,v=n*f+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/v;return e[0]=f*T,e[1]=(r*c-h*i)*T,e[2]=(l*i-r*o)*T,e[3]=u*T,e[4]=(h*n-r*a)*T,e[5]=(r*s-l*n)*T,e[6]=p*T,e[7]=(i*a-c*n)*T,e[8]=(o*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const a=Math.cos(s),c=Math.sin(s);return this.set(i*a,i*c,-i*(a*o+c*l)+o+e,-r*c,r*a,-r*(-c*o+a*l)+l+n,0,0,1),this}scale(e,n){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,n)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,n){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;let Fe=ph;const $c=new Fe,Kp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ay(){const t={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ol]:{primaries:e,whitePoint:i,transfer:kl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),t}const Xe=ay();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class ly{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=zl("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cy=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ly.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let uy=0;const Kc=new Y;class tn extends $r{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Ci,r=Ci,s=en,o=Dr,l=Zn,a=Nn,c=tn.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ea(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=lv;tn.DEFAULT_ANISOTROPY=1;const mh=class mh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const a=e.elements,c=a[0],h=a[4],f=a[8],u=a[1],p=a[5],v=a[9],T=a[2],m=a[6],d=a[10];if(Math.abs(h-u)<.01&&Math.abs(f-T)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+T)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,M=(d+1)/2,A=(h+u)/4,w=(f+T)/4,g=(v+m)/4;return y>S&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=w/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=g/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=w/s,r=g/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-v)*(m-v)+(f-T)*(f-T)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-T)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;let Et=mh;class fy extends $r{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new tn(r),o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ch(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends fy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vl=class Vl{constructor(e,n,i,r,s,o,l,a,c,h,f,u,p,v,T,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,a,c,h,f,u,p,v,T,m)}set(e,n,i,r,s,o,l,a,c,h,f,u,p,v,T,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=l,d[13]=a,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=v,d[11]=T,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),a=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,v=l*h,T=l*f;n[0]=a*h,n[4]=-a*f,n[8]=c,n[1]=p+v*c,n[5]=u-T*c,n[9]=-l*a,n[2]=T-u*c,n[6]=v+p*c,n[10]=o*a}else if(e.order==="YXZ"){const u=a*h,p=a*f,v=c*h,T=c*f;n[0]=u+T*l,n[4]=v*l-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-l,n[2]=p*l-v,n[6]=T+u*l,n[10]=o*a}else if(e.order==="ZXY"){const u=a*h,p=a*f,v=c*h,T=c*f;n[0]=u-T*l,n[4]=-o*f,n[8]=v+p*l,n[1]=p+v*l,n[5]=o*h,n[9]=T-u*l,n[2]=-o*c,n[6]=l,n[10]=o*a}else if(e.order==="ZYX"){const u=o*h,p=o*f,v=l*h,T=l*f;n[0]=a*h,n[4]=v*c-p,n[8]=u*c+T,n[1]=a*f,n[5]=T*c+u,n[9]=p*c-v,n[2]=-c,n[6]=l*a,n[10]=o*a}else if(e.order==="YZX"){const u=o*a,p=o*c,v=l*a,T=l*c;n[0]=a*h,n[4]=T-u*f,n[8]=v*f+p,n[1]=f,n[5]=o*h,n[9]=-l*h,n[2]=-c*h,n[6]=p*f+v,n[10]=u-T*f}else if(e.order==="XZY"){const u=o*a,p=o*c,v=l*a,T=l*c;n[0]=a*h,n[4]=-f,n[8]=c*h,n[1]=u*f+T,n[5]=o*h,n[9]=p*f-v,n[2]=v*f-p,n[6]=l*h,n[10]=T*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,py)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Xi.crossVectors(i,_n),Xi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Xi.crossVectors(i,_n)),Xi.normalize(),wa.crossVectors(_n,Xi),r[0]=Xi.x,r[4]=wa.x,r[8]=_n.x,r[1]=Xi.y,r[5]=wa.y,r[9]=_n.y,r[2]=Xi.z,r[6]=wa.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],a=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],v=i[2],T=i[6],m=i[10],d=i[14],x=i[3],y=i[7],S=i[11],M=i[15],A=r[0],w=r[4],g=r[8],C=r[12],R=r[1],b=r[5],D=r[9],H=r[13],$=r[2],F=r[6],Z=r[10],B=r[14],L=r[3],V=r[7],I=r[11],J=r[15];return s[0]=o*A+l*R+a*$+c*L,s[4]=o*w+l*b+a*F+c*V,s[8]=o*g+l*D+a*Z+c*I,s[12]=o*C+l*H+a*B+c*J,s[1]=h*A+f*R+u*$+p*L,s[5]=h*w+f*b+u*F+p*V,s[9]=h*g+f*D+u*Z+p*I,s[13]=h*C+f*H+u*B+p*J,s[2]=v*A+T*R+m*$+d*L,s[6]=v*w+T*b+m*F+d*V,s[10]=v*g+T*D+m*Z+d*I,s[14]=v*C+T*H+m*B+d*J,s[3]=x*A+y*R+S*$+M*L,s[7]=x*w+y*b+S*F+M*V,s[11]=x*g+y*D+S*Z+M*I,s[15]=x*C+y*H+S*B+M*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],a=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],v=e[3],T=e[7],m=e[11],d=e[15],x=a*p-c*u,y=l*p-c*f,S=l*u-a*f,M=o*p-c*h,A=o*u-a*h,w=o*f-l*h;return n*(T*x-m*y+d*S)-i*(v*x-m*M+d*A)+r*(v*y-T*M+d*w)-s*(v*S-T*A+m*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],l=e[9],a=e[2],c=e[6],h=e[10];return n*(o*h-l*c)-i*(s*h-l*a)+r*(s*c-o*a)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],a=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],v=e[12],T=e[13],m=e[14],d=e[15],x=n*l-i*o,y=n*a-r*o,S=n*c-s*o,M=i*a-r*l,A=i*c-s*l,w=r*c-s*a,g=h*T-f*v,C=h*m-u*v,R=h*d-p*v,b=f*m-u*T,D=f*d-p*T,H=u*d-p*m,$=x*H-y*D+S*b+M*R-A*C+w*g;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/$;return e[0]=(l*H-a*D+c*b)*F,e[1]=(r*D-i*H-s*b)*F,e[2]=(T*w-m*A+d*M)*F,e[3]=(u*A-f*w-p*M)*F,e[4]=(a*R-o*H-c*C)*F,e[5]=(n*H-r*R+s*C)*F,e[6]=(m*S-v*w-d*y)*F,e[7]=(h*w-u*S+p*y)*F,e[8]=(o*D-l*R+c*g)*F,e[9]=(i*R-n*D-s*g)*F,e[10]=(v*A-T*S+d*x)*F,e[11]=(f*S-h*A-p*x)*F,e[12]=(l*C-o*b-a*g)*F,e[13]=(n*b-i*C+r*g)*F,e[14]=(T*y-v*M-m*x)*F,e[15]=(h*M-f*y+u*x)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,a=e.z,c=s*o,h=s*l;return this.set(c*o+i,c*l-r*a,c*a+r*l,0,c*l+r*a,h*l+i,h*a-r*o,0,c*a-r*l,h*a+r*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,a=n._w,c=s+s,h=o+o,f=l+l,u=s*c,p=s*h,v=s*f,T=o*h,m=o*f,d=l*f,x=a*c,y=a*h,S=a*f,M=i.x,A=i.y,w=i.z;return r[0]=(1-(T+d))*M,r[1]=(p+S)*M,r[2]=(v-y)*M,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(u+d))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(v+y)*w,r[9]=(m-x)*w,r[10]=(1-(u+T))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=jr.set(r[0],r[1],r[2]).length();const l=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Vn.copy(this);const c=1/o,h=1/l,f=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=o,i.y=l,i.z=a,this}makePerspective(e,n,i,r,s,o,l=ui,a=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,T;if(a)v=s/(o-s),T=o*s/(o-s);else if(l===ui)v=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(l===Bl)v=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=ui,a=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,T;if(a)v=1/(o-s),T=o/(o-s);else if(l===ui)v=-2/(o-s),T=-(o+s)/(o-s);else if(l===Bl)v=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Vl.prototype.isMatrix4=!0;let Dt=Vl;const jr=new Y,Vn=new Dt,hy=new Y(0,0,0),py=new Y(1,1,1),Xi=new Y,wa=new Y,_n=new Y,Jp=new Dt,Qp=new Ys;class Wr{constructor(e=0,n=0,i=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],a=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const jp=new Y,es=new Ys,_i=new Dt,Aa=new Y,io=new Y,gy=new Y,vy=new Ys,em=new Y(1,0,0),tm=new Y(0,1,0),nm=new Y(0,0,1),im={type:"added"},_y={type:"removed"},ts={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Tn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Y,n=new Wr,i=new Ys,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Fe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(io,Aa,this.up):_i.lookAt(Aa,io,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),es.setFromRotationMatrix(_i),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),ts.child=e,this.dispatchEvent(ts),ts.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_y),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const f=a[c];s(e.shapes,f)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(s(e.materials,this.material[a]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];r.animations.push(s(e.animations,a))}}if(n){const l=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new Y(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vo extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const T of e.hand.values()){const m=n.getJointPose(T,i),d=this._getHandJoint(c,T);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return l!==null&&(l.visible=r!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=oy(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Qc(o,s,e+1/3),this.g=Qc(o,s,e),this.b=Qc(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qt){const i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Xe.workingToColorSpace(Jt.copy(this),e),Math.round(Ye(Jt.r*255,0,255))*65536+Math.round(Ye(Jt.g*255,0,255))*256+Math.round(Ye(Jt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const f=o-l;switch(c=h<=.5?f/(o+l):f/(2-o-l),o){case i:a=(r-s)/f+(r<s?6:0);break;case r:a=(s-i)/f+2;break;case s:a=(i-r)/f+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Qt){Xe.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Ra);const i=Xc(Yi.h,Ra.h,n),r=Xc(Yi.s,Ra.s,n),s=Xc(Yi.l,Ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=xv;class Sy extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new Y,xi=new Y,jc=new Y,Si=new Y,ns=new Y,is=new Y,rm=new Y,eu=new Y,tu=new Y,nu=new Y,iu=new Et,ru=new Et,su=new Et;class Kn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),xi.subVectors(i,n),jc.subVectors(e,n);const o=Gn.dot(Gn),l=Gn.dot(xi),a=Gn.dot(jc),c=xi.dot(xi),h=xi.dot(jc),f=o*c-l*l;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*a-l*h)*u,v=(o*h-l*a)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,o,l,a){return this.getBarycoord(e,n,i,r,Si)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Si.x),a.addScaledVector(o,Si.y),a.addScaledVector(l,Si.z),a)}static getInterpolatedAttribute(e,n,i,r,s,o){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,n),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(iu,s.x),o.addScaledVector(ru,s.y),o.addScaledVector(su,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),xi.subVectors(e,n),Gn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;ns.subVectors(r,i),is.subVectors(s,i),eu.subVectors(e,i);const a=ns.dot(eu),c=is.dot(eu);if(a<=0&&c<=0)return n.copy(i);tu.subVectors(e,r);const h=ns.dot(tu),f=is.dot(tu);if(h>=0&&f<=h)return n.copy(r);const u=a*f-h*c;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),n.copy(i).addScaledVector(ns,o);nu.subVectors(e,s);const p=ns.dot(nu),v=is.dot(nu);if(v>=0&&p<=v)return n.copy(s);const T=p*c-a*v;if(T<=0&&c>=0&&v<=0)return l=c/(c-v),n.copy(i).addScaledVector(is,l);const m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return rm.subVectors(s,r),l=(f-h)/(f-h+(p-v)),n.copy(r).addScaledVector(rm,l);const d=1/(m+T+u);return o=T*d,l=u*d,n.copy(i).addScaledVector(ns,o).addScaledVector(is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ta{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),ba.subVectors(this.max,ro),rs.subVectors(e.a,ro),ss.subVectors(e.b,ro),os.subVectors(e.c,ro),$i.subVectors(ss,rs),qi.subVectors(os,ss),Sr.subVectors(rs,os);let n=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-Sr.z,Sr.y,$i.z,0,-$i.x,qi.z,0,-qi.x,Sr.z,0,-Sr.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-Sr.y,Sr.x,0];return!ou(n,rs,ss,os,ba)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,rs,ss,os,ba))?!1:(Pa.crossVectors($i,qi),n=[Pa.x,Pa.y,Pa.z],ou(n,rs,ss,os,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Wn=new Y,Ca=new ta,rs=new Y,ss=new Y,os=new Y,$i=new Y,qi=new Y,Sr=new Y,ro=new Y,ba=new Y,Pa=new Y,yr=new Y;function ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const l=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),a=e.dot(yr),c=n.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const Pt=new Y,La=new Qe;let yy=0;class mi extends $r{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sv extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yv extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Di extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const My=new ta,so=new Y,au=new Y;class uh{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):My.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const n=so.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(so,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(au)),this.expandByPoint(so.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ey=0;const Pn=new Dt,lu=new Tn,as=new Y,xn=new ta,oo=new ta,Bt=new Y;class zi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ny(e)?yv:Sv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];oo.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(xn.min,oo.min),xn.expandByPoint(Bt),Bt.addVectors(xn.max,oo.max),xn.expandByPoint(Bt)):(xn.expandByPoint(oo.min),xn.expandByPoint(oo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Bt.fromBufferAttribute(l,c),a&&(as.fromBufferAttribute(e,c),Bt.add(as)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],a=[];for(let g=0;g<i.count;g++)l[g]=new Y,a[g]=new Y;const c=new Y,h=new Y,f=new Y,u=new Qe,p=new Qe,v=new Qe,T=new Y,m=new Y;function d(g,C,R){c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,R),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,R),h.sub(c),f.sub(c),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(T.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),l[g].add(T),l[C].add(T),l[R].add(T),a[g].add(m),a[C].add(m),a[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let g=0,C=x.length;g<C;++g){const R=x[g],b=R.start,D=R.count;for(let H=b,$=b+D;H<$;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new Y,S=new Y,M=new Y,A=new Y;function w(g){M.fromBufferAttribute(r,g),A.copy(M);const C=l[g];y.copy(C),y.sub(M.multiplyScalar(M.dot(C))).normalize(),S.crossVectors(A,C);const b=S.dot(a[g])<0?-1:1;o.setXYZW(g,y.x,y.y,y.z,b)}for(let g=0,C=x.length;g<C;++g){const R=x[g],b=R.start,D=R.count;for(let H=b,$=b+D;H<$;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new Y,s=new Y,o=new Y,l=new Y,a=new Y,c=new Y,h=new Y,f=new Y;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),T=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,T),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(i,v),a.fromBufferAttribute(i,T),c.fromBufferAttribute(i,m),l.add(h),a.add(h),c.add(h),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(T,a.x,a.y,a.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,a){const c=l.array,h=l.itemSize,f=l.normalized,u=new c.constructor(a.length*h);let p=0,v=0;for(let T=0,m=a.length;T<m;T++){l.isInterleavedBufferAttribute?p=a[T]*l.data.stride+l.offset:p=a[T]*h;for(let d=0;d<h;d++)u[v++]=c[p++]}return new mi(u,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,i=this.index.array,r=this.attributes;for(const l in r){const a=r[l],c=e(a,i);n.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const a=[],c=s[l];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);a.push(p)}n.morphAttributes[l]=a}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const a in i){const c=i[a];e.data.attributes[a]=c.toJSON(e.data)}const r={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[a]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ty=0;class oc extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=bs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==vf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const a=s[l];delete a.metadata,o.push(a)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new Y,cu=new Y,Da=new Y,Ki=new Y,uu=new Y,Ia=new Y,fu=new Y;class wy{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),Da.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Da),l=Ki.dot(this.direction),a=-Ki.dot(Da),c=Ki.lengthSq(),h=Math.abs(1-o*o);let f,u,p,v;if(h>0)if(f=o*a-l,u=o*l-a,v=s*h,f>=0)if(u>=-v)if(u<=v){const T=1/h;f*=T,u*=T,p=f*(f+o*u+2*l)+u*(o*f+u+2*a)+c}else u=s,f=Math.max(0,-(o*u+l)),p=-f*f+u*(u+2*a)+c;else u=-s,f=Math.max(0,-(o*u+l)),p=-f*f+u*(u+2*a)+c;else u<=-v?(f=Math.max(0,-(-o*s+l)),u=f>0?-s:Math.min(Math.max(-s,-a),s),p=-f*f+u*(u+2*a)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+c):(f=Math.max(0,-(o*s+l)),u=f>0?s:Math.min(Math.max(-s,-a),s),p=-f*f+u*(u+2*a)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+l)),p=-f*f+u*(u+2*a)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cu).addScaledVector(Da,u),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,a=i+o;return a<0?null:l<0?this.at(a,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(l=(e.min.z-u.z)*f,a=(e.max.z-u.z)*f):(l=(e.max.z-u.z)*f,a=(e.min.z-u.z)*f),i>a||l>r)||((l>i||i!==i)&&(i=l),(a<r||r!==r)&&(r=a),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){uu.subVectors(n,e),Ia.subVectors(i,e),fu.crossVectors(uu,Ia);let o=this.direction.dot(fu),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const a=l*this.direction.dot(Ia.crossVectors(Ki,Ia));if(a<0)return null;const c=l*this.direction.dot(uu.cross(Ki));if(c<0||a+c>o)return null;const h=-l*Ki.dot(fu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Co extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sm=new Dt,Mr=new wy,Na=new uh,om=new Y,Ua=new Y,Fa=new Y,Oa=new Y,du=new Y,ka=new Y,am=new Y,Ba=new Y;class On extends Tn{constructor(e=new zi,n=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ka.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const h=l[a],f=s[a];h!==0&&(du.fromBufferAttribute(f,e),o?ka.addScaledVector(du,h):ka.addScaledVector(du.sub(n),h))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Na.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Na,om)===null||Mr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(sm.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(sm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,a=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,T=u.length;v<T;v++){const m=u[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,M=y;S<M;S+=3){const A=l.getX(S),w=l.getX(S+1),g=l.getX(S+2);r=za(this,d,e,i,c,h,f,A,w,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let m=v,d=T;m<d;m+=3){const x=l.getX(m),y=l.getX(m+1),S=l.getX(m+2);r=za(this,o,e,i,c,h,f,x,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(a!==void 0)if(Array.isArray(o))for(let v=0,T=u.length;v<T;v++){const m=u[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,M=y;S<M;S+=3){const A=S,w=S+1,g=S+2;r=za(this,d,e,i,c,h,f,A,w,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),T=Math.min(a.count,p.start+p.count);for(let m=v,d=T;m<d;m+=3){const x=m,y=m+1,S=m+2;r=za(this,o,e,i,c,h,f,x,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ay(t,e,n,i,r,s,o,l){let a;if(e.side===gn?a=i.intersectTriangle(o,s,r,!0,l):a=i.intersectTriangle(r,s,o,e.side===mr,l),a===null)return null;Ba.copy(l),Ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ba);return c<n.near||c>n.far?null:{distance:c,point:Ba.clone(),object:t}}function za(t,e,n,i,r,s,o,l,a,c){t.getVertexPosition(l,Ua),t.getVertexPosition(a,Fa),t.getVertexPosition(c,Oa);const h=Ay(t,e,n,i,Ua,Fa,Oa,am);if(h){const f=new Y;Kn.getBarycoord(am,Ua,Fa,Oa,f),r&&(h.uv=Kn.getInterpolatedAttribute(r,l,a,c,f,new Qe)),s&&(h.uv1=Kn.getInterpolatedAttribute(s,l,a,c,f,new Qe)),o&&(h.normal=Kn.getInterpolatedAttribute(o,l,a,c,f,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:a,c,normal:new Y,materialIndex:0};Kn.getNormal(Ua,Fa,Oa,u.normal),h.face=u,h.barycoord=f}return h}class Ry extends tn{constructor(e=null,n=1,i=1,r,s,o,l,a,c=Wt,h=Wt,f,u){super(null,o,l,a,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new Y,Cy=new Y,by=new Fe;class Ar{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(Cy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||by.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new uh,Py=new Qe(.5,.5),Ha=new Y;class Mv{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],a=s[2],c=s[3],h=s[4],f=s[5],u=s[6],p=s[7],v=s[8],T=s[9],m=s[10],d=s[11],x=s[12],y=s[13],S=s[14],M=s[15];if(r[0].setComponents(c-o,p-h,d-v,M-x).normalize(),r[1].setComponents(c+o,p+h,d+v,M+x).normalize(),r[2].setComponents(c+l,p+f,d+T,M+y).normalize(),r[3].setComponents(c-l,p-f,d-T,M-y).normalize(),i)r[4].setComponents(a,u,m,S).normalize(),r[5].setComponents(c-a,p-u,d-m,M-S).normalize();else if(r[4].setComponents(c-a,p-u,d-m,M-S).normalize(),n===ui)r[5].setComponents(c+a,p+u,d+m,M+S).normalize();else if(n===Bl)r[5].setComponents(a,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=Py.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ev extends tn{constructor(e=[],n=Vr,i,r,s,o,l,a,c,h){super(e,n,i,r,s,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ac extends tn{constructor(e,n,i,r,s,o,l,a,c){super(e,n,i,r,s,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends tn{constructor(e,n,i=gi,r,s,o,l=Wt,a=Wt,c,h=ki,f=1){if(h!==ki&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,o,l,a,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ly extends Hs{constructor(e,n=gi,i=Vr,r,s,o=Wt,l=Wt,a,c=ki){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,l,a,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tv extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class na extends zi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const a=[],c=[],h=[],f=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(a),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(f,2));function v(T,m,d,x,y,S,M,A,w,g,C){const R=S/w,b=M/g,D=S/2,H=M/2,$=A/2,F=w+1,Z=g+1;let B=0,L=0;const V=new Y;for(let I=0;I<Z;I++){const J=I*b-H;for(let q=0;q<F;q++){const ve=q*R-D;V[T]=ve*x,V[m]=J*y,V[d]=$,c.push(V.x,V.y,V.z),V[T]=0,V[m]=0,V[d]=A>0?1:-1,h.push(V.x,V.y,V.z),f.push(q/w),f.push(1-I/g),B+=1}}for(let I=0;I<g;I++)for(let J=0;J<w;J++){const q=u+J+F*I,ve=u+J+F*(I+1),_e=u+(J+1)+F*(I+1),Me=u+(J+1)+F*I;a.push(q,ve,Me),a.push(ve,_e,Me),L+=6}l.addGroup(p,L,C),p+=L,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fr extends zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),a=Math.floor(r),c=l+1,h=a+1,f=e/l,u=n/a,p=[],v=[],T=[],m=[];for(let d=0;d<h;d++){const x=d*u-o;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-x,0),T.push(0,0,1),m.push(y/l),m.push(1-d/a)}}for(let d=0;d<a;d++)for(let x=0;x<l;x++){const y=x+c*d,S=x+c*(d+1),M=x+1+c*(d+1),A=x+1+c*d;p.push(y,S,A),p.push(S,M,A)}this.setIndex(p),this.setAttribute("position",new Di(v,3)),this.setAttribute("normal",new Di(T,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(lm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(lm(r[0])){const s=[];for(let o=0,l=r.length;o<l;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function lm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Dy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Iy={clone:Vs,merge:rn};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fy extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oy extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Va=new Y,Ga=new Ys,ri=new Y;class Av extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ga,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Va,Ga,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new Y,cm=new Qe,um=new Qe;class qn extends Av{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,cm,um),n.subVectors(um,cm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/a,n-=o.offsetY*i/c,r*=o.width/a,i*=o.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fh extends Av{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,a=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=-90,cs=1;class By extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(ls,cs,e,n);r.layers=this.layers,this.add(r);const s=new qn(ls,cs,e,n);s.layers=this.layers,this.add(s);const o=new qn(ls,cs,e,n);o.layers=this.layers,this.add(o);const l=new qn(ls,cs,e,n);l.layers=this.layers,this.add(l);const a=new qn(ls,cs,e,n);a.layers=this.layers,this.add(a);const c=new qn(ls,cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,a]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,a,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class zy extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh=class gh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};gh.prototype.isMatrix2=!0;let fm=gh;function dm(t,e,n,i){const r=Hy(i);switch(n){case hv:return t*e;case mv:return t*e/r.components*r.byteLength;case rh:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case sh:return t*e*2/r.components*r.byteLength;case pv:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case oh:return t*e*4/r.components*r.byteLength;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Rf:case bf:return Math.max(t,8)*Math.max(e,8)/2;case Lf:case Df:case Nf:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case If:case Ul:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jf:case Qf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fl:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hy(t){switch(t){case Nn:case cv:return{byteLength:1,components:1};case $o:case uv:case Oi:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case gi:case th:case ci:return{byteLength:4,components:1};case fv:case dv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vy(t){const e=new WeakMap;function n(l,a){const c=l.array,h=l.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(a,u),t.bufferData(a,c,h),l.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,a,c){const h=a.array,f=a.updateRanges;if(t.bindBuffer(c,l),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){const v=f[u],T=f[p];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++u,f[u]=T)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){const T=f[p];t.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}a.clearUpdateRanges()}a.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(t.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,n(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,a),c.version=l.version}}return{get:r,remove:s,update:o}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:Yy,alphatest_fragment:$y,alphatest_pars_fragment:qy,aomap_fragment:Ky,aomap_pars_fragment:Zy,batching_pars_vertex:Jy,batching_vertex:Qy,begin_vertex:jy,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:aM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:_M,colorspace_fragment:xM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:UM,envmap_vertex:wM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:bM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:IM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:GM,lights_fragment_end:WM,lightprobes_pars_fragment:XM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:JM,map_particle_fragment:QM,map_particle_pars_fragment:jM,metalnessmap_fragment:eE,metalnessmap_pars_fragment:tE,morphinstance_vertex:nE,morphcolor_vertex:iE,morphnormal_vertex:rE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:aE,normal_fragment_maps:lE,normal_pars_fragment:cE,normal_pars_vertex:uE,normal_vertex:fE,normalmap_pars_fragment:dE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,opaque_fragment:vE,packing:_E,premultiplied_alpha_fragment:xE,project_vertex:SE,dithering_fragment:yE,dithering_pars_fragment:ME,roughnessmap_fragment:EE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:AE,shadowmap_vertex:RE,shadowmask_pars_fragment:CE,skinbase_vertex:bE,skinning_pars_vertex:PE,skinning_vertex:LE,skinnormal_vertex:DE,specularmap_fragment:IE,specularmap_pars_fragment:NE,tonemapping_fragment:UE,tonemapping_pars_fragment:FE,transmission_fragment:OE,transmission_pars_fragment:kE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:HE,worldpos_vertex:VE,background_vert:GE,background_frag:WE,backgroundCube_vert:XE,backgroundCube_frag:YE,cube_vert:$E,cube_frag:qE,depth_vert:KE,depth_frag:ZE,distance_vert:JE,distance_frag:QE,equirect_vert:jE,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:u1,meshphong_vert:f1,meshphong_frag:d1,meshphysical_vert:h1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:v1,points_frag:_1,shadow_vert:x1,shadow_frag:S1,sprite_vert:y1,sprite_frag:M1},he={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ai={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wa={r:0,b:0,g:0},E1=new Dt,Cv=new Fe;Cv.set(-1,0,0,0,1,0,0,0,1);function T1(t,e,n,i,r,s){const o=new et(0);let l=r===!0?0:1,a,c,h=null,f=0,u=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function v(x){let y=!1;const S=p(x);S===null?m(o,l):S&&S.isColor&&(m(S,1),y=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(x,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===sc)?(c===void 0&&(c=new On(new na(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Vs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cv),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==it,(h!==S||f!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(a===void 0&&(a=new On(new Fr(2,2),new vi({name:"BackgroundMaterial",uniforms:Vs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=S,a.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,a.material.toneMapped=Xe.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),a.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==t.toneMapping)&&(a.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),a.layers.enableAll(),x.unshift(a,a.geometry,a.material,0,0,null))}function m(x,y){x.getRGB(Wa,wv(t)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:v,addToRenderList:T,dispose:d}}function w1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function l(b,D,H,$,F){let Z=!1;const B=f(b,$,H,D);s!==B&&(s=B,c(s.object)),Z=p(b,$,H,F),Z&&v(b,$,H,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(b,D,H,$),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function a(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function f(b,D,H,$){const F=$.wireframe===!0;let Z=i[D.id];Z===void 0&&(Z={},i[D.id]=Z);const B=b.isInstancedMesh===!0?b.id:0;let L=Z[B];L===void 0&&(L={},Z[B]=L);let V=L[H.id];V===void 0&&(V={},L[H.id]=V);let I=V[F];return I===void 0&&(I=u(a()),V[F]=I),I}function u(b){const D=[],H=[],$=[];for(let F=0;F<n;F++)D[F]=0,H[F]=0,$[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:$,object:b,attributes:{},index:null}}function p(b,D,H,$){const F=s.attributes,Z=D.attributes;let B=0;const L=H.getAttributes();for(const V in L)if(L[V].location>=0){const J=F[V];let q=Z[V];if(q===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),J===void 0||J.attribute!==q||q&&J.data!==q.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function v(b,D,H,$){const F={},Z=D.attributes;let B=0;const L=H.getAttributes();for(const V in L)if(L[V].location>=0){let J=Z[V];J===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const q={};q.attribute=J,J&&J.data&&(q.data=J.data),F[V]=q,B++}s.attributes=F,s.attributesNum=B,s.index=$}function T(){const b=s.newAttributes;for(let D=0,H=b.length;D<H;D++)b[D]=0}function m(b){d(b,0)}function d(b,D){const H=s.newAttributes,$=s.enabledAttributes,F=s.attributeDivisors;H[b]=1,$[b]===0&&(t.enableVertexAttribArray(b),$[b]=1),F[b]!==D&&(t.vertexAttribDivisor(b,D),F[b]=D)}function x(){const b=s.newAttributes,D=s.enabledAttributes;for(let H=0,$=D.length;H<$;H++)D[H]!==b[H]&&(t.disableVertexAttribArray(H),D[H]=0)}function y(b,D,H,$,F,Z,B){B===!0?t.vertexAttribIPointer(b,D,H,F,Z):t.vertexAttribPointer(b,D,H,$,F,Z)}function S(b,D,H,$){T();const F=$.attributes,Z=H.getAttributes(),B=D.defaultAttributeValues;for(const L in Z){const V=Z[L];if(V.location>=0){let I=F[L];if(I===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(I=b.instanceColor)),I!==void 0){const J=I.normalized,q=I.itemSize,ve=e.get(I);if(ve===void 0)continue;const _e=ve.buffer,Me=ve.type,k=ve.bytesPerElement,ne=Me===t.INT||Me===t.UNSIGNED_INT||I.gpuType===th;if(I.isInterleavedBufferAttribute){const se=I.data,Ne=se.stride,Oe=I.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)d(V.location+Le,se.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Le=0;Le<V.locationSize;Le++)y(V.location+Le,q/V.locationSize,Me,J,Ne*k,(Oe+q/V.locationSize*Le)*k,ne)}else{if(I.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,I.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let se=0;se<V.locationSize;se++)y(V.location+se,q/V.locationSize,Me,J,q*k,q/V.locationSize*se*k,ne)}}else if(B!==void 0){const J=B[L];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(V.location,J);break;case 3:t.vertexAttrib3fv(V.location,J);break;case 4:t.vertexAttrib4fv(V.location,J);break;default:t.vertexAttrib1fv(V.location,J)}}}}x()}function M(){C();for(const b in i){const D=i[b];for(const H in D){const $=D[H];for(const F in $){const Z=$[F];for(const B in Z)h(Z[B].object),delete Z[B];delete $[F]}}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const H in D){const $=D[H];for(const F in $){const Z=$[F];for(const B in Z)h(Z[B].object),delete Z[B];delete $[F]}}delete i[b.id]}function w(b){for(const D in i){const H=i[D];for(const $ in H){const F=H[$];if(F[b.id]===void 0)continue;const Z=F[b.id];for(const B in Z)h(Z[B].object),delete Z[B];delete F[b.id]}}}function g(b){for(const D in i){const H=i[D],$=b.isInstancedMesh===!0?b.id:0,F=H[$];if(F!==void 0){for(const Z in F){const B=F[Z];for(const L in B)h(B[L].object),delete B[L];delete F[Z]}delete H[$],Object.keys(H).length===0&&delete i[D]}}}function C(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:C,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:m,disableUnusedAttributes:x}}function A1(t,e,n){let i;function r(a){i=a}function s(a,c){t.drawArrays(i,a,c),n.update(c,i,1)}function o(a,c,h){h!==0&&(t.drawArraysInstanced(i,a,c,h),n.update(c,i,h))}function l(a,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l}function R1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const g=w===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Nn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ci&&!g)}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=a(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:M,samples:A}}function C1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,l=new Fe,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,p){const v=f.clippingPlanes,T=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,y=x*4;let S=d.clippingState||null;a.value=S,S=h(v,u,y,p);for(let M=0;M!==y;++M)S[M]=n[M];d.clippingState=S,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=x}};function c(){a.value!==n&&(a.value=n,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,v){const T=f!==null?f.length:0;let m=null;if(T!==0){if(m=a.value,v!==!0||m===null){const d=p+T*4,x=u.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,S=p;y!==T;++y,S+=4)o.copy(f[y]).applyMatrix4(x,l),o.normal.toArray(m,S),m[S+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,m}}const rr=4,hm=[.125,.215,.35,.446,.526,.582],Cr=20,b1=256,ao=new fh,pm=new et;let pu=null,mu=0,gu=0,vu=!1;const P1=new Y;class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:l=P1}=s;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a,l),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=vu,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Oi,format:Zn,colorSpace:Ol,depthBuffer:!1},r=gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L1(s)),this._blurMaterial=I1(s,e,n),this._ggxMaterial=D1(s,e,n)}return r}_compileMaterial(e){const n=new On(new zi,e);this._renderer.compile(n,ao)}_sceneToCubeUV(e,n,i,r,s){const a=new qn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(pm),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new na,new Co({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,m=T.material;let d=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,d=!0):(m.color.copy(pm),d=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(a.up.set(0,c[y],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+h[y],s.y,s.z)):S===1?(a.up.set(0,0,c[y]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+h[y],s.z)):(a.up.set(0,c[y],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+h[y]));const M=this._cubeSize;us(r,S*M,y>2?M:0,M,M),f.setRenderTarget(r),d&&f.render(T,a),f.render(e,a)}f.toneMapping=p,f.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const a=this._cubeSize;us(n,0,0,3*a,2*a),i.setRenderTarget(n),i.render(o,ao)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const a=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,p=f*u,{_lodMax:v}=this,T=this._sizeLods[i],m=3*T*(i>v-rr?i-v+rr:0),d=4*(this._cubeSize-T);a.envMap.value=e.texture,a.roughness.value=p,a.mipInt.value=v-n,us(s,m,d,3*T,2*T),r.setRenderTarget(s),r.render(l,ao),a.envMap.value=s.texture,a.roughness.value=0,a.mipInt.value=v-i,us(e,m,d,3*T,2*T),r.setRenderTarget(e),r.render(l,ao)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,l){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),T=s/v,m=isFinite(s)?1+Math.floor(h*T):Cr;m>Cr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const d=[];let x=0;for(let w=0;w<Cr;++w){const g=w/T,C=Math.exp(-g*g/2);d.push(C),w===0?x+=C:w<m&&(x+=2*C)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-i;const S=this._sizeLods[r],M=3*S*(r>y-rr?r-y+rr:0),A=4*(this._cubeSize-S);us(n,M,A,3*S,2*S),a.setRenderTarget(n),a.render(f,ao)}}function L1(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+hm.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let a=1/l;o>t-rr?a=hm[o-t+rr-1]:o===0&&(a=0),n.push(a);const c=1/(l-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,T=3,m=2,d=1,x=new Float32Array(T*v*p),y=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,g=A>2?0:-1,C=[w,g,0,w+2/3,g,0,w+2/3,g+1,0,w,g,0,w+2/3,g+1,0,w,g+1,0];x.set(C,T*v*A),y.set(u,m*v*A);const R=[A,A,A,A,A,A];S.set(R,d*v*A)}const M=new zi;M.setAttribute("position",new mi(x,T)),M.setAttribute("uv",new mi(y,m)),M.setAttribute("faceIndex",new mi(S,d)),i.push(new On(M,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function gm(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function D1(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function I1(t,e,n){const i=new Float32Array(Cr),r=new Y(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function _m(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bv extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ev(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new na(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Pi});s.uniforms.tEquirect.value=n;const o=new On(r,s),l=n.minFilter;return n.minFilter===Dr&&(n.minFilter=en),new By(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function N1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Hc||p===Vc)if(e.has(u)){const v=e.get(u).texture;return l(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const T=new bv(v.height);return T.fromEquirectangularTexture(t,u),e.set(u,T),u.addEventListener("dispose",c),l(T.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,v=p===Hc||p===Vc,T=p===Vr||p===zs;if(v||T){let m=n.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new mm(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return v&&x&&x.height>0||T&&x&&a(x)?(i===null&&(i=new mm(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,p){return p===Hc?u.mapping=Vr:p===Vc&&(u.mapping=zs),u}function a(u){let p=0;const v=6;for(let T=0;T<v;T++)u[T]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function U1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ps("WebGLRenderer: "+i+" extension not supported."),r}}}function F1(t,e,n,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function l(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function a(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,v=f.attributes.position;let T=0;if(v===void 0)return;if(p!==null){const x=p.array;T=p.version;for(let y=0,S=x.length;y<S;y+=3){const M=x[y+0],A=x[y+1],w=x[y+2];u.push(M,A,A,w,w,M)}}else{const x=v.array;T=v.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const M=y+0,A=y+1,w=y+2;u.push(M,A,A,w,w,M)}}const m=new(v.count>=65535?yv:Sv)(u,1);m.version=T;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:l,update:a,getWireframeAttribute:h}}function O1(t,e,n){let i;function r(f){i=f}let s,o;function l(f){s=f.type,o=f.bytesPerElement}function a(f,u){t.drawElements(i,u,s,f*o),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*o,p),n.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let T=0;for(let m=0;m<p;m++)T+=u[m];n.update(T,i,1)}this.setMode=r,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function k1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e,n){const i=new WeakMap,r=new Et;function s(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(l);if(u===void 0||u.count!==f){let R=function(){g.dispose(),i.delete(l),l.removeEventListener("dispose",R)};var p=R;u!==void 0&&u.texture.dispose();const v=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),T===!0&&(S=2),m===!0&&(S=3);let M=l.attributes.position.count*S,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*f),g=new vv(w,M,A,f);g.type=ci,g.needsUpdate=!0;const C=S*4;for(let b=0;b<f;b++){const D=d[b],H=x[b],$=y[b],F=M*A*4*b;for(let Z=0;Z<D.count;Z++){const B=Z*C;v===!0&&(r.fromBufferAttribute(D,Z),w[F+B+0]=r.x,w[F+B+1]=r.y,w[F+B+2]=r.z,w[F+B+3]=0),T===!0&&(r.fromBufferAttribute(H,Z),w[F+B+4]=r.x,w[F+B+5]=r.y,w[F+B+6]=r.z,w[F+B+7]=0),m===!0&&(r.fromBufferAttribute($,Z),w[F+B+8]=r.x,w[F+B+9]=r.y,w[F+B+10]=r.z,w[F+B+11]=$.itemSize===4?r.w:1)}}u={count:f,texture:g,size:new Qe(M,A)},i.set(l,u),l.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const T=l.morphTargetsRelative?1:1-v;a.getUniforms().setValue(t,"morphTargetBaseInfluence",T),a.getUniforms().setValue(t,"morphTargetInfluences",c)}a.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),a.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function z1(t,e,n,i,r){let s=new WeakMap;function o(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function l(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const H1={[tv]:"LINEAR_TONE_MAPPING",[nv]:"REINHARD_TONE_MAPPING",[iv]:"CINEON_TONE_MAPPING",[rv]:"ACES_FILMIC_TONE_MAPPING",[ov]:"AGX_TONE_MAPPING",[av]:"NEUTRAL_TONE_MAPPING",[sv]:"CUSTOM_TONE_MAPPING"};function V1(t,e,n,i,r,s){const o=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Hs(e,n):void 0}),l=new pi(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),a=new zi;a.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Di([0,2,0,0,2,0],2));const c=new Fy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new On(a,c),f=new fh(-1,1,1,-1,0,1);let u=null,p=null,v=!1,T,m=null,d=[],x=!1;this.setSize=function(y,S){o.setSize(y,S),l.setSize(y,S);for(let M=0;M<d.length;M++){const A=d[M];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){d=y,x=d.length>0&&d[0].isRenderPass===!0;const S=o.width,M=o.height;for(let A=0;A<d.length;A++){const w=d[A];w.setSize&&w.setSize(S,M)}},this.begin=function(y,S){if(v||y.toneMapping===hi&&d.length===0)return!1;if(m=S,S!==null){const M=S.width,A=S.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return x===!1&&y.setRenderTarget(o),T=y.toneMapping,y.toneMapping=hi,!0},this.hasRenderPass=function(){return x},this.end=function(y,S){y.toneMapping=T,v=!0;let M=o,A=l;for(let w=0;w<d.length;w++){const g=d[w];if(g.enabled!==!1&&(g.render(y,A,M,S),g.needsSwap!==!1)){const C=M;M=A,A=C}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},Xe.getTransfer(u)===it&&(c.defines.SRGB_TRANSFER="");const w=H1[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(h,f),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),l.dispose(),a.dispose(),c.dispose()}}const Pv=new tn,rd=new Hs(1,1),Lv=new vv,Dv=new dy,Iv=new Ev,xm=[],Sm=[],ym=new Float32Array(16),Mm=new Float32Array(9),Em=new Float32Array(4);function $s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xm[r];if(s===void 0&&(s=new Float32Array(r),xm[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Em.set(i),t.uniformMatrix2fv(this.addr,!1,Em),Ot(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),Ot(n,i)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;ym.set(i),t.uniformMatrix4fv(this.addr,!1,ym),Ot(n,i)}}function Z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rd.compareFunction=n.isReversedDepthBuffer()?lh:ah,s=rd):s=Pv,n.setTexture2D(e||s,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dv,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Iv,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function lT(t){switch(t){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return Y1;case 35674:return $1;case 35675:return q1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return j1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}function cT(t,e){t.uniform1fv(this.addr,e)}function uT(t,e){const n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function fT(t,e){const n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function dT(t,e){const n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function hT(t,e){const n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pT(t,e){const n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mT(t,e){const n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gT(t,e){t.uniform1iv(this.addr,e)}function vT(t,e){t.uniform2iv(this.addr,e)}function _T(t,e){t.uniform3iv(this.addr,e)}function xT(t,e){t.uniform4iv(this.addr,e)}function ST(t,e){t.uniform1uiv(this.addr,e)}function yT(t,e){t.uniform2uiv(this.addr,e)}function MT(t,e){t.uniform3uiv(this.addr,e)}function ET(t,e){t.uniform4uiv(this.addr,e)}function TT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=rd:o=Pv;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||o,s[l])}function wT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dv,s[o])}function AT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Iv,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lv,s[o])}function CT(t){switch(t){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return dT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return vT;case 35668:case 35672:return _T;case 35669:case 35673:return xT;case 5125:return ST;case 36294:return yT;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}class bT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lT(n.type)}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CT(n.type)}}class LT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function DT(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),o=_u.lastIndex;let l=s[1];const a=s[2]==="]",c=s[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===r){Tm(n,c===void 0?new bT(l,t,e):new PT(l,t,e));break}else{let f=n.map[l];f===void 0&&(f=new LT(l),Tm(n,f)),n=f}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(n,o),a=e.getUniformLocation(n,l.name);DT(l,a,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],a=i[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IT=37297;let NT=0;function UT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}const Am=new Fe;function FT(t){Xe._getMatrix(Am,Xe.workingColorSpace,t);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case kl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+UT(t.getShaderSource(e),l)}else return s}function OT(t,e){const n=FT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kT={[tv]:"Linear",[nv]:"Reinhard",[iv]:"Cineon",[rv]:"ACESFilmic",[ov]:"AgX",[av]:"Neutral",[sv]:"Custom"};function BT(t,e){const n=kT[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xa=new Y;function zT(){Xe.getLuminanceCoefficients(Xa);const t=Xa.x.toFixed(4),e=Xa.y.toFixed(4),n=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function VT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function _o(t){return t!==""}function Cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(WT,YT)}const XT=new Map;function YT(t,e){let n=ze[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=ze[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sd(n)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(t){return t.replace($T,qT)}function qT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KT={[sl]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function ZT(t){return KT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JT={[Vr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function QT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":JT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const jT={[zs]:"ENVMAP_MODE_REFRACTION"};function ew(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tw={[ev]:"ENVMAP_BLENDING_MULTIPLY",[XS]:"ENVMAP_BLENDING_MIX",[YS]:"ENVMAP_BLENDING_ADD"};function nw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":tw[t.combine]||"ENVMAP_BLENDING_NONE"}function iw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const a=ZT(n),c=QT(n),h=ew(n),f=nw(n),u=iw(n),p=HT(n),v=VT(s),T=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_o).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_o).join(`
`),d.length>0&&(d+=`
`)):(m=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),d=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?ze.tonemapping_pars_fragment:"",n.toneMapping!==hi?BT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,OT("linearToOutputTexel",n.outputColorSpace),zT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),o=sd(o),o=Cm(o,n),o=bm(o,n),l=sd(l),l=Cm(l,n),l=bm(l,n),o=Pm(o),l=Pm(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+m+o,S=x+d+l,M=wm(r,r.VERTEX_SHADER,y),A=wm(r,r.FRAGMENT_SHADER,S);r.attachShader(T,M),r.attachShader(T,A),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(b){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(T)||"",H=r.getShaderInfoLog(M)||"",$=r.getShaderInfoLog(A)||"",F=D.trim(),Z=H.trim(),B=$.trim();let L=!0,V=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,M,A);else{const I=Rm(r,M,"vertex"),J=Rm(r,A,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+I+`
`+J)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(Z===""||B==="")&&(V=!1);V&&(b.diagnostics={runnable:L,programLog:F,vertexShader:{log:Z,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(M),r.deleteShader(A),g=new ul(r,T),C=GT(r,T)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(T,IT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=M,this.fragmentShader=A,this}let sw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aw(e),n.set(e,i)),i}}class aw{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function lw(t){return t===Gr||t===Ul||t===Fl}function cw(t,e,n,i,r,s){const o=new _v,l=new ow,a=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return a.add(g),g===0?"uv":`uv${g}`}function T(g,C,R,b,D,H){const $=b.fog,F=D.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?b.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,L=e.get(g.envMap||Z,B),V=L&&L.mapping===sc?L.image.height:null,I=p[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=J!==void 0?J.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let _e,Me,k,ne;if(I){const Ee=ai[I];_e=Ee.vertexShader,Me=Ee.fragmentShader}else{_e=g.vertexShader,Me=g.fragmentShader;const Ee=l.getVertexShaderStage(g),St=l.getFragmentShaderStage(g);l.update(g,Ee,St),k=Ee.id,ne=St.id}const se=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,Tt=!!g.map,Ge=!!g.matcap,ot=!!L,Je=!!g.aoMap,$e=!!g.lightMap,Ct=!!g.bumpMap&&g.wireframe===!1,It=!!g.normalMap,kt=!!g.displacementMap,Vt=!!g.emissiveMap,xt=!!g.metalnessMap,bt=!!g.roughnessMap,U=g.anisotropy>0,cn=g.clearcoat>0,tt=g.dispersion>0,P=g.iridescence>0,_=g.sheen>0,z=g.transmission>0,X=U&&!!g.anisotropyMap,Q=cn&&!!g.clearcoatMap,oe=cn&&!!g.clearcoatNormalMap,le=cn&&!!g.clearcoatRoughnessMap,j=P&&!!g.iridescenceMap,te=P&&!!g.iridescenceThicknessMap,ce=_&&!!g.sheenColorMap,Re=_&&!!g.sheenRoughnessMap,de=!!g.specularMap,ue=!!g.specularColorMap,Pe=!!g.specularIntensityMap,De=z&&!!g.transmissionMap,ke=z&&!!g.thicknessMap,N=!!g.gradientMap,ae=!!g.alphaMap,ee=g.alphaTest>0,fe=!!g.alphaHash,ge=!!g.extensions;let ie=hi;g.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=t.toneMapping);const we={shaderID:I,shaderType:g.type,shaderName:g.name,vertexShader:_e,fragmentShader:Me,defines:g.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Tt,matcap:Ge,envMap:ot,envMapMode:ot&&L.mapping,envMapCubeUVHeight:V,aoMap:Je,lightMap:$e,bumpMap:Ct,normalMap:It,displacementMap:kt,emissiveMap:Vt,normalMapObjectSpace:It&&g.normalMapType===KS,normalMapTangentSpace:It&&g.normalMapType===Vp,packedNormalMap:It&&g.normalMapType===Vp&&lw(g.normalMap.format),metalnessMap:xt,roughnessMap:bt,anisotropy:U,anisotropyMap:X,clearcoat:cn,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:tt,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:te,sheen:_,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:de,specularColorMap:ue,specularIntensityMap:Pe,transmission:z,transmissionMap:De,thicknessMap:ke,gradientMap:N,opaque:g.transparent===!1&&g.blending===bs&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:ee,alphaHash:fe,combine:g.combine,mapUv:Tt&&v(g.map.channel),aoMapUv:Je&&v(g.aoMap.channel),lightMapUv:$e&&v(g.lightMap.channel),bumpMapUv:Ct&&v(g.bumpMap.channel),normalMapUv:It&&v(g.normalMap.channel),displacementMapUv:kt&&v(g.displacementMap.channel),emissiveMapUv:Vt&&v(g.emissiveMap.channel),metalnessMapUv:xt&&v(g.metalnessMap.channel),roughnessMapUv:bt&&v(g.roughnessMap.channel),anisotropyMapUv:X&&v(g.anisotropyMap.channel),clearcoatMapUv:Q&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(g.sheenRoughnessMap.channel),specularMapUv:de&&v(g.specularMap.channel),specularColorMapUv:ue&&v(g.specularColorMap.channel),specularIntensityMapUv:Pe&&v(g.specularIntensityMap.channel),transmissionMapUv:De&&v(g.transmissionMap.channel),thicknessMapUv:ke&&v(g.thicknessMap.channel),alphaMapUv:ae&&v(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(It||U),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Tt||ae),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&It===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ne,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Tt&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===it,decodeVideoTextureEmissive:Vt&&g.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(g.emissiveMap.colorSpace)===it,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===In,flipSided:g.side===gn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ge&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&g.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return we.vertexUv1s=a.has(1),we.vertexUv2s=a.has(2),we.vertexUv3s=a.has(3),a.clear(),we}function m(g){const C=[];if(g.shaderID?C.push(g.shaderID):(C.push(g.customVertexShaderID),C.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)C.push(R),C.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(d(C,g),x(C,g),C.push(t.outputColorSpace)),C.push(g.customProgramCacheKey),C.join()}function d(g,C){g.push(C.precision),g.push(C.outputColorSpace),g.push(C.envMapMode),g.push(C.envMapCubeUVHeight),g.push(C.mapUv),g.push(C.alphaMapUv),g.push(C.lightMapUv),g.push(C.aoMapUv),g.push(C.bumpMapUv),g.push(C.normalMapUv),g.push(C.displacementMapUv),g.push(C.emissiveMapUv),g.push(C.metalnessMapUv),g.push(C.roughnessMapUv),g.push(C.anisotropyMapUv),g.push(C.clearcoatMapUv),g.push(C.clearcoatNormalMapUv),g.push(C.clearcoatRoughnessMapUv),g.push(C.iridescenceMapUv),g.push(C.iridescenceThicknessMapUv),g.push(C.sheenColorMapUv),g.push(C.sheenRoughnessMapUv),g.push(C.specularMapUv),g.push(C.specularColorMapUv),g.push(C.specularIntensityMapUv),g.push(C.transmissionMapUv),g.push(C.thicknessMapUv),g.push(C.combine),g.push(C.fogExp2),g.push(C.sizeAttenuation),g.push(C.morphTargetsCount),g.push(C.morphAttributeCount),g.push(C.numDirLights),g.push(C.numPointLights),g.push(C.numSpotLights),g.push(C.numSpotLightMaps),g.push(C.numHemiLights),g.push(C.numRectAreaLights),g.push(C.numDirLightShadows),g.push(C.numPointLightShadows),g.push(C.numSpotLightShadows),g.push(C.numSpotLightShadowsWithMaps),g.push(C.numLightProbes),g.push(C.shadowMapType),g.push(C.toneMapping),g.push(C.numClippingPlanes),g.push(C.numClipIntersection),g.push(C.depthPacking)}function x(g,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){const C=p[g.type];let R;if(C){const b=ai[C];R=Iy.clone(b.uniforms)}else R=g.uniforms;return R}function S(g,C){let R=h.get(C);return R!==void 0?++R.usedTimes:(R=new rw(t,C,g,r),c.push(R),h.set(C,R)),R}function M(g){if(--g.usedTimes===0){const C=c.indexOf(g);c[C]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){l.remove(g)}function w(){l.dispose()}return{getParameters:T,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:w}}function uw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function i(o){t.delete(o)}function r(o,l,a){t.get(o)[l]=a}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function l(u,p,v,T,m,d){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:T,renderOrder:u.renderOrder,z:m,group:d},t[e]=x):(x.id=u.id,x.object=u,x.geometry=p,x.material=v,x.materialVariant=o(u),x.groupOrder=T,x.renderOrder=u.renderOrder,x.z=m,x.group=d),e++,x}function a(u,p,v,T,m,d){const x=l(u,p,v,T,m,d);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function c(u,p,v,T,m,d){const x=l(u,p,v,T,m,d);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(u,p,v){n.length>1&&n.sort(u||fw),i.length>1&&i.sort(p||Dm),r.length>1&&r.sort(p||Dm),v&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:f,sort:h}}function dw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Im,t.set(i,[o])):r>=s.length?(o=new Im,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new et};break;case"SpotLight":n={position:new Y,direction:new Y,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mw=0;function gw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vw(t){const e=new hw,n=pw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Dt,o=new Dt;function l(c){let h=0,f=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,v=0,T=0,m=0,d=0,x=0,y=0,S=0,M=0,A=0,w=0;c.sort(gw);for(let C=0,R=c.length;C<R;C++){const b=c[C],D=b.color,H=b.intensity,$=b.distance;let F=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Gr?F=b.shadow.map.texture:F=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=D.r*H,f+=D.g*H,u+=D.b*H;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(b.sh.coefficients[Z],H);w++}else if(b.isDirectionalLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const B=b.shadow,L=n.get(b);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=b.shadow.matrix,x++}i.directional[p]=Z,p++}else if(b.isSpotLight){const Z=e.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(D).multiplyScalar(H),Z.distance=$,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,i.spot[T]=Z;const B=b.shadow;if(b.map&&(i.spotLightMap[M]=b.map,M++,B.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[T]=B.matrix,b.castShadow){const L=n.get(b);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.spotShadow[T]=L,i.spotShadowMap[T]=F,S++}T++}else if(b.isRectAreaLight){const Z=e.get(b);Z.color.copy(D).multiplyScalar(H),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=Z,m++}else if(b.isPointLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const B=b.shadow,L=n.get(b);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,L.shadowCameraNear=B.camera.near,L.shadowCameraFar=B.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=F,i.pointShadowMatrix[v]=b.shadow.matrix,y++}i.point[v]=Z,v++}else if(b.isHemisphereLight){const Z=e.get(b);Z.skyColor.copy(b.color).multiplyScalar(H),Z.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[d]=Z,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==p||g.pointLength!==v||g.spotLength!==T||g.rectAreaLength!==m||g.hemiLength!==d||g.numDirectionalShadows!==x||g.numPointShadows!==y||g.numSpotShadows!==S||g.numSpotMaps!==M||g.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=T,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,g.directionalLength=p,g.pointLength=v,g.spotLength=T,g.rectAreaLength=m,g.hemiLength=d,g.numDirectionalShadows=x,g.numPointShadows=y,g.numSpotShadows=S,g.numSpotMaps=M,g.numLightProbes=w,i.version=mw++)}function a(c,h){let f=0,u=0,p=0,v=0,T=0;const m=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const y=c[d];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const S=i.hemi[T];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),T++}}}return{setup:l,setupView:a,state:i}}function Nm(t){const e=new vw(t),n=[],i=[],r=[];function s(u){f.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function l(u){i.push(u)}function a(u){r.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function _w(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Nm(t),e.set(r,[l])):s>=o.length?(l=new Nm(t),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yw=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Mw=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Um=new Dt,lo=new Y,xu=new Y;function Ew(t,e,n){let i=new Mv;const r=new Qe,s=new Qe,o=new Et,l=new Oy,a=new ky,c={},h=n.maxTextureSize,f={[mr]:gn,[gn]:mr,[In]:In},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:xw,fragmentShader:Sw}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new zi;v.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new On(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let d=this.type;this.render=function(A,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===AS&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);const C=t.getRenderTarget(),R=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=d!==this.type;H&&w.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(F=>F.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,F=A.length;$<F;$++){const Z=A[$],B=Z.shadow;if(B===void 0){Ie("WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const L=B.getFrameExtents();r.multiply(L),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/L.x),r.x=s.x*L.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/L.y),r.y=s.y*L.y,B.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=V,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===go){if(Z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new pi(r.x,r.y,{format:Gr,type:Oi,minFilter:en,magFilter:en,generateMipmaps:!1}),B.map.texture.name=Z.name+".shadowMap",B.map.depthTexture=new Hs(r.x,r.y,ci),B.map.depthTexture.name=Z.name+".shadowMapDepth",B.map.depthTexture.format=ki,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt}else Z.isPointLight?(B.map=new bv(r.x),B.map.depthTexture=new Ly(r.x,gi)):(B.map=new pi(r.x,r.y),B.map.depthTexture=new Hs(r.x,r.y,gi)),B.map.depthTexture.name=Z.name+".shadowMap",B.map.depthTexture.format=ki,this.type===sl?(B.map.depthTexture.compareFunction=V?lh:ah,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt);B.camera.updateProjectionMatrix()}const I=B.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<I;J++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,J),t.clear();else{J===0&&(t.setRenderTarget(B.map),t.clear());const q=B.getViewport(J);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(o)}if(Z.isPointLight){const q=B.camera,ve=B.matrix,_e=Z.distance||q.far;_e!==q.far&&(q.far=_e,q.updateProjectionMatrix()),lo.setFromMatrixPosition(Z.matrixWorld),q.position.copy(lo),xu.copy(q.position),xu.add(yw[J]),q.up.copy(Mw[J]),q.lookAt(xu),q.updateMatrixWorld(),ve.makeTranslation(-lo.x,-lo.y,-lo.z),Um.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Um,q.coordinateSystem,q.reversedDepth)}else B.updateMatrices(Z);i=B.getFrustum(),S(w,g,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===go&&x(B,g),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(C,R,b)};function x(A,w){const g=e.update(T);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(r.x,r.y,{format:Gr,type:Oi})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,g,u,T,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,g,p,T,null)}function y(A,w,g,C){let R=null;const b=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)R=b;else if(R=g.isPointLight===!0?a:l,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=R.uuid,H=w.uuid;let $=c[D];$===void 0&&($={},c[D]=$);let F=$[H];F===void 0&&(F=R.clone(),$[H]=F,w.addEventListener("dispose",M)),R=F}if(R.visible=w.visible,R.wireframe=w.wireframe,C===go?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,g.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=t.properties.get(R);D.light=g}return R}function S(A,w,g,C,R){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===go)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const H=e.update(A),$=A.material;if(Array.isArray($)){const F=H.groups;for(let Z=0,B=F.length;Z<B;Z++){const L=F[Z],V=$[L.materialIndex];if(V&&V.visible){const I=y(A,V,C,R);A.onBeforeShadow(t,A,w,g,H,I,L),t.renderBufferDirect(g,null,H,I,A,L),A.onAfterShadow(t,A,w,g,H,I,L)}}}else if($.visible){const F=y(A,$,C,R);A.onBeforeShadow(t,A,w,g,H,F,null),t.renderBufferDirect(g,null,H,F,A,null),A.onAfterShadow(t,A,w,g,H,F,null)}}const D=A.children;for(let H=0,$=D.length;H<$;H++)S(D[H],w,g,C,R)}function M(A){A.target.removeEventListener("dispose",M);for(const g in c){const C=c[g],R=A.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Tw(t,e){function n(){let N=!1;const ae=new Et;let ee=null;const fe=new Et(0,0,0,0);return{setMask:function(ge){ee!==ge&&!N&&(t.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){N=ge},setClear:function(ge,ie,we,Ee,St){St===!0&&(ge*=Ee,ie*=Ee,we*=Ee),ae.set(ge,ie,we,Ee),fe.equals(ae)===!1&&(t.clearColor(ge,ie,we,Ee),fe.copy(ae))},reset:function(){N=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,ee=null,fe=null,ge=null;return{setReversed:function(ie){if(ae!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ae=ie;const Ee=ge;ge=null,this.setClear(Ee)}},getReversed:function(){return ae},setTest:function(ie){ie?se(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(ae&&(ie=sy[ie]),fe!==ie){switch(ie){case _f:t.depthFunc(t.NEVER);break;case xf:t.depthFunc(t.ALWAYS);break;case Sf:t.depthFunc(t.LESS);break;case Bs:t.depthFunc(t.LEQUAL);break;case yf:t.depthFunc(t.EQUAL);break;case Mf:t.depthFunc(t.GEQUAL);break;case Ef:t.depthFunc(t.GREATER);break;case Tf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){ge!==ie&&(ge=ie,ae&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,ee=null,fe=null,ge=null,ae=!1}}}function r(){let N=!1,ae=null,ee=null,fe=null,ge=null,ie=null,we=null,Ee=null,St=null;return{setTest:function(ct){N||(ct?se(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!N&&(t.stencilMask(ct),ae=ct)},setFunc:function(ct,ei,ti){(ee!==ct||fe!==ei||ge!==ti)&&(t.stencilFunc(ct,ei,ti),ee=ct,fe=ei,ge=ti)},setOp:function(ct,ei,ti){(ie!==ct||we!==ei||Ee!==ti)&&(t.stencilOp(ct,ei,ti),ie=ct,we=ei,Ee=ti)},setLocked:function(ct){N=ct},setClear:function(ct){St!==ct&&(t.clearStencil(ct),St=ct)},reset:function(){N=!1,ae=null,ee=null,fe=null,ge=null,ie=null,we=null,Ee=null,St=null}}}const s=new n,o=new i,l=new r,a=new WeakMap,c=new WeakMap;let h={},f={},u={},p=new WeakMap,v=[],T=null,m=!1,d=null,x=null,y=null,S=null,M=null,A=null,w=null,g=new et(0,0,0),C=0,R=!1,b=null,D=null,H=null,$=null,F=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,L=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=L>=1):V.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=L>=2);let I=null,J={};const q=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),_e=new Et().fromArray(q),Me=new Et().fromArray(ve);function k(N,ae,ee,fe){const ge=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ee;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ae+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ie}const ne={};ne[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),se(t.DEPTH_TEST),o.setFunc(Bs),Ct(!1),It(kp),se(t.CULL_FACE),Je(Pi);function se(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Oe(N,ae){return u[N]!==ae?(t.bindFramebuffer(N,ae),u[N]=ae,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(N,ae){let ee=v,fe=!1;if(N){ee=p.get(ae),ee===void 0&&(ee=[],p.set(ae,ee));const ge=N.textures;if(ee.length!==ge.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,we=ge.length;ie<we;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ge.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function Tt(N){return T!==N?(t.useProgram(N),T=N,!0):!1}const Ge={[Rr]:t.FUNC_ADD,[CS]:t.FUNC_SUBTRACT,[bS]:t.FUNC_REVERSE_SUBTRACT};Ge[PS]=t.MIN,Ge[LS]=t.MAX;const ot={[DS]:t.ZERO,[IS]:t.ONE,[NS]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[zS]:t.SRC_ALPHA_SATURATE,[kS]:t.DST_COLOR,[FS]:t.DST_ALPHA,[US]:t.ONE_MINUS_SRC_COLOR,[vf]:t.ONE_MINUS_SRC_ALPHA,[BS]:t.ONE_MINUS_DST_COLOR,[OS]:t.ONE_MINUS_DST_ALPHA,[HS]:t.CONSTANT_COLOR,[VS]:t.ONE_MINUS_CONSTANT_COLOR,[GS]:t.CONSTANT_ALPHA,[WS]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(N,ae,ee,fe,ge,ie,we,Ee,St,ct){if(N===Pi){m===!0&&(Ne(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),N!==RS){if(N!==d||ct!==R){if((x!==Rr||M!==Rr)&&(t.blendEquation(t.FUNC_ADD),x=Rr,M=Rr),ct)switch(N){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.ONE,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",N);break}else switch(N){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zp:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hp:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",N);break}y=null,S=null,A=null,w=null,g.set(0,0,0),C=0,d=N,R=ct}return}ge=ge||ae,ie=ie||ee,we=we||fe,(ae!==x||ge!==M)&&(t.blendEquationSeparate(Ge[ae],Ge[ge]),x=ae,M=ge),(ee!==y||fe!==S||ie!==A||we!==w)&&(t.blendFuncSeparate(ot[ee],ot[fe],ot[ie],ot[we]),y=ee,S=fe,A=ie,w=we),(Ee.equals(g)===!1||St!==C)&&(t.blendColor(Ee.r,Ee.g,Ee.b,St),g.copy(Ee),C=St),d=N,R=!1}function $e(N,ae){N.side===In?Ne(t.CULL_FACE):se(t.CULL_FACE);let ee=N.side===gn;ae&&(ee=!ee),Ct(ee),N.blending===bs&&N.transparent===!1?Je(Pi):Je(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;l.setTest(fe),fe&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(N){b!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),b=N)}function It(N){N!==TS?(se(t.CULL_FACE),N!==D&&(N===kp?t.cullFace(t.BACK):N===wS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),D=N}function kt(N){N!==H&&(B&&t.lineWidth(N),H=N)}function Vt(N,ae,ee){N?(se(t.POLYGON_OFFSET_FILL),($!==ae||F!==ee)&&($=ae,F=ee,o.getReversed()&&(ae=-ae),t.polygonOffset(ae,ee))):Ne(t.POLYGON_OFFSET_FILL)}function xt(N){N?se(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function bt(N){N===void 0&&(N=t.TEXTURE0+Z-1),I!==N&&(t.activeTexture(N),I=N)}function U(N,ae,ee){ee===void 0&&(I===null?ee=t.TEXTURE0+Z-1:ee=I);let fe=J[ee];fe===void 0&&(fe={type:void 0,texture:void 0},J[ee]=fe),(fe.type!==N||fe.texture!==ae)&&(I!==ee&&(t.activeTexture(ee),I=ee),t.bindTexture(N,ae||ne[N]),fe.type=N,fe.texture=ae)}function cn(){const N=J[I];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function z(){try{t.texSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function j(){try{t.texImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ce(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function Re(N,ae){f[N]!==ae&&(t.pixelStorei(N,ae),f[N]=ae)}function de(N){_e.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),_e.copy(N))}function ue(N){Me.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function Pe(N,ae){let ee=c.get(ae);ee===void 0&&(ee=new WeakMap,c.set(ae,ee));let fe=ee.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(ae,N.name),ee.set(N,fe))}function De(N,ae){const fe=c.get(ae).get(N);a.get(ae)!==fe&&(t.uniformBlockBinding(ae,fe,N.__bindingPointIndex),a.set(ae,fe))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},I=null,J={},u={},p=new WeakMap,v=[],T=null,m=!1,d=null,x=null,y=null,S=null,M=null,A=null,w=null,g=new et(0,0,0),C=0,R=!1,b=null,D=null,H=null,$=null,F=null,_e.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:se,disable:Ne,bindFramebuffer:Oe,drawBuffers:Le,useProgram:Tt,setBlending:Je,setMaterial:$e,setFlipSided:Ct,setCullFace:It,setLineWidth:kt,setPolygonOffset:Vt,setScissorTest:xt,activeTexture:bt,bindTexture:U,unbindTexture:cn,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:j,texImage3D:te,pixelStorei:Re,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:oe,texStorage3D:le,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:de,viewport:ue,reset:ke}}function ww(t,e,n,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,_){return v?new OffscreenCanvas(P,_):zl("canvas")}function m(P,_,z){let X=1;const Q=tt(P);if((Q.width>z||Q.height>z)&&(X=z/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const oe=Math.floor(X*Q.width),le=Math.floor(X*Q.height);u===void 0&&(u=T(oe,le));const j=_?T(oe,le):u;return j.width=oe,j.height=le,j.getContext("2d").drawImage(P,0,0,oe,le),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+le+")."),j}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function d(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(P,_,z,X,Q,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le;X&&(le=e.get("EXT_texture_norm16"),le||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===t.RED&&(z===t.FLOAT&&(j=t.R32F),z===t.HALF_FLOAT&&(j=t.R16F),z===t.UNSIGNED_BYTE&&(j=t.R8),z===t.UNSIGNED_SHORT&&le&&(j=le.R16_EXT),z===t.SHORT&&le&&(j=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(j=t.R8UI),z===t.UNSIGNED_SHORT&&(j=t.R16UI),z===t.UNSIGNED_INT&&(j=t.R32UI),z===t.BYTE&&(j=t.R8I),z===t.SHORT&&(j=t.R16I),z===t.INT&&(j=t.R32I)),_===t.RG&&(z===t.FLOAT&&(j=t.RG32F),z===t.HALF_FLOAT&&(j=t.RG16F),z===t.UNSIGNED_BYTE&&(j=t.RG8),z===t.UNSIGNED_SHORT&&le&&(j=le.RG16_EXT),z===t.SHORT&&le&&(j=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(j=t.RG8UI),z===t.UNSIGNED_SHORT&&(j=t.RG16UI),z===t.UNSIGNED_INT&&(j=t.RG32UI),z===t.BYTE&&(j=t.RG8I),z===t.SHORT&&(j=t.RG16I),z===t.INT&&(j=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(j=t.RGB8UI),z===t.UNSIGNED_SHORT&&(j=t.RGB16UI),z===t.UNSIGNED_INT&&(j=t.RGB32UI),z===t.BYTE&&(j=t.RGB8I),z===t.SHORT&&(j=t.RGB16I),z===t.INT&&(j=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),z===t.UNSIGNED_INT&&(j=t.RGBA32UI),z===t.BYTE&&(j=t.RGBA8I),z===t.SHORT&&(j=t.RGBA16I),z===t.INT&&(j=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&le&&(j=le.RGB16_EXT),z===t.SHORT&&le&&(j=le.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),_===t.RGBA){const te=oe?kl:Xe.getTransfer(Q);z===t.FLOAT&&(j=t.RGBA32F),z===t.HALF_FLOAT&&(j=t.RGBA16F),z===t.UNSIGNED_BYTE&&(j=te===it?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&le&&(j=le.RGBA16_EXT),z===t.SHORT&&le&&(j=le.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(P,_){let z;return P?_===null||_===gi||_===qo?z=t.DEPTH24_STENCIL8:_===ci?z=t.DEPTH32F_STENCIL8:_===$o&&(z=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===qo?z=t.DEPTH_COMPONENT24:_===ci?z=t.DEPTH_COMPONENT32F:_===$o&&(z=t.DEPTH_COMPONENT16),z}function A(P,_){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function w(P){const _=P.target;_.removeEventListener("dispose",w),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function g(P){const _=P.target;_.removeEventListener("dispose",g),b(_)}function C(P){const _=i.get(P);if(_.__webglInit===void 0)return;const z=P.source,X=p.get(z);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(X).length===0&&p.delete(z)}i.remove(P)}function R(P){const _=i.get(P);t.deleteTexture(_.__webglTexture);const z=P.source,X=p.get(z);delete X[_.__cacheKey],o.memory.textures--}function b(P){const _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=P.textures;for(let X=0,Q=z.length;X<Q;X++){const oe=i.get(z[X]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(z[X])}i.remove(P)}let D=0;function H(){D=0}function $(){return D}function F(P){D=P}function Z(){const P=D;return P>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function B(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function L(P,_){const z=i.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const X=P.image;if(X===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(z,P,_);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function V(P,_){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Ne(z,P,_);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function I(P,_){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){Ne(z,P,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function J(P,_){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Oe(z,P,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const q={[wf]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Af]:t.MIRRORED_REPEAT},ve={[Wt]:t.NEAREST,[$S]:t.NEAREST_MIPMAP_NEAREST,[Ta]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},_e={[ZS]:t.NEVER,[ty]:t.ALWAYS,[JS]:t.LESS,[ah]:t.LEQUAL,[QS]:t.EQUAL,[lh]:t.GEQUAL,[jS]:t.GREATER,[ey]:t.NOTEQUAL};function Me(P,_){if(_.type===ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===Gc||_.magFilter===Ta||_.magFilter===Dr||_.minFilter===en||_.minFilter===Gc||_.minFilter===Ta||_.minFilter===Dr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,q[_.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,q[_.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,q[_.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ve[_.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==Ta&&_.minFilter!==Dr||_.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function k(P,_){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));const oe=B(_);if(oe!==P.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[oe].usedTimes++;const le=Q[P.__cacheKey];le!==void 0&&(Q[P.__cacheKey].usedTimes--,le.usedTimes===0&&R(_)),P.__cacheKey=oe,P.__webglTexture=Q[oe].texture}return z}function ne(P,_,z){return Math.floor(Math.floor(P/z)/_)}function se(P,_,z,X){const oe=P.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{oe.sort((Re,de)=>Re.start-de.start);let le=0;for(let Re=1;Re<oe.length;Re++){const de=oe[le],ue=oe[Re],Pe=de.start+de.count,De=ne(ue.start,_.width,4),ke=ne(de.start,_.width,4);ue.start<=Pe+1&&De===ke&&ne(ue.start+ue.count-1,_.width,4)===De?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++le,oe[le]=ue)}oe.length=le+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Re=0,de=oe.length;Re<de;Re++){const ue=oe[Re],Pe=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),ke=Pe%_.width,N=Math.floor(Pe/_.width),ae=De,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ke,N,ae,ee,z,X,_.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Ne(P,_,z){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Q=k(P,_),oe=_.source;n.bindTexture(X,P.__webglTexture,t.TEXTURE0+z);const le=i.get(oe);if(oe.version!==le.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Xe.getPrimaries(Xe.workingColorSpace),fe=_.colorSpace===tr?null:Xe.getPrimaries(_.colorSpace),ge=_.colorSpace===tr||ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=cn(_,te);const ce=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let de=S(_.internalFormat,ce,Re,_.normalized,_.colorSpace,_.isVideoTexture);Me(X,_);let ue;const Pe=_.mipmaps,De=_.isVideoTexture!==!0,ke=le.__version===void 0||Q===!0,N=oe.dataReady,ae=A(_,te);if(_.isDepthTexture)de=M(_.format===Ir,_.type),ke&&(De?n.texStorage2D(t.TEXTURE_2D,1,de,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,ce,Re,null));else if(_.isDataTexture)if(Pe.length>0){De&&ke&&n.texStorage2D(t.TEXTURE_2D,ae,de,Pe[0].width,Pe[0].height);for(let ee=0,fe=Pe.length;ee<fe;ee++)ue=Pe[ee],De?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,Re,ue.data):n.texImage2D(t.TEXTURE_2D,ee,de,ue.width,ue.height,0,ce,Re,ue.data);_.generateMipmaps=!1}else De?(ke&&n.texStorage2D(t.TEXTURE_2D,ae,de,te.width,te.height),N&&se(_,te,ce,Re)):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,ce,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,fe=Pe.length;ee<fe;ee++)if(ue=Pe[ee],_.format!==Zn)if(ce!==null)if(De){if(N)if(_.layerUpdates.size>0){const ge=dm(ue.width,ue.height,_.format,_.type);for(const ie of _.layerUpdates){const we=ue.data.subarray(ie*ge/ue.data.BYTES_PER_ELEMENT,(ie+1)*ge/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,ue.width,ue.height,1,ce,we)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,te.depth,ce,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,de,ue.width,ue.height,te.depth,0,ue.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,te.depth,ce,Re,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,de,ue.width,ue.height,te.depth,0,ce,Re,ue.data)}else{De&&ke&&n.texStorage2D(t.TEXTURE_2D,ae,de,Pe[0].width,Pe[0].height);for(let ee=0,fe=Pe.length;ee<fe;ee++)ue=Pe[ee],_.format!==Zn?ce!==null?De?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,de,ue.width,ue.height,0,ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,Re,ue.data):n.texImage2D(t.TEXTURE_2D,ee,de,ue.width,ue.height,0,ce,Re,ue.data)}else if(_.isDataArrayTexture)if(De){if(ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,te.width,te.height,te.depth),N)if(_.layerUpdates.size>0){const ee=dm(te.width,te.height,_.format,_.type);for(const fe of _.layerUpdates){const ge=te.data.subarray(fe*ee/te.data.BYTES_PER_ELEMENT,(fe+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ce,Re,ge)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Re,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,ce,Re,te.data);else if(_.isData3DTexture)De?(ke&&n.texStorage3D(t.TEXTURE_3D,ae,de,te.width,te.height,te.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,ce,Re,te.data);else if(_.isFramebufferTexture){if(ke)if(De)n.texStorage2D(t.TEXTURE_2D,ae,de,te.width,te.height);else{let ee=te.width,fe=te.height;for(let ge=0;ge<ae;ge++)n.texImage2D(t.TEXTURE_2D,ge,de,ee,fe,0,ce,Re,null),ee>>=1,fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),f.add(_),ee.onpaint=fe=>{const ge=fe.changedElements;for(const ie of f)ge.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ge=t.RGBA,ie=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ie,we,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&ke){const ee=tt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ae,de,ee.width,ee.height)}for(let ee=0,fe=Pe.length;ee<fe;ee++)ue=Pe[ee],De?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce,Re,ue):n.texImage2D(t.TEXTURE_2D,ee,de,ce,Re,ue);_.generateMipmaps=!1}else if(De){if(ke){const ee=tt(te);n.texStorage2D(t.TEXTURE_2D,ae,de,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Re,te)}else n.texImage2D(t.TEXTURE_2D,0,de,ce,Re,te);d(_)&&x(X),le.__version=oe.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Oe(P,_,z){if(_.image.length!==6)return;const X=k(P,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const oe=i.get(Q);if(Q.version!==oe.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const le=Xe.getPrimaries(Xe.workingColorSpace),j=_.colorSpace===tr?null:Xe.getPrimaries(_.colorSpace),te=_.colorSpace===tr||le===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!ce&&!Re?de[ie]=m(_.image[ie],!0,r.maxCubemapSize):de[ie]=Re?_.image[ie].image:_.image[ie],de[ie]=cn(_,de[ie]);const ue=de[0],Pe=s.convert(_.format,_.colorSpace),De=s.convert(_.type),ke=S(_.internalFormat,Pe,De,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ae=oe.__version===void 0||X===!0,ee=Q.dataReady;let fe=A(_,ue);Me(t.TEXTURE_CUBE_MAP,_);let ge;if(ce){N&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ke,ue.width,ue.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let we=0;we<ge.length;we++){const Ee=ge[we];_.format!==Zn?Pe!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ee.width,Ee.height,Pe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,ke,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ee.width,Ee.height,Pe,De,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,ke,Ee.width,Ee.height,0,Pe,De,Ee.data)}}}else{if(ge=_.mipmaps,N&&ae){ge.length>0&&fe++;const ie=tt(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Pe,De,de[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,de[ie].width,de[ie].height,0,Pe,De,de[ie].data);for(let we=0;we<ge.length;we++){const St=ge[we].image[ie].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,St.width,St.height,Pe,De,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,ke,St.width,St.height,0,Pe,De,St.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,De,de[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Pe,De,de[ie]);for(let we=0;we<ge.length;we++){const Ee=ge[we];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Pe,De,Ee.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,ke,Pe,De,Ee.image[ie])}}}d(_)&&x(t.TEXTURE_CUBE_MAP),oe.__version=Q.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Le(P,_,z,X,Q,oe){const le=s.convert(z.format,z.colorSpace),j=s.convert(z.type),te=S(z.internalFormat,le,j,z.normalized,z.colorSpace),ce=i.get(_),Re=i.get(z);if(Re.__renderTarget=_,!ce.__hasExternalTextures){const de=Math.max(1,_.width>>oe),ue=Math.max(1,_.height>>oe);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,oe,te,de,ue,_.depth,0,le,j,null):n.texImage2D(Q,oe,te,de,ue,0,le,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),bt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,Re.__webglTexture,0,xt(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,Re.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Tt(P,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,oe=M(_.stencilBuffer,Q),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(_),oe,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,P)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const oe=X[Q],le=s.convert(oe.format,oe.colorSpace),j=s.convert(oe.type),te=S(oe.internalFormat,le,j,oe.normalized,oe.colorSpace);bt(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(_),te,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(P,_,z){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Me(t.TEXTURE_CUBE_MAP,_.depthTexture);const ce=s.convert(_.depthTexture.format),Re=s.convert(_.depthTexture.type);let de;_.depthTexture.format===ki?de=t.DEPTH_COMPONENT24:_.depthTexture.format===Ir&&(de=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,_.width,_.height,0,ce,Re,null)}}else L(_.depthTexture,0);const oe=Q.__webglTexture,le=xt(_),j=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,te=_.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ki)bt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,j,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,j,oe,0);else if(_.depthTexture.format===Ir)bt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,j,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,te,j,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(P){const _=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)Ge(_.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Ge(_.__webglFramebuffer[0],P,0):Ge(_.__webglFramebuffer,P,0)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),Tt(_.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Tt(_.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(P,_,z){const X=i.get(P);_!==void 0&&Le(X.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ot(P)}function $e(P){const _=P.texture,z=i.get(P),X=i.get(_);P.addEventListener("dispose",g);const Q=P.textures,oe=P.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,o.memory.textures++),oe){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let te=0;te<_.mipmaps.length;te++)z.__webglFramebuffer[j][te]=t.createFramebuffer()}else z.__webglFramebuffer[j]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[j]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(le)for(let j=0,te=Q.length;j<te;j++){const ce=i.get(Q[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&bt(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const te=Q[j];z.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[j]);const ce=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),de=S(te.internalFormat,ce,Re,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),ue=xt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,de,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,z.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Tt(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Me(t.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(z.__webglFramebuffer[j][te],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else Le(z.__webglFramebuffer[j],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);d(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let j=0,te=Q.length;j<te;j++){const ce=Q[j],Re=i.get(ce);let de=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Re.__webglTexture),Me(de,ce),Le(z.__webglFramebuffer,P,ce,t.COLOR_ATTACHMENT0+j,de,0),d(ce)&&x(de)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,X.__webglTexture),Me(j,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(z.__webglFramebuffer[te],P,_,t.COLOR_ATTACHMENT0,j,te);else Le(z.__webglFramebuffer,P,_,t.COLOR_ATTACHMENT0,j,0);d(_)&&x(j),n.unbindTexture()}P.depthBuffer&&ot(P)}function Ct(P){const _=P.textures;for(let z=0,X=_.length;z<X;z++){const Q=_[z];if(d(Q)){const oe=y(P),le=i.get(Q).__webglTexture;n.bindTexture(oe,le),x(oe),n.unbindTexture()}}}const It=[],kt=[];function Vt(P){if(P.samples>0){if(bt(P)===!1){const _=P.textures,z=P.width,X=P.height;let Q=t.COLOR_BUFFER_BIT;const oe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(P),j=_.length>1;if(j)for(let ce=0;ce<_.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=i.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,Q,t.NEAREST),a===!0&&(It.length=0,kt.length=0,It.push(t.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(oe),kt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<_.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=i.get(_[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&a){const _=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function xt(P){return Math.min(r.maxSamples,P.samples)}function bt(P){const _=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(P){const _=o.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function cn(P,_){const z=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Ol&&z!==tr&&(Xe.getTransfer(z)===it?(X!==Zn||Q!==Nn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",z)),_}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=$,this.setTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=V,this.setTexture3D=I,this.setTextureCube=J,this.rebindTextures=Je,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Aw(t,e){function n(i,r=tr){let s;const o=Xe.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===nh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ih)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===cv)return t.BYTE;if(i===uv)return t.SHORT;if(i===$o)return t.UNSIGNED_SHORT;if(i===th)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===hv)return t.ALPHA;if(i===pv)return t.RGB;if(i===Zn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===mv)return t.RED;if(i===rh)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===sh)return t.RG_INTEGER;if(i===oh)return t.RGBA_INTEGER;if(i===ol||i===al||i===ll||i===cl)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rf||i===Cf||i===bf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lf||i===Df||i===If||i===Nf||i===Uf||i===Ul||i===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lf||i===Df)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===If)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nf)return s.COMPRESSED_R11_EAC;if(i===Uf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ul)return s.COMPRESSED_RG11_EAC;if(i===Ff)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Of||i===kf||i===Bf||i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===Yf||i===$f||i===qf||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jf||i===Qf||i===jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jf)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ed||i===td||i===Fl||i===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ed)return s.COMPRESSED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:Rw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends $r{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",a=1,c=null,h=null,f=null,u=null,p=null,v=null;const T=typeof XRWebGLBinding<"u",m=new bw,d={},x=n.getContextAttributes();let y=null,S=null;const M=[],A=[],w=new Qe;let g=null;const C=new qn;C.viewport=new Et;const R=new qn;R.viewport=new Et;const b=[C,R],D=new zy;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=M[k];return ne===void 0&&(ne=new Jc,M[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=M[k];return ne===void 0&&(ne=new Jc,M[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=M[k];return ne===void 0&&(ne=new Jc,M[k]=ne),ne.getHandSpace()};function F(k){const ne=A.indexOf(k.inputSource);if(ne===-1)return;const se=M[ne];se!==void 0&&(se.update(k.inputSource,k.frame,c||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",B);for(let k=0;k<M.length;k++){const ne=A[k];ne!==null&&(A[k]=null,M[k].disconnect(ne))}H=null,$=null,m.reset();for(const k in d)delete d[k];e.setRenderTarget(y),p=null,u=null,f=null,r=null,S=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){l=k,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&T&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ne=null,Oe=null;x.depth&&(Oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Ir:ki,Ne=x.stencil?qo:gi);const Le={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new pi(u.textureWidth,u.textureHeight,{format:Zn,type:Nn,depthTexture:new Hs(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await r.requestReferenceSpace(l),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(k){for(let ne=0;ne<k.removed.length;ne++){const se=k.removed[ne],Ne=A.indexOf(se);Ne>=0&&(A[Ne]=null,M[Ne].disconnect(se))}for(let ne=0;ne<k.added.length;ne++){const se=k.added[ne];let Ne=A.indexOf(se);if(Ne===-1){for(let Le=0;Le<M.length;Le++)if(Le>=A.length){A.push(se),Ne=Le;break}else if(A[Le]===null){A[Le]=se,Ne=Le;break}if(Ne===-1)break}const Oe=M[Ne];Oe&&Oe.connect(se)}}const L=new Y,V=new Y;function I(k,ne,se){L.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const Ne=L.distanceTo(V),Oe=ne.projectionMatrix.elements,Le=se.projectionMatrix.elements,Tt=Oe[14]/(Oe[10]-1),Ge=Oe[14]/(Oe[10]+1),ot=(Oe[9]+1)/Oe[5],Je=(Oe[9]-1)/Oe[5],$e=(Oe[8]-1)/Oe[0],Ct=(Le[8]+1)/Le[0],It=Tt*$e,kt=Tt*Ct,Vt=Ne/(-$e+Ct),xt=Vt*-$e;if(ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(xt),k.translateZ(Vt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Oe[10]===-1)k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const bt=Tt+Vt,U=Ge+Vt,cn=It-xt,tt=kt+(Ne-xt),P=ot*Ge/U*bt,_=Je*Ge/U*bt;k.projectionMatrix.makePerspective(cn,tt,P,_,bt,U),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function J(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let ne=k.near,se=k.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(se=m.depthFar)),D.near=R.near=C.near=ne,D.far=R.far=C.far=se,(H!==D.near||$!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,$=D.far),D.layers.mask=k.layers.mask|6,C.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Ne=k.parent,Oe=D.cameras;J(D,Ne);for(let Le=0;Le<Oe.length;Le++)J(Oe[Le],Ne);Oe.length===2?I(D,C,R):D.projectionMatrix.copy(C.projectionMatrix),q(k,D,Ne)};function q(k,ne,se){se===null?k.matrix.copy(ne.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(ne.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=id*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return a},this.setFoveation=function(k){a=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(k){return d[k]};let ve=null;function _e(k,ne){if(h=ne.getViewerPose(c||o),v=ne,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Ne=!0);for(let Ge=0;Ge<se.length;Ge++){const ot=se[Ge];let Je=null;if(p!==null)Je=p.getViewport(ot);else{const Ct=f.getViewSubImage(u,ot);Je=Ct.viewport,Ge===0&&(e.setRenderTargetTextures(S,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(S))}let $e=b[Ge];$e===void 0&&($e=new qn,$e.layers.enable(Ge),$e.viewport=new Et,b[Ge]=$e),$e.matrix.fromArray(ot.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ot.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Je.x,Je.y,Je.width,Je.height),Ge===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ne===!0&&D.cameras.push($e)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){f=i.getBinding();const Ge=f.getDepthInformation(se[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(Oe&&Oe.includes("camera-access")&&T){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<se.length;Ge++){const ot=se[Ge].camera;if(ot){let Je=d[ot];Je||(Je=new Tv,d[ot]=Je);const $e=f.getCameraImage(ot);Je.sourceTexture=$e}}}}for(let se=0;se<M.length;se++){const Ne=A[se],Oe=M[se];Ne!==null&&Oe!==void 0&&Oe.update(Ne,ne,c||o)}ve&&ve(k,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Me=new Rv;Me.setAnimationLoop(_e),this.setAnimationLoop=function(k){ve=k},this.dispose=function(){}}}const Lw=new Dt,Nv=new Fe;Nv.set(-1,0,0,0,1,0,0,0,1);function Dw(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,wv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,y,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),T(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?a(m,d,x,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,S=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nv),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function T(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iw(t,e,n,i){let r={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function a(S,M){const A=M.program;i.uniformBlockBinding(S,A)}function c(S,M){let A=r[S.id];A===void 0&&(m(S),A=h(S),r[S.id]=A,S.addEventListener("dispose",x));const w=M.program;i.updateUBOMapping(S,w);const g=e.render.frame;s[S.id]!==g&&(u(S),s[S.id]=g)}function h(S){const M=f();S.__bindingPointIndex=M;const A=t.createBuffer(),w=S.__size,g=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,A),A}function f(){for(let S=0;S<l;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=r[S.id],A=S.uniforms,w=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let g=0,C=A.length;g<C;g++){const R=A[g];if(Array.isArray(R))for(let b=0,D=R.length;b<D;b++)p(R[b],g,b,w);else p(R,g,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,M,A,w){if(T(S,M,A,w)===!0){const g=S.__offset,C=S.value;if(Array.isArray(C)){let R=0;for(let b=0;b<C.length;b++){const D=C[b],H=d(D);v(D,S.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,S.__data)}}function v(S,M,A){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,A)}function T(S,M,A,w){const g=S.value,C=M+"_"+A;if(w[C]===void 0)return typeof g=="number"||typeof g=="boolean"?w[C]=g:ArrayBuffer.isView(g)?w[C]=g.slice():w[C]=g.clone(),!0;{const R=w[C];if(typeof g=="number"||typeof g=="boolean"){if(R!==g)return w[C]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(R.equals(g)===!1)return R.copy(g),!0}}return!1}function m(S){const M=S.uniforms;let A=0;const w=16;for(let C=0,R=M.length;C<R;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let D=0,H=b.length;D<H;D++){const $=b[D],F=Array.isArray($.value)?$.value:[$.value];for(let Z=0,B=F.length;Z<B;Z++){const L=F[Z],V=d(L),I=A%w,J=I%V.boundary,q=I+J;A+=J,q!==0&&w-q<V.storage&&(A+=w-q),$.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=V.storage}}}const g=A%w;return g>0&&(A+=w-g),S.__size=A,S.__cache={},this}function d(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),M}function x(S){const M=S.target;M.removeEventListener("dispose",x);const A=o.indexOf(M.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:a,update:c,dispose:y}}const Nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Uw(){return si===null&&(si=new Ry(Nw,16,16,Gr,Oi),si.name="DFG_LUT",si.minFilter=en,si.magFilter=en,si.wrapS=Ci,si.wrapT=Ci,si.generateMipmaps=!1,si.needsUpdate=!0),si}class Fw{constructor(e={}){const{canvas:n=iy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const T=p,m=new Set([oh,sh,rh]),d=new Set([Nn,gi,$o,qo,nh,ih]),x=new Uint32Array(4),y=new Int32Array(4),S=new Y;let M=null,A=null;const w=[],g=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let b=!1,D=null,H=null,$=null,F=null;this._outputColorSpace=Qt;let Z=0,B=0,L=null,V=-1,I=null;const J=new Et,q=new Et;let ve=null;const _e=new et(0);let Me=0,k=n.width,ne=n.height,se=1,Ne=null,Oe=null;const Le=new Et(0,0,k,ne),Tt=new Et(0,0,k,ne);let Ge=!1;const ot=new Mv;let Je=!1,$e=!1;const Ct=new Dt,It=new Y,kt=new Et,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function bt(){return L===null?se:1}let U=i;function cn(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eh}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",ei,!1),U===null){const O="webgl2";if(U=cn(O,E),U===null)throw cn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ke("WebGLRenderer: "+E.message),E}let tt,P,_,z,X,Q,oe,le,j,te,ce,Re,de,ue,Pe,De,ke,N,ae,ee,fe,ge,ie;function we(){tt=new U1(U),tt.init(),fe=new Aw(U,tt),P=new R1(U,tt,e,fe),_=new Tw(U,tt),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),H=U.createFramebuffer(),$=U.createFramebuffer(),F=U.createFramebuffer(),z=new k1(U),X=new uw,Q=new ww(U,tt,_,X,P,fe,z),oe=new N1(R),le=new Vy(U),ge=new w1(U,le),j=new F1(U,le,z,ge),te=new z1(U,j,le,ge,z),N=new B1(U,P,Q),Pe=new C1(X),ce=new cw(R,oe,tt,P,ge,Pe),Re=new Dw(R,X),de=new dw,ue=new _w(tt),ke=new T1(R,oe,_,te,v,a),De=new Ew(R,te,P),ie=new Iw(U,z,P,_),ae=new A1(U,tt,z),ee=new O1(U,tt,z),z.programs=ce.programs,R.capabilities=P,R.extensions=tt,R.properties=X,R.renderLists=de,R.shadowMap=De,R.state=_,R.info=z}we(),T!==Nn&&(C=new V1(T,n.width,n.height,l,r,s));const Ee=new Pw(R,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(k,ne,!1))},this.getSize=function(E){return E.set(k,ne)},this.setSize=function(E,O,K=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,ne=O,n.width=Math.floor(E*se),n.height=Math.floor(O*se),K===!0&&(n.style.width=E+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(k*se,ne*se).floor()},this.setDrawingBufferSize=function(E,O,K){k=E,ne=O,se=K,n.width=Math.floor(E*K),n.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(T===Nn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,O,K,G){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,O,K,G),_.viewport(J.copy(Le).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,O,K,G){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,O,K,G),_.scissor(q.copy(Tt).multiplyScalar(se).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){_.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){Ne=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,K=!0){let G=0;if(E){let W=!1;if(L!==null){const me=L.texture.format;W=m.has(me)}if(W){const me=L.texture.type,Se=d.has(me),pe=ke.getClearColor(),Te=ke.getClearAlpha(),Ce=pe.r,Be=pe.g,He=pe.b;Se?(x[0]=Ce,x[1]=Be,x[2]=He,x[3]=Te,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Ce,y[1]=Be,y[2]=He,y[3]=Te,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),ke.dispose(),de.dispose(),ue.dispose(),X.dispose(),oe.dispose(),te.dispose(),ge.dispose(),ie.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",_h),Ee.removeEventListener("sessionend",xh),xr.stop()};function St(E){E.preventDefault(),$p("WebGLRenderer: Context Lost."),b=!0}function ct(){$p("WebGLRenderer: Context Restored."),b=!1;const E=z.autoReset,O=De.enabled,K=De.autoUpdate,G=De.needsUpdate,W=De.type;we(),z.autoReset=E,De.enabled=O,De.autoUpdate=K,De.needsUpdate=G,De.type=W}function ei(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ti(E){const O=E.target;O.removeEventListener("dispose",ti),Fv(O)}function Fv(E){Ov(E),X.remove(E)}function Ov(E){const O=X.get(E).programs;O!==void 0&&(O.forEach(function(K){ce.releaseProgram(K)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,G,W,me){O===null&&(O=Vt);const Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=zv(E,O,K,G,W);_.setMaterial(G,Se);let Te=K.index,Ce=1;if(G.wireframe===!0){if(Te=j.getWireframeAttribute(K),Te===void 0)return;Ce=2}const Be=K.drawRange,He=K.attributes.position;let be=Be.start*Ce,st=(Be.start+Be.count)*Ce;me!==null&&(be=Math.max(be,me.start*Ce),st=Math.min(st,(me.start+me.count)*Ce)),Te!==null?(be=Math.max(be,0),st=Math.min(st,Te.count)):He!=null&&(be=Math.max(be,0),st=Math.min(st,He.count));const wt=st-be;if(wt<0||wt===1/0)return;ge.setup(W,G,pe,K,Te);let yt,at=ae;if(Te!==null&&(yt=le.get(Te),at=ee,at.setIndex(yt)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*bt()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(W.isLine){let $t=G.linewidth;$t===void 0&&($t=1),_.setLineWidth($t*bt()),W.isLineSegments?at.setMode(U.LINES):W.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else W.isPoints?at.setMode(U.POINTS):W.isSprite&&at.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $t=W._multiDrawStarts,xe=W._multiDrawCounts,vn=W._multiDrawCount,qe=Te?le.get(Te).bytesPerElement:1,Cn=X.get(G).currentProgram.getUniforms();for(let ni=0;ni<vn;ni++)Cn.setValue(U,"_gl_DrawID",ni),at.render($t[ni]/qe,xe[ni])}else if(W.isInstancedMesh)at.renderInstances(be,wt,W.count);else if(K.isInstancedBufferGeometry){const $t=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,xe=Math.min(K.instanceCount,$t);at.renderInstances(be,wt,xe)}else at.render(be,wt)};function vh(E,O,K){E.transparent===!0&&E.side===In&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,ra(E,O,K),E.side=mr,E.needsUpdate=!0,ra(E,O,K),E.side=In):ra(E,O,K)}this.compile=function(E,O,K=null){K===null&&(K=E),A=ue.get(K),A.init(O),g.push(A),K.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),E!==K&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];vh(pe,K,W),G.add(pe)}else vh(me,K,W),G.add(me)}),A=g.pop(),G},this.compileAsync=function(E,O,K=null){const G=this.compile(E,O,K);return new Promise(W=>{function me(){if(G.forEach(function(Se){X.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){W(E);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let uc=null;function kv(E){uc&&uc(E)}function _h(){xr.stop()}function xh(){xr.start()}const xr=new Rv;xr.setAnimationLoop(kv),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(E){uc=E,Ee.setAnimationLoop(E),E===null?xr.stop():xr.start()},Ee.addEventListener("sessionstart",_h),Ee.addEventListener("sessionend",xh),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;D!==null&&D.renderStart(E,O);const K=Ee.enabled===!0&&Ee.isPresenting===!0,G=C!==null&&(L===null||K)&&C.begin(R,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(O),O=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,L),A=ue.get(E,g.length),A.init(O),A.state.textureUnits=Q.getTextureUnits(),g.push(A),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ot.setFromProjectionMatrix(Ct,ui,O.reversedDepth),$e=this.localClippingEnabled,Je=Pe.init(this.clippingPlanes,$e),M=de.get(E,w.length),M.init(),w.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&fc(Se,O,-1/0,R.sortObjects)}fc(E,O,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(Ne,Oe,O.reversedDepth),xt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,xt&&ke.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Pe.beginShadows();const W=A.state.shadowsArray;if(De.render(W,E,O),Je===!0&&Pe.endShadows(),(G&&C.hasRenderPass())===!1){const Se=M.opaque,pe=M.transmissive;if(A.setupLights(),O.isArrayCamera){const Te=O.cameras;if(pe.length>0)for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const He=Te[Ce];yh(Se,pe,E,He)}xt&&ke.render(E);for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const He=Te[Ce];Sh(M,E,He,He.viewport)}}else pe.length>0&&yh(Se,pe,E,O),xt&&ke.render(E),Sh(M,E,O)}L!==null&&B===0&&(Q.updateMultisampleRenderTarget(L),Q.updateRenderTargetMipmap(L)),G&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),ge.resetDefaultState(),V=-1,I=null,g.pop(),g.length>0?(A=g[g.length-1],Q.setTextureUnits(A.state.textureUnits),Je===!0&&Pe.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function fc(E,O,K,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ot.intersectsSprite(E)){G&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);const Se=te.update(E),pe=E.material;pe.visible&&M.push(E,Se,pe,K,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ot.intersectsObject(E))){const Se=te.update(E),pe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),kt.copy(Se.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(pe)){const Te=Se.groups;for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const He=Te[Ce],be=pe[He.materialIndex];be&&be.visible&&M.push(E,Se,be,K,kt.z,He)}}else pe.visible&&M.push(E,Se,pe,K,kt.z,null)}}const me=E.children;for(let Se=0,pe=me.length;Se<pe;Se++)fc(me[Se],O,K,G)}function Sh(E,O,K,G){const{opaque:W,transmissive:me,transparent:Se}=E;A.setupLightsView(K),Je===!0&&Pe.setGlobalState(R.clippingPlanes,K),G&&_.viewport(J.copy(G)),W.length>0&&ia(W,O,K),me.length>0&&ia(me,O,K),Se.length>0&&ia(Se,O,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function yh(E,O,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const be=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:be?Oi:Nn,minFilter:Dr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=A.state.transmissionRenderTarget[G.id],Se=G.viewport||J;me.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(_e),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),xt&&ke.render(K);const Be=R.toneMapping;R.toneMapping=hi;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),Je===!0&&Pe.setGlobalState(R.clippingPlanes,G),ia(E,K,G),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,wt=O.length;st<wt;st++){const yt=O[st],{object:at,geometry:$t,material:xe,group:vn}=yt;if(xe.side===In&&at.layers.test(G.layers)){const qe=xe.side;xe.side=gn,xe.needsUpdate=!0,Mh(at,K,G,$t,xe,vn),xe.side=qe,xe.needsUpdate=!0,be=!0}}be===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,Te,Ce),R.setClearColor(_e,Me),He!==void 0&&(G.viewport=He),R.toneMapping=Be}function ia(E,O,K){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,me=E.length;W<me;W++){const Se=E[W],{object:pe,geometry:Te,group:Ce}=Se;let Be=Se.material;Be.allowOverride===!0&&G!==null&&(Be=G),pe.layers.test(K.layers)&&Mh(pe,O,K,Te,Be,Ce)}}function Mh(E,O,K,G,W,me){E.onBeforeRender(R,O,K,G,W,me),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,O,K,G,E,me),W.transparent===!0&&W.side===In&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,R.renderBufferDirect(K,O,G,W,E,me),W.side=mr,W.needsUpdate=!0,R.renderBufferDirect(K,O,G,W,E,me),W.side=In):R.renderBufferDirect(K,O,G,W,E,me),E.onAfterRender(R,O,K,G,W,me)}function ra(E,O,K){O.isScene!==!0&&(O=Vt);const G=X.get(E),W=A.state.lights,me=A.state.shadowsArray,Se=W.state.version,pe=ce.getParameters(E,W.state,me,O,K,A.state.lightProbeGridArray),Te=ce.getProgramCacheKey(pe);let Ce=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Be=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=oe.get(E.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",ti),Ce=new Map,G.programs=Ce);let He=Ce.get(Te);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===Se)return Th(E,pe),He}else pe.uniforms=ce.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,K,pe),E.onBeforeCompile(pe,R),He=ce.acquireProgram(pe,Te),Ce.set(Te,He),G.uniforms=pe.uniforms;const be=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Pe.uniform),Th(E,pe),G.needsLights=Vv(E),G.lightsStateVersion=Se,G.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=He,G.uniformsList=null,He}function Eh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ul.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Th(E,O){const K=X.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Bv(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let K=0,G=E.length;K<G;K++){const W=E[K];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function zv(E,O,K,G,W){O.isScene!==!0&&(O=Vt),Q.resetTextureUnits();const me=O.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,pe=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xe.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ce=oe.get(G.envMap||Se,Te),Be=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color;let yt=hi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=R.toneMapping);const at=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=at!==void 0?at.length:0,xe=X.get(G),vn=A.state.lights;if(Je===!0&&($e===!0||E!==I)){const ut=E===I&&G.id===V;Pe.setState(G,E,ut)}let qe=!1;G.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==vn.state.version||xe.outputColorSpace!==pe||W.isBatchedMesh&&xe.batching===!1||!W.isBatchedMesh&&xe.batching===!0||W.isBatchedMesh&&xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&xe.instancing===!1||!W.isInstancedMesh&&xe.instancing===!0||W.isSkinnedMesh&&xe.skinning===!1||!W.isSkinnedMesh&&xe.skinning===!0||W.isInstancedMesh&&xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&xe.instancingMorph===!1&&W.morphTexture!==null||xe.envMap!==Ce||G.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Pe.numPlanes||xe.numIntersection!==Pe.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==He||xe.morphTargets!==be||xe.morphNormals!==st||xe.morphColors!==wt||xe.toneMapping!==yt||xe.morphTargetsCount!==$t||!!xe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,xe.__version=G.version);let Cn=xe.currentProgram;qe===!0&&(Cn=ra(G,O,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,Cn,xe));let ni=!1,Hi=!1,qr=!1;const lt=Cn.getUniforms(),At=xe.uniforms;if(_.useProgram(Cn.program)&&(ni=!0,Hi=!0,qr=!0),G.id!==V&&(V=G.id,Hi=!0),xe.needsLights){const ut=Bv(A.state.lightProbeGridArray,W);xe.lightProbeGrid!==ut&&(xe.lightProbeGrid=ut,Hi=!0)}if(ni||I!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",E.projectionMatrix),lt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Gi=lt.map.cameraPosition;Gi!==void 0&&Gi.setValue(U,It.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Hi=!0,qr=!0)}if(xe.needsLights&&(vn.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",vn.state.directionalShadowMap,Q),vn.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",vn.state.spotShadowMap,Q),vn.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",vn.state.pointShadowMap,Q)),W.isSkinnedMesh){lt.setOptional(U,W,"bindMatrix"),lt.setOptional(U,W,"bindMatrixInverse");const ut=W.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(U,"boneTexture",ut.boneTexture,Q))}W.isBatchedMesh&&(lt.setOptional(U,W,"batchingTexture"),lt.setValue(U,"batchingTexture",W._matricesTexture,Q),lt.setOptional(U,W,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",W._indirectTexture,Q),lt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",W._colorsTexture,Q));const Vi=K.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&N.update(W,K,Cn),(Hi||xe.receiveShadow!==W.receiveShadow)&&(xe.receiveShadow=W.receiveShadow,lt.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(At.envMapIntensity.value=O.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=Uw()),Hi){if(lt.setValue(U,"toneMappingExposure",R.toneMappingExposure),xe.needsLights&&Hv(At,qr),me&&G.fog===!0&&Re.refreshFogUniforms(At,me),Re.refreshMaterialUniforms(At,G,se,ne,A.state.transmissionRenderTarget[E.id]),xe.needsLights&&xe.lightProbeGrid){const ut=xe.lightProbeGrid;At.probesSH.value=ut.texture,At.probesMin.value.copy(ut.boundingBox.min),At.probesMax.value.copy(ut.boundingBox.max),At.probesResolution.value.copy(ut.resolution)}ul.upload(U,Eh(xe),At,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ul.upload(U,Eh(xe),At,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(U,"center",W.center),lt.setValue(U,"modelViewMatrix",W.modelViewMatrix),lt.setValue(U,"normalMatrix",W.normalMatrix),lt.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const ut=G.uniformsGroups;for(let Gi=0,Kr=ut.length;Gi<Kr;Gi++){const wh=ut[Gi];ie.update(wh,Cn),ie.bind(wh,Cn)}}return Cn}function Hv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Vv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,K){const G=X.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=O,X.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const K=X.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){L=E,Z=O,B=K;let G=null,W=!1,me=!1;if(E){const pe=X.get(E);if(pe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),J.copy(E.viewport),q.copy(E.scissor),ve=E.scissorTest,_.viewport(J),_.scissor(q),_.setScissorTest(ve),V=-1;return}else if(pe.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(pe.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&X.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ce=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?G=Ce[O][K]:G=Ce[O],W=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?G=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?G=Ce[K]:G=Ce,J.copy(E.viewport),q.copy(E.scissor),ve=E.scissorTest}else J.copy(Le).multiplyScalar(se).floor(),q.copy(Tt).multiplyScalar(se).floor(),ve=Ge;if(K!==0&&(G=H),_.bindFramebuffer(U.FRAMEBUFFER,G)&&_.drawBuffers(E,G),_.viewport(J),_.scissor(q),_.setScissorTest(ve),W){const pe=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,K)}else if(me){const pe=O;for(let Te=0;Te<E.textures.length;Te++){const Ce=X.get(E.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,K,pe)}}else if(E!==null&&K!==0){const pe=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,K)}V=-1},this.readRenderTargetPixels=function(E,O,K,G,W,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){_.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=E.textures[pe],Be=Ce.format,He=Ce.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&K>=0&&K<=E.height-W&&U.readPixels(O,K,G,W,fe.convert(Be),fe.convert(He),me)}finally{const Ce=L!==null?X.get(L).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,G,W,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(O>=0&&O<=E.width-G&&K>=0&&K<=E.height-W){_.bindFramebuffer(U.FRAMEBUFFER,Te);const Ce=E.textures[pe],Be=Ce.format,He=Ce.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!P.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(O,K,G,W,fe.convert(Be),fe.convert(He),0);const st=L!==null?X.get(L).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,st);const wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ry(U,wt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(be),U.deleteSync(wt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,K=0){const G=Math.pow(2,-K),W=Math.floor(E.image.width*G),me=Math.floor(E.image.height*G),Se=O!==null?O.x:0,pe=O!==null?O.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Se,pe,W,me),_.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,G=null,W=0,me=0){let Se,pe,Te,Ce,Be,He,be,st,wt;const yt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(K!==null)Se=K.max.x-K.min.x,pe=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,Be=K.min.y,He=K.isBox3?K.min.z:0;else{const At=Math.pow(2,-W);Se=Math.floor(yt.width*At),pe=Math.floor(yt.height*At),E.isDataArrayTexture?Te=yt.depth:E.isData3DTexture?Te=Math.floor(yt.depth*At):Te=1,Ce=0,Be=0,He=0}G!==null?(be=G.x,st=G.y,wt=G.z):(be=0,st=0,wt=0);const at=fe.convert(O.format),$t=fe.convert(O.type);let xe;O.isData3DTexture?(Q.setTexture3D(O,0),xe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),xe=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),xe=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const vn=_.getParameter(U.UNPACK_ROW_LENGTH),qe=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=_.getParameter(U.UNPACK_SKIP_PIXELS),ni=_.getParameter(U.UNPACK_SKIP_ROWS),Hi=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),_.pixelStorei(U.UNPACK_SKIP_ROWS,Be),_.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const qr=E.isDataArrayTexture||E.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const At=X.get(E),Vi=X.get(O),ut=X.get(At.__renderTarget),Gi=X.get(Vi.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Kr=0;Kr<Te;Kr++)qr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,He+Kr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(O).__webglTexture,me,wt+Kr)),U.blitFramebuffer(Ce,Be,Se,pe,be,st,Se,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){const At=X.get(E),Vi=X.get(O);_.bindFramebuffer(U.READ_FRAMEBUFFER,$),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let ut=0;ut<Te;ut++)qr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,W,He+ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,W),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vi.__webglTexture,me,wt+ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vi.__webglTexture,me),W!==0?U.blitFramebuffer(Ce,Be,Se,pe,be,st,Se,pe,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(xe,me,be,st,wt+ut,Ce,Be,Se,pe):U.copyTexSubImage2D(xe,me,be,st,Ce,Be,Se,pe);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(xe,me,be,st,wt,Se,pe,Te,at,$t,yt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,me,be,st,wt,Se,pe,Te,at,yt.data):U.texSubImage3D(xe,me,be,st,wt,Se,pe,Te,at,$t,yt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,be,st,Se,pe,at,$t,yt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,be,st,yt.width,yt.height,at,yt.data):U.texSubImage2D(U.TEXTURE_2D,me,be,st,Se,pe,at,$t,yt);_.pixelStorei(U.UNPACK_ROW_LENGTH,vn),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),_.pixelStorei(U.UNPACK_SKIP_ROWS,ni),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Hi),me===0&&O.generateMipmaps&&U.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){Z=0,B=0,L=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}function Ow(t){const n=document.createElement("canvas");n.width=t.w*2,n.height=t.h*2;const i=n.getContext("2d");i.scale(2,2),i.fillStyle=t.bg,i.fillRect(0,0,t.w,t.h);const r=16,s=t.fontSize??18;i.fillStyle=t.fg,i.font=`600 ${s}px Inter, system-ui, sans-serif`,t.align==="center"||!t.subtext?(i.textAlign="center",i.textBaseline="middle",t.subtext?(i.font=`600 ${s}px Inter, system-ui, sans-serif`,i.fillText(t.text,t.w/2,t.h/2-s*.6),i.font=`400 ${s*.65}px Inter, system-ui, sans-serif`,i.fillStyle=t.accent??t.fg,i.fillText(t.subtext,t.w/2,t.h/2+s*.6)):i.fillText(t.text,t.w/2,t.h/2)):(i.textAlign="left",i.textBaseline="top",i.fillText(t.text,r,t.h/2-s*.5),t.subtext&&(i.font=`400 ${s*.7}px Inter, system-ui, sans-serif`,i.fillStyle=t.accent??t.fg,i.fillText(t.subtext,r,t.h/2+s*.6))),t.icon&&(i.font=`${s*1.2}px Inter, system-ui, sans-serif`,i.textAlign="right",i.textBaseline="middle",i.fillStyle=t.accent??t.fg,i.fillText(t.icon,t.w-r,t.h/2));const o=new ac(n);return o.colorSpace=Qt,o}async function kw(t){const n=document.createElement("canvas");n.width=t.w*2,n.height=t.h*2;const i=n.getContext("2d");i.scale(2,2);const r=i.createLinearGradient(0,0,t.w,t.h);if(r.addColorStop(0,"#1a2a4a"),r.addColorStop(1,"#0a1120"),i.fillStyle=r,i.fillRect(0,0,t.w,t.h),t.imageUrl)try{const a=await Uv(t.imageUrl),c=a.width/a.height,h=t.w/t.h;let f=t.w,u=t.h,p=0,v=0;c>h?(u=t.h,f=u*c,p=(t.w-f)/2):(f=t.w,u=f/c,v=(t.h-u)/2),i.drawImage(a,p,v,f,u)}catch{Fm(i,t)}else Fm(i,t);const s=i.createLinearGradient(0,t.h*.5,0,t.h);s.addColorStop(0,"rgba(5,10,20,0)"),s.addColorStop(1,"rgba(5,10,20,0.92)"),i.fillStyle=s,i.fillRect(0,t.h*.5,t.w,t.h*.5);const o=16;i.fillStyle="rgba(245,158,11,0.95)",i.beginPath(),i.arc(t.w-o-10,o+10,o,0,Math.PI*2),i.fill(),i.fillStyle="#0a1120",i.font="700 13px Inter, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t.rating.toFixed(1),t.w-o-10,o+10),i.fillStyle="#f1f5f9",i.font="600 15px Inter, system-ui, sans-serif",i.textAlign="left",i.textBaseline="bottom",Hl(i,t.title,12,t.h-24,t.w-24,17,2),i.font="400 12px Inter, system-ui, sans-serif",i.fillStyle="#94a3b8",i.fillText(t.year,12,t.h-8);const l=new ac(n);return l.colorSpace=Qt,l}function Fm(t,e){t.fillStyle="#f1f5f9",t.font="600 16px Inter, system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",Hl(t,e.title,e.w/2,e.h/2-10,e.w-20,18,3)}async function Bw(t){const n=document.createElement("canvas");n.width=t.w*2,n.height=t.h*2;const i=n.getContext("2d");i.scale(2,2);const r=i.createLinearGradient(0,0,t.w,t.h);if(r.addColorStop(0,"#0d1b2a"),r.addColorStop(1,"#050810"),i.fillStyle=r,i.fillRect(0,0,t.w,t.h),t.imageUrl)try{const a=await Uv(t.imageUrl),c=a.width/a.height,h=t.w/t.h;let f=t.w,u=t.h,p=0,v=0;c>h?(u=t.h,f=u*c,p=(t.w-f)/2):(f=t.w,u=f/c,v=(t.h-u)/2),i.drawImage(a,p,v,f,u)}catch{}const s=i.createLinearGradient(0,0,t.w,0);s.addColorStop(0,"rgba(5,8,16,0.88)"),s.addColorStop(.5,"rgba(5,8,16,0.5)"),s.addColorStop(1,"rgba(5,8,16,0.2)"),i.fillStyle=s,i.fillRect(0,0,t.w,t.h),i.fillStyle="#f8fafc",i.font="700 28px Inter, system-ui, sans-serif",i.textAlign="left",i.textBaseline="top",Hl(i,t.title,28,28,t.w*.55,32,2);let o=90;t.metadata&&(i.fillStyle="#94a3b8",i.font="500 14px Inter, system-ui, sans-serif",i.fillText(t.metadata,28,o),o+=24),i.fillStyle="#cbd5e1",i.font="400 15px Inter, system-ui, sans-serif",Hl(i,t.overview,28,o,t.w*.5,22,6);const l=new ac(n);return l.colorSpace=Qt,l}function zw(t){const n=document.createElement("canvas");n.width=t.w*2,n.height=t.h*2;const i=n.getContext("2d");i.scale(2,2),i.fillStyle="#0a0f1a",i.fillRect(0,0,t.w,t.h),i.fillStyle="#f59e0b",i.fillRect(0,0,4,t.h),i.fillStyle="#f8fafc",i.font="700 22px Inter, system-ui, sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillText(t.title,20,t.h/2);const r=new ac(n);return r.colorSpace=Qt,r}function Uv(t){return new Promise((e,n)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=n,i.src=t})}function Hl(t,e,n,i,r,s,o){const l=e.split(" ");let a="",c=[];for(const h of l){const f=a?a+" "+h:h;t.measureText(f).width>r&&a?(c.push(a),a=h):a=f}if(a&&c.push(a),c=c.slice(0,o),c.length===o){const h=c[o-1];c[o-1]=h.slice(0,Math.max(0,h.length-3))+"..."}for(let h=0;h<c.length;h++)t.fillText(c[h],n,i+h*s)}const Su=0,Om=1.5;class yu{constructor(e,n,i){this.raf=0,this.lastTime=0,this.screenW=0,this.screenH=0,this.views=new Map,this.textureLoads=new Map,this.textureCache=new Map,this.disposed=!1,this.onFocusChange=()=>{this.updateHighlight()},this.container=e,this.layout=n,this.engine=i,this.screenW=e.clientWidth||window.innerWidth,this.screenH=e.clientHeight||window.innerHeight,this.renderer=new Fw({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.screenW,this.screenH),this.renderer.setClearColor(329485,1),this.renderer.autoClear=!1,this.renderer.setScissorTest(!0),e.appendChild(this.renderer.domElement),this.buildScenes(),this.lastTime=performance.now(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}buildScenes(){for(const e of this.layout.allPanels)this.buildPanelView(e);this.updateHighlight()}buildPanelView(e){const n=new Sy,i=e.viewport,r=new fh(0,i.w,0,-i.h,-100,100);r.position.z=50,n.add(r);const s=new vo;n.add(s);const o=new Map,l=new Map,a=(u,p)=>{const{x:v,y:T,w:m,h:d}=u.bounds,x=v+m/2,y=-(T+d/2),S=new Fr(m,d),M=new Co({color:u.color,transparent:p,opacity:p?.35:1,side:In,depthWrite:!p}),A=new On(S,M);A.position.set(x,y,Su),s.add(A),o.set(u.id,A),l.set(u.id,M),this.loadTileTexture(u,M,m,d)};for(const u of e.tiles)a(u,!!u.childPanel);const c=new Fr(1,1),h=new Co({color:16096779,transparent:!0,opacity:.18,side:In,depthWrite:!1}),f=new On(c,h);f.position.z=Om,f.visible=!1,s.add(f),this.views.set(e.id,{panel:e,scene:n,camera:r,contentGroup:s,highlight:f,hlFillMat:h,tileMeshes:o,tileMaterials:l})}updateLayout(e){this.layout=e,this.engine.updateLayout(e);const n=new Set(e.allPanels.map(i=>i.id));for(const[i,r]of this.views.entries())n.has(i)||(r.scene.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(l=>{l.map&&l.map.dispose(),l.dispose()})}),this.views.delete(i));for(const i of e.allPanels){const r=this.views.get(i.id);if(!r){this.buildPanelView(i);continue}const s=r.panel;i.scrollX=s.scrollX,i.scrollY=s.scrollY,i.targetScrollX=s.targetScrollX,i.targetScrollY=s.targetScrollY,r.panel=i;const o=new Set(i.tiles.map(l=>l.id));for(const[l,a]of r.tileMeshes.entries())if(!o.has(l)){r.contentGroup.remove(a),r.tileMeshes.delete(l);const c=r.tileMaterials.get(l);c&&(c.map&&c.map.dispose(),c.dispose()),r.tileMaterials.delete(l),a.geometry.dispose()}for(const l of i.tiles)if(r.tileMeshes.has(l.id)){const a=r.tileMeshes.get(l.id),{x:c,y:h,w:f,h:u}=l.bounds,p=c+f/2,v=-(h+u/2);a.position.set(p,v,Su)}else{const a=!!l.childPanel,{x:c,y:h,w:f,h:u}=l.bounds,p=c+f/2,v=-(h+u/2),T=new Fr(f,u),m=new Co({color:l.color,transparent:a,opacity:a?.35:1,side:In,depthWrite:!a}),d=new On(T,m);d.position.set(p,v,Su),r.contentGroup.add(d),r.tileMeshes.set(l.id,d),r.tileMaterials.set(l.id,m),this.loadTileTexture(l,m,f,u)}}this.updateHighlight()}loadTileTexture(e,n,i,r){const s=e.content;let o=e.id;if(s.kind==="poster"||s.kind==="backdrop"?o=s.imageUrl||s.title||e.id:s.kind==="text"&&(o=`text-${s.text}`),this.textureCache.has(o)){n.map=this.textureCache.get(o),n.color.setHex(16777215),n.needsUpdate=!0;return}let l=this.textureLoads.get(o);switch(l?(s.kind==="poster"&&n.color.setHex(659744),s.kind==="backdrop"&&n.color.setHex(858922)):(s.kind==="poster"?(n.color.setHex(659744),s.imageUrl&&(l=kw({imageUrl:s.imageUrl,title:s.title,year:s.year,rating:s.rating,w:Math.max(80,Math.floor(i)),h:Math.max(120,Math.floor(r))}))):s.kind==="backdrop"&&(n.color.setHex(858922),s.imageUrl&&(l=Bw({imageUrl:s.imageUrl,title:s.title,metadata:s.metadata,overview:s.overview,w:Math.max(200,Math.floor(i)),h:Math.max(120,Math.floor(r))}))),l&&this.textureLoads.set(o,l)),l&&l.then(a=>{this.disposed||!a||(this.textureCache.set(o,a),n.map=a,n.color.setHex(16777215),n.needsUpdate=!0)}).catch(()=>{}),s.kind){case"text":{n.color.setHex(16777215),n.transparent=!0,n.opacity=1;const a={"#0d9488":"#0d2d2a","#059669":"#0a3a2a","#2563eb":"#16265a","#0ea5e9":"#0c2f4a","#ea580c":"#3a1a0a","#dc2626":"#3a1010","#e11d48":"#3a0f1a","#0891b2":"#0a3040","#16a34a":"#0a3520","#d97706":"#3a200a"},c="#"+e.color.toString(16).padStart(6,"0"),h=a[c]??"#1e293b",f=Ow({text:s.text,subtext:s.subtext,bg:h,fg:"#f1f5f9",accent:"#f59e0b",w:Math.max(80,Math.floor(i)),h:Math.max(40,Math.floor(r)),fontSize:i>200?16:15,align:s.subtext?"left":"center"});n.map=f,n.needsUpdate=!0;break}case"section":{n.color.setHex(16777215);const a=zw({title:s.title,w:Math.max(100,Math.floor(i)),h:Math.max(30,Math.floor(r))});n.map=a,n.needsUpdate=!0;break}case"placeholder":n.color.setHex(1976635);break;case"detail":n.color.setHex(1976635);break}}updateFocus(){this.updateHighlight(),this.maybeLoadPreviewData()}maybeLoadPreviewData(){}updateHighlight(){const e=this.engine.focused;for(const n of this.views.values()){const i=n.panel===e.panel;if(n.highlight.visible=i,i){const{x:r,y:s,w:o,h:l}=e.bounds,a=r+o/2,c=-(s+l/2),h=6;n.highlight.position.set(a,c,Om),n.highlight.scale.set(o+h,l+h,1)}}}loop(e){if(this.disposed)return;const n=Math.min(.05,(e-this.lastTime)/1e3);this.lastTime=e,this.engine.step(n);for(const a of this.views.values()){const c=a.panel;a.contentGroup.position.set(-c.scrollX,c.scrollY,0);for(const h of c.tiles){const f=a.tileMeshes.get(h.id);if(f){const p=this.engine.focused.id===h.id?1.05:1;f.scale.x+=(p-f.scale.x)*12*n,f.scale.y+=(p-f.scale.y)*12*n;const v=h.bounds.y-c.scrollY,T=500,m=!(v>c.viewport.h+T||v+h.bounds.h<-T);f.visible=m}}}const i=e/1e3,r=.5+.5*Math.sin(i*5),s=this.views.get(this.engine.focused.panel.id);s&&(s.hlFillMat.opacity=.14+.12*r);const o=this.renderer;o.setScissorTest(!0),o.clear(!0,!0,!0);const l=[...this.views.values()].sort((a,c)=>a.panel.depth-c.panel.depth);for(const a of l){const c=a.panel,h=Yo(c),f=MS(c);if(f.w<=0||f.h<=0)continue;const u=h.x,p=this.screenH-(h.y+h.h);o.setViewport(u,p,h.w,h.h),o.setScissor(f.x,this.screenH-(f.y+f.h),f.w,f.h),o.clearDepth(),o.render(a.scene,a.camera)}this.raf=requestAnimationFrame(this.loop)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose();for(const e of this.views.values())e.scene.traverse(n=>{n.geometry&&n.geometry.dispose();const i=n.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()});this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}}const Hw=600,Vw={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};function km(t){let e=t.key;return(t.keyCode===38||t.keyCode===19||e==="Up")&&(e="ArrowUp"),(t.keyCode===40||t.keyCode===20||e==="Down")&&(e="ArrowDown"),(t.keyCode===37||t.keyCode===21||e==="Left")&&(e="ArrowLeft"),(t.keyCode===39||t.keyCode===22||e==="Right")&&(e="ArrowRight"),(t.keyCode===13||t.keyCode===23||t.keyCode===66)&&(e="Enter"),e}class Gw{constructor(e){this.holdTimer=null,this.holdFired=!1,this.callbacks=e,this.boundKeyDown=this.onKeyDown.bind(this),this.boundKeyUp=this.onKeyUp.bind(this)}attach(){window.addEventListener("keydown",this.boundKeyDown,!0),window.addEventListener("keyup",this.boundKeyUp,!0)}detach(){window.removeEventListener("keydown",this.boundKeyDown,!0),window.removeEventListener("keyup",this.boundKeyUp,!0),this.cancelHold()}cancelHold(){this.holdTimer!==null&&(clearTimeout(this.holdTimer),this.holdTimer=null)}onKeyDown(e){var r,s;const n=km(e),i=Vw[n];if(i){e.preventDefault(),e.stopPropagation(),this.callbacks.onNavigate(i);return}if(n==="Enter"){if(e.preventDefault(),e.stopPropagation(),e.repeat)return;this.holdFired=!1,this.holdTimer=window.setTimeout(()=>{this.holdFired=!0,this.holdTimer=null},Hw);return}(n==="r"||n==="R")&&(e.preventDefault(),e.stopPropagation(),(s=(r=this.callbacks).onRegenerate)==null||s.call(r))}onKeyUp(e){if(km(e)==="Enter"){if(e.preventDefault(),e.stopPropagation(),this.holdFired){this.holdFired=!1,this.callbacks.onBack();return}this.cancelHold(),this.callbacks.onSelect()}}}function Ww(){const t=je.useRef(null),[e,n]=je.useState(!0),[i,r]=je.useState(null),[s,o]=je.useState(null),[l,a]=je.useState([{type:"home"}]),[c,h]=je.useState("all"),f=l[l.length-1],u=je.useRef([]),p=je.useRef(f),v=je.useRef(!1);je.useEffect(()=>{u.current=f.dynamicData||[]},[f.dynamicData]),je.useEffect(()=>{p.current=f},[f]),je.useEffect(()=>{let w=!1;return(async()=>{try{const g=new Date().getFullYear(),C=Array.from({length:10},(q,ve)=>g-ve),[R,b,D,H,$,F,Z,B,L,V,I]=await Promise.all([ft.trendingMovies(),ft.popularMovies(),ft.topRatedMovies(),ft.upcomingMovies(),ft.nowPlayingMovies(),ft.trendingTV(),ft.popularTV(),ft.topRatedTV(),ft.latestTV(),ft.movieGenres(),ft.tvGenres()]);if(w)return;const J={trending:Sn(R.results),popular:Sn(b.results),topRated:Sn(D.results),upcoming:Sn(H.results),nowPlaying:Sn($.results),trendingTV:Sn(F.results),popularTV:Sn(Z.results),topRatedTV:Sn(B.results),latestTV:Sn(L.results),movieGenres:V.genres,tvGenres:I.genres,years:C};o(J),n(!1)}catch(g){if(w)return;r(g instanceof Error?g.message:"Failed to load movie data"),n(!1)}})(),()=>{w=!0}},[]),je.useEffect(()=>{let w=!1;return(async()=>{var g,C;if(!(f.type!=="genre"&&f.type!=="year"&&f.type!=="person"||f.dynamicData)){v.current=!0;try{if(f.type==="person"){const[q,ve]=await Promise.all([ft.personMovieCredits(f.personId),ft.personTVCredits(f.personId)]),_e=Sn([...q.cast||[],...ve.cast||[]].sort((Me,k)=>(k.vote_average||0)-(Me.vote_average||0)));if(w)return;a(Me=>{const k=[...Me],ne={...k[k.length-1]};return ne.dynamicData=_e,k[k.length-1]=ne,k}),v.current=!1;return}const R=((g=t.current)==null?void 0:g.clientWidth)||window.innerWidth,b=((C=t.current)==null?void 0:C.clientHeight)||window.innerHeight,H=Math.floor((R-32)/174),$=Math.ceil(b/234),F=H*$,Z=Math.max(1,Math.ceil(F/20)),B=q=>f.type==="genre"?f.mediaType==="tv"?ft.discoverTV({with_genres:f.genreId,page:q}):ft.discoverMovies({with_genres:f.genreId,page:q}):f.mediaType==="tv"?ft.discoverTV({first_air_date_year:f.year,page:q}):ft.discoverMovies({year:f.year,page:q}),L=[];for(let q=1;q<=Z;q++)L.push(B(q));const V=await Promise.all(L);if(w)return;const I=V.flatMap(q=>Sn(q.results)),J=V[V.length-1];a(q=>{const ve=[...q],_e={...ve[ve.length-1]};return _e.dynamicData=I,_e.dynamicPage=Z,_e.dynamicHasMore=J.results.length>=20,ve[ve.length-1]=_e,ve})}catch{}v.current=!1}})(),()=>{w=!0}},[f]);const T=async()=>{const w=p.current;if(v.current||w.dynamicHasMore===!1||w.type!=="genre"&&w.type!=="year")return;v.current=!0;const g=(w.dynamicPage||1)+1;try{let C;if(w.type==="genre")C=w.mediaType==="tv"?await ft.discoverTV({with_genres:w.genreId,page:g}):await ft.discoverMovies({with_genres:w.genreId,page:g});else if(w.type==="year")C=w.mediaType==="tv"?await ft.discoverTV({first_air_date_year:w.year,page:g}):await ft.discoverMovies({year:w.year,page:g});else return;const R=Sn(C.results);a(b=>{const D=[...b],H={...D[D.length-1]};return R.length>0&&(H.dynamicData=[...H.dynamicData||[],...R],H.dynamicPage=g),(R.length===0||C.results.length<20)&&(H.dynamicHasMore=!1),D[D.length-1]=H,D})}catch{}v.current=!1},m=je.useRef(null),d=je.useRef(null),x=je.useRef(null),y=je.useRef("all"),S=je.useRef(null),[M,A]=je.useState(null);return je.useEffect(()=>{if(f.type!=="details"||f.similar)return;const w=po(f.movie);ft.getSimilarMovies(f.movie.id,w).then(g=>{a(C=>{const R=[...C],b=R[R.length-1];return b.type==="details"&&b.movie.id===f.movie.id?(R[R.length-1]={...b,similar:Sn(g.results)},R):C})}).catch(console.error),w==="tv"?ft.tvDetails(f.movie.id).then(g=>{const C=f.season||1;(g.seasons&&g.seasons.length>0?ft.tvSeason(f.movie.id,C):Promise.resolve({episodes:[]})).then(b=>{a(D=>{var F,Z;const H=[...D],$=H[H.length-1];return $.type==="details"&&$.movie.id===f.movie.id?(H[H.length-1]={...$,movie:{...$.movie,...g,cast:((F=g.credits)==null?void 0:F.cast)||[],crew:((Z=g.credits)==null?void 0:Z.crew)||[]},seasonsData:g.seasons||[],episodesData:b.episodes||[],season:C,episode:f.episode||1},H):D})}).catch(console.error)}).catch(console.error):ft.movieDetails(f.movie.id).then(g=>{a(C=>{var D,H;const R=[...C],b=R[R.length-1];return b.type==="details"&&b.movie.id===f.movie.id?(R[R.length-1]={...b,movie:{...b.movie,...g,cast:((D=g.credits)==null?void 0:D.cast)||[],crew:((H=g.credits)==null?void 0:H.crew)||[]}},R):C})}).catch(console.error)},[f]),je.useEffect(()=>{f.type!=="details"&&A(null)},[f.type]),je.useEffect(()=>{if(f.type!=="details"||M)return;let w;const g=()=>{m.current&&m.current.allLeaves.filter(R=>R.content.kind==="text"&&R.content.action==="play_server").forEach(R=>{const b=R.content.payload,D=document.getElementById(`server-iframe-${b}`);if(D){const H=R.panel,$=Yo(H),F=$.x+R.bounds.x-H.scrollX,Z=$.y+R.bounds.y-H.scrollY;Z>-R.bounds.h&&Z<window.innerHeight?(D.style.transform=`translate(${F}px, ${Z}px)`,D.style.width=`${R.bounds.w}px`,D.style.height=`${R.bounds.h}px`,D.style.display="block"):D.style.display="none"}}),w=requestAnimationFrame(g)};return w=requestAnimationFrame(g),()=>cancelAnimationFrame(w)},[f.type,M]),je.useEffect(()=>()=>{var w,g;(w=d.current)==null||w.dispose(),(g=S.current)==null||g.detach()},[]),je.useEffect(()=>{if(!s)return;const w=t.current;if(!w)return;const g=w.clientWidth||window.innerWidth,C=w.clientHeight||window.innerHeight,R=kc(g,C,s,f,f.dynamicData||null,c),b=x.current,D=y.current!==c;let H=!1;if(b&&d.current&&m.current&&!D&&b.type===f.type&&(f.type==="genre"&&b.type==="genre"&&b.genreId===f.genreId||f.type==="year"&&b.type==="year"&&b.year===f.year||f.type==="details"&&b.type==="details"&&b.movie.id===f.movie.id&&b.season===f.season&&b.episode===f.episode)&&(H=!0),H)m.current.updateLayout(R),d.current.updateLayout(R),window.engine=m.current,window.sceneManager=d.current;else{if(d.current&&d.current.dispose(),m.current=new zc(R),f.scrollStates)for(const I of m.current.allPanels){const J=f.scrollStates[I.id];J&&(I.scrollX=J.scrollX,I.scrollY=J.scrollY,I.targetScrollX=J.targetScrollX,I.targetScrollY=J.targetScrollY)}if(f.focusLabel){const I=R.allLeaves.find(J=>J.label===f.focusLabel);I&&m.current.setFocus(I)}else{const I=R.allLeaves.find(J=>{var ve;let q=J.panel;for(;q;){if(q.id==="header"||q.id==="sidebar")return!1;q=((ve=q.parentTile)==null?void 0:ve.panel)??null}return!0});I&&m.current.setFocus(I)}d.current=new yu(w,R,m.current),window.engine=m.current,window.sceneManager=d.current}x.current=f,y.current=c,m.current.onFocusChange=(I,J)=>{var ve;f.focusLabel=I.label;const q=I.content;q.kind==="poster"&&u.current.length>0&&u.current.findIndex(Me=>Me.id===q.movieId)>=u.current.length-15&&T(),(ve=d.current)==null||ve.updateFocus()};const $=I=>{var J,q;console.log("NAVIGATING TO:",I.type,I.type==="details"?((J=I.movie)==null?void 0:J.title)||((q=I.movie)==null?void 0:q.name):""),a(ve=>{const _e=[...ve],Me={..._e[_e.length-1]},k={};for(const ne of m.current.allPanels)k[ne.id]={scrollX:ne.scrollX,scrollY:ne.scrollY,targetScrollX:ne.targetScrollX,targetScrollY:ne.targetScrollY};return Me.scrollStates=k,Me.focusLabel=m.current.focused.label,_e[_e.length-1]=Me,_e.push(I),_e})},F=()=>{if(M){A(null);return}a(I=>{if(I.length<=1)return I;const J=[...I];return J.pop(),J})};window.navigateBack=F;const Z=()=>{var J;const I=m.current.focused.content;if(console.log("SELECT on:",I.kind,"label:",m.current.focused.label),I.kind==="text"&&I.action==="play_server"&&f.type==="details"){const q=I.payload,_e=(J=rl(f.movie.id,po(f.movie)==="tv"?"tv":"movie",f.season,f.episode)[q])==null?void 0:J.url;_e&&A({url:_e});return}if(I.kind==="text"&&I.action){if(I.action==="home")h("all"),$({type:"home"});else if(I.action==="setFilter")h(I.payload),f.type!=="home"&&$({type:"home"});else if(I.action==="person"){const q=I.payload;$({type:"person",personId:q.id,personName:q.name})}else if(I.action==="genre"){const q=I.payload;$({type:"genre",genreId:q.id,genreName:q.name,mediaType:q.mediaType})}else if(I.action==="year"){const q=I.payload;$({type:"year",year:q.year,mediaType:q.mediaType})}else if(I.action!=="play_server"){if(I.action==="change_season"&&f.type==="details"){const q=I.payload;ft.tvSeason(f.movie.id,q).then(ve=>{a(_e=>{const Me=[..._e],k=Me[Me.length-1];return k.type==="details"&&k.movie.id===f.movie.id?(Me[Me.length-1]={...k,season:q,episodesData:ve.episodes,episode:1},Me):_e})}).catch(ve=>console.error("CHANGE_SEASON TMDB ERROR:",ve))}else if(I.action==="change_episode"&&f.type==="details"){const q=I.payload;a(ve=>{const _e=[...ve],Me=_e[_e.length-1];return Me.type==="details"&&Me.movie.id===f.movie.id?(_e[_e.length-1]={...Me,episode:q},_e):ve})}}}else(I.kind==="poster"||I.kind==="backdrop")&&$({type:"details",movie:I.movie})},B=()=>{const I=w.clientWidth||window.innerWidth,J=w.clientHeight||window.innerHeight;d.current&&d.current.dispose();const q=kc(I,J,s,f,f.dynamicData||null,c);m.current=new zc(q),d.current=new yu(w,q,m.current),window.engine=m.current};S.current&&S.current.detach(),S.current=new Gw({onNavigate:I=>m.current.handleInput(I),onSelect:Z,onBack:F,onRegenerate:B}),S.current.attach();let L;const V=()=>{window.clearTimeout(L),L=window.setTimeout(()=>{const I=w.clientWidth||window.innerWidth,J=w.clientHeight||window.innerHeight;d.current&&d.current.dispose();const q=kc(I,J,s,f,f.dynamicData||null,c);m.current=new zc(q),d.current=new yu(w,q,m.current)},200)};return window.addEventListener("resize",V),()=>{window.removeEventListener("resize",V),window.clearTimeout(L)}},[s,f,c]),e?nt.jsx("div",{className:"w-screen h-screen flex items-center justify-center bg-[#05070d] text-slate-100",children:nt.jsxs("div",{className:"text-center",children:[nt.jsx("div",{className:"inline-block w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4"}),nt.jsx("div",{className:"text-lg font-semibold text-amber-300",children:"CineDeck"}),nt.jsx("div",{className:"text-sm text-slate-400 mt-1",children:"Loading movies & TV shows..."})]})}):i?nt.jsx("div",{className:"w-screen h-screen flex items-center justify-center bg-[#05070d] text-slate-100",children:nt.jsxs("div",{className:"text-center max-w-md",children:[nt.jsx("div",{className:"text-rose-400 text-lg font-semibold mb-2",children:"Couldn't load movie data"}),nt.jsx("div",{className:"text-sm text-slate-400",children:i})]})}):nt.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#05070d] text-slate-100 select-none outline-none",tabIndex:0,autoFocus:!0,ref:w=>{w&&w.focus()},children:[nt.jsx("div",{ref:t,className:"absolute inset-0"}),nt.jsx("div",{className:"absolute bottom-4 right-6 z-50 text-slate-500/50 text-xs font-mono pointer-events-none",children:"v2.8.0"}),f.type==="details"&&!M&&(()=>{const w=rl(f.movie.id,po(f.movie),f.season,f.episode);return nt.jsx("div",{className:"absolute inset-0 pointer-events-none z-40 overflow-hidden",children:w.map((g,C)=>nt.jsx("div",{id:`server-iframe-${C}`,className:"absolute shadow-2xl bg-black overflow-hidden",style:{display:"none"},children:nt.jsx("iframe",{src:`${g.url}?autoplay=1`,className:"w-full h-full border-none pointer-events-none",allow:"autoplay; encrypted-media; fullscreen",title:`Server ${C+1}`,referrerPolicy:"no-referrer"})},g.url))})})(),M&&nt.jsxs("div",{className:"absolute inset-0 z-50 bg-black",children:[nt.jsx("div",{className:"absolute top-4 left-6 z-10 text-slate-400 text-sm font-mono pointer-events-none",children:"Hold OK to exit"}),nt.jsx("iframe",{src:`${M.url}?autoplay=1`,className:"w-full h-full border-none",allowFullScreen:!0,allow:"autoplay; encrypted-media; fullscreen",title:"Player",referrerPolicy:"no-referrer"},M.url)]}),f.type==="player"&&!M&&(()=>{const w=rl(f.movie.id,po(f.movie),f.season,f.episode)[f.serverIndex];return nt.jsxs("div",{className:"absolute inset-0 z-50 bg-black",children:[nt.jsx("div",{className:"absolute top-4 left-6 text-slate-400 text-sm font-mono pointer-events-none",children:"Hold OK to go back"}),nt.jsx("iframe",{src:`${w.url}?autoplay=1&autoplay=true`,className:"w-full h-full border-none",allowFullScreen:!0,allow:"autoplay; encrypted-media; fullscreen",title:"Player",referrerPolicy:"no-referrer"},w.url)]})})()]})}function Sn(t){return t?t.filter(e=>e&&(e.title||e.name)&&e.poster_path&&e.backdrop_path):[]}function Xw(){const t=()=>{document.documentElement.requestFullscreen().catch(e=>{console.error("Failed to enter fullscreen:",e)})};return je.useEffect(()=>{const e=n=>{n.key==="Enter"&&t()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),nt.jsxs("div",{className:"fixed inset-0 bg-[#0a1120] flex flex-col items-center justify-center text-white cursor-pointer",onClick:t,children:[nt.jsx("h1",{className:"text-5xl font-bold mb-4 text-red-600 tracking-widest",children:"NETFLIX"}),nt.jsx("p",{className:"text-xl text-slate-400 mb-10 font-mono",children:"This app is designed for TV and requires Fullscreen mode."}),nt.jsx("button",{className:"px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-2xl transition-colors shadow-2xl",children:"Press OK to Start"})]})}function Yw(){const[t,e]=je.useState(!!document.fullscreenElement);return je.useEffect(()=>{const n=()=>e(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",n),()=>document.removeEventListener("fullscreenchange",n)},[]),t?nt.jsx(Ww,{}):nt.jsx(Xw,{})}J0(document.getElementById("root")).render(nt.jsx(je.StrictMode,{children:nt.jsx(Yw,{})}));
