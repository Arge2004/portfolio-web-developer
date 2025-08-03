import{r as b,a as l}from"./index.aP1c9mzo.js";/* empty css                       */var m={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v;function y(){if(v)return s;v=1;var u=b(),f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function n(r,e,R){var t,i={},_=null,x=null;R!==void 0&&(_=""+R),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(x=e.ref);for(t in e)a.call(e,t)&&!o.hasOwnProperty(t)&&(i[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)i[t]===void 0&&(i[t]=e[t]);return{$$typeof:f,type:r,key:_,ref:x,props:i,_owner:p.current}}return s.Fragment=c,s.jsx=n,s.jsxs=n,s}var d;function E(){return d||(d=1,m.exports=y()),m.exports}var O=E();function S({children:u,className:f="",id:c}){const[a,p]=l.useState(!1),o=l.useRef(null);return l.useEffect(()=>{const n=new IntersectionObserver(([e])=>{p(e.isIntersecting)},{threshold:.3}),r=o.current;return r&&n.observe(r),()=>{r&&n.unobserve(r)}},[]),O.jsx("section",{ref:o,className:`fade-in-section ${a?"visible":""} ${f}`,id:c,children:u})}export{S as F,O as j};
