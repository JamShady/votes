(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ra(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function aa(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?ks(r):aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ie(e))return e;if(G(e))return e}}const xs=/;(?![^(]*\))/g,_s=/:([^]+)/,ws=/\/\*.*?\*\//gs;function ks(e){const t={};return e.replace(ws,"").split(xs).forEach(n=>{if(n){const r=n.split(_s);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Te(e){let t="";if(ie(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Te(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const As="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Os=ra(As);function Vi(e){return!!e||e===""}const Ye=e=>ie(e)?e:e==null?"":R(e)||G(e)&&(e.toString===Xi||!j(e.toString))?JSON.stringify(e,Yi,2):String(e),Yi=(e,t)=>t&&t.__v_isRef?Yi(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ki(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!Ji(t)?String(t):t,q={},It=[],Fe=()=>{},Es=()=>!1,Cs=/^on[^a-z]/,rr=e=>Cs.test(e),ia=e=>e.startsWith("onUpdate:"),ye=Object.assign,oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ps=Object.prototype.hasOwnProperty,H=(e,t)=>Ps.call(e,t),R=Array.isArray,Tt=e=>ar(e)==="[object Map]",Ki=e=>ar(e)==="[object Set]",j=e=>typeof e=="function",ie=e=>typeof e=="string",sa=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",qi=e=>G(e)&&j(e.then)&&j(e.catch),Xi=Object.prototype.toString,ar=e=>Xi.call(e),Ss=e=>ar(e).slice(8,-1),Ji=e=>ar(e)==="[object Object]",la=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Is=/-(\w)/g,Rt=ir(e=>e.replace(Is,(t,n)=>n?n.toUpperCase():"")),Ts=/\B([A-Z])/g,Ht=ir(e=>e.replace(Ts,"-$1").toLowerCase()),Gi=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=ir(e=>e?`on${Gi(e)}`:""),an=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ba;const Ns=()=>Ba||(Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ze;class Ms{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Fs(e,t=ze){t&&t.active&&t.effects.push(e)}const fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zi=e=>(e.w&at)>0,Qi=e=>(e.n&at)>0,$s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=at},Rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Zi(a)&&!Qi(a)?a.delete(e):t[n++]=a,a.w&=~at,a.n&=~at}t.length=n}},Nr=new WeakMap;let Xt=0,at=1;const Mr=30;let Se;const _t=Symbol(""),Fr=Symbol("");class ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fs(this,r)}run(){if(!this.active)return this.fn();let t=Se,n=nt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Se,Se=this,nt=!0,at=1<<++Xt,Xt<=Mr?$s(this):Wa(this),this.fn()}finally{Xt<=Mr&&Rs(this),at=1<<--Xt,Se=this.parent,nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(Wa(this),this.onStop&&this.onStop(),this.active=!1)}}function Wa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let nt=!0;const eo=[];function Ut(){eo.push(nt),nt=!1}function Bt(){const e=eo.pop();nt=e===void 0?!0:e}function Ae(e,t,n){if(nt&&Se){let r=Nr.get(e);r||Nr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=fa()),to(a)}}function to(e,t){let n=!1;Xt<=Mr?Qi(e)||(e.n|=at,n=!Zi(e)):n=!e.has(Se),n&&(e.add(Se),Se.deps.push(e))}function Ke(e,t,n,r,a,i){const o=Nr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Kn(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?la(n)&&s.push(o.get("length")):(s.push(o.get(_t)),Tt(e)&&s.push(o.get(Fr)));break;case"delete":R(e)||(s.push(o.get(_t)),Tt(e)&&s.push(o.get(Fr)));break;case"set":Tt(e)&&s.push(o.get(_t));break}if(s.length===1)s[0]&&$r(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);$r(fa(l))}}function $r(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Va(r);for(const r of n)r.computed||Va(r)}function Va(e,t){(e!==Se||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ls=ra("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sa)),js=ua(),zs=ua(!1,!0),Ds=ua(!0),Ya=Hs();function Hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=W(this)[t].apply(this,n);return Bt(),r}}),e}function ua(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?rl:so:t?oo:io).get(r))return r;const o=R(r);if(!e&&o&&H(Ya,a))return Reflect.get(Ya,a,i);const s=Reflect.get(r,a,i);return(sa(a)?no.has(a):Ls(a))||(e||Ae(r,"get",a),t)?s:me(s)?o&&la(a)?s:s.value:G(s)?e?lo(s):pa(s):s}}const Us=ro(),Bs=ro(!0);function ro(e=!1){return function(n,r,a,i){let o=n[r];if(Lt(o)&&me(o)&&!me(a))return!1;if(!e&&(!qn(a)&&!Lt(a)&&(o=W(o),a=W(a)),!R(n)&&me(o)&&!me(a)))return o.value=a,!0;const s=R(n)&&la(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(s?an(a,o)&&Ke(n,"set",r,a):Ke(n,"add",r,a)),l}}function Ws(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ke(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!sa(t)||!no.has(t))&&Ae(e,"has",t),n}function Ys(e){return Ae(e,"iterate",R(e)?"length":_t),Reflect.ownKeys(e)}const ao={get:js,set:Us,deleteProperty:Ws,has:Vs,ownKeys:Ys},Ks={get:Ds,set(e,t){return!0},deleteProperty(e,t){return!0}},qs=ye({},ao,{get:zs,set:Bs}),da=e=>e,or=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=or(a),s=r?da:n?ga:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function En(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Cn(e,t=!1){return e=e.__v_raw,!t&&Ae(W(e),"iterate",_t),Reflect.get(e,"size",e)}function Ka(e){e=W(e);const t=W(this);return or(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function qa(e,t){t=W(t);const n=W(this),{has:r,get:a}=or(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?an(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Xa(e){const t=W(this),{has:n,get:r}=or(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function Ja(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function Pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?da:e?ga:on;return!e&&Ae(s,"iterate",_t),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Sn(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=Tt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?da:t?ga:on;return!t&&Ae(i,"iterate",l?Fr:_t),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:this}}function Xs(){const e={get(i){return On(this,i)},get size(){return Cn(this)},has:En,add:Ka,set:qa,delete:Xa,clear:Ja,forEach:Pn(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Cn(this)},has:En,add:Ka,set:qa,delete:Xa,clear:Ja,forEach:Pn(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Cn(this,!0)},has(i){return En.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Pn(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Cn(this,!0)},has(i){return En.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Sn(i,!1,!1),n[i]=Sn(i,!0,!1),t[i]=Sn(i,!1,!0),r[i]=Sn(i,!0,!0)}),[e,n,t,r]}const[Js,Gs,Zs,Qs]=Xs();function ma(e,t){const n=t?e?Qs:Zs:e?Gs:Js;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const el={get:ma(!1,!1)},tl={get:ma(!1,!0)},nl={get:ma(!0,!1)},io=new WeakMap,oo=new WeakMap,so=new WeakMap,rl=new WeakMap;function al(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function il(e){return e.__v_skip||!Object.isExtensible(e)?0:al(Ss(e))}function pa(e){return Lt(e)?e:ha(e,!1,ao,el,io)}function ol(e){return ha(e,!1,qs,tl,oo)}function lo(e){return ha(e,!0,Ks,nl,so)}function ha(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=il(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Nt(e){return Lt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function qn(e){return!!(e&&e.__v_isShallow)}function fo(e){return Nt(e)||Lt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function co(e){return Yn(e,"__v_skip",!0),e}const on=e=>G(e)?pa(e):e,ga=e=>G(e)?lo(e):e;function uo(e){nt&&Se&&(e=W(e),to(e.dep||(e.dep=fa())))}function mo(e,t){e=W(e),e.dep&&$r(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function Rr(e){return sl(e,!1)}function sl(e,t){return me(e)?e:new ll(e,t)}class ll{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:on(t)}get value(){return uo(this),this._value}set value(t){const n=this.__v_isShallow||qn(t)||Lt(t);t=n?t:W(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),mo(this))}}function re(e){return me(e)?e.value:e}const fl={get:(e,t,n)=>re(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return Nt(e)?e:new Proxy(e,fl)}class cl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function sn(e,t,n){const r=e[t];return me(r)?r:new cl(e,t,n)}var ho;class ul{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ho]=!1,this._dirty=!0,this.effect=new ca(t,()=>{this._dirty||(this._dirty=!0,mo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return uo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ho="__v_isReadonly";function dl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new ul(r,a,i||!a,n)}function rt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){sr(i,t,n)}return a}function $e(e,t,n,r){if(j(e)){const i=rt(e,t,n,r);return i&&qi(i)&&i.catch(o=>{sr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push($e(e[i],t,n,r));return a}function sr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){rt(l,null,10,[e,o,s]);return}}ml(e,n,a,r)}function ml(e,t,n,r=!0){console.error(e)}let ln=!1,Lr=!1;const pe=[];let He=0;const Mt=[];let Ve=null,ht=0;const go=Promise.resolve();let va=null;function pl(e){const t=va||go;return e?t.then(this?e.bind(this):e):t}function hl(e){let t=He+1,n=pe.length;for(;t<n;){const r=t+n>>>1;fn(pe[r])<e?t=r+1:n=r}return t}function ba(e){(!pe.length||!pe.includes(e,ln&&e.allowRecurse?He+1:He))&&(e.id==null?pe.push(e):pe.splice(hl(e.id),0,e),vo())}function vo(){!ln&&!Lr&&(Lr=!0,va=go.then(yo))}function gl(e){const t=pe.indexOf(e);t>He&&pe.splice(t,1)}function vl(e){R(e)?Mt.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?ht+1:ht))&&Mt.push(e),vo()}function Ga(e,t=ln?He+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function bo(e){if(Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>fn(n)-fn(r)),ht=0;ht<Ve.length;ht++)Ve[ht]();Ve=null,ht=0}}const fn=e=>e.id==null?1/0:e.id,bl=(e,t)=>{const n=fn(e)-fn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yo(e){Lr=!1,ln=!0,pe.sort(bl);const t=Fe;try{for(He=0;He<pe.length;He++){const n=pe[He];n&&n.active!==!1&&rt(n,null,14)}}finally{He=0,pe.length=0,bo(),ln=!1,va=null,(pe.length||Mt.length)&&yo()}}function yl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||q;h&&(a=n.map(A=>ie(A)?A.trim():A)),m&&(a=n.map(Kn))}let s,l=r[s=_r(t)]||r[s=_r(Rt(t))];!l&&i&&(l=r[s=_r(Ht(t))]),l&&$e(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,$e(c,e,6,a)}}function xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const u=xo(c,t,!0);u&&(s=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ye(o,i),G(e)&&r.set(e,o),o)}function lr(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ht(t))||H(e,t))}let be=null,_o=null;function Xn(e){const t=be;return be=e,_o=e&&e.type.__scopeId||null,t}function fe(e,t=be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ii(-1);const i=Xn(t);let o;try{o=e(...a)}finally{Xn(i),r._d&&ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:A,ctx:F,inheritAttrs:T}=e;let U,w;const C=Xn(e);try{if(n.shapeFlag&4){const P=a||r;U=De(u.call(P,P,m,i,A,h,F)),w=l}else{const P=t;U=De(P.length>1?P(i,{attrs:l,slots:s,emit:c}):P(i,null)),w=t.props?l:xl(l)}}catch(P){en.length=0,sr(P,e,1),U=B(it)}let b=U;if(w&&T!==!1){const P=Object.keys(w),{shapeFlag:L}=b;P.length&&L&7&&(o&&P.some(ia)&&(w=_l(w,o)),b=jt(b,w))}return n.dirs&&(b=jt(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),U=b,Xn(C),U}const xl=e=>{let t;for(const n in e)(n==="class"||n==="style"||rr(n))&&((t||(t={}))[n]=e[n]);return t},_l=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Za(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!lr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Za(r,o,c):!0:!!o;return!1}function Za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!lr(n,i))return!0}return!1}function kl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Al=e=>e.__isSuspense;function Ol(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):vl(e)}function El(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=he||be;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const In={};function Gt(e,t,n){return wo(e,t,n)}function wo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=he;let l,c=!1,u=!1;if(me(e)?(l=()=>e.value,c=qn(e)):Nt(e)?(l=()=>e,r=!0):R(e)?(u=!0,c=e.some(b=>Nt(b)||qn(b)),l=()=>e.map(b=>{if(me(b))return b.value;if(Nt(b))return bt(b);if(j(b))return rt(b,s,2)})):j(e)?t?l=()=>rt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),$e(e,s,3,[h])}:l=Fe,t&&r){const b=l;l=()=>bt(b())}let m,h=b=>{m=w.onStop=()=>{rt(b,s,4)}},A;if(un)if(h=Fe,t?n&&$e(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const b=vf();A=b.__watcherHandles||(b.__watcherHandles=[])}else return Fe;let F=u?new Array(e.length).fill(In):In;const T=()=>{if(!!w.active)if(t){const b=w.run();(r||c||(u?b.some((P,L)=>an(P,F[L])):an(b,F)))&&(m&&m(),$e(t,s,3,[b,F===In?void 0:u&&F[0]===In?[]:F,h]),F=b)}else w.run()};T.allowRecurse=!!t;let U;a==="sync"?U=T:a==="post"?U=()=>_e(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),U=()=>ba(T));const w=new ca(l,U);t?n?T():F=w.run():a==="post"?_e(w.run.bind(w),s&&s.suspense):w.run();const C=()=>{w.stop(),s&&s.scope&&oa(s.scope.effects,w)};return A&&A.push(C),C}function Cl(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?ko(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=he;zt(this);const s=wo(a,i.bind(r),n);return o?zt(o):wt(),s}function ko(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))bt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Ki(e)||Tt(e))e.forEach(n=>{bt(n,t)});else if(Ji(e))for(const n in e)bt(e[n],t);return e}function ce(e){return j(e)?{setup:e,name:e.name}:e}const Zt=e=>!!e.type.__asyncLoader,Ao=e=>e.type.__isKeepAlive;function Pl(e,t){Oo(e,"a",t)}function Sl(e,t){Oo(e,"da",t)}function Oo(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(fr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ao(a.parent.vnode)&&Il(r,t,n,a),a=a.parent}}function Il(e,t,n,r){const a=fr(t,e,r,!0);Co(()=>{oa(r[t],a)},n)}function fr(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),zt(n);const s=$e(t,n,e,o);return wt(),Bt(),s});return r?a.unshift(i):a.push(i),i}}const Ge=e=>(t,n=he)=>(!un||e==="sp")&&fr(e,(...r)=>t(...r),n),Tl=Ge("bm"),Eo=Ge("m"),Nl=Ge("bu"),Ml=Ge("u"),Fl=Ge("bum"),Co=Ge("um"),$l=Ge("sp"),Rl=Ge("rtg"),Ll=Ge("rtc");function jl(e,t=he){fr("ec",e,t)}function zl(e,t){const n=be;if(n===null)return e;const r=dr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=q]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&bt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ut(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),$e(l,n,8,[e.el,s,e,t]),Bt())}}const Dl=Symbol();function gt(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ie(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function kr(e,t,n={},r,a){if(be.isCE||be.parent&&Zt(be.parent)&&be.parent.isCE)return t!=="default"&&(n.name=t),B("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),z();const o=i&&Po(i(n)),s=de(ae,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Po(e){return e.some(t=>Gn(t)?!(t.type===it||t.type===ae&&!Po(t.children)):!0)?e:null}const jr=e=>e?zo(e)?dr(e)||e.proxy:jr(e.parent):null,Qt=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>ya(e),$forceUpdate:e=>e.f||(e.f=()=>ba(e.update)),$nextTick:e=>e.n||(e.n=pl.bind(e.proxy)),$watch:e=>Cl.bind(e)}),Ar=(e,t)=>e!==q&&!e.__isScriptSetup&&H(e,t),Hl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(a!==q&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==q&&H(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const u=Qt[t];let m,h;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&H(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ar(a,t)?(a[t]=n,!0):r!==q&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&H(e,o)||Ar(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Qt,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let zr=!0;function Ul(e){const t=ya(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:A,updated:F,activated:T,deactivated:U,beforeDestroy:w,beforeUnmount:C,destroyed:b,unmounted:P,render:L,renderTracked:se,renderTriggered:le,errorCaptured:ue,serverPrefetch:Ee,expose:Be,inheritAttrs:Yt,components:_n,directives:wn,filters:br}=t;if(c&&Bl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Y=o[Z];j(Y)&&(r[Z]=Y.bind(n))}if(a){const Z=a.call(n,n);G(Z)&&(e.data=pa(Z))}if(zr=!0,i)for(const Z in i){const Y=i[Z],ft=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Fe,kn=!j(Y)&&j(Y.set)?Y.set.bind(n):Fe,ct=ne({get:ft,set:kn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Re=>ct.value=Re})}if(s)for(const Z in s)So(s[Z],r,n,Z);if(l){const Z=j(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Y=>{El(Y,Z[Y])})}u&&Qa(u,e,"c");function ge(Z,Y){R(Y)?Y.forEach(ft=>Z(ft.bind(n))):Y&&Z(Y.bind(n))}if(ge(Tl,m),ge(Eo,h),ge(Nl,A),ge(Ml,F),ge(Pl,T),ge(Sl,U),ge(jl,ue),ge(Ll,se),ge(Rl,le),ge(Fl,C),ge(Co,P),ge($l,Ee),R(Be))if(Be.length){const Z=e.exposed||(e.exposed={});Be.forEach(Y=>{Object.defineProperty(Z,Y,{get:()=>n[Y],set:ft=>n[Y]=ft})})}else e.exposed||(e.exposed={});L&&e.render===Fe&&(e.render=L),Yt!=null&&(e.inheritAttrs=Yt),_n&&(e.components=_n),wn&&(e.directives=wn)}function Bl(e,t,n=Fe,r=!1){R(e)&&(e=Dr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Un(i.from||a,i.default,!0):o=Un(i.from||a):o=Un(i),me(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Qa(e,t,n){$e(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function So(e,t,n,r){const a=r.includes(".")?ko(n,r):()=>n[r];if(ie(e)){const i=t[e];j(i)&&Gt(a,i)}else if(j(e))Gt(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>So(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Gt(a,i,e)}}function ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Jn(l,c,o,!0)),Jn(l,t,o)),G(t)&&i.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Jn(e,i,n,!0),a&&a.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Wl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Wl={data:ei,props:pt,emits:pt,methods:pt,computed:pt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:pt,directives:pt,watch:Yl,provide:ei,inject:Vl};function ei(e,t){return t?e?function(){return ye(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Vl(e,t){return pt(Dr(e),Dr(t))}function Dr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function pt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Kl(e,t,n,r=!1){const a={},i={};Yn(i,ur,1),e.propsDefaults=Object.create(null),Io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ol(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ql(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(lr(e.emitsOptions,h))continue;const A=t[h];if(l)if(H(i,h))A!==i[h]&&(i[h]=A,c=!0);else{const F=Rt(h);a[F]=Hr(l,s,F,A,e,!1)}else A!==i[h]&&(i[h]=A,c=!0)}}}else{Io(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!H(t,m)&&((u=Ht(m))===m||!H(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Hr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m)&&!0)&&(delete i[m],c=!0)}c&&Ke(e,"set","$attrs")}function Io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dn(l))continue;const c=t[l];let u;a&&H(a,u=Rt(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:lr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Hr(a,l,m,c[m],e,!H(c,m))}}return o}function Hr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(zt(a),r=c[n]=l.call(null,t),wt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function To(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const u=m=>{l=!0;const[h,A]=To(m,t,!0);ye(o,h),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,It),It;if(R(i))for(let u=0;u<i.length;u++){const m=Rt(i[u]);ti(m)&&(o[m]=q)}else if(i)for(const u in i){const m=Rt(u);if(ti(m)){const h=i[u],A=o[m]=R(h)||j(h)?{type:h}:Object.assign({},h);if(A){const F=ai(Boolean,A.type),T=ai(String,A.type);A[0]=F>-1,A[1]=T<0||F<T,(F>-1||H(A,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function ti(e){return e[0]!=="$"}function ni(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ri(e,t){return ni(e)===ni(t)}function ai(e,t){return R(t)?t.findIndex(n=>ri(n,e)):j(t)&&ri(t,e)?0:-1}const No=e=>e[0]==="_"||e==="$stable",xa=e=>R(e)?e.map(De):[De(e)],Xl=(e,t,n)=>{if(t._n)return t;const r=fe((...a)=>xa(t(...a)),n);return r._c=!1,r},Mo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(No(a))continue;const i=e[a];if(j(i))t[a]=Xl(a,i,r);else if(i!=null){const o=xa(i);t[a]=()=>o}}},Fo=(e,t)=>{const n=xa(t);e.slots.default=()=>n},Jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Yn(t,"_",n)):Mo(t,e.slots={})}else e.slots={},t&&Fo(e,t);Yn(e.slots,ur,1)},Gl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Mo(t,a)),o=t}else t&&(Fo(e,t),o={default:1});if(i)for(const s in a)!No(s)&&!(s in o)&&delete a[s]};function $o(){return{app:null,config:{isNativeTag:Es,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zl=0;function Ql(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=$o(),o=new Set;let s=!1;const l=i.app={_uid:Zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=B(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,dr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Ur(e,t,n,r,a=!1){if(R(e)){e.forEach((h,A)=>Ur(h,t&&(R(t)?t[A]:t),n,r,a));return}if(Zt(r)&&!a)return;const i=r.shapeFlag&4?dr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ie(c)?(u[c]=null,H(m,c)&&(m[c]=null)):me(c)&&(c.value=null)),j(l))rt(l,s,12,[o,u]);else{const h=ie(l),A=me(l);if(h||A){const F=()=>{if(e.f){const T=h?H(m,l)?m[l]:u[l]:l.value;a?R(T)&&oa(T,i):R(T)?T.includes(i)||T.push(i):h?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,H(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,_e(F,n)):F()}}}const _e=Ol;function ef(e){return tf(e)}function tf(e,t){const n=Ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:A=Fe,insertStaticContent:F}=e,T=(f,d,p,v=null,g=null,_=null,O=!1,x=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!qt(f,d)&&(v=An(f),Re(f,g,_,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case cr:U(f,d,p,v);break;case it:w(f,d,p,v);break;case Or:f==null&&C(d,p,v,O);break;case ae:_n(f,d,p,v,g,_,O,x,k);break;default:S&1?L(f,d,p,v,g,_,O,x,k):S&6?wn(f,d,p,v,g,_,O,x,k):(S&64||S&128)&&y.process(f,d,p,v,g,_,O,x,k,Ot)}N!=null&&g&&Ur(N,f&&f.ref,_,d||f,!d)},U=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},C=(f,d,p,v)=>{[f.el,f.anchor]=F(f.children,d,p,v,f.el,f.anchor)},b=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},P=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},L=(f,d,p,v,g,_,O,x,k)=>{O=O||d.type==="svg",f==null?se(d,p,v,g,_,O,x,k):Ee(f,d,g,_,O,x,k)},se=(f,d,p,v,g,_,O,x)=>{let k,y;const{type:N,props:S,shapeFlag:M,transition:$,dirs:D}=f;if(k=f.el=o(f.type,_,S&&S.is,S),M&8?u(k,f.children):M&16&&ue(f.children,k,null,v,g,_&&N!=="foreignObject",O,x),D&&ut(f,null,v,"created"),S){for(const V in S)V!=="value"&&!Dn(V)&&i(k,V,null,S[V],_,f.children,v,g,We);"value"in S&&i(k,"value",null,S.value),(y=S.onVnodeBeforeMount)&&je(y,v,f)}le(k,f,f.scopeId,O,v),D&&ut(f,null,v,"beforeMount");const K=(!g||g&&!g.pendingBranch)&&$&&!$.persisted;K&&$.beforeEnter(k),r(k,d,p),((y=S&&S.onVnodeMounted)||K||D)&&_e(()=>{y&&je(y,v,f),K&&$.enter(k),D&&ut(f,null,v,"mounted")},g)},le=(f,d,p,v,g)=>{if(p&&A(f,p),v)for(let _=0;_<v.length;_++)A(f,v[_]);if(g){let _=g.subTree;if(d===_){const O=g.vnode;le(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},ue=(f,d,p,v,g,_,O,x,k=0)=>{for(let y=k;y<f.length;y++){const N=f[y]=x?tt(f[y]):De(f[y]);T(null,N,d,p,v,g,_,O,x)}},Ee=(f,d,p,v,g,_,O)=>{const x=d.el=f.el;let{patchFlag:k,dynamicChildren:y,dirs:N}=d;k|=f.patchFlag&16;const S=f.props||q,M=d.props||q;let $;p&&dt(p,!1),($=M.onVnodeBeforeUpdate)&&je($,p,d,f),N&&ut(d,f,p,"beforeUpdate"),p&&dt(p,!0);const D=g&&d.type!=="foreignObject";if(y?Be(f.dynamicChildren,y,x,p,v,D,_):O||Y(f,d,x,null,p,v,D,_,!1),k>0){if(k&16)Yt(x,d,S,M,p,v,g);else if(k&2&&S.class!==M.class&&i(x,"class",null,M.class,g),k&4&&i(x,"style",S.style,M.style,g),k&8){const K=d.dynamicProps;for(let V=0;V<K.length;V++){const ee=K[V],Pe=S[ee],Et=M[ee];(Et!==Pe||ee==="value")&&i(x,ee,Pe,Et,g,f.children,p,v,We)}}k&1&&f.children!==d.children&&u(x,d.children)}else!O&&y==null&&Yt(x,d,S,M,p,v,g);(($=M.onVnodeUpdated)||N)&&_e(()=>{$&&je($,p,d,f),N&&ut(d,f,p,"updated")},v)},Be=(f,d,p,v,g,_,O)=>{for(let x=0;x<d.length;x++){const k=f[x],y=d[x],N=k.el&&(k.type===ae||!qt(k,y)||k.shapeFlag&70)?m(k.el):p;T(k,y,N,null,v,g,_,O,!0)}},Yt=(f,d,p,v,g,_,O)=>{if(p!==v){if(p!==q)for(const x in p)!Dn(x)&&!(x in v)&&i(f,x,p[x],null,O,d.children,g,_,We);for(const x in v){if(Dn(x))continue;const k=v[x],y=p[x];k!==y&&x!=="value"&&i(f,x,y,k,O,d.children,g,_,We)}"value"in v&&i(f,"value",p.value,v.value)}},_n=(f,d,p,v,g,_,O,x,k)=>{const y=d.el=f?f.el:s(""),N=d.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:$}=d;$&&(x=x?x.concat($):$),f==null?(r(y,p,v),r(N,p,v),ue(d.children,p,N,g,_,O,x,k)):S>0&&S&64&&M&&f.dynamicChildren?(Be(f.dynamicChildren,M,p,g,_,O,x),(d.key!=null||g&&d===g.subTree)&&Ro(f,d,!0)):Y(f,d,p,N,g,_,O,x,k)},wn=(f,d,p,v,g,_,O,x,k)=>{d.slotScopeIds=x,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,O,k):br(d,p,v,g,_,O,k):La(f,d,k)},br=(f,d,p,v,g,_,O)=>{const x=f.component=cf(f,v,g);if(Ao(f)&&(x.ctx.renderer=Ot),uf(x),x.asyncDep){if(g&&g.registerDep(x,ge),!f.el){const k=x.subTree=B(it);w(null,k,d,p)}return}ge(x,f,d,p,g,_,O)},La=(f,d,p)=>{const v=d.component=f.component;if(wl(f,d,p))if(v.asyncDep&&!v.asyncResolved){Z(v,d,p);return}else v.next=d,gl(v.update),v.update();else d.el=f.el,v.vnode=d},ge=(f,d,p,v,g,_,O)=>{const x=()=>{if(f.isMounted){let{next:N,bu:S,u:M,parent:$,vnode:D}=f,K=N,V;dt(f,!1),N?(N.el=D.el,Z(f,N,O)):N=D,S&&Hn(S),(V=N.props&&N.props.onVnodeBeforeUpdate)&&je(V,$,N,D),dt(f,!0);const ee=wr(f),Pe=f.subTree;f.subTree=ee,T(Pe,ee,m(Pe.el),An(Pe),f,g,_),N.el=ee.el,K===null&&kl(f,ee.el),M&&_e(M,g),(V=N.props&&N.props.onVnodeUpdated)&&_e(()=>je(V,$,N,D),g)}else{let N;const{el:S,props:M}=d,{bm:$,m:D,parent:K}=f,V=Zt(d);if(dt(f,!1),$&&Hn($),!V&&(N=M&&M.onVnodeBeforeMount)&&je(N,K,d),dt(f,!0),S&&xr){const ee=()=>{f.subTree=wr(f),xr(S,f.subTree,f,g,null)};V?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=wr(f);T(null,ee,p,v,f,g,_),d.el=ee.el}if(D&&_e(D,g),!V&&(N=M&&M.onVnodeMounted)){const ee=d;_e(()=>je(N,K,ee),g)}(d.shapeFlag&256||K&&Zt(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&_e(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new ca(x,()=>ba(y),f.scope),y=f.update=()=>k.run();y.id=f.uid,dt(f,!0),y()},Z=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,ql(f,d.props,v,p),Gl(f,d.children,p),Ut(),Ga(),Bt()},Y=(f,d,p,v,g,_,O,x,k=!1)=>{const y=f&&f.children,N=f?f.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:$}=d;if(M>0){if(M&128){kn(y,S,p,v,g,_,O,x,k);return}else if(M&256){ft(y,S,p,v,g,_,O,x,k);return}}$&8?(N&16&&We(y,g,_),S!==y&&u(p,S)):N&16?$&16?kn(y,S,p,v,g,_,O,x,k):We(y,g,_,!0):(N&8&&u(p,""),$&16&&ue(S,p,v,g,_,O,x,k))},ft=(f,d,p,v,g,_,O,x,k)=>{f=f||It,d=d||It;const y=f.length,N=d.length,S=Math.min(y,N);let M;for(M=0;M<S;M++){const $=d[M]=k?tt(d[M]):De(d[M]);T(f[M],$,p,null,g,_,O,x,k)}y>N?We(f,g,_,!0,!1,S):ue(d,p,v,g,_,O,x,k,S)},kn=(f,d,p,v,g,_,O,x,k)=>{let y=0;const N=d.length;let S=f.length-1,M=N-1;for(;y<=S&&y<=M;){const $=f[y],D=d[y]=k?tt(d[y]):De(d[y]);if(qt($,D))T($,D,p,null,g,_,O,x,k);else break;y++}for(;y<=S&&y<=M;){const $=f[S],D=d[M]=k?tt(d[M]):De(d[M]);if(qt($,D))T($,D,p,null,g,_,O,x,k);else break;S--,M--}if(y>S){if(y<=M){const $=M+1,D=$<N?d[$].el:v;for(;y<=M;)T(null,d[y]=k?tt(d[y]):De(d[y]),p,D,g,_,O,x,k),y++}}else if(y>M)for(;y<=S;)Re(f[y],g,_,!0),y++;else{const $=y,D=y,K=new Map;for(y=D;y<=M;y++){const we=d[y]=k?tt(d[y]):De(d[y]);we.key!=null&&K.set(we.key,y)}let V,ee=0;const Pe=M-D+1;let Et=!1,Da=0;const Kt=new Array(Pe);for(y=0;y<Pe;y++)Kt[y]=0;for(y=$;y<=S;y++){const we=f[y];if(ee>=Pe){Re(we,g,_,!0);continue}let Le;if(we.key!=null)Le=K.get(we.key);else for(V=D;V<=M;V++)if(Kt[V-D]===0&&qt(we,d[V])){Le=V;break}Le===void 0?Re(we,g,_,!0):(Kt[Le-D]=y+1,Le>=Da?Da=Le:Et=!0,T(we,d[Le],p,null,g,_,O,x,k),ee++)}const Ha=Et?nf(Kt):It;for(V=Ha.length-1,y=Pe-1;y>=0;y--){const we=D+y,Le=d[we],Ua=we+1<N?d[we+1].el:v;Kt[y]===0?T(null,Le,p,Ua,g,_,O,x,k):Et&&(V<0||y!==Ha[V]?ct(Le,p,Ua,2):V--)}}},ct=(f,d,p,v,g=null)=>{const{el:_,type:O,transition:x,children:k,shapeFlag:y}=f;if(y&6){ct(f.component.subTree,d,p,v);return}if(y&128){f.suspense.move(d,p,v);return}if(y&64){O.move(f,d,p,Ot);return}if(O===ae){r(_,d,p);for(let S=0;S<k.length;S++)ct(k[S],d,p,v);r(f.anchor,d,p);return}if(O===Or){b(f,d,p);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(_),r(_,d,p),_e(()=>x.enter(_),g);else{const{leave:S,delayLeave:M,afterLeave:$}=x,D=()=>r(_,d,p),K=()=>{S(_,()=>{D(),$&&$()})};M?M(_,D,K):K()}else r(_,d,p)},Re=(f,d,p,v=!1,g=!1)=>{const{type:_,props:O,ref:x,children:k,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:M}=f;if(x!=null&&Ur(x,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const $=N&1&&M,D=!Zt(f);let K;if(D&&(K=O&&O.onVnodeBeforeUnmount)&&je(K,d,f),N&6)ys(f.component,p,v);else{if(N&128){f.suspense.unmount(p,v);return}$&&ut(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,g,Ot,v):y&&(_!==ae||S>0&&S&64)?We(y,d,p,!1,!0):(_===ae&&S&384||!g&&N&16)&&We(k,d,p),v&&ja(f)}(D&&(K=O&&O.onVnodeUnmounted)||$)&&_e(()=>{K&&je(K,d,f),$&&ut(f,null,d,"unmounted")},p)},ja=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===ae){bs(p,v);return}if(d===Or){P(f);return}const _=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:x}=g,k=()=>O(p,_);x?x(f.el,_,k):k()}else _()},bs=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},ys=(f,d,p)=>{const{bum:v,scope:g,update:_,subTree:O,um:x}=f;v&&Hn(v),g.stop(),_&&(_.active=!1,Re(O,f,d,p)),x&&_e(x,d),_e(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(f,d,p,v=!1,g=!1,_=0)=>{for(let O=_;O<f.length;O++)Re(f[O],d,p,v,g)},An=f=>f.shapeFlag&6?An(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),za=(f,d,p)=>{f==null?d._vnode&&Re(d._vnode,null,null,!0):T(d._vnode||null,f,d,null,null,null,p),Ga(),bo(),d._vnode=f},Ot={p:T,um:Re,m:ct,r:ja,mt:br,mc:ue,pc:Y,pbc:Be,n:An,o:e};let yr,xr;return t&&([yr,xr]=t(Ot)),{render:za,hydrate:yr,createApp:Ql(za,yr)}}function dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ro(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=tt(a[i]),s.el=o.el),n||Ro(o,s)),s.type===cr&&(s.el=o.el)}}function nf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const rf=e=>e.__isTeleport,ae=Symbol(void 0),cr=Symbol(void 0),it=Symbol(void 0),Or=Symbol(void 0),en=[];let Ne=null;function z(e=!1){en.push(Ne=e?null:[])}function af(){en.pop(),Ne=en[en.length-1]||null}let cn=1;function ii(e){cn+=e}function Lo(e){return e.dynamicChildren=cn>0?Ne||It:null,af(),cn>0&&Ne&&Ne.push(e),e}function te(e,t,n,r,a,i){return Lo(Ce(e,t,n,r,a,i,!0))}function de(e,t,n,r,a){return Lo(B(e,t,n,r,a,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",jo=({key:e})=>e!=null?e:null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ie(e)||me(e)||j(e)?{i:be,r:e,k:t,f:!!n}:e:null;function Ce(e,t=null,n=null,r=0,a=null,i=e===ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jo(t),ref:t&&Bn(t),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:be};return s?(_a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),cn>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const B=of;function of(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Dl)&&(e=it),Gn(e)){const s=jt(e,t,!0);return n&&_a(s,n),cn>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(hf(e)&&(e=e.__vccOpts),t){t=sf(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=Te(s)),G(l)&&(fo(l)&&!R(l)&&(l=ye({},l)),t.style=aa(l))}const o=ie(e)?1:Al(e)?128:rf(e)?64:G(e)?4:j(e)?2:0;return Ce(e,t,n,r,a,o,i,!0)}function sf(e){return e?fo(e)||ur in e?ye({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vn(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&jo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Bn(t)):[a,Bn(t)]:Bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ke(e=" ",t=0){return B(cr,null,e,t)}function Ft(e="",t=!1){return t?(z(),de(it,null,e)):B(it,null,e)}function De(e){return e==null||typeof e=="boolean"?B(it):R(e)?B(ae,null,e.slice()):typeof e=="object"?tt(e):B(cr,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function _a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),_a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ur in t)?t._ctx=be:a===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[ke(t)]):n=8);e.children=t,e.shapeFlag|=n}function vn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Te([t.class,r.class]));else if(a==="style")t.style=aa([t.style,r.style]);else if(rr(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){$e(e,t,7,[n,r])}const lf=$o();let ff=0;function cf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lf,i={uid:ff++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:To(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=yl.bind(null,i),e.ce&&e.ce(i),i}let he=null;const zt=e=>{he=e,e.scope.on()},wt=()=>{he&&he.scope.off(),he=null};function zo(e){return e.vnode.shapeFlag&4}let un=!1;function uf(e,t=!1){un=t;const{props:n,children:r}=e.vnode,a=zo(e);Kl(e,n,a,t),Jl(e,r);const i=a?df(e,t):void 0;return un=!1,i}function df(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=co(new Proxy(e.ctx,Hl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pf(e):null;zt(e),Ut();const i=rt(r,e,0,[e.props,a]);if(Bt(),wt(),qi(i)){if(i.then(wt,wt),t)return i.then(o=>{oi(e,o,t)}).catch(o=>{sr(o,e,0)});e.asyncDep=i}else oi(e,i,t)}else Do(e,t)}function oi(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=po(t)),Do(e,n)}let si;function Do(e,t,n){const r=e.type;if(!e.render){if(!t&&si&&!r.render){const a=r.template||ya(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=si(a,c)}}e.render=r.render||Fe}zt(e),Ut(),Ul(e),Bt(),wt()}function mf(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function pf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=mf(e))},slots:e.slots,emit:e.emit,expose:t}}function dr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}}))}function hf(e){return j(e)&&"__vccOpts"in e}const ne=(e,t)=>dl(e,t,un);function Ho(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?Gn(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gn(n)&&(n=[n]),B(e,t,n))}const gf=Symbol(""),vf=()=>Un(gf),bf="3.2.45",yf="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,li=vt&&vt.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?vt.createElementNS(yf,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{li.innerHTML=r?`<svg>${e}</svg>`:e;const s=li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wf(e,t,n){const r=e.style,a=ie(n);if(n&&!a){for(const i in n)Br(r,i,n[i]);if(t&&!ie(t))for(const i in t)n[i]==null&&Br(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const fi=/\s*!important$/;function Br(e,t,n){if(R(n))n.forEach(r=>Br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);fi.test(n)?e.setProperty(Ht(r),n.replace(fi,""),"important"):e[r]=n}}const ci=["Webkit","Moz","ms"],Er={};function kf(e,t){const n=Er[t];if(n)return n;let r=Rt(t);if(r!=="filter"&&r in e)return Er[t]=r;r=Gi(r);for(let a=0;a<ci.length;a++){const i=ci[a]+r;if(i in e)return Er[t]=i}return t}const ui="http://www.w3.org/1999/xlink";function Af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ui,t.slice(6,t.length)):e.setAttributeNS(ui,t,n);else{const i=Os(t);n==null||i&&!Vi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Vi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ct(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const c=i[t]=Tf(r,a);Ct(e,s,c,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const di=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(di.test(e)){t={};let r;for(;r=e.match(di);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Cr=0;const Sf=Promise.resolve(),If=()=>Cr||(Sf.then(()=>Cr=0),Cr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const mi=/^on[a-z]/,Mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_f(e,r,a):t==="style"?wf(e,n,r):rr(t)?ia(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ff(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,a))};function Ff(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&mi.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mi.test(t)&&ie(n)?!1:t in e}const pi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Hn(t,n):t};function $f(e){e.target.composing=!0}function hi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=pi(a);const i=r||a.props&&a.props.type==="number";Ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Kn(s)),e._assign(s)}),n&&Ct(e,"change",()=>{e.value=e.value.trim()}),t||(Ct(e,"compositionstart",$f),Ct(e,"compositionend",hi),Ct(e,"change",hi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=pi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Kn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Lf=ye({patchProp:Mf},xf);let gi;function jf(){return gi||(gi=ef(Lf))}const zf=(...e)=>{const t=jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Df(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Df(e){return ie(e)?document.querySelector(e):e}const Hf={name:"Vote Entries"},Uf=ce({...Hf,props:{color:null,colors:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=`Enter votes as per the following:
- One vote per line
- Blank line between vote groups (i.e. voters)`,a="responses",i=()=>window.localStorage.getItem(a),o=b=>window.localStorage.setItem(a,b),s=Rr(i()||`# shady
Francis
Libertalia
Hansa
Shipping

