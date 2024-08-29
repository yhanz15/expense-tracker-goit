"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[367],{2740:e=>{e.exports=function(e,t,r,n,s,i,o,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,s,i,o,a],p=0;(l=new Error(t.replace(/%s/g,(function(){return c[p++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},9367:(e,t,r)=>{r.d(t,{mg:()=>X,vd:()=>Y});var n=r(5043),s=r(6366),i=r.n(s),o=r(2740),a=r.n(o),l=r(7324),c=r.n(l),p=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(p||{}),u={rel:["amphtml","canonical","alternate"]},d={type:["application/ld+json"]},h={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},m=Object.values(p),y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},f=Object.entries(y).reduce(((e,t)=>{let[r,n]=t;return e[n]=r,e}),{}),g="data-rh",T="defaultTitle",b="defer",A="encodeSpecialCharacters",C="onChangeClientState",w="titleTemplate",x="prioritizeSeoTags",O=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},k=e=>{let t=O(e,"title");const r=O(e,w);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(()=>t));const n=O(e,T);return t||n||void 0},$=e=>O(e,C)||(()=>{}),v=(e,t)=>t.filter((t=>"undefined"!==typeof t[e])).map((t=>t[e])).reduce(((e,t)=>({...e,...t})),{}),S=(e,t)=>t.filter((e=>"undefined"!==typeof e.base)).map((e=>e.base)).reverse().reduce(((t,r)=>{if(!t.length){const n=Object.keys(r);for(let s=0;s<n.length;s+=1){const i=n[s].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}}return t}),[]),E=(e,t,r)=>{const n={};return r.filter((t=>{return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&(r=`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`,console&&"function"===typeof console.warn&&console.warn(r)),!1);var r})).map((t=>t[e])).reverse().reduce(((e,r)=>{const s={};r.filter((e=>{let r;const i=Object.keys(e);for(let n=0;n<i.length;n+=1){const s=i[n],o=s.toLowerCase();-1===t.indexOf(o)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===o&&"stylesheet"===e[o].toLowerCase()||(r=o),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;const o=e[r].toLowerCase();return n[r]||(n[r]={}),s[r]||(s[r]={}),!n[r][o]&&(s[r][o]=!0,!0)})).reverse().forEach((t=>e.push(t)));const i=Object.keys(s);for(let t=0;t<i.length;t+=1){const e=i[t],r={...n[e],...s[e]};n[e]=r}return e}),[]).reverse()},M=(e,t)=>{if(Array.isArray(e)&&e.length)for(let r=0;r<e.length;r+=1){if(e[r][t])return!0}return!1},j=e=>Array.isArray(e)?e.join(""):e,L=(e,t)=>Array.isArray(e)?e.reduce(((e,r)=>(((e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1})(r,t)?e.priority.push(r):e.default.push(r),e)),{priority:[],default:[]}):{default:e,priority:[]},D=(e,t)=>({...e,[t]:void 0}),H=["noscript","script","style"],P=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},I=e=>Object.keys(e).reduce(((t,r)=>{const n="undefined"!==typeof e[r]?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n}),""),U=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(((t,r)=>(t[y[r]||r]=e[r],t)),t)},N=(e,t)=>t.map(((t,r)=>{const s={key:r,[g]:!0};return Object.keys(t).forEach((e=>{const r=y[e]||e;if("innerHTML"===r||"cssText"===r){const e=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:e}}else s[r]=t[e]})),n.createElement(e,s)})),q=function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(e){case"title":return{toComponent:()=>((e,t,r)=>{const s=U(r,{key:t,[g]:!0});return[n.createElement("title",s,t)]})(0,t.title,t.titleAttributes),toString:()=>((e,t,r,n)=>{const s=I(r),i=j(t);return s?`<${e} ${g}="true" ${s}>${P(i,n)}</${e}>`:`<${e} ${g}="true">${P(i,n)}</${e}>`})(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>U(t),toString:()=>I(t)};default:return{toComponent:()=>N(e,t),toString:()=>function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce(((t,n)=>{const s=n,i=Object.keys(s).filter((e=>!("innerHTML"===e||"cssText"===e))).reduce(((e,t)=>{const n="undefined"===typeof s[t]?t:`${t}="${P(s[t],r)}"`;return e?`${e} ${n}`:n}),""),o=s.innerHTML||s.cssText||"",a=-1===H.indexOf(e);return`${t}<${e} ${g}="true" ${i}${a?"/>":`>${o}</${e}>`}`}),"")}(e,t,r)}}},R=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:s,noscriptTags:i,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:p,metaTags:m,scriptTags:y}=e,f={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:f,linkTags:p,metaTags:m,scriptTags:y}=(e=>{let{metaTags:t,linkTags:r,scriptTags:n,encode:s}=e;const i=L(t,h),o=L(r,u),a=L(n,d);return{priorityMethods:{toComponent:()=>[...N("meta",i.priority),...N("link",o.priority),...N("script",a.priority)],toString:()=>`${q("meta",i.priority,s)} ${q("link",o.priority,s)} ${q("script",a.priority,s)}`},metaTags:i.default,linkTags:o.default,scriptTags:a.default}})(e)),{priority:f,base:q("base",t,n),bodyAttributes:q("bodyAttributes",r,n),htmlAttributes:q("htmlAttributes",s,n),link:q("link",p,n),meta:q("meta",m,n),noscript:q("noscript",i,n),script:q("script",y,n),style:q("style",o,n),title:q("title",{title:a,titleAttributes:l},n)}},_=[],z=!("undefined"===typeof window||!window.document||!window.document.createElement),B=class{instances=[];canUseDOM=(()=>z)();context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?_:this.instances,add:e=>{(this.canUseDOM?_:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?_:this.instances).indexOf(e);(this.canUseDOM?_:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=R({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},F=n.createContext({}),Y=class e extends n.Component{static canUseDOM=(()=>z)();helmetData;constructor(t){super(t),this.helmetData=new B(this.props.context||{},e.canUseDOM)}render(){return n.createElement(F.Provider,{value:this.helmetData.value},this.props.children)}},K=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${g}]`),s=[].slice.call(n),i=[];let o;return t&&t.length&&t.forEach((t=>{const r=document.createElement(e);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))if("innerHTML"===e)r.innerHTML=t.innerHTML;else if("cssText"===e)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{const n=e,s="undefined"===typeof t[n]?"":t[n];r.setAttribute(e,s)}r.setAttribute(g,"true"),s.some(((e,t)=>(o=t,r.isEqualNode(e))))?s.splice(o,1):i.push(r)})),s.forEach((e=>e.parentNode?.removeChild(e))),i.forEach((e=>r.appendChild(e))),{oldTags:s,newTags:i}},G=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(g),s=n?n.split(","):[],i=[...s],o=Object.keys(t);for(const a of o){const e=t[a]||"";r.getAttribute(a)!==e&&r.setAttribute(a,e),-1===s.indexOf(a)&&s.push(a);const n=i.indexOf(a);-1!==n&&i.splice(n,1)}for(let a=i.length-1;a>=0;a-=1)r.removeAttribute(i[a]);s.length===i.length?r.removeAttribute(g):r.getAttribute(g)!==o.join(",")&&r.setAttribute(g,o.join(","))},V=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:p,title:u,titleAttributes:d}=e;G("body",n),G("html",s),((e,t)=>{"undefined"!==typeof e&&document.title!==e&&(document.title=j(e)),G("title",t)})(u,d);const h={baseTag:K("base",r),linkTags:K("link",i),metaTags:K("meta",o),noscriptTags:K("noscript",a),scriptTags:K("script",c),styleTags:K("style",p)},m={},y={};Object.keys(h).forEach((e=>{const{newTags:t,oldTags:r}=h[e];t.length&&(m[e]=t),r.length&&(y[e]=h[e].oldTags)})),t&&t(),l(e,m,y)},W=null,J=e=>{W&&cancelAnimationFrame(W),e.defer?W=requestAnimationFrame((()=>{V(e,(()=>{W=null}))})):(V(e),W=null)},Q=class extends n.Component{rendered=!1;shouldComponentUpdate(e){return!c()(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const n=(s=e.get().map((e=>{const t={...e.props};return delete t.context,t})),{baseTag:S(["href"],s),bodyAttributes:v("bodyAttributes",s),defer:O(s,b),encode:O(s,A),htmlAttributes:v("htmlAttributes",s),linkTags:E("link",["rel","href"],s),metaTags:E("meta",["name","charset","http-equiv","property","itemprop"],s),noscriptTags:E("noscript",["innerHTML"],s),onChangeClientState:$(s),scriptTags:E("script",["src","innerHTML"],s),styleTags:E("style",["cssText"],s),title:k(s),titleAttributes:v("titleAttributes",s),prioritizeSeoTags:M(s,x)});var s;Y.canUseDOM?J(n):R&&(r=R(n)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},X=class extends n.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!i()(D(this.props,"helmetData"),D(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach((t=>{r={...r,[t]:e[t]}})),r}warnOnInvalidChildren(e,t){return a()(m.some((t=>e.type===t)),"function"===typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${m.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),a()(!t||"string"===typeof t||Array.isArray(t)&&!t.some((e=>"string"!==typeof e)),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return n.Children.forEach(e,(e=>{if(!e||!e.props)return;const{children:n,...s}=e.props,i=Object.keys(s).reduce(((e,t)=>(e[f[t]||t]=s[t],e)),{});let{type:o}=e;switch("symbol"===typeof o?o=o.toString():this.warnOnInvalidChildren(e,n),o){case"Symbol(react.fragment)":t=this.mapChildrenToProps(n,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(e,r,i,n);break;default:t=this.mapObjectTypeChildren(e,t,i,n)}})),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:s}=t;if(e&&(r=this.mapChildrenToProps(e,r)),s&&!(s instanceof B)){s=new B(s.context,!0),delete r.helmetData}return s?n.createElement(Q,{...r,context:s.value}):n.createElement(F.Consumer,null,(e=>n.createElement(Q,{...r,context:e})))}}}}]);
//# sourceMappingURL=367.91adc271.chunk.js.map