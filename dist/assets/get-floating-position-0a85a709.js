import{r as m,X as gt,a7 as Ze,H as Fe,a as le,G as ht,R as yt}from"./index-4247d441.js";function Sn(e){return`___ref-${e||""}`}function Mn({value:e,defaultValue:t,finalValue:n,onChange:r=()=>{}}){const[o,i]=m.useState(t!==void 0?t:n),s=l=>{i(l),r==null||r(l)};return e!==void 0?[e,r,!0]:[o,s,!1]}const N=Math.min,F=Math.max,pe=Math.round,ue=Math.floor,q=e=>({x:e,y:e}),vt={left:"right",right:"left",bottom:"top",top:"bottom"},wt={start:"end",end:"start"};function Ee(e,t,n){return F(e,N(t,n))}function z(e,t){return typeof e=="function"?e(t):e}function W(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function Pe(e){return e==="x"?"y":"x"}function Oe(e){return e==="y"?"height":"width"}function ee(e){return["top","bottom"].includes(W(e))?"y":"x"}function Ae(e){return Pe(ee(e))}function xt(e,t,n){n===void 0&&(n=!1);const r=ie(e),o=Ae(e),i=Oe(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ge(s)),[s,ge(s)]}function bt(e){const t=ge(e);return[Ce(e),t,Ce(t)]}function Ce(e){return e.replace(/start|end/g,t=>wt[t])}function Rt(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function Et(e,t,n,r){const o=ie(e);let i=Rt(W(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Ce)))),i}function ge(e){return e.replace(/left|right|bottom|top/g,t=>vt[t])}function Ct(e){return{top:0,right:0,bottom:0,left:0,...e}}function Te(e){return typeof e!="number"?Ct(e):{top:e,right:e,bottom:e,left:e}}function ne(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Be(e,t,n){let{reference:r,floating:o}=e;const i=ee(t),s=Ae(t),l=Oe(s),c=W(t),u=i==="y",p=r.x+r.width/2-o.width/2,a=r.y+r.height/2-o.height/2,d=r[l]/2-o[l]/2;let f;switch(c){case"top":f={x:p,y:r.y-o.height};break;case"bottom":f={x:p,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:a};break;case"left":f={x:r.x-o.width,y:a};break;default:f={x:r.x,y:r.y}}switch(ie(t)){case"start":f[s]-=d*(n&&u?-1:1);break;case"end":f[s]+=d*(n&&u?-1:1);break}return f}const Pt=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:a}=Be(u,r,c),d=r,f={},h=0;for(let g=0;g<l.length;g++){const{name:v,fn:y}=l[g],{x:w,y:C,data:E,reset:b}=await y({x:p,y:a,initialPlacement:r,placement:d,strategy:o,middlewareData:f,rects:u,platform:s,elements:{reference:e,floating:t}});if(p=w??p,a=C??a,f={...f,[v]:{...f[v],...E}},b&&h<=50){h++,typeof b=="object"&&(b.placement&&(d=b.placement),b.rects&&(u=b.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):b.rects),{x:p,y:a}=Be(u,d,c)),g=-1;continue}}return{x:p,y:a,placement:d,strategy:o,middlewareData:f}};async function Le(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:a="floating",altBoundary:d=!1,padding:f=0}=z(t,e),h=Te(f),v=l[d?a==="floating"?"reference":"floating":a],y=ne(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(v)))==null||n?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:p,strategy:c})),w=a==="floating"?{...s.floating,x:r,y:o}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),E=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},b=ne(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:C,strategy:c}):w);return{top:(y.top-b.top+h.top)/E.y,bottom:(b.bottom-y.bottom+h.bottom)/E.y,left:(y.left-b.left+h.left)/E.x,right:(b.right-y.right+h.right)/E.x}}const $e=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:l}=t,{element:c,padding:u=0}=z(e,t)||{};if(c==null)return{};const p=Te(u),a={x:n,y:r},d=Ae(o),f=Oe(d),h=await s.getDimensions(c),g=d==="y",v=g?"top":"left",y=g?"bottom":"right",w=g?"clientHeight":"clientWidth",C=i.reference[f]+i.reference[d]-a[d]-i.floating[f],E=a[d]-i.reference[d],b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let R=b?b[w]:0;(!R||!await(s.isElement==null?void 0:s.isElement(b)))&&(R=l.floating[w]||i.floating[f]);const D=C/2-E/2,_=R/2-h[f]/2-1,I=N(p[v],_),O=N(p[y],_),L=I,M=R-h[f]-O,A=R/2-h[f]/2+D,x=Ee(L,A,M),T=ie(o)!=null&&A!=x&&i.reference[f]/2-(A<L?I:O)-h[f]/2<0?A<L?L-A:M-A:0;return{[d]:a[d]-T,data:{[d]:x,centerOffset:A-x+T}}}}),Dn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:a,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...g}=z(e,t),v=W(r),y=W(s)===s,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=a||(y||!h?[ge(s)]:bt(s));!a&&f!=="none"&&C.push(...Et(s,h,f,w));const E=[s,...C],b=await Le(t,g),R=[];let D=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&R.push(b[v]),p){const L=xt(r,i,w);R.push(b[L[0]],b[L[1]])}if(D=[...D,{placement:r,overflows:R}],!R.every(L=>L<=0)){var _,I;const L=(((_=o.flip)==null?void 0:_.index)||0)+1,M=E[L];if(M)return{data:{index:L,overflows:D},reset:{placement:M}};let A=(I=D.filter(x=>x.overflows[0]<=0).sort((x,P)=>x.overflows[1]-P.overflows[1])[0])==null?void 0:I.placement;if(!A)switch(d){case"bestFit":{var O;const x=(O=D.map(P=>[P.placement,P.overflows.filter(T=>T>0).reduce((T,k)=>T+k,0)]).sort((P,T)=>P[1]-T[1])[0])==null?void 0:O[0];x&&(A=x);break}case"initialPlacement":A=s;break}if(r!==A)return{reset:{placement:A}}}return{}}}};function et(e){const t=N(...e.map(i=>i.left)),n=N(...e.map(i=>i.top)),r=F(...e.map(i=>i.right)),o=F(...e.map(i=>i.bottom));return{x:t,y:n,width:r-t,height:o-n}}function Ot(e){const t=e.slice().sort((o,i)=>o.y-i.y),n=[];let r=null;for(let o=0;o<t.length;o++){const i=t[o];!r||i.y-r.y>r.height/2?n.push([i]):n[n.length-1].push(i),r=i}return n.map(o=>ne(et(o)))}const _n=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:n,elements:r,rects:o,platform:i,strategy:s}=t,{padding:l=2,x:c,y:u}=z(e,t),p=Array.from(await(i.getClientRects==null?void 0:i.getClientRects(r.reference))||[]),a=Ot(p),d=ne(et(p)),f=Te(l);function h(){if(a.length===2&&a[0].left>a[1].right&&c!=null&&u!=null)return a.find(v=>c>v.left-f.left&&c<v.right+f.right&&u>v.top-f.top&&u<v.bottom+f.bottom)||d;if(a.length>=2){if(ee(n)==="y"){const O=a[0],L=a[a.length-1],M=W(n)==="top",A=O.top,x=L.bottom,P=M?O.left:L.left,T=M?O.right:L.right,k=T-P,S=x-A;return{top:A,bottom:x,left:P,right:T,width:k,height:S,x:P,y:A}}const v=W(n)==="left",y=F(...a.map(O=>O.right)),w=N(...a.map(O=>O.left)),C=a.filter(O=>v?O.left===w:O.right===y),E=C[0].top,b=C[C.length-1].bottom,R=w,D=y,_=D-R,I=b-E;return{top:E,bottom:b,left:R,right:D,width:_,height:I,x:R,y:E}}return d}const g=await i.getElementRects({reference:{getBoundingClientRect:h},floating:r.floating,strategy:s});return o.reference.x!==g.reference.x||o.reference.y!==g.reference.y||o.reference.width!==g.reference.width||o.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};async function At(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=W(n),l=ie(n),c=ee(n)==="y",u=["left","top"].includes(s)?-1:1,p=i&&c?-1:1,a=z(t,e);let{mainAxis:d,crossAxis:f,alignmentAxis:h}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return l&&typeof h=="number"&&(f=l==="end"?h*-1:h),c?{x:f*p,y:d*u}:{x:d*u,y:f*p}}const In=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await At(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},kn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:y,y:w}=v;return{x:y,y:w}}},...c}=z(e,t),u={x:n,y:r},p=await Le(t,c),a=ee(W(o)),d=Pe(a);let f=u[d],h=u[a];if(i){const v=d==="y"?"top":"left",y=d==="y"?"bottom":"right",w=f+p[v],C=f-p[y];f=Ee(w,f,C)}if(s){const v=a==="y"?"top":"left",y=a==="y"?"bottom":"right",w=h+p[v],C=h-p[y];h=Ee(w,h,C)}const g=l.fn({...t,[d]:f,[a]:h});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Fn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=z(e,t),p={x:n,y:r},a=ee(o),d=Pe(a);let f=p[d],h=p[a];const g=z(l,t),v=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const C=d==="y"?"height":"width",E=i.reference[d]-i.floating[C]+v.mainAxis,b=i.reference[d]+i.reference[C]-v.mainAxis;f<E?f=E:f>b&&(f=b)}if(u){var y,w;const C=d==="y"?"width":"height",E=["top","left"].includes(W(o)),b=i.reference[a]-i.floating[C]+(E&&((y=s.offset)==null?void 0:y[a])||0)+(E?0:v.crossAxis),R=i.reference[a]+i.reference[C]+(E?0:((w=s.offset)==null?void 0:w[a])||0)-(E?v.crossAxis:0);h<b?h=b:h>R&&(h=R)}return{[d]:f,[a]:h}}}},Bn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...l}=z(e,t),c=await Le(t,l),u=W(n),p=ie(n),a=ee(n)==="y",{width:d,height:f}=r.floating;let h,g;u==="top"||u==="bottom"?(h=u,g=p===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=u,h=p==="end"?"top":"bottom");const v=f-c[h],y=d-c[g],w=!t.middlewareData.shift;let C=v,E=y;if(a){const R=d-c.left-c.right;E=p||w?N(y,R):R}else{const R=f-c.top-c.bottom;C=p||w?N(v,R):R}if(w&&!p){const R=F(c.left,0),D=F(c.right,0),_=F(c.top,0),I=F(c.bottom,0);a?E=d-2*(R!==0||D!==0?R+D:F(c.left,c.right)):C=f-2*(_!==0||I!==0?_+I:F(c.top,c.bottom))}await s({...t,availableWidth:E,availableHeight:C});const b=await o.getDimensions(i.floating);return d!==b.width||f!==b.height?{reset:{rects:!0}}:{}}}};function J(e){return tt(e)?(e.nodeName||"").toLowerCase():"#document"}function $(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function K(e){var t;return(t=(tt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tt(e){return e instanceof Node||e instanceof $(e).Node}function Y(e){return e instanceof Element||e instanceof $(e).Element}function X(e){return e instanceof HTMLElement||e instanceof $(e).HTMLElement}function Ve(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $(e).ShadowRoot}function ce(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Tt(e){return["table","td","th"].includes(J(e))}function Se(e){const t=Me(),n=H(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Lt(e){let t=re(e);for(;X(t)&&!ve(t);){if(Se(t))return t;t=re(t)}return null}function Me(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ve(e){return["html","body","#document"].includes(J(e))}function H(e){return $(e).getComputedStyle(e)}function we(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function re(e){if(J(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ve(e)&&e.host||K(e);return Ve(t)?t.host:t}function nt(e){const t=re(e);return ve(t)?e.ownerDocument?e.ownerDocument.body:e.body:X(t)&&ce(t)?t:nt(t)}function Q(e,t){var n;t===void 0&&(t=[]);const r=nt(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=$(r);return o?t.concat(i,i.visualViewport||[],ce(r)?r:[]):t.concat(r,Q(r))}function rt(e){const t=H(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=X(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,l=pe(n)!==i||pe(r)!==s;return l&&(n=i,r=s),{width:n,height:r,$:l}}function De(e){return Y(e)?e:e.contextElement}function te(e){const t=De(e);if(!X(t))return q(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=rt(t);let s=(i?pe(n.width):n.width)/r,l=(i?pe(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const St=q(0);function ot(e){const t=$(e);return!Me()||!t.visualViewport?St:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Mt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$(e)?!1:t}function Z(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=De(e);let s=q(1);t&&(r?Y(r)&&(s=te(r)):s=te(e));const l=Mt(i,n,r)?ot(i):q(0);let c=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,p=o.width/s.x,a=o.height/s.y;if(i){const d=$(i),f=r&&Y(r)?$(r):r;let h=d.frameElement;for(;h&&r&&f!==d;){const g=te(h),v=h.getBoundingClientRect(),y=H(h),w=v.left+(h.clientLeft+parseFloat(y.paddingLeft))*g.x,C=v.top+(h.clientTop+parseFloat(y.paddingTop))*g.y;c*=g.x,u*=g.y,p*=g.x,a*=g.y,c+=w,u+=C,h=$(h).frameElement}}return ne({width:p,height:a,x:c,y:u})}function Dt(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=X(n),i=K(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0},l=q(1);const c=q(0);if((o||!o&&r!=="fixed")&&((J(n)!=="body"||ce(i))&&(s=we(n)),X(n))){const u=Z(n);l=te(n),c.x=u.x+n.clientLeft,c.y=u.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+c.x,y:t.y*l.y-s.scrollTop*l.y+c.y}}function _t(e){return Array.from(e.getClientRects())}function it(e){return Z(K(e)).left+we(e).scrollLeft}function It(e){const t=K(e),n=we(e),r=e.ownerDocument.body,o=F(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=F(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+it(e);const l=-n.scrollTop;return H(r).direction==="rtl"&&(s+=F(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:l}}function kt(e,t){const n=$(e),r=K(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,l=0,c=0;if(o){i=o.width,s=o.height;const u=Me();(!u||u&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:i,height:s,x:l,y:c}}function Ft(e,t){const n=Z(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=X(e)?te(e):q(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:s,height:l,x:c,y:u}}function He(e,t,n){let r;if(t==="viewport")r=kt(e,n);else if(t==="document")r=It(K(e));else if(Y(t))r=Ft(t,n);else{const o=ot(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return ne(r)}function st(e,t){const n=re(e);return n===t||!Y(n)||ve(n)?!1:H(n).position==="fixed"||st(n,t)}function Bt(e,t){const n=t.get(e);if(n)return n;let r=Q(e).filter(l=>Y(l)&&J(l)!=="body"),o=null;const i=H(e).position==="fixed";let s=i?re(e):e;for(;Y(s)&&!ve(s);){const l=H(s),c=Se(s);!c&&l.position==="fixed"&&(o=null),(i?!c&&!o:!c&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||ce(s)&&!c&&st(e,s))?r=r.filter(p=>p!==s):o=l,s=re(s)}return t.set(e,r),r}function $t(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Bt(t,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,p)=>{const a=He(t,p,o);return u.top=F(a.top,u.top),u.right=N(a.right,u.right),u.bottom=N(a.bottom,u.bottom),u.left=F(a.left,u.left),u},He(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Vt(e){return rt(e)}function Ht(e,t,n){const r=X(t),o=K(t),i=n==="fixed",s=Z(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=q(0);if(r||!r&&!i)if((J(t)!=="body"||ce(o))&&(l=we(t)),r){const u=Z(t,!0,i,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else o&&(c.x=it(o));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function Ne(e,t){return!X(e)||H(e).position==="fixed"?null:t?t(e):e.offsetParent}function ct(e,t){const n=$(e);if(!X(e))return n;let r=Ne(e,t);for(;r&&Tt(r)&&H(r).position==="static";)r=Ne(r,t);return r&&(J(r)==="html"||J(r)==="body"&&H(r).position==="static"&&!Se(r))?n:r||Lt(e)||n}const Nt=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||ct,i=this.getDimensions;return{reference:Ht(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function Wt(e){return H(e).direction==="rtl"}const jt={convertOffsetParentRelativeRectToViewportRelativeRect:Dt,getDocumentElement:K,getClippingRect:$t,getOffsetParent:ct,getElementRects:Nt,getClientRects:_t,getDimensions:Vt,getScale:te,isElement:Y,isRTL:Wt};function Xt(e,t){let n=null,r;const o=K(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:u,top:p,width:a,height:d}=e.getBoundingClientRect();if(l||t(),!a||!d)return;const f=ue(p),h=ue(o.clientWidth-(u+a)),g=ue(o.clientHeight-(p+d)),v=ue(u),w={rootMargin:-f+"px "+-h+"px "+-g+"px "+-v+"px",threshold:F(0,N(1,c))||1};let C=!0;function E(b){const R=b[0].intersectionRatio;if(R!==c){if(!C)return s();R?s(!1,R):r=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{n=new IntersectionObserver(E,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(E,w)}n.observe(e)}return s(!0),i}function zt(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=De(e),p=o||i?[...u?Q(u):[],...Q(t)]:[];p.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const a=u&&l?Xt(u,n):null;let d=-1,f=null;s&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{f&&f.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let h,g=c?Z(e):null;c&&v();function v(){const y=Z(e);g&&(y.x!==g.x||y.y!==g.y||y.width!==g.width||y.height!==g.height)&&n(),g=y,h=requestAnimationFrame(v)}return n(),()=>{p.forEach(y=>{o&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),a&&a(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(h)}}const Yt=(e,t,n)=>{const r=new Map,o={platform:jt,...n},i={...o.platform,_c:r};return Pt(e,t,{...o,platform:i})},$n=e=>{const{element:t,padding:n}=e;function r(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return r(t)?t.current!=null?$e({element:t.current,padding:n}).fn(o):{}:t?$e({element:t,padding:n}).fn(o):{}}}};var ae=typeof document<"u"?m.useLayoutEffect:m.useEffect;function he(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!he(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!he(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function We(e){const t=m.useRef(e);return ae(()=>{t.current=e}),t}function Kt(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,whileElementsMounted:i,open:s}=e,[l,c]=m.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[u,p]=m.useState(r);he(u,r)||p(r);const a=m.useRef(null),d=m.useRef(null),f=m.useRef(l),h=We(i),g=We(o),[v,y]=m.useState(null),[w,C]=m.useState(null),E=m.useCallback(O=>{a.current!==O&&(a.current=O,y(O))},[]),b=m.useCallback(O=>{d.current!==O&&(d.current=O,C(O))},[]),R=m.useCallback(()=>{if(!a.current||!d.current)return;const O={placement:t,strategy:n,middleware:u};g.current&&(O.platform=g.current),Yt(a.current,d.current,O).then(L=>{const M={...L,isPositioned:!0};D.current&&!he(f.current,M)&&(f.current=M,gt.flushSync(()=>{c(M)}))})},[u,t,n,g]);ae(()=>{s===!1&&f.current.isPositioned&&(f.current.isPositioned=!1,c(O=>({...O,isPositioned:!1})))},[s]);const D=m.useRef(!1);ae(()=>(D.current=!0,()=>{D.current=!1}),[]),ae(()=>{if(v&&w){if(h.current)return h.current(v,w,R);R()}},[v,w,R,h]);const _=m.useMemo(()=>({reference:a,floating:d,setReference:E,setFloating:b}),[E,b]),I=m.useMemo(()=>({reference:v,floating:w}),[v,w]);return m.useMemo(()=>({...l,update:R,refs:_,elements:I,reference:E,floating:b}),[l,R,_,I,E,b])}var oe=typeof document<"u"?m.useLayoutEffect:m.useEffect;let xe=!1,Ut=0;const je=()=>"floating-ui-"+Ut++;function Gt(){const[e,t]=m.useState(()=>xe?je():void 0);return oe(()=>{e==null&&t(je())},[]),m.useEffect(()=>{xe||(xe=!0)},[]),e}const qt=Ze["useId".toString()],Xe=qt||Gt;function Jt(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){e.set(t,(e.get(t)||[]).filter(r=>r!==n))}}}const Qt=m.createContext(null),Zt=m.createContext(null),lt=()=>{var e;return((e=m.useContext(Qt))==null?void 0:e.id)||null},_e=()=>m.useContext(Zt);function G(e){return(e==null?void 0:e.ownerDocument)||document}function en(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function tn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Ie(e){return G(e).defaultView||window}function j(e){return e?e instanceof Ie(e).Element:!1}function ut(e){return e?e instanceof Ie(e).HTMLElement:!1}function nn(e){if(typeof ShadowRoot>"u")return!1;const t=Ie(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function rn(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(en())||t.test(tn()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function on(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function ft(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function ze(e){const t=m.useRef(e);return oe(()=>{t.current=e}),t}const Ye="data-floating-ui-safe-polygon";function de(e,t,n){return n&&!ft(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}const Vn=function(e,t){let{enabled:n=!0,delay:r=0,handleClose:o=null,mouseOnly:i=!1,restMs:s=0,move:l=!0}=t===void 0?{}:t;const{open:c,onOpenChange:u,dataRef:p,events:a,elements:{domReference:d,floating:f},refs:h}=e,g=_e(),v=lt(),y=ze(o),w=ze(r),C=m.useRef(),E=m.useRef(),b=m.useRef(),R=m.useRef(),D=m.useRef(!0),_=m.useRef(!1),I=m.useRef(()=>{}),O=m.useCallback(()=>{var x;const P=(x=p.current.openEvent)==null?void 0:x.type;return(P==null?void 0:P.includes("mouse"))&&P!=="mousedown"},[p]);m.useEffect(()=>{if(!n)return;function x(){clearTimeout(E.current),clearTimeout(R.current),D.current=!0}return a.on("dismiss",x),()=>{a.off("dismiss",x)}},[n,a]),m.useEffect(()=>{if(!n||!y.current||!c)return;function x(){O()&&u(!1)}const P=G(f).documentElement;return P.addEventListener("mouseleave",x),()=>{P.removeEventListener("mouseleave",x)}},[f,c,u,n,y,p,O]);const L=m.useCallback(function(x){x===void 0&&(x=!0);const P=de(w.current,"close",C.current);P&&!b.current?(clearTimeout(E.current),E.current=setTimeout(()=>u(!1),P)):x&&(clearTimeout(E.current),u(!1))},[w,u]),M=m.useCallback(()=>{I.current(),b.current=void 0},[]),A=m.useCallback(()=>{if(_.current){const x=G(h.floating.current).body;x.style.pointerEvents="",x.removeAttribute(Ye),_.current=!1}},[h]);return m.useEffect(()=>{if(!n)return;function x(){return p.current.openEvent?["click","mousedown"].includes(p.current.openEvent.type):!1}function P(S){if(clearTimeout(E.current),D.current=!1,i&&!ft(C.current)||s>0&&de(w.current,"open")===0)return;p.current.openEvent=S;const B=de(w.current,"open",C.current);B?E.current=setTimeout(()=>{u(!0)},B):u(!0)}function T(S){if(x())return;I.current();const B=G(f);if(clearTimeout(R.current),y.current){c||clearTimeout(E.current),b.current=y.current({...e,tree:g,x:S.clientX,y:S.clientY,onClose(){A(),M(),L()}});const V=b.current;B.addEventListener("mousemove",V),I.current=()=>{B.removeEventListener("mousemove",V)};return}L()}function k(S){x()||y.current==null||y.current({...e,tree:g,x:S.clientX,y:S.clientY,onClose(){A(),M(),L()}})(S)}if(j(d)){const S=d;return c&&S.addEventListener("mouseleave",k),f==null||f.addEventListener("mouseleave",k),l&&S.addEventListener("mousemove",P,{once:!0}),S.addEventListener("mouseenter",P),S.addEventListener("mouseleave",T),()=>{c&&S.removeEventListener("mouseleave",k),f==null||f.removeEventListener("mouseleave",k),l&&S.removeEventListener("mousemove",P),S.removeEventListener("mouseenter",P),S.removeEventListener("mouseleave",T)}}},[d,f,n,e,i,s,l,L,M,A,u,c,g,w,y,p]),oe(()=>{var x;if(n&&c&&(x=y.current)!=null&&x.__options.blockPointerEvents&&O()){const k=G(f).body;if(k.setAttribute(Ye,""),k.style.pointerEvents="none",_.current=!0,j(d)&&f){var P,T;const S=d,B=g==null||(P=g.nodesRef.current.find(V=>V.id===v))==null||(T=P.context)==null?void 0:T.elements.floating;return B&&(B.style.pointerEvents=""),S.style.pointerEvents="auto",f.style.pointerEvents="auto",()=>{S.style.pointerEvents="",f.style.pointerEvents=""}}}},[n,c,v,f,d,g,y,p,O]),oe(()=>{c||(C.current=void 0,M(),A())},[c,M,A]),m.useEffect(()=>()=>{M(),clearTimeout(E.current),clearTimeout(R.current),A()},[n,M,A]),m.useMemo(()=>{if(!n)return{};function x(P){C.current=P.pointerType}return{reference:{onPointerDown:x,onPointerEnter:x,onMouseMove(){c||s===0||(clearTimeout(R.current),R.current=setTimeout(()=>{D.current||u(!0)},s))}},floating:{onMouseEnter(){clearTimeout(E.current)},onMouseLeave(){a.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),L(!1)}}}},[a,n,s,c,u,L])},at=m.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:()=>{},setState:()=>{},isInstantPhase:!1}),sn=()=>m.useContext(at),Hn=e=>{let{children:t,delay:n,timeoutMs:r=0}=e;const[o,i]=m.useReducer((c,u)=>({...c,...u}),{delay:n,timeoutMs:r,initialDelay:n,currentId:null,isInstantPhase:!1}),s=m.useRef(null),l=m.useCallback(c=>{i({currentId:c})},[]);return oe(()=>{o.currentId?s.current===null?s.current=o.currentId:i({isInstantPhase:!0}):(i({isInstantPhase:!1}),s.current=null)},[o.currentId]),m.createElement(at.Provider,{value:m.useMemo(()=>({...o,setState:i,setCurrentId:l}),[o,i,l])},t)},Nn=(e,t)=>{let{open:n,onOpenChange:r}=e,{id:o}=t;const{currentId:i,setCurrentId:s,initialDelay:l,setState:c,timeoutMs:u}=sn();m.useEffect(()=>{i&&(c({delay:{open:1,close:de(l,"close")}}),i!==o&&r(!1))},[o,r,c,i,l]),m.useEffect(()=>{function p(){r(!1),c({delay:l,currentId:null})}if(!n&&i===o)if(u){const a=window.setTimeout(p,u);return()=>{clearTimeout(a)}}else p()},[n,c,i,o,r,l,u]),m.useEffect(()=>{n&&s(o)},[n,s,o])};function cn(e){let t=e.activeElement;for(;((n=t)==null||(r=n.shadowRoot)==null?void 0:r.activeElement)!=null;){var n,r;t=t.shadowRoot.activeElement}return t}function Ke(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&nn(n)){let r=t;do{if(r&&e===r)return!0;r=r.parentNode||r.host}while(r)}return!1}function be(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)})||[],r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(s=>{var l;return o.parentId===s.id&&((l=o.context)==null?void 0:l.open)})})||[],n=n.concat(r);return n}function ln(e){return"composedPath"in e?e.composedPath()[0]:e.target}const un=Ze["useInsertionEffect".toString()],fn=un||(e=>e());function dt(e){const t=m.useRef(()=>{});return fn(()=>{t.current=e}),m.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function me(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const an={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},dn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},mn=function(e){var t,n;return e===void 0&&(e=!0),{escapeKeyBubbles:typeof e=="boolean"?e:(t=e.escapeKey)!=null?t:!0,outsidePressBubbles:typeof e=="boolean"?e:(n=e.outsidePress)!=null?n:!0}},Wn=function(e,t){let{open:n,onOpenChange:r,events:o,nodeId:i,elements:{reference:s,domReference:l,floating:c},dataRef:u}=e,{enabled:p=!0,escapeKey:a=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:g="pointerdown",ancestorScroll:v=!1,bubbles:y=!0}=t===void 0?{}:t;const w=_e(),C=lt()!=null,E=dt(typeof d=="function"?d:()=>!1),b=typeof d=="function"?E:d,R=m.useRef(!1),{escapeKeyBubbles:D,outsidePressBubbles:_}=mn(y);return m.useEffect(()=>{if(!n||!p)return;u.current.__escapeKeyBubbles=D,u.current.__outsidePressBubbles=_;function I(x){if(x.key==="Escape"){const P=w?be(w.nodesRef.current,i):[];if(P.length>0){let T=!0;if(P.forEach(k=>{var S;if((S=k.context)!=null&&S.open&&!k.context.dataRef.current.__escapeKeyBubbles){T=!1;return}}),!T)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function O(x){const P=R.current;if(R.current=!1,P||typeof b=="function"&&!b(x))return;const T=ln(x);if(ut(T)&&c){const B=c.ownerDocument.defaultView||window,V=T.scrollWidth>T.clientWidth,se=T.scrollHeight>T.clientHeight;let ke=se&&x.offsetX>T.clientWidth;if(se&&B.getComputedStyle(T).direction==="rtl"&&(ke=x.offsetX<=T.offsetWidth-T.clientWidth),ke||V&&x.offsetY>T.clientHeight)return}const k=w&&be(w.nodesRef.current,i).some(B=>{var V;return me(x,(V=B.context)==null?void 0:V.elements.floating)});if(me(x,c)||me(x,l)||k)return;const S=w?be(w.nodesRef.current,i):[];if(S.length>0){let B=!0;if(S.forEach(V=>{var se;if((se=V.context)!=null&&se.open&&!V.context.dataRef.current.__outsidePressBubbles){B=!1;return}}),!B)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:C?{preventScroll:!0}:rn(x)||on(x)}}),r(!1)}function L(){r(!1)}const M=G(c);a&&M.addEventListener("keydown",I),b&&M.addEventListener(f,O);let A=[];return v&&(j(l)&&(A=Q(l)),j(c)&&(A=A.concat(Q(c))),!j(s)&&s&&s.contextElement&&(A=A.concat(Q(s.contextElement)))),A=A.filter(x=>{var P;return x!==((P=M.defaultView)==null?void 0:P.visualViewport)}),A.forEach(x=>{x.addEventListener("scroll",L,{passive:!0})}),()=>{a&&M.removeEventListener("keydown",I),b&&M.removeEventListener(f,O),A.forEach(x=>{x.removeEventListener("scroll",L)})}},[u,c,l,s,a,b,f,o,w,i,n,r,v,p,D,_,C]),m.useEffect(()=>{R.current=!1},[b,f]),m.useMemo(()=>p?{reference:{[an[g]]:()=>{h&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[dn[f]]:()=>{R.current=!0}}}:{},[p,o,h,f,g,r])},jn=function(e,t){let{open:n,onOpenChange:r,dataRef:o,events:i,refs:s,elements:{floating:l,domReference:c}}=e,{enabled:u=!0,keyboardOnly:p=!0}=t===void 0?{}:t;const a=m.useRef(""),d=m.useRef(!1),f=m.useRef();return m.useEffect(()=>{if(!u)return;const g=G(l).defaultView||window;function v(){!n&&ut(c)&&c===cn(G(c))&&(d.current=!0)}return g.addEventListener("blur",v),()=>{g.removeEventListener("blur",v)}},[l,c,n,u]),m.useEffect(()=>{if(!u)return;function h(g){(g.type==="referencePress"||g.type==="escapeKey")&&(d.current=!0)}return i.on("dismiss",h),()=>{i.off("dismiss",h)}},[i,u]),m.useEffect(()=>()=>{clearTimeout(f.current)},[]),m.useMemo(()=>u?{reference:{onPointerDown(h){let{pointerType:g}=h;a.current=g,d.current=!!(g&&p)},onMouseLeave(){d.current=!1},onFocus(h){var g;d.current||h.type==="focus"&&((g=o.current.openEvent)==null?void 0:g.type)==="mousedown"&&o.current.openEvent&&me(o.current.openEvent,c)||(o.current.openEvent=h.nativeEvent,r(!0))},onBlur(h){d.current=!1;const g=h.relatedTarget,v=j(g)&&g.hasAttribute("data-floating-ui-focus-guard")&&g.getAttribute("data-type")==="outside";f.current=setTimeout(()=>{Ke(s.floating.current,g)||Ke(c,g)||v||r(!1)})}}}:{},[u,p,c,s,o,r])},Xn=function(e,t){let{open:n}=e,{enabled:r=!0,role:o="dialog"}=t===void 0?{}:t;const i=Xe(),s=Xe();return m.useMemo(()=>{const l={id:i,role:o};return r?o==="tooltip"?{reference:{"aria-describedby":n?i:void 0},floating:l}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":o==="alertdialog"?"dialog":o,"aria-controls":n?i:void 0,...o==="listbox"&&{role:"combobox"},...o==="menu"&&{id:s}},floating:{...l,...o==="menu"&&{"aria-labelledby":s}}}:{}},[r,o,n,i,s])};function zn(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,o=Kt(e),i=_e(),s=m.useRef(null),l=m.useRef({}),c=m.useState(()=>Jt())[0],[u,p]=m.useState(null),a=m.useCallback(y=>{const w=j(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;o.refs.setReference(w)},[o.refs]),d=m.useCallback(y=>{(j(y)||y===null)&&(s.current=y,p(y)),(j(o.refs.reference.current)||o.refs.reference.current===null||y!==null&&!j(y))&&o.refs.setReference(y)},[o.refs]),f=m.useMemo(()=>({...o.refs,setReference:d,setPositionReference:a,domReference:s}),[o.refs,d,a]),h=m.useMemo(()=>({...o.elements,domReference:u}),[o.elements,u]),g=dt(n),v=m.useMemo(()=>({...o,refs:f,elements:h,dataRef:l,nodeId:r,events:c,open:t,onOpenChange:g}),[o,r,c,t,g,f,h]);return oe(()=>{const y=i==null?void 0:i.nodesRef.current.find(w=>w.id===r);y&&(y.context=v)}),m.useMemo(()=>({...o,context:v,refs:f,reference:d,positionReference:a}),[o,f,v,d,a])}function Re(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,i)=>(i&&Object.entries(i).forEach(s=>{let[l,c]=s;if(l.indexOf("on")===0){if(r.has(l)||r.set(l,[]),typeof c=="function"){var u;(u=r.get(l))==null||u.push(c),o[l]=function(){for(var p,a=arguments.length,d=new Array(a),f=0;f<a;f++)d[f]=arguments[f];(p=r.get(l))==null||p.forEach(h=>h(...d))}}}else o[l]=c}),o),{})}}const Yn=function(e){e===void 0&&(e=[]);const t=e,n=m.useCallback(i=>Re(i,e,"reference"),t),r=m.useCallback(i=>Re(i,e,"floating"),t),o=m.useCallback(i=>Re(i,e,"item"),e.map(i=>i==null?void 0:i.item));return m.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o}),[n,r,o])};function Kn({opened:e,floating:t,position:n,positionDependencies:r}){const[o,i]=m.useState(0);m.useEffect(()=>{if(t.refs.reference.current&&t.refs.floating.current)return zt(t.refs.reference.current,t.refs.floating.current,t.update)},[t.refs.reference.current,t.refs.floating.current,e,o,n]),Fe(()=>{t.update()},r),Fe(()=>{i(s=>s+1)},[e])}var pn=Object.defineProperty,gn=Object.defineProperties,hn=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,yn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable,Ge=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))yn.call(t,n)&&Ge(e,n,t[n]);if(Ue)for(var n of Ue(t))vn.call(t,n)&&Ge(e,n,t[n]);return e},fe=(e,t)=>gn(e,hn(t));function qe(e,t,n,r){return e==="center"||r==="center"?{top:t}:e==="end"?{bottom:n}:e==="start"?{top:n}:{}}function Je(e,t,n,r,o){return e==="center"||r==="center"?{left:t}:e==="end"?{[o==="ltr"?"right":"left"]:n}:e==="start"?{[o==="ltr"?"left":"right"]:n}:{}}const wn={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function xn({position:e,arrowSize:t,arrowOffset:n,arrowRadius:r,arrowPosition:o,arrowX:i,arrowY:s,dir:l}){const[c,u="center"]=e.split("-"),p={width:le(t),height:le(t),transform:"rotate(45deg)",position:"absolute",[wn[c]]:le(r)},a=le(-t/2);return c==="left"?fe(U(U({},p),qe(u,s,n,o)),{right:a,borderLeftColor:"transparent",borderBottomColor:"transparent"}):c==="right"?fe(U(U({},p),qe(u,s,n,o)),{left:a,borderRightColor:"transparent",borderTopColor:"transparent"}):c==="top"?fe(U(U({},p),Je(u,i,n,o,l)),{bottom:a,borderTopColor:"transparent",borderLeftColor:"transparent"}):c==="bottom"?fe(U(U({},p),Je(u,i,n,o,l)),{top:a,borderBottomColor:"transparent",borderRightColor:"transparent"}):{}}var bn=Object.defineProperty,Rn=Object.defineProperties,En=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Qe=(e,t,n)=>t in e?bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cn=(e,t)=>{for(var n in t||(t={}))mt.call(t,n)&&Qe(e,n,t[n]);if(ye)for(var n of ye(t))pt.call(t,n)&&Qe(e,n,t[n]);return e},Pn=(e,t)=>Rn(e,En(t)),On=(e,t)=>{var n={};for(var r in e)mt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ye)for(var r of ye(e))t.indexOf(r)<0&&pt.call(e,r)&&(n[r]=e[r]);return n};const An=m.forwardRef((e,t)=>{var n=e,{position:r,arrowSize:o,arrowOffset:i,arrowRadius:s,arrowPosition:l,visible:c,arrowX:u,arrowY:p}=n,a=On(n,["position","arrowSize","arrowOffset","arrowRadius","arrowPosition","visible","arrowX","arrowY"]);const d=ht();return c?yt.createElement("div",Pn(Cn({},a),{ref:t,style:xn({position:r,arrowSize:o,arrowOffset:i,arrowRadius:s,arrowPosition:l,dir:d.dir,arrowX:u,arrowY:p})})):null});An.displayName="@mantine/core/FloatingArrow";function Un(e,t){if(e==="rtl"&&(t.includes("right")||t.includes("left"))){const[n,r]=t.split("-"),o=n==="right"?"left":"right";return r===void 0?o:`${o}-${r}`}return t}export{An as F,zn as a,Kn as b,kn as c,$n as d,Un as e,Dn as f,Sn as g,Hn as h,_n as i,Q as j,sn as k,Fn as l,Yn as m,Vn as n,In as o,jn as p,Xn as q,Wn as r,Bn as s,Nn as t,Mn as u};