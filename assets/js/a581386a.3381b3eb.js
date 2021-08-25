(self.webpackChunksocial_care_system=self.webpackChunksocial_care_system||[]).push([[872],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8058:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c=["components"],a={id:"introduction",title:"Introduction",slug:"/decisions"},s="Architecture Decision Records",u={unversionedId:"decisions/introduction",id:"decisions/introduction",isDocsHomePage:!1,title:"Introduction",description:"An architectural decision record (ADR) is a document that captures an important",source:"@site/docs/decisions/index.md",sourceDirName:"decisions",slug:"/decisions",permalink:"/social-care-architecture/decisions",editUrl:"https://github.com/LBHackney-IT/social-care-architecture/edit/main/docs/decisions/index.md",version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/decisions"},sidebar:"docs",previous:{title:"Process",permalink:"/social-care-architecture/process"},next:{title:"1. Record architecture decisions",permalink:"/social-care-architecture/decisions/record-architecture-decisions"}},l=[{value:"Tools",id:"tools",children:[]},{value:"Records",id:"records",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-decision-records"},"Architecture Decision Records"),(0,i.kt)("p",null,"An architectural decision record (ADR) is a document that captures an important\narchitectural decision made along with its context and consequences. Further\ninformation can be found on Michael Nygard's\n",(0,i.kt)("a",{parentName:"p",href:"https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions"},"blog"),"."),(0,i.kt)("p",null,"The records in this site:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Should be read in conjunction, and linked, with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-adrs"},"central Hackney IT ADR repository"),"."),(0,i.kt)("li",{parentName:"ul"},"The records defined here should document Social Care Tools ",(0,i.kt)("strong",{parentName:"li"},"specific variations")," from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-adrs"},"Hackney IT ADR decisions"),"."),(0,i.kt)("li",{parentName:"ul"},"Please ensure the Hackney Repository contains links to this repository.")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"ADRs are generated and maintained using Nat Pryce's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/npryce/adr-tools"},"adr-tools"),". As each ADR is plain text, they may be added without the tools - however the tools do help maintain consistency."),(0,i.kt)("h2",{id:"records"},"Records"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/decisions/record-architecture-decisions"},"1. Record architecture decisions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/decisions/use-iso-8601-format-for-dates"},"2. Use ISO 8601 format for dates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/decisions/prefer-open-source-software"},"3. Prefer open source software"))))}p.isMDXComponent=!0}}]);