# sal
Cyclades
Shipping
Francis Drake
Libertalia

# saj
Libertalia
Cyclades
Franc

# shak
Shipping
Libertalia
Fran
Cyclades`),l=Rr(null),c=b=>{const P=l.value;P.style.height="auto";const L=b?2:35;P.style.height=P.scrollHeight+L+"px"},u=b=>n.colors[b],m=ne(()=>s.value.replaceAll(String.fromCharCode(160)," ").trim().split(/\n{2,}/).map(b=>b.trim().split(/\n/).map(P=>P.trim()).filter((P,L,se)=>se.indexOf(P)===L)).filter(b=>b.length>0)),h=ne(()=>m.value.flat().filter(b=>!b.match(/^#/)).filter((b,P,L)=>L.indexOf(b)===P)),A=b=>b.toLowerCase(),F=ne(()=>h.value.map(b=>({[A(b)]:b})).reduce((b,P)=>({...b,...P}),{})),T=ne(()=>Object.keys(F.value)),U=ne(()=>T.value.map(b=>({[b]:T.value.filter(P=>P.substring(0,b.length)===b).sort((P,L)=>L.length-P.length)[0]})).reduce((b,P)=>({...b,...P}),{})),w=ne(()=>m.value.map((b,P)=>{const L=u(P),se=(b[0].match(/^#/)?b[0].replace(/^#/,"").trim():L).toLowerCase().replace(/^\w/,ue=>ue.toUpperCase()),le=b.filter(ue=>!ue.match(/^#/)).map(ue=>F.value[U.value[A(ue)]]);return{name:se,color:L,votes:le}}).filter(b=>b.votes.length)),C=b=>t("update:modelValue",b);return Gt(w,()=>{o(s.value),C(w.value)}),Eo(()=>{c(),C(w.value)}),(b,P)=>zl((z(),te("textarea",{class:Te(`bg-${e.color}-200`),placeholder:r,onInput:c,ref_key:"textarea",ref:l,"onUpdate:modelValue":P[0]||(P[0]=L=>s.value=L)},null,34)),[[Rf,s.value]])}}),Bf={name:"Card",inheritAttrs:!1},Wt=ce({...Bf,props:{color:{type:String,default:"slate"}},setup(e){return(t,n)=>(z(),te("div",null,[Ce("div",vn({class:["border border-solid rounded-md shadow-lg",`border-${e.color}-300 bg-${e.color}-50 shadow-${e.color}-300/30`]},t.$attrs),[t.$slots.header?(z(),te("div",{key:0,class:Te(["border border-solid rounded-t-md p-2 text-lg font-bold",`text-${e.color}-600 bg-${e.color}-200 border-${e.color}-200 border-b-${e.color}-300`])},[kr(t.$slots,"header"),t.$slots.desc?(z(),te("div",{key:0,class:Te(["text-xs italic",`text-${e.color}-400`])},[kr(t.$slots,"desc")],2)):Ft("",!0)],2)):Ft("",!0),Ce("div",{class:Te(["p-2 shadow-inner",`text-${e.color}-700`])},[kr(t.$slots,"default",{color:e.color})],2)],16)]))}}),Wf={class:"list-decimal list-inside"},Vf={name:"Voter Card"},Yf=ce({...Vf,props:{voter:{type:Object,required:!0}},setup(e){return(t,n)=>(z(),de(Wt,{color:e.voter.color},{header:fe(()=>[ke(Ye(e.voter.name),1)]),default:fe(()=>[Ce("ol",Wf,[(z(!0),te(ae,null,gt(e.voter.votes,r=>(z(),te("li",null,Ye(r),1))),256))])]),_:1},8,["color"]))}}),Kf={class:"flex flex-row flex-wrap gap-2 justify-evenly"},qf={name:"Votes"},Xf=ce({...qf,props:{voters:null},setup(e){return(t,n)=>(z(),de(Wt,null,{header:fe(()=>[ke(" Voters ")]),desc:fe(()=>[ke(" Recognised Voters ")]),default:fe(()=>[Ce("div",Kf,[(z(!0),te(ae,null,gt(e.voters,r=>(z(),de(Yf,{voter:r},null,8,["voter"]))),256))])]),_:1}))}});function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Jf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gf(e,t,n){return t&&bi(e.prototype,t),n&&bi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return Qf(e)||tc(e,t)||Uo(e,t)||rc()}function bn(e){return Zf(e)||ec(e)||Uo(e)||nc()}function Zf(e){if(Array.isArray(e))return Wr(e)}function Qf(e){if(Array.isArray(e))return e}function ec(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Uo(e,t){if(!!e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yi=function(){},ka={},Bo={},Wo=null,Vo={mark:yi,measure:yi};try{typeof window<"u"&&(ka=window),typeof document<"u"&&(Bo=document),typeof MutationObserver<"u"&&(Wo=MutationObserver),typeof performance<"u"&&(Vo=performance)}catch{}var ac=ka.navigator||{},xi=ac.userAgent,_i=xi===void 0?"":xi,ot=ka,J=Bo,wi=Wo,Tn=Vo;ot.document;var Ze=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Yo=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),Nn,Mn,Fn,$n,Rn,qe="___FONT_AWESOME___",Vr=16,Ko="fa",qo="svg-inline--fa",kt="data-fa-i2svg",Yr="data-fa-pseudo-element",ic="data-fa-pseudo-element-pending",Aa="data-prefix",Oa="data-icon",ki="fontawesome-i2svg",oc="async",sc=["HTML","HEAD","STYLE","SCRIPT"],Xo=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",Ea=[X,Q];function yn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var dn=yn((Nn={},oe(Nn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),oe(Nn,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),Nn)),mn=yn((Mn={},oe(Mn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),oe(Mn,Q,{solid:"fass"}),Mn)),pn=yn((Fn={},oe(Fn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),oe(Fn,Q,{fass:"fa-solid"}),Fn)),lc=yn(($n={},oe($n,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),oe($n,Q,{"fa-solid":"fass"}),$n)),fc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Jo="fa-layers-text",cc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,uc=yn((Rn={},oe(Rn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),oe(Rn,Q,{900:"fass"}),Rn)),Go=[1,2,3,4,5,6,7,8,9,10],dc=Go.concat([11,12,13,14,15,16,17,18,19,20]),mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(mn[X]).map(hn.add.bind(hn));Object.keys(mn[Q]).map(hn.add.bind(hn));var pc=[].concat(Ea,bn(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(Go.map(function(e){return"".concat(e,"x")})).concat(dc.map(function(e){return"w-".concat(e)})),tn=ot.FontAwesomeConfig||{};function hc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var vc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vc.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=gc(hc(n));a!=null&&(tn[r]=a)})}var Zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var Dt=E(E({},Zo),tn);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var I={};Object.keys(Zo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Dt[e]=n,nn.forEach(function(r){return r(I)})},get:function(){return Dt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,nn.forEach(function(n){return n(I)})},get:function(){return Dt.cssPrefix}});ot.FontAwesomeConfig=I;var nn=[];function bc(e){return nn.push(e),function(){nn.splice(nn.indexOf(e),1)}}var et=Vr,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yc(e){if(!(!e||!Ze)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var xc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=xc[Math.random()*62|0];return t}function Vt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ca(e){return e.classList?Vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _c(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qo(e[n]),'" ')},"").trim()}function mr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function wc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function kc(e){var t=e.transform,n=e.width,r=n===void 0?Vr:n,a=e.height,i=a===void 0?Vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Yo?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ac=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function es(){var e=Ko,t=qo,n=I.cssPrefix,r=I.replacementClass,a=Ac;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ai=!1;function Pr(){I.autoAddCss&&!Ai&&(yc(es()),Ai=!0)}var Oc={mixout:function(){return{dom:{css:es,insertCss:Pr}}},hooks:function(){return{beforeDOMElementCreation:function(){Pr()},beforeI2svg:function(){Pr()}}}},Xe=ot||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Me=Xe[qe],ts=[],Ec=function e(){J.removeEventListener("DOMContentLoaded",e),Qn=1,ts.map(function(t){return t()})},Qn=!1;Ze&&(Qn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Qn||J.addEventListener("DOMContentLoaded",Ec));function Cc(e){!Ze||(Qn?setTimeout(e,0):ts.push(e))}function xn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Qo(e):"<".concat(t," ").concat(_c(r),">").concat(i.map(xn).join(""),"</").concat(t,">")}function Oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Sr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Pc(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Sc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Kr(e){var t=Sc(e);return t.length===1?t[0].toString(16):null}function Ic(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ei(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,Ei(t)):Me.styles[e]=E(E({},Me.styles[e]||{}),i),e==="fas"&&qr("fa",t)}var Ln,jn,zn,Pt=Me.styles,Tc=Me.shims,Nc=(Ln={},oe(Ln,X,Object.values(pn[X])),oe(Ln,Q,Object.values(pn[Q])),Ln),Sa=null,ns={},rs={},as={},is={},os={},Mc=(jn={},oe(jn,X,Object.keys(dn[X])),oe(jn,Q,Object.keys(dn[Q])),jn);function Fc(e){return~pc.indexOf(e)}function $c(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Fc(a)?a:null}var ss=function(){var t=function(i){return Sr(Pt,function(o,s,l){return o[l]=Sr(s,i,{}),o},{})};ns=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),rs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),os=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Pt||I.autoFetchSvg,r=Sr(Tc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});as=r.names,is=r.unicodes,Sa=pr(I.styleDefault,{family:I.familyDefault})};bc(function(e){Sa=pr(e.styleDefault,{family:I.familyDefault})});ss();function Ia(e,t){return(ns[e]||{})[t]}function Rc(e,t){return(rs[e]||{})[t]}function xt(e,t){return(os[e]||{})[t]}function ls(e){return as[e]||{prefix:null,iconName:null}}function Lc(e){var t=is[e],n=Ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return Sa}var Ta=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=dn[r][e],i=mn[r][e]||mn[r][a],o=e in Me.styles?e:null;return i||o||null}var Ci=(zn={},oe(zn,X,Object.keys(pn[X])),oe(zn,Q,Object.keys(pn[Q])),zn);function hr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},oe(t,X,"".concat(I.cssPrefix,"-").concat(X)),oe(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ci[X].includes(c)}))&&(s=X),(e.includes(i[Q])||e.some(function(c){return Ci[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,u){var m=$c(I.cssPrefix,u);if(Pt[u]?(u=Nc[s].includes(u)?lc[s][u]:u,o=u,c.prefix=u):Mc[s].indexOf(u)>-1?(o=u,c.prefix=pr(u,{family:s})):m?c.iconName=m:u!==I.replacementClass&&u!==i[X]&&u!==i[Q]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?ls(c.iconName):{},A=xt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||A||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Pt.far&&Pt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},Ta());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(Pt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=st()||"fas"),l}var jc=function(){function e(){Jf(this,e),this.definitions={}}return Gf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),qr(s,o[s]);var l=pn[X][s];l&&qr(l,o[s]),ss()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Pi=[],St={},$t={},zc=Object.keys($t);function Dc(e,t){var n=t.mixoutsTo;return Pi=e,St={},Object.keys($t).forEach(function(r){zc.indexOf(r)===-1&&delete $t[r]}),Pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides($t)}),n}function Xr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=St[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=St[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function Jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||st();if(!!t)return t=xt(n,t)||t,Oi(fs.definitions,n,t)||Oi(Me.styles,n,t)}var fs=new jc,Hc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,At("noAuto")},Uc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ze?(At("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Cc(function(){Wc({autoReplaceSvgRoot:n}),At("watch",t)})}},Bc={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:xt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(fc))){var a=hr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||st(),iconName:xt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=st();return{prefix:i,iconName:xt(i,t)||t}}}},Oe={noAuto:Hc,config:I,dom:Uc,parse:Bc,library:fs,findIconDefinition:Jr,toHtml:xn},Wc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Me.styles).length>0||I.autoFetchSvg)&&Ze&&I.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function gr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return xn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ze){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=mr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Yc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Na(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,A=h===void 0?!1:h,F=r.found?r:n,T=F.width,U=F.height,w=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(Ee){return m.classes.indexOf(Ee)===-1}).filter(function(Ee){return Ee!==""||!!Ee}).concat(m.classes).join(" "),b={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(U)})},P=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/U*16*.0625,"em")}:{};A&&(b.attributes[kt]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete b.attributes.title);var L=E(E({},b),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},P),m.styles)}),se=r.found&&n.found?Je("generateAbstractMask",L)||{children:[],attributes:{}}:Je("generateAbstractIcon",L)||{children:[],attributes:{}},le=se.children,ue=se.attributes;return L.children=le,L.attributes=ue,s?Yc(L):Vc(L)}function Si(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[kt]="");var u=E({},o.styles);Pa(a)&&(u.transform=kc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=mr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Kc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=mr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ir=Me.styles;function Gr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var qc={found:!1,width:512,height:512};function Xc(e,t){!Xo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=st()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=ls(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ir[t]&&Ir[t][e]){var o=Ir[t][e];return r(Gr(o))}Xc(e,t),r(E(E({},qc),{},{icon:I.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Qr=I.measurePerformance&&Tn&&Tn.mark&&Tn.measure?Tn:{mark:Ii,measure:Ii},Jt='FA "6.2.0"',Jc=function(t){return Qr.mark("".concat(Jt," ").concat(t," begins")),function(){return cs(t)}},cs=function(t){Qr.mark("".concat(Jt," ").concat(t," ends")),Qr.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Ma={begin:Jc,end:cs},Wn=function(){};function Ti(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function Gc(e){var t=e.getAttribute?e.getAttribute(Aa):null,n=e.getAttribute?e.getAttribute(Oa):null;return t&&n}function Zc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Qc(){if(I.autoReplaceSvg===!0)return Vn.replace;var e=Vn[I.autoReplaceSvg];return e||Vn.replace}function eu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function tu(e){return J.createElement(e)}function us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?eu:tu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(us(o,{ceFn:r}))}),a}function nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Vn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(us(a),n)}),n.getAttribute(kt)===null&&I.keepOriginalSource){var r=J.createComment(nu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ca(n).indexOf(I.replacementClass))return Vn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return xn(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=o}};function Ni(e){e()}function ds(e,t){var n=typeof t=="function"?t:Wn;if(e.length===0)n();else{var r=Ni;I.mutateApproach===oc&&(r=ot.requestAnimationFrame||Ni),r(function(){var a=Qc(),i=Ma.begin("mutate");e.map(a),i(),n()})}}var Fa=!1;function ms(){Fa=!0}function ea(){Fa=!1}var er=null;function Mi(e){if(!!wi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?Wn:t,r=e.nodeCallback,a=r===void 0?Wn:r,i=e.pseudoElementsCallback,o=i===void 0?Wn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;er=new wi(function(c){if(!Fa){var u=st();Vt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~mc.indexOf(m.attributeName))if(m.attributeName==="class"&&Gc(m.target)){var h=hr(Ca(m.target)),A=h.prefix,F=h.iconName;m.target.setAttribute(Aa,A||u),F&&m.target.setAttribute(Oa,F)}else Zc(m.target)&&a(m.target)})}}),Ze&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ru(){!er||er.disconnect()}function au(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function iu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=hr(Ca(e));return a.prefix||(a.prefix=st()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Rc(a.prefix,e.innerText)||Ia(a.prefix,Kr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ou(e){var t=Vt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function su(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ou(e),s=Xr("parseNodeAttributes",{},e),l=t.styleParser?au(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var lu=Me.styles;function ps(e){var t=I.autoReplaceSvg==="nest"?Fi(e,{styleParser:!1}):Fi(e);return~t.extra.classes.indexOf(Jo)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var lt=new Set;Ea.map(function(e){lt.add("fa-".concat(e))});Object.keys(dn[X]).map(lt.add.bind(lt));Object.keys(dn[Q]).map(lt.add.bind(lt));lt=bn(lt);function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ze)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ki,"-").concat(m))},a=function(m){return n.remove("".concat(ki,"-").concat(m))},i=I.autoFetchSvg?lt:Ea.map(function(u){return"fa-".concat(u)}).concat(Object.keys(lu));i.includes("fa")||i.push("fa");var o=[".".concat(Jo,":not([").concat(kt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Vt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ma.begin("onTree"),c=s.reduce(function(u,m){try{var h=ps(m);h&&u.push(h)}catch(A){Xo||A.name==="MissingIcon"&&console.error(A)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){ds(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ps(e).then(function(n){n&&ds([n],t)})}function cu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var uu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,A=n.titleId,F=A===void 0?null:A,T=n.classes,U=T===void 0?[]:T,w=n.attributes,C=w===void 0?{}:w,b=n.styles,P=b===void 0?{}:b;if(!!t){var L=t.prefix,se=t.iconName,le=t.icon;return gr(E({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||gn()):(C["aria-hidden"]="true",C.focusable="false")),Na({icons:{main:Gr(le),mask:l?Gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:se,transform:E(E({},Ue),a),symbol:o,title:h,maskId:u,titleId:F,extra:{attributes:C,styles:P,classes:U}})})}},du={mixout:function(){return{icon:cu(uu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$i,n.nodeCallback=fu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return $i(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(A,F){Promise.all([Zr(a,s),u.iconName?Zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var U=wa(T,2),w=U[0],C=U[1];A([n,Na({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=mr(s);l.length>0&&(a.style=l);var c;return Pa(o)&&(c=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},mu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return gr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(bn(i)).join(" ")},children:o}]})}}}},pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return gr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Kc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(bn(s))}})})}}}},hu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,A=h===void 0?{}:h;return gr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Si({content:n,transform:E(E({},Ue),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.cssPrefix,"-layers-text")].concat(bn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Yo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Si({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},gu=new RegExp('"',"ug"),Ri=[1105920,1112319];function vu(e){var t=e.replace(gu,""),n=Ic(t,0),r=n>=Ri[0]&&n<=Ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:Kr(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(ic).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Vt(e.children),o=i.filter(function(le){return le.getAttribute(Yr)===t})[0],s=ot.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(cc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Q:X,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[h][l[2].toLowerCase()]:uc[h][c],F=vu(m),T=F.value,U=F.isSecondary,w=l[0].startsWith("FontAwesome"),C=Ia(A,T),b=C;if(w){var P=Lc(T);P.iconName&&P.prefix&&(C=P.iconName,A=P.prefix)}if(C&&!U&&(!o||o.getAttribute(Aa)!==A||o.getAttribute(Oa)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);var L=su(),se=L.extra;se.attributes[Yr]=t,Zr(C,A).then(function(le){var ue=Na(E(E({},L),{},{icons:{main:le,mask:Ta()},prefix:A,iconName:b,extra:se,watchable:!0})),Ee=J.createElement("svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=ue.map(function(Be){return xn(Be)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bu(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function yu(e){return e.parentNode!==document.head&&!~sc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ji(e){if(!!Ze)return new Promise(function(t,n){var r=Vt(e.querySelectorAll("*")).filter(yu).map(bu),a=Ma.begin("searchPseudoElements");ms(),Promise.all(r).then(function(){a(),ea(),t()}).catch(function(){a(),ea(),n()})})}var xu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&ji(a)}}},zi=!1,_u={mixout:function(){return{dom:{unwatch:function(){ms(),zi=!0}}}},hooks:function(){return{bootstrap:function(){Mi(Xr("mutationObserverCallbacks",{}))},noAuto:function(){ru()},watch:function(n){var r=n.observeMutationsRoot;zi?ea():Mi(Xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},wu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},A.outer),children:[{tag:"g",attributes:E({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),A.path)}]}]}}}},Tr={x:0,y:0,width:"100%",height:"100%"};function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ku(e){return e.tag==="g"?e.children:[e]}var Au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?hr(a.split(" ").map(function(o){return o.trim()})):Ta();return i.prefix||(i.prefix=st()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,A=wc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},Tr),{},{fill:"white"})},T=u.children?{children:u.children.map(Hi)}:{},U={tag:"g",attributes:E({},A.inner),children:[Hi(E({tag:u.tag,attributes:E(E({},u.attributes),A.path)},T))]},w={tag:"g",attributes:E({},A.outer),children:[U]},C="mask-".concat(s||gn()),b="clip-".concat(s||gn()),P={tag:"mask",attributes:E(E({},Tr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:ku(h)},P]};return r.push(L,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(C,")")},Tr)}),{children:r,attributes:a}}}},Ou={provides:function(t){var n=!1;ot.matchMedia&&(n=ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Cu=[Oc,du,mu,pu,hu,xu,_u,wu,Au,Ou,Eu];Dc(Cu,{mixoutsTo:Oe});Oe.noAuto;var hs=Oe.config,Ui=Oe.library;Oe.dom;var tr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Pu=Oe.icon;Oe.layer;var Su=Oe.text;Oe.counter;function Bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bi(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Tu(e,t){if(e==null)return{};var n=Iu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ta(e){return Nu(e)||Mu(e)||Fu(e)||$u()}function Nu(e){if(Array.isArray(e))return na(e)}function Mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fu(e,t){if(!!e){if(typeof e=="string")return na(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return na(e,t)}}function na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gs={exports:{}};(function(e){(function(t){var n=function(w,C,b){if(!c(C)||m(C)||h(C)||A(C)||l(C))return C;var P,L=0,se=0;if(u(C))for(P=[],se=C.length;L<se;L++)P.push(n(w,C[L],b));else{P={};for(var le in C)Object.prototype.hasOwnProperty.call(C,le)&&(P[w(le,b)]=n(w,C[le],b))}return P},r=function(w,C){C=C||{};var b=C.separator||"_",P=C.split||/(?=[A-Z])/;return w.split(P).join(b)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,b){return b?b.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},h=function(w){return s.call(w)=="[object RegExp]"},A=function(w){return s.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},T=function(w,C){var b=C&&"process"in C?C.process:C;return typeof b!="function"?w:function(P,L){return b(P,w,L)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(T(a,C),w)},decamelizeKeys:function(w,C){return n(T(o,C),w,C)},pascalizeKeys:function(w,C){return n(T(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Ru)})(gs);var Lu=gs.exports,ju=["class","style"];function zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Lu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Du(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return $a(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Du(u);break;case"style":l.style=zu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Tu(n,ju);return Ho(e.tag,Ie(Ie(Ie({},t),{},{class:a.class,style:Ie(Ie({},a.style),o)},a.attrs),s),r)}var vs=!1;try{vs=!0}catch{}function Hu(){if(!vs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function rn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Uu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Wi(e){if(e&&nr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tr.icon)return tr.icon(e);if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var mt=ce({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ne(function(){return Wi(t.icon)}),i=ne(function(){return rn("classes",Uu(t))}),o=ne(function(){return rn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=ne(function(){return rn("mask",Wi(t.mask))}),l=ne(function(){return Pu(a.value,Ie(Ie(Ie(Ie({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Gt(l,function(u){if(!u)return Hu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ne(function(){return l.value?$a(l.value.abstract[0],{},r):null});return function(){return c.value}}});ce({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=hs.familyPrefix,i=ne(function(){return["".concat(a,"-layers")].concat(ta(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ho("div",{class:i.value},r.default?r.default():[])}}});ce({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=hs.familyPrefix,i=ne(function(){return rn("classes",[].concat(ta(t.counter?["".concat(a,"-layers-counter")]:[]),ta(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ne(function(){return rn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=ne(function(){var c=Su(t.value.toString(),Ie(Ie({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ne(function(){return $a(s.value,{},r)});return function(){return l.value}}});var Bu={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Wu={prefix:"fas",iconName:"grip-lines-vertical",icon:[192,512,[],"f7a5","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]},Vu={prefix:"fas",iconName:"arrow-down-wide-short",icon:[576,512,["sort-amount-asc","sort-amount-down"],"f160","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z"]},Yu={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Ku={prefix:"fas",iconName:"arrow-up-wide-short",icon:[576,512,["sort-amount-up"],"f161","M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]};const qu={class:"mr-2"},Xu={class:"ml-auto text-right cursor-pointer inline-flex gap-2"},Ju=["title"],Gu={class:"fa-stack w-4 ml-0.5"},Zu={name:"Votes By Score"},Qu=ce({...Zu,props:{voters:null,scorer:null,title:null,desc:null,bars:{type:Boolean,default:!0},icon:null},setup(e){var o;const t=e;Ui.add(Wu,Yu,Bu);const n=sn(t,"icon");n.value&&n.value.hasOwnProperty("definition")&&Ui.add((o=n.value)==null?void 0:o.definition);const r=sn(t,"voters"),a=t.scorer,i=ne(()=>r.value.map(s=>s.votes).flat().filter((s,l,c)=>c.indexOf(s)===l).map(s=>({vote:s,voters:r.value.filter(l=>l.votes.includes(s)).map(l=>({...l,score:a(l,s)}))})).map(s=>({...s,score:s.voters.map(l=>l.score).reduce((l,c)=>l+c,0)})).sort((s,l)=>l.score-s.score||l.voters.length-s.voters.length));return(s,l)=>(z(),de(Wt,null,{header:fe(()=>[re(n)?(z(),de(re(mt),{key:0,icon:re(n).reference},null,8,["icon"])):Ft("",!0),ke(" "+Ye(e.title),1)]),desc:fe(()=>[ke(Ye(e.desc),1)]),default:fe(({color:c})=>[Ce("ol",null,[(z(!0),te(ae,null,gt(re(i),u=>(z(),te("li",{class:Te(["flex flex-wrap justify-between border border-0 border-b-2",`border-b-${c}-100`])},[Ce("span",qu,Ye(u.score)+": "+Ye(u.vote),1),Ce("span",Xu,[(z(!0),te(ae,null,gt(u.voters.sort((m,h)=>m.score-h.score),m=>(z(),te("span",{class:Te(`text-${m.color}-500`),title:`${m.name}: ${m.score}`},[e.bars?(z(),te(ae,{key:0},[m.score%5!==0?(z(),te("span",{key:0,class:Te(["fa-stack",`w-${m.score%5}`])},[[1,3].includes(m.score%5)?(z(),de(re(mt),{key:0,icon:["fas","minus"],class:"fa-stack-1x",transform:"rotate-90 left-8 grow-1.5"})):Ft("",!0),(z(!0),te(ae,null,gt({1:[],2:["left-6"],3:["left-2"],4:["left-6","right-2"]}[m.score%5],h=>(z(),de(re(mt),{icon:["fas","grip-lines-vertical"],class:"fa-stack-1x fa-fw",transform:h},null,8,["transform"]))),256))],2)):Ft("",!0),(z(!0),te(ae,null,gt(Math.floor(m.score/5),h=>(z(),te("span",Gu,[B(re(mt),{icon:["fas","grip-lines-vertical"],class:"fa-stack-1x",transform:"left-6"}),B(re(mt),{icon:["fas","grip-lines-vertical"],class:"fa-stack-1x",transform:"right-2"}),B(re(mt),{icon:["fas","minus"],class:"fa-stack-1x",transform:"rotate--30 grow-6 left-2"})]))),256))],64)):(z(!0),te(ae,{key:1},gt(m.score,h=>(z(),de(re(mt),{icon:["fas","square-check"],class:Te(["m-0.25 shadow-md",`shadow-${m.color}-200`])},null,8,["class"]))),256))],10,Ju))),256))])],2))),256))])]),_:1}))}});const ed=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},vr=ed(Qu,[["__scopeId","data-v-83932382"]]),td={name:"Popularity"},nd=ce({...td,props:{voters:null},setup(e){const t=()=>1;return(n,r)=>(z(),de(vr,{voters:e.voters,scorer:t,title:"Popularity By Vote",desc:"Ranking by counting voters",bars:!1},null,8,["voters"]))}}),rd={name:"Top Weighted"},ad=ce({...rd,props:{voters:null,scorer:null},setup(e){const t={definition:Vu,reference:["fas","arrow-down-wide-short"]};return(n,r)=>(z(),de(vr,{voters:e.voters,scorer:e.scorer,title:"Top Weighted Vote",desc:"First choice gets maximum voting influence",icon:t},null,8,["voters","scorer"]))}}),id={name:"Bottom Weighted"},od=ce({...id,props:{voters:null,scorer:null},setup(e){const t={definition:Ku,reference:["fas","arrow-up-wide-short"]};return(n,r)=>(z(),de(vr,{voters:e.voters,scorer:e.scorer,title:"Bottom Weighted Vote",desc:"Last choice gets minimal voting influence",icon:t},null,8,["voters","scorer"]))}}),sd={name:"Top Weighted"},ld=ce({...sd,props:{voters:null,scorer:null},setup(e){return(t,n)=>(z(),de(vr,{voters:e.voters,scorer:e.scorer,title:"Combined Weighted Vote",desc:"Combine Top + Bottom influences"},null,8,["voters","scorer"]))}}),fd={class:"flex flex-wrap justify-evenly w-full gap-2"},cd={name:"Weight Group"},Ra=ce({...cd,props:{voters:null,maxNumVotes:null,scoreAdjuster:null},setup(e){const t=e,n=sn(t,"maxNumVotes"),r=sn(t,"scoreAdjuster"),a=(s,l,c)=>{const u=l.votes.indexOf(c),m=s-u;return r.value(m,u)},i=(s,l)=>a(n.value,s,l),o=(s,l)=>a(s.votes.length,s,l);return(s,l)=>(z(),te("div",fd,[B(ad,{voters:e.voters,scorer:i},null,8,["voters"]),B(od,{voters:e.voters,scorer:o},null,8,["voters"]),B(ld,{voters:e.voters,scorer:(...c)=>i(...c)+o(...c)},null,8,["voters","scorer"])]))}}),ud={name:"Linear Weighted Rankings",inheritAttrs:!1},dd=ce({...ud,props:{voters:null,maxNumVotes:null},setup(e){return(t,n)=>(z(),de(Wt,null,{header:fe(()=>[ke(" Linearly Weighted Votes ")]),desc:fe(()=>[ke(" Linear voting strength, i.e. "+Ye([...Array(e.maxNumVotes).keys()].reverse().map(r=>r+1).join(", ")),1)]),default:fe(()=>[B(Ra,vn({voters:e.voters,maxNumVotes:e.maxNumVotes,scoreAdjuster:r=>r},t.$attrs),null,16,["voters","maxNumVotes","scoreAdjuster"])]),_:1}))}}),md=Ce("sup",null,"st",-1),pd={name:"Top Priority Weighted Rankings",inheritAttrs:!1},hd=ce({...pd,props:{voters:null,maxNumVotes:null},setup(e){return(t,n)=>(z(),de(Wt,null,{header:fe(()=>[ke(" Top Priority Weighted Votes ")]),desc:fe(()=>[ke(" Linear, but 1"),md,ke(" choice gains +1, i.e. "+Ye([...Array(e.maxNumVotes).keys()].reverse().map((r,a)=>r+(a===0?2:1)).join(", ")),1)]),default:fe(()=>[B(Ra,vn({voters:e.voters,maxNumVotes:e.maxNumVotes,scoreAdjuster:(r,a)=>r+(a===0?1:0)},t.$attrs),null,16,["voters","maxNumVotes","scoreAdjuster"])]),_:1}))}}),gd={name:"Logarithmic Weighted Rankings",inheritAttrs:!1},vd=ce({...gd,props:{voters:null,maxNumVotes:null},setup(e){return(t,n)=>(z(),de(Wt,null,{header:fe(()=>[ke(" Logarithmic Weighted Votes ")]),desc:fe(()=>[ke(" Linear scoring, squared... i.e. "+Ye([...Array(e.maxNumVotes).keys()].reverse().map(r=>Math.pow(r+1,2)).join(", ")),1)]),default:fe(()=>[B(Ra,vn({voters:e.voters,maxNumVotes:e.maxNumVotes,scoreAdjuster:r=>Math.pow(r,2)},t.$attrs),null,16,["voters","maxNumVotes","scoreAdjuster"])]),_:1}))}}),bd={key:0,class:"flex flex-wrap justify-evenly w-full gap-2"},yd={name:"Weighted Rankings"},xd=ce({...yd,props:{voters:null},setup(e){const n=sn(e,"voters"),r=ne(()=>Math.max(...n.value.map(a=>a.votes.length)));return(a,i)=>re(n).length>1?(z(),te("div",bd,[B(dd,{voters:re(n),maxNumVotes:re(r)},null,8,["voters","maxNumVotes"]),B(hd,{voters:re(n),maxNumVotes:re(r)},null,8,["voters","maxNumVotes"]),B(vd,{voters:re(n),maxNumVotes:re(r)},null,8,["voters","maxNumVotes"])])):Ft("",!0)}}),_d=["red","orange","yellow","lime","blue","violet","fuchsia"],wd={class:"flex flex-col lg:flex-row p-2"},kd={class:"w-56 min-w-full lg:min-w-fit transition-all duration-500"},Ad={class:"grow flex flex-row flex-wrap gap-2 justify-around"},Od={name:"Vote App"},Ed=ce({...Od,setup(e){const t=Rr([]),n=_d.map(r=>({value:r,sort:Math.random()})).sort((r,a)=>r.sort-a.sort).map(({value:r})=>r);return(r,a)=>(z(),te("div",wd,[Ce("div",kd,[B(Uf,{class:"w-full p-4",color:"gray",colors:re(n),modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i)},null,8,["colors","modelValue"])]),Ce("div",Ad,[B(Xf,{voters:t.value},null,8,["voters"]),B(nd,{voters:t.value},null,8,["voters"]),B(xd,{voters:t.value},null,8,["voters"])])]))}});zf(Ed).mount("#app");